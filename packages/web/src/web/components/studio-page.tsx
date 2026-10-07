import { useCallback, useRef, useState, type ReactNode } from "react";
import { SiteHeader, SiteFooter, ContactPanel } from "./site-chrome";
import { StudioDialog } from "./studio-dialog";
import { type Project } from "./project-showcase";
import { usePageMotion } from "../hooks/use-page-motion";

type PageActions = { onContact: () => void; onProject: (project: Project) => void };
export function StudioPage({ children }: { children: (actions: PageActions) => ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  usePageMotion(root);
  const [contact, setContact] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const onContact = useCallback(() => {
    setProject(null);
    setContact(true);
  }, []);
  const close = useCallback(() => {
    setProject(null);
    setContact(false);
  }, []);
  return (
    <div ref={root} id="top" className="studio-page">
      <div className="scroll-progress" aria-hidden="true" />
      <SiteHeader onContact={onContact} />
      <main>
        {children({ onContact, onProject: setProject })}
        <ContactPanel onContact={onContact} />
      </main>
      <SiteFooter onContact={onContact} />
      {(project || contact) && (
        <StudioDialog
          key={project?.name ?? "contact"}
          project={project}
          onClose={close}
          onContact={onContact}
        />
      )}
    </div>
  );
}
