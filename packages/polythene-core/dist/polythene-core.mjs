var isClient = typeof window !== "undefined";
var isServer = !isClient;

export { isClient, isServer };
