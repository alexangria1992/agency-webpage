import Image from "next/image";

/**
 * STEP 01 — Reverse-engineering the original hero.
 * Grounded in Margelo.html (Wayback capture: 2024-01-10).
 *
 * Original outer classes: min-h-screen flex flex-col items-center justify-center
 * bg-[a2a2a4] sticky top-0 -z-10
 *
 * Mobile-first adjustments:
 * - min-h-[100svh] handles mobile browser chrome better
 * - z-0 (with AboutUs z-10) makes the sticky stacking predictable
 * - use <video> with MP4 first; add the other formats later if recovered
 * - original scroll-translation animation is intentionally NOT implemented yet
 */
export default function Masthead() {
  return (
    <section
      aria-label="Margelo introduction"
      className="sticky top-0 z-0 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#a2a2a4]"
    >
      {/* The source website fills the hero with its animated background video. */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/assets/masthead-bg.mp4" type="video/mp4" />
      </video>

      {/* Logo — original /assets/logo.svg recovered from your saved folder. */}
      <div className="relative z-10 flex-grow-0 pt-10">
        <Image src="/assets/logo.svg" width={43} height={43} alt="Margelo logo" priority />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center p-12 text-center font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
        <h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
        <h2 className="mb-2 text-2xl tracking-tight xl:text-3xl">
          <span className="whitespace-nowrap">App Development,</span>{" "}
          <span className="whitespace-nowrap">done right.</span>
        </h2>
      </div>

      <div className="relative z-10 flex-grow-0 pb-20 md:pb-10">
        <Image src="/assets/arrow-down.png" width={63} height={35} alt="Scroll down" />
      </div>
    </section>
  );
}
