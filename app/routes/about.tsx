import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import type { LinksFunction, MetaFunction } from "react-router";
import Reveal, { StaggerList, StaggerListItem } from "~/components/Reveal";
import { SEO } from "~/components/SEO";
import { usePrefersReducedMotion } from "~/hooks/usePrefersReducedMotion";
import { generateLinks, generateMeta } from "~/utils/seo";

export const meta: MetaFunction = () =>
  generateMeta({
    title: "About - Syntesa, Software Engineering Lab UNESA",
    description:
      "Learn about the Software Engineering Lab at Universitas Negeri Surabaya. Our mission, principles, timeline, and leadership team advancing software construction.",
    path: "/about",
    keywords: ["about", "mission", "team", "leadership", "timeline", "history"],
  });

export const links: LinksFunction = () => generateLinks("/about");

const headingLines = ["About", "The Lab"];

const timeline = [
  {
    year: "2023",
    title: "Lab Founded",
    description:
      "Software Engineering Lab established at UNESA's Faculty of Engineering, Department of Informatics Engineering.",
  },
  {
    year: "2024",
    title: "First Partnerships",
    description:
      "Formed strategic partnerships with DataCamp, Juniper Networks, Red Hat, and major cloud providers.",
  },
  {
    year: "2025",
    title: "Infrastructure Deployed",
    description:
      "Equipped the lab with dedicated networking and server infrastructure; routers, switches, and rack-mounted servers for hands-on learning.",
  },
  {
    year: "2026",
    title: "Current Batch",
    description:
      "Expanded to 26+ active members across Software Development and Cloud & Infrastructure interest groups.",
  },
];

const values = [
  {
    title: "Rigor",
    description:
      "We hold ourselves to high standards. Every project, every line of code, every research output goes through peer review.",
  },
  {
    title: "Openness",
    description:
      "Open-source by default. We share our work, our processes, and our learnings with the wider community.",
  },
  {
    title: "Collaboration",
    description:
      "Complex problems require diverse perspectives. We work across disciplines and with industry partners.",
  },
  {
    title: "Impact",
    description:
      "We build things that matter. Our work addresses real problems in education, infrastructure, and software systems.",
  },
];

const team = [
  {
    role: "Lab Director",
    name: "I Made Suartana, S.Kom., M.Kom.",
    focus: "Research Direction & Academic Oversight",
  },
  {
    role: "Lead - Software Development",
    name: "Mohammad Ariffansyah",
    focus: "Web, Mobile, AI/ML Projects",
  },
  {
    role: "Lead - Cloud & Infrastructure",
    name: "Muhammad Istiqlal",
    focus: "DevOps, Networking, System Administration",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const breadcrumbs = [
    { name: "Home", path: "" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="space-y-2">
      <SEO breadcrumbs={breadcrumbs} />
      <section
        aria-labelledby="about-hero-heading"
        className="relative bg-white dark:bg-neutral-950 pt-24 sm:pt-32 border-y border-gray-200 dark:border-neutral-800"
      >
        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800">
              <h1
                id="about-hero-heading"
                className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium tracking-tight text-gray-900 dark:text-neutral-100 leading-[1.15]"
              >
                {headingLines.map((line, i) => (
                  <span key={line} className="block overflow-hidden pb-[0.15em]">
                    <motion.span
                      className={`block ${i === headingLines.length - 1 ? "text-gray-400 dark:text-neutral-600" : ""}`}
                      initial={{ y: prefersReducedMotion ? "0%" : "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.9,
                        delay: prefersReducedMotion ? 0 : 0.15 + i * 0.12,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
            </div>

            <div className="lg:col-span-5 flex flex-col bg-dot-grid">
              <div className="flex-1 p-6 sm:p-12 lg:p-16 flex items-end">
                <motion.p
                  className="text-lg sm:text-xl text-gray-600 dark:text-neutral-400 leading-relaxed font-light"
                  initial={{
                    opacity: prefersReducedMotion ? 1 : 0,
                    y: prefersReducedMotion ? 0 : 16,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.5,
                    duration: prefersReducedMotion ? 0 : 0.6,
                    ease,
                  }}
                >
                  The Software Engineering Lab (Syntesa) at Universitas Negeri Surabaya is a
                  research and development facility focused on advancing software construction
                  methodologies, cloud-native systems, and applied machine learning.
                </motion.p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-neutral-800">
            <motion.dl
              className="grid grid-cols-2 md:grid-cols-4"
              initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.6,
                duration: prefersReducedMotion ? 0 : 0.5,
                ease,
              }}
            >
              {[
                { label: "Active Members", value: "26+" },
                { label: "Interest Groups", value: "02" },
                { label: "Industry Partners", value: "06" },
                { label: "Year Founded", value: "2023", isYear: true },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 sm:p-8 ${i % 2 === 0 ? "border-r border-gray-200 dark:border-neutral-800" : ""} ${i < 3 ? "md:border-r" : "md:border-r-0"} ${i < 2 ? "border-b md:border-b-0 border-gray-200 dark:border-neutral-800" : ""}`}
                >
                  <dt className="text-xs uppercase tracking-wider text-gray-500 dark:text-neutral-400 font-mono mb-2">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl sm:text-4xl font-light text-gray-900 dark:text-neutral-100">
                    {stat.isYear ? <time dateTime={stat.value}>{stat.value}</time> : stat.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-mission-heading"
        className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800"
      >
        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800 bg-hatching relative">
              <Reveal>
                <h2
                  id="about-mission-heading"
                  className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
                >
                  Our Mission
                </h2>
              </Reveal>
              <span
                className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
                aria-hidden="true"
              >
                01
              </span>
            </div>
            <div className="lg:col-span-8 p-6 sm:p-12">
              <Reveal delay={0.1}>
                <p className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-neutral-100 leading-snug">
                  To cultivate technically excellent engineers who can design, build, and maintain
                  software systems at scale, grounded in research and driven by real-world impact.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 text-lg text-gray-600 dark:text-neutral-400 font-light leading-relaxed max-w-3xl">
                  We operate at the intersection of academia and industry, bridging the gap between
                  theoretical computer science and practical software engineering. Our members work
                  on projects that ship, with partners who build production systems.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-principles-heading"
        className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800"
      >
        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="p-6 sm:p-12 border-b border-gray-200 dark:border-neutral-800 bg-hatching relative">
            <Reveal>
              <h2
                id="about-principles-heading"
                className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
              >
                Principles
              </h2>
            </Reveal>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            >
              02
            </span>
          </div>

          <StaggerList stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <StaggerListItem key={value.title}>
                <div
                  className={`p-6 sm:p-10 ${i < values.length - 1 ? "border-b md:border-b-0 md:border-r border-gray-200 dark:border-neutral-800" : ""} ${i === 1 ? "lg:border-r border-gray-200 dark:border-neutral-800" : ""} min-h-0 sm:min-h-50 flex flex-col`}
                >
                  <span
                    className="text-xs font-mono text-gray-400 dark:text-neutral-600 mb-4"
                    aria-hidden="true"
                  >
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-neutral-100 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerListItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <section
        aria-labelledby="about-timeline-heading"
        className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800"
      >
        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="p-6 sm:p-12 border-b border-gray-200 dark:border-neutral-800 bg-hatching relative">
            <Reveal>
              <h2
                id="about-timeline-heading"
                className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
              >
                Timeline
              </h2>
            </Reveal>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            >
              03
            </span>
          </div>

          <StaggerList stagger={0.06} as="ol">
            {timeline.map((event, i) => (
              <StaggerListItem key={event.year}>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-12 ${i < timeline.length - 1 ? "border-b border-gray-200 dark:border-neutral-800" : ""}`}
                >
                  <div className="sm:col-span-2 p-6 sm:p-8 sm:border-r border-gray-200 dark:border-neutral-800">
                    <time
                      dateTime={event.year}
                      className="text-2xl font-light text-gray-900 dark:text-neutral-100 font-mono"
                    >
                      {event.year}
                    </time>
                  </div>
                  <div className="sm:col-span-3 p-6 sm:p-8 sm:border-r border-gray-200 dark:border-neutral-800">
                    <h3 className="font-medium text-gray-900 dark:text-neutral-100">
                      {event.title}
                    </h3>
                  </div>
                  <div className="sm:col-span-7 p-6 sm:p-8">
                    <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </StaggerListItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <section
        aria-labelledby="about-leadership-heading"
        className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800"
      >
        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 dark:border-neutral-800">
            <div className="lg:col-span-4 p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800 bg-hatching relative">
              <Reveal>
                <h2
                  id="about-leadership-heading"
                  className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
                >
                  Leadership
                </h2>
              </Reveal>
              <span
                className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
                aria-hidden="true"
              >
                04
              </span>
            </div>
            <div className="lg:col-span-8 p-6 sm:p-12">
              <Reveal delay={0.1}>
                <p className="text-lg text-gray-600 dark:text-neutral-400 font-light leading-relaxed">
                  Our lab is led by faculty advisors and student leaders who bring together academic
                  rigor and practical engineering experience.
                </p>
              </Reveal>
            </div>
          </div>

          <StaggerList stagger={0.08}>
            {team.map((member, i) => (
              <StaggerListItem key={member.role}>
                <article
                  className={`grid grid-cols-1 sm:grid-cols-12 ${i < team.length - 1 ? "border-b border-gray-200 dark:border-neutral-800" : ""}`}
                >
                  <div className="sm:col-span-2 p-6 sm:p-8 sm:border-r border-gray-200 dark:border-neutral-800">
                    <span
                      className="text-xs font-mono text-gray-400 dark:text-neutral-600"
                      aria-hidden="true"
                    >
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <div className="sm:col-span-4 p-6 sm:p-8 sm:border-r border-gray-200 dark:border-neutral-800">
                    <p className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400">
                      {member.role}
                    </p>
                  </div>
                  <div className="sm:col-span-3 p-6 sm:p-8 sm:border-r border-gray-200 dark:border-neutral-800">
                    <h3 className="font-medium text-gray-900 dark:text-neutral-100">
                      {member.name}
                    </h3>
                  </div>
                  <div className="sm:col-span-3 p-6 sm:p-8">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">{member.focus}</p>
                  </div>
                </article>
              </StaggerListItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <section
        aria-labelledby="about-cta-heading"
        className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800"
      >
        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="p-6 sm:p-12 lg:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <Reveal>
              <div>
                <h2
                  id="about-cta-heading"
                  className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-neutral-100"
                >
                  Interested in our work?
                </h2>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  Join the conversation on Discord or explore our open-source projects on GitHub.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="https://discord.gg/F7Wx88yZFy"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-3 border border-gray-900 dark:border-apple-blue-500 bg-gray-900 dark:bg-apple-blue-500 text-white dark:text-white text-sm font-medium hover:bg-transparent hover:text-gray-900 dark:hover:bg-transparent dark:hover:text-apple-blue-400 transition-colors uppercase tracking-wider shrink-0"
              >
                Join Discord
                <BsArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
