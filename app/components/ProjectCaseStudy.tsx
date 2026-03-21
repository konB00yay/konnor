import Link from "next/link";

type Props = {
  name: string;
  tagline: string;
  liveUrl: string;
  stack: string[];
  problemText: string;
  approachText: string;
  impactText: string;
};

export default function ProjectCaseStudy({
  name,
  tagline,
  liveUrl,
  stack,
  problemText,
  approachText,
  impactText,
}: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/#projects"
          className="text-sm text-zinc-500 transition hover:text-foreground dark:hover:text-zinc-200"
        >
          ← Back to projects
        </Link>

        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">{name}</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">{tagline}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            View live project
          </a>
          <Link
            href="/#contact"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Contact me
          </Link>
        </div>

        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Tech stack
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-foreground"
                  aria-hidden
                />
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 space-y-8 text-zinc-600 dark:text-zinc-300">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Problem</h2>
            <p className="mt-3 leading-7">{problemText}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Approach</h2>
            <p className="mt-3 leading-7">{approachText}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Impact</h2>
            <p className="mt-3 leading-7">{impactText}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
