"use client";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  ShoppingCart,
  Brush,
  Lightbulb,
  TrendingUp,
  BarChart,
  PieChart,
  Rocket,
  Cpu,
} from "lucide-react";

const services = [
  {
    title: "Custom Web Development",
    icon: <Code />,
    description: "Scalable, secure, and high-performance web solutions.",
  },
  {
    title: "Full-Stack Development",
    icon: <Briefcase />,
    description:
      "Expertise in Next.js 15, backend optimization, and API integrations.",
  },
  {
    title: "E-Commerce Solutions",
    icon: <ShoppingCart />,
    description:
      "Custom marketplaces, admin panels, and secure payment integration.",
  },
  {
    title: "UI/UX Design",
    icon: <Brush />,
    description:
      "Modern, user-friendly designs with Figma prototypes and usability testing.",
  },
  {
    title: "Branding & Digital Identity",
    icon: <Lightbulb />,
    description:
      "Professional design strategies for impactful online presence.",
  },
  {
    title: "Daily Investment Insights",
    icon: <TrendingUp />,
    description: "2 free expert-analyzed odds & risk management strategies.",
  },
  {
    title: "Smart Investment Plans",
    icon: <BarChart />,
    description:
      "Opportunities in agribusiness, tech startups, and digital businesses.",
  },
  {
    title: "Portfolio Management",
    icon: <PieChart />,
    description: "Diversification strategies for long-term financial growth.",
  },
  {
    title: "Business Consulting",
    icon: <Rocket />,
    description: "Guidance on launching and scaling profitable ventures.",
  },
  {
    title: "IoT & AI Innovations",
    icon: <Cpu />,
    description: "Leveraging AI and smart tech for future-ready solutions.",
  },
];

const Services = () => {
  return (
    <section>
      <div className="container mx-auto px-6 text-center">
        <h2 className="title">Our Services & Offerings</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 xl:text-4xl sm:text-4xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className=" bg-red-500 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center mb-4 text-blue-500">
                {service.icon}
              </div>
              <h3 className="text-sm font-montagu text-secondary-dark mb-2">
                {service.title}
              </h3>
              <p className="font-montagu text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
