"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "90s");
      }
    }
  };

  const partners = [
    "Ministry of Ecology",
    "PPG",
    "GM",
    "YARA",
    "Common wealth",
    "BERAU VERITASMinistry of Ecology",
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 flex-1 overflow-hidden bg-transparent",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex items-center w-max min-w-full shrink-0 flex-nowrap gap-10 py-4 bg-transparent",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {partners.map((text, idx) => (
          <li
            key={idx}
            className="font-bold text-xl text-[#B7B7B7] bg-transparent"
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
