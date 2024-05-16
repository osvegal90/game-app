import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get("/platforms/lists/parents").then((res) => res.data),
    staleTime: 5 * 60 * 1000, // 5mins
    initialData: {
      count: platforms.length,
      results: platforms,
    },
  });

export default usePlatforms;
