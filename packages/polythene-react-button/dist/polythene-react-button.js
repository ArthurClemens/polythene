!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core-button"),require("polythene-react-ripple"),require("polythene-react-icon"),require("polythene-react-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core-button","polythene-react-ripple","polythene-react-icon","polythene-react-shadow"],t):t((e=e||self).polythene={},e["polythene-react-base"],e["polythene-core-button"],e["polythene-react-ripple"],e["polythene-react-icon"],e["polythene-react-shadow"])}(this,function(e,t,o,n,r,a){"use strict";const c=t.StateComponent(Object.assign({},o.coreButton,{createProps:(e,t)=>o.coreButton.createProps(e,Object.assign(t,{Ripple:n.Ripple,Icon:r.Icon,Shadow:a.Shadow})),createContent:(e,t)=>o.coreButton.createContent(e,Object.assign(t,{Ripple:n.Ripple,Icon:r.Icon,Shadow:a.Shadow}))}));c.displayName="TextButton";const p=t.StateComponent(Object.assign({},o.coreRaisedButton,{createProps:(e,t)=>o.coreRaisedButton.createProps(e,Object.assign(t,{Shadow:a.Shadow})),createContent:(e,t)=>o.coreRaisedButton.createContent(e,Object.assign(t,{Shadow:a.Shadow})),component:c}));p.displayName="RaisedButton";const s=t.ViewComponent({view:e=>t.renderer(e.attrs.raised?p:c,e.attrs,e.children)});s.displayName="Button",e.Button=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-button.js.map
