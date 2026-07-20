/** Headline figures shown in the trust bar under the hero. Owner-confirmed. */
export type Stat = {
  value: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: "10+", label: "ปีประสบการณ์ติวสอบ" },
  { value: "25,000+", label: "เล่มที่ส่งถึงผู้เรียน" },
  { value: "5", label: "วิชาครบในที่เดียว" },
  { value: "รีวิวจริง", label: "จากผู้สอบผ่านทุกปี" },
];
