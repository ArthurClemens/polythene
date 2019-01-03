import { renderer, keys, Search, IconButton, Button, Shadow, List, ListTile } from "polythene-mithril";
import genericTests from "./tests-generic";
import searchField from "./components/searchfield-mithril";

const SearchField = searchField({ renderer, keys, Search, IconButton, Shadow }); 

const mithrilTests = () => {

  return [];
    
};

export default []
  .concat(genericTests({ Search, IconButton, Button, Shadow, SearchField, List, ListTile, renderer, keys }))
  .concat(mithrilTests({ Search, IconButton, Button, Shadow, SearchField, List, ListTile, renderer, keys }));
