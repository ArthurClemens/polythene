!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene={},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,l,i){"use strict";function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var s={component:"pe-list-tile",content:"pe-list-tile__content",highSubtitle:"pe-list-tile__high-subtitle",primary:"pe-list-tile__primary",secondary:"pe-list-tile__secondary",subtitle:"pe-list-tile__subtitle",title:"pe-list-tile__title",contentFront:"pe-list-tile__content-front",compact:"pe-list-tile--compact",compactFront:"pe-list-tile--compact-front",disabled:"pe-list-tile--disabled",hasFront:"pe-list-tile--front",hasHighSubtitle:"pe-list-tile--high-subtitle",hasSubtitle:"pe-list-tile--subtitle",header:"pe-list-tile--header",hoverable:"pe-list-tile--hoverable",selectable:"pe-list-tile--selectable",selected:"pe-list-tile--selected",highlight:"pe-list-tile--highlight",sticky:"pe-list-tile--sticky"},a={single_height:48,single_line_height:21,single_with_icon_height:56,single_with_icon_line_height:29,padding:13,compact_padding:9,subtitle_line_count:1,has_subtitle_padding:15,high_subtitle_line_count:2,has_high_subtitle_padding:13,front_item_width:72,compact_front_item_width:64,side_padding:2*i.vars.grid_unit_component,compact_side_padding:1*i.vars.grid_unit_component,font_size_title:16,font_size_subtitle:14,line_height_subtitle:20,font_size_list_header:14,font_size_small:12,color_light_title:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_primary),color_light_subtitle:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_secondary),color_light_info:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_text_disabled:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_disabled),color_light_list_header:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_secondary:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_secondary),color_light_hover_background:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_background_hover),color_light_focus_background:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_background_hover),color_light_selected_background:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_background_hover),color_light_highlight_background:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_background_hover),color_dark_title:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_primary),color_dark_subtitle:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_secondary),color_dark_info:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_text_disabled:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_disabled),color_dark_list_header:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_secondary:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_secondary),color_dark_hover_background:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_background_hover),color_dark_selected_background:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_background_hover),color_dark_highlight_background:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_background_hover)},_=function(e){return{"padding-left":e+"px","padding-right":e+"px"}},d=function(e,t){return{"padding-top":e+"px","padding-bottom":(t||e)+"px"}},c=function(e,t){return[n({},e,[l.flex.layout,{position:"relative",overflow:"hidden",".pe-list-tile--sticky":[l.mixin.sticky(2)]," .pe-list-tile__primary, .pe-list-tile__secondary":[l.flex.layoutHorizontal,{textDecoration:"none",color:"inherit",border:"none"}],":not(.pe-list-tile--header) .pe-list-tile__primary":[l.flex.flex(),{position:"relative"," .pe-list-tile__content:not(.pe-list-tile__content-front)":[l.flex.flex(),d(t.padding,t.padding+1)]}]," .pe-list-tile__secondary":{textAlign:"right",fontSize:t.font_size_title+"px",position:"relative"}," .pe-list-tile__content":[l.flex.layoutVertical,l.flex.selfCenter,_(t.side_padding),{".pe-list-tile__content-front":[d(t.padding-5),{".pe-list-tile--compact-front":{width:t.compact_front_item_width+"px"},":not(.pe-list-tile--compact-front)":{width:t.front_item_width+"px"}}]," small":{fontSize:t.font_size_small+"px"}}]," .pe-list-tile__content-front + .pe-list-tile__content":{paddingLeft:0}," .pe-list-tile__title":[l.mixin.ellipsis(1,t.single_line_height,"px"),{fontSize:t.font_size_title+"px",fontWeight:i.vars.font_weight_normal,lineHeight:t.single_line_height+"px"}]," .pe-list-tile__subtitle":[l.mixin.ellipsis(t.subtitle_line_count,t.line_height_subtitle,"px"),{fontSize:t.font_size_subtitle+"px",lineHeight:t.line_height_subtitle+"px",".pe-list-tile__high-subtitle":[l.mixin.ellipsis(t.high_subtitle_line_count,t.line_height_subtitle,"px"),{whiteSpace:"normal"}]}],".pe-list-tile--selected, &.pe-list-tile--disabled":{" a":{pointerEvents:"none"}},".pe-list-tile--subtitle":{" .pe-list-tile__content":[d(t.has_subtitle_padding,t.has_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list-tile--high-subtitle":{" .pe-list-tile--high-subtitle .pe-list-tile__secondary":[l.flex.layoutHorizontal,l.flex.layoutStart]," .pe-list-tile__content":[l.flex.selfStart,d(t.has_high_subtitle_padding,t.has_high_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list-tile--header":{height:t.single_height+"px"," .pe-list-tile__content":{paddingTop:0,paddingBottom:0}," .pe-list-tile__title":[l.mixin.ellipsis(1,t.single_height,"px"),{fontSize:t.font_size_list_header+"px",fontWeight:i.vars.font_weight_medium,lineHeight:t.single_height+"px",padding:0}]}," .pe-list--compact &, &.pe-list-tile--compact":{":not(.pe-list-tile--header)":{" .pe-list-tile__content":d(t.compact_padding,t.compact_padding+1)}},"@supports (-moz-appearance:none) and (display:contents)":{" .pe-list-tile__primary, .pe-list-tile__content":{overflow:"hidden"}},".pe-dialog .pe-menu__content &":{" .pe-list-tile__title":l.mixin.ellipsis("none")},".pe-menu__content &":{":not(.pe-list-tile--disabled)":{cursor:"default","&, .pe-list-tile__primary, .pe-list-tile__secondary":{" .pe-list-tile__title, .pe-list-tile__subtitle":{userSelect:"none"}}}},"html.pe-no-touch &.pe-list-tile--hoverable,       html.pe-no-touch &.pe-list-tile--selectable":{":not(.pe-list-tile--header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover":{cursor:"pointer"}}}])]},p=function(e,t,l,i){return[r({},e.map(function(e){return e+t}).join(","),{color:l["color_"+i+"_title"],backgroundColor:l["color_"+i+"_background"],".pe-list-tile--header":{color:l["color_"+i+"_list_header"]," .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:"inherit"}}," .pe-list-tile__subtitle":{color:l["color_"+i+"_subtitle"]}," .pe-list-tile__secondary":{color:l["color_"+i+"_secondary"]},".pe-list-tile--disabled":{"&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle":{color:l["color_"+i+"_text_disabled"]}},".pe-list-tile--selected":{" .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:l["color_"+i+"_selected_background"]}},".pe-list-tile--highlight:not(.pe-list-tile--selected)":{" .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:l["color_"+i+"_highlight_background"]}},"&.pe-list-tile--sticky":{backgroundColor:l["color_"+i+"_background"]||"inherit"},":not(.pe-list-tile--disabled)":{" a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus":{backgroundColor:l["color_"+i+"_focus_background"]||"inherit"}}})]},h=function(e,t,l,i){return[r({},e.map(function(e){return e+t+":hover"}).join(","),{":not(.pe-list-tile--header):not(.pe-list-tile--disabled)":{" .pe-list-tile__primary, .pe-list-tile__secondary":{backgroundColor:l["color_"+i+"_hover_background"]}}})]},u=function(e,t){return[p([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),p(["",".pe-light-tone",".pe-light-tone "],e,t,"light"),h(["html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable","html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable "],e,t,"dark"),h(["html.pe-no-touch .pe-list-tile--hoverable","html.pe-no-touch .pe-list-tile--hoverable ","html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable","html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable "],e,t,"light")]},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},b=[c,u],f="."+s.component,v=function(e,t){return l.styler.generateStyles([e,f],g({},a,t),b)};l.styler.generateStyles([f],a,b);var m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},y=function(){return"div"},k=v,x=function(e,l,i,n,r){var a=n.keyboardControl?null:n.url,_=n.element?n.element:a?"a":"div",d=[s.content,s.contentFront,n.compactFront?s.compactFront:null].join(" "),c=n.front?e("div",m({},i?{key:"front"}:null,{className:d}),n.front):n.indent?e("div",m({},i?{key:"front"}:null,{className:d})):null,p=!n.header&&n.url;return e(_,m({},t.filterSupportedAttributes(n),n.events,{className:s.primary,style:null},p&&o({},l.tabindex,n[l.tabindex]||0),a),[c,e("div",{className:s.content,style:n.style},[n.content?m({},i?{key:"content"}:null,n.content):r,n.title&&!n.content?e("div",m({},i?{key:"title"}:null,{className:s.title}),n.title):null,n.subtitle?e("div",m({},i?{key:"subtitle"}:null,{className:s.subtitle}),n.subtitle):null,n.highSubtitle?e("div",m({},i?{key:"highSubtitle"}:null,{className:s.subtitle+" "+s.highSubtitle}),n.highSubtitle):null,n.subContent?e("div",m({},i?{key:"subContent"}:null,{className:s.subContent}),n.subContent):null])])},S=function(e,l,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.keyboardControl?null:r.url,_=r.element?r.element:a?"a":"div",d=r.url;return e(_,m({},a,{className:s.secondary},i?{key:"secondary"}:null,t.filterSupportedAttributes(r),d&&o({},l.tabindex,r[l.tabindex]||0)),e("div",{className:s.content},[r.icon?e(n,r.icon):null,r.content?r.content:null]))},w=function(e,t){var l=t(e.attrs.defaultHighlight);return{highlight:l,redrawOnUpdate:t.merge([l])}},z=function(e){var l=e.state,i=e.attrs,n=e.dom;if(n&&t.isClient&&i.register){var r=n,o=function(){return l.highlight(!0)},s=function(){return l.highlight(!1)};r.addEventListener("focus",o,!1),r.addEventListener("blur",s,!1),l.removeEventListeners=function(){return r.removeEventListener("focus",o,!1),r.removeEventListener("blur",s,!1)},i.register(i.index,{dom:r,attrs:i}),l.highlight.map(function(e){i.setHighlightIndex&&e&&i.setHighlightIndex(i.index)})}},C=function(e){return e.state.removeEventListeners&&e.state.removeEventListeners()},j=function(e,l){var i=l.keys,n=e.state,r=e.attrs,a=n.highlight(),_=!(r.header||r.url||r.secondary&&r.secondary.url),d=r.subtitle?s.hasSubtitle:r.highSubtitle?s.hasHighSubtitle:r.front||r.indent?s.hasFront:null;return m({},t.filterSupportedAttributes(r,{remove:["tabindex","tabIndex"]}),{className:[s.component,r.selected?s.selected:null,r.disabled?s.disabled:null,r.sticky?s.sticky:null,r.compact?s.compact:null,r.hoverable?s.hoverable:null,r.selectable?s.selectable:null,a?s.highlight:null,r.header?s.header:null,"dark"===r.tone?"pe-dark-tone":null,"light"===r.tone?"pe-light-tone":null,d,r.className||r[i.class]].join(" ")},_&&o({},i.tabindex,r[i.tabindex]||0))},N=function(e,t){var l=t.renderer,i=t.requiresKeys,n=t.keys,r=t.Ripple,o=t.Icon,s=e.attrs,a=m({},i?{key:"primary"}:null,s);return delete a.id,delete a[n.class],[s.ink&&!s.disabled?l(r,m({},s.ripple,i?{key:"ripple"}:null)):null,x(l,n,i,a,s.children||e.children),s.secondary?S(l,n,i,o,s.secondary):null]},O=Object.freeze({getElement:y,theme:k,getInitialState:w,onMount:z,onUnMount:C,createProps:j,createContent:N});e.coreListTile=O,e.classes=s,e.vars=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-list-tile.js.map