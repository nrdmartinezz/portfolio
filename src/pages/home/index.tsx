/*
 * Home page — page template.
 * All content lives in ./content.ts. All layout lives in the organism components.
 */
import { SiteHeader } from "../../components/organisms/SiteHeader";
import { HeroSection } from "../../components/organisms/HeroSection";
import { WorkSection } from "../../components/organisms/WorkSection";
import { CapabilitiesSection } from "../../components/organisms/CapabilitiesSection";
import { ExperienceSection } from "../../components/organisms/ExperienceSection";
import { ContactSection } from "../../components/organisms/ContactSection";
import { SiteFooter } from "../../components/organisms/SiteFooter";
import { assets, nav, contactHref, hero, work, capabilities, experience, contact, footer } from "./content";

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <SiteHeader nav={nav} logoSrc={assets.logoDark} contactHref={contactHref} />
      <main>
        <HeroSection {...hero} />
        <WorkSection {...work} />
        <CapabilitiesSection {...capabilities} />
        <ExperienceSection {...experience} />
        <ContactSection {...contact} />
      </main>
      <SiteFooter {...footer} />
    </div>
  );
}
