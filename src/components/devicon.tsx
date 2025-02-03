'use client'

import { useEffect } from "react";

export default function DeviconLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/devicon/2.15.1/devicon.min.css";
    document.head.appendChild(link);
  }, []);

  return null;
}
