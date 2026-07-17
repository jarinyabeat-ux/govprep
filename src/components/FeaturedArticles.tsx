"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { ARTICLES, type Article } from "@/data/articles";

const TONES: Record<Article["tone"], string> = {
  blue: "from-[#1D4ED8] to-[#3B82F6]",
  amber: "from-[#F59E0B] to-[#FBBF24]",
  slate: "from-[#111827] to-[#374151]",
};

export default function FeaturedArticles() {
  return (
    <Section id="articles" surface labelledBy="articles-heading">
      <SectionHeading
        id="articles-heading"
        eyebrow="บทความแนะนำ"
        title="เริ่มอ่านจากบทที่คนเตรียมสอบอ่านมากที่สุด"
        description="ทุกบทสรุปจบในตอนเดียว มีแนวข้อสอบให้ลองทำท้ายบท และบอกเวลาอ่านไว้ล่วงหน้าเพื่อให้วางแผนได้ง่าย"
      />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((article, index) => (
          <motion.li
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.45,
              delay: (index % 3) * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full"
          >
            <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift">
              {/* Thumbnail placeholder — fixed aspect ratio keeps CLS at zero */}
              <div
                aria-hidden="true"
                className={`relative aspect-[16/9] w-full bg-gradient-to-br ${TONES[article.tone]}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,rgba(255,255,255,0.28),transparent_60%)]" />
                <span className="absolute bottom-4 left-5 text-3xl font-bold text-white/90">
                  {article.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-pill bg-primary-soft px-3 py-1 text-xs font-bold text-primary">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                    <Clock className="size-3.5" aria-hidden="true" />
                    อ่าน {article.readingTime} นาที
                  </span>
                </div>

                <h3 className="mt-4 text-lg leading-snug text-ink">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.925rem] leading-relaxed text-muted">
                  {article.description}
                </p>

                <a
                  href={article.href}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-lg text-sm font-bold text-primary transition-colors hover:text-primary-hover"
                >
                  อ่านต่อ
                  <span className="sr-only">: {article.title}</span>
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>

      <p className="mt-10 text-center text-sm text-muted">
        บทความฉบับเต็มกำลังทยอยเผยแพร่ ติดตามเพจ Facebook เพื่อรับแจ้งเตือนบทใหม่ก่อนใคร
      </p>
    </Section>
  );
}
