import type { LucideIcon } from "lucide-react";
import { FileText, ListChecks, Lightbulb, RefreshCw } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    icon: FileText,
    title: "สรุปสั้น ตรงประเด็น",
    description:
      "ย่อยเนื้อหาที่ออกสอบจริงให้เหลือเฉพาะส่วนที่ต้องรู้ อ่านจบได้ในเวลาพักกลางวัน ไม่ต้องไล่อ่านทั้งเล่ม",
  },
  {
    icon: ListChecks,
    title: "แนวข้อสอบให้ลองทำ",
    description:
      "ทุกบทสรุปมีโจทย์ให้ทบทวนพร้อมเฉลยอธิบายทีละขั้น ช่วยให้รู้ว่าเข้าใจจริงหรือแค่คุ้นตา",
  },
  {
    icon: Lightbulb,
    title: "อธิบายด้วยภาษาที่เข้าใจง่าย",
    description:
      "เลี่ยงศัพท์กฎหมายและภาษาราชการที่ซับซ้อน ใช้ตัวอย่างใกล้ตัวและตารางเปรียบเทียบแทนการท่องจำ",
  },
  {
    icon: RefreshCw,
    title: "อัปเดตตามประกาศล่าสุด",
    description:
      "ตรวจทานเนื้อหาตามหลักสูตรและระเบียบที่เปลี่ยนแปลง เพื่อให้สิ่งที่คุณอ่านตรงกับข้อสอบปีปัจจุบัน",
  },
];
