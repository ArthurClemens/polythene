!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).polythene={},t["polythene-core-css"],t["polythene-theme"])}(this,(function(t,n,e){"use strict";var i="pe-notification",o="pe-notification__holder";function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var l={general_styles:function(t){return[]}},c=function(t){var e;return a(e={},"color_"+t+"_text",(function(e,i){return[n.sel(e,{" .pe-notification__content":{color:i["color_"+t+"_text"]}})]})),a(e,"color_"+t+"_background",(function(e,i){return[n.sel(e,{" .pe-notification__content":{background:i["color_"+t+"_background"]}})]})),e},s=r({},l,c("light")),_=r({},l,c("dark")),d=n.createColor({varFns:{lightTintFns:s,darkTintFns:_}}),u={general_styles:function(t){return[n.sel(t,[n.flex.layoutCenterCenter,{top:0,right:0,bottom:0,left:0,pointerEvents:"none",justifyContent:"flex-start",".pe-multiple--screen":{position:"fixed",zIndex:e.vars.z_notification}}]),{":not(.pe-notification--container) .pe-multiple--container":{position:"absolute"}}]}},f=n.createLayout({varFns:u}),p=function(t,e){return n.sel(t,{" .pe-notification__title":{padding:e.title_single_padding_v+"px "+e.title_padding_h+"px"}})},g={animation_hide_css:function(t,e){return[n.sel(t,e.animation_hide_css)]},animation_show_css:function(t,e){return[n.sel(t,{".pe-notification--visible":[e.animation_show_css]})]},width:function(t,e){return[n.sel(t,{" .pe-notification__content":{width:e.width+"px"}})]},animation_delay:function(t,e){return[n.sel(t,{transitionDelay:e.animation_delay})]},animation_duration:function(t,e){return[n.sel(t,{transitionDuration:e.animation_duration})]},animation_timing_function:function(t,e){return[n.sel(t,{transitionTimingFunction:e.animation_timing_function})]},side_padding:function(t,e){return[n.sel(t,{" .pe-notification__content":{padding:"0 "+e.side_padding+"px"}})]},border_radius:function(t,e){return[n.sel(t,{" .pe-notification__content":{borderRadius:e.border_radius+"px"}})]},title_single_padding_v:function(t,n){return[p(t,n)]},title_padding_h:function(t,n){return[p(t,n)]},font_size:function(t,e){return[n.sel(t,{" .pe-notification__title":{fontSize:e.font_size+"px"}})]},line_height:function(t,e){return[n.sel(t,{" .pe-notification__title":{lineHeight:e.line_height+"px"}})]},title_multi_padding_v:function(t,e){return[n.sel(t,{".pe-notification--horizontal":{" .pe-notification__title--multi-line":{paddingTop:e.title_multi_padding_v+"px",paddingBottom:e.title_multi_padding_v+"px"}},".pe-notification--vertical":{" .pe-notification__title--multi-line":{paddingTop:e.title_multi_padding_v+"px"}}})]}},y=r({},{general_styles:function(t){return[n.sel(t,[n.flex.layoutCenter,{pointerEvents:"all",justifyContent:"center",margin:"0 auto",transitionProperty:"all",opacity:0," .pe-notification__title":{flex:"1 0 auto"}," .pe-notification__action":{" .pe-button":{margin:0}}," .pe-notification__content":{maxWidth:"100%"},".pe-notification--horizontal":{" .pe-notification__content":n.flex.layoutHorizontal," .pe-notification__title":[n.flex.flex(),{alignSelf:"center"}]," .pe-notification__action":n.flex.layoutCenter},".pe-notification--vertical":{" .pe-notification__content":[n.flex.layoutVertical]," .pe-notification__title":{paddingBottom:"6px"}," .pe-notification__action":[n.flex.layoutEndJustified,{width:"100%"}]}}])]}},g),h=n.createLayout({varFns:y}),m={general_styles:!0,animation_delay:"0s",animation_duration:".3s",animation_hide_css:"opacity: 0;",animation_show_css:"opacity: 1;",animation_timing_function:"ease-in-out",border_radius:e.vars.unit_block_border_radius,font_size:14,line_height:20,min_height:80,side_padding:16,title_multi_padding_v:20,title_padding_h:8,title_single_padding_v:14,width:288,color_light_background:n.rgba(e.vars.color_light_background),color_light_text:n.rgba(e.vars.color_light_foreground,e.vars.blend_light_dark_primary),color_dark_background:n.rgba(e.vars.color_dark_background),color_dark_text:n.rgba(e.vars.color_dark_foreground,e.vars.blend_light_text_primary)},v=[h,d],b=".".concat(i),x=[f],k=".".concat(o);t.addGeneralStyleToHead=function(){n.styler.addStyle({selectors:[k],fns:x,vars:m}),n.styler.addStyle({selectors:[b],fns:v,vars:m})},t.addStyle=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.mediaQuery,a=void 0===o?"":o,r=i.scope,l=void 0===r?"":r;t&&n.styler.addStyle({selectors:[t,b],fns:v,vars:m,customVars:e,mediaQuery:a,scope:l}),t&&n.styler.addStyle({selectors:[t,k],fns:x,vars:m,customVars:e,mediaQuery:a,scope:l})},t.color=d,t.customLayoutFns=g,t.getStyle=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.mediaQuery,a=void 0===o?"":o,r=i.scope,l=void 0===r?"":r;return n.styler.getStyle({selectors:[t,b],fns:v,vars:m,customVars:e,mediaQuery:a,scope:l}).concat(n.styler.getStyle({selectors:[k],fns:x,vars:m,customVars:e,mediaQuery:a,scope:l}))},t.holderLayout=f,t.layout=h,t.vars=m,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-css-notification.js.map
