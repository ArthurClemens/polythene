
import { _BaseSpinner } from "polythene-core-base-spinner";
import { Shadow } from "polythene-react-shadow";
import classes from "polythene-css-classes/base-spinner";
import { cast, h, a, useReducer, useRef, useState, useEffect, getRef } from "cyano-react";

export const BaseSpinner = cast(_BaseSpinner, { h, a, useReducer, useRef, useState, useEffect, getRef, Shadow });

BaseSpinner["displayName"] = "BaseSpinner";
BaseSpinner["classes"] = classes;
