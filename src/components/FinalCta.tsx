"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import FacebookButton from "./FacebookButton";

export default function FinalCta() {
  return (
    <section
      id="follow"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-primary py-20 md:py-28"
    >
      {/* Decorative light wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(255,255,255,0.16),transparent_65%)]"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="prose-width relative mx-auto text-center"
        >
          <h2
            id="cta-heading"
            className="text-on-gold text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
          >
            เริ่มเตรียมสอบราชการวันนี้
          </h2>
          <p className="text-on-gold mt-5 text-base leading-relaxed opacity-90 sm:text-lg">
            ติดตามเพจ Facebook เพื่อรับสรุปเนื้อหา แนวข้อสอบ และเทคนิคใหม่ ๆ
            อย่างต่อเนื่อง
          </p>
          <div className="mt-9 flex justify-center">
            <FacebookButton variant="onDark" size="lg" />
          </div>
          <p className="text-on-gold mt-5 text-sm opacity-85">
            ฟรี ไม่มีค่าใช้จ่าย ติดต่อสอบถามได้ตลอดเวลา
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
