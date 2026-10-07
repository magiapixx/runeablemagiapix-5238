export type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  className: string;
  details: string;
  deliverables: string[];
  disciplines: ("Brand" | "Digital")[];
};
export const projects: Project[] = [
  {
    name: "Forma",
    disciplines: ["Brand", "Digital"],
    category: "Brand strategy · Web design",
    year: "2026",
    description:
      "A new perspective for an architecture studio. Thoughtful spaces meet a quietly confident digital presence.",
    className: "forma",
    details:
      "An editorial identity and digital experience for a concept architecture practice. We paired a restrained visual language with immersive photography, letting the spaces do the talking.",
    deliverables: ["Visual identity", "Art direction", "Responsive website"],
  },
  {
    name: "Auré",
    disciplines: ["Brand", "Digital"],
    category: "Brand identity · E-commerce",
    year: "2026",
    description:
      "Less, but better. A warm, considered identity for skincare that brings everyday rituals back to the essentials.",
    className: "aure",
    details:
      "A concept skincare brand built around the beauty of slowing down. From the tactile packaging system to an effortless shopping experience, every touchpoint feels natural and intentional.",
    deliverables: ["Brand positioning", "Packaging design", "E-commerce design"],
  },
  {
    name: "Orbit",
    disciplines: ["Digital"],
    category: "Product design · Development",
    year: "2025",
    description:
      "Big ideas need room to grow. A playful workspace that helps creative teams find their flow, together.",
    className: "orbit",
    details:
      "A concept collaboration tool for independent creative teams. We turned complex workflows into a simple, expressive interface with a flexible identity that moves with its users.",
    deliverables: ["Product strategy", "UI / UX design", "Design system"],
  },
  {
    name: "Goodside",
    disciplines: ["Brand", "Digital"],
    category: "Brand identity · Digital experience",
    year: "2025",
    description:
      "Good food. Better moods. A fresh, feel-good brand and digital home for a different kind of everyday café.",
    className: "goodside",
    details:
      "A sunny concept café identity that finds joy in the everyday. Bold typography, a citrus-inspired palette and a playful digital experience create an inviting world from the first hello.",
    deliverables: ["Brand identity", "Art direction", "Website design"],
  },
];
export function Mark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "brand small" : "brand"}>
      <span className="brand-symbol">✳</span> magiapix<span className="brand-period">®</span>
    </span>
  );
}
export function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "forma")
    return (
      <div className="project-stage forma-stage">
        <div className="browser forma-browser">
          <div className="mini-nav">
            <b>forma®</b>
            <span>Practice &nbsp; Projects &nbsp; Contact ↗</span>
          </div>
          <div className="forma-heading">
            Spaces for living.
            <br />
            <span>Designed for life.</span>
          </div>
          <div className="mini-caption">
            <span>Architecture with purpose.</span>
            <span>EST. 2020 — BASED IN COPENHAGEN</span>
          </div>
          <img
            src="/images/architecture.webp"
            alt="Concrete architectural form under a pale blue sky"
          />
          <div className="forma-bottom">
            We shape places.<span>You make them yours. ↗</span>
          </div>
        </div>
        <div className="floating-label">
          <span className="tiny-dot" /> A different perspective
        </div>
      </div>
    );
  if (kind === "aure")
    return (
      <div className="project-stage aure-stage">
        <div className="aure-book">
          <span>auré</span>
          <p>
            A little care.
            <br />A little calm.
          </p>
          <img src="/images/skincare.webp" alt="Warm amber skincare bottles" />
          <div>THE BEAUTY OF LESS.</div>
        </div>
        <div className="browser aure-browser">
          <div className="mini-nav">
            <span>Shop &nbsp; Our story</span>
            <b>auré</b>
            <span>Bag (0)</span>
          </div>
          <div className="aure-content">
            <div>
              <span>YOUR DAILY MOMENT</span>
              <h3>
                Good for your skin.
                <br />
                <i>Better for your soul.</i>
              </h3>
              <p>Considered skincare. Uncomplicated rituals.</p>
              <span className="mini-button">Discover your ritual ↗</span>
            </div>
            <img src="/images/skincare.webp" alt="Auré skincare concept photography" />
          </div>
          <div className="aure-footer">
            Naturally thoughtful. &nbsp; Always essential. &nbsp; Made for you.
          </div>
        </div>
      </div>
    );
  if (kind === "orbit")
    return (
      <div className="project-stage orbit-stage">
        <div className="browser orbit-browser">
          <div className="mini-nav">
            <b>✳ orbit</b>
            <span>Product &nbsp; Our story &nbsp; Pricing</span>
            <span className="mini-button">Get in the loop ↗</span>
          </div>
          <div className="orbit-content">
            <span>LESS CHAOS. MORE CREATIVE.</span>
            <h3>
              Great work
              <br />
              starts <i>together.</i>
            </h3>
            <p>
              Your ideas, your people, your space.
              <br />
              One happy place to make things happen.
            </p>
            <span className="mini-button black">Find your flow ↗</span>
            <div className="orbit-graphic">
              <span className="orbit-ring one" />
              <span className="orbit-ring two" />
              <span className="orbit-ring three" />
              <span className="orbit-star">✳</span>
            </div>
          </div>
          <div className="orbit-bottom">
            A little structure. A lot of possibility. <span>↗</span>
          </div>
        </div>
        <div className="orbit-note">
          make space
          <br />
          for good ideas ✳
        </div>
      </div>
    );
  return (
    <div className="project-stage goodside-stage">
      <div className="goodside-poster">
        <span>
          GOOD
          <br />
          SIDE<span className="poster-star">✳</span>
        </span>
        <img src="/images/orange.webp" alt="Fresh oranges for the Goodside café concept" />
        <p>SEE YOU ON THE GOOD SIDE.</p>
      </div>
      <div className="browser goodside-browser">
        <div className="mini-nav">
          <b>goodside®</b>
          <span>Menu &nbsp; Our place &nbsp; Come by ↗</span>
        </div>
        <div className="goodside-content">
          <h3>
            A little sunshine.
            <br />A lot of <i>good.</i>
          </h3>
          <p>Fresh plates. Great coffee. Your kind of place.</p>
          <span className="mini-button black">Find your good side ↗</span>
          <div className="orange-disc">✳</div>
        </div>
        <div className="goodside-footer">GOOD FOOD. GOOD PEOPLE. GOOD DAYS.</div>
      </div>
    </div>
  );
}
