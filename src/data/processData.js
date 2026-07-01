import { Search, Lightbulb, Rocket, LineChart, TrendingUp } from "lucide-react";

export const processSteps = [
  {
    id: "01",
    title: "Analyse & Stratégie",
    description:
      "Nous analysons votre marché, vos concurrents et vos objectifs pour définir la meilleure stratégie.",
    icon: Search,
    active: false,
  },
  {
    id: "02",
    title: "Planification",
    description:
      "Nous construisons un plan d'action sur mesure avec des campagnes et des contenus à fort impact.",
    icon: Lightbulb,
    active: true,
  },
  {
    id: "03",
    title: "Exécution",
    description:
      "Notre équipe met en œuvre la stratégie avec précision et agilité pour générer des résultats rapides.",
    icon: Rocket,
    active: false,
  },
  {
    id: "04",
    title: "Suivi & Optimisation",
    description:
      "Nous suivons les performances en temps réel et optimisons chaque action pour maximiser votre ROI.",
    icon: LineChart,
    active: false,
  },
  {
    id: "05",
    title: "Croissance",
    description:
      "Nous faisons évoluer ce qui fonctionne et propulsons votre entreprise vers une croissance durable.",
    icon: TrendingUp,
    active: true,
  },
];
