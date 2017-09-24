import styler from "../styler";
import flex from "./flex-classes";
import commonStyle from "./common-classes";

export const layoutStyles = [flex, commonStyle];

export const addLayoutStyles = () => 
  styler.add("pe-layout", flex, commonStyle);
