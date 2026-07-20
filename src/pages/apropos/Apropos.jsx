import Features from "../../components/apropos/Features";
import Hero from "../../components/apropos/Hero.";
import Process from "../../components/apropos/Process";
import Testimonials from "../../components/home/Testimonials";
import Cta from "../../components/home/CTA/Cta";
function Apropos() {
  return (
    <>
      <Hero />
      <Process />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}

export default Apropos;
