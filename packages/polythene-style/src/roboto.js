import { addWebFont } from "polythene-utilities";
import { styler } from "polythene-core-css";

const robotoStyles = [{
  "html, body, button, input, select, textarea": {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }
}];

export const addRoboto = () => (
  addWebFont("google", "Roboto:400,500,700,400italic:latin"),
  styler.add("pe-roboto", robotoStyles)
);
