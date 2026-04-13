"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CertificateProps {
  name: string;
  image: string;
}

export default function CertificateCard({ name, image }: CertificateProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 p-3 rounded-xl text-center"
    >
      <Image
        src={image}
        alt={name}
        className="rounded-lg mb-4 object-cover w-full aspect-[1900/1400]"
        width={1900}
        height={1400}
      />
      <p className="text-sm font-medium">{name}</p>
    </motion.div>
  );
}
