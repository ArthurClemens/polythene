import { _Button } from "polythene-core-button";
import { Ripple } from "polythene-react-ripple";
import { Icon } from "polythene-react-icon";
import { Shadow } from "polythene-react-shadow";
import { cast, h, a, useState, useEffect, useRef, getRef } from "cyano-react";

export const Button = cast(_Button, { h, a, getRef, useState, useEffect, useRef, Ripple, Shadow, Icon });

Button["displayName"] = "Button";
