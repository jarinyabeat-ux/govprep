"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import Container from "./Container";
import FacebookButton from "./FacebookButton";
import HeroIllustration from "./HeroIllustration";

const EASE = [0.22, 1, 0.36, 1] as const;

const TRUST_POINTS = ["อ่านฟรี ไม่ต้องสมัครสมาชิก", "อัปเดตตามประกาศล่าสุด"];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background pt-14 pb-20 md:pt-20 md:pb-28"
    >
      {/* Soft ambient wash — decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_70%_0%,rgba(29,78,216,0.07),transparent_70%)]"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-4 py-1.5 text-sm font-normal text-muted">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-secondary"
              />
              สรุปเนื้อหาสอบราชการ อ่านฟรีทุกบท
            </span>

            <h1
              id="hero-heading"
              className="mt-6 text-4xl leading-[1.2] text-ink sm:text-5xl lg:text-[3.5rem]"
            >
              เตรียมสอบราชการ
              <br />
              <span className="text-primary">ฉบับคนมีเวลาน้อย</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              สรุปเนื้อหาสอบราชการแบบเข้าใจง่าย อ่านวันละ 10 นาที ก็เตรียมสอบได้
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#articles"
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-7 py-3.5 text-base font-bold text-white shadow-soft transition-all duration-200 hover:bg-primary-hover hover:shadow-lift active:scale-[0.98]"
              >
                เริ่มอ่านฟรี
                <ArrowDown className="size-[1.15em] shrink-0" aria-hidden="true" />
              </a>
              <FacebookButton variant="secondary" size="lg" />
            </div>

            <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-6">
              {TRUST_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <CheckCircle2
                    className="size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
