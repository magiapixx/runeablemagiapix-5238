import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function usePageMotion(root: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(
        {
          desktop: "(min-width: 901px)",
          mobile: "(max-width: 900px)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (match) => {
          const { desktop, reduced } = match.conditions!;
          if (reduced) return;
          const select = gsap.utils.selector(root.current);
          gsap.from(select(".page-hero [data-enter]"), {
            y: desktop ? 35 : 18,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            clearProps: "opacity,transform",
          });
          select("[data-reveal]").forEach((element: HTMLElement) => {
            gsap.from(element, {
              y: desktop ? 44 : 22,
              opacity: 0,
              duration: 0.9,
              ease: "power3.out",
              clearProps: "opacity,transform",
              scrollTrigger: { trigger: element, start: "top 95%", once: true },
            });
          });
          if (desktop)
            select("[data-parallax]").forEach((element: HTMLElement) => {
              gsap.fromTo(
                element,
                { y: 20, scale: 1.06 },
                {
                  y: -20,
                  scale: 1.06,
                  ease: "none",
                  scrollTrigger: {
                    trigger: element.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                },
              );
            });
          gsap.to(select(".contact-star"), {
            rotation: "+=90",
            ease: "none",
            scrollTrigger: {
              trigger: select(".contact")[0],
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
          gsap.fromTo(
            select(".scroll-progress"),
            { scaleX: 0 },
            { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.25 } },
          );
          let mounted = true;
          document.fonts.ready.then(() => {
            if (mounted) ScrollTrigger.refresh();
          });
          return () => {
            mounted = false;
          };
        },
      );
    }, root);
    return () => {
      media.revert();
      context.revert();
    };
  }, [root]);
}
