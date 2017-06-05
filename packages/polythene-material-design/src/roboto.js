import Webfont from "webfontloader";
import { styler } from "polythene-core-css";

const robotoStyles = [{
  "html, body, button, input, select, textarea": {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }
}];

export default (() => (
  Webfont.load({
    google: {
      families: ["Roboto:400,500,700,400italic:latin"]
    }
  }),
  styler.add("pe-roboto", robotoStyles)
))();
