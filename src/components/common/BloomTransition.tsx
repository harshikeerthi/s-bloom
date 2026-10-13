import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import "./BloomTransition.css";

export const BloomTransition: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const prevPathRef = useRef(location.pathname);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioningRef = useRef(false);

  const triggerBloom = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsActive(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsActive(false);
      isTransitioningRef.current = false;
    }, 650);
  };

  // 1. Trigger when client-side route pathname changes externally (back/forward)
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      if (!isTransitioningRef.current) {
        triggerBloom();
      }
    }
  }, [location.pathname]);

  // 2. Intercept internal link clicks:
  // Shows previous page blurred as bud begins -> switches to redirected page at 240ms as flower blooms -> reveals at 650ms
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        e.shiftKey
      ) {
        return;
      }

      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      let targetPath = "";
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin === window.location.origin) {
          if (url.pathname !== window.location.pathname) {
            targetPath = url.pathname + url.search + url.hash;
          }
        }
      } catch {
        if (
          href.startsWith("/") &&
          !href.startsWith("//") &&
          href !== window.location.pathname
        ) {
          targetPath = href;
        }
      }

      if (!targetPath) return;

      // Intercept navigation
      e.preventDefault();
      e.stopPropagation();

      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      setIsActive(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);

      // At 240ms, as the flower blossoms open, redirect to the new page in the blurred background
      navTimeoutRef.current = setTimeout(() => {
        navigate(targetPath);
      }, 240);

      // At 650ms, smoothly dissolve the overlay to reveal the new page
      timeoutRef.current = setTimeout(() => {
        setIsActive(false);
        isTransitioningRef.current = false;
      }, 650);
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    };
  }, [navigate]);

  return (
    <div
      className={`bloom-transition-overlay ${isActive ? "active" : ""}`}
      aria-hidden={!isActive}
    >
      <div className="bloom-effect-container">
        {/* Soft, warm ambient aura */}
        <div className="bloom-ambient-glow" />

        {/* The blooming flower */}
        <div className="bloom-flower-stage">
          <svg
            className="bloom-flower-svg"
            viewBox="0 0 320 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center Core Pistil / Glow */}
            <circle cx="160" cy="180" r="14" className="flower-core" />
            <circle cx="160" cy="180" r="5" className="flower-core-inner" />

            {/* Lotus / Floral Petals: Unfurling from tight Bud to open Bloom */}
            {/* Center Petal */}
            <g className="petal-group petal-center">
              <path
                d="M 160 215 C 132 175 128 95 160 52 C 192 95 188 175 160 215 Z"
                className="flower-petal-path"
              />
              <path
                d="M 160 205 C 160 160 160 110 160 70"
                className="flower-petal-spine"
              />
            </g>

            {/* Inner Left Petal */}
            <g className="petal-group petal-inner-left">
              <path
                d="M 160 215 C 130 178 126 105 160 62 C 190 105 186 178 160 215 Z"
                className="flower-petal-path"
              />
              <path
                d="M 160 205 C 158 165 156 120 160 80"
                className="flower-petal-spine"
              />
            </g>

            {/* Inner Right Petal */}
            <g className="petal-group petal-inner-right">
              <path
                d="M 160 215 C 130 178 126 105 160 62 C 190 105 186 178 160 215 Z"
                className="flower-petal-path"
              />
              <path
                d="M 160 205 C 162 165 164 120 160 80"
                className="flower-petal-spine"
              />
            </g>

            {/* Mid Left Petal */}
            <g className="petal-group petal-mid-left">
              <path
                d="M 160 215 C 124 180 120 115 160 74 C 196 115 192 180 160 215 Z"
                className="flower-petal-path"
              />
            </g>

            {/* Mid Right Petal */}
            <g className="petal-group petal-mid-right">
              <path
                d="M 160 215 C 124 180 120 115 160 74 C 196 115 192 180 160 215 Z"
                className="flower-petal-path"
              />
            </g>

            {/* Outer Left Petal */}
            <g className="petal-group petal-outer-left">
              <path
                d="M 160 215 C 118 184 114 125 160 88 C 202 125 198 184 160 215 Z"
                className="flower-petal-path"
              />
            </g>

            {/* Outer Right Petal */}
            <g className="petal-group petal-outer-right">
              <path
                d="M 160 215 C 118 184 114 125 160 88 C 202 125 198 184 160 215 Z"
                className="flower-petal-path"
              />
            </g>

            {/* Bud Base Calyx holding the flower */}
            <path
              d="M 125 210 C 142 226 178 226 195 210"
              className="flower-base-calyx"
            />
            <path
              d="M 135 220 C 148 230 172 230 185 220"
              className="flower-base-calyx-lower"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BloomTransition;
