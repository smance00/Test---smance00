"use client";

import { useEffect, useRef, useState } from "react";

const FILE_ID = "1TwQzwMjdsJ8zWUOWZq10Gv9sRknfmTPi";
const DIRECT_SRC = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;
const PREVIEW_SRC = `https://drive.google.com/file/d/${FILE_ID}/preview?autoplay=1&mute=1`;

export function ProductVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useIframe, setUseIframe] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => {
      video.muted = true;
      video.play().catch(() => setUseIframe(true));
    };
    play();
  }, []);

  return (
    <div className="hero-video-frame reveal">
      {useIframe ? (
        <iframe
          src={PREVIEW_SRC}
          title="Olevy product walkthrough"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls
          onError={() => setUseIframe(true)}
        >
          <source src={DIRECT_SRC} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
