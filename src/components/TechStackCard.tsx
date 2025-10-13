"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface TechStackProps {
  name: string;
  image: string;
}

export default function TechStackCard({ name, image }: TechStackProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center text-center mt-5">
      <Image 
        src={image} 
        alt={name} 
        className="w-12 h-12 mb-2" 
        width={500}
        height={500}
        />
      <p className="text-xs text-gray-300">{name}</p>
    </motion.div>
  );
}
