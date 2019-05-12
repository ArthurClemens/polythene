import { _Search } from 'polythene-core-search';
import { TextField } from 'polythene-mithril-textfield';
import { cast, h, a, useState } from 'cyano-mithril';

var Search = cast(_Search, {
  h: h,
  a: a,
  useState: useState,
  TextField: TextField
});
Search["displayName"] = "Search";

export { Search };
