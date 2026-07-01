import Cta from "../../components/home/CTA/Cta";
import StatsSeconde from "../../components/home/StatsSeconde";
import Hero from "../../components/services/Hero";
import ServicesList from "../../components/services/ServicesList";

function Services() {
  return (
    <>
      <Hero />
      <ServicesList />
      <div className="my-[20px]">
        <StatsSeconde />
      </div>
      <Cta />
    </>
  );
}

export default Services;
