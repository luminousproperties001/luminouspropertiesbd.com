import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  return (
    <>
<Hero />
<Counter />
<FeaturedProjects />
<Gallery />
<Services />
<About />
<WhyChooseUs />
<Testimonials />
<Contact />
    </>
  );
}