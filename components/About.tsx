'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-8">About</h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              Senior Software Engineer with strong experience building scalable backend systems and
              modern full-stack applications across cloud-native environments. Proven background in
              Node.js, React, Express, Python, and DevOps practices with hands-on experience at New
              Relic and NVIDIA. Experienced in distributed systems, observability, automation, and
              infrastructure optimization. Passionate about building reliable systems, improving
              deployment workflows, and delivering high-performance production software.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


