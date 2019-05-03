import { _Slider } from "polythene-core-slider";
import { cast, h, a, useState, useEffect, useRef, getRef } from "cyano-react";

export const Slider = cast(_Slider, { h, a, useState, useEffect, useRef, getRef });
Slider["displayName"] = "Slider";
