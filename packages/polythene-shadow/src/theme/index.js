import { styler } from "polythene-css";
import { styles } from "polythene-theme";
import vars from "./vars";
import layout from "./layout";
// Does not contain any color styles

styler.styleComponent("pe-shadow", "shadow", styles, vars, layout);
