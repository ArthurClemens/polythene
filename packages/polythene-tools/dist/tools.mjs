if (!window.WebFontConfig) {
  window.WebFontConfig = {};
  (function () {
    var wf = document.createElement("script");
    wf.src = (document.location.protocol === "https:" ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    var s = document.getElementsByTagName("script")[0];
    if (s) {
      s.parentNode.insertBefore(wf, s);
    }
  })();
}

var webfontLoader = {
  add: function add(vendor, family, key) {
    var vendorCfg = window.WebFontConfig[vendor] || {};
    vendorCfg.families = vendorCfg.families || [];
    vendorCfg.families.push(family);
    if (key) {
      vendorCfg.key = key;
    }
    window.WebFontConfig[vendor] = vendorCfg;
  }
};

export { webfontLoader };
