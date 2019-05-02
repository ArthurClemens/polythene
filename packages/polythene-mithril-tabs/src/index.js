
import { _ScrollButton, _Tab, _Tabs } from "polythene-core-tabs";

import { Button } from "polythene-mithril-button";
import { Icon } from "polythene-mithril-icon";
import { IconButton } from "polythene-mithril-icon-button";

import { cast, h, a, getRef, useState, useEffect } from "cyano-mithril";

const ScrollButton = cast(_ScrollButton, { h, a, IconButton });
const Tab = cast(_Tab, { h, a, Button, Icon });
export const Tabs = cast(_Tabs, { h, a, getRef, useState, useEffect, ScrollButton, Tab });

Tabs["displayName"] = "Tabs";
