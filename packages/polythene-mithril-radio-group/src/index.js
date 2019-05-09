import { _RadioGroup } from "polythene-core-radio-group";
import { RadioButton } from "polythene-mithril-radio-button";
import { cast, h, a, useState, useEffect } from "cyano-mithril";

export const RadioGroup = cast(_RadioGroup, { h, a, useState, useEffect, RadioButton });
RadioGroup["displayName"] = "RadioGroup";
