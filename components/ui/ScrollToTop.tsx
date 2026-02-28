"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Disable browser scroll restoration and always start at top
    if (typeof window !== "undefined") {
      // Disable automatic scroll restoration
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      
      // Scroll to top on mount/refresh
      window.scrollTo(0, 0);
      
      // Also handle page visibility changes
      const handleVisibilityChange = () => {
        if (!document.hidden) {
          window.scrollTo(0, 0);
        }
      };
      
      document.addEventListener("visibilitychange", handleVisibilityChange);
      
      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }
  }, []);

  return null;
}
