"use client";

import { useRef, useState } from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  circleSize?: string;
}

export default function GlowButton({
  children,
  className = "",
  circleSize = "w-10 h-10",
}: GlowButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    const rect = btnRef.current?.getBoundingClientRect();

    if (!rect || !circleRef.current) return;

    circleRef.current.style.transform = `
      translate(
        ${e.clientX - rect.left}px,
        ${e.clientY - rect.top}px
      )
      translate(-50%, -50%)
    `;
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMove}
      className={`
        relative overflow-hidden
        ${className}
      `}
    >
      {show && (
        <div
          ref={circleRef}
          className={`
            pointer-events-none
            absolute
            left-0
            top-0
            rounded-full
            bg-blue-200
            blur-xl
            opacity-50
            ${circleSize}
          `}
        />
      )}

      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}