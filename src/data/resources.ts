import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, Map, Sparkles, FileDown } from "lucide-react";

export type Resource = {
  icon: LucideIcon;
  title: string;
  description: string;
  meta: string;
  /** Placeholder — files are published on the Facebook page first. */
  href: string;
  available: boolean;
};

export const RESOURCES: Resource[] = [
  {
    icon: ClipboardCheck,
    title: "เช็กลิสต์เตรียมสอบ",
    description:
      "รายการสิ่งที่ต้องเตรียมตั้งแต่วันสมัครจนถึงวันสอบ ติ๊กตามได้ทีละข้อ ไม่ตกหล่นเรื่องเอกสาร",
    meta: "PDF · 2 หน้า",
    href: "#resources",
    available: false,
  },
  {
    icon: Map,
    title: "แผนการอ่าน 30 วัน",
    description:
      "ตารางอ่านรายวันสำหรับคนมีเวลาว่างวันละ 10–30 นาที แบ่งเนื้อหาและรอบทบทวนไว้ให้พร้อมใช้",
    meta: "PDF · 4 หน้า",
    href: "#resources",
    available: false,
  },
  {
    icon: Sparkles,
    title: "เทคนิคทำข้อสอบให้ทัน",
    description:
      "วิธีจัดลำดับข้อ บริหารเวลาในห้องสอบ และจัดการความตื่นเต้น เขียนจากข้อผิดพลาดที่พบบ่อยที่สุด",
    meta: "PDF · 3 หน้า",
    href: "#resources",
    available: false,
  },
  {
    icon: FileDown,
    title: "คู่มือสรุปฉบับรวมเล่ม",
    description:
      "รวมบทสรุปทุกหมวดไว้ในไฟล์เดียว สำหรับพิมพ์อ่านนอกจอหรือเปิดทบทวนตอนเดินทาง",
    meta: "PDF · กำลังจัดทำ",
    href: "#resources",
    available: false,
  },
];
