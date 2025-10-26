import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Video, Users, Shield, Shuffle } from "lucide-react";
import Spline from "@splinetool/react-spline";

const ADJECTIVES = [
  "Witty",
  "Silent",
  "Cosmic",
  "Neon",
  "Velvet",
  "Luminous",
  "Electric",
  "Quantum",
  "Frosty",
  "Blissful",
];
const NOUNS = [
  "Panda",
  "Nova",
  "Falcon",
  "Pixel",
  "Echo",
  "Comet",
  "Lotus",
  "Nimbus",
  "Circuit",
  "Voyager",
];

export default function Hero({ onConnect, onSafeModeToggle, safeMode }) {
  const [interests, setInterests] = useState(["music", "tech", "fun"]);
  const [input, setInput] = useState("");
  const nickname = useMemo(() => {
    const a = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const n = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    return `${a} ${n}`;
  }, []);

  const addInterest = (tag) => {
    const clean = tag.trim().toLowerCase();
    if (!clean) return;
    if (!interests.includes(clean)) setInterests((t) => [...t, clean].slice(0, 6));
    setInput("");
  };

  const removeInterest = (tag) => setInterests((t) => t.filter((x) => x !== tag));

  return (
    <section id="connect" className="relative h-[72vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Meet the world, instantly.
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl">
              Connexa pairs you with people who share your vibe. Hop into text, video, or small group rooms — no sign up.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button onClick={() => onConnect("text")} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-medium shadow-lg hover:shadow-xl transition-shadow">
                <MessageSquare className="h-4 w-4" /> Connect
              </button>
              <button onClick={() => onConnect("video")} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-fuchsia-500/90 text-white border border-white/10 hover:bg-fuchsia-500">
                <Video className="h-4 w-4" /> Video
              </button>
              <button onClick={() => onConnect("group")} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/15">
                <Users className="h-4 w-4" /> Group
              </button>
              <button onClick={onSafeModeToggle} className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${safeMode ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-200" : "bg-white/10 border-white/10 text-white"}`}>
                <Shield className="h-4 w-4" /> Safe mode {safeMode ? "on" : "off"}
              </button>
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-white/60 mb-2">Interests</div>
              <div className="flex flex-wrap gap-2">
                {interests.map((t) => (
                  <motion.span key={t} whileHover={{ scale: 1.05 }} className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm border border-white/10">
                    #{t}
                    <button onClick={() => removeInterest(t)} className="opacity-60 group-hover:opacity-100">×</button>
                  </motion.span>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") addInterest(input);
                  }}
                  placeholder="Add an interest and press Enter"
                  className="w-full max-w-sm bg-white/10 text-white placeholder-white/60 px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
                />
                <button onClick={() => addInterest(input)} className="px-3 py-2 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/15">
                  Add
                </button>
                <button onClick={() => onConnect("smart")} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-black">
                  <Shuffle className="h-4 w-4" /> Smart Match
                </button>
              </div>

              <div className="mt-4 text-sm text-white/70">
                Your nickname for this session: <span className="font-medium text-white">{nickname}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="hidden md:block"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-white shadow-2xl">
              <div className="text-sm text-white/70">Live preview</div>
              <div className="mt-3 aspect-video w-full rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="text-white/80">“Finding someone for you…”</div>
                  <div className="mt-2 mx-auto h-1.5 w-40 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full w-1/3 bg-gradient-to-r from-white to-fuchsia-400"
                      animate={{ x: ["0%", "200%"] }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-white/70">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Connected</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-sky-400" /> Searching</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /> Disconnected</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
