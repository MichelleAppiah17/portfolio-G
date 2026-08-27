import Image from "next/image";

const leadership = [
  {
    title: "Vice President",
    org: "Computer Science Student Association, KNUST",
    period: "12/2024 — 07/2025",
    detail:
      "Supported coordination of student activities, academic initiatives, and professional development programs — working with student leaders to promote collaboration and opportunities within the Computer Science community.",
  },
  {
    title: "Unit Head",
    org: "Developers in Vogue (DiV) — KNUST Chapter",
    period: "11/2023 — 07/2024",
    detail:
      "Coordinated chapter activities and supported member growth, facilitating collaboration, technical learning, and community engagement to help members build skills and connect with opportunities in tech.",
  },
  {
    title: "House Prefect (RA)",
    org: "St. Louis Senior High School",
    period: "05/2020 — 09/2021",
    detail:
      "Supported and supervised ~100 students within the residential community, acting as a liaison between students and school authorities, and assisting with conflict resolution and discipline.",
  },
];

const alsoInvolvedWith = [
  { title: "Web Master", org: "IEEE Computer Society" },
  { title: "Publicity & Tech Team Member", org: "Enactus KNUST" },
];

export default function Organizations() {
  return (
    <section id="organizations" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="rule-dots mb-16" />
      <p className="eyebrow mb-10">Leadership &amp; Organizations</p>
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="space-y-10">
          {leadership.map((item) => (
            <div key={item.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg text-plum-950">
                  {item.title} <span className="text-rose-600">· {item.org}</span>
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest2 text-plum-500">
                  {item.period}
                </span>
              </div>
              <p className="mt-2 text-plum-700">{item.detail}</p>
            </div>
          ))}

          <div className="pt-2">
            <p className="font-mono text-xs uppercase tracking-widest2 text-plum-500">
              Also involved with
            </p>
            <ul className="mt-3 space-y-1.5">
              {alsoInvolvedWith.map((item) => (
                <li key={item.title} className="text-plum-800">
                  <span className="font-medium">{item.title}</span> · {item.org}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border-2 border-rose-100 shadow-sm">
          <Image
            src="/images/volunteering-workshop.jpg"
            alt="Michelle helping students during a tech workshop"
            width={1179}
            height={968}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
