
import { _RadioButton } from "polythene-core-radio-button";
import { _ViewControl, _SelectionControl } from "polythene-core-selection-control";
import { cast, h, a, useState, useEffect } from "cyano-mithril";
import { Icon } from "polythene-mithril-icon";
import { IconButton } from "polythene-mithril-icon-button";

const ViewControl = cast(_ViewControl, { h, a, Icon, IconButton });
ViewControl["displayName"] = "ViewControl";

const SelectionControl = cast(_SelectionControl, { h, a, useState, useEffect, ViewControl });
SelectionControl["displayName"] = "SelectionControl";

export const RadioButton = cast(_RadioButton, { h, a, SelectionControl });
RadioButton["displayName"] = "RadioButton";
