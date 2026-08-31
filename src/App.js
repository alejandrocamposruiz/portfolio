import React, { useState } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import DomainsSection from "./components/sections/DomainsSection";
import HowIWorkSection from "./components/sections/HowIWorkSection";
import ContactSection from "./components/sections/ContactSection";

import { profileData } from "./data/profile";
import { caseStudiesData } from "./data/caseStudies";
import { experienceData } from "./data/experience";
import { domainsData } from "./data/domains";

export default function App() {
  const [language, setLanguage] = useState("es");

  const currentProfile = profileData[language];
  const currentCases = caseStudiesData[language];
  const currentExperience = experienceData[language];
  const currentDomains = domainsData[language];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      <Header
        language={language}
        setLanguage={setLanguage}
        navData={currentProfile.nav}
      />

      <main className="flex-1">
        <HeroSection profile={currentProfile} />
        <AboutSection aboutData={currentProfile.about} />
        <CaseStudiesSection data={currentCases} language={language} />
        <ExperienceSection data={currentExperience} language={language} />
        <DomainsSection data={currentDomains} language={language} />
        <HowIWorkSection data={currentProfile.howIWork} />
        <ContactSection
          contactLinks={currentProfile.contactLinks}
          language={language}
        />
      </main>

      <Footer
        footerData={currentProfile.footer}
        contactLinks={currentProfile.contactLinks}
      />
    </div>
  );
}
