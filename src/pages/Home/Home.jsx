import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import StatsSeconde from "../../components/home/StatsSeconde";
import TrustedCompanies from "../../components/home/TrustedCompanies ";
import Portfolio from "../../components/home/Portfolio";
import Testimonials from "../../components/home/Testimonials";
import Process from "../../components/home/Process";
import WhyChoose from "../../components/home/WhyChoose/WhyChoose";
import Cta from "../../components/home/CTA/Cta";
import Results from "../../components/home/Results";

function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Services />
      <Results />
      <WhyChoose />
      <Process />
      <StatsSeconde />
      <Portfolio />
      <Testimonials />
      <Cta />
    </>
  );
}

export default Home;
