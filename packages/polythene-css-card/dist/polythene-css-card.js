!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).polythene={},t["polythene-core-css"],t["polythene-theme"])}(this,(function(t,e,r){"use strict";var i="pe-card",a="pe-card__content",o="pe-card__overlay__content",n="pe-card__overlay--sheet";function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}var c={general_styles:function(t){return[]}},l=function(t){return _({},"color_"+t+"_main_background",(function(r,i){return[e.sel(r,{backgroundColor:i["color_"+t+"_main_background"]})]}))},s=d({},c,l("light")),p=d({},c,l("dark")),g=e.createColor({varFns:{lightTintFns:s,darkTintFns:p}}),u={general_styles:function(t){return[]}},h=function(t){var r;return _(r={},"color_"+t+"_title_text",(function(r,i){return[e.sel(r,{" .pe-card__title":{color:i["color_"+t+"_title_text"]}})]})),_(r,"color_"+t+"_subtitle_text",(function(r,i){return[e.sel(r,{" .pe-card__subtitle":{color:i["color_"+t+"_subtitle_text"]}})]})),_(r,"color_"+t+"_text",(function(r,i){return[e.sel(r,{" .pe-card__text":{color:i["color_"+t+"_text"]}})]})),_(r,"color_"+t+"_actions_border",(function(r,i){return[e.sel(r,{" .pe-card__actions--border":{borderTop:"1px solid "+i["color_"+t+"_actions_border"]}})]})),r},m=d({},u,h("light")),b=d({},u,h("dark")),f=e.createColor({varFns:{lightTintFns:m,darkTintFns:b}}),x=function(t,e){return{}},v=function(t,e){return{}},y=function(t,r){return e.sel(t,{" .pe-card__primary":{".pe-card__primary--tight":{" .pe-card__title":{paddingBottom:r.tight_title_padding_bottom-r.subtitle_line_height_padding_bottom+"px"}}}})},k=function(t,r){return e.sel(t,{" .pe-card__title":{padding:[r.title_padding_v,r.title_padding_h,r.title_padding_v-r.subtitle_line_height_padding_bottom,r.title_padding_h].map((function(t){return t+"px"})).join(" ")}})},T=function(t,r){return e.sel(t,{" .pe-card__text":{paddingTop:r.text_padding_v-r.text_line_height_padding_top+"px"}})},z=function(t,r){return e.sel(t,{" .pe-card__text":{"&:last-child":{paddingBottom:r.text_padding_bottom-r.text_line_height_padding_bottom+"px"}}})},R=function(t,r){return e.sel(t,{" .pe-card__text":{paddingBottom:r.tight_text_padding_bottom-r.text_line_height_padding_bottom+"px",".pe-card__text--tight, &.pe-card__text--tight:last-child":{paddingBottom:r.tight_text_padding_bottom-r.text_line_height_padding_bottom+"px"}}})},S={general_styles:function(t,i){return[e.sel(t,[x(i),{display:"block",position:"relative","&, a:link, a:visited":{textDecoration:"none"}," .pe-card__content":{position:"relative",borderRadius:"inherit",overflow:"hidden",width:"inherit",height:"inherit"}," .pe-card__media":{position:"relative",overflow:"hidden",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",".pe-card__media--landscape":{paddingBottom:"56.25%"},".pe-card__media--square":{paddingBottom:"100%"},".pe-card__media--crop-x":{width:"100%",height:"auto",display:"block",".pe-card__media--origin-start":{backgroundPositionY:"top"},".pe-card__media--origin-end":{backgroundPositionY:"bottom"}},".pe-card__media--crop-y":{height:"100%",width:"auto",display:"block",".pe-card__media--origin-start":{backgroundPositionX:"left"},".pe-card__media--origin-end":{backgroundPositionX:"right"}}," img, iframe":[e.mixin.fit(),{width:"100%",height:"100%",maxWidth:"none"}]," img":{opacity:0}," .pe-card__header + .pe-card__media":{borderTopLeftRadius:0,borderTopRightRadius:0}}," .pe-card__primary-media":{margin:"16px"}," .pe-card__overlay":e.mixin.fit()," .pe-card__media__dimmer":[e.mixin.fit(),{zIndex:1,pointerEvents:"all"}]," .pe-card__overlay__content":{position:"absolute",bottom:0,top:"auto",right:0,left:0,zIndex:2}," .pe-card__header":{" .pe-list-tile__title":{fontSize:"14px",fontWeight:r.vars.font_weight_normal,lineHeight:"20px",marginTop:"2px"}," .pe-list-tile__subtitle":{marginTop:"-1px"}}," .pe-card__primary":[e.flex.layoutHorizontal,{position:"relative","& + .pe-card__text":{marginTop:"-16px"}}]," .pe-card__title":[e.flex.flex(),{fontSize:"24px",lineHeight:"29px"}]," .pe-card__subtitle":{fontSize:"14px",lineHeight:"24px"}," .pe-card__actions":{".pe-card__actions--tight":{minHeight:0,paddingTop:0,paddingBottom:0,".pe-card__actions--vertical":{paddingLeft:0,paddingRight:0}},".pe-card__actions--horizontal":{minHeight:"52px",height:"52px"},".pe-card__actions--horizontal:not(.pe-card__actions--justified)":[e.flex.layoutHorizontal,e.flex.layoutCenter,{" .pe-button":{minWidth:0}}],".pe-card__actions--justified":[e.flex.layoutJustified],".pe-card__actions--vertical":[e.flex.layoutVertical,{" .pe-card__actions":[{minHeight:0}]," .pe-button":{height:"36px",padding:0}," .pe-list":{padding:0}}]}," .pe-card__primary.pe-card__primary--media + .pe-card__actions":{marginTop:"-16px"}," .pe-card__text":{fontSize:"14px",lineHeight:"24px"," .pe-card__actions + &":{marginTop:"8px"}}," .pe-card__text, .pe-card__primary":{"& + .pe-card__actions:not(:last-child)":{position:"relative",zIndex:1}}},{"*[dir=rtl], .pe-rtl ":_({},t,v(i))}])]},border_radius:function(t,r){return[e.sel(t,{borderRadius:r.border_radius+"px"," .pe-card__content .pe-card__media":{borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}," .pe-card__content .pe-card__media:not(.pe-card__media--square):not(.pe-card__media--landscape)":{":first-child":{borderTopLeftRadius:r.border_radius+"px",borderTopRightRadius:r.border_radius+"px"},":last-child":{borderBottomLeftRadius:r.border_radius+"px",borderBottomRightRadius:r.border_radius+"px"}}})]},image_size_small:function(t,r){return[e.sel(t,{" .pe-card__primary-media":{" .pe-card__media--small":{width:r.image_size_small+"px",height:r.image_size_small+"px"}}})]},image_size_regular:function(t,r){return[e.sel(t,{" .pe-card__primary-media":{" .pe-card__media--regular":{width:r.image_size_regular+"px"}}})]},image_size_medium:function(t,r){return[e.sel(t,{" .pe-card__primary-media":{" .pe-card__media--medium":{width:r.image_size_medium+"px"}}})]},image_size_large:function(t,r){return[e.sel(t,{" .pe-card__primary-media":{" .pe-card__media--large":{width:r.image_size_large+"px"}}})]},one_line_height_with_icon:function(t,r){return[e.sel(t,{" .pe-card__header":{height:r.one_line_height_with_icon+"px"}})]},tight_title_padding_bottom:function(t,r){return[e.sel(t,{}),y(t,r)]},subtitle_line_height_padding_bottom:function(t,r){return[e.sel(t,{}),y(t,r),k(t,r)]},title_padding_v:function(t,r){return[e.sel(t,{}),k(t,r)]},title_padding_h:function(t,r){return[e.sel(t,{}),k(t,r)]},actions_button_margin_h:function(t,r){return[e.sel(t,{" .pe-card__actions.pe-card__actions--horizontal":{margin:"0 -".concat(r.actions_button_margin_h,"px")," .pe-button":{margin:"0 ".concat(r.actions_button_margin_h,"px")}}})]},actions_padding_v:function(t,r){return[e.sel(t,{" .pe-card__actions":{paddingTop:r.actions_padding_v+"px",paddingBottom:r.actions_padding_v+"px"}})]},actions_padding_h:function(t,r){return[e.sel(t,{" .pe-card__actions":{paddingRight:r.actions_padding_h+"px",paddingLeft:r.actions_padding_h+"px"}})]},actions_button_margin_v:function(t,r){return[e.sel(t,{" .pe-card__actions":{".pe-card__actions--vertical":{" .pe-button":{marginTop:r.actions_button_margin_v+"px",marginBottom:r.actions_button_margin_v+"px"}}}})]},actions_vertical_padding_v:function(t,r){return[e.sel(t,{" .pe-card__actions":{".pe-card__actions--vertical":{":not(.pe-card__actions--tight)":{paddingTop:r.actions_vertical_padding_v+"px",paddingBottom:r.actions_vertical_padding_v+"px"}," .pe-card__actions":[{"&:first-child":{marginTop:-r.actions_vertical_padding_v+"px"},"&:last-child":{marginBottom:-r.actions_vertical_padding_v+"px"}}]}}})]},offset_small_padding_v:function(t,r){return[e.sel(t,{" .pe-card__text, .pe-card__primary":{"& + .pe-card__actions:not(:last-child)":{marginTop:-(r.offset_small_padding_v+3)+"px"}}})]},text_padding_h:function(t,r){return[e.sel(t,{" .pe-card__text":{paddingRight:r.text_padding_h+"px",paddingLeft:r.text_padding_h+"px"}})]},text_padding_v:function(t,r){return[e.sel(t,{}),T(t,r)]},text_line_height_padding_top:function(t,r){return[e.sel(t,{}),T(t,r)]},text_padding_bottom:function(t,r){return[e.sel(t,{}),z(t,r)]},tight_text_padding_bottom:function(t,r){return[e.sel(t,{}),R(t,r)]},text_line_height_padding_bottom:function(t,r){return[e.sel(t,{}),z(t,r),R(t,r)]}},w=e.createLayout({varFns:S}),B={general_styles:function(t){return[]}},F=function(t){return _({},"color_"+t+"_overlay_background",(function(r,i){return[e.sel(r,{" .pe-card__overlay__content":{backgroundColor:i["color_"+t+"_overlay_background"]}})]}))},H=d({},B,F("light")),L=d({},B,F("dark")),Q=e.createColor({varFns:{lightTintFns:H,darkTintFns:L}}),V={general_styles:!0,actions_button_margin_h:r.vars.grid_unit,actions_button_margin_v:2,actions_padding_h:8,actions_padding_v:0,actions_vertical_padding_v:6,border_radius:r.vars.unit_block_border_radius,icon_element_width:68,image_size_large:240,image_size_medium:160,image_size_regular:112,image_size_small:80,offset_small_padding_v:8,one_line_height_with_icon:72,one_line_padding_v:8,padding_h:16,subtitle_line_height_padding_bottom:7,text_line_height_padding_bottom:7,text_line_height_padding_top:6,text_padding_bottom:24,text_padding_h:16,text_padding_v:16,tight_text_padding_bottom:16,tight_title_padding_bottom:16,title_padding_h:16,title_padding_v:24,color_light_main_background:e.rgba(r.vars.color_light_background),color_light_title_text:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_light_subtitle_text:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_secondary),color_light_text:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_regular),color_light_actions_border:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_border_light),color_light_overlay_background:e.rgba(r.vars.color_light_background,r.vars.blend_light_overlay_background),color_dark_main_background:e.rgba(r.vars.color_dark_background),color_dark_title_text:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary),color_dark_subtitle_text:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_secondary),color_dark_text:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_regular),color_dark_actions_border:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_border_light),color_dark_overlay_background:e.rgba(r.vars.color_dark_background,r.vars.blend_dark_overlay_background)},j=".".concat(i),P=".".concat(a),C=".".concat(n),O=".".concat(o),q=[w,g],I=[Q],W=[f];t.addGeneralStyleToHead=function(){e.styler.addStyle({selectors:[j],fns:q,vars:V}),e.styler.addStyle({selectors:[C],fns:I,vars:V}),e.styler.addStyle({selectors:[P],fns:W,vars:V}),e.styler.addStyle({selectors:[O],fns:W,vars:V})},t.addStyle=function(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.mediaQuery,o=void 0===a?"":a,n=i.scope,_=void 0===n?"":n;t&&e.styler.addStyle({selectors:[t,j],fns:q,vars:V,customVars:r,mediaQuery:o,scope:_}),t&&e.styler.addStyle({selectors:[t," "+C],fns:I,vars:V,customVars:r,mediaQuery:o,scope:_}),t&&e.styler.addStyle({selectors:[t," "+P],fns:W,vars:V,customVars:r,mediaQuery:o,scope:_}),t&&e.styler.addStyle({selectors:[t," "+O],fns:W,vars:V,customVars:r,mediaQuery:o,scope:_})},t.color=g,t.getStyle=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.mediaQuery,o=void 0===a?"":a,n=i.scope,_=void 0===n?"":n;return e.styler.getStyle({selectors:[t,j],fns:q,vars:V,customVars:r,mediaQuery:o,scope:_}).concat(e.styler.getStyle({selectors:[t,t?" ":"",C],fns:I,vars:V,customVars:r,mediaQuery:o,scope:_})).concat(e.styler.getStyle({selectors:[t,t?" ":"",P],fns:W,vars:V,customVars:r,mediaQuery:o,scope:_})).concat(e.styler.getStyle({selectors:[t,t?" ":"",O],fns:W,vars:V,customVars:r,mediaQuery:o,scope:_}))},t.layout=w,t.vars=V,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-css-card.js.map
