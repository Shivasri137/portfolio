"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";
import AnimatedBackground from "./components/AnimatedBackground";


const LINKS = {
  email: "hello.shivasri@gmail.com",
  phone: "+91 9059337639",
  github: "https://github.com/shivasri137",
  linkedin: "https://www.linkedin.com/in/shivasrijonnala/",
};

const EDUCATION = [
  {
    year: "2022 – 2026",
    title: "B.Tech (AI/ML) — Nalla Malla Reddy Engineering College",
    desc: "GPA: 9.5/10 • Hyderabad",
  },
  { year: "2022", title: "Class 12 (IPE)", desc: "61.6%" },
  { year: "2020", title: "Class 10 (SSC)", desc: "GPA: 10" },
];

const SKILLS = [
  "Python",
  "TensorFlow",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "RAG",
  "LangChain",
  "SQL",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "UI/UX",
  "Figma",
  "Canva",
  "SEO",
  "Automation (n8n)",
];

const PROJECTS = [
  {
    title: "AI-Enabled Smart Health Jacket",
    tag: "Patent + IoT + AI",
    desc: "Health monitoring smart jacket with sensors + intelligent alerting system.",
    stack: ["AI", "IoT", "Python"],
    github: "#",
  },
  {
    title: "Grammar Correction Tool using AI",
    tag: "NLP + Transformers",
    desc: "Transformer-based grammar correction system to improve writing quality.",
    stack: ["Python", "NLP", "Transformers"],
    github: "#",
  },
];

const EXPERIENCE = [
  {
    role: "Intern — Digital Connect",
    time: "Dec 2023 – Present",
    points: [
      "Built websites and clean UI/UX layouts with modern design.",
      "Worked on SEO improvements and content optimization.",
      "Assisted in AI-based automation and project tasks.",
    ],
  },
];

const HOBBIES = [
  "UI Designing",
  "Content Creation",
  "Exploring AI Tools",
  "Editing",
  "Learning New Tech",
  "Creative Building",
];

function SectionTitle({ title, caption }: { title: string; caption?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
      {caption ? <p className="mt-2 text-sm text-white/70">{caption}</p> : null}
    </div>
  );
}

function Chip({
  children,
  accent = false,
}: {
  children: any;
  accent?: boolean;
}) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs ${
        accent
          ? "border-white/20 bg-white/10 text-white"
          : "border-white/15 bg-black/25 text-white/85"
      }`}
    >
      {children}
    </span>
  );
}

function Glass({
  children,
  className = "",
}: {
  children: any;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[34px] border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}

function SkillsMarquee({ items }: { items: string[] }) {
  const list = items.concat(items);
  return (
    <div className="overflow-hidden rounded-[30px] border border-white/15 bg-black/25">
      <motion.div
        className="flex gap-3 p-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ width: "200%" }}
      >
        {list.map((s, i) => (
          <div
            key={`${s}-${i}`}
            className={`rounded-2xl border px-4 py-2 text-sm ${
              i % 2 === 0
                ? "border-violet-400/30 bg-violet-500/15 text-violet-50"
                : "border-cyan-300/30 bg-cyan-400/15 text-cyan-50"
            }`}
          >
            {s}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Page() {
  const [sent, setSent] = useState(false);

  const STATS = useMemo(
    () => [
      { value: "15+", label: "Projects" },
      { value: "2.5Y", label: "Internship" },
      { value: "9.5", label: "GPA" },
      { value: "1", label: "Patent" },
    ],
    []
  );

  return (
    <div className="min-h-screen text-white">
      <AnimatedBackground />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-2xl border border-white/15">
              <Image
                src="/avatar.jpg"
                alt="avatar"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Shiva Sri Jonnala</p>
              <p className="text-[12px] text-white/60">
                AI/ML • Automation • UI/UX
              </p>
            </div>
          </div>

          <nav className="hidden gap-7 text-sm text-white/75 md:flex">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#education">
              Education
            </a>
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href={`mailto:${LINKS.email}`}
            className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
          >
            Get In Touch
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        {/* HERO */}
        <section className="py-14">
          <Glass className="p-10 md:p-14">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              {/* text */}
              <div>
                <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
                  Shiva Sri <span className="text-white/90">Jonnala</span>
                </h1>
                <p className="mt-4 text-lg font-semibold text-white/85">
                  AI/ML Developer • Automation • Product Design
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
                  Building AI-powered products and clean user experiences. Strong
                  in Python, ML/NLP, workflow automation and web development with
                  real internship impact.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="rounded-2xl bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-400 px-6 py-3 text-sm font-bold text-black hover:brightness-110"
                  >
                    View My Work →
                  </a>
                  <a
                    href="#contact"
                    className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/15"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="/Shivasri.pdf"
                    className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/15"
                  >
                    Download CV
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Chip accent>Python</Chip>
                  <Chip>TensorFlow</Chip>
                  <Chip>LangChain</Chip>
                  <Chip>RAG</Chip>
                  <Chip>n8n</Chip>
                  <Chip>UI/UX</Chip>
                </div>
              </div>

              {/* photo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative h-[380px] w-[380px] overflow-hidden rounded-[36px] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/shiva.jpg"
                    alt="Shiva"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* stats */}
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[28px] border border-white/15 bg-black/20 px-6 py-7 text-center"
                >
                  <p className="text-4xl font-extrabold">{s.value}</p>
                  <p className="mt-1 text-xs tracking-widest text-white/60">
                    {s.label.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </Glass>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-14">
          <SectionTitle title="About Me" caption="Short, clean and professional." />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["AI + ML", "I work on ML & NLP projects including RAG and model implementation."],
              ["Automation", "I build automation workflows (n8n) and scripts that save time."],
              ["UI/UX Thinking", "I create minimal, clean, readable layouts like real products."],
            ].map(([t, d]) => (
              <Glass key={t} className="p-7">
                <p className="text-lg font-semibold">{t}</p>
                <p className="mt-2 text-sm text-white/70">{d}</p>
              </Glass>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-14">
          <SectionTitle title="Education" caption="Timeline format with separate blocks." />
          <Glass className="p-10">
            <div className="relative">
              <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-[2px] bg-white/15 md:left-6" />
              <div className="space-y-7">
                {EDUCATION.map((e) => (
                  <div key={e.title} className="relative pl-12 md:pl-16">
                    <div className="absolute left-[7px] top-3 h-4 w-4 rounded-full bg-gradient-to-br from-violet-500 via-cyan-400 to-pink-400 ring-4 ring-black/30 md:left-[15px]" />
                    <div className="rounded-[26px] border border-white/15 bg-black/20 p-6">
                      <p className="text-xs font-semibold text-white/55">{e.year}</p>
                      <p className="mt-1 text-base font-bold">{e.title}</p>
                      <p className="mt-1 text-sm text-white/70">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Glass>
        </section>

        {/* Skills overview */}
        <section className="py-14">
          <SectionTitle title="Skills Overview" caption="What I'm strong at." />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Core", "Python, Data Analysis, ML Fundamentals"],
              ["AI Stack", "TensorFlow, NLP, Transformers, RAG, LangChain"],
              ["Product + Web", "Next.js, Tailwind, UI/UX, Git/GitHub, SEO"],
            ].map(([t, d]) => (
              <Glass key={t} className="p-7">
                <p className="text-lg font-semibold">{t}</p>
                <p className="mt-2 text-sm text-white/70">{d}</p>
              </Glass>
            ))}
          </div>
        </section>

        {/* Skills marquee */}
        <section className="py-14">
          <SectionTitle title="Skills" caption="Continuous scrolling skills blocks." />
          <SkillsMarquee items={SKILLS} />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-14">
          <SectionTitle title="Projects" caption="Projects with GitHub repositories." />
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <Glass key={p.title} className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xl font-bold">{p.title}</p>
                    <p className="mt-1 text-xs text-white/55">{p.tag}</p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500/30 via-cyan-400/20 to-pink-400/20 ring-1 ring-white/10" />
                </div>

                <p className="mt-4 text-sm text-white/70">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={p.github}
                    className="inline-flex rounded-2xl bg-white px-4 py-2 text-sm font-bold text-black hover:bg-white/90"
                  >
                    GitHub Repo
                  </a>
                </div>
              </Glass>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="py-14">
          <SectionTitle title="Experience" caption="Internship and work impact." />
          <div className="grid gap-6">
            {EXPERIENCE.map((e) => (
              <Glass key={e.role} className="p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="text-xl font-bold">{e.role}</p>
                  <Chip accent>{e.time}</Chip>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/60" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </Glass>
            ))}
          </div>
        </section>

        {/* HOBBIES */}
        <section className="py-14">
          <SectionTitle title="Interests & Hobbies" caption="Professional but personal." />
          <div className="grid gap-6 md:grid-cols-3">
            {HOBBIES.map((h, i) => (
              <div
                key={h}
                className={`rounded-[30px] border border-white/15 p-7 ${
                  i % 2 === 0 ? "bg-violet-500/15" : "bg-cyan-400/15"
                }`}
              >
                <p className="text-lg font-bold">{h}</p>
                <p className="mt-2 text-sm text-white/70">
                  Keeps me creative and consistent.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-14">
          <SectionTitle title="Contact Me" caption="Send a message." />
          <Glass className="p-10">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-xl font-bold">Let’s connect</p>
                <p className="mt-2 text-sm text-white/70">
                  Open to internships and full-time roles in AI/ML and Automation.
                </p>

                <div className="mt-6 space-y-2 text-sm text-white/75">
                  <p>
                    <span className="text-white/50">Email:</span> {LINKS.email}
                  </p>
                  <p>
                    <span className="text-white/50">Phone:</span> {LINKS.phone}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={LINKS.github}
                    target="_blank"
                    className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                  >
                    GitHub
                  </a>
                  <a
                    href={LINKS.linkedin}
                    target="_blank"
                    className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <input
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-sm outline-none focus:border-white/35"
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-sm outline-none focus:border-white/35"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Your message"
                  className="w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-sm outline-none focus:border-white/35"
                />
                <button className="w-full rounded-2xl bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-400 px-6 py-3 text-sm font-bold text-black hover:brightness-110">
                  {sent ? "Message Sent ✅" : "Send Message"}
                </button>
              </form>
            </div>
          </Glass>
        </section>

        {/* FOOTER */}
        <footer className="pb-12 pt-10">
          <div className="rounded-[34px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="grid gap-10 md:grid-cols-4">
              {/* LEFT */}
              <div className="md:col-span-1">
                <p className="text-2xl font-extrabold text-violet-200">
                  Shiva Sri Jonnala
                </p>
                <p className="mt-2 text-sm text-white/65">
                  Passionate AI/ML Developer • Automation • UI/UX
                </p>

                <div className="mt-5 flex gap-3">
                  <a
                    href={LINKS.github}
                    target="_blank"
                    className="grid h-11 w-11 place-items-center rounded-full bg-violet-500/20 text-violet-100 ring-1 ring-white/10 hover:bg-violet-500/30"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={LINKS.linkedin}
                    target="_blank"
                    className="grid h-11 w-11 place-items-center rounded-full bg-violet-500/20 text-violet-100 ring-1 ring-white/10 hover:bg-violet-500/30"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${LINKS.email}`}
                    className="grid h-11 w-11 place-items-center rounded-full bg-violet-500/20 text-violet-100 ring-1 ring-white/10 hover:bg-violet-500/30"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href="#"
                    className="grid h-11 w-11 place-items-center rounded-full bg-violet-500/20 text-violet-100 ring-1 ring-white/10 hover:bg-violet-500/30"
                    title="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              {/* QUICK LINKS */}
              <div className="md:col-span-1">
                <p className="text-lg font-bold text-white">Quick Links</p>
                <ul className="mt-4 space-y-3 text-sm text-white/65">
                  <li><a className="hover:text-white" href="#about">About</a></li>
                  <li><a className="hover:text-white" href="#education">Education</a></li>
                  <li><a className="hover:text-white" href="#projects">Projects</a></li>
                  <li><a className="hover:text-white" href="#contact">Contact</a></li>
                </ul>
              </div>

              {/* CONTACT INFO */}
              <div className="md:col-span-1">
                <p className="text-lg font-bold text-white">Contact Info</p>

                <div className="mt-4 space-y-4 text-sm text-white/70">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-violet-500/20 ring-1 ring-white/10">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-white/55">Email</p>
                      <p className="font-semibold text-white/90">{LINKS.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-violet-500/20 ring-1 ring-white/10">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-white/55">Phone</p>
                      <p className="font-semibold text-white/90">{LINKS.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-violet-500/20 ring-1 ring-white/10">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-white/55">Location</p>
                      <p className="font-semibold text-white/90">
                        Hyderabad, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AVATAR RIGHT */}
              <div className="md:col-span-1 md:flex md:justify-end">
                <div className="flex flex-col items-center gap-3">
                  <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[30px] border border-white/15 bg-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
                    <Image
                      src="/avatar.jpg"
                      alt="avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-white/55">
                    © {new Date().getFullYear()} Shiva Sri
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-white/45">
              Built with Next.js + Tailwind • Designed by Shiva Sri Jonnala
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
