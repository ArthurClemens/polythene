import { styler } from "polythene-css";
import { componentsConfig } from "polythene-theme";
import componentConfig from "./config";
import layout from "./layout";

styler.styleComponent("pe-ripple", "ripple", componentsConfig, componentConfig, layout);
