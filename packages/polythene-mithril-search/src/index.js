import { _Search } from "polythene-core-search";
import { TextField } from "polythene-mithril-textfield";
import { cast, h, a, useState } from "cyano-mithril";

export const Search = cast(_Search, { h, a, useState, TextField });
Search["displayName"] = "Search";
