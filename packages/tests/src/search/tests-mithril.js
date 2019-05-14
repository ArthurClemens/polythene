import { Search, IconButton, Button, Shadow, List, ListTile } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";
import searchField from "./components/searchfield-mithril";

const SearchField = searchField({ h, a, Search, IconButton, Shadow }); 

const mithrilTests = () => {

  return [];
    
};

export default []
  .concat(genericTests({ Search, IconButton, Button, Shadow, SearchField, List, ListTile, h, a }))
  .concat(mithrilTests({ Search, IconButton, Button, Shadow, SearchField, List, ListTile, h, a }));
