// Service
import serviceApi from "@/features/app/redux/rtk";

// Interfaces
import { type IAppParams } from "@/features/app/interfaces/rtk";
import { type IRoot } from "../interfaces";

export const homeApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    homeNews: builder.query<IRoot, IAppParams>({
      query: ({ params }) => {
        const apiKey = import.meta.env.VITE_APP_NEWS_API_KEY;
        // const apiKey = "";
        return {
          params: { apiKey, ...params },
          url: "/top-headlines",
          method: "GET",
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLazyHomeNewsQuery } = homeApi;
