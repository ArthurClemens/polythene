
import { _Checkbox } from "polythene-core-checkbox";
import { _ViewControl, _SelectionControl } from "polythene-core-selection-control";
import { cast, h, a, useState } from "cyano-react";
import { Icon } from "polythene-react-icon";
import { IconButton } from "polythene-react-icon-button";

const ViewControl = cast(_ViewControl, { h, Icon, IconButton });
ViewControl["displayName"] = "ViewControl";

const SelectionControl = cast(_SelectionControl, { h, a, useState, ViewControl });
SelectionControl["displayName"] = "SelectionControl";

export const Checkbox = cast(_Checkbox, { h, SelectionControl });
Checkbox["displayName"] = "Checkbox";
