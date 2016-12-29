import { styler } from "polythene-css";
import { componentsConfig } from "polythene-config";
import componentConfig from "./config";
import layout from "./layout";
import color from "./color";

styler.styleComponent("pe-fab", "fab", componentsConfig, componentConfig, layout, color);
