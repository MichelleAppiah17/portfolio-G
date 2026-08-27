const awards = [
  {
    title: "Leadership Recognition — House Prefect (RA)",
    place: "St. Louis Senior High School",
    period: "Sep 2021",
    category: "Leadership",
    detail:
      "Recognized for exemplary leadership, discipline enforcement, and effective support in managing residential student affairs for ~100 students; directly mentored and impacted 7 individuals through guidance and conflict resolution.",
  },
  {
    title: "Leadership Recognition — Editorial Board",
    place: "St. Louis Senior High School",
    period: "Feb 2021",
    category: "Leadership",
    detail:
      "Recognized for leading media initiatives and coordinating 2 student-driven projects that reached and influenced 200+ students, raising awareness on social and environmental issues.",
  },
  {
    title: "Academic Excellence Award — Mathematics & Science",
    place: "St. Louis Senior High School",
    period: "Sep 2020",
    category: "Academic",
    detail:
      "Awarded for outstanding academic performance, ranking among the top 10 students with consistently high grades in mathematics and science.",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="rule-dots mb-16" />

      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <p className="eyebrow">Awards</p>
        <p className="font-mono text-[0.65rem] uppercase tracking-widest2 text-plum-400">
          {awards.length} recognitions · 2020–2021
        </p>
      </div>

      <ol className="relative border-l border-gold-400/30 pl-8 sm:pl-10">
        {awards.map((item) => (
          <li key={item.title} className="group relative pb-12 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full border-2 border-gold-400/60 bg-transparent transition-colors duration-300 group-hover:border-gold-500 group-hover:bg-gold-500 sm:-left-[calc(2.5rem+5px)]"
            />

            <div className="rounded-2xl bg-gold-400/10 p-6 transition-all duration-300 group-hover:bg-gold-400/[0.14] group-hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-[0.65rem] uppercase tracking-widest2 text-gold-600">
                  {item.period}
                </p>
                <span className="h-1 w-1 rounded-full bg-plum-300" aria-hidden />
                <p className="font-mono text-[0.65rem] uppercase tracking-widest2 text-plum-400">
                  {item.category}
                </p>
              </div>

              <h3 className="mt-3 font-display text-lg text-plum-950">{item.title}</h3>
              <p className="mt-1 text-sm text-plum-500">{item.place}</p>
              <p className="mt-3 text-sm leading-relaxed text-plum-700">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}