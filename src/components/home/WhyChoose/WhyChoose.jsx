import { whyChooseData } from "../../../data/ChooseData";
import Heading from "../../ui/Heading";
import WhyChooseCard from "./WhyChooseCard";

export default function WhyChoose() {
  return (
    <section className="py-[60px]">
      <Heading
        children1="Pourquoi choisir go&Study"
        children2="Nous combinons expertise, créativité et performance pour offrir des
          résultats qui font la différence."
        textAlign="center"
      ></Heading>
      <div className="container mx-auto px-6">
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {whyChooseData.map((item) => (
            <WhyChooseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
