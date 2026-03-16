const links = [
  {
    href: 'https://bsky.app/profile/jamiegonzalez.bsky.social',
    label: 'Bluesky',
    note: 'Short posts, links, and whatever New York is doing that day.',
  },
  {
    href: 'https://github.com/jamiegonzalez929',
    label: 'GitHub',
    note: 'Code experiments, side projects, and the occasional useful tool.',
  },
  {
    href: 'https://jamiegonzalez306874.substack.com',
    label: 'Substack',
    note: 'Longer writing when a post wants room to breathe.',
  },
  {
    href: 'https://jamiegonzalez2.wordpress.com',
    label: 'WordPress',
    note: 'Older posts, notes, and an archive of writing on the web.',
  },
  {
    href: 'https://jamiegonzalez929.github.io/reporacer/',
    label: 'RepoRacer',
    note: 'A browser game built from the same impulse that starts most side projects: why not?',
  },
]

const sections = [
  {
    eyebrow: 'Writing',
    title: 'Essays, notes, and city obsessions.',
    body:
      'I write about New York, the built environment, politics, and the everyday details that make a place feel lived in.',
  },
  {
    eyebrow: 'Code',
    title: 'Small web projects with actual personality.',
    body:
      'I like making things that are useful, a little strange, or both. Usually that means lightweight sites, experiments, and whatever seems worth prototyping.',
  },
  {
    eyebrow: 'Urbanism',
    title: 'Transit, housing, neighborhoods, and street-level reality.',
    body:
      'Most of my favorite rabbit holes start with a map, a zoning argument, or a walk through Brooklyn that turns into twenty browser tabs.',
  },
]

export default function Home() {
  return (
    <main className="page-shell">
      <div className="page-glow page-glow-top" />
      <div className="page-glow page-glow-bottom" />

      <section className="hero">
        <p className="eyebrow">Brooklyn, New York</p>
        <div className="hero-copy">
          <h1>Jamie Gonzalez</h1>
          <p className="hero-lede">
            Writer, coder, and urbanism nerd building a small corner of the internet that
            feels like a person actually lives here.
          </p>
          <p className="hero-text">
            This site is a home base for my writing, side projects, and ongoing fascination
            with how cities work and how people move through them.
          </p>
        </div>

        <div className="hero-meta">
          <div className="meta-card">
            <span>Based in</span>
            <strong>Brooklyn / NYC</strong>
          </div>
          <div className="meta-card">
            <span>Interested in</span>
            <strong>Books, code, transit, neighborhoods</strong>
          </div>
        </div>
      </section>

      <section className="content-grid" aria-label="Site sections">
        {sections.map((section) => (
          <article key={section.eyebrow} className="info-card">
            <p className="eyebrow">{section.eyebrow}</p>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      <section className="links-section">
        <div className="section-heading">
          <p className="eyebrow">Elsewhere</p>
          <h2>Links worth clicking</h2>
          <p>
            The best way to get a sense of what I&apos;m making or thinking about is to follow
            the trail.
          </p>
        </div>

        <nav className="links-grid" aria-label="External links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <span className="link-label">{link.label}</span>
              <span className="link-note">{link.note}</span>
            </a>
          ))}
        </nav>
      </section>

      <section className="footer-panel">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Say hello</h2>
        </div>
        <p>
          Reach me at{' '}
          <a href="mailto:jamiegonzalez929@proton.me" className="inline-link">
            jamiegonzalez929@proton.me
          </a>{' '}
          or find me through the links above.
        </p>
      </section>
    </main>
  )
}
