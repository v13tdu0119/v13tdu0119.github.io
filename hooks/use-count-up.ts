"use client";

import { useEffect, useState } from "react";

function parseNumericValue(raw: string): { prefix: string; target: number; suffix: string } | null {
  const match = raw.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    target: Number.parseFloat(match[2]),
    suffix: match[3],
  };
}

export function useCountUp(value: string, active: boolean, durationMs = 1400) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = parseNumericValue(value);
    if (!active || !parsed) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(parsed.target * eased);
      setDisplay(`${parsed.prefix}${current}${parsed.suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, durationMs, value]);

  return display;
}
