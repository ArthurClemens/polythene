const isoUtil = {
    isClient: () => {
        return typeof window !== "undefined";
    },
    isServer: () => {
        return !isoUtil.isClient();
    }
};

export default isoUtil;