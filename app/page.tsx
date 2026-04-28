"use server";

import VideoFrame from "@/component/Video";
import { getVideosByQuery } from "@/lib/getVideos"
import { VideoResponse } from "@/types/backend/types"

export default async function Home() {
  // TODO: Fetch initial videos from Pexels and pass them to <VideoFeed />
  // Suggested starter:
  // const data = await getVideosByQuery("space", 1, 5);
  // return <VideoFeed videoRes={data} />;
   const data =await getVideosByQuery("space", 1, 5)
   console.log("HERE IS THE DATA", {
    page: data.page,
    per_page: data.per_page,
    video: data.videos.length,
   })


 
  return (
    <div className="h-screen w-screen flex justify-center items-center">
                <div className="flex h-[90%] w-[40%] bg-black flex justify-center items-center rounded-2xl">
      <VideoFrame  videoRes={data} />
      </div>
    </div>


  );


}
