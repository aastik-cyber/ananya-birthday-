import { motion } from "framer-motion";
import { Heart, Sparkles, Gift, Cake, Music, Star, PartyPopper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const wishes = [
  {
    icon: Heart,
    title: "Love & Happiness",
    message: "May your heart be filled with endless love and your days with pure happiness!",
    color: "text-primary",
    bg: "bg-pink-light",
  },
  {
    icon: Sparkles,
    title: "Dreams Come True",
    message: "May all your wishes come true and your dreams take flight this year!",
    color: "text-secondary",
    bg: "bg-purple-light",
  },
  {
    icon: Gift,
    title: "Wonderful Surprises",
    message: "May life surprise you with beautiful moments when you least expect them!",
    color: "text-accent",
    bg: "bg-gold-light",
  },
  {
    icon: Cake,
    title: "Sweet Celebrations",
    message: "May every day be as sweet as birthday cake and as special as today!",
    color: "text-coral",
    bg: "bg-pink-light",
  },
  {
    icon: Music,
    title: "Joy & Laughter",
    message: "May your life be filled with music, dance, and endless laughter!",
    color: "text-teal",
    bg: "bg-purple-light",
  },
  {
    icon: Star,
    title: "Shine Bright",
    message: "May you continue to shine and inspire everyone around you!",
    color: "text-accent",
    bg: "bg-gold-light",
  },
];

const WishesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-birthday">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <PartyPopper className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Birthday Wishes</span>
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-4">
            Special Wishes For You
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Heartfelt wishes to make your birthday extra magical! 🌟
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${wish.bg} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <wish.icon className={`w-8 h-8 ${wish.color}`} />
                  </motion.div>
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{wish.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{wish.message}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
