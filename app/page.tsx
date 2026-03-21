import Link from "next/link";
import PhotographyCarousel from "./components/PhotographyCarousel";
import Image from "next/image";
import FadeInText from "./components/FadeInText";
import HeroHeadshotBackground from "./components/HeroHeadshotBackground";

const TITLES = [
  "Fullstack Software Engineer",
  "Film Critic",
  "Graphic Designer",
  "Photographer",
];

const PROJECTS = [
  {
    id: 1,
    name: "Film & Froth",
    tagline:
      "A film review blog where we review movies and pair them with beer.",
    liveUrl: "https://www.filmfroth.com",
    caseStudyHref: "/projects/film-and-froth",
    stack: ["GatsbyJS", "Contentful CMS", "Express (Node.js)", "Supabase"],
    img: "/filmfrothshot.png"
  },
  {
    id: 2,
    name: "Pressbox",
    tagline:
      "AI generated commentary for fantasy sports leagues using a RAG pipeline.",
    liveUrl: "https://www.pressbox.ai",
    caseStudyHref: "/projects/pressbox",
    stack: ["React", "Express (Node.js)", "Pinecone", "OpenAI", "Cohere"],
    img: "/pressboxshot.png"
  },
];

const GALLERY_ITEMS = [
  {
    src: "/filmfrothshirt.jpeg",
    alt: "Film & Froth shirt design",
  },
  {
    src: "/details.JPG",
    alt: "Graphic design — details",
  },
  {
    src: "/LaQuintaPostcard.jpg",
    alt: "La Quinta postcard design",
  },
  {
    src: "/signaturedrinks.JPG",
    alt: "Signature drinks graphic design",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero — full viewport */}
      <section
        className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-16"
        aria-label="Introduction"
      >
        <HeroHeadshotBackground />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeInText>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Konnor Beaulier
          </h1>
          <ul
            className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-base text-zinc-600 dark:text-zinc-400 sm:gap-x-6 sm:text-lg"
            aria-label="Roles and titles"
          >
            {TITLES.map((title, i) => (
              <li key={title} className="flex items-center gap-4">
                <span>{title}</span>
                {i < TITLES.length - 1 && (
                  <span className="hidden text-zinc-300 dark:text-zinc-600 sm:inline" aria-hidden>
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
          </FadeInText>
        </div>
        <a
          href="#projects"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 transition hover:text-foreground dark:hover:text-zinc-200"
          aria-label="Scroll to projects"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <span className="animate-bounce" aria-hidden>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </a>
      </section>

      {/* Projects — left-to-right then right-to-left */}
      <section id="projects" className="border-t border-zinc-200 dark:border-zinc-800">
        {PROJECTS.map((project, i) => {
          const isReversed = i % 2 === 1;
          return (
            <article
              key={project.id}
              className="grid min-h-[60vh] grid-cols-1 md:grid-cols-2"
            >
              <div
                className={`flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16 ${
                  isReversed ? "md:order-2 md:text-right" : ""
                }`}
              >
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  {project.name}
                </h2>
                <p className="mt-4 max-w-lg text-zinc-600 dark:text-zinc-400">
                  {project.tagline}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-200">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 dark:border-zinc-700 dark:bg-zinc-900/70"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-foreground"
                        aria-hidden
                      />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-6 flex flex-wrap gap-3 ${
                    isReversed ? "md:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
                  >
                    Live project
                  </a>
                  <Link
                    href={project.caseStudyHref}
                    className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    Case study
                  </Link>
                </div>
              </div>
              <div
                className={`relative min-h-[280px] md:min-h-full ${isReversed ? "md:order-1" : ""}`}
              >
                <div
                  className="absolute inset-4 md:inset-6 rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400"
                  aria-hidden
                >
                  <Image fill={true} alt={project.tagline} src={project.img}/>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Graphic design gallery */}
      <section
        id="design"
        className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-16 md:py-24"
        aria-labelledby="gallery-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="gallery-heading" className="text-2xl font-semibold sm:text-3xl">
            Graphic Design
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            A selection of design work.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.src}
                className="relative aspect-square overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography carousel */}
      <section
        id="photography"
        className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-16 md:py-24"
        aria-labelledby="photography-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="photography-heading" className="text-2xl font-semibold sm:text-3xl">
            Photography
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            A carousel of selected photos.
          </p>
          <div className="mt-10">
            <PhotographyCarousel />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-20 md:py-28"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="contact-heading" className="text-2xl font-semibold sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Have a project in mind or want to collaborate? Reach out.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:konbeaulier@gmail.com"
              className="rounded-full bg-foreground px-8 py-3 text-background font-medium transition hover:opacity-90"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com/in/konnor-beaulier"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 dark:border-zinc-600 px-8 py-3 font-medium transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
