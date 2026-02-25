"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-6 md:px-12 py-6 flex justify-between items-center ${scrolled ? "bg-base-dark/80 backdrop-blur-md py-4 shadow-lg shadow-black/20 border-b border-neutral-stone/50" : "bg-transparent"
                }`}
        >
            <div className="font-heading text-lg md:text-xl tracking-[0.1em] md:tracking-[0.2em] font-bold text-white uppercase drop-shadow-md">
                <span className="text-accent-ember block sm:inline">DHOLAKPUR</span> CHRONICLES
            </div>

            <div className="hidden md:flex gap-10 font-body tracking-[0.15em] text-sm font-semibold">
                <button className="text-neutral-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all uppercase">
                    PORTFOLIO
                </button>
                <button className="text-neutral-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all uppercase">
                    CONTACT
                </button>
            </div>
        </nav>
    );
}
