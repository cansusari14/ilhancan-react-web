import React, { useState, useEffect, useRef } from "react";



function convert(value) {
  return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00')
}



const AudioPlayer = ({ src }) => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();
  const intervalRef = useRef();
  const isReady = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio(src);
  }, []);

  const start = () => {
    setIsPlaying(true);
  };
  const stop = () => {
    setIsPlaying(false);
  };


  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer()
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);


  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);


  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setIsPlaying(false);
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  ;


  return (
    <div className="audio-player">
      <div className="track-info">
      {  convert(Math.round(trackProgress))}/{convert(Math.round(audioRef.current?.duration))}
        <button onClick={start}>START</button>
        <button onClick={stop}>STOP</button>
      </div>
    </div>
  );
};

export default AudioPlayer;
