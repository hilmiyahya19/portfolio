'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motion'
import Image from 'next/image'

export default function About() {
  // 🔹 Tanggal ditulis manual
  const writtenDate = 'October 21, 2025'

  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 xl:px-32 flex flex-col items-center text-center text-gray-200">
      <motion.div
        className="max-w-2xl flex flex-col items-center space-y-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* 🔹 Foto profil */}
        <motion.div
          variants={fadeInUp(0)}
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-cyan-500/30 shadow-lg"
        >
          <Image
            src="/images/profile.jpg" // Ganti dengan foto kamu di folder public/
            alt="Hilmi Yahya"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 🔹 Deskripsi singkat */}
        <motion.p
          variants={fadeInUp(0.1)}
          className="text-base md:text-lg leading-relaxed text-gray-300 max-w-prose"
        >
          I am a Computer Science graduate with an interest in full stack web development. I work with technologies such as React, Next.js, and Vue.js for the frontend, and Node.js with Express.js for the backend. I use JavaScript, TypeScript, and PHP as my programming languages, and have experience managing data with MySQL and MongoDB. I am continuously learning and exploring new technologies to strengthen my skills and develop as a full stack web developer.
        </motion.p>

        {/* 🔹 Tanggal ditulis manual */}
        <motion.p
          variants={fadeInUp(0.15)}
          className="text-sm text-gray-500 mt-4"
        >
          🗓️ Written on {writtenDate}
        </motion.p>
      </motion.div>
    </section>
  )
}
