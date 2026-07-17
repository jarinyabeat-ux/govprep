"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`prose-width ${isCentered ? "mx-auto text-center" : ""}`}
    >
      <p className="text-sm font-bold tracking-[0.14em] text-primary uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl leading-tight text-ink sm:text-4xl md:text-[2.75rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base text-muted sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
