"use client";

import { Moon, Sun } from "lucide-react";

// Which icon shows is decided in CSS from data-theme, so nothing flashes on load.
export function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked. The theme still applies for this page view.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between dark and light theme"
      className="inline-flex size-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-ink"
    >
      <Sun className="theme-icon-sun size-[18px]" strokeWidth={1.75} aria-hidden />
      <Moon className="theme-icon-moon size-[18px]" strokeWidth={1.75} aria-hidden />
    </button>
  );
}

export const themeScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}d.dataset.theme=t}catch(e){d.dataset.theme='dark'}})()`;
