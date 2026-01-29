"use client";

import { FaBolt, FaHome, FaBuilding, FaCarBattery } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Residential Electrical",
      description:
        "Safe and reliable electrical solutions for homes, upgrades, and troubleshooting.From custom renovations to emergency repairs, we keep your home safe and bright. We treat every home like our own with clean, code-compliant work.",
      icon: <FaHome />,
    },
    {
      title: "Commercial & Industrial Electrical",
      description:
        "Professional electrical installations, maintenance, and safety compliance for businesses.",
      icon: <FaBuilding />,
    },
    {
      title: "EV Charger Installation",
      description:
        "Expert installation of EV chargers to keep your electric vehicles powered and ready.",
      icon: <FaCarBattery />,
    },
    {
      title: "Lighting & Panel Upgrades",
      description:
        "Modern lighting solutions and electrical panel upgrades for efficiency and safety.",
      icon: <FaBolt />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl mb-12">Our <span className="font-bold">Services</span></h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              {/* ICON WITH GLOW + LIGHTNING PULSE */}
              <motion.div
                className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(255, 200, 0, 0.4)",
                    "0 0 20px rgba(255, 200, 0, 0.9)",
                    "0 0 0px rgba(255, 200, 0, 0.4)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 5, -5, 0],
                  boxShadow: "0 0 35px rgba(255, 200, 0, 1)",
                }}
              >
                <motion.div
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="text-yellow-500 text-3xl"
                >
                  {service.icon}
                </motion.div>
              </motion.div>

              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
