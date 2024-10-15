import AboutMeSection from '@/components/sections/about-me';
import ContactSection from '@/components/sections/contact-footer';
import ExperienceSection from '@/components/sections/experiences';
import HomeSection from '@/components/sections/home';
import SkillsSection from '@/components/sections/skills';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactMe from '@/components/sections/contact-me';

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactMe/>
      <ContactSection />
    </>
  );
}