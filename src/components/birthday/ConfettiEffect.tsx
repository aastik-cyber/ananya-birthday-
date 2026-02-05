import { useEffect, useCallback } from "react";
import confetti from "canvas-confetti";

const ConfettiEffect = () => {
  const fireConfetti = useCallback(() => {
    // Create a more celebratory confetti burst
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#ff69b4", "#ff1493", "#db7093"],
    });
    fire(0.2, {
      spread: 60,
      colors: ["#9370db", "#ba55d3", "#da70d6"],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#ffd700", "#ffb347", "#ff6b6b"],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#ff69b4", "#9370db", "#ffd700"],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#40e0d0", "#ff69b4", "#ffd700"],
    });
  }, []);

  useEffect(() => {
    // Fire confetti on initial load
    const timer = setTimeout(() => {
      fireConfetti();
    }, 500);

    // Fire confetti every 10 seconds for continued celebration
    const interval = setInterval(() => {
      // Smaller side bursts
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ["#ff69b4", "#9370db", "#ffd700"],
        zIndex: 9999,
      });
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ["#ff69b4", "#9370db", "#ffd700"],
        zIndex: 9999,
      });
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [fireConfetti]);

  // Click handler for extra confetti
  useEffect(() => {
    const handleClick = () => {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff69b4", "#9370db", "#ffd700", "#ff6b6b", "#40e0d0"],
        zIndex: 9999,
      });
    };

    // Add click listener for interactive confetti
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ConfettiEffect;
