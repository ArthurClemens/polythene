import { isServer, emit } from "polythene-core";

export const addWebFont = (vendor, config) => {
  if (isServer) return;
  if (!window["WebFontConfig"]) {
    /**
     * @param {object} params
     * @param {string} [params.name]
     * @param {string} [params.familyName]
     * @param {any} [params.fvd]
     */
    const emitEvent = ({ name, familyName, fvd }) => 
      emit("webfontloader", { name, familyName, fvd, vendor, config });
    window["WebFontConfig"] = {
      loading:      ()                => emitEvent({ name: "loading" }),
      active:       ()                => emitEvent({ name: "active" }),
      inactive:     ()                => emitEvent({ name: "inactive" }),
      fontloading:  (familyName, fvd) => emitEvent({ name: "fontloading", familyName, fvd }),
      fontactive:   (familyName, fvd) => emitEvent({ name: "fontactive", familyName, fvd }),
      fontinactive: (familyName, fvd) => emitEvent({ name: "fontinactive", familyName, fvd }),
    };
    (function() {
      const wf = document.createElement("script");
      wf.src = (document.location.protocol === "https:" ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
      wf.type = "text/javascript";
      wf.async = true;
      const s = document.getElementsByTagName("script")[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(wf, s);
      }
    })();
  }
  const vendorCfg = window["WebFontConfig"][vendor] || {};
  if (config) {
    Object.assign(vendorCfg, config);
  }
  window["WebFontConfig"][vendor] = vendorCfg;
};
