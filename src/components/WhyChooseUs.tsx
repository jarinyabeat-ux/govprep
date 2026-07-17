"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { FEATURES } from "@/data/features";

export default function WhyChooseUs() {
  return (
    <Section id="why" surface labelledBy="why-heading">
      <SectionHeading
        id="why-heading"
        eyebrow="ทำไมต้องที่นี่"
        title="อ่านน้อยลง แต่เข้าใจมากขึ้น"
        description="เราออกแบบเนื้อหาให้เหมาะกับคนที่ต้องทำงานประจำไปด้วย เตรียมสอบไปด้วย จึงเน้นสิ่งที่ออกสอบจริงและตัดส่วนที่ไม่จำเป็นออก"
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.li
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group h-full rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lift"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg text-ink">{feature.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {feature.description}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
