"use client";

import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaBolt } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500">
          Our Electrical Services
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Reliable, safe, and professional electrical solutions tailored for both
          residential and commercial needs, delivered with expert care.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Residential */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center text-yellow-500 text-4xl mb-4"
          >
            <FaHome />
          </motion.div>

          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Residential Services
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>✔ Panel upgrades & complete rewiring</li>
            <li>✔ Indoor & outdoor lighting installation</li>
            <li>✔ EV charger installation</li>
            <li>✔ Hot tub & appliance wiring</li>
            <li>✔ Electrical safety inspections</li>
          </ul>
        </motion.div>

        {/* Commercial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="flex justify-center text-yellow-500 text-4xl mb-4"
          >
            <FaBuilding />
          </motion.div>

          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Commercial Services
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>✔ Office & retail electrical systems</li>
            <li>✔ Backup generator installation</li>
            <li>✔ Data & network cabling</li>
            <li>✔ Energy-efficient lighting retrofits</li>
            <li>✔ Scheduled maintenance contracts</li>
          </ul>
        </motion.div>

        {/* Emergency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="flex justify-center text-yellow-500 text-4xl mb-4"
          >
            <FaBolt />
          </motion.div>

          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Emergency Services
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>✔ 24/7 emergency electrical repairs</li>
            <li>✔ Power outage troubleshooting</li>
            <li>✔ Faulty wiring repairs</li>
            <li>✔ Breaker & fuse replacement</li>
            <li>✔ Immediate safety hazard resolution</li>
          </ul>
        </motion.div>

      </div>
    </main>
  );
}
