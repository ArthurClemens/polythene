
import { _BaseSpinner } from "polythene-core-base-spinner";
import { Shadow } from "polythene-mithril-shadow";
import classes from "polythene-css-classes/base-spinner";
import { cast, h, a, useState, useEffect, getRef } from "cyano-mithril";

export const BaseSpinner = cast(_BaseSpinner, { h, a, useState, useEffect, getRef, Shadow });

BaseSpinner["displayName"] = "BaseSpinner";
BaseSpinner["classes"] = classes;
