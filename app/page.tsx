
"use client";
import { motion } from "framer-motion";
import ServicesSection from "./components/ServicesSection";
import Link from "next/link";
import  FeaturedProjects from "./components/FeaturedProjects";
import CommunitySection from "./components/CommunitySection";




export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
    <section className="relative h-[100vh] md:h-[100vh] bg-[url('/hero.jpg')] bg-cover bg-center">
       {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center md:justify-end md:pb-32 text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight md:max-w-4xl">
             <span className="text-yellow-500">Trusted </span> Electrical Services <br />
              for Homes & Businesses
            </h1>
            <p className="mt-2 max-w-lg text-lg text-gray-200">
             Powering your home and business with precision. Everelec Electrical Solutions offers comprehensive electrical services throughout the GTA.
            </p>
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400">
                  Get a Free Quote
                </button>
              </Link>
              <Link href="/about">
                <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>

    </section>
    <ServicesSection />

      {/* SERVICES SECTION
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Residential Electrical</h3>
              <p className="text-gray-600">
                Wiring, panel upgrades, lighting installation, and safety inspections.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Commercial Electrical</h3>
              <p className="text-gray-600">
                Office, retail, and industrial electrical solutions tailored to your business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">EV Chargers & Smart Systems</h3>
              <p className="text-gray-600">
                EV charger installation, smart lighting, and energy-efficient upgrades.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ABOUT SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl mb-4">About <span className="font-bold">Everelec Solutions</span></h2>
            <p className="text-gray-600 mb-4">
              At Everelec Solutions, we believe in quality workmanship, honest pricing,
              and building long-term relationships with our clients.
            </p>
            <p className="text-gray-600">
              We proudly serve residential and commercial customers with modern,
              safe, and efficient electrical solutions.
            </p>
          </div>

          <div className="bg-gray-200 h-64 rounded-xl"></div>
        </div>
      </section>

      {/* CALL TO ACTION
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need an Electrician Today?
          </h2>
          <p className="mb-6">
            Contact Everelec Solutions for fast and reliable service.
          </p>
          <Link href="/contact">
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800">
              Contact Us
            </button>
          </Link>
        </div>
      </section> */}

      <FeaturedProjects />
      <CommunitySection />

    </main>
  );
}
