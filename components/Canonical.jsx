"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Canonical() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    try {
      const canonicalURL = `https://www.bharathpainters.com${pathname}`;

      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalURL);

      // add a simple alternate/hreflang for English to help search engines
      let alt = document.querySelector("link[rel='alternate'][hreflang='en']");
      if (!alt) {
        alt = document.createElement("link");
        alt.setAttribute("rel", "alternate");
        alt.setAttribute("hreflang", "en");
        document.head.appendChild(alt);
      }
      alt.setAttribute("href", canonicalURL);
    } catch (e) {
      // defensive: document might not be available in some environments
      // fail silently
    }
  }, [pathname]);

  return null;
}
