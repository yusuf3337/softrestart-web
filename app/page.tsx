import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
