import { _Button } from "polythene-core-button";
import { Ripple } from "polythene-mithril-ripple";
import { Icon } from "polythene-mithril-icon";
import { Shadow } from "polythene-mithril-shadow";
import { cast, h, a, useState, useEffect, useRef, getDom } from "cyano-mithril";

export const Button = cast(_Button, { h, a, getDom, useState, useEffect, useRef, Ripple, Shadow, Icon });
