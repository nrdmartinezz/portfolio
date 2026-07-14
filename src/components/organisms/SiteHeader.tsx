import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { Wordmark } from "../molecules/Wordmark";
import { SignalStack } from "../atoms/SignalStack";

export interface NavItem {
  label: string;
  href: string;
}

interface SiteHeaderProps {
  nav: NavItem[];
  logoSrc: string;
  contactHref: string;
}

export function SiteHeader({ nav, logoSrc, contactHref }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="site-header">
      <Wordmark logoSrc={logoSrc} />

      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-contact" href={contactHref}>
        Let's talk <ArrowUpRight size={16} aria-hidden="true" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((c) => !c)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {menuOpen && (
        <motion.nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          initial={reduceMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mobile-nav__label">
            <span>Studio index</span>
            <SignalStack horizontal />
          </div>
          {nav.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
              <ArrowDownRight aria-hidden="true" />
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
