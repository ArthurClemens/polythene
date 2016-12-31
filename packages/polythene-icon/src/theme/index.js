import { styler } from "polythene-css";
import { styles } from "polythene-theme";
import vars from "./vars";
import layout from "./layout";
// Does not contain color styles

styler.styleComponent("pe-icon", "icon", styles, vars, layout);
