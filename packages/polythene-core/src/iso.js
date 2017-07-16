export const isClient = typeof document !== "undefined";
export const isServer = !isClient;
