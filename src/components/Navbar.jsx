import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Navbar({ theme = "auto" }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/30 dark:bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 shadow-lg shadow-fuchsia-500/25"
            >
              <Sparkles className="h-5 w-5 text-white" />
            </motion.span>
          </div>
          <div>
            <span className="text-white font-semibold text-xl tracking-tight">Connexa</span>
            <div className="text-xs text-white/60 -mt-0.5">Random Chat & Calls</div>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#modes" className="hover:text-white transition-colors">Modes</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#connect" className="hover:text-white transition-colors">Connect</a>
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/15"
        >
          Launch
        </motion.button>
      </div>
    </header>
  );
}
