import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustBar from "./components/TrustBar.jsx";
import Services from "./components/Services.jsx";
import Areas from "./components/Areas.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import BookingModal from "./components/BookingModal.jsx";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [presetService, setPresetService] = useState(null);

  const openModal = (service) => {
    setPresetService(service || null);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar onBookClick={() => openModal(null)} />
      <Hero onBookClick={() => openModal(null)} />
      <TrustBar />
      <Services onSelectService={(name) => openModal(name)} />
      <Areas />
      <HowItWorks />
      <About />
      <Testimonials />
      <CTA onBookClick={() => openModal(null)} />
      <Footer />
      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        presetService={presetService}
      />
    </>
  );
}
