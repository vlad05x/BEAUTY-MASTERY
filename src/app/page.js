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

import { client } from "@/sanity/lib/client";

export default async function Home() {
  const aboutData = await client.fetch(`*[_type == "aboutMe"][0]`);
  const benefitsData = await client.fetch(`*[_type == "benefitsSection"][0]`);
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe data={aboutData} />
      <Benefits data={benefitsData} />
      <Portfolio />
      <TrainingCourses />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
