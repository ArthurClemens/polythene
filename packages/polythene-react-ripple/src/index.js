import { _Ripple } from "polythene-core-ripple";
import { cast, h, a, getDom, useState, useEffect } from "cyano-react";

export const Ripple = cast(_Ripple, { h, a, getDom, useState, useEffect });
