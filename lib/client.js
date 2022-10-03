import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "nextjs-jamstack-blog",
  apiKey: process.env.API_KEY,
});
