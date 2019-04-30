import { _Icon } from "polythene-core-icon";
import { SVG } from "polythene-react-svg";
import { cast, h, a } from "cyano-react";

export const Icon = cast(_Icon, { h, a, SVG });

Icon["displayName"] = "Icon";

