"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaHandshake, FaClock } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-900 to-yellow-700 text-black py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Powering homes and businesses with reliable electrical solutions.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="mb-4">
            Everelec is a premier electrical contracting firm dedicated to powering homes and businesses across the GTA.
            Whether you are in downtown Toronto, the quiet suburbs of Durham, or the busy commercial hubs of Peel and York Region, our team brings expert electrical solutions to your door.
          </p>
          <p className="mb-4">
            With years of combined experience, our team blends traditional craftsmanship
            with modern technology to deliver safe, efficient, and long-lasting solutions.
            Led by a Licensed Master Electrician, Everelec was built on a foundation of technical precision and unwavering safety standards.
            We understand that finding a reliable, code-compliant electrician can be difficult.
            That’s why we have made it our <span className="text-yellow-500 font-bold" >mission</span> to provide consistent, high-quality service across the entire region—from simple residential upgrades to complex commercial installations.
          </p>
          <p>
            From service upgrades and lighting installations to heating, cooling, and energy
            systems, we support our customers from the first call to final inspection.
            We are mobile, responsive, and ready to handle your electrical needs with the professionalism you deserve.
          </p>
        </div>

        <div>
          <img
            src="/about.jpg"
            alt="About Everelec"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex justify-center mb-4 text-yellow-500 text-4xl"
              >
                <FaCheckCircle />
              </motion.div>
              <h3 className="font-semibold text-xl mb-3">Quality Work</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We take pride in delivering clean, precise, and code-compliant electrical
                installations. Every project is completed with attention to detail,
                ensuring long-lasting performance and safety.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="flex justify-center mb-4 text-yellow-500 text-4xl"
              >
                <FaHandshake />
              </motion.div>
              <h3 className="font-semibold text-xl mb-3">Customer First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in honest communication, transparent pricing, and dependable
                service. Our goal is to build long-term relationships by truly understanding
                our clients’ needs and offering the right solutions.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="flex justify-center mb-4 text-yellow-500 text-4xl"
              >
                <FaClock />
              </motion.div>
              <h3 className="font-semibold text-xl mb-3">Reliable Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We value your time and deliver prompt, dependable service you can trust.
                From the first call to project completion, we stay responsive.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
