import { ArrowDown, ArrowUpRight, Sparkles, MoveUpRight, Plus } from "lucide-react";
import { Link } from "wouter";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StudioPage } from "../components/studio-page";
const brandServices = [
  {
    t: "Brand strategy",
    p: "Positioning, purpose, audience, and a clear point of view. The foundation that makes every creative decision feel right.",
  },
  {
    t: "Visual identity",
    p: "Logos, color, typography, and a distinctive visual language that feels like you—not like everyone else.",
  },
  {
    t: "Art direction & packaging",
    p: "A consistent creative world, from the images you share to the products people hold in their hands.",
  },
  {
    t: "Brand guidelines",
    p: "A practical toolkit that helps your team keep the brand clear, consistent, and confidently moving forward.",
  },
];
const digitalServices = [
  {
    t: "Website design",
    p: "Expressive, responsive websites that tell your story and make it easy for people to take the next step.",
  },
  {
    t: "UI / UX & product design",
    p: "Clear journeys, thoughtful interfaces, and design systems that bring a little order to complex experiences.",
  },
  {
    t: "Web development",
    p: "Bringing the design to life with care for responsiveness, accessibility, and the details that make it feel good.",
  },
  {
    t: "Digital experiences",
    p: "Campaigns, interactive moments, and creative touchpoints that connect your brand with the people who matter.",
  },
];
const questions = [
  {
    q: "Can we work on just one part of a project?",
    a: "Absolutely. We can help with a focused identity refresh, a standalone website, or an entire brand and digital experience. We’ll shape the scope around what you actually need.",
  },
  {
    q: "What does the process look like?",
    a: "We begin with a conversation, define the brief and scope, explore a creative direction, and refine the work with you. You’ll know what happens next and have clear opportunities to give feedback throughout.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope, complexity, and how ready your content is. After our first conversation, we’ll propose a realistic timeline and agree on milestones before the work begins.",
  },
  {
    q: "How do you price your work?",
    a: "We create a project-specific proposal based on the deliverables and level of support you need. No surprise packages or fixed promises before we understand the brief.",
  },
  {
    q: "Can you help after launch?",
    a: "We can discuss ongoing design support, updates, and refinements as part of your proposal. The right arrangement depends on what your team needs after the initial project.",
  },
];
export default function ServicesPage() {
  return (
    <StudioPage>
      {({ onContact }) => (
        <>
          <section className="page-hero shell services-page-hero">
            <div className="page-hero-top" data-enter>
              <span className="eyebrow">
                <span className="status-dot" /> FROM FIRST IDEA TO FINAL PIXEL
              </span>
              <span className="handwritten">
                the right mix.
                <br />a little magic.
              </span>
            </div>
            <h1 data-enter>
              One creative partner.
              <br />A world of{" "}
              <span className="magic">
                possibilities
                <Sparkles className="sparkle" />
              </span>
              .
            </h1>
            <div className="page-hero-bottom" data-enter>
              <p>
                Strategy, brand, and digital. Thoughtfully connected.
                <br />
                Built around your idea, not a one-size-fits-all package.
              </p>
              <a href="#capabilities" className="button dark">
                What we can do <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-foot" data-enter>
              <span>GOOD THINKING. GREAT MAKING.</span>
              <span>BRAND + DIGITAL + YOU.</span>
            </div>
          </section>
          <section id="capabilities" className="capabilities shell">
            <div className="section-heading" data-reveal>
              <div>
                <span className="eyebrow">OUR CREATIVE TOOLKIT</span>
                <h2>
                  Distinctive by nature.
                  <br />
                  <span>Connected by design.</span>
                </h2>
              </div>
              <span className="small-meta">
                Two disciplines.
                <br />
                One thoughtful approach.
              </span>
            </div>
            {[
              {
                n: "01",
                name: "Brand",
                intro: "Find your voice.\nMake your mark.",
                body: "From the first big question to the smallest visual detail. We build brands with a clear purpose and a personality all their own.",
                services: brandServices,
                icon: Sparkles,
                className: "brand-capability",
              },
              {
                n: "02",
                name: "Digital",
                intro: "Bring it to life.\nMake it feel right.",
                body: "We turn brand thinking into digital experiences that are as intuitive as they are distinctive. Beautiful, useful, and built for real people.",
                services: digitalServices,
                icon: MoveUpRight,
                className: "digital-capability",
              },
            ].map((group) => (
              <article key={group.n} className={"capability " + group.className} data-reveal>
                <div className="capability-intro">
                  <div className="capability-label">
                    <span>
                      {group.n} / {group.name.toUpperCase()}
                    </span>
                    <group.icon size={24} />
                  </div>
                  <h3>
                    {group.intro.split("\n").map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </h3>
                  <p>{group.body}</p>
                  <button className="text-link" onClick={onContact}>
                    Let’s talk {group.name.toLowerCase()} <ArrowUpRight size={17} />
                  </button>
                  <span className="capability-decoration" aria-hidden="true">
                    {group.n === "01" ? "✳" : "↗"}
                  </span>
                </div>
                <div className="capability-items">
                  {group.services.map((s, i) => (
                    <div key={s.t}>
                      <span className="capability-item-num">0{i + 1}</span>
                      <div>
                        <h4>{s.t}</h4>
                        <p>{s.p}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </section>
          <section className="service-process shell">
            <div className="section-heading" data-reveal>
              <div>
                <span className="eyebrow">A LITTLE STRUCTURE. A LOT OF POSSIBILITIES.</span>
                <h2>
                  Good work doesn’t
                  <br />
                  <span>happen by accident.</span>
                </h2>
              </div>
              <span className="handwritten">
                clear steps.
                <br />
                room to explore.
              </span>
            </div>
            <div className="process-steps">
              {[
                {
                  n: "01",
                  t: "Discover",
                  p: "Ask the right questions. Understand your world. Find the real opportunity.",
                },
                {
                  n: "02",
                  t: "Define",
                  p: "Set a clear direction. Align on the brief. Give the big idea a solid foundation.",
                },
                {
                  n: "03",
                  t: "Create",
                  p: "Explore, design, and refine. Make the idea tangible, with you in the loop.",
                },
                {
                  n: "04",
                  t: "Launch",
                  p: "Bring it all together. Fine-tune the details. Give your next chapter a good start.",
                },
              ].map((s) => (
                <article key={s.n} data-reveal>
                  <span>
                    {s.n}
                    <ArrowUpRight size={18} />
                  </span>
                  <h3>{s.t}</h3>
                  <p>{s.p}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="faq-section shell">
            <div data-reveal>
              <span className="eyebrow">A FEW GOOD QUESTIONS</span>
              <h2>
                Wondering
                <br />
                about <span className="magic">something</span>?
              </h2>
              <p>
                Here’s a little clarity.
                <br />
                For everything else, there’s a conversation.
              </p>
              <button className="text-link" onClick={onContact}>
                Ask us anything <ArrowUpRight size={18} />
              </button>
            </div>
            <div className="faq-list" data-reveal>
              {questions.map((q) => (
                <details key={q.q} onToggle={() => ScrollTrigger.refresh()}>
                  <summary>
                    {q.q}
                    <Plus size={17} />
                  </summary>
                  <p>{q.a}</p>
                </details>
              ))}
            </div>
          </section>
          <section className="page-crosslink shell" data-reveal>
            <span className="eyebrow">FROM THINKING TO MAKING</span>
            <div>
              <h2>
                Want to see what
                <br />
                this looks like in practice?
              </h2>
              <Link href="/work" className="text-link">
                Explore selected work <ArrowUpRight size={19} />
              </Link>
            </div>
          </section>
        </>
      )}
    </StudioPage>
  );
}
