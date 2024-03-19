import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type TPrepareHeaders } from "./interfaces";

// Define a service using a base URL and expected endpoints
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const prepareHeaders: TPrepareHeaders = (headers) => {
  return headers;
};

export const serviceApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders,
  }),
  endpoints: () => ({}),
});

export default serviceApi;
