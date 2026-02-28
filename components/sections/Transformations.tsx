"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Transformation {
  before: string;
  after: string;
  name: string;
  duration: string;
}

const transformations: Transformation[] = [
  {
    before: "/assets/images/transformation-1-before.webp",
    after: "/assets/images/transformation-1-after.webp",
    name: "John D.",
    duration: "6 Months",
  },
  {
    before: "/assets/images/transformation-2-before.webp",
    after: "/assets/images/transformation-2-after.webp",
    name: "Sarah M.",
    duration: "4 Months",
  },
  {
    before: "/assets/images/transformation-3-before.webp",
    after: "/assets/images/transformation-3-after.webp",
    name: "Mike T.",
    duration: "8 Months",
  },
  {
    before: "/assets/images/transformation-4-before.webp",
    after: "/assets/images/transformation-4-after.webp",
    name: "Emma L.",
    duration: "5 Months",
  },
  {
    before: "/assets/images/transformation-5-before.webp",
    after: "/assets/images/transformation-5-after.webp",
    name: "David K.",
    duration: "7 Months",
  },
  {
    before: "/assets/images/transformation-6-before.webp",
    after: "/assets/images/transformation-6-after.webp",
    name: "Lisa R.",
    duration: "6 Months",
  },
];

function TransformationCard({ transformation, index }: { transformation: Transformation; index: number }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsLightboxOpen(true)}
      >
        <div 
          className="relative h-[400px] rounded-lg overflow-hidden bg-gray-900"
          onMouseMove={(e) => {
            if (isHovered) {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const percent = (x / rect.width) * 100;
              setSliderPosition(Math.max(0, Math.min(100, percent)));
            }
          }}
        >
          {/* Before Image */}
          <div className="absolute inset-0">
            <Image
              src={transformation.before}
              alt={`${transformation.name} - Before`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          {/* After Image with Slider */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={transformation.after}
              alt={`${transformation.name} - After`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-sm">
            Before
          </div>
          <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded text-sm">
            After
          </div>

          {/* Info Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{transformation.name}</h3>
              <p className="text-gray-300">{transformation.duration}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-primary transition-colors"
              >
                ✕
              </button>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src={transformation.before}
                    alt={`${transformation.name} - Before`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded">
                    Before
                  </div>
                </div>
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src={transformation.after}
                    alt={`${transformation.name} - After`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded">
                    After
                  </div>
                </div>
              </div>
              <div className="text-center mt-4 text-white">
                <h3 className="text-2xl font-bold">{transformation.name}</h3>
                <p className="text-gray-300">{transformation.duration}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Transformations() {
  return (
    <section
      id="transformations"
      className="py-24 px-4 bg-background"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See the incredible results achieved by our members. Your transformation starts here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <TransformationCard
              key={index}
              transformation={transformation}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
