import { styler, customConfig } from "polythene-css";
import componentConfig from "./config";
import layout from "./layout";
import color from "./color";

const customConfigFn = customConfig.button;
const config = customConfigFn ? customConfigFn(componentConfig) : componentConfig;

styler.add("pe-button-text", layout(config), color(config));
