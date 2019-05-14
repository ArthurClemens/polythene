import { _Switch, _ViewControl } from "polythene-core-switch";
import { cast, h, a, useState } from "cyano-mithril";
import { Shadow } from "polythene-mithril-shadow";
import { IconButton } from "polythene-mithril-icon-button";
import { _SelectionControl } from "polythene-core-selection-control";

const ViewControl = cast(_ViewControl, { h, Shadow, IconButton });
ViewControl["displayName"] = "ViewControl";

const SelectionControl = cast(_SelectionControl, { h, a, useState, ViewControl });
SelectionControl["displayName"] = "SelectionControl";

export const Switch = cast(_Switch, { h, SelectionControl });
Switch["displayName"] = "Switch";
