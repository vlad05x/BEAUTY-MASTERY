import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Benefits from "@/components/Benefits";
import TrainingCourses from "@/components/TrainingCourses";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Benefits />
      <Portfolio />
      <TrainingCourses />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
