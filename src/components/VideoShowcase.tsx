'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/I18nProvider';

const VIDEO_SOURCES = [
  '/videos/1.mp4',
  '/videos/2.mp4',
  '/videos/3.mp4',
  '/videos/4.mp4',
  '/videos/5.mp4',
  '/videos/6.mp4',
  '/videos/7.mp4',
];

export default function VideoShowcase() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setIsLoaded(false);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % VIDEO_SOURCES.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + VIDEO_SOURCES.length) % VIDEO_SOURCES.length);
  }, [activeIndex, goTo]);

  // Play video when index changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    video.src = VIDEO_SOURCES[activeIndex];
    video.load();
    
    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {});
    };
    
    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, [activeIndex]);

  const handleEnded = useCallback(() => {
    goNext();
  }, [goNext]);

  return (
    <section id="showroom" className="bg-[#F4EFE6] px-3 md:px-5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#161311] tracking-tight mb-2">
            {t.showroomTitle}
          </h2>
          <p className="text-sm md:text-base text-[#161311]/50">
            {t.showroomSubtitle}
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          
          {/* LEFT — Video Stage */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <div
              ref={containerRef}
              className="aspect-video w-full relative overflow-hidden rounded-2xl bg-[#161311] shadow-2xl"
            >
              {/* Single video element — never unmounted */}
              <video
                ref={videoRef}
                muted
                playsInline
                autoPlay
                onEnded={handleEnded}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Glass overlay badge */}
              <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 z-10">
                <div className="backdrop-blur-xl bg-[#161311]/65 border border-white/15 rounded-xl p-3 md:p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xl md:text-2xl font-mono font-semibold text-[#C59B6D] flex-shrink-0">
                      {String(activeIndex + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm md:text-base font-semibold text-[#FAF6F0] truncate">
                        {t.videoModels[activeIndex]}
                      </p>
                      <p className="text-[11px] md:text-xs text-white/50 truncate">
                        {t.videoStyles[activeIndex]}
                      </p>
                    </div>
                  </div>
                  
                  {/* Prev / Next */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={goPrev}
                      className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors cursor-pointer"
                      aria-label={t.prevModel}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      onClick={goNext}
                      className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors cursor-pointer"
                      aria-label={t.nextModel}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Model Selector */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#1F1A17] rounded-2xl p-3 md:p-4 text-[#FAF6F0] h-full flex flex-col">
              {/* Model list */}
              <div className="flex-1 space-y-1">
                {VIDEO_SOURCES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-full text-left rounded-xl px-3 py-2.5 cursor-pointer transition-all duration-200 flex items-center gap-3 ${
                      i === activeIndex
                        ? 'bg-white/10 border border-white/15'
                        : 'border border-transparent hover:bg-white/5'
                    }`}
                  >
                    <span className={`text-sm font-mono font-semibold flex-shrink-0 ${
                      i === activeIndex ? 'text-[#C59B6D]' : 'text-white/30'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className={`text-sm font-semibold truncate ${
                        i === activeIndex ? 'text-[#FAF6F0]' : 'text-white/70'
                      }`}>
                        {t.videoModels[i]}
                      </p>
                      <p className="text-[10px] md:text-[11px] text-white/40 truncate">
                        {t.videoStyles[i]}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://t.me/cernavation"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full flex items-center justify-center gap-2 backdrop-blur-sm bg-white/10 border border-white/15 hover:bg-white/15 text-[#FAF6F0] font-medium text-sm py-3 rounded-xl transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4z" />
                </svg>
                {t.showroomCta}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
