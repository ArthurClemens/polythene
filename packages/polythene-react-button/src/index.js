import { _Button } from "polythene-core-button";
import { Ripple } from "polythene-react-ripple";
import { Icon } from "polythene-react-icon";
import { Shadow } from "polythene-react-shadow";
import { cast, h, a, useState, useEffect, useRef, getDom } from "cyano-react";

export const Button = cast(_Button, { h, a, getDom, useState, useEffect, useRef, Ripple, Shadow, Icon });
