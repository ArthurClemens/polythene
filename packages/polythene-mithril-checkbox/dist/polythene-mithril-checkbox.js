!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-mithril-base"),require("polythene-core-checkbox"),require("polythene-core-selection-control"),require("polythene-mithril-icon"),require("polythene-mithril-icon-button")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-checkbox","polythene-core-selection-control","polythene-mithril-icon","polythene-mithril-icon-button"],o):o((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core-checkbox"],e["polythene-core-selection-control"],e["polythene-mithril-icon"],e["polythene-mithril-icon-button"])}(this,function(e,o,t,n,i,c){"use strict";const l=o.ViewComponent(Object.assign({},n.viewControl,{createContent:(e,o)=>n.viewControl.createContent(e,Object.assign(o,{Icon:i.Icon,IconButton:c.IconButton}))}));l.displayName="ViewControl";const r=o.StateComponent(Object.assign({},n.coreSelectionControl,{createContent:(e,o)=>n.coreSelectionControl.createContent(e,Object.assign(o,{ViewControl:l}))}));r.displayName="SelectionControl";const h=o.StateComponent(Object.assign({},t.coreCheckbox,{component:r}));h.displayName="Checkbox",e.Checkbox=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-checkbox.js.map
