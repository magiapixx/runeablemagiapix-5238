import { useLayoutEffect } from "react";
import { useLocation } from "wouter";

export function RouteEffects() {
  const [path] = useLocation();
  useLayoutEffect(() => {
    const html = document.documentElement;
    const old = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = old;
    const names: Record<string, string> = {
      "/": "A little magic, by design.",
      "/work": "Selected work",
      "/about": "About the studio",
      "/services": "Brand & digital services",
    };
    document.title = `Magiapix — ${names[path] ?? "Page not found"}`;
  }, [path]);
  return null;
}
