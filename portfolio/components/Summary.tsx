import Image from "next/image";

export default function Summary() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="rule-dots mb-16" />
      <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow mb-6">About</p>
          <div className="group relative z-0 hidden overflow-visible sm:block sm:w-40">
            <div className="overflow-hidden rounded-2xl border-2 border-rose-100 shadow-sm transition-all duration-300 ease-out group-hover:relative group-hover:z-20 group-hover:scale-150 group-hover:shadow-2xl group-hover:shadow-rose-300/60">
              <Image
                src="/images/headshot-secondary.jpg"
                alt="Michelle Appiah smiling"
                width={1200}
                height={1800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-plum-800">
          I am a Computer Science graduate and emerging researcher with expertise in{" "}
          <span className="text-rose-600">
            artificial intelligence, cybersecurity, software engineering, computer
            networks, and intelligent systems.
          </span>{" "}
           I have experience in software development, research, teaching, and systems design, with practical exposure to AI-driven fraud detection, full-stack applications, IoT, robotics, and secure
           information systems. I am proficient in Python, Java, C++, JavaScript, React, Next.js, MongoDB, SQL, Git, and network analysis.
           I bring a research-oriented approach, strong analytical abilities, and practical problem-solving skills toward the design of intelligent and secure computing solutions.


        </p>
      </div>
    </section>
  );
}