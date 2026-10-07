import { useLayoutEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Plus, Sparkles } from "lucide-react";
import { Link } from "wouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StudioPage } from "../components/studio-page";
import { projects, ProjectVisual, type Project } from "../components/project-showcase";

gsap.registerPlugin(ScrollTrigger);
const filters = ["All work", "Brand", "Digital"] as const;
type Filter = (typeof filters)[number];
function WorkGallery({ onProject }: { onProject: (project: Project) => void }) {
  const [filter, setFilter] = useState<Filter>("All work");
  const root = useRef<HTMLDivElement>(null);
  const visible = projects.filter((p) => filter === "All work" || p.disciplines.includes(filter));
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const select = gsap.utils.selector(root.current);
        select(".project").forEach((card: HTMLElement) => {
          gsap.from(card, {
            y: 32,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "opacity,transform",
            scrollTrigger: { trigger: card, start: "top 95%", once: true },
          });
          if (window.matchMedia("(min-width: 901px)").matches) {
            gsap.fromTo(
              card.querySelector(".project-stage"),
              { y: 20, scale: 1.06 },
              {
                y: -20,
                scale: 1.06,
                ease: "none",
                scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
              },
            );
          }
        });
      });
    }, root);
    ScrollTrigger.refresh();
    return () => {
      media.revert();
      context.revert();
    };
  }, [filter]);
  return (
    <section id="selected-work" className="work-collection shell">
      <div className="work-toolbar">
        <div className="filter-pills" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              aria-pressed={f === filter}
              className={f === filter ? "filter active" : "filter"}
              onClick={() => setFilter(f)}
            >
              {f}
              <span>
                {String(
                  projects.filter((p) => f === "All work" || p.disciplines.includes(f)).length,
                ).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
        <span className="small-meta" aria-live="polite">
          {String(visible.length).padStart(2, "0")} projects · 2025—2026
        </span>
      </div>
      <div ref={root} className="project-list work-page-list">
        {visible.map((p) => (
          <article key={p.name} className={"project " + p.className}>
            <div className="project-info">
              <div>
                <span className="project-num">
                  0{projects.indexOf(p) + 1} / {p.year} · CONCEPT
                </span>
                <h3>
                  {p.name}
                  <ArrowUpRight size={25} />
                </h3>
                <span className="project-category">{p.category}</span>
                <p>{p.description}</p>
                <div className="work-tags">
                  {p.deliverables.slice(0, 2).map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
              <button className="project-open" onClick={() => onProject(p)}>
                Explore project{" "}
                <span>
                  <Plus size={19} />
                </span>
              </button>
            </div>
            <button
              className="visual-button"
              aria-label={"Explore " + p.name + " project"}
              onClick={() => onProject(p)}
            >
              <ProjectVisual kind={p.className} />
            </button>
          </article>
        ))}
      </div>
      <p className="concept-note">
        A collection of self-initiated concept projects. Different worlds, one thoughtful approach.
      </p>
    </section>
  );
}
export default function WorkPage() {
  return (
    <StudioPage>
      {({ onProject }) => (
        <>
          <section className="page-hero shell work-page-hero">
            <div className="page-hero-top" data-enter>
              <span className="eyebrow">
                <span className="status-dot" /> SELECTED WORK / 2025—2026
              </span>
              <span className="handwritten">
                less ordinary.
                <br />
                more memorable.
              </span>
            </div>
            <h1 data-enter>
              Good ideas.
              <br />
              Made{" "}
              <span className="magic">
                tangible
                <Sparkles className="sparkle" />
              </span>
              .
            </h1>
            <div className="page-hero-bottom" data-enter>
              <p>
                Distinctive brands. Thoughtful digital experiences.
                <br />A little glimpse into the worlds we create.
              </p>
              <a href="#selected-work" className="button dark">
                Take a look <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-foot" data-enter>
              <span>STRATEGY MEETS IMAGINATION.</span>
              <span>EVERY PIXEL HAS A PURPOSE.</span>
            </div>
          </section>
          <WorkGallery onProject={onProject} />
          <section className="page-crosslink shell" data-reveal>
            <span className="eyebrow">MORE THAN A PRETTY PICTURE</span>
            <div>
              <h2>
                Curious about the
                <br />
                thinking behind the making?
              </h2>
              <Link href="/services" className="text-link">
                Explore our services <ArrowUpRight size={19} />
              </Link>
            </div>
          </section>
        </>
      )}
    </StudioPage>
  );
}
