import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { Card, CardContent } from "@/components/ui/card";

interface Balloon {
  id: number;
  color: string;
  left: number;
  delay: number;
  speed: number;
}

const balloonColors = [
  "from-pink-400 to-pink-600",
  "from-purple-400 to-purple-600",
  "from-blue-400 to-blue-600",
  "from-yellow-400 to-yellow-600",
  "from-green-400 to-green-600",
  "from-red-400 to-red-600",
  "from-orange-400 to-orange-600",
  "from-teal-400 to-teal-600",
];

const BalloonGame = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [highScore, setHighScore] = useState(0);

  const createBalloon = useCallback(() => {
    const newBalloon: Balloon = {
      id: Date.now() + Math.random(),
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      left: Math.random() * 85 + 5,
      delay: Math.random() * 2,
      speed: 8 + Math.random() * 4,
    };
    setBalloons((prev) => [...prev, newBalloon]);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      createBalloon();
    }, 1500);

    return () => clearInterval(interval);
  }, [isPlaying, createBalloon]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBalloons((prev) => prev.slice(-15));
    }, 100);
    return () => clearTimeout(timer);
  }, [balloons]);

  const popBalloon = (balloonId: number) => {
    setBalloons((prev) => prev.filter((b) => b.id !== balloonId));
    setScore((prev) => prev + 10);

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ff69b4", "#9370db", "#ffd700", "#ff6b6b", "#40e0d0"],
      zIndex: 9999,
    });

    if (score + 10 > highScore) {
      setHighScore(score + 10);
    }
  };

  const resetGame = () => {
    setScore(0);
    setBalloons([]);
    setIsPlaying(true);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-purple-light/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Interactive Fun
            </span>
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-4">
            Pop the Birthday Balloons!
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-6">
            Click or tap the balloons to pop them and score points! 🎈
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-6">
          <Card className="border-none shadow-lg bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-4 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary-foreground" />
              <div>
                <p className="text-primary-foreground/80 text-xs uppercase tracking-wider">
                  Score
                </p>
                <p className="text-primary-foreground font-bold text-2xl">{score}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-r from-accent to-gold">
            <CardContent className="p-4 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-accent-foreground" />
              <div>
                <p className="text-accent-foreground/80 text-xs uppercase tracking-wider">
                  Best
                </p>
                <p className="text-accent-foreground font-bold text-2xl">{highScore}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <motion.div
          className="relative bg-gradient-to-b from-blue-100 to-blue-50 rounded-3xl shadow-2xl overflow-hidden border-4 border-primary/20"
          style={{ height: "500px" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
            <motion.button
              onClick={resetGame}
              className="px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full font-semibold text-primary shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset Game
            </motion.button>
          </div>

          <AnimatePresence>
            {balloons.map((balloon) => (
              <motion.div
                key={balloon.id}
                initial={{ y: 520, opacity: 0 }}
                animate={{ y: -150, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: balloon.speed,
                  delay: balloon.delay,
                  ease: "linear",
                }}
                style={{ left: `${balloon.left}%` }}
                className="absolute cursor-pointer"
                onClick={() => popBalloon(balloon.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                <div className="relative">
                  <motion.div
                    className={`w-16 h-20 rounded-full bg-gradient-to-br ${balloon.color} shadow-lg relative`}
                    animate={{
                      x: [0, 10, -10, 0],
                      rotate: [-5, 5, -5, 5, -5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="absolute top-2 left-4 w-6 h-6 bg-white/40 rounded-full blur-sm" />
                  </motion.div>

                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0.5 h-16 bg-gray-400" />

                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-3 h-2 bg-gray-300 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {score > 0 && score % 50 === 0 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-6xl font-bold text-yellow-400 drop-shadow-lg">
                +50!
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.p
          className="text-center mt-8 text-muted-foreground italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Keep popping to beat your high score! Each balloon is worth 10 points! 🎯
        </motion.p>
      </div>
    </section>
  );
};

export default BalloonGame;
