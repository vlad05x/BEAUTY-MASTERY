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
  const heroSection = await client.fetch(`*[_type == "heroSection"][0]`);
  const servicesData = await client.fetch(`*[_type == "servicesSection"][0]`);
  const aboutData = await client.fetch(`*[_type == "aboutMe"][0]`);
  const benefitsData = await client.fetch(`*[_type == "benefitsSection"][0]`);
  const portfolioSection = await client.fetch(`*[_type == "portfolioSection"][0]`);
  const portfolioItems = await client.fetch(`*[_type == "portfolioItem"] | order(_createdAt desc)`);
  const coursesData = await client.fetch(`*[_type == "coursesSection"][0]`);
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero data={heroSection} />
      <Services data={servicesData}/>
      <AboutMe data={aboutData} />
      <Benefits data={benefitsData} />
      <Portfolio data={{section: portfolioSection, items: portfolioItems}} />
      <TrainingCourses data={coursesData} />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
