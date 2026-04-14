"use server";

import { VideoResponse } from "@/types/backend/types";

const API_KEY = process.env.API_KEY;

export const getVideosByQuery = async (
  query: string,
  page: number,
  perPage: number = 5,
): Promise<VideoResponse> => {
  // TODO: Implement API call to Pexels:
  // 1) Validate API_KEY
  // 2) fetch(`https://api.pexels.com/videos/search?...`)
  // 3) map response into VideoResponse shape

  void query;
  void page;
  void perPage;
  void API_KEY;
  throw new Error("Workshop TODO: Implement getVideosByQuery in lib/getVideos.ts");
};
