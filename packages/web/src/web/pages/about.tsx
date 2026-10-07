import { Link } from "wouter";
import { ArrowUpRight, ArrowDown, Sparkles, Heart, Compass } from "lucide-react";
import { StudioPage } from "../components/studio-page";

const values = [
  {
    number: "01",
    title: "Curiosity comes first.",
    body: "The best ideas start with better questions. We look closer, listen longer, and leave room for the unexpected.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Less, but meaningful.",
    body: "We believe in clarity over clutter. Every choice should have a reason, and every detail should earn its place.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Good people. Good work.",
    body: "Great design is a conversation, not a handover. We care about the people we work with as much as what we make.",
    icon: Heart,
  },
];
export default function AboutPage() {
  return (
    <StudioPage>
      {({ onContact }) => (
        <>
          <section className="page-hero shell about-page-hero">
            <div className="page-hero-top" data-enter>
              <span className="eyebrow">
                <span className="status-dot" /> INDEPENDENT BY DESIGN
              </span>
              <span className="small-meta">
                A small studio.
                <br />
                An open mind.
              </span>
            </div>
            <div className="about-hero-grid">
              <div>
                <h1 data-enter>
                  Curious minds.
                  <br />
                  Creative hearts.
                  <br />A little <span className="magic">magic</span>.
                </h1>
                <p data-enter>
                  We’re Magiapix. An independent creative studio
                  <br className="desktop-break" /> with a soft spot for good ideas and good people.
                </p>
                <a data-enter href="#our-story" className="text-link">
                  Get to know us <ArrowDown size={17} />
                </a>
              </div>
              <div className="about-hero-art" data-enter>
                <div className="about-art-photo building">
                  <img
                    src="/images/architecture.webp"
                    alt="Architecture from the studio inspiration board"
                  />
                  <span>A fresh perspective.</span>
                </div>
                <div className="about-art-photo sun">
                  <img
                    src="/images/portrait.webp"
                    alt="Warm sunlight from the studio inspiration board"
                  />
                  <span>Chasing the good light.</span>
                </div>
                <span className="handwritten art-caption">
                  finding inspiration
                  <br />
                  everywhere. ↗
                </span>
                <span className="art-star" aria-hidden="true">
                  ✳
                </span>
              </div>
            </div>
            <div className="hero-foot" data-enter>
              <span>SMALL STUDIO. BIG IMAGINATION.</span>
              <span>THOUGHTFUL, FROM THE START.</span>
            </div>
          </section>
          <section id="our-story" className="studio-story shell">
            <div data-reveal>
              <span className="eyebrow">A LITTLE ABOUT US</span>
              <h2>
                We’re not here to
                <br />
                make more noise.
                <br />
                <span>
                  We’re here to make
                  <br />
                  something matter.
                </span>
              </h2>
            </div>
            <div className="story-copy" data-reveal>
              <p className="story-lead">
                Good design makes you feel something. Great design gives that feeling a purpose.
              </p>
              <p>
                That’s where we come in. Magiapix brings strategy, identity, and digital design
                together to help ambitious ideas find their voice and their place in the world.
              </p>
              <p>
                We’re intentionally small and personally involved. You work with the people doing
                the thinking and the making, from that first conversation to the final pixel.
              </p>
              <p>
                No one-size-fits-all formulas. Just a thoughtful process, an honest partnership, and
                a shared ambition to make something we can all be proud of.
              </p>
              <Link href="/work" className="text-link">
                See that thinking in action <ArrowUpRight size={18} />
              </Link>
            </div>
          </section>
          <section className="values-section shell">
            <div className="section-heading" data-reveal>
              <div>
                <span className="eyebrow">THE THINGS WE COME BACK TO</span>
                <h2>
                  A few guiding <span className="magic">principles</span>.
                </h2>
              </div>
              <span className="handwritten">
                not just words.
                <br />
                our way of working.
              </span>
            </div>
            <div className="values-list">
              {values.map((v) => (
                <article className="value-row" data-reveal key={v.number}>
                  <span className="value-number">{v.number} /</span>
                  <div>
                    <v.icon size={21} />
                    <h3>{v.title}</h3>
                  </div>
                  <p>{v.body}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="studio-note shell" data-reveal>
            <div className="note-symbol" aria-hidden="true">
              ✳
            </div>
            <div>
              <span className="eyebrow">INDEPENDENT IN SPIRIT. CONNECTED BY CREATIVITY.</span>
              <h2>
                Big enough to think boldly.
                <br />
                Small enough to <span>really care.</span>
              </h2>
              <p>
                We build the right creative partnership around your idea.
                <br />
                Direct conversations, shared curiosity, and no unnecessary layers.
              </p>
            </div>
            <span className="handwritten">
              close collaboration.
              <br />
              better possibilities.
            </span>
          </section>
          <section className="about-collaboration shell">
            <div className="section-heading" data-reveal>
              <div>
                <span className="eyebrow">HOW IT FEELS TO WORK WITH US</span>
                <h2>
                  Good chemistry.
                  <br />
                  <span>Great things follow.</span>
                </h2>
              </div>
              <button className="text-link" onClick={onContact}>
                Let’s find out <ArrowUpRight size={18} />
              </button>
            </div>
            <div className="collaboration-grid">
              {[
                {
                  n: "01",
                  t: "We get to know you.",
                  p: "Your story, your people, your ambitions. We listen first and make sure we’re asking the right questions.",
                },
                {
                  n: "02",
                  t: "We find the right direction.",
                  p: "We turn shared understanding into a clear creative point of view, with room to explore and refine together.",
                },
                {
                  n: "03",
                  t: "We make it happen.",
                  p: "Thoughtful execution, honest feedback, and care in every detail. Good ideas deserve a good finish.",
                },
              ].map((step) => (
                <article data-reveal key={step.n}>
                  <span>{step.n}</span>
                  <h3>{step.t}</h3>
                  <p>{step.p}</p>
                </article>
              ))}
            </div>
          </section>
        </>
      )}
    </StudioPage>
  );
}
