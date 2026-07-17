"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { FAQS } from "@/data/faqs";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Section id="faq" labelledBy="faq-heading">
      <SectionHeading
        id="faq-heading"
        eyebrow="คำถามที่พบบ่อย"
        title="เรื่องที่คนเตรียมสอบถามเราบ่อยที่สุด"
        description="ถ้ายังไม่เจอคำตอบที่ต้องการ ทักถามได้โดยตรงที่เพจ Facebook เราอ่านทุกข้อความ"
      />

      <div className="prose-width mx-auto mt-14">
        <ul className="flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-q-${index}`;
            const panelId = `${baseId}-a-${index}`;

            return (
              <li
                key={faq.question}
                className={`overflow-hidden rounded-card border bg-white transition-colors duration-300 ${
                  isOpen ? "border-primary/30 shadow-soft" : "border-line"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left text-[1.0625rem] font-bold text-ink transition-colors hover:bg-surface"
                  >
                    <span>{faq.question}</span>
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-surface text-muted"
                      }`}
                    >
                      <Plus className="size-4" />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
