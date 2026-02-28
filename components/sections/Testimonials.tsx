"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmed Khalil",
    role: "Member",
    image: "/assets/images/testimonial-1.webp",
    text: "247 Gym transformed my life. The trainers are incredibly knowledgeable and the community is supportive. I've lost 15kg in 6 months and feel stronger than ever!",
    rating: 5,
  },
  {
    name: "Fatima Al-Zahra",
    role: "Member",
    image: "/assets/images/testimonial-2.webp",
    text: "The Elite membership was the best investment I've made. Unlimited personal training sessions and 24/7 access fit perfectly with my busy schedule. Highly recommend!",
    rating: 5,
  },
  {
    name: "Omar Hassan",
    role: "Member",
    image: "/assets/images/testimonial-3.webp",
    text: "I've tried many gyms in Dubai, but 247 Gym stands out. The equipment is top-notch, the trainers are professional, and the results speak for themselves.",
    rating: 5,
  },
  {
    name: "Layla Mohammed",
    role: "Member",
    image: "/assets/images/testimonial-4.webp",
    text: "The group classes are amazing! The energy is incredible and the instructors push you to your limits. I've made so many friends here and achieved goals I never thought possible.",
    rating: 5,
  },
];

export default function Testimonials() {
  // Always start at first testimonial (index 0) on mount/refresh
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset to first testimonial on mount
  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 bg-gradient-to-b from-background to-gray-900 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/assets/images/testimonial-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Members Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our members have to say about their experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800"
            >
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-200 text-center mb-8 leading-relaxed">
                &ldquo;{currentTestimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                  <div className="text-gray-400">{currentTestimonial.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
