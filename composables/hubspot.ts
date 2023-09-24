import { Client } from "@hubspot/api-client";

export const useHubspot = () => {
  const runtimeConfig = useRuntimeConfig();

  const hubspotClient = new Client({
    accessToken: "pat-na1-7aa2f6a4-ba7a-42ce-92d8-ec9e763edba8",
  });

  return {
    hubspotClient,
  };
};
