import { useCallback, useRef, useState } from "react";
import { Link } from "wouter";
import { usePortfolioMotion } from "../hooks/use-portfolio-motion";
import { ArrowUpRight, Plus, Sparkles, MoveUpRight } from "lucide-react";
import { ProjectVisual, projects, type Project } from "../components/project-showcase";
import { SiteHeader, SiteFooter } from "../components/site-chrome";
import { StudioDialog } from "../components/studio-dialog";

export default function Portfolio() {
  const pageRef = useRef<HTMLDivElement>(null);
  usePortfolioMotion(pageRef);
  const [selected, setSelected] = useState<Project | null>(null);
  const [contact, setContact] = useState(false);
  const closeDialog = useCallback(() => {
    setSelected(null);
    setContact(false);
  }, []);
  const openContact = useCallback(() => {
    setSelected(null);
    setContact(true);
  }, []);
  return (
    <div id="top" className="portfolio-page" ref={pageRef}>
      <div className="scroll-progress" aria-hidden="true" />
      <SiteHeader onContact={openContact} />
      <main>
        <section id="home" className="hero shell">
          <div className="hero-top">
            <span className="eyebrow">
              <span className="status-dot" /> Independent creative studio
            </span>
            <span className="hero-note">
              a little strategy.
              <br />a little magic.
            </span>
          </div>
          <div className="hero-main">
            <p className="hero-intro">Hey, we’re Magiapix. We turn good ideas into…</p>
            <h1>
              <span className="hero-line">distinctive brands &</span>
              <span className="hero-line">digital experiences</span>
              <span className="hero-line">
                with a little{" "}
                <span className="magic">
                  magic
                  <Sparkles className="sparkle" />
                </span>
                .
              </span>
            </h1>
            <div className="hero-bottom">
              <p>
                Thoughtful design. Meaningful connections.
                <br />A lasting impression.
              </p>
              <Link href="/work" className="button dark">
                Explore our work <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="hero-foot">
            <span>BRAND. DESIGN. DIGITAL.</span>
            <span className="availability">
              <span className="status-dot" /> Available for select projects
            </span>
          </div>
        </section>
        <section id="about" className="about shell">
          <div className="photo-stack">
            <div className="photo-print architecture-print">
              <img src="/images/architecture.webp" alt="Architectural inspiration" />
              <span>Finding beauty in the everyday.</span>
            </div>
            <div className="photo-print portrait-print">
              <img src="/images/portrait.webp" alt="Sunlit portrait from the studio moodboard" />
              <span>A fresh perspective, always.</span>
            </div>
            <span className="photo-scribble">
              good people.
              <br />
              great ideas. <span>↗</span>
            </span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">SMALL STUDIO. BIG IMAGINATION.</p>
            <h2>
              Equal parts curious minds
              <br />
              and creative hearts.
            </h2>
            <p>
              We’re Magiapix — an independent creative studio bringing brands to life through
              thoughtful strategy, distinctive identities, and feel-good digital experiences.
            </p>
            <p>
              We work closely with ambitious people to make the complex feel simple, the ordinary
              feel special, and every pixel feel purposeful.
            </p>
            <Link href="/about" className="text-link">
              A little more about us <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
        <section className="studio-strip shell">
          <span>A few things we believe in</span>
          <div>
            <b>Good energy.</b>
            <b className="serif">Clear thinking.</b>
            <b className="outline-word">Bold ideas.</b>
            <b>
              Better together<span className="lime-star">✳</span>
            </b>
          </div>
        </section>
        <section id="work" className="work shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A LITTLE OF WHAT WE DO</span>
              <h2>
                Selected works.
                <br />
                <span>Made with intention.</span>
              </h2>
            </div>
            <span className="small-meta">
              2025 — 2026
              <br />A collection of concept projects
            </span>
          </div>
          <div className="project-list">
            {projects.map((p, i) => (
              <article key={p.name} className={"project " + p.className}>
                <div className="project-info">
                  <div>
                    <span className="project-num">
                      0{i + 1} / {p.year}
                    </span>
                    <h3>
                      {p.name}
                      <ArrowUpRight size={25} />
                    </h3>
                    <span className="project-category">{p.category}</span>
                    <p>{p.description}</p>
                  </div>
                  <button className="project-open" onClick={() => setSelected(p)}>
                    Explore project{" "}
                    <span>
                      <Plus size={19} />
                    </span>
                  </button>
                </div>
                <button
                  className="visual-button"
                  aria-label={"Explore " + p.name + " project"}
                  onClick={() => setSelected(p)}
                >
                  <ProjectVisual kind={p.className} />
                </button>
              </article>
            ))}
          </div>
        </section>
        <section id="services" className="services shell">
          <span className="handwritten service-note">
            a mix of skills,
            <br />a whole lot of care.
          </span>
          <div className="center-heading">
            <span className="eyebrow">FROM FIRST IDEA TO FINAL PIXEL</span>
            <h2>
              You’ll catch us doing
              <br />a combo of these.
            </h2>
            <p>One creative partner. Many ways to make an impact.</p>
          </div>
          <div className="service-papers">
            <div className="service-paper brand-paper">
              <div className="paper-heading">
                <span>01 / BRAND</span>
                <Sparkles size={18} />
              </div>
              {[
                "Brand strategy",
                "Visual identity",
                "Art direction",
                "Packaging design",
                "Brand guidelines",
              ].map((s) => (
                <div className="service-row" key={s}>
                  {s}
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>
            <div className="service-paper digital-paper">
              <div className="paper-heading">
                <span>02 / DIGITAL</span>
                <MoveUpRight size={18} />
              </div>
              {[
                "Website design",
                "UI / UX design",
                "Web development",
                "Digital experiences",
                "Creative direction",
              ].map((s) => (
                <div className="service-row" key={s}>
                  {s}
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="process shell">
          <div>
            <span className="eyebrow">GOOD DESIGN IS A TEAM SPORT</span>
            <h2>
              Your next big thing.
              <br />
              Our kind of project.
            </h2>
          </div>
          <div className="process-copy">
            <p>
              No layers of account managers. No disappearing acts. Just a close collaboration,
              honest conversations, and a shared ambition to make something great.
            </p>
            <button className="text-link" onClick={openContact}>
              Let’s see what we can make together <ArrowUpRight size={18} />
            </button>
          </div>
        </section>
        <section id="contact" className="contact shell">
          <span className="eyebrow">
            <span className="status-dot" /> OPEN TO GOOD IDEAS & GOOD PEOPLE
          </span>
          <h2>
            Got something
            <br />
            in mind? <span>Let’s make it real.</span>
          </h2>
          <div className="contact-bottom">
            <button className="button dark" onClick={openContact}>
              Start a conversation <ArrowUpRight size={18} />
            </button>
            <span className="handwritten">
              great things start
              <br />
              with a simple hello. ↖
            </span>
          </div>
          <span className="contact-star">✳</span>
        </section>
      </main>
      <SiteFooter onContact={openContact} />
      {(selected || contact) && (
        <StudioDialog
          key={selected?.name ?? "contact"}
          project={selected}
          onClose={closeDialog}
          onContact={openContact}
        />
      )}
    </div>
  );
}
