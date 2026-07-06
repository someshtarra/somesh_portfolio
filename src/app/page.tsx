import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import HandsOnLabs from "@/components/HandsOnLabs";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import CertificateGallery from "@/components/CertificateGallery";
import Education from "@/components/Education";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <HandsOnLabs />
        <Projects />
        <Certifications />
        <CertificateGallery />
        <Education />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
