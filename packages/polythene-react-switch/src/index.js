import { _Switch, _ViewControl } from "polythene-core-switch";
import { cast, h, a, useState, useEffect } from "cyano-react";
import { Shadow } from "polythene-react-shadow";
import { IconButton } from "polythene-react-icon-button";
import { _SelectionControl } from "polythene-core-selection-control";

const ViewControl = cast(_ViewControl, { h, a, Shadow, IconButton });
ViewControl["displayName"] = "ViewControl";

const SelectionControl = cast(_SelectionControl, { h, a, useState, useEffect, ViewControl });
SelectionControl["displayName"] = "SelectionControl";

export const Switch = cast(_Switch, { h, a, SelectionControl });
Switch["displayName"] = "Switch";
