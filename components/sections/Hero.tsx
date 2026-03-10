"use client";

import { useEffect, useRef, Suspense, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import gsap from "gsap";

// Lazy load 3D component
const Dumbbell3D = dynamic(() => import("@/components/ui/Dumbbell3D"), {
  ssr: false,
  loading: () => <div className="w-32 h-32" />,
});

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const headlineRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (inView && headlineRef.current) {
      const chars = headlineRef.current.querySelectorAll(".char");
      gsap.fromTo(
        chars,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "power3.out",
        }
      );
    }
  }, [inView]);

  const headline = "BUILD STRENGTH. BREAK LIMITS.";
  const chars = headline.split("");

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/assets/images/hero-fallback.webp"
        >
          <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* 3D Model - Desktop only */}
        {!isMobile && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30">
            <Suspense fallback={null}>
              <Dumbbell3D />
            </Suspense>
          </div>
        )}

        {/* Headline */}
        <motion.div
          ref={headlineRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            {chars.map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{ color: char === " " ? "transparent" : undefined }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl md:text-2xl mb-12 text-gray-300"
        >
          Premium transformation gym in Barsha Heights, Dubai.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Book Free Trial
          </a>
          <a
            href="#programs"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-background transition-all duration-300 hover:scale-105"
          >
            View Programs
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
