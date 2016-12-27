import { styler } from "polythene-css";
import { componentsConfig } from "polythene-config";
import componentConfig from "./config";
import layout from "./layout";
// Does not contain any color styles

styler.styleComponent("pe-shadow", "shadow", componentsConfig, componentConfig, layout);
