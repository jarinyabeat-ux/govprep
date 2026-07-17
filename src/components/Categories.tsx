"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { CATEGORIES } from "@/data/categories";

export default function Categories() {
  return (
    <Section id="categories" labelledBy="categories-heading">
      <SectionHeading
        id="categories-heading"
        eyebrow="หมวดสอบ"
        title="เลือกสนามสอบที่คุณกำลังเตรียม"
        description="แต่ละหมวดมีขอบเขตวิชาและวิธีอ่านที่ต่างกัน เริ่มจากหมวดของคุณก่อน แล้วค่อยขยับไปหมวดอื่นเมื่อพร้อม"
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.li
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={category.href}
                className="group flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-surface text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="size-5 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 text-xl text-ink">{category.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {category.description}
                </p>
                <span className="mt-6 text-sm font-bold text-primary">
                  ดูบทความในหมวดนี้
                  <span className="sr-only"> {category.title}</span>
                </span>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
