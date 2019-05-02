
import { _ScrollButton, _Tab, _Tabs } from "polythene-core-tabs";

import { Button } from "polythene-react-button";
import { Icon } from "polythene-react-icon";
import { IconButton } from "polythene-react-icon-button";

import { cast, h, a, getRef, useState, useEffect } from "cyano-react";

const ScrollButton = cast(_ScrollButton, { h, a, IconButton });
const Tab = cast(_Tab, { h, a, Button, Icon });
export const Tabs = cast(_Tabs, { h, a, getRef, useState, useEffect, ScrollButton, Tab });

Tabs["displayName"] = "Tabs";
