"use client";

import { useId } from "react";

export default function ChartGradient({ gradientId = "" }) {
  const id = useId().replace(/:/g, "");

  return (
    <linearGradient id={gradientId || id} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#55F89F" stopOpacity={0.08} />
      <stop offset="100%" stopColor="#55F89F" stopOpacity={0} />
    </linearGradient>
  );
}
