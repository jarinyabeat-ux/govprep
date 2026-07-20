/**
 * Books & courses shown on the homepage. This site is NOT a storefront — there
 * is no cart or online payment. Every "สั่งซื้อ" button links to the Facebook
 * page, where the sale is completed by message. All figures here are supplied
 * by the page owner as accurate.
 */

export type Course = {
  slug: string;
  badge?: string;
  title: string;
  description: string;
  /** Selling price in THB. */
  price: number;
  /** Local image in /public. */
  image: string;
  imageAlt: string;
  /** Short feature bullets. */
  points: string[];
};

export const COURSES: Course[] = [
  {
    slug: "mock-exam-400",
    badge: "ครบชุด 400 ข้อ",
    title: "ชุด Test ก.พ. เสมือนจริง 4 ชุด",
    description:
      "แบบทดสอบเสมือนจริง 4 ชุด ชุดละ 100 ข้อ รวม 400 ข้อ พร้อมเฉลยละเอียดแบบวิธีทำอยู่ด้านหลังเล่ม ใช้ฝึกจับเวลาก่อนสอบจริง ครอบคลุมทั้ง e-Exam และ Paper",
    price: 459,
    image: "/course-cover.jpg",
    imageAlt: "หนังสือชุดแนวข้อสอบ ก.พ. เสมือนจริง 4 ชุด รวม 400 ข้อ",
    points: ["4 ชุด รวม 400 ข้อ", "เฉลยละเอียดแบบวิธีทำ", "ครอบคลุม e-Exam และ Paper"],
  },
  {
    slug: "full-course-kpor",
    badge: "ขายดี",
    title: "คอร์สติว ก.พ. ครบทุกวิชา",
    description:
      "คอร์สติวสอบ ก.พ. ครบทุกวิชาในคอร์สเดียว ทั้งคณิตศาสตร์ ภาษาไทย ภาษาอังกฤษ และกฎหมาย สอนโดยพี่หวานและพี่ต่าย เน้นเทคนิคทำข้อสอบให้ทันเวลา เหมาะกับคนมีเวลาน้อย",
    price: 590,
    image: "/course-cover.jpg",
    imageAlt: "คอร์สติวสอบ ก.พ. ครบทุกวิชา โดยเพจเตรียมสอบราชการ ฉบับคนมีเวลาน้อย",
    points: ["ครบทุกวิชาในคอร์สเดียว", "เน้นเทคนิคทำให้ทันเวลา", "สอนโดยพี่หวานและพี่ต่าย"],
  },
];
