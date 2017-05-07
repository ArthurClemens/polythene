import { styler } from "polythene-core-css";
import typographyStyles from "./typography-styles";
import resetStyles from "./reset-styles";

export const addTypography = () => 
  styler.add("pe-material-design-typography", resetStyles, typographyStyles);

