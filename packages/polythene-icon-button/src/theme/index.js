import { styler } from "polythene-css";
import { componentsConfig } from "polythene-theme";
import componentConfig from "./config";
import layout from "./layout";
import color from "./color";

styler.styleComponent("pe-icon-button", "icon-button", componentsConfig, componentConfig, layout, color);
