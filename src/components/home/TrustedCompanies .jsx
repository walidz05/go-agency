import google from "../../assets/images/logos/google.webp";
import meta from "../../assets/images/logos/meta.webp";
import tiktok from "../../assets/images/logos/tiktok.webp";
import shopify from "../../assets/images/logos/shopify.webp";
import slack from "../../assets/images/logos/slack.webp";

const companies = [
  {
    name: "Google",
    logo: google,
  },
  {
    name: "Meta",
    logo: meta,
  },
  {
    name: "Airbnb",
    logo: tiktok,
  },
  {
    name: "Shopify",
    logo: shopify,
  },
  {
    name: "Slack",
    logo: slack,
  },
];

function TrustedCompanies() {
  return (
    <section className="border-y border-white/10 bg-[#0B1120]">
      <div className="mx-auto max-w-7xl">
        <p className="mt-8 text-center text-sm font-Manrope font-bold tracking-[4px] text-white/80 ">
          Ils nous font confiance
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-5">
          {companies.map((item) => (
            <div
              key={item.name}
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <img
                loading="lazy"
                src={item.logo}
                alt={item.name}
                className="h-32 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;
