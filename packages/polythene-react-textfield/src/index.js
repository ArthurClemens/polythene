import { _TextField } from "polythene-core-textfield";
import { cast, h, a, useEffect, useState, useRef, getRef } from "cyano-react";

export const TextField = cast(_TextField, { h, a, useEffect, useState, useRef, getRef });
TextField["displayName"] = "TextField";
