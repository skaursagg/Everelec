"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import ServicesSection from "./components/ServicesSection";
import FeaturedProjects from "./components/FeaturedProjects";
import CommunitySection from "./components/CommunitySection";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Scroll-triggered hero behavior
  const heroHeight = useTransform(scrollY, [0, 300], ["100vh", "70vh"]);
  const bgScale = useTransform(scrollY, [0, 300], [1.08, 1]);
  const contentY = useTransform(scrollY, [0, 300], [0, 90]);
  const contentOpacity = useTransform(scrollY, [0, 200], [1, 0.85]);

  return (
    <main className="min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <motion.section
        style={{ height: shouldReduceMotion ? "100vh" : heroHeight }}
        className="relative overflow-hidden"
      >
        {/* Background Video */}
        {!shouldReduceMotion && (
          <motion.video
            style={{ scale: bgScale }}
            className="absolute inset-0 w-full h-full object-cover blur-[2px]"
            src="/hero1.mp4"
            poster="/hero2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        )}

        {/* Fallback Image for Reduced Motion */}
        {shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-poster.jpg')" }}
          />
        )}


        {/* Lightning Pulse Effect */}
        {!shouldReduceMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.18, 0] }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-tr from-yellow-400/25 via-transparent to-transparent pointer-events-none"
          />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Hero Content */}
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : contentY,
            opacity: shouldReduceMotion ? 1 : contentOpacity,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center md:justify-end md:pb-32 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight md:max-w-4xl">
            <span className="text-yellow-500">Trusted</span> Electrical Services <br />
            for Homes & Businesses
          </h1>

          <p className="mt-3 max-w-lg text-lg text-gray-200">
            Powering your home and business with precision. Everelec Electrical Solutions
            delivers safe, modern electrical work across the GTA.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Link href="/contact">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
                Get a Free Quote
              </button>
            </Link>

            <Link href="/about">
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* ================= SERVICES ================= */}
      <ServicesSection />

      {/* ================= ABOUT ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl mb-4">
              About <span className="font-bold">Everelec Solutions</span>
            </h2>
            <p className="text-gray-600 mb-4">
              At Everelec Solutions, we believe in quality workmanship,
              honest pricing, and long-term relationships.
            </p>
            <p className="text-gray-600">
              We proudly serve residential and commercial customers
              with modern, safe, and efficient electrical solutions.
            </p>
          </div>

          <div className="bg-gray-200 h-64 rounded-xl"></div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <FeaturedProjects />

      {/* ================= COMMUNITY ================= */}
      <CommunitySection />

    </main>
  );
}
