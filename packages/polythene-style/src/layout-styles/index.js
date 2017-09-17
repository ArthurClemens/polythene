import { styler } from "polythene-core-css";
import flexClasses from "./flex-classes";
import commonClasses from "./common-classes";

export const layoutStyles = [...flexClasses, ...commonClasses];

export const addLayoutStyles = () => 
  styler.add("pe-layout", flexClasses, commonClasses);
