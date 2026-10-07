import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Mark } from "./project-showcase";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];
export function SiteHeader({ onContact }: { onContact: () => void }) {
  const [menu, setMenu] = useState(false);
  const [location] = useLocation();
  return (
    <header className="nav shell">
      <Link href="/" aria-label="Magiapix home" onClick={() => setMenu(false)}>
        <Mark />
      </Link>
      <nav aria-label="Main navigation" className={menu ? "navigation expanded" : "navigation"}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={location === link.href ? "page" : undefined}
            onClick={() => setMenu(false)}
          >
            {link.label}
          </Link>
        ))}
        <button
          className="button dark nav-contact"
          onClick={() => {
            setMenu(false);
            onContact();
          }}
        >
          Let’s talk <ArrowUpRight size={15} />
        </button>
      </nav>
      <button
        className="menu-toggle"
        aria-label={menu ? "Close menu" : "Open menu"}
        aria-expanded={menu}
        onClick={() => setMenu(!menu)}
      >
        {menu ? <X /> : <Menu />}
      </button>
    </header>
  );
}
export function SiteFooter({ onContact }: { onContact: () => void }) {
  return (
    <footer className="footer shell">
      <div className="footer-top">
        <Link href="/" aria-label="Magiapix home">
          <Mark />
        </Link>
        <div>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <button onClick={onContact}>
            Say hello <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Magiapix. A little magic, by design.</span>
        <span>Independent in spirit. Connected by creativity.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
export function ContactPanel({ onContact }: { onContact: () => void }) {
  return (
    <section className="contact shell" data-reveal>
      <span className="eyebrow">
        <span className="status-dot" /> OPEN TO GOOD IDEAS & GOOD PEOPLE
      </span>
      <h2>
        Got something
        <br />
        in mind? <span>Let’s make it real.</span>
      </h2>
      <div className="contact-bottom">
        <button className="button dark" onClick={onContact}>
          Start a conversation <ArrowUpRight size={18} />
        </button>
        <span className="handwritten">
          great things start
          <br />
          with a simple hello. ↖
        </span>
      </div>
      <span className="contact-star" aria-hidden="true">
        ✳
      </span>
    </section>
  );
}
