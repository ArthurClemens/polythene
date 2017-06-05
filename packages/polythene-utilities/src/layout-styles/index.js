import { styler } from "polythene-core-css";
import flex from "./flex-classes";
import commonStyle from "./common-classes";

export const layoutStyles = Object.assign({}, flex, commonStyle);

export const addLayoutStyles = () => 
  styler.add("pe-layout", flex, commonStyle);
