import { motion } from "framer-motion";

export default function FloatingAssistantOrb({ activity = 0.3 }) {
  const scale = 1 + Math.min(0.4, Math.max(0, activity)) * 0.6;
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <motion.div
          animate={{
            scale: [1, scale, 1],
            boxShadow: [
              "0 0 40px rgba(217, 70, 239, 0.15)",
              "0 0 80px rgba(99, 102, 241, 0.35)",
              "0 0 40px rgba(217, 70, 239, 0.15)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
          className="h-14 w-14 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500"
        />
        <div className="absolute inset-0 blur-2xl rounded-full bg-fuchsia-500/30" />
      </motion.div>
    </div>
  );
}
