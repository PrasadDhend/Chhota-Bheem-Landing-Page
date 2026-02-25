"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import ChhotaBheemScrollCanvas from "@/components/ChhotaBheemScrollCanvas";
import ChhotaBheemExperience from "@/components/ChhotaBheemExperience";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-base-dark min-h-screen selection:bg-accent-ember">
      <Navbar />

      {/* Accessibility: Screen Reader Narrative Summary */}
      <div className="sr-only" aria-live="polite">
        A cinematic narrative sequence showing Chhota Bheem transitioning from an intense
        battlefield moment in Dholakpur to a calm, confident truck-driving scene
        through the village streets.
      </div>

      <section ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ChhotaBheemScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={240}
            imageFolderPath="/images/images"
          />
          <ChhotaBheemExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* Post-Sequence Content */}
      <section className="relative z-20 bg-base-dark py-24 px-6 md:px-12 text-white border-t border-neutral-stone/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-xl tracking-[0.2em] text-accent-ember font-bold">CASE STUDY SPECS</h3>
            <ul className="font-body text-neutral-400 space-y-2 text-lg tracking-wide">
              <li><span className="text-white">Frames:</span> 240 Rendered JPEGs</li>
              <li><span className="text-white">Render Engine:</span> Canvas API</li>
              <li><span className="text-white">Scroll Length:</span> 500vh Cinematic Dwell</li>
              <li><span className="text-white">Target Res:</span> High-DPI 4K Support</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-xl tracking-[0.2em] text-accent-ember font-bold">NARRATIVE PIPELINE</h3>
            <p className="font-body text-neutral-400 leading-relaxed text-lg tracking-wide">
              The composition moves through three distinct phases: initial conflict representation,
              the transition of emotional state via mechanical power, and the final resolution
              signified by the return to Dholakpur.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-xl tracking-[0.2em] text-accent-ember font-bold">TECHNICAL HIGHLIGHTS</h3>
            <p className="font-body text-neutral-400 leading-relaxed text-lg tracking-wide">
              Using requestAnimationFrame paired with Framer Motion&apos;s normalized scroll values,
              the playback eliminates main-thread blocking, ensuring 60fps fidelity across devices
              and adaptive object-fit scaling.
            </p>
          </div>

        </div>
      </section>

      <footer className="relative z-20 bg-[#060606] py-16 px-6 md:px-12 border-t border-neutral-stone/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h4 className="font-heading text-xl font-bold tracking-[0.2em] text-white">
              KaliIO
            </h4>
            <p className="font-body text-neutral-400 text-sm tracking-widest max-w-sm">
              Empowering businesses with cutting-edge digital solutions, app development, and design.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <p className="font-body text-neutral-500 text-sm tracking-widest uppercase">
              Ready to build something extraordinary?
            </p>
            <a
              href="https://kaliio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-accent-ember font-bold tracking-[0.2em] hover:text-white transition-colors duration-300"
            >
              VISIT KALIIO.COM
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-stone/10 text-center">
          <p className="font-heading text-xs text-neutral-600 tracking-[0.4em]">
            MADE BY <span className="text-white mix-blend-difference font-bold">KALIIO</span> © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
}
