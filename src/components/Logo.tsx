"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type SignatureLogoProps = {
  size?: number; // px
  withText?: boolean;
  className?: string;
};

export default function SignatureLogo({
  size = 44,
  withText = true,
  className = "",
}: SignatureLogoProps) {
  const s = size;
  const [drawKey, setDrawKey] = useState(0);

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <motion.svg
        width={s}
        height={s}
        viewBox="0 0 64 64"
        role="img"
        aria-label="MB Signature Logo"
        className="shrink-0"
        whileHover={{ rotate: -4, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setDrawKey((k) => k + 1)} // ✅ replay animation
      >
        <defs>
          {/* Badge gradient */}
          <linearGradient id="sigBadge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>

          {/* Stroke gradient */}
          <linearGradient id="sigStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.75)" />
          </linearGradient>

          {/* Soft glow */}
          <filter id="sigGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.5 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Inner clip */}
          <clipPath id="sigClip">
            <rect x="6" y="6" width="52" height="52" rx="14" />
          </clipPath>
        </defs>

        {/* Badge */}
        <rect x="6" y="6" width="52" height="52" rx="14" fill="url(#sigBadge)" />
        <rect
          x="6.75"
          y="6.75"
          width="50.5"
          height="50.5"
          rx="13.5"
          fill="transparent"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
        />

        {/* subtle animated shine */}
        <g clipPath="url(#sigClip)">
          <motion.circle
            cx="16"
            cy="10"
            r="18"
            fill="rgba(255,255,255,0.10)"
            animate={{ cx: [12, 54, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* ✅ key forces re-mount => redraw animation replays */}
        <g key={drawKey}>
          <motion.path
            d="
              M 16 44
              L 16 22
              Q 16 18 20 18
              Q 23 18 24 22
              L 28 34
              L 32 22
              Q 33 18 36 18
              Q 40 18 40 22
              L 40 44

              M 40 30
              Q 44 20 52 20
              Q 56 20 56 24
              Q 56 28 52 30
              Q 56 32 56 36
              Q 56 40 52 40
              Q 44 40 40 30
            "
            fill="none"
            stroke="url(#sigStroke)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#sigGlow)"
            initial={{ pathLength: 0, opacity: 0.9 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 1.35, ease: "easeInOut" },
              opacity: { duration: 0.35 },
            }}
          />

          <motion.circle
            cx="56"
            cy="41"
            r="1.8"
            fill="white"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.25 }}
          />
        </g>
      </motion.svg>

      {withText && (
        <div className="leading-tight">
          <div className="text-white font-semibold text-lg tracking-tight">
            Malith<span className="text-blue-500">.</span>
          </div>
          <div className="text-slate-400 text-xs">Software Engineer</div>
        </div>
      )}
    </div>
  );
}