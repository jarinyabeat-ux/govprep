"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { ROADMAP } from "@/data/roadmap";

export default function Roadmap() {
  return (
    <Section id="roadmap" surface labelledBy="roadmap-heading">
      <SectionHeading
        id="roadmap-heading"
        eyebrow="เส้นทางเตรียมสอบ"
        title="จากวันที่เริ่มอ่าน ถึงวันเดินเข้าห้องสอบ"
        description="ลำดับนี้ใช้ได้กับทุกสนามสอบ ปรับความยาวแต่ละช่วงตามเวลาที่คุณมีจริง แล้วเดินตามทีละขั้น"
      />

      <ol className="relative mx-auto mt-14 max-w-3xl">
        {/* Vertical rail — decorative, the ordered list carries the sequence */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[19px] w-px bg-line md:left-1/2 md:-translate-x-1/2"
        />

        {ROADMAP.map((item, index) => (
          <motion.li
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative pb-10 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-x-12 md:pl-0"
          >
            {/* Node */}
            <span
              aria-hidden="true"
              className="absolute top-1 left-0 grid size-10 place-items-center rounded-full border-2 border-primary bg-white text-xs font-bold text-primary md:left-1/2 md:-translate-x-1/2"
            >
              {item.step}
            </span>

            <div
              className={
                index % 2 === 0
                  ? "md:col-start-1 md:pr-4 md:text-right"
                  : "md:col-start-2 md:pl-4"
              }
            >
              <p className="text-xs font-bold tracking-[0.14em] text-secondary uppercase">
                {item.label}
              </p>
              <h3 className="mt-2 text-xl text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.duration}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
