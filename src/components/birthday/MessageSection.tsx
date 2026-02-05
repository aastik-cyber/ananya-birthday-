import { motion } from "framer-motion";
import { PenLine, Heart, Volume2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const MessageSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  const playMessage = () => {
    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    const text = "Happy Birthday Ananya! Wishing you a day filled with love, joy, and beautiful moments!";
    const utteranceObj = new SpeechSynthesisUtterance(text);

    utteranceObj.rate = 0.9;
    utteranceObj.pitch = 1.2;
    utteranceObj.volume = 1;

    const voices = speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice =>
      voice.name.includes('Female') ||
      voice.name.includes('female') ||
      voice.name.includes('woman') ||
      voice.name.includes('Woman')
    ) || voices.find(voice => voice.name.includes('Google UK English Female')) || voices[1];

    if (femaleVoice) {
      utteranceObj.voice = femaleVoice;
    }

    utteranceObj.onend = () => {
      setIsPlaying(false);
    };

    utteranceObj.onerror = () => {
      setIsPlaying(false);
    };

    speechSynthesis.speak(utteranceObj);
    setIsPlaying(true);
    setUtterance(utteranceObj);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-pink-light/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <PenLine className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Personal Message</span>
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-6">
            A Letter For You
          </h2>

          <motion.button
            onClick={playMessage}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all shadow-lg ${
              isPlaying
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary text-primary-foreground hover:shadow-xl"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Volume2 className="w-5 h-5" />
            {isPlaying ? "Stop Message" : "Play Message"}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-none shadow-2xl bg-card relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-light to-transparent opacity-50 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-light to-transparent opacity-50 rounded-tl-full" />
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="font-script text-2xl md:text-3xl text-primary mb-6">
                Dear Ananya,
              </div>
              
              <div className="space-y-4 text-foreground text-lg leading-relaxed">
                <p>
                  On this special day, I want you to know just how incredibly special you are. 
                  Your smile lights up every room, and your kindness touches everyone around you.
                </p>
                <p>
                  You deserve all the happiness in the world, today and every day. 
                  May this new year of your life bring you closer to all your dreams and fill your heart with joy.
                </p>
                <p>
                  Thank you for being such an amazing person and for making the world a brighter place 
                  just by being in it. Here's to another year of beautiful memories together!
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="font-script text-2xl text-secondary">
                  With all my love ❤️
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-8 h-8 text-primary fill-primary" />
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
