
import { _RadioButton } from "polythene-core-radio-button";
import { _ViewControl, _SelectionControl } from "polythene-core-selection-control";
import { cast, h, a, useState } from "cyano-react";
import { Icon } from "polythene-react-icon";
import { IconButton } from "polythene-react-icon-button";

const ViewControl = cast(_ViewControl, { h, Icon, IconButton });
ViewControl["displayName"] = "ViewControl";

export const SelectionControl = cast(_SelectionControl, { h, a, useState, ViewControl });
SelectionControl["displayName"] = "SelectionControl";

export const RadioButton = cast(_RadioButton, { h, SelectionControl });
RadioButton["displayName"] = "RadioButton";
