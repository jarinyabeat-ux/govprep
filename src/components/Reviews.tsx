"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import FacebookButton from "./FacebookButton";
import { REVIEWS } from "@/data/reviews";

export default function Reviews() {
  return (
    <Section id="reviews" surface labelledBy="reviews-heading">
      <SectionHeading
        id="reviews-heading"
        eyebrow="รีวิวจากผู้สอบผ่าน"
        title="เสียงจริงจากคนที่สอบผ่าน ก.พ. 69"
        description="ข้อความจากผู้เรียนที่แจ้งข่าวสอบผ่านเข้ามาที่เพจ ขอบคุณทุกกำลังใจ และยินดีกับทุกคนที่ทำสำเร็จด้วยนะคะ"
      />

      <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {REVIEWS.map((review, index) => (
          <motion.li
            key={review.image}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.4,
              delay: (index % 4) * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lift"
          >
            {/* Square screenshots — fixed ratio keeps CLS at zero */}
            <div className="relative aspect-square w-full bg-surface">
              <Image
                src={review.image}
                alt={review.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-card border border-line bg-white px-6 py-8 text-center shadow-soft">
        <p className="prose-width text-[0.95rem] text-muted">
          อยากเห็นรีวิวและข่าวผู้สอบผ่านเพิ่มเติม ติดตามได้ที่เพจ เราอัปเดตทุกครั้งที่มีผลสอบ
        </p>
        <FacebookButton size="md" label="ดูรีวิวเพิ่มเติมที่ Facebook" />
      </div>
    </Section>
  );
}
