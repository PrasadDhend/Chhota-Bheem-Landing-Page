"use client";

import { MotionValue, useTransform, motion } from "framer-motion";

interface ChhotaBheemExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function ChhotaBheemExperience({
    scrollYProgress,
}: ChhotaBheemExperienceProps) {
    // 0%–30% (Conflict — Battlefield Presence)
    const phase1Opacity = useTransform(
        scrollYProgress,
        [0, 0.15, 0.25, 0.35],
        [0, 1, 1, 0]
    );
    const phase1Y = useTransform(scrollYProgress, [0, 0.3], [10, -10]);

    // 30%–70% (Transition — Emotional Shift)
    const phase2Opacity = useTransform(
        scrollYProgress,
        [0.3, 0.4, 0.6, 0.75],
        [0, 1, 1, 0]
    );
    const phase2Y = useTransform(scrollYProgress, [0.3, 0.7], [10, -10]);

    // 70%–100% (Resolution — Village Arrival)
    const phase3Opacity = useTransform(
        scrollYProgress,
        [0.75, 0.85, 1],
        [0, 1, 1]
    );
    const phase3Y = useTransform(scrollYProgress, [0.75, 1], [10, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-6 md:p-12 text-white overflow-hidden">

            {/* Overlay film grain */}
            <div className="film-grain" />

            {/* Edge Diagnostics (HUD aesthetic) */}
            <div className="absolute top-1/2 left-6 -translate-y-1/2 hidden md:flex flex-col gap-2 font-heading text-[10px] tracking-[0.2em] text-neutral-500 opacity-60">
                <span>SYS.MONITOR</span>
                <span>LAT: 12.9716° N</span>
                <span>LON: 77.5946° E</span>
                <span>STATUS: NOMINAL</span>
            </div>

            <div className="relative w-full h-full flex flex-col justify-end max-w-7xl mx-auto pb-4 md:pb-8">
                {/* Phase 1: Conflict */}
                <motion.div
                    style={{ opacity: phase1Opacity, y: phase1Y }}
                    className="absolute bottom-10 left-0 flex flex-col gap-2 w-full pr-4"
                >
                    <div className="flex items-center gap-4 text-accent-ember">
                        <div className="w-1 h-1 bg-current rounded-full" />
                        <p className="font-heading tracking-[0.3em] text-xs font-bold bg-current/10 px-2 py-1 rounded">
                            01 // CONFLICT
                        </p>
                    </div>
                    <h2 className="font-body text-4xl sm:text-5xl md:text-7xl uppercase leading-none font-bold text-white shadow-black drop-shadow-lg">
                        BATTLE FOR<br />DHOLAKPUR
                    </h2>
                    <p className="font-body text-neutral-300 text-lg md:text-xl tracking-widest max-w-md mt-2 drop-shadow-md">
                        COURAGE UNDER FIRE.
                    </p>
                </motion.div>

                {/* Phase 2: Transition */}
                <motion.div
                    style={{ opacity: phase2Opacity, y: phase2Y }}
                    className="absolute bottom-10 right-0 flex flex-col gap-3 text-right items-end w-full pl-4"
                >
                    <div className="flex items-center gap-4 text-neutral-400">
                        <p className="font-heading tracking-[0.3em] text-xs font-bold">
                            02 // TRANSITION
                        </p>
                        <div className="w-1 h-1 bg-current rounded-full" />
                    </div>
                    <div className="flex flex-col items-end mt-2 mix-blend-difference gap-1">
                        <h2 className="font-body text-xl sm:text-2xl md:text-4xl uppercase leading-none font-medium tracking-wide">
                            RESOLVING CONFLICT
                        </h2>
                        <h2 className="font-body text-xl sm:text-2xl md:text-4xl uppercase leading-none font-medium tracking-wide">
                            STRENGTH REDEPLOYED
                        </h2>
                        <h2 className="font-body text-xl sm:text-2xl md:text-4xl uppercase leading-none font-bold tracking-wide text-accent-ember">
                            FROM CHAOS TO CONTROL
                        </h2>
                    </div>
                </motion.div>

                {/* Phase 3: Resolution */}
                <motion.div
                    style={{ opacity: phase3Opacity, y: phase3Y }}
                    className="absolute bottom-[10%] left-0 w-full flex flex-col items-center text-center gap-6"
                >
                    <div className="flex items-center gap-4 text-white">
                        <div className="w-[1px] h-4 bg-current" />
                        <p className="font-heading tracking-[0.4em] text-xs font-bold pl-1">
                            03 // RESOLUTION
                        </p>
                        <div className="w-[1px] h-4 bg-current" />
                    </div>
                    <h2 className="font-body text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] uppercase leading-none font-bold tracking-tighter drop-shadow-2xl">
                        HEROES <span className="text-accent-ember block sm:inline">RETURN</span> HOME
                    </h2>
                </motion.div>
            </div>
        </div>
    );
}
