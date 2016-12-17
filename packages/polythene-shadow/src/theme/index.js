import { styler, customConfig } from "polythene-css";
import componentConfig from "./config";
import layout from "./layout";
// Does not contain any color styles

const customConfigFn = customConfig.shadow;
const config = customConfigFn ? customConfigFn(componentConfig) : componentConfig;
styler.add("pe-shadow", layout(config));
