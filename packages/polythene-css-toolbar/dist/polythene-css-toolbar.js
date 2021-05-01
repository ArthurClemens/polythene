!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).polythene={},e["polythene-core-css"],e["polythene-theme"])}(this,(function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o={general_styles:function(e){return[]}},a=function(e){var r;return n(r={},"color_"+e+"_text",(function(r,n){return[t.sel(r,{" .pe-toolbar__title":{"&, a:link, a:visited":{color:n["color_"+e+"_text"]}}})]})),n(r,"color_"+e+"_background",(function(r,n){return[t.sel(r,{backgroundColor:n["color_"+e+"_background"]})]})),n(r,"color_"+e+"_border",(function(r,n){return[t.sel(r,{".pe-toolbar--border":{borderColor:n["color_"+e+"_border"]}})]})),r},l=i({},o,a("light")),_=i({},o,a("dark")),s=t.createColor({varFns:{lightTintFns:l,darkTintFns:_}}),d=function(e){return function(t,r){return n({},e,n({},t,r))}},g=function(e){var r,i=e.selector,o=e.vars,a=e.isRTL,l=e.isLarge,_=l?o.indent_large:o.indent;return(l?h:t.sel)(i,{" .pe-toolbar__title--indent, .pe-toolbar__title.pe-toolbar__title--indent":(r={},n(r,a?"marginLeft":"marginRight",0),n(r,a?"marginRight":"marginLeft",_+"px"),r)})},c=function(e){var r,i=e.selector,o=e.vars,a=e.isRTL,l=e.isLarge,_=l?o.title_padding_large:o.title_padding;return(l?h:t.sel)(i,{" > span, .pe-toolbar__title":(r={},n(r,a?"marginLeft":"marginRight",0),n(r,a?"marginRight":"marginLeft",_+"px"),r)," .pe-toolbar__title--center":{marginLeft:_+"px",marginRight:_+"px"}})},p=function(e){var r,i=e.selector,o=e.vars,a=e.isRTL,l=e.isLarge,_=l?o.title_after_icon_padding_large:o.title_after_icon_padding;return(l?h:t.sel)(i,{" > :not(.pe-toolbar__title):first-child:not(.pe-toolbar__title--indent):first-child":(r={},n(r,a?"marginRight":"marginLeft",0),n(r,a?"marginLeft":"marginRight",_+"px"),r)})},u=d("@media (min-width: ".concat(r.vars.breakpoint_for_phone_only,"px) and (orientation: landscape)")),h=d("@media (min-width: ".concat(r.vars.breakpoint_for_tablet_portrait_up,"px)")),f={general_styles:function(e){return[t.sel(e,[t.flex.layout,t.flex.layoutHorizontal,t.flex.layoutCenter,{position:"relative",zIndex:r.vars.z_toolbar," > a":{textDecoration:"none"},".pe-toolbar--fullbleed":{padding:0},".pe-toolbar--border":{borderWidth:"1px",borderStyle:"none none solid none"}," > *":{flexShrink:0}," > span, .pe-toolbar__title, .pe-toolbar__title--indent":{width:"100%",display:"block",wordBreak:"break-all",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flexShrink:1}," .pe-toolbar__title--center":{textAlign:"center",justifyContent:"center"}," > .pe-action":{paddingLeft:"12px",paddingRight:"12px"}," .pe-fit":[t.mixin.fit(),{margin:0}]}])]},height:function(e,r){return[t.sel(e,{height:r.height+"px"})]},height_compact:function(e,r){return[t.sel(e,{".pe-toolbar--compact":{height:r.height_compact+"px"}}),u(e,{height:r.height+"px"})]},line_height:function(e,r){return[t.sel(e,{lineHeight:r.line_height+"em"," > span, .pe-toolbar__title, .pe-toolbar__title--indent":{lineHeight:r.line_height}})]},font_size:function(e,r){return[t.sel(e,{" > span, .pe-toolbar__title, .pe-toolbar__title--indent, .pe-action":{fontSize:r.font_size+"px"}})]},font_weight:function(e,r){return[t.sel(e,{" > span, .pe-toolbar__title, .pe-toolbar__title--indent":{fontWeight:r.font_weight}})]},padding_side:function(e,r){return[t.sel(e,{padding:"0 "+r.padding_side+"px"}),g({selector:e,vars:r}),g({selector:t.selectorRTL(e),vars:r,isRTL:!0})]},indent:function(e,r){return[g({selector:e,vars:r}),g({selector:t.selectorRTL(e),vars:r,isRTL:!0})]},indent_large:function(e,r){return[g({selector:e,vars:r,isLarge:!0}),g({selector:t.selectorRTL(e),vars:r,isRTL:!0,isLarge:!0})]},title_padding:function(e,r){return[c({selector:e,vars:r}),c({selector:t.selectorRTL(e),vars:r,isRTL:!0})]},title_padding_large:function(e,r){return[c({selector:e,vars:r,isLarge:!0}),c({selector:t.selectorRTL(e),vars:r,isRTL:!0,isLarge:!0})]},title_after_icon_padding:function(e,r){return[p({selector:e,vars:r}),p({selector:t.selectorRTL(e),vars:r,isRTL:!0})]},title_after_icon_padding_large:function(e,r){return[p({selector:e,vars:r,isLarge:!0}),p({selector:t.selectorRTL(e),vars:r,isRTL:!0,isLarge:!0})]},height_large:function(e,t){return[h(e,{height:t.height_large+"px"})]},padding_side_large:function(e,t){return[h(e,{padding:"0 "+t.padding_side_large+"px"})]}},b=t.createLayout({varFns:f}),v=2*r.vars.grid_unit_component-12,y=3*r.vars.grid_unit_component-12,m={general_styles:!0,font_size:20,font_weight:400,height:7*r.vars.grid_unit_component,height_compact:6*r.vars.grid_unit_component,height_large:8*r.vars.grid_unit_component,line_height:r.vars.line_height,padding_side:v,padding_side_large:y,indent:r.vars.unit_indent-v,indent_large:r.vars.unit_indent_large-y,title_after_icon_padding:4,title_after_icon_padding_large:12,title_padding:16,title_padding_large:8,color_light_text:t.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_light_border:t.rgba(r.vars.color_light_foreground,r.vars.blend_light_border_light),color_light_background:t.rgba(r.vars.color_light_background),color_dark_text:t.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary),color_dark_border:t.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_border_light),color_dark_background:t.rgba(r.vars.color_dark_background)},x=[b,s],L=".".concat("pe-toolbar"),k=t.styler.createAddStyle(L,x,m),R=t.styler.createGetStyle(L,x,m);e.addGeneralStyleToHead=function(){return t.styler.addStyle({selectors:[L],fns:x,vars:m})},e.addStyle=k,e.color=s,e.getStyle=R,e.layout=b,e.vars=m,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-css-toolbar.js.map
