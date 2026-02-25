"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface ChhotaBheemScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames: number;
    imageFolderPath: string;
}

export default function ChhotaBheemScrollCanvas({
    scrollYProgress,
    totalFrames,
    imageFolderPath,
}: ChhotaBheemScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    // Preload frames
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `${imageFolderPath}/${i}.jpg`;
            img.onload = () => {
                loadedCount++;
                setImagesLoaded(loadedCount);
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [totalFrames, imageFolderPath]);

    // Request Animation Frame reference
    const renderRequestId = useRef<number | null>(null);

    const drawFrame = (frameIndex: number) => {
        if (!canvasRef.current || images.length === 0) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        const img = images[frameIndex];
        if (!img) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        const displayWidth = Math.round(rect.width * dpr);
        const displayHeight = Math.round(rect.height * dpr);

        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            canvas.width = displayWidth;
            canvas.height = displayHeight;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        const imgRatio = img.width / img.height;
        const canvasRatio = displayWidth / displayHeight;

        let drawWidth = displayWidth;
        let drawHeight = displayHeight;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
            drawHeight = displayHeight;
            drawWidth = Math.round(img.width * (displayHeight / img.height));
            offsetX = Math.round((displayWidth - drawWidth) / 2);
        } else {
            drawWidth = displayWidth;
            drawHeight = Math.round(img.height * (displayWidth / img.width));
            offsetY = Math.round((displayHeight - drawHeight) / 2);
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Initial draw
    useEffect(() => {
        if (imagesLoaded > 0 && renderRequestId.current === null) {
            drawFrame(0);
        }
    }, [imagesLoaded]);

    // Render on scroll change
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const frameIndex = Math.min(
            totalFrames - 1,
            Math.max(0, Math.floor(latest * totalFrames))
        );
        if (renderRequestId.current) {
            cancelAnimationFrame(renderRequestId.current);
        }
        renderRequestId.current = requestAnimationFrame(() => {
            drawFrame(frameIndex);
            renderRequestId.current = null;
        });
    });

    return (
        <div className="absolute inset-0 w-full h-full bg-base-dark">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                aria-hidden="true"
            />

            {/* Fallback loader */}
            {imagesLoaded < Math.min(10, totalFrames) && (
                <div className="absolute inset-0 flex items-center justify-center bg-base-dark z-50">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-1 bg-neutral-stone overflow-hidden rounded-full">
                            <div
                                className="h-full bg-accent-ember transition-all duration-300 ease-out"
                                style={{ width: `${Math.round((imagesLoaded / Math.min(10, totalFrames)) * 100)}%` }}
                            />
                        </div>
                        <p className="font-heading tracking-[0.3em] text-[10px] text-neutral-400">
                            INITIALIZING SEQUENCE
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
