
import { _DialogPane } from "polythene-core-dialog-pane";
import { cast, h, a, useState, useEffect, useRef, getRef } from "cyano-mithril";

export const DialogPane = cast(_DialogPane, { h, a, useState, useEffect, useRef, getRef });
DialogPane["displayName"] = "DialogPane";
