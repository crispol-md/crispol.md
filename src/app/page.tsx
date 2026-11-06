'use client';

import HeroSection from '@/components/HeroSection';
import VideoShowcase from '@/components/VideoShowcase';
import BentoFeatures from '@/components/BentoFeatures';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <VideoShowcase />
        <BentoFeatures />
      </main>
      <ContactFooter />
    </>
  );
}
