import { motion } from "framer-motion";
import { Camera, Heart } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import ananya1 from "@/assets/ananya-1.jpeg";
import ananya2 from "@/assets/ananya-2.jpeg";
import ananya3 from "@/assets/ananya-3.jpeg";
import ananya4 from "@/assets/ananya-4.jpeg";
import ananya5 from "@/assets/ananya-5.jpeg";

const photos = [
  { id: 1, src: ananya1, caption: "Shopping vibes ✨" },
  { id: 2, src: ananya2, caption: "Elegant queen 👑" },
  { id: 3, src: ananya3, caption: "Night out 💜" },
  { id: 4, src: ananya4, caption: "Mountain adventures 🏔️" },
  { id: 5, src: ananya5, caption: "Looking stunning 💕" },
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Memories</span>
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-4">
            Ananya's Beautiful Moments
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A collection of wonderful memories that make you, you! 📸
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="group relative"
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20"
                animate={{
                  boxShadow: [
                    "0 20px 40px rgba(255, 105, 180, 0.3)",
                    "0 20px 40px rgba(147, 112, 219, 0.3)",
                    "0 20px 40px rgba(255, 215, 0, 0.3)",
                    "0 20px 40px rgba(255, 105, 180, 0.3)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <AspectRatio ratio={3/4}>
                  <img
                    src={photo.src}
                    alt={`Ananya - ${photo.caption}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </AspectRatio>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-8">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Heart className="w-8 h-8 fill-primary-foreground text-primary-foreground" />
                    </motion.div>
                    <span className="font-semibold text-lg text-primary-foreground">{photo.caption}</span>
                  </motion.div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer" />
                </div>
              </motion.div>

              {/* Decorative corner with animation */}
              <motion.div
                className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center shadow-2xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-accent-foreground text-sm font-bold">{index + 1}</span>
              </motion.div>

              {/* Corner sparkles */}
              <motion.div
                className="absolute -top-1 -left-1"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                <div className="w-4 h-4 bg-accent rounded-full blur-sm" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-12 text-muted-foreground italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          💝 Every picture tells a story of your beautiful journey!
        </motion.p>
      </div>
    </section>
  );
};

export default PhotoGallery;
