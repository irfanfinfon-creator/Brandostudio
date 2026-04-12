import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ClientsSection from './components/ClientsSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <ClientsSection />
        <BenefitsSection />
        <ProjectsSection />
        <AboutSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
