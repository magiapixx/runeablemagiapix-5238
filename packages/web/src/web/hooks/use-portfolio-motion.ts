import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePortfolioMotion(root: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    if (!root.current) return;
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
          const distance = desktop ? 42 : 22;
          const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
          intro
            .from(select(".nav"), { y: -14, opacity: 0, duration: 0.6 })
            .from(
              select(".hero-top, .hero-intro"),
              { y: 16, opacity: 0, stagger: 0.1, duration: 0.7 },
              0.15,
            )
            .from(
              select(".hero-line"),
              { y: distance, opacity: 0, stagger: 0.13, duration: 1 },
              0.25,
            )
            .from(
              select(".hero-bottom, .hero-foot"),
              { y: 18, opacity: 0, stagger: 0.12, duration: 0.8 },
              0.7,
            )
            .from(
              select(".sparkle"),
              { scale: 0, rotate: -70, duration: 0.8, ease: "back.out(1.5)" },
              0.9,
            );

          const reveal = (target: Element | Element[], trigger: Element, stagger = 0) => {
            gsap.from(target, {
              y: distance,
              opacity: 0,
              duration: 0.9,
              stagger,
              ease: "power3.out",
              scrollTrigger: { trigger, start: "top 91%", once: true },
            });
          };
          const about = select(".about")[0];
          reveal(select(".about-copy > *"), about, 0.1);
          reveal(select(".photo-print, .photo-scribble"), about, 0.13);
          reveal(select(".studio-strip > span, .studio-strip b"), select(".studio-strip")[0], 0.09);
          [".section-heading", ".center-heading", ".process", ".footer"].forEach((selector) => {
            const element = select(selector)[0];
            reveal(Array.from(element.children), element, 0.12);
          });
          select(".project").forEach((project: HTMLElement) => {
            gsap.from(project, {
              y: desktop ? 65 : 30,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: project, start: "top 94%", once: true },
            });
            const content = project.querySelectorAll(".project-info > div > *, .project-open");
            reveal(Array.from(content), project, 0.08);
            if (desktop) {
              gsap.fromTo(
                project.querySelector(".project-stage"),
                { y: 24, scale: 1.08 },
                {
                  y: -24,
                  scale: 1.08,
                  ease: "none",
                  scrollTrigger: {
                    trigger: project,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                },
              );
            }
          });
          const papers = select(".service-papers")[0];
          gsap.from(select(".service-paper"), {
            y: distance + 15,
            rotation: 0,
            opacity: 0,
            stagger: 0.15,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: papers, start: "top 89%", once: true },
          });
          reveal(
            select(".contact > .eyebrow, .contact h2, .contact-bottom"),
            select(".contact")[0],
            0.13,
          );
          gsap.to(select(".contact-star"), {
            rotation: "+=100",
            ease: "none",
            scrollTrigger: {
              trigger: select(".contact")[0],
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
          if (desktop) {
            gsap.to(select(".hero-note"), {
              y: 50,
              rotation: 15,
              ease: "none",
              scrollTrigger: {
                trigger: select(".hero")[0],
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
            gsap.to(select(".portrait-print"), {
              y: -22,
              rotation: 3,
              ease: "none",
              scrollTrigger: {
                trigger: about,
                start: "top 70%",
                end: "bottom top",
                scrub: 1.2,
              },
            });
          }
          gsap.fromTo(
            select(".scroll-progress"),
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: { start: 0, end: "max", scrub: 0.25 },
            },
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
