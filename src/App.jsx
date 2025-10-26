import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ModeSwitcher from "./components/ModeSwitcher.jsx";
import FloatingAssistantOrb from "./components/FloatingAssistantOrb.jsx";

export default function App() {
  const [safeMode, setSafeMode] = useState(true);
  const [activity, setActivity] = useState(0.25);

  const handleConnect = (mode) => {
    // Placeholder action — backend/signaling will be wired later.
    setActivity((a) => (a > 0.8 ? 0.2 : a + 0.2));
    window?.scrollTo({ top: 0, behavior: "smooth" });
    console.log(`Connect pressed for: ${mode}`);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(56,189,248,0.10),transparent_35%)]" />
      </div>

      <Navbar />
      <main>
        <Hero
          onConnect={handleConnect}
          safeMode={safeMode}
          onSafeModeToggle={() => setSafeMode((v) => !v)}
        />
        <ModeSwitcher onConnect={handleConnect} />

        <section id="features" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl sm:text-3xl font-semibold">Built for flow</h3>
            <p className="text-white/70 mt-2 max-w-2xl">
              Fluid animations, glass UI, and a futuristic lounge vibe. Connexa keeps things minimal and fast so you can connect and vibe.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Ultra-responsive UI", desc: "Optimized for mobile, tablet and desktop with adaptive layouts." },
                { title: "Fluid transitions", desc: "Subtle motion on every interaction and page change." },
                { title: "Moderation first", desc: "Report, block, and safe filters to keep sessions healthy." },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-white font-medium">{f.title}</div>
                  <div className="text-white/70 mt-1 text-sm">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        Crafted for serendipity — Connexa © {new Date().getFullYear()}
      </footer>

      <FloatingAssistantOrb activity={activity} />
    </div>
  );
}
