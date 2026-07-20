"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { STATS } from "@/data/stats";

export default function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="bg-background pb-8">
      <Container>
        <h2 id="stats-heading" className="sr-only">
          ตัวเลขที่บอกความน่าเชื่อถือ
        </h2>
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-8 rounded-card bg-primary px-6 py-10 text-center md:grid-cols-4 md:px-10"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-bold text-on-gold md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-sm text-white/85">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
