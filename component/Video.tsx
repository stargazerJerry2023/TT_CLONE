"use client";

import { VideoResponse } from "@/types/backend/types";

type VideoFeedProps = {
  videoRes?: VideoResponse;
};

export default function VideoFeed({ videoRes }: VideoFeedProps) {
  // TODO: Implement the feed behavior:
  // - Keep a videos state
  // - Track current index
  // - Play active video / pause inactive videos
  // - Add mute/unmute control
  // - Add infinite scroll pagination

  return (
    <section className="h-screen w-full bg-black text-white grid place-items-center">
      <div className="text-center space-y-2 px-6">
        <p className="text-xl font-semibold">Workshop TODO: Implement Video Feed</p>
        <p className="text-sm opacity-80">
          {videoRes
            ? `Starter data loaded (${videoRes.videos.length} videos)`
            : "No starter data yet"}
        </p>
      </div>
    </section>
  );
}
