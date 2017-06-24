import { renderer, keys, Search, IconButton, Button, Shadow } from "polythene-mithril";
import genericTests from "./tests-generic";
import searchField from "./components/searchfield";

const SearchField = searchField({ renderer, keys, Search, IconButton, Button, Shadow }); 

const mithrilTests = () => {

  return [];
    
};

export default []
  .concat(genericTests({ Search, IconButton, Button, Shadow, SearchField, renderer, keys }))
  .concat(mithrilTests({ Search, IconButton, Button, Shadow, SearchField, renderer, keys }));
