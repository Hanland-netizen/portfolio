"use client";
import Image from "next/image";

export const Encryption = () => {
  return (
    <section
      id="encryption"
      className="relative min-h-[85vh] w-full overflow-hidden bg-black"
    >
      {/* === Background video === */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/encryption-bg.webm" type="video/webm" />
        {/* <source src="/videos/encryption-bg.mp4" type="video/mp4" /> */}
      </video>

      {/* === Veil (helps readability + hides banding/edges) === */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(120% 80% at 60% 40%, rgba(0,0,0,0) 35%, rgba(0,0,0,.85) 75%, rgba(0,0,0,.95) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.85) 80%, #000 100%)`,
        }}
      />

      {/* === Content (LOCK + text) -> always above video/veil === */}
      <div className="relative z-20 flex h-[85vh] flex-col items-center justify-center text-center px-4">
        {/* Lock image (put your asset at /public/lock.png or change the src) */}
        <Image
          src="/lock-main.png"
          alt="Encryption Lock"
          width={142}
          height={142}
          className="mb-5 select-none"
          priority
        />

        <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80 ring-1 ring-white/20 backdrop-blur">
          Galaxy
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
           Code across the cosmos.
        </h2>
        <p className="mt-2 text-white/70 italic">
            Merging creativity with technology to craft impactful digital experiences.

        </p>
      </div>
    </section>
  );
};
