"use server";

import VideoFeed from "@/component/Video";
import GetVideos from "@/lib/getVideos"
export default async function Home() {
  // TODO: Fetch initial videos from Pexels and pass them to <VideoFeed />
  // Suggested starter:
  // const data = await getVideosByQuery("space", 1, 5);
  // return <VideoFeed videoRes={data} />;
   const data =await  GetVideos("","",0,0)
  console.log(data[0].url)
 
  return (
    <div className="h-screen w-screen flex justify-center items-center">
                <div className="flex h-[90%] w-[40%] bg-black flex justify-center items-center rounded-2xl">
      <VideoFeed url={data[0].url} />
      </div>
    </div>


  );


}
