export type Article = {
  slug: string;
  category: string;
  readingTime: number;
  title: string;
  description: string;
  /** Thumbnail placeholder tone — rendered as a CSS gradient, no image request. */
  tone: "blue" | "amber" | "slate";
  /** Placeholder route — article pages ship in a later phase. */
  href: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "kpor-exam-structure-2568",
    category: "ก.พ.",
    readingTime: 8,
    title: "โครงสร้างข้อสอบ ก.พ. ภาค ก. มีอะไรบ้าง อ่านอะไรก่อนดี",
    description:
      "แยกให้เห็นชัดว่าแต่ละวิชาออกกี่ข้อ คิดเป็นกี่คะแนน และควรเริ่มอ่านจากส่วนไหนเมื่อเหลือเวลาเตรียมตัวไม่มาก",
    tone: "blue",
    href: "#articles",
  },
  {
    slug: "math-shortcut-series",
    category: "ก.พ.",
    readingTime: 10,
    title: "สูตรลัดอนุกรม 7 แบบที่ออกสอบบ่อยที่สุด",
    description:
      "จับรูปแบบอนุกรมที่พบซ้ำในข้อสอบหลายปี พร้อมวิธีสังเกตผลต่างและอัตราส่วนให้ได้คำตอบภายใน 30 วินาที",
    tone: "amber",
    href: "#articles",
  },
  {
    slug: "local-gov-law-summary",
    category: "ท้องถิ่น",
    readingTime: 12,
    title: "สรุปกฎหมายท้องถิ่น 5 ฉบับหลัก ที่ต้องรู้ก่อนเข้าห้องสอบ",
    description:
      "เปรียบเทียบสาระสำคัญของเทศบาล อบต. และ อบจ. ในตารางเดียว เห็นความต่างของโครงสร้างและอำนาจหน้าที่ทันที",
    tone: "slate",
    href: "#articles",
  },
  {
    slug: "teacher-assistant-plan",
    category: "ครูผู้ช่วย",
    readingTime: 9,
    title: "วางแผนอ่านหนังสือสอบครูผู้ช่วย ภายใน 30 วัน",
    description:
      "ตารางอ่านรายสัปดาห์สำหรับคนทำงานประจำ แบ่งเนื้อหาความรอบรู้ วิชาชีพครู และวิชาเอกให้ลงตัวโดยไม่ต้องลางาน",
    tone: "blue",
    href: "#articles",
  },
  {
    slug: "police-english-vocab",
    category: "ตำรวจ",
    readingTime: 7,
    title: "คำศัพท์ภาษาอังกฤษสายตำรวจ ที่เจอในข้อสอบซ้ำทุกปี",
    description:
      "รวมคำศัพท์และสำนวนที่ใช้ในบริบทงานตำรวจ พร้อมประโยคตัวอย่างและวิธีจำแบบเชื่อมโยงกับสถานการณ์จริง",
    tone: "amber",
    href: "#articles",
  },
  {
    slug: "state-enterprise-interview",
    category: "รัฐวิสาหกิจ",
    readingTime: 11,
    title: "สอบรัฐวิสาหกิจต่างจากสอบราชการอย่างไร เตรียมตัวแบบไหน",
    description:
      "อธิบายความต่างของกระบวนการคัดเลือก ข้อสอบความถนัด และสิ่งที่กรรมการมักถามในรอบสัมภาษณ์",
    tone: "slate",
    href: "#articles",
  },
];
