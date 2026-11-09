"use client";

// Adapted from Skiper UI skiper74 (Timeline calendar, Pro): https://skiper-ui.com/v1/skiper74
// Changes from upstream: sections come from children instead of hardcoded demo data,
// colours use Fumadocs tokens, and the sticky header sits below the docs header and the
// mobile "On this page" bar.

import { MotionConfig, motion, useInView } from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

// Distance from the top of the viewport where a section counts as "being read":
// covers the docs header, the mobile "On this page" bar and the sticky bar itself.
const HEADER_LINE = 160;

const SetCurrentLabel = createContext<(label: string) => void>(() => {});

/**
 * Scrolling timeline whose sticky header shows the label of the section being read.
 * The header floats over the content (zero height) and fades in once the first section
 * reaches it, so it never duplicates the heading at the top of the page.
 */
const Skiper74 = ({ children }: { children: ReactNode }) => {
  const [current, setCurrent] = useState<string | null>(null);
  // Marks the start of the timeline: while it's still below the header line, hide the header.
  const startRef = useRef<HTMLDivElement>(null);
  const startMarkerVisible = useInView(startRef, { margin: `-${HEADER_LINE}px 0px 0px 0px` });
  const visible = current !== null && !startMarkerVisible;

  return (
    <SetCurrentLabel.Provider value={setCurrent}>
      <MotionConfig reducedMotion="user">
      {/* Below xl, Fumadocs shows its own sticky "On this page" bar with the current year. */}
      <div className="not-prose sticky top-(--fd-docs-row-3,0px) z-10 h-0 max-xl:hidden">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 -mx-1 border-b border-fd-border bg-fd-background/90 px-1 py-3 backdrop-blur transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <motion.span
            key={current}
            initial={{ x: -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="inline-block text-2xl font-medium tracking-tight text-fd-foreground"
          >
            {current}
          </motion.span>
        </div>
      </div>
      <div ref={startRef} aria-hidden />
      {children}
      </MotionConfig>
    </SetCurrentLabel.Provider>
  );
};

/** One section of the timeline; becomes the header label once it scrolls under the header. */
const TimelineSection = ({ label, children }: { label: string; children: ReactNode }) => {
  const setCurrent = useContext(SetCurrentLabel);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0, margin: `-${HEADER_LINE}px 0px -100% 0px` });

  useEffect(() => {
    if (inView) setCurrent(label);
  }, [inView, label, setCurrent]);

  // Extra scroll margin so a table-of-contents jump lands below the sticky bar.
  return (
    <section
      ref={ref}
      className={[
        "[&_h2]:scroll-mt-[calc(var(--fd-docs-row-3,0px)+5rem)]",
        // Landing-page rail: a thin line per year, a dot per top-level entry, muted detail.
        "[&>ul]:ml-1 [&>ul]:list-none [&>ul]:border-l [&>ul]:border-fd-border [&>ul]:pl-6",
        "[&>ul>li]:relative [&>ul>li]:font-medium [&>ul>li]:text-fd-foreground",
        "[&>ul>li]:before:absolute [&>ul>li]:before:-left-[1.85rem] [&>ul>li]:before:top-[0.6em] [&>ul>li]:before:size-2 [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-fd-primary [&>ul>li]:before:content-['']",
        "[&>ul>li_ul]:text-sm [&>ul>li_ul]:font-normal [&>ul>li_ul]:text-fd-muted-foreground",
      ].join(" ")}
    >
      {children}
    </section>
  );
};

export { Skiper74, Skiper74 as Timeline, TimelineSection };
