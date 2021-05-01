!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-css-selection-control"),require("polythene-theme"),require("polythene-css-icon-button")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-css-selection-control","polythene-theme","polythene-css-icon-button"],t):t((o="undefined"!=typeof globalThis?globalThis:o||self).polythene={},o["polythene-core-css"],o["polythene-css-selection-control"],o["polythene-theme"],o["polythene-css-icon-button"])}(this,(function(o,t,r,e,n){"use strict";function l(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}function c(){return(c=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o}).apply(this,arguments)}var a={general_styles:function(o){return[t.sel(o,{})]}},_=function(o){var r;return l(r={},"color_"+o+"_label",(function(r,e){return[t.sel(r,{" .pe-control__label":{color:e["color_"+o+"_label"]}})]})),l(r,"color_"+o+"_track_off",(function(r,e){return[t.sel(r,{".pe-control--off":{" .pe-switch-control__track":{backgroundColor:e["color_"+o+"_track_off"]}}})]})),l(r,"color_"+o+"_track_off_opacity",(function(r,e){return[t.sel(r,{".pe-control--off":{" .pe-switch-control__track":{opacity:e["color_"+o+"_track_off_opacity"]}}})]})),l(r,"color_"+o+"_thumb_off",(function(r,e){return[t.sel(r,{".pe-control--off":{" .pe-switch-control__knob":{backgroundColor:e["color_"+o+"_thumb_off"]}}})]})),l(r,"color_"+o+"_icon_off",(function(r,e){return[t.sel(r,{".pe-control--off":{" .pe-icon":{color:e["color_"+o+"_icon_off"]}}})]})),l(r,"color_"+o+"_off_label",(function(r,e){return[t.sel(r,{".pe-control--off":{" .pe-control__label":{color:e["color_"+o+"_off_label"]}}})]})),l(r,"color_"+o+"_track_on",(function(r,e){return[t.sel(r,{".pe-control--on":{" .pe-switch-control__track":{backgroundColor:e["color_"+o+"_track_on"]}}})]})),l(r,"color_"+o+"_track_on_opacity",(function(r,e){return[t.sel(r,{".pe-control--on":{" .pe-switch-control__track":{opacity:e["color_"+o+"_track_on_opacity"]}}})]})),l(r,"color_"+o+"_thumb_on",(function(r,e){return[t.sel(r,{".pe-control--on":{" .pe-switch-control__knob":{backgroundColor:e["color_"+o+"_thumb_on"]}}})]})),l(r,"color_"+o+"_icon_on",(function(r,e){return[t.sel(r,{".pe-control--on":{" .pe-icon":{color:e["color_"+o+"_icon_on"]}}})]})),l(r,"color_"+o+"_on_label",(function(r,e){return[t.sel(r,{".pe-control--on":{" .pe-control__label":{color:e["color_"+o+"_on_label"]}}})]})),l(r,"color_"+o+"_disabled",(function(r,e){return[t.sel(r,{".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled":{" .pe-control__label":{color:e["color_"+o+"_disabled"]}}})]})),l(r,"color_"+o+"_track_disabled",(function(r,e){return[t.sel(r,{".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled":{" .pe-switch-control__track":{backgroundColor:e["color_"+o+"_track_disabled"]}}})]})),l(r,"color_"+o+"_track_disabled_opacity",(function(r,e){return[t.sel(r,{".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled":{" .pe-switch-control__track":{opacity:e["color_"+o+"_track_disabled_opacity"]}}})]})),l(r,"color_"+o+"_thumb_disabled",(function(r,e){return[t.sel(r,{".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled":{" .pe-switch-control__thumb, .pe-button__content":{color:e["color_"+o+"_thumb_disabled"]}}})]})),r},i=c({},a,_("light")),s=c({},a,_("dark")),u={},d={},p=t.createColor({varFns:{lightTintFns:i,darkTintFns:s,lightTintHoverFns:u,darkTintHoverFns:d}}),h=function(o,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.animation_duration;return t.mixin.defaultTransition(r,e,"ease-out")},f=function(o,t){var r=t/e.vars.unit_icon_size,n=2*Math.floor(.5*o.thumb_size*r),l=2*Math.floor(.5*o.track_height*r),c=2*Math.floor(.5*o.track_length*r),a=2*Math.floor(.5*o.thumb_size*r),_=(o.label_height*r-l)/2,i=o.icon_button_padding,s=(t-a)/2,u=-(t+2*i)/2+n/2;return{factor:r,scaledThumbSize:a,scaledTrackHeight:l,scaledTrackWidth:c,size:t,thumbMargin:s,thumbOffsetMax:u+c-n,thumbOffsetMin:u,thumbOffsetY:u+s,thumbPadding:i,trackTop:_,trackVisualOffset:.3}},b=function(o,t){var r=t.scaledThumbSize,e=t.scaledTrackHeight,n=t.scaledTrackWidth,l=t.size,c=t.thumbMargin,a=t.thumbOffsetY,_=t.thumbPadding,i=t.trackTop;return{" .pe-control__form-label":{height:l+"px",minWidth:n+"px"}," .pe-switch-control__track":{height:e+"px",width:n-2*t.trackVisualOffset+"px",top:i+"px",borderRadius:e+"px"}," .pe-switch-control__thumb":{top:a+"px"}," .pe-switch-control__knob":{width:r+"px",height:r+"px",margin:c+"px"}," .pe-button__content":{padding:_+"px"}}},g=function(o,t,r){var e,n,c,a,_=t.factor,i=t.scaledTrackWidth,s=t.thumbOffsetMax,u=t.thumbOffsetMin,d=t.trackVisualOffset;return{" .pe-control__label":(e={},l(e,r?"paddingRight":"paddingLeft",o.padding*_+8+i+"px"),l(e,r?"paddingLeft":"paddingRight",0),e)," .pe-switch-control__track":(n={},l(n,r?"right":"left",d+"px"),l(n,r?"left":"right","auto"),n)," .pe-switch-control__thumb":(c={},l(c,r?"right":"left",u+"px"),l(c,r?"left":"right","auto"),c),".pe-control--on":{" .pe-switch-control__thumb":(a={},l(a,r?"right":"left",s+"px"),l(a,r?"left":"right","auto"),a)}}},k=function(o){return function(){var t;return{" .pe-switch-control__track":(t={},l(t,o?"right":"left",0),l(t,o?"left":"right","auto"),t)}}},m=k(!1),y=k(!0),v={general_styles:function(o){return[t.sel(o,[m(),{" .pe-switch-control__track":[{position:"absolute"}]," .pe-switch-control__thumb":{position:"absolute",zIndex:1,color:"inherit",":focus":{outline:0}}," .pe-switch-control__knob":{position:"relative",borderRadius:"50%"}," .pe-icon-button .pe-button__content":{transition:"none"," .pe-switch-control__knob .pe-icon":[t.mixin.fit(),{width:"100%",height:"100%"}]}}]),l({},"_:-ms-fullscreen, :root ".concat(o),{" input":{position:"absolute",zIndex:1,width:"100%",height:"100%",left:0,top:0,right:0,bottom:0,display:"block",opacity:0,cursor:"pointer"}," label":{cursor:"auto"}})]},animation_duration:function(o,r){return[t.sel(o,{" .pe-switch-control__track, .pe-switch-control__thumb, .pe-control__label":h(r,"all")})]},createSize:function(o,r){var n={small:f(r,e.vars.unit_icon_size_small),regular:f(r,e.vars.unit_icon_size),medium:f(r,e.vars.unit_icon_size_medium),large:f(r,e.vars.unit_icon_size_large)};return[t.sel(o,{".pe-control--small":[b(0,n.small),g(r,n.small,!1)],".pe-control--regular":[b(0,n.regular),g(r,n.regular,!1)],".pe-control--medium":[b(0,n.medium),g(r,n.medium,!1)],".pe-control--large":[b(0,n.large),g(r,n.large,!1)]}),l({},"*[dir=rtl] ".concat(o,", .pe-rtl ").concat(o),[y(),{".pe-control--small":[g(r,n.small,!0)],".pe-control--regular":[g(r,n.regular,!0)],".pe-control--medium":[g(r,n.medium,!0)],".pe-control--large":[g(r,n.large,!0)]}])]}},w=t.createLayout({varFns:v,superLayout:r.layout,varMixin:function(o){return o.thumb_size||o.track_height||o.track_length||o.label_height||o.icon_button_padding?c({},o,{createSize:!0}):o}}),x={general_styles:!0,animation_duration:e.vars.animation_duration,hit_area_padding:(e.vars.grid_unit_icon_button-e.vars.unit_icon_size)/2,icon_button_padding:n.vars.padding,padding:e.vars.grid_unit_component,thumb_size:20,track_height:14,track_length:36,label_height:r.vars.label_height,color_light_thumb_on:t.rgba(e.vars.color_primary),color_light_thumb_off:"#f1f1f1",color_light_thumb_disabled:"#eee",color_light_wash_on:t.rgba(e.vars.color_primary,e.vars.blend_light_background_active),color_light_wash_off:n.vars.color_light_wash_background,color_light_track_on:t.rgba(e.vars.color_primary_faded),color_light_track_on_opacity:.55,color_light_track_off:t.rgba(e.vars.color_light_foreground,e.vars.blend_light_text_regular),color_light_track_off_opacity:.55,color_light_track_disabled:t.rgba(e.vars.color_light_foreground,e.vars.blend_light_background_disabled),color_light_track_disabled_opacity:1,color_dark_thumb_on:t.rgba(e.vars.color_primary),color_dark_thumb_off:"#bdbdbd",color_dark_thumb_disabled:"#555",color_dark_wash_on:t.rgba(e.vars.color_primary,e.vars.blend_dark_background_active),color_dark_wash_off:n.vars.color_dark_wash_background,color_dark_track_on:t.rgba(e.vars.color_primary_faded,e.vars.blend_dark_text_tertiary),color_dark_track_on_opacity:9,color_dark_track_off:"#717171",color_dark_track_off_opacity:.55,color_dark_track_disabled:"#717171",color_dark_track_disabled_opacity:.3},z=[w,p],T=".".concat("pe-switch-control"),O=t.styler.createAddStyle(T,z,x),M=t.styler.createGetStyle(T,z,x);o.addGeneralStyleToHead=function(){return t.styler.addStyle({selectors:[T],fns:z,vars:x})},o.addStyle=O,o.color=p,o.getStyle=M,o.layout=w,o.vars=x,Object.defineProperty(o,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-css-switch.js.map
