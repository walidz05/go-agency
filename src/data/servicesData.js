import {
  RiLineChartLine,
  RiQuillPenLine,
  RiShareForwardLine,
  RiAdvertisementLine,
  RiComputerLine,
  RiCameraLensLine,
} from "react-icons/ri";

export const services = [
  {
    icon: RiLineChartLine,
    title: "Stratégie & Marketing",

    // Home Section
    description:
      "Stratégie 360°, audit, positionnement et croissance pour une croissance durable.",

    // Services Page
    longDescription:
      "Nous élaborons des stratégies sur-mesure basées sur l'analyse de votre marché, de vos concurrents et de vos objectifs.",

    items: [
      "Audit & Analyse",
      "Stratégie de marque",
      "Positionnement",
      "Plan marketing",
    ],
  },

  {
    icon: RiQuillPenLine,
    title: "Création de contenu",

    description:
      "Des contenus créatifs et engageants pour capter l'attention et convertir.",

    longDescription:
      "Des contenus créatifs et engageants qui captivent votre audience et renforcent votre image de marque.",

    items: [
      "Rédaction web",
      "Content marketing",
      "Visuels & Design",
      "Storytelling",
    ],
  },

  {
    icon: RiShareForwardLine,
    title: "Social Media Management",

    description:
      "Gestion complète de vos réseaux sociaux pour développer votre communauté.",

    longDescription:
      "Gestion complète de vos réseaux sociaux pour développer votre communauté et augmenter votre visibilité.",

    items: [
      "Stratégie sociale",
      "Création & publication",
      "Community Management",
      "Analyse & Reporting",
    ],
  },

  {
    icon: RiAdvertisementLine,
    title: "Media Buying",

    description:
      "Campagnes publicitaires rentables sur Meta, Google et TikTok.",

    longDescription:
      "Campagnes publicitaires rentables sur Meta, Google, TikTok et plus pour générer le meilleur ROI.",

    items: ["Google Ads", "Meta Ads", "TikTok Ads", "Retargeting"],
  },

  {
    icon: RiComputerLine,
    title: "Création de site web",

    description:
      "Sites performants et optimisés pour convertir vos visiteurs en clients.",

    longDescription:
      "Sites modernes, rapides et optimisés pour transformer vos visiteurs en clients fidèles.",

    items: ["Site vitrine", "E-commerce", "UX/UI Design", "SEO"],
  },

  {
    icon: RiCameraLensLine,
    title: "Production vidéo",

    description:
      "Des vidéos impactantes pour raconter votre histoire et vendre.",

    longDescription:
      "Des vidéos professionnelles pour promouvoir votre marque et renforcer votre communication.",

    items: [
      "Vidéos publicitaires",
      "Vidéos corporate",
      "Motion Design",
      "Montage & Post-prod",
    ],
  },
];
