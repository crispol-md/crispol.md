'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoShowcase from '@/components/VideoShowcase';
import DirectOrderCTA from '@/components/DirectOrderCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VideoShowcase />
        <DirectOrderCTA />
      </main>
      <Footer />
    </>
  );
}
