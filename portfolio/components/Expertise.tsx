"use client";

import { useEffect, useRef, useState } from "react";

const expertise = [
  "Artificial Intelligence & Machine Learning",
  "Deep Learning & Neural Network Architectures",
  "Computer Vision & Natural Language Processing",
  "Distributed Systems & Cloud Computing",
  "Cybersecurity & Network Security",
  "Data Systems & Database Management",
  "Software Engineering & System Design",
  "Human-Computer Interaction & Usability",
  "Algorithms & Computational Theory",
  "Robotics & Embedded Systems",
];

const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "Java", "C++", "JavaScript"] },
  { label: "AI / ML Frameworks", items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV"] },
  { label: "Systems & Cloud", items: ["Docker", "Kubernetes", "AWS", "Linux"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { label: "Security", items: ["Network Security", "Penetration Testing", "Cryptography", "Digital Forensics"] },
  { label: "Testing & Tools", items: ["Git", "JUnit", "Pytest", "Selenium"] },
  { label: "Web & Frameworks", items: ["React", "Next.js", "Node.js", "RESTful APIs"] },
  { label: "Other", items: ["Data Structures", "Algorithms", "Arduino", "IoT"] },
];

type Skill = { name: string; level: number }; // level 0–100
type Bed = { label: string; flower: string; skills: Skill[] };

const proficiencyBeds: Bed[] = [
  {
    label: "AI & Machine Learning",
    flower: "🌻",
    skills: [
      { name: "Deep Learning", level: 85 },
      { name: "Natural Language Processing", level: 70 },
      { name: "PyTorch / TensorFlow", level: 80 },
      { name: "Python", level: 88 },
    ],
  },
  {
    label: "Systems & Cloud Computing",
    flower: "🌿",
    skills: [
      { name: "Distributed Systems", level: 70 },
      { name: "Docker & Kubernetes", level: 75 },
      { name: "Cloud Platforms (AWS)", level: 68 },
      { name: "Linux / DevOps", level: 78 },
    ],
  },
  {
    label: "Security & Networks",
    flower: "🌷",
    skills: [
      { name: "Network Security", level: 74 },
      { name: "Cryptography", level: 62 },
      { name: "Digital Forensics", level: 60 },
      { name: "Intrusion Detection", level: 65 },
    ],
  },
  {
    label: "Data & Software Engineering",
    flower: "🌸",
    skills: [
      { name: "Algorithms & Data Structures", level: 82 },
      { name: "Database Systems", level: 78 },
      { name: "Software Design", level: 80 },
      { name: "C++ / Java", level: 74 },
    ],
  },
];

function proficiencyLabel(level: number) {
  if (level >= 85) return "Expert";
  if (level >= 70) return "Advanced";
  if (level >= 50) return "Proficient";
  return "Working Knowledge";
}

function Flower({
  skill,
  emoji,
  grow,
  delay,
}: {
  skill: Skill;
  emoji: string;
  grow: boolean;
  delay: number;
}) {
  const stemHeight = Math.max(skill.level, 18);
  const bloomScale = 0.65 + (skill.level / 100) * 0.6;

  return (
    <div className="flex h-full flex-1 flex-col items-center justify-end">
      <span
        role="img"
        aria-label={`${skill.name}: ${proficiencyLabel(skill.level)}`}
        className="origin-bottom text-2xl transition-all ease-out sm:text-3xl"
        style={{
          transform: grow ? `scale(${bloomScale})` : "scale(0)",
          opacity: grow ? 1 : 0,
          transitionDuration: "700ms",
          transitionDelay: `${delay + 500}ms`,
        }}
      >
        {emoji}
      </span>
      <div
        className="w-[3px] rounded-full bg-rose-300 transition-[height] ease-out"
        style={{
          height: grow ? `${stemHeight * 0.5}px` : "0px",
          transitionDuration: "900ms",
          transitionDelay: `${delay}ms`,
        }}
      />
      <p className="mt-3 max-w-[7rem] text-center text-[11px] leading-tight text-plum-700 sm:text-xs">
        {skill.name}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-widest2 text-rose-500">
        {proficiencyLabel(skill.level)}
      </p>
    </div>
  );
}

export default function Expertise() {
  const gardenRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = gardenRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="rule-dots mb-16" />
      <p className="eyebrow mb-10">Core Expertise</p>
      <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
        {expertise.map((item) => (
          <div
            key={item}
            className="flex items-baseline gap-3 border-b border-rose-100 py-3 font-display text-lg text-plum-900"
          >
            <span className="text-rose-500">✦</span>
            {item}
          </div>
        ))}
      </div>

      <p className="eyebrow mb-8 mt-20">Skills</p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="rounded-2xl bg-rose-50/60 p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest2 text-rose-600">
              {group.label}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-plum-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="eyebrow mb-8 mt-20">Proficiency</p>
      <div ref={gardenRef} className="grid gap-8 sm:grid-cols-2">
        {proficiencyBeds.map((bed) => (
          <div
            key={bed.label}
            className="rounded-[2rem] border-2 border-rose-100 bg-rose-50/60 px-6 pb-0 pt-6 shadow-sm"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest2 text-rose-600">
              {bed.label}
            </h3>
            <div className="mt-6 flex h-40 items-end justify-around gap-2 sm:h-44">
              {bed.skills.map((skill, i) => (
                <Flower
                  key={skill.name}
                  skill={skill}
                  emoji={bed.flower}
                  grow={inView}
                  delay={i * 150}
                />
              ))}
            </div>
            <div className="mt-4 h-3 w-[calc(100%+3rem)] -translate-x-6 bg-gradient-to-b from-rose-200 to-rose-300/70" />
          </div>
        ))}
      </div>
    </section>
  );
}