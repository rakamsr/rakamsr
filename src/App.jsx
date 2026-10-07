import { useEffect, useState } from 'react'

const navItems = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['work', 'Work'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

const expertise = [
  'B2B IT Solutions',
  'SEO & Content',
  'Google Ads',
  'Social Media',
  'E-commerce',
  'Analytics',
]

const marqueeItems = [
  'Marketing Communication',
  'SEO',
  'Content Strategy',
  'Paid Media',
  'Social Media',
  'E-commerce',
  'Analytics',
  'B2B Technology',
]

const experiences = [
  {
    period: '2026 — Present',
    label: 'Current',
    role: 'Marketing Communication Specialist',
    company: 'PT Gigantika Pratama Prima',
    description:
      'Managing and developing marketing communication for a B2B IT distributor and solution provider, spanning brand communication, SEO content, social media, Google Ads, e-commerce, website improvement, promotional assets, campaign planning, and reporting.',
    tags: ['B2B Technology', 'SEO', 'Google Ads', 'Social Media', 'E-commerce', 'Marketing Planning'],
  },
  {
    period: 'Previous',
    label: 'Digital Finance',
    role: 'Website Channel & Digital Marketing',
    company: 'JULO Kredit Digital',
    description:
      'Worked across website channel performance, SEO, content, campaign pages, lifecycle communication, product education, analytics, and digital optimization in a high-growth consumer fintech environment.',
    tags: ['Website', 'Content', 'SEO', 'GA4', 'Campaigns', 'Lifecycle'],
  },
]

const projects = [
  {
    number: '01',
    featured: true,
    type: 'Marketing Strategy · B2B IT',
    title: 'Integrated Marketing Communication Plan',
    description:
      'Structured a channel-by-channel marketing roadmap covering website and SEO, social media, Google Ads, e-commerce, content production, reporting, and phased execution priorities.',
    tags: ['Strategy', 'Channel Planning', 'Analytics'],
    visual: 'strategy',
  },
  {
    number: '02',
    type: 'Content · Product Education',
    title: 'Technical Product Storytelling',
    description:
      'Developed audience-friendly content for technical products and solutions, turning features into clear stories, comparison points, use cases, and stronger calls to action.',
    tags: ['Copywriting', 'Creative Direction', 'Social'],
    visual: 'content',
  },
  {
    number: '03',
    type: 'SEO · Website',
    title: 'Search-led Content Development',
    description:
      'Built educational website topics around real search intent, including AV, networking, access point, extender, display cable, and KVM-related topics with optimized titles, slugs, keyphrases, and meta descriptions.',
    tags: ['SEO', 'Content Strategy', 'On-page'],
    visual: 'seo',
  },
  {
    number: '04',
    type: 'E-commerce · Performance',
    title: 'Product Listing & Commerce Optimization',
    description:
      'Structured product titles, descriptions, variants, pricing logic, and merchandising foundations for marketplace channels while aligning listings with campaign and paid-media opportunities.',
    tags: ['Marketplace', 'Merchandising', 'Conversion'],
    visual: 'commerce',
  },
]

const skills = [
  ['◎', 'Strategy & Planning', 'Channel planning, campaign concepts, content planning, go-to-market support.'],
  ['⌕', 'SEO & Website', 'Keyword research, on-page SEO, content briefs, website optimization, GA4, GSC.'],
  ['✎', 'Content & Copy', 'Articles, campaign copy, product education, social content, email communication.'],
  ['↗', 'Paid Media', 'Google Ads, Performance Max, campaign asset development, Meta Ads planning.'],
  ['▦', 'E-commerce', 'Product listings, catalog structure, pricing logic, marketplace optimization.'],
  ['∿', 'Analytics', 'Performance reporting, channel analysis, GA4, GSC, Hotjar, AppsFlyer.'],
]

const tools = [
  'Google Analytics 4',
  'Google Search Console',
  'Google Ads',
  'Meta',
  'Hotjar',
  'AppsFlyer',
  'GitHub',
  'Marketplace Platforms',
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Raka Maharsi home">
          <span className="brand-mark">RM</span>
          <span className="brand-name">Raka Maharsi</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a key={id} href={'#' + id}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <span className="theme-icon" aria-hidden="true">{theme === 'light' ? '☾' : '◐'}</span>
          </button>
          <a
            className="button button-small button-ghost"
            href="https://github.com/rakamsr"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <button
            className={'menu-toggle' + (menuOpen ? ' is-open' : '')}
            type="button"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span>
          </button>
        </div>
      </header>

      <div className={'mobile-menu' + (menuOpen ? ' is-open' : '')} aria-hidden={!menuOpen}>
        {navItems.map(([id, label]) => (
          <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </div>
    </>
  )
}

function SectionHeading({ index, kicker, children }) {
  return (
    <div className="section-heading reveal">
      <span className="section-index">{index}</span>
      <p className="section-kicker">{kicker}</p>
      <h2>{children}</h2>
    </div>
  )
}

function ProjectVisual({ type }) {
  if (type === 'strategy') {
    return (
      <div className="project-visual visual-strategy">
        <div className="visual-browser">
          <div className="browser-bar"><i></i><i></i><i></i></div>
          <div className="visual-dashboard">
            <span className="dash-title"></span>
            <div className="dash-row"><span></span><span></span><span></span></div>
            <div className="dash-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'content') {
    return (
      <div className="project-visual visual-content">
        <div className="content-slide">
          <span className="screen-glow"></span>
          <strong>Same Projector.</strong>
          <strong>Different Result.</strong>
          <small>Educational product storytelling</small>
        </div>
      </div>
    )
  }

  if (type === 'seo') {
    return (
      <div className="project-visual visual-seo">
        <div className="search-card">
          <div className="search-box"><span>⌕</span><em>hdmi splitter...</em></div>
          <div className="search-result">
            <small>gigantika.co.id</small>
            <strong>What is an HDMI Splitter?</strong>
            <p>Simple explanations for practical IT needs...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual visual-commerce">
      <div className="commerce-window">
        <span className="commerce-badge">E-commerce</span>
        <div className="commerce-product"></div>
        <div className="commerce-lines"><i></i><i></i><i></i></div>
        <div className="commerce-price">IDR ••••••</div>
      </div>
    </div>
  )
}

function App() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

    const sections = [...document.querySelectorAll('main section[id]')]
    const navLinks = [...document.querySelectorAll('.desktop-nav a')]
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) return

        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + visible.target.id)
        })
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => sectionObserver.observe(section))

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  return (
    <>
      <div className="page-noise" aria-hidden="true"></div>
      <Header />

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="status-dot"></span>
              Marketing Communication · Digital Marketing · B2B Technology
            </div>

            <h1>
              Turning complex products into
              <span className="text-gradient">clear marketing that moves.</span>
            </h1>

            <p className="hero-lead">
              I’m <strong>Raka Maharsi</strong>, a Marketing Communication Specialist
              working across content, SEO, paid media, social, e-commerce, website
              optimization, and performance reporting.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work</a>
              <a className="button button-link" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>
            </div>

            <div className="hero-tags" aria-label="Core expertise">
              {expertise.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>

          <div className="hero-visual reveal delay-1">
            <div className="profile-orbit" aria-hidden="true">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
            </div>

            <div className="profile-card">
              <div className="profile-card-top">
                <img
                  src="https://avatars.githubusercontent.com/u/339023302?v=4"
                  alt="Raka Maharsi"
                  className="profile-photo"
                />
                <div>
                  <p className="profile-kicker">Current focus</p>
                  <h2>Marketing Communication</h2>
                  <p>PT Gigantika Pratama Prima</p>
                </div>
              </div>

              <div className="mini-grid">
                <div><span className="mini-label">Strategy</span><strong>Plan → Execute</strong></div>
                <div><span className="mini-label">Content</span><strong>Educate → Convert</strong></div>
                <div><span className="mini-label">Performance</span><strong>Measure → Improve</strong></div>
                <div><span className="mini-label">Channel</span><strong>Web → Ads → Commerce</strong></div>
              </div>

              <div className="profile-footer">
                <span className="code-pill">&lt;marketing + technology /&gt;</span>
                <span className="live-indicator">● building</span>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee-wrap" aria-label="Areas of expertise">
          <div className="marquee">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={item + index} className="marquee-pair"><span>{item}</span><i>✦</i></span>
            ))}
          </div>
        </section>

        <section id="about" className="section section-shell">
          <SectionHeading index="01" kicker="About">
            I connect business goals, technical products, and customer understanding.
          </SectionHeading>

          <div className="about-grid">
            <div className="about-copy reveal">
              <p>
                My work sits between <strong>strategy, content, performance, and execution</strong>.
                I translate products and solutions into communication that is easier to
                understand, easier to discover, and easier to act on.
              </p>
              <p>
                I currently work in the B2B technology distribution and solutions space,
                supporting marketing across data center, networking, security, industrial
                computing, meeting room automation, control room, command center, and Pro AV.
              </p>
            </div>

            <div className="principles reveal delay-1">
              {[
                ['01', 'Make it understandable', 'Complex technology should still make sense to non-technical audiences.'],
                ['02', 'Connect channels', 'Website, social, ads, e-commerce, and sales should support one journey.'],
                ['03', 'Measure what matters', 'Creative output becomes stronger when paired with useful performance data.'],
              ].map(([num, title, copy]) => (
                <article key={num}>
                  <span>{num}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section section-shell">
          <SectionHeading index="02" kicker="Experience">
            From digital consumer finance to B2B technology solutions.
          </SectionHeading>

          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item reveal" key={item.company}>
                <div className="timeline-meta"><span>{item.period}</span><span>{item.label}</span></div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.description}</p>
                  <div className="role-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section section-shell">
          <SectionHeading index="03" kicker="Selected work">
            Projects built around clarity, consistency, and business impact.
          </SectionHeading>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={'project-card reveal' + (project.featured ? ' project-featured' : '')}
                key={project.number}
              >
                <div className="project-number">{project.number}</div>
                <ProjectVisual type={project.visual} />
                <div className="project-copy">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section section-shell">
          <SectionHeading index="04" kicker="Capabilities">
            A cross-functional toolkit for modern marketing execution.
          </SectionHeading>

          <div className="skills-grid">
            {skills.map(([icon, title, copy]) => (
              <article className="skill-card reveal" key={title}>
                <span className="skill-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>

          <div className="toolbelt reveal">
            <p>Tools & platforms</p>
            <div>{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
        </section>

        <section id="contact" className="section section-shell contact-section">
          <div className="contact-panel reveal">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>Have a project, campaign, or marketing problem worth solving?</h2>
              <p>
                I’m always interested in conversations around marketing, digital growth,
                technology products, content, and better customer journeys.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="https://github.com/rakamsr" target="_blank" rel="noreferrer">
                Visit my GitHub
              </a>
              <a className="button button-ghost" href="#top">Back to top ↑</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} Raka Maharsi. Built with React + Vite.</p>
        <p>Strategy <span>×</span> Content <span>×</span> Performance</p>
      </footer>
    </>
  )
}

export default App
