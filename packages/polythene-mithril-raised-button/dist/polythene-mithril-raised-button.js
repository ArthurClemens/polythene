!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-button"),require("polythene-core"),require("polythene-mithril-base")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-button","polythene-core","polythene-mithril-base"],t):t((e=e||self).polythene={},e["polythene-mithril-button"],e["polythene-core"],e["polythene-mithril-base"])}(this,function(e,t,n,o){"use strict";const i=o.ViewComponent({onMount:()=>{n.deprecation("RaisedButton",{newComponent:"Button",newOption:"raised: true"})},view:e=>o.renderer(t.Button,Object.assign({},{raised:!0},e.attrs),e.children)});i.displayName="RaisedButton",e.RaisedButton=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-raised-button.js.map
