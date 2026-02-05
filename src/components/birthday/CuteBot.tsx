import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const CuteBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", damping: 15 }}
            className="mb-4 mr-2"
          >
            <div className="bg-gradient-to-br from-pink to-coral rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/20 max-w-xs">
              <div className="p-6 relative">
                {/* Cute bot character */}
                <div className="flex flex-col items-center mb-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [-5, 5, -5],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-5xl mb-3"
                  >
                    🤖
                  </motion.div>
                  <p className="text-center font-script text-2xl text-gradient font-bold">
                    Cutie Ananya!
                  </p>
                </div>

                {/* Message bubble */}
                <div className="bg-white/90 rounded-2xl p-4 shadow-lg mb-4">
                  <p className="text-foreground text-center font-semibold">
                    ✨ Happy Birthday! 🎉
                  </p>
                  <p className="text-foreground text-sm text-center mt-2 leading-relaxed">
                    You're absolutely amazing and deserve all the happiness in the world!
                  </p>
                </div>

                {/* Floating hearts */}
                <div className="flex justify-center gap-2 mb-3">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      <span className="text-2xl">💕</span>
                    </motion.div>
                  ))}
                </div>

                {/* Close button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-4 h-4" />
                  Got it!
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bot button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center text-4xl hover:shadow-xl transition-shadow border-4 border-primary-foreground/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🤖
      </motion.button>
    </div>
  );
};

export default CuteBot;
