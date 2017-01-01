import { styler } from "polythene-css";
import { styles } from "polythene-theme";
import vars from "./vars";
import layout from "./layout";
import color from "./color";

styler.styleComponent("pe-list-tile", "list-tile", styles, vars, layout, color);
