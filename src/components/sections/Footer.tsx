const Footer = () => {
  return (
    <footer className="bg-black text-white" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="grid gap-16 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-400">
              06 — GET IN TOUCH
            </p>
            <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Have a project in mind?
              <span className="block italic text-primary-500">Let&apos;s talk.</span>
            </h2>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-[30ch] text-base leading-relaxed text-white/60">
              I&apos;m open to conversations about full-stack web development,
              collaborations, and thoughtful digital products.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <a
                href="https://github.com/farisfian06"
                target="_blank"
                rel="noreferrer"
                className="border-b border-white/25 pb-1 text-sm transition-colors hover:border-primary-500 hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/farisihsanalifian/"
                target="_blank"
                rel="noreferrer"
                className="border-b border-white/25 pb-1 text-sm transition-colors hover:border-primary-500 hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Faris Ihsan Alifian</p>
          <p>Full-stack developer · Malang, Indonesia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
