import { _SVG } from "polythene-core-svg";
import { cast, h, a, useEffect, useState, getRef } from "cyano-react";

export const SVG = cast(_SVG, { h, a, useEffect, useState, getRef });
SVG["displayName"] = "SVG";
