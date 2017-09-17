import { addWebFont } from "polythene-utilities";
import { styler } from "polythene-core-css";
import styles from "./typography-styles";
import resetStyles from "./reset-styles";

const fontParam = "Roboto:400,500,700";

const baseRobotoStyle = [{
  "html, body, button, input, select, textarea": {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }
}];

export const robotoStyles = [{
  "@import": `url("https://fonts.googleapis.com/css?family=${fontParam}")`
}].concat(baseRobotoStyle);

export const addTypography = () => {
  addWebFont("google", "Roboto:400,500,700,400italic:latin");
  styler.add("pe-material-design-typography", resetStyles, baseRobotoStyle, typographyStyles);
};

export const typographyStyles = [...robotoStyles, ...styles, ...resetStyles];
