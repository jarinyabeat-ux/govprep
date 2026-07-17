"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import FacebookButton from "./FacebookButton";
import { RESOURCES } from "@/data/resources";

export default function FreeResources() {
  return (
    <Section id="resources" labelledBy="resources-heading">
      <SectionHeading
        id="resources-heading"
        eyebrow="แหล่งข้อมูลฟรี"
        title="ไฟล์ที่ช่วยให้คุณเริ่มได้เร็วขึ้น"
        description="เอกสารสรุปและแผนการอ่านที่ดาวน์โหลดไปใช้ได้เลย เราแจกฟรีและแจ้งทุกครั้งที่มีไฟล์ใหม่ผ่านเพจ Facebook"
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2">
        {RESOURCES.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <motion.li
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: (index % 2) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-full gap-5 rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lift sm:p-7"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary-soft text-secondary">
                <Icon className="size-6" aria-hidden="true" />
              </span>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg text-ink">{resource.title}</h3>
                  <span className="rounded-pill bg-surface px-2.5 py-0.5 text-xs text-muted">
                    {resource.meta}
                  </span>
                </div>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">
                  {resource.description}
                </p>

                {resource.available ? (
                  <a
                    href={resource.href}
                    download
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    ดาวน์โหลดไฟล์
                    <span className="sr-only">: {resource.title}</span>
                  </a>
                ) : (
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-muted">
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-secondary"
                    />
                    เตรียมเผยแพร่เร็ว ๆ นี้
                  </p>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-card border border-line bg-surface px-6 py-8 text-center">
        <p className="prose-width text-[0.95rem] text-muted">
          ไฟล์ทั้งหมดเผยแพร่ผ่านเพจก่อนเป็นที่แรก กดติดตามไว้เพื่อรับไฟล์ใหม่ทันทีที่ปล่อย
        </p>
        <FacebookButton size="md" label="รับไฟล์ผ่าน Facebook" />
      </div>
    </Section>
  );
}
