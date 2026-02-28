"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-red-600 to-primary"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Ready to Transform
          <br />
          <span className="text-white">Your Life?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto"
        >
          Join thousands of members who have transformed their bodies and lives at 247 Gym - The Fitness District.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="inline-block px-12 py-6 bg-white text-primary font-bold text-xl rounded-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 animate-pulse-slow"
        >
          Book Your Free Trial Now
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-gray-300"
        >
          No credit card required • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
