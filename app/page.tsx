'use client'

import { motion } from 'framer-motion'

const imageMap = {
  peteExplainer: '/images/pete-explainer.png',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* --- HEATING & AIR SECTION --- */}
      <section id="heating-air" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - IMAGE */}
        <div>
          <img
            src="/images/heating-air-master-drive.png"
            alt="Heating and Air system"
            className="w-full rounded-xl"
          />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold">Heating & Air</h2>
          <p className="mt-4 text-white/70">
            Heating & Air is the first public deployment of the ThermaBlue platform,
            demonstrating durable climate control built on disciplined engineering principles.
          </p>

          {/* --- PETE (ANIMATED) --- */}
          <motion.img
            src={imageMap.peteExplainer}
            alt="Pete guiding the Heating & Air section"
            className="mt-8 w-40"
            animate={{
              y: [0, -8, 0],
              rotate: [0, -1.2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </section>

    </main>
  )
}
