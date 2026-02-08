import { motion } from "framer-motion";

const CuteBot = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Standing dancing bot */}
      <div className="relative">
        {/* Bot body with dancing animation */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-9xl"
        >
          🤖
        </motion.div>

        {/* Dancing legs effect */}
        <motion.div
          animate={{
            x: [-15, 15, -15],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-24 left-1/2 transform -translate-x-1/2 text-4xl"
        >
          👟
        </motion.div>

        {/* Floating hearts around the bot */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-40, -100],
                x: Math.cos((i / 5) * Math.PI * 2) * 40,
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute text-3xl"
            >
              ✨
            </motion.div>
          ))}
        </div>

        {/* Sparkles around bot */}
        <div>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.15,
              }}
              className="absolute text-2xl"
              style={{
                left: `${50 + Math.cos((i / 6) * Math.PI * 2) * 60}%`,
                top: `${Math.sin((i / 6) * Math.PI * 2) * 60}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              💫
            </motion.div>
          ))}
        </div>
      </div>

      {/* Birthday message below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="font-script text-3xl text-gradient font-bold mb-3">
          Let's Celebrate! 🎉
        </p>
        <p className="text-muted-foreground text-lg max-w-md">
          Your special day is here to spread joy and happiness!
        </p>
      </motion.div>
    </div>
  );
};

export default CuteBot;
