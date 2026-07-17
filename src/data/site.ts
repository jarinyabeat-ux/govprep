/**
 * Single source of truth for brand, URLs and navigation.
 * Change the canonical domain here once the real domain is registered.
 */

export const SITE = {
  /** Canonical URL placeholder — replace with the production domain before launch. */
  url: "https://www.prep-thaigov.com",
  name: "เตรียมสอบราชการ ฉบับคนมีเวลาน้อย",
  shortName: "เตรียมสอบราชการ",
  nameEn: "Government Exam Prep for Busy People",
  logoLine1: "เตรียมสอบราชการ",
  logoLine2: "ฉบับคนมีเวลาน้อย",
  title: "เตรียมสอบราชการ ฉบับคนมีเวลาน้อย | สรุปเนื้อหา แนวข้อสอบ อ่านวันละ 10 นาที",
  description:
    "สรุปเนื้อหาสอบราชการแบบเข้าใจง่าย ทั้ง ก.พ. ท้องถิ่น ครูผู้ช่วย ตำรวจ และรัฐวิสาหกิจ พร้อมแนวข้อสอบและเทคนิคจำ อ่านวันละ 10 นาที ก็เตรียมสอบได้ อัปเดตตามประกาศล่าสุด",
  locale: "th_TH",
  language: "th",
  facebook: "https://www.facebook.com/Test.thaigovernment",
  email: "contact@prep-thaigov.com",
  ogImage: "/og-image.png",
  keywords: [
    "เตรียมสอบราชการ",
    "สอบ ก.พ.",
    "แนวข้อสอบ ก.พ.",
    "สอบท้องถิ่น",
    "สอบครูผู้ช่วย",
    "สอบตำรวจ",
    "สอบรัฐวิสาหกิจ",
    "สรุปเนื้อหาสอบราชการ",
    "อ่านหนังสือสอบราชการ",
    "เทคนิคสอบราชการ",
    "ข้อสอบราชการ พร้อมเฉลย",
    "ติวสอบราชการ ฟรี",
  ],
} as const;

/** Shared props for every outbound link to the official page. */
export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "หน้าแรก", href: "#home" },
  { label: "หมวดสอบ", href: "#categories" },
  { label: "บทความ", href: "#articles" },
  { label: "คำถามที่พบบ่อย", href: "#faq" },
  { label: "Facebook", href: SITE.facebook, external: true },
];
