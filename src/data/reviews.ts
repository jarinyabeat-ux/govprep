/**
 * Screenshots of real "สอบผ่าน" messages from students, shared with the page's
 * permission. Images live in /public. Kept as data so the gallery and any future
 * schema read from one place.
 */
export type Review = {
  image: string;
  alt: string;
};

export const REVIEWS: Review[] = [
  { image: "/review-01.jpg", alt: "รีวิวผู้สอบผ่าน ก.พ. 69 แจ้งข่าวสอบผ่านผ่านข้อความเพจ" },
  { image: "/review-02.jpg", alt: "รีวิวผู้สอบผ่าน ก.พ. 69 ครั้งที่ 3 หลังเข้าคอร์สติว" },
  { image: "/review-03.jpg", alt: "รีวิวผู้สอบผ่าน ก.พ. 69 พร้อมภาพหนังสือขุมทรัพย์ข้อสอบจริง" },
  { image: "/review-04.jpg", alt: "รีวิวผู้สอบผ่าน ก.พ. 69 ขอบคุณพี่หวานพี่ต่าย" },
  { image: "/review-05.jpg", alt: "รีวิวผู้สอบผ่าน ก.พ. 69 พร้อมประกาศรายชื่อผู้สอบผ่าน" },
  { image: "/review-06.jpg", alt: "รีวิวผู้สอบผ่าน ก.พ. 69 แจ้งข่าวดีสอบผ่านแล้ว" },
  { image: "/review-07.jpg", alt: "รีวิวผู้สอบผ่าน ก.พ. 69 สอบผ่านเป็นชื่อแรกของประกาศ" },
  { image: "/review-08.jpg", alt: "รีวิวผู้สอบผ่าน ก.พ. 69 ขอบคุณคลิปติวและคำแนะนำ" },
];
