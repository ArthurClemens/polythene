!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-theme"],n):n(e.polythene={},e["polythene-core"],e["polythene-theme"])}(this,function(e,n,i){"use strict";var r={component:"pe-spinner",animation:"pe-spinner__animation",placeholder:"pe-spinner__placeholder",animated:"pe-spinner--animated",fab:"pe-spinner--fab",large:"pe-spinner--large",medium:"pe-spinner--medium",permanent:"pe-spinner--permanent",raised:"pe-spinner--raised",regular:"pe-spinner--regular",singleColor:"pe-spinner--single-color",small:"pe-spinner--small",visible:"pe-spinner--visible"},t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},a={small:r.small,regular:r.regular,medium:r.medium,large:r.large,fab:r.fab},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"regular";return a[e]},s=function(e,i){return i.onChange&&i.onChange({visible:!1,transitioning:!0}),n.show(t({},i,{el:e.dom(),showClass:r.visible})).then(function(){i.onChange&&i.onChange({visible:!0,transitioning:!1}),i.didShow&&i.didShow(i.id),e.visible(!1)})},l=function(e,i){return i.onChange&&i.onChange({visible:!0,transitioning:!0}),n.hide(t({},i,{el:e.dom(),showClass:r.visible})).then(function(){i.onChange&&i.onChange({visible:!1,transitioning:!1}),i.didHide&&i.didHide(i.id),e.visible(!1)})},d=function(e,n){var i=n(!1);return{dom:n(),visible:i,redrawOnUpdate:n.merge([i])}},p=function(e){if(e.dom){var n=e.state,i=e.attrs;n.dom(e.dom),i.permanent||s(n,i)}},u=function(e,i){var a=i.keys,s=e.attrs;return t({},n.filterSupportedAttributes(s),{className:[r.component,s.instanceClass,o(s.size),s.singleColor?r.singleColor:null,s.raised?r.raised:null,s.animated?r.animated:null,s.permanent?r.permanent:null,s.permanent?r.visible:null,s.className||s[a.class]].join(" ")},s.events)},c=function(e,n){var i=n.renderer,r=n.Shadow,t=e.state,a=e.attrs;return t.hide&&setTimeout(function(){l(t,a)},0),[a.raised&&a.content?i(r,{key:"shadow",z:a.z}):null,a.content]},m=Object.freeze({getInitialState:d,onMount:p,createProps:u,createContent:c}),g=function(e){return"rgba("+e+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)+")"},h={size_small:3*i.vars.grid_unit_component,size_regular:4*i.vars.grid_unit_component,size_medium:5*i.vars.grid_unit_component,size_large:6*i.vars.grid_unit_component,size_fab:7*i.vars.grid_unit_component,raisedSize:function(e){var n=.25*e;return{padding:n,paddedSize:e+2*n}},color_light_raised_background:g(i.vars.color_light_background),color_dark_raised_background:g(i.vars.color_light_background)};e.coreBaseSpinner=m,e.classes=r,e.vars=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-base-spinner.js.map
