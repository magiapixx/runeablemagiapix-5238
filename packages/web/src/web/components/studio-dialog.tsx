import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { ProjectVisual, type Project } from "./project-showcase";

export function StudioDialog({
  project,
  onClose,
  onContact,
}: {
  project: Project | null;
  onClose: () => void;
  onContact: () => void;
}) {
  const [sent, setSent] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button, input, textarea, select, a[href]",
        );
        if (!nodes?.length) return;
        const first = nodes[0],
          last = nodes[nodes.length - 1];
        if (
          e.shiftKey &&
          (document.activeElement === first || document.activeElement === dialogRef.current)
        ) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [onClose]);
  return (
    <div className="modal-overlay">
      <button className="modal-backdrop" aria-label="Dismiss dialog" onClick={onClose} />
      <dialog
        open
        className="modal"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={dialogRef}
        tabIndex={-1}
      >
        <button className="modal-close" aria-label="Close dialog" onClick={onClose}>
          <X />
        </button>
        {project ? (
          <>
            <span className="eyebrow">CONCEPT PROJECT / {project.year}</span>
            <h2 id="modal-title">{project.name}</h2>
            <p className="modal-category">{project.category}</p>
            <ProjectVisual kind={project.className} />
            <h3>The idea</h3>
            <p>{project.details}</p>
            <div className="deliverables">
              {project.deliverables.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            <button className="button dark" onClick={onContact}>
              Have a project like this? <ArrowUpRight size={18} />
            </button>
          </>
        ) : (
          <>
            <span className="eyebrow">GOOD THINGS START HERE</span>
            <h2 id="modal-title">Tell us your idea.</h2>
            <p>Share a little about yourself and what you have in mind.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Hi Magiapix,\n\nI'm ${data.get("name")} (${data.get("email")}).\n\nI'm interested in: ${data.get("service")}\n\n${data.get("message")}`;
                window.location.href = `mailto:hello@magiapix.com?subject=${encodeURIComponent("Let’s make something — " + data.get("name"))}&body=${encodeURIComponent(body)}`;
                setSent(true);
              }}
            >
              <div className="form-pair">
                <label>
                  Your name
                  <input aria-label="Your name" name="name" required placeholder="Alex Taylor" />
                </label>
                <label>
                  Email address
                  <input
                    aria-label="Email address"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@yourstudio.com"
                  />
                </label>
              </div>
              <label>
                What can we help with?
                <select aria-label="What can we help with?" name="service">
                  <option>Brand & digital experience</option>
                  <option>Brand strategy & identity</option>
                  <option>Website design & development</option>
                  <option>UI / UX & product design</option>
                  <option>Something else</option>
                </select>
              </label>
              <label>
                A little about your project
                <textarea
                  aria-label="A little about your project"
                  name="message"
                  required
                  rows={4}
                  placeholder="The idea, the ambition, the big what-if…"
                />
              </label>
              <button className="button dark" type="submit">
                Create email draft <ArrowUpRight size={17} />
              </button>
              <p className="form-note">
                This opens your email app with a draft. Nothing is sent automatically. The contact
                address is sample content.
              </p>
              {sent && (
                <output className="form-success">
                  Your email app was requested to open a draft. If it did not open, check your email
                  app settings.
                </output>
              )}
            </form>
          </>
        )}
      </dialog>
    </div>
  );
}
