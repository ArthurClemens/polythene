import { styler } from "polythene-css";
import { componentsConfig } from "polythene-config";
import componentConfig from "./config";
import layout from "./layout";
// Does not contain color styles

styler.styleComponent("pe-icon", "icon", componentsConfig, componentConfig, layout);
