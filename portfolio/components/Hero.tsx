"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import SparkleField from "./SparkleField";
import TypewriterText from "./TypewriterText";
import { siteConfig } from "./siteConfig";

const GREETING = "Hello, I'm Michelle Appiah.";
const HEADLINE = "I research secure and intelligent systems, and build full-stack applications.";
const GREETING_SPEED = 40;
const HEADLINE_SPEED = 30;
const HEADLINE_DELAY = GREETING.length * GREETING_SPEED + 350;

export default function Hero() {
  const [headlineDone, setHeadlineDone] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream bg-hero-glow pt-32 pb-20 sm:pt-40"
    >
      <SparkleField />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="eyebrow mb-5">Accra, Ghana · Software Engineer &amp; Researcher</p>

          <p className="min-h-[1.6em] font-display text-2xl text-plum-800 sm:text-3xl">
            <TypewriterText text={GREETING} speed={GREETING_SPEED} />
          </p>

          <h1 className="mt-2 font-display text-2xl font-semibold leading-[1.05] tracking-tight text-plum-950 sm:text-6xl lg:text-5xl">
            <TypewriterText
              text={HEADLINE}
              speed={HEADLINE_SPEED}
              startDelay={HEADLINE_DELAY}
              onDone={() => setHeadlineDone(true)}
            />
          </h1>
          <span
            className={`mt-2 block font-display text-xl italic text-rose-600 transition-opacity duration-700 sm:text-2xl ${
              headlineDone ? "opacity-100" : "opacity-0"
            }`}
          >
            — with a little sparkle.
          </span>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-plum-800">
            I connect research in AI and cybersecurity with winning full-stack
            products.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="focus-ring rounded-full bg-plum-950 px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-rose-600"
            >
              See projects
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="focus-ring text-plum-700 transition-colors hover:text-rose-600"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="focus-ring text-plum-700 transition-colors hover:text-rose-600"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="focus-ring text-plum-700 transition-colors hover:text-rose-600"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden="true"
            className="blob absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-rose-300 via-rose-200 to-gold-400 opacity-70 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-cream shadow-xl shadow-rose-900/10">
            <Image
              src="/images/headshot-primary.jpg"
              alt="Portrait of Michelle Appiah"
              width={1400}
              height={1750}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 rounded-2xl bg-plum-950 px-5 py-3 font-mono text-xs uppercase tracking-widest2 text-cream shadow-lg"
          >
            AI × Cybersecurity
          </div>
        </div>
      </div>
    </section>
  );
}
