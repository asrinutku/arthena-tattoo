import { Navbar } from './components/Navbar';
import { AboutSection } from './sections/AboutSection';
import { ArtistsSection } from './sections/ArtistsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { GallerySection } from './sections/GallerySection';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ArtistsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
