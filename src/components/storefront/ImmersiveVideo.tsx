"use client";

import { useState } from "react";

const youtubeVideoId = "zt2sF1unTDs";

export function ImmersiveVideo() {
  const [paused, setPaused] = useState(false);
  const videoParams = new URLSearchParams({
    autoplay: paused ? "0" : "1",
    controls: "0",
    disablekb: "1",
    loop: "1",
    mute: "1",
    playsinline: "1",
    playlist: youtubeVideoId,
    rel: "0",
  });

  return (
    <section className="relative my-8 flex min-h-[350px] items-center overflow-hidden text-white md:h-[45vh]">
      <iframe
        key={paused ? "paused-video" : "playing-video"}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-screen min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 scale-[1.06] border-0 brightness-[0.88] contrast-[0.96] saturate-[0.92]"
        src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?${videoParams.toString()}`}
        title="Blits Pets video"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        aria-hidden="true"
      />
      {paused ? (
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center brightness-[0.88] contrast-[0.96] saturate-[0.92]" />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,50,28,0.74)_0%,rgba(0,50,28,0.3)_48%,rgba(0,50,28,0.58)_100%)]" />
      <div className="container-page relative z-10 flex justify-end">
        <button
          type="button"
          className="grid h-16 w-16 place-items-center rounded-full border border-white/55 bg-white/5 backdrop-blur-sm transition hover:scale-105"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Play pet shop video" : "Pause pet shop video"}
          aria-pressed={!paused}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            {paused ? (
              <path d="M8 5v14l11-7z" />
            ) : (
              <path d="M8 5h3v14H8zm5 0h3v14h-3z" />
            )}
          </svg>
        </button>
      </div>
    </section>
  );
}
