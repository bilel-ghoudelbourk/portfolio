"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ZoomableImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

export function ZoomableImage({ src, alt, className, width = 800, height = 600 }: ZoomableImageProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const modalContent = isOpen ? (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            style={{ isolation: "isolate" }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt={alt}
                className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
            <button
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                }}
                aria-label="Fermer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
            </button>
        </div>
    ) : null;

    return (
        <>
            <div
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setIsOpen(true);
                }}
                aria-label={`Agrandir l'image : ${alt}`}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={className}
                />
            </div>

            {mounted && isOpen && createPortal(modalContent, document.body)}
        </>
    );
}
