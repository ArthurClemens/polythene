import { _Ripple } from "polythene-core-ripple";
import { cast, h, a, getRef, useRef, useState, useEffect } from "cyano-mithril";

export const Ripple = cast(_Ripple, { h, a, getRef, useRef, useState, useEffect });
Ripple["displayName"] = "Ripple";
