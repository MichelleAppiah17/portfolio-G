import { ExternalLink } from "lucide-react";
import { siteConfig } from "./siteConfig";

const education = [
  {
    org: "AUC Data Science Experience",
    place: "Remote",
    title: "Student Researcher — Cyber Financial Fraud, AI & Cybersecurity",
    period: "07/2026",
    link: siteConfig.links.aucDataScience,
    points: [
      "Conducted interdisciplinary research on cyber financial fraud in Ghana, examining attack patterns, contributing factors, technological vulnerabilities, and socioeconomic impacts.",
      "Applied data science, cybersecurity, and information-systems analysis to examine fraud trends and identify indicators of suspicious financial activity.",
      "Explored AI-driven approaches to fraud detection, including intelligent pattern recognition for anomalous transactions.",
      "Communicated findings through research presentations, translating cybersecurity and computational concepts into practical recommendations.",
    ],
  },
  {
    org: "Kwame Nkrumah University of Science and Technology",
    place: "Kumasi, Ghana",
    title: "B.Sc. Computer Science",
    period: "01/2022 — 09/2025",
    link: siteConfig.links.knust,
    points: [
      "Coursework: C++, Introduction to AI, Embedded Systems, Computer Security, Computer Networks, Data Communication, Operating Systems, Web-Based Concepts and Development, Human-Computer Interaction, Numerical Methods, Assembly Language, OOP with Java.",
      "Progressive specialization: Programming → Systems → Network → Security → AI → Information Systems → Research.",
    ],
  },
  {
    org: "The Odin Project",
    place: "Software Development Training",
    title: "Full-Stack Web Development",
    period: "10/2022 — 11/2023",
    link: siteConfig.links.theOdinProject,
    points: [
      "Structured, project-based training in JavaScript (ES6+), DOM manipulation, OOP, React.js, Node.js, RESTful APIs, MongoDB, Git/GitHub, and application deployment.",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="rule-dots mb-16" />
      <p className="eyebrow mb-10">Education &amp; Research</p>
      <div className="space-y-16">
        {education.map((item) => (
          <div key={item.org} className="grid gap-4 md:grid-cols-[220px_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest2 text-rose-600">
                {item.period}
              </p>
              <h3 className="mt-2 font-display text-xl text-plum-950">{item.org}</h3>
              <p className="text-sm text-plum-600">{item.place}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring mt-2 inline-flex items-center gap-1 font-mono text-xs text-rose-600 transition-colors hover:text-plum-950"
                >
                  Visit site
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
            <div>
              <h4 className="font-display text-lg text-plum-900">{item.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-plum-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}