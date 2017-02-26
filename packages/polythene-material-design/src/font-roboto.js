import Webfont from "webfontloader";

Webfont.load({
  google: {
    families: ["Roboto:400,500,700,400italic:latin"]
  }
});

export default [{
  "html, body, button, input, select, textarea": {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }
}];