"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Facebook } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import FacebookButton from "./FacebookButton";
import { EXTERNAL_LINK_PROPS, SITE } from "@/data/site";
import { COURSES } from "@/data/courses";

/** Formats a THB price without decimals, e.g. 459 → "459". */
const thb = (n: number) => new Intl.NumberFormat("th-TH").format(n);

export default function Courses() {
  return (
    <Section id="courses" surface labelledBy="courses-heading">
      <SectionHeading
        id="courses-heading"
        eyebrow="หนังสือและคอร์ส"
        title="เลือกชุดที่เหมาะกับเป้าหมายคุณ"
        description="หนังสือแนวข้อสอบและคอร์สติวที่ใช้เตรียมสอบจริง สั่งซื้อและสอบถามรายละเอียดเพิ่มเติมได้ทางเพจ Facebook โดยตรง"
      />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2">
        {COURSES.map((course, index) => (
          <motion.li
            key={course.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full"
          >
            <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift">
              {/* Cover — fixed aspect ratio to keep CLS at zero */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {course.badge ? (
                  <span className="text-on-gold absolute top-4 left-4 rounded-pill bg-secondary px-3 py-1 text-xs font-bold shadow-soft">
                    {course.badge}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="text-xl text-ink">{course.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {course.description}
                </p>

                <ul className="mt-5 flex flex-col gap-2">
                  {course.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-ink"
                    >
                      <Check
                        className="size-4 shrink-0 text-primary-ink"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-6">
                  <p className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary-ink">
                      {thb(course.price)}
                    </span>
                    <span className="text-lg font-bold text-primary-ink">฿</span>
                  </p>

                  <a
                    href={SITE.facebook}
                    {...EXTERNAL_LINK_PROPS}
                    aria-label={`สั่งซื้อ ${course.title} ผ่านเพจ Facebook (เปิดในแท็บใหม่)`}
                    className="text-on-gold inline-flex items-center gap-2 rounded-pill bg-secondary px-6 py-3 text-[0.95rem] font-bold shadow-soft transition-all duration-200 hover:brightness-95 hover:shadow-lift active:scale-[0.98]"
                  >
                    <Facebook className="size-[1.1em] shrink-0" aria-hidden="true" />
                    สั่งซื้อผ่านเพจ
                  </a>
                </div>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-card border border-line bg-white px-6 py-8 text-center shadow-soft">
        <p className="prose-width text-[0.95rem] text-muted">
          ยังไม่แน่ใจว่าเริ่มจากเล่มไหนดี? ทักถามพี่หวานพี่ต่ายได้โดยตรงที่เพจ
          เราช่วยแนะนำชุดที่เหมาะกับเวลาและเป้าหมายของคุณ
        </p>
        <FacebookButton size="md" label="สอบถามและสั่งซื้อทาง Facebook" />
      </div>
    </Section>
  );
}
