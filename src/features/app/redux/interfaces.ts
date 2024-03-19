export type TPrepareHeaders = (
  headers: Headers,
  api: {
    getState: () => any;
    extra: any;
    endpoint: string;
    type: "query" | "mutation";
    forced: boolean | undefined;
  }
) => Headers;
