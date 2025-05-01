import React, { useRef, useState } from "react";
import Lottie from "lottie-react";

const SoundLottieToggle = ({ soundFile = "/sounds/click.mp3" }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const lottieRef = useRef();

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      lottieRef.current?.stop();
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        lottieRef.current?.play();
      }).catch(err => {
        console.error("Audio play failed:", err);
      });
    }
  };

  return (
    <div
  onClick={toggleAudio}
  className="group flex items-center gap-2 cursor-pointer"
>
<div
    className={`text-[12px] text-white capitalize  select-none transition-all duration-300 opacity-0 group-hover:opacity-100 ${
      !isPlaying ? "line-through text-zinc-100" : ""
    }`}
  >
    SOUND
  </div>

  <div style={{ width: "1.5em" }}>
    <Lottie
      lottieRef={lottieRef}
      path="https://cdn.prod.website-files.com/6453bf13e270828d8465254c/646df25163dae48be1b6503c_sound_lottie.json"
      autoplay={false}
      loop={true}
      style={{ width: "1.5em", pointerEvents: "none" }}
    />
  </div>

  <audio
    ref={audioRef}
    src={soundFile}
    preload="auto"
    onEnded={() => setIsPlaying(false)}
  />
</div>
  );
};

export default SoundLottieToggle;
