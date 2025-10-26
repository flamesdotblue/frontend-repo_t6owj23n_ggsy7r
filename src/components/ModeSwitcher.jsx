import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Video, Users } from "lucide-react";

const TABS = [
  { id: "text", label: "Text", icon: MessageSquare, blurb: "Fast 1-on-1 anonymous chat with typing indicators and GIFs." },
  { id: "video", label: "Video", icon: Video, blurb: "Crystal-clear P2P calls with blur, mute and screen share." },
  { id: "group", label: "Group", icon: Users, blurb: "Auto-matched mini rooms for 3–6 people." },
];

export default function ModeSwitcher({ onConnect }) {
  const [active, setActive] = useState("text");
  const ActiveIcon = TABS.find((t) => t.id === active)?.icon ?? MessageSquare;

  return (
    <section id="modes" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl text-white font-semibold">Choose your flow</h2>
            <p className="text-white/70 mt-1">Switch anytime — your session gently transitions.</p>
          </div>
          <div className="flex gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                  active === t.id ? "text-black" : "text-white/80 hover:text-white"
                }`}
              >
                <AnimatePresence>
                  {active === t.id && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 rounded-lg bg-white"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
                <t.icon className={`h-4 w-4 relative ${active === t.id ? "text-black" : "text-white"}`} />
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90">
                <div className="flex items-center gap-3">
                  <ActiveIcon className="h-5 w-5 text-fuchsia-300" />
                  <div className="text-white font-medium capitalize">{active}</div>
                </div>
                <p className="mt-3 text-white/70">
                  {TABS.find((t) => t.id === active)?.blurb}
                </p>

                <ul className="mt-4 text-white/80 list-disc list-inside space-y-1 text-sm">
                  {active === "text" && (
                    <>
                      <li>Interest-based matching by tags</li>
                      <li>Typing indicators and quick reactions</li>
                      <li>Report, block, and skip controls</li>
                    </>
                  )}
                  {active === "video" && (
                    <>
                      <li>Background blur, mute/unmute, camera toggle</li>
                      <li>Low-latency WebRTC with reconnect logic</li>
                      <li>Overlay chat with emoji + GIF support</li>
                    </>
                  )}
                  {active === "group" && (
                    <>
                      <li>Auto-matched mini rooms with 3–6 people</li>
                      <li>Mesh-powered calls with adaptive quality</li>
                      <li>Moderation and safe mode filtering</li>
                    </>
                  )}
                </ul>

                <div className="mt-5">
                  <button
                    onClick={() => onConnect(active)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-lg hover:shadow-xl"
                  >
                    Connect now
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90">
                <div className="text-sm text-white/70">Status</div>
                <div className="mt-3 flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-emerald-200"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" /> Stable</span>
                  <span className="inline-flex items-center gap-2 text-sky-200"><span className="h-2.5 w-2.5 rounded-full bg-sky-400" /> Matching</span>
                  <span className="inline-flex items-center gap-2 text-rose-200"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /> Skipped</span>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="rounded-lg bg-white/10 p-3 border border-white/10">
                    <div className="text-white font-medium">Blur</div>
                    <div className="text-white/70">Privacy</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3 border border-white/10">
                    <div className="text-white font-medium">Mute</div>
                    <div className="text-white/70">Focus</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3 border border-white/10">
                    <div className="text-white font-medium">Share</div>
                    <div className="text-white/70">Screen</div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-indigo-500/10 border border-white/10 p-4">
                  <div className="text-sm text-white/70">Tip</div>
                  <p className="text-white mt-1">Switch partners anytime with a fluid transition — your preferences carry over.</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
