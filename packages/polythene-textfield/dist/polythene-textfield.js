!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-core"],e["polythene-css"],e["polythene-theme"])}(this,function(e,t,i,l,r){"use strict";function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t="default"in t?t.default:t;var a=r.vars.rgba,d=20,p=7,u={vertical_spacing_top:6,vertical_spacing_bottom:7,input_focus_border_width:2,input_focus_border_animation_duration:r.vars.animation_duration,floating_label_vertical_spacing_top:30,floating_label_vertical_spacing_bottom:7,floating_label_top:14,floating_label_animation_duration:".12s",input_padding_h:0,input_padding_v:p,input_border_width:1,margin_top_error_message:6,font_size_input:16,font_size_error:12,font_size_floating_label:12,line_height_input:d,dense_floating_label_vertical_spacing_top:23,dense_floating_label_vertical_spacing_bottom:4,dense_floating_label_top:10,dense_font_size_input:13,dense_font_size_floating_label:13,full_width_input_padding_h:20,full_width_input_padding_v:18,dense_full_width_input_padding_h:16,dense_full_width_input_padding_v:15,dense_full_width_font_size_input:13,color_light_input_text:a(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_light_input_background:a(r.vars.color_light_background),color_light_highlight_text:a(r.vars.color_primary,r.vars.blend_light_text_primary),color_light_input_bottom_border:a(r.vars.color_light_foreground,r.vars.blend_light_border_light),color_light_input_error_text:a("221, 44, 0"),color_light_input_error_border:a("221, 44, 0"),color_light_input_placeholder:a(r.vars.color_light_foreground,r.vars.blend_light_text_tertiary),color_light_label_text:a(r.vars.color_light_foreground,r.vars.blend_light_text_tertiary),color_light_disabled_label_text:a(r.vars.color_light_foreground,r.vars.blend_light_text_disabled),color_light_readonly_label_text:a(r.vars.color_light_foreground,r.vars.blend_light_text_tertiary),color_light_help_text:a(r.vars.color_light_foreground,r.vars.blend_light_text_tertiary),color_light_required_symbol:a("221, 44, 0"),color_light_focus_border:a(r.vars.color_primary),color_light_counter_ok_border:a(r.vars.color_primary),color_dark_input_text:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary),color_dark_input_background:a(r.vars.color_dark_background),color_dark_highlight_text:a(r.vars.color_primary,r.vars.blend_dark_text_primary),color_dark_input_bottom_border:a(r.vars.color_dark_foreground,r.vars.blend_dark_border_light),color_dark_input_error_text:a("222, 50, 38"),color_dark_input_error_border:a("222, 50, 38"),color_dark_input_placeholder:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_tertiary),color_dark_label_text:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_tertiary),color_dark_disabled_label_text:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_disabled),color_dark_readonly_label_text:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_tertiary),color_dark_help_text:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_tertiary),color_dark_required_symbol:a("221, 44, 0"),color_dark_focus_border:a(r.vars.color_primary),color_dark_counter_ok_border:a(r.vars.color_primary)},c=function(e,t){return[o({},e,[l.mixin.clearfix(),{position:"relative",lineHeight:r.vars.line_height,display:"inline-block",boxSizing:"border-box",margin:0,overflow:"visible",paddingBottom:t.vertical_spacing_bottom+"px",width:"100%",maxWidth:"100%"," .pe-textfield__input-area":{position:"relative",paddingTop:t.vertical_spacing_top+"px","&:after":[l.mixin.defaultTransition("opacity",t.input_focus_border_animation_duration),{position:"absolute",content:'""',bottom:0,left:0,height:t.input_focus_border_width+"px",width:"100%",opacity:0}]},".pe-textfield--focused .pe-textfield__input-area:after":{opacity:1}," .pe-textfield__input":{display:"block",fontSize:t.font_size_input+"px",lineHeight:t.line_height_input+"px",width:"100%",background:"none",textAlign:"left",color:"inherit",borderWidth:t.input_border_width+"px",borderStyle:"none none solid none",borderRadius:0,margin:0,padding:t.input_padding_v+"px "+t.input_padding_h+"px","&:textfield--invalid":{boxShadow:"none"},":invalid":{boxShadow:"none"}}," textarea.pe-textfield__input":{margin:t.input_padding_v+"px "+t.input_padding_h+"px",padding:0,display:"block"}," textfield__input:focus, &.pe-textfield--focused .pe-textfield__input":{"border-width":t.input_border_width+"px",outline:"none"}," .pe-textfield__label":{position:"absolute",display:"block",top:t.vertical_spacing_top+t.input_padding_v+"px",bottom:0,left:t.input_padding_h+"px",right:t.input_padding_h+"px",fontSize:t.font_size_input+"px",lineHeight:t.line_height_input+"px",pointerEvents:"none",whiteSpace:"nowrap",textAlign:"left",cursor:"text"},".pe-textfield--dirty .pe-textfield__label":{visibility:"hidden"},"&:not(.pe-textfield--no-char)":{" .pe-textfield__required-indicator, .pe-textfield__optional-indicator":{padding:"0 0 0 .25em"}},".pe-textfield--floating-label":{paddingBottom:t.floating_label_vertical_spacing_bottom+"px"," .pe-textfield__input-area":{paddingTop:t.floating_label_vertical_spacing_top+"px"}," .pe-textfield__label":[l.mixin.defaultTransition("all",t.floating_label_animation_duration),{top:t.floating_label_vertical_spacing_top+t.input_padding_v+"px"}],".pe-textfield--focused, &.pe-textfield--dirty":{" .pe-textfield__label":{fontSize:t.font_size_floating_label+"px",top:t.floating_label_top+"px",visibility:"visible"}},".pe-textfield--dense":{fontSize:t.dense_font_size_input+"px",paddingBottom:t.dense_floating_label_vertical_spacing_bottom+"px"," .pe-textfield__input-area":{paddingTop:t.dense_floating_label_vertical_spacing_top+"px"}," .pe-textfield__input":{fontSize:t.dense_font_size_input+"px"}," .pe-textfield__label":{fontSize:t.dense_font_size_input+"px",top:t.dense_floating_label_vertical_spacing_top+t.input_padding_v+"px"},".pe-textfield--focused, &.pe-textfield--dirty":{" .pe-textfield__label":{fontSize:t.dense_font_size_floating_label+"px",top:t.dense_floating_label_top+"px"}}}},".pe-textfield--disabled, &.pe-textfield--readonly":{" .pe-textfield__label":{cursor:"auto"}," .pe-textfield__input":{"border-bottom":"none"}," .pe-textfield__input-area:after":{opacity:1,height:"1px",bottom:"-1px",backgroundPosition:"top",backgroundSize:"4px 1px",backgroundRepeat:"repeat-x"}}," .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter":{marginTop:t.margin_top_error_message+"px",fontSize:t.font_size_error+"px",lineHeight:r.vars.line_height,minHeight:t.font_size_error*r.vars.line_height+"px"}," .pe-textfield__counter":{textAlign:"right",float:"right",padding:"0 0 0 16px"}," .pe-textfield__help-focus":[l.mixin.defaultTransition("opacity"),{opacity:0}],".pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus":{opacity:1},".pe-textfield--hide-clear":{" .pe-textfield__input::-ms-clear":{display:"none"}},".pe-textfield--hide-spinner":{" input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button":{"-webkit-appearance":"none",margin:0}," input[type=number]":{"-moz-appearance":"textfield"}}},{".pe-textfield--full-width":{width:"100%",padding:0," .pe-textfield__input-area":{padding:0}," .pe-textfield__input":{padding:t.full_width_input_padding_v+"px "+t.full_width_input_padding_h+"px"}," .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter":{paddingLeft:t.full_width_input_padding_h+"px",paddingRight:t.full_width_input_padding_h+"px"}," .pe-textfield__label":{top:t.full_width_input_padding_v+"px",left:t.full_width_input_padding_h+"px",right:t.full_width_input_padding_h+"px"},".pe-textfield--dense":{" .pe-textfield__input":{fontSize:t.dense_full_width_font_size_input+"px",padding:t.dense_full_width_input_padding_v+"px "+t.dense_full_width_input_padding_h+"px"}," .pe-textfield__label":{fontSize:t.dense_full_width_font_size_input+"px",top:t.dense_full_width_input_padding_v+"px",left:t.dense_full_width_input_padding_h+"px",right:t.dense_full_width_input_padding_h+"px"}}}}])]},f=function(e,t,i,l){return[n({},e+t,{color:i["color_"+l+"_focus_border"]," .pe-textfield__input-area":{color:"inherit",backgroundColor:i["color_"+l+"_input_background"],"&:after":{backgroundColor:"currentcolor"}},"&.pe-textfield--counter ":{" .pe-textfield__input-area:after":{backgroundColor:i["color_"+l+"_counter_ok_border"]}}," .pe-textfield__input":{color:i["color_"+l+"_input_text"],borderColor:i["color_"+l+"_input_bottom_border"]}," .pe-textfield__label":{color:i["color_"+l+"_label_text"]},"&.pe-textfield--disabled, &.pe-textfield--readonly":{" .pe-textfield__input-area:after":{backgroundColor:"transparent",backgroundImage:"linear-gradient(to right, "+i["color_"+l+"_disabled_label_text"]+" 20%, rgba(255, 255, 255, 0) 0%)"}},"&.pe-textfield--disabled":{" .pe-textfield__input, .pe-textfield__label":{color:i["color_"+l+"_disabled_label_text"]}},"&.pe-textfield--readonly":{" .pe-textfield__input, .pe-textfield__label":{color:i["color_"+l+"_readonly_label_text"]}},"&.pe-textfield--focused":{"&.pe-textfield--floating-label .pe-textfield__label":{color:i["color_"+l+"_highlight_text"]},"&.pe-textfield--required.pe-textfield--floating-label":{" .pe-textfield__required-indicator":{color:i["color_"+l+"_required_symbol"]}}}," .pe-textfield__help, .pe-textfield__counter":{color:i["color_"+l+"_help_text"]},"&.pe-textfield--invalid:not(.pe-textfield--hide-validation)":{" .pe-textfield__input":{borderColor:i["color_"+l+"_input_error_border"],boxShadow:"none"}," .pe-textfield__label":{color:i["color_"+l+"_input_error_text"]}," .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help":{color:i["color_"+l+"_input_error_text"]},"&.pe-textfield--required .pe-textfield__label":{color:i["color_"+l+"_input_error_text"]},"&, &.pe-textfield--counter":{" .pe-textfield__input-area:after":{backgroundColor:i["color_"+l+"_input_error_border"]}}}," .pe-textfield__input:-webkit-autofill":{"-webkit-box-shadow":"0 0 0px 1000px "+i["color_"+l+"_input_background"]+" inset",color:i["color_"+l+"_input_text"]+" !important"}})]},s=function(e,t){return[f("",e,t,"light"),f(".pe-dark-theme ",e,t,"dark")]},x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},h=[c,s],g=".pe-textfield",b=function(e,t){return l.styler.generateStyles([e,g],x({},u,t),h)};l.styler.generateStyles([g],u,h);var v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},m={component:"pe-textfield",inputArea:"pe-textfield__input-area",input:"pe-textfield__input",label:"pe-textfield__label",counter:"pe-textfield__counter",help:"pe-textfield__help",focusHelp:"pe-textfield__help-focus",error:"pe-textfield__error",errorPlaceholder:"pe-textfield__error-placeholder",requiredIndicator:"pe-textfield__required-indicator",optionalIndicator:"pe-textfield__optional-indicator",stateFocused:"pe-textfield--focused",stateDisabled:"pe-textfield--disabled",stateReadonly:"pe-textfield--readonly",stateInvalid:"pe-textfield--invalid",stateDirty:"pe-textfield--dirty",hasFloatingLabel:"pe-textfield--floating-label",isDense:"pe-textfield--dense",isRequired:"pe-textfield--required",hasFullWidth:"pe-textfield--full-width",hasCounter:"pe-textfield--counter",hideSpinner:"pe-textfield--hide-spinner",hideClear:"pe-textfield--hide-clear",hideValidation:"pe-textfield--hide-validation"},y=function(e,t){var i=t.validate(e.value);return{invalid:i&&!i.valid,message:i&&i.error}},k=function(e,t){return{invalid:e.value.length>t.counter,message:t.error}},w=function(e,t){return{invalid:!e.inputEl().checkValidity(),message:t.error}},z=function(e,t){var i={invalid:!1,message:void 0};return e.touched&&e.isInvalid&&0===e.value.length&&t.validateResetOnClear&&(e.touched=!1,e.isInvalid=!1,e.error=void 0),!i.invalid&&t.counter&&(i=k(e,t)),!i.invalid&&e.inputEl()&&e.inputEl().checkValidity&&(i=w(e,t)),!i.invalid&&t.validate&&(i=y(e,t)),i},S=function(e,i){var l=e.touched||i.validateAtStart?z(e,i):{invalid:!1,message:void 0},r=e.isInvalid;e.error=l.message,e.isInvalid=l.invalid,l.invalid!==r&&setTimeout(t.redraw,0),l.invalid||(e.error=void 0)},q=function(e){return e.isDirty=e.value.toString().length>0},E=function(e,t){return S(e,t),q(e)},I=function(e,t){if(t.getState){var i=z(e,t);t.getState({focus:e.focus(),dirty:e.isDirty,value:e.value,el:e.inputEl(),invalid:i.invalid,error:i.error})}},C=function(e,t){return e.ignoreEvents&&e.ignoreEvents.indexOf(t)!==-1},O=function(e){var l=e.state,r=e.attrs;E(l,r);var o=l.inputEl(),n=l.isInvalid,a=r.element||"div",d=r.type&&"submit"!==r.type&&"search"!==r.type?r.type:"text",p=r.multiline?"textarea":"input",u=n&&l.error,c=r.validate||r.min||r.max||r.minlength||r.required||r.pattern,f=r.disabled||r.readonly;if(!r.focus||l.focus()||f||(l.focus(!0),o&&o.focus()),"function"==typeof r.value&&o&&!l.focus()&&!f){var s=r.value().toString();l.value=s,l.touched=!0,E(l,r),I(l,r),o.value=s}var x=function(e){l.focus(!1),l.touched=!0,l.value=e.target.value,E(l,r),I(l,r),l.el.classList.remove(m.stateFocused)},h=v({},i.filterSupportedAttributes(r),{class:[m.component,n?m.stateInvalid:"",l.focus()?m.stateFocused:"",r.floatingLabel?m.hasFloatingLabel:"",r.disabled?m.stateDisabled:"",r.readonly?m.stateReadonly:"",l.isDirty?m.stateDirty:"",r.dense?m.isDense:"",r.required?m.isRequired:"",r.fullWidth?m.hasFullWidth:"",r.counter?m.hasCounter:"",r.hideSpinner!==!1?m.hideSpinner:"",r.hideClear!==!1?m.hideClear:"",r.hideValidation?m.hideValidation:"",r.class].join(" "),oncreate:function(e){var t=e.dom;l.el=t,f||E(l,r)}}),g=r.required&&""!==r.requiredIndicator?t("span",{class:m.requiredIndicator},r.requiredIndicator||"*"):null,b=!r.required&&r.optionalIndicator?t("span",{class:m.optionalIndicator},r.optionalIndicator):null,y=r.label?[r.label,g,b]:null,k=[t("div",{class:m.inputArea},[y?t("label",_({class:m.label},"on"+i.touchStartEvent,function(){f||setTimeout(function(){l.inputEl().focus()},0)}),y):null,t(p,v({},{class:m.input,type:d,name:r.name||"",disabled:r.disabled},C(r,"onclick")?null:{onclick:function(){f||(l.focus(!0),I(l,r))}},C(r,"onfocus")?null:{onfocus:function(){f||(l.focus(!0),l.el&&l.el.classList.add(m.stateFocused),I(l,r))}},C(r,"oninput")?null:{oninput:function(e){l.value=e.target.value,r.validateOnInput&&(l.touched=!0),E(l,r),I(l,r),r.oninput&&r.oninput(l.value,e)}},C(r,"onkeydown")?null:{onkeydown:function(e){13===e.which?(l.touched=!0,E(l,r),I(l,r)):27===e.which?l.inputEl().blur(e):9===e.which&&setTimeout(function(){t.redraw(),setTimeout(t.redraw,250)},1)}},{oncreate:function(e){var t=e.dom;l.inputEl(t),l.inputEl().value=l.value,I(l,r),f||C(r,"onblur")||l.inputEl().addEventListener("blur",x,!0)},onremove:function(){f||C(r,"onblur")||l.inputEl().removeEventListener("blur",x,!0)}},r.events?r.events:null,void 0!==r.readonly?{readonly:!0}:null,void 0!==r.pattern?{pattern:r.pattern}:null,void 0!==r.maxlength?{maxlength:r.maxlength}:null,void 0!==r.minlength?{minlength:r.minlength}:null,void 0!==r.max?{max:r.max}:null,void 0!==r.min?{min:r.min}:null,void 0!==r.autofocus?{autofocus:r.autofocus}:null,void 0!==r.required?{required:r.required}:null,void 0!==r.tabindex?{tabindex:r.tabindex}:null,void 0!==r.rows?{rows:r.rows}:null))]),r.counter?t("div",{class:m.counter},l.value.length+" / "+r.counter):null,r.help&&!u?t("div",{class:[m.help,r.focusHelp?m.focusHelp:""].join(" ")},r.help):null,u?t("div",{class:m.error},l.error):c&&!r.help?t("div",{class:m.errorPlaceholder}):null];return t(a,h,[r.before,k,r.after])},T={theme:b,oninit:function(e){var t=e.attrs,l=void 0,r=!1,o=!1,n=t.error||"",_=void 0,a=i.prop(),d=t.focus||!1;if("function"==typeof t.value){var p=t.value();l=void 0!==p?p:""}else l=void 0!==t.value?t.value:"";""!==l&&(o=!0);var u=function(e){return void 0===e?d:(d=e,void(e&&a()&&setTimeout(function(){return a().focus()},0)))};e.state=v(e.state,{value:l,error:n,el:_,inputEl:a,focus:u,isInvalid:r,touched:o})},view:O};e.default=T,e.classes=m,e.vars=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-textfield.js.map
