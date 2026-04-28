"use client";
import { VideoResponse, VideoRes } from "@/types/backend/types";
import { useCallback, useEffect, useRef, useState } from "react";
export interface VideoProps {
  videoURL: string;
  isMuted: boolean;
  toggleMute: () => void;
  isActive: boolean;
}

export default function VideoFeed({videoRes}: {videoRes: VideoResponse}) {
    const videoRef= useRef<HTMLVideoElement>(null)
    const [videos, setVideos] = useState<VideoRes[]>(videoRes.videos);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [page, setPage] = useState(2);
    const [isActive, setIsActive] = useState(false);
  const [isPaused, setPaused]= useState<{
    type: boolean,
    id: number
  } | null>(null);


  const togglePlay = (e: React.MouseEvent<HTMLDivElement>)=> {
    e.stopPropagation()
    if(!videoRef.current) return;
    if(videoRef.current.paused){
      setPaused({type: false, id: Date.now()})
      videoRef.current.play().catch((err) => {
        console.error("Play failed:", err);
      });
    }else{
      setPaused({type: true, id: Date.now()})
      videoRef.current.pause();
    }
    setTimeout(() => setPaused(null), 600);
  }

  const VideoFrame = ({videoProps}: {videoProps: VideoProps}) => {
    const {videoURL, isMuted, toggleMute, isActive} = videoProps;
  

  useEffect(() => {
    if(!videoRef.current) return;
    if(isActive){
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.error("Autoplay prevented by browser:", err);
      });
    }else{
      videoRef.current.pause();
    }
  }, [isActive, videoURL]);




  return (
    <>
      <div className= "h-full w-full overflow-hidden relative flex justify-center items-center">
        <video
        ref={videoRef}
        src={videoURL}
        loop 
        muted={isMuted}
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0 rounded-2xl"
        />
      <div className="absolute inset-0 z-10 w-full h-full flex justify-center items-center" onClick={
        togglePlay
      }>
        {isPaused && (
          <img
            key={isPaused.id}
            src={isPaused.type ? "/pause.png" : "/play.png"}
            className="w-[60px] h-[60px] animate-float-up pointer-events-none"
            alt={isPaused.type ? "Pause" : "Play"}
          />
        )}
           
      </div>
      
    </div>
        </>
  );

  
}
};




