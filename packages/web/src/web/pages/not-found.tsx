import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { StudioPage } from "../components/studio-page";
export default function NotFoundPage() {
  return (
    <StudioPage>
      {() => (
        <section className="page-hero shell">
          <span className="eyebrow" data-enter>
            404 / A LITTLE OFF THE MAP
          </span>
          <h1 data-enter>
            Let’s get you
            <br />
            back to the <span className="magic">good stuff</span>.
          </h1>
          <div className="page-hero-bottom" data-enter>
            <p>This page isn’t part of the picture.</p>
            <Link href="/" className="button dark">
              Back to home <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      )}
    </StudioPage>
  );
}
