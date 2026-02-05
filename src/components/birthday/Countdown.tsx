import { motion } from "framer-motion";
import { Clock, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Countdown = () => {
  // Display static celebration numbers for aesthetic purposes
  const celebrationNumbers = [
    { label: "Years of Joy", value: "∞" },
    { label: "Smiles Shared", value: "1000+" },
    { label: "Beautiful Moments", value: "365" },
    { label: "Reasons to Celebrate", value: "∞" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Celebrating You</span>
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-4">
            Every Moment Counts
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {celebrationNumbers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center border-none shadow-lg bg-gradient-to-br from-card to-pink-light/30">
                <CardContent className="p-6">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {item.value}
                  </motion.div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Card className="inline-block border-none shadow-lg bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-6 flex items-center gap-4">
              <Gift className="w-8 h-8 text-primary-foreground" />
              <div className="text-left">
                <p className="text-primary-foreground font-semibold text-lg">Today is Your Day!</p>
                <p className="text-primary-foreground/80 text-sm">Make it absolutely unforgettable! 🎉</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
