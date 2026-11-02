"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { services } from "@/content/services";
import { ButtonLink } from "@/components/ui/button";
import { features, primaryCta } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ServiceIcon } from "./service-icon";
import { ThemeToggle } from "./theme-toggle";
import { Wordmark } from "./wordmark";

const links = [
  { label: "Solutions", href: "/solutions" },
  ...(features.work ? [{ label: "Work", href: "/work" }] : []),
  { label: "About", href: "/about" },
  ...(features.insights ? [{ label: "Insights", href: "/insights" }] : []),
];

const linkClass =
  "text-muted hover:text-ink inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm font-medium transition-colors";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const drawerButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMegaOpen(false);
      megaButtonRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!megaRef.current?.contains(event.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [megaOpen]);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    drawerButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const drawer = drawerRef.current;
    document.body.style.overflow = "hidden";
    drawer?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDrawer();
        return;
      }
      if (event.key !== "Tab" || !drawer) return;
      const focusable = drawer.querySelectorAll<HTMLElement>("a, button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [drawerOpen, closeDrawer]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        scrolled || megaOpen
          ? "border-line bg-[var(--nav-bg)] backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <div className="site-container flex h-[var(--nav-height)] items-center justify-between gap-4">
        <Link href="/" aria-label="i-doko.ai home" className="-m-1 rounded p-1 text-ink">
          <Wordmark className="h-[22px]" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <div
            ref={megaRef}
            className="flex h-[var(--nav-height)] items-center"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              ref={megaButtonRef}
              type="button"
              aria-expanded={megaOpen}
              aria-controls="services-menu"
              onClick={() => setMegaOpen((open) => !open)}
              className={cn(linkClass, megaOpen && "text-ink")}
            >
              Services
              <ChevronDown
                className={cn("size-4 transition-transform", megaOpen && "rotate-180")}
                strokeWidth={1.75}
                aria-hidden
              />
            </button>

            <div
              id="services-menu"
              hidden={!megaOpen}
              className="absolute inset-x-0 top-full pt-px"
            >
              <div className="border-b border-line bg-surface">
                <div className="site-container grid grid-cols-12 gap-8 py-8">
                  <div className="col-span-3">
                    <p className="eyebrow">Services</p>
                    <p className="mt-3 text-sm text-muted">
                      Four things we build, led by SaaS and AI.
                    </p>
                    <Link
                      href="/services"
                      onClick={() => setMegaOpen(false)}
                      className="mt-4 inline-block text-sm font-medium text-accent-text hover:underline"
                    >
                      All services
                    </Link>
                  </div>
                  <ul className="col-span-9 grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          onClick={() => setMegaOpen(false)}
                          className="flex gap-3 rounded-md p-3 transition-colors hover:bg-surface-2"
                        >
                          <ServiceIcon
                            slug={service.slug}
                            className="mt-0.5 size-5 shrink-0 text-accent-text"
                          />
                          <span>
                            <span className="block text-sm font-medium text-ink">
                              {service.name}
                            </span>
                            <span className="mt-0.5 block text-sm leading-snug text-muted">
                              {service.navBlurb}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <ButtonLink href={primaryCta.href} className="h-10 px-4 text-sm max-sm:hidden">
            {primaryCta.label}
          </ButtonLink>
          <button
            ref={drawerButtonRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-menu"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex size-10 items-center justify-center rounded-md text-ink hover:bg-surface-2 lg:hidden"
          >
            <Menu className="size-5" strokeWidth={1.75} aria-hidden />
          </button>
        </div>
      </div>

      {drawerOpen ? (
        <div
          ref={drawerRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-bg lg:hidden"
        >
          <div className="site-container flex h-[var(--nav-height)] items-center justify-between">
            <Link href="/" aria-label="i-doko.ai home" onClick={closeDrawer} className="text-ink">
              <Wordmark className="h-[22px]" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeDrawer}
              className="inline-flex size-10 items-center justify-center rounded-md text-ink hover:bg-surface-2"
            >
              <X className="size-5" strokeWidth={1.75} aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile" className="site-container pt-6 pb-10">
            <p className="eyebrow">Services</p>
            <ul className="mt-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    onClick={closeDrawer}
                    className="flex items-center gap-3 border-b border-line py-3.5 text-lg font-medium text-ink"
                  >
                    <ServiceIcon slug={service.slug} className="size-5 text-accent-text" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6">
              {[{ label: "All services", href: "/services" }, ...links].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeDrawer}
                    className="block py-2.5 text-lg text-muted hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink href={primaryCta.href} onClick={closeDrawer} className="mt-8 w-full">
              {primaryCta.label}
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
