import React, { useRef, useState } from "react";
import { GiSoundWaves } from "react-icons/gi";

const SoundToggle = ({
  soundFile = "/sounds/click.mp3",
  text = ""
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("Playback failed:", err));
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleSound}>
      <span className="text-lg font-medium">{text}</span>
      <GiSoundWaves
        className={`text-6xl transition-transform duration-200 ${
          isPlaying ? "text-pink-200 animate-bounce" : "text-white"
        }`}
      />
      <audio
        ref={audioRef}
        src={soundFile}
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onError={() => console.error("Audio load error:", soundFile)}
      />
    </div>
  );
};

export default SoundToggle;



