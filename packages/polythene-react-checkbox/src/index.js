import { _Checkbox } from "polythene-core-checkbox";
import {
  _ViewControl,
  _SelectionControl,
} from "polythene-core-selection-control";
import { cast, h, a, useState, useEffect, useRef } from "cyano-react";
import { Icon } from "polythene-react-icon";
import { IconButton } from "polythene-react-icon-button";

const ViewControl = cast(_ViewControl, { h, a, Icon, IconButton });
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

export const Checkbox = cast(_Checkbox, { h, a, SelectionControl });
Checkbox["displayName"] = "Checkbox";
