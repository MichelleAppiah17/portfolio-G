const stats = [
  { value: "443", label: "students taught, KNUST CS Dept" },
  { value: "30+", label: "learners with disabilities mentored (IEEE)" },
  { value: "3+", label: "years across research & software roles" },
];

export default function Highlights() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-4">
      <div className="grid gap-4 sm:grid-cols-[1fr_1fr_1fr_auto]">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="font-display text-3xl text-rose-600">{stat.value}</p>
            <p className="mt-1 text-sm text-plum-700">{stat.label}</p>
          </div>
        ))}
        <div className="flex items-center gap-3 rounded-2xl bg-plum-950 p-5 text-cream shadow-sm sm:col-span-1">
          <span className="text-2xl">🏅</span>
          <p className="text-sm leading-snug">
            Nominated <span className="font-medium text-gold-400">Best Female Programmer</span>,
            KNUST Computer Science Dept. — 07/2024
          </p>
        </div>
      </div>
    </section>
  );
}
