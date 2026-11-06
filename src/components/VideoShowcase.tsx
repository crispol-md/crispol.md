'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videosAvailable, setVideosAvailable] = useState<boolean[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check which videos exist
  useEffect(() => {
    const checks = VIDEO_SOURCES.map(
      (src) =>
        new Promise<boolean>((resolve) => {
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.onloadedmetadata = () => resolve(true);
          video.onerror = () => resolve(false);
          video.src = src;
        })
    );
    Promise.all(checks).then(setVideosAvailable);
  }, []);

  const hasAnyVideo = videosAvailable.some(Boolean);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 400);
    },
    [activeIndex, isTransitioning]
  );

  const handleEnded = useCallback(() => {
    const next = (activeIndex + 1) % VIDEO_SOURCES.length;
    goTo(next);
  }, [activeIndex, goTo]);

  // Play video when index changes
  useEffect(() => {
    if (videoRef.current && hasAnyVideo && videosAvailable[activeIndex]) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex, hasAnyVideo, videosAvailable]);

  return (
    <section className="px-5 sm:px-8 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-[rgba(59,47,47,0.12)] shadow-xl shadow-[rgba(59,47,47,0.06)]"
        >
          {hasAnyVideo && videosAvailable[activeIndex] ? (
            <AnimatePresence mode="wait">
              <motion.video
                key={activeIndex}
                ref={videoRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: isTransitioning ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                src={VIDEO_SOURCES[activeIndex]}
                autoPlay
                muted
                playsInline
                onEnded={handleEnded}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          ) : (
            /* Fallback gradient */
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5DC] via-[#E8DFD0] to-[#D4C5B2] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[rgba(59,47,47,0.15)] flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3B2F2F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="text-sm text-[#8C7A6B]">{t.videoFallback}</p>
              </div>
            </div>
          )}

          {/* Model name overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(35,26,21,0.5)] to-transparent p-5 sm:p-6 pointer-events-none">
            <p className="text-white/90 text-sm sm:text-base font-medium tracking-wide font-display">
              {t.videoModels[activeIndex]}
            </p>
          </div>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-5">
          {VIDEO_SOURCES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Video ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? 'w-7 bg-[#3B2F2F]'
                  : 'w-2 bg-[#3B2F2F]/20 hover:bg-[#3B2F2F]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
