import { isClient, isServer } from "polythene-core";

if (isClient && !window.WebFontConfig) {
  window.WebFontConfig = {};
  (function() {
    let wf = document.createElement("script");
    wf.src = (document.location.protocol === "https:" ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s);
  })();
}

export const addWebFont = (vendor, family, key) => {
  if (isServer) {
    return;
  }
  const vendorCfg = window.WebFontConfig[vendor] || {};
  vendorCfg.families = vendorCfg.families || [];
  vendorCfg.families.push(family);
  if (key) {
    vendorCfg.key = key;
  }
  window.WebFontConfig[vendor] = vendorCfg;
};
