import HeroSection from "@/components/birthday/HeroSection";
import PhotoGallery from "@/components/birthday/PhotoGallery";
import WishesSection from "@/components/birthday/WishesSection";
import Countdown from "@/components/birthday/Countdown";
import MessageSection from "@/components/birthday/MessageSection";
import Footer from "@/components/birthday/Footer";
import ConfettiEffect from "@/components/birthday/ConfettiEffect";
import BalloonGame from "@/components/birthday/BalloonGame";
import CuteBot from "@/components/birthday/CuteBot";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ConfettiEffect />
      <CuteBot />
      <HeroSection />
      <PhotoGallery />
      <BalloonGame />
      <WishesSection />
      <Countdown />
      <MessageSection />
      <Footer />
    </div>
  );
};

export default Index;
