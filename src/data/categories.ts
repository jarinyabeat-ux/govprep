import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  Building2,
  GraduationCap,
  ShieldCheck,
  Factory,
  Compass,
} from "lucide-react";

export type Category = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  /** Placeholder route — the category page ships in a later phase. */
  href: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "ocsc",
    icon: Landmark,
    title: "ก.พ.",
    description:
      "วิชาความสามารถทั่วไป ภาษาไทย ภาษาอังกฤษ และกฎหมาย พร้อมสูตรลัดคณิตศาสตร์ที่ใช้ได้จริงในห้องสอบ",
    href: "#articles",
  },
  {
    slug: "local",
    icon: Building2,
    title: "ท้องถิ่น",
    description:
      "ภาค ก ภาค ข ของกรมส่งเสริมการปกครองท้องถิ่น ครอบคลุมระเบียบบริหารราชการและกฎหมายที่เกี่ยวข้อง",
    href: "#articles",
  },
  {
    slug: "teacher",
    icon: GraduationCap,
    title: "ครูผู้ช่วย",
    description:
      "ความรอบรู้ทั่วไป มาตรฐานวิชาชีพครู จรรยาบรรณ และวิชาเอก พร้อมแนวทางเตรียมสอบสัมภาษณ์",
    href: "#articles",
  },
  {
    slug: "police",
    icon: ShieldCheck,
    title: "ตำรวจ",
    description:
      "สายอำนวยการและสายปราบปราม ทั้งกฎหมาย ป.วิ.อาญา ภาษาอังกฤษ และการเตรียมทดสอบสมรรถภาพร่างกาย",
    href: "#articles",
  },
  {
    slug: "state-enterprise",
    icon: Factory,
    title: "รัฐวิสาหกิจ",
    description:
      "แนวข้อสอบความถนัด ความรู้ทั่วไปเกี่ยวกับองค์กร และการเตรียมตัวสัมภาษณ์ของหน่วยงานยอดนิยม",
    href: "#articles",
  },
  {
    slug: "others",
    icon: Compass,
    title: "อื่นๆ",
    description:
      "หน่วยงานเฉพาะทางและการสอบเฉพาะกลุ่ม เช่น พนักงานราชการและลูกจ้าง พร้อมวิธีอ่านประกาศรับสมัคร",
    href: "#articles",
  },
];
