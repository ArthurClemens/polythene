import { _Switch, _ViewControl } from "polythene-core-switch";
import { cast, h, a, useState, useEffect, useRef } from "cyano-mithril";
import { Shadow } from "polythene-mithril-shadow";
import { IconButton } from "polythene-mithril-icon-button";
import { _SelectionControl } from "polythene-core-selection-control";

const ViewControl = cast(_ViewControl, { h, a, Shadow, IconButton });
ViewControl["displayName"] = "ViewControl";

const SelectionControl = cast(_SelectionControl, {
  h,
  a,
  useState,
  useEffect,
  useRef,
  ViewControl,
});
SelectionControl["displayName"] = "SelectionControl";

export const Switch = cast(_Switch, { h, a, SelectionControl });
Switch["displayName"] = "Switch";
