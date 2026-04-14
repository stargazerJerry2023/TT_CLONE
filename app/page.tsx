"use server";

import VideoFeed from "@/component/Video";
import { getVideosByQuery } from "@/lib/getVideos";

export default async function Home() {
  // TODO: Fetch initial videos from Pexels and pass them to <VideoFeed />
  // Suggested starter:
  // const data = await getVideosByQuery("space", 1, 5);
  // return <VideoFeed videoRes={data} />;

  void getVideosByQuery;
  return (
    <main className="h-screen w-screen grid place-items-center">
      <p className="text-lg">Workshop TODO: Implement app/page.tsx</p>
      <VideoFeed />
    </main>
  );
}
