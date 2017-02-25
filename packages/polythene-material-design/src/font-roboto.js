import { loadFont } from "polythene-utilities";

loadFont({
  google: {
    families: ["Roboto:400,500,700,400italic:latin"]
  }
});

export default [{
  "html, body, button, input, select, textarea": {
    "font-family": "Roboto, Helvetica, Arial, sans-serif"
  }
}];