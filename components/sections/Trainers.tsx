"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import Image from "next/image";

interface Trainer {
  name: string;
  role: string;
  specialties: string[];
  image: string;
  instagram?: string;
}

const trainers: Trainer[] = [
  {
    name: "Ahmed Al-Mansoori",
    role: "Head Strength Coach",
    specialties: ["Strength Training", "Powerlifting", "Bodybuilding"],
    image: "/assets/images/trainer-1.webp",
    instagram: "@fitnessavenue",
  },
  {
    name: "Sarah Johnson",
    role: "Personal Training Specialist",
    specialties: ["Fat Loss", "Nutrition", "HIIT"],
    image: "/assets/images/trainer-2.webp",
    instagram: "@fitnessavenue",
  },
  {
    name: "Mohammed Hassan",
    role: "CrossFit Coach",
    specialties: ["CrossFit", "Functional Training", "Mobility"],
    image: "/assets/images/trainer-3.webp",
    instagram: "@fitnessavenue",
  },
];

function TrainerCard({ trainer, index }: { trainer: Trainer; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  // Enhanced 3D tilt effect with spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  
  // Floating animation
  const floatingY = useMotionValue(0);
  
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        floatingY.set(Math.sin(Date.now() / 2000 + index) * 5);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isInView, index, floatingY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 0.6);
    y.set(yPct * 0.6);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
      } : {}}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.25,
        ease: [0.16, 1, 0.3, 1], // Custom cubic bezier for smooth entrance
      }}
      className="relative h-[500px] perspective-1000"
      onMouseEnter={() => {
        handleMouseEnter();
        setIsFlipped(true);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsFlipped(false);
      }}
      onMouseMove={handleMouseMove}
      style={{
        rotateX: isFlipped ? 0 : rotateX,
        rotateY: isFlipped ? 0 : rotateY,
        y: floatingY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Enhanced glow effect on hover */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-primary rounded-xl opacity-0 blur-xl"
        animate={{
          opacity: isHovered ? [0, 0.4, 0.3] : 0,
          scale: isHovered ? [1, 1.05, 1.02] : 1,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary glow layer */}
      <motion.div
        className="absolute -inset-0.5 bg-primary rounded-xl opacity-0 blur-md"
        animate={{
          opacity: isFlipped ? 0.25 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          rotateY: {
            duration: 1.0,
            ease: [0.4, 0, 0.2, 1], // Slower, smoother flip
          },
          scale: {
            duration: 0.5,
            ease: "easeOut",
          },
        }}
      >
        {/* Front */}
        <motion.div 
          className="absolute inset-0 backface-hidden"
          animate={{
            scale: isHovered ? 1.05 : 1,
            opacity: isFlipped ? 0 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="relative h-full rounded-xl overflow-hidden bg-gray-900 border border-gray-800 transition-all duration-300 hover:border-primary/50">
            <motion.div
              animate={{
                scale: isFlipped ? 1.1 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
            <Image
              src={trainer.image}
              alt={`${trainer.name} - ${trainer.role} at Fitness Avenue`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            </motion.div>
            
            {/* Animated gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              animate={{
                background: isHovered
                  ? "linear-gradient(to top, rgba(0,0,0,0.95), rgba(225,6,0,0.15), rgba(0,0,0,0.4))"
                  : "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)",
              }}
              transition={{ duration: 0.6 }}
            />

            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 z-10"
              animate={{
                y: isHovered ? -5 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-2 text-white"
                animate={{
                  color: isHovered ? "#E10600" : "#FFFFFF",
                }}
                transition={{ duration: 0.5 }}
              >
                {trainer.name}
              </motion.h3>
              <motion.p 
                className="text-primary font-semibold"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                {trainer.role}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-xl p-8 flex flex-col justify-center border border-primary/30 overflow-hidden"
          style={{ 
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          animate={{
            opacity: isFlipped ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {/* Background gradient - solid color to avoid color conflicts */}
          <div className="absolute inset-0 bg-gray-900" />
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(225, 6, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
          
          {/* Accent border glow */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-primary/20"
            animate={{
              borderColor: isFlipped 
                ? "rgba(225, 6, 0, 0.4)" 
                : "rgba(225, 6, 0, 0.1)",
            }}
            transition={{ duration: 0.6 }}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isFlipped ? 1 : 0,
              y: isFlipped ? 0 : 30,
            }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <motion.h3 
              className="text-2xl font-bold mb-3 text-center text-white"
              initial={{ scale: 0.9 }}
              animate={{ scale: isFlipped ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              {trainer.name}
            </motion.h3>
            <motion.p 
              className="text-primary font-semibold mb-8 text-center text-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: isFlipped ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              {trainer.role}
            </motion.p>
            
            <div className="space-y-4 mb-8">
              <motion.p 
                className="text-gray-300 font-semibold text-sm uppercase tracking-wider text-center"
                initial={{ opacity: 0, y: -15 }}
                animate={{
                  opacity: isFlipped ? 1 : 0,
                  y: isFlipped ? 0 : -15,
                }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              >
                Specialties
              </motion.p>
              <ul className="space-y-3">
                {trainer.specialties.map((specialty, idx) => (
                  <motion.li
                    key={specialty}
                    className="text-gray-200 flex items-center group bg-gray-800/50 rounded-lg px-4 py-2.5 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{
                      opacity: isFlipped ? 1 : 0,
                      x: isFlipped ? 0 : -30,
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + idx * 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    <motion.span 
                      className="w-2.5 h-2.5 bg-primary rounded-full mr-4 flex-shrink-0"
                      animate={{
                        scale: isFlipped ? [1, 1.4, 1] : 1,
                        boxShadow: isFlipped 
                          ? "0 0 12px rgba(225, 6, 0, 0.8)" 
                          : "0 0 0px rgba(225, 6, 0, 0)",
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.9 + idx * 0.2,
                        repeat: isFlipped ? Infinity : 0,
                        repeatDelay: 3,
                      }}
                    />
                    <span className="font-medium">{specialty}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {trainer.instagram && (
              <motion.a
                href={`https://instagram.com/${trainer.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-primary hover:text-red-400 transition-colors duration-300 group bg-gray-800/50 rounded-lg px-6 py-3 border border-primary/30 hover:border-primary/60 hover:bg-gray-800/70"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{
                  opacity: isFlipped ? 1 : 0,
                  y: isFlipped ? 0 : 20,
                  scale: isFlipped ? 1 : 0.9,
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2, 
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{
                    rotate: isFlipped ? [0, 8, -8, 0] : 0,
                  }}
                  transition={{
                    duration: 1.0,
                    delay: 1.3,
                    repeat: isFlipped ? Infinity : 0,
                    repeatDelay: 4,
                  }}
                  whileHover={{ rotate: 20, scale: 1.15 }}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </motion.svg>
                <motion.span 
                  className="text-sm"
                  whileHover={{ x: 3 }}
                >
                  {trainer.instagram}
                </motion.span>
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="py-24 px-4 bg-gradient-to-b from-gray-900 to-background"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Meet Our{" "}
            <motion.span 
              className="text-primary inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05 }}
            >
              Expert Trainers
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Our certified trainers are here to guide you on your fitness journey with personalized attention and expertise.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard key={trainer.name} trainer={trainer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
