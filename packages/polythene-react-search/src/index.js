import { _Search } from "polythene-core-search";
import { TextField } from "polythene-react-textfield";
import { cast, h, a, useState } from "cyano-react";

export const Search = cast(_Search, { h, a, useState, TextField });
Search["displayName"] = "Search";
