import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle?: string; // tambahkan ini (optional agar fleksibel)
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent text-center"
    > 
      {title} <br /> {subtitle && <span className="text-accent2 text-lg">{subtitle}</span>}
    </motion.h2>
  );
}
