import { styler } from "polythene-core-css";
import typography from "./typography";
import reset from "./reset";
import roboto from "./font-roboto";

styler.add("pe-theme", reset, typography, roboto);

