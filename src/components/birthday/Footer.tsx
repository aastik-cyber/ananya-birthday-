import { motion } from "framer-motion";
import { Heart, Cake, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-pink-light/50 to-purple-light/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Cake className="w-10 h-10 text-primary" />
            </motion.div>
            <h2 className="font-script text-4xl md:text-5xl text-gradient">
              Happy Birthday Ananya!
            </h2>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Cake className="w-10 h-10 text-secondary" />
            </motion.div>
          </div>

          <p className="text-muted-foreground text-lg mb-8">
            May your special day be filled with magic, love, and endless joy! 🎂🎈🎁
          </p>

          <motion.div
            className="flex items-center justify-center gap-2 text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Made with</span>
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span>just for you</span>
            <Sparkles className="w-5 h-5 text-accent" />
          </motion.div>

          <div className="mt-12 flex justify-center gap-4">
            {["🎂", "🎈", "🎁", "🎉", "💝", "✨", "🌟", "🦋"].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-3xl"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
