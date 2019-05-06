import { _List } from "polythene-core-list";
import { ListTile } from "polythene-react-list-tile";
import { cast, h, a } from "cyano-react";

export const List = cast(_List, { h, a, ListTile });
List["displayName"] = "List";
