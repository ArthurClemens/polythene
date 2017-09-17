!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-theme"],t):t(e.polythene={},e["polythene-core"],e["polythene-theme"])}(this,function(e,t,r){"use strict";function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i={component:"pe-textfield",counter:"pe-textfield__counter",error:"pe-textfield__error",errorPlaceholder:"pe-textfield__error-placeholder",focusHelp:"pe-textfield__help-focus",help:"pe-textfield__help",input:"pe-textfield__input",inputArea:"pe-textfield__input-area",label:"pe-textfield__label",optionalIndicator:"pe-textfield__optional-indicator",requiredIndicator:"pe-textfield__required-indicator",hasCounter:"pe-textfield--counter",hasFloatingLabel:"pe-textfield--floating-label",hasFullWidth:"pe-textfield--full-width",hideClear:"pe-textfield--hide-clear",hideSpinner:"pe-textfield--hide-spinner",hideValidation:"pe-textfield--hide-validation",isDense:"pe-textfield--dense",isRequired:"pe-textfield--required",stateDirty:"pe-textfield--dirty",stateDisabled:"pe-textfield--disabled",stateFocused:"pe-textfield--focused",stateInvalid:"pe-textfield--invalid",stateReadonly:"pe-textfield--readonly"},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},n=function(e){return e.attrs.element||"div"},a=function(e,t){var r=t.validate(e.inputEl().value);return{invalid:r&&!r.valid,message:r&&r.error}},d=function(e,t){return{invalid:e.inputEl().value.length>t.counter,message:t.error}},u=function(e,t){return{invalid:!e.inputEl().checkValidity(),message:t.error}},_=function(e,t){var r={invalid:!1,message:void 0};return e.isTouched()&&e.isInvalid()&&0===e.inputEl().value.length&&t.validateResetOnClear&&(e.isTouched(!1),e.isInvalid(!1),e.error(void 0)),!r.invalid&&t.counter&&(r=d(e,t)),!r.invalid&&e.inputEl()&&e.inputEl().checkValidity&&(r=u(e,t)),!r.invalid&&t.validate&&(r=a(e,t)),r},s=function(e){var t=e.state,r=e.attrs,l=t.isTouched()||r.validateAtStart?_(t,r):{invalid:!1,message:void 0},i=t.isInvalid();t.error(l.message),l.invalid!==i&&t.isInvalid(l.invalid),l.invalid||t.error(void 0)},c=function(e){var t=e.state,r=e.attrs;if(r.onChange){var l=_(t,r);r.onChange({focus:t.hasFocus(),dirty:t.isDirty(),el:t.inputEl(),invalid:l.invalid,error:l.error,value:t.inputEl().value})}},p=function(e,t){return e.ignoreEvents&&-1!==e.ignoreEvents.indexOf(t)},v=function(e,t){var r=e.attrs,l=void 0!==r.defaultValue?r.defaultValue:void 0!==r.value?r.value:"",i=t(),o=t(),n=t(),a=t(r.error),d=t(r.focus||!1),u=t(),_=t(!1),s=t(""!==l),c=t(!1);return{defaultValue:l,previousValue:t(),el:i,error:a,hasFocus:d,inputEl:o,isInvalid:c,isTouched:_,isDirty:s,setFocus:u,setValue:n,redrawOnUpdate:t.merge([o,c,s])}},f=function(e){var t=e.dom,r=e.state,l=e.attrs;r.el(t);var i=l.multiLine?"textarea":"input",o=t.querySelector(i);e.state.inputEl(o),r.inputEl().value=r.defaultValue,r.setValue.map(function(t){var i=t.type,o=t.focus;return void 0!==o&&r.setFocus(o),"input"===i&&(l.validateOnInput||l.counter)&&r.isTouched(""!==r.inputEl().value),"input"!==i&&r.isTouched(""!==r.inputEl().value),"onblur"===i&&r.isTouched(!0),r.isDirty(""!==r.inputEl().value),s(e),c(e),r.previousValue(r.inputEl().value)}),r.setFocus.map(function(e){r.hasFocus(e),e&&r.inputEl()&&setTimeout(function(){return r.inputEl()&&r.inputEl().focus&&r.inputEl().focus()},0)}),c(e)},h=function(e,r){var l=r.keys,n=e.state,a=e.attrs,d=n.isInvalid();return o({},t.filterSupportedAttributes(a),{className:[i.component,d?i.stateInvalid:"",n.hasFocus()?i.stateFocused:"",n.isDirty()?i.stateDirty:"",a.floatingLabel?i.hasFloatingLabel:"",a.disabled?i.stateDisabled:"",a.readonly?i.stateReadonly:"",a.dense?i.isDense:"",a.required?i.isRequired:"",a.fullWidth?i.hasFullWidth:"",a.counter?i.hasCounter:"",!1!==a.hideSpinner?i.hideSpinner:"",!1!==a.hideClear?i.hideClear:"",a.hideValidation?i.hideValidation:"","dark"===a.tone?"pe-dark-tone":null,"light"===a.tone?"pe-light-tone":null,a.className||a[l.class]].join(" ")})},g=function(e,r){var n=r.renderer,a=r.keys,d=e.state,u=e.attrs,_=d.inputEl(),s=d.isInvalid(),v=u.multiLine?"textarea":"input",f=u.multiLine?null:u.type&&"submit"!==u.type&&"search"!==u.type?u.type:"text",h=s&&void 0!==d.error(),g=u.validate||u.min||u.max||u[a.minlength]||u[a.maxlength]||u.required||u.pattern,b=u.disabled||u[a.readonly];!u.focus||d.hasFocus()||b||d.setFocus(!0);var m=void 0!==u.value?u.value:_?_.value:d.previousValue(),y=void 0===m?"":m.toString();_&&d.previousValue()!==y&&(_.value=y,d.previousValue(y),setTimeout(function(){return d.setValue({type:"input"})},0));var x=u.required&&""!==u.requiredIndicator?n("span",{key:"required",className:i.requiredIndicator},u.requiredIndicator||"*"):null,k=!u.required&&u.optionalIndicator?n("span",{key:"optional",className:i.optionalIndicator},u.optionalIndicator):null,E=u.label?[u.label,x,k]:null;return[n("div",{className:i.inputArea,key:"input-area"},[E?n("label",l({key:"label",className:i.label},a["on"+t.pointerStartEvent],function(){b||setTimeout(function(){d.inputEl.focus()},0)}),E):null,n(v,o({},{key:"input",className:i.input,disabled:u.disabled},f?{type:f}:null,u.name?{name:u.name}:null,p(u,[a.onclick])?null:l({},a.onclick,function(){b||(d.setFocus(!0),c(e))}),p(u,[a.onfocus])?null:l({},a.onfocus,function(){b||(d.setFocus(!0),d.el()&&d.el().classList.add(i.stateFocused),c(e))}),p(u,[a.onblur])?null:l({},a.onblur,function(){d.setValue({type:"onblur",focus:!1}),d.el().classList.remove(i.stateFocused)}),p(u,[a.oninput])?null:l({},a.oninput,function(){d.setValue({type:"input"})}),p(u,[a.onkeydown])?null:l({},a.onkeydown,function(e){"Enter"===e.key?d.isTouched(!0):"Escape"===e.key&&_.blur(e)}),u.events?u.events:null,void 0!==u[a.readonly]?l({},a.readonly,!0):null,void 0!==u.pattern?{pattern:u.pattern}:null,void 0!==u[a.maxlength]?l({},a.maxlength,u[a.maxlength]):null,void 0!==u[a.minlength]?l({},a.minlength,u[a.minlength]):null,void 0!==u.max?{max:u.max}:null,void 0!==u.min?{min:u.min}:null,void 0!==u[a.autofocus]?l({},a.autofocus,u[a.autofocus]):null,void 0!==u.required?{required:u.required}:null,void 0!==u[a.tabindex]?l({},a.tabindex,u[a.tabindex]):null,void 0!==u.rows?{rows:u.rows}:null))]),u.counter?n("div",{key:"counter",className:i.counter},(_&&_.value.length||0)+" / "+u.counter):null,u.help&&!h?n("div",{key:"help",className:[i.help,u.focusHelp?i.focusHelp:null].join(" ")},u.help):null,h?n("div",{key:"error",className:i.error},d.error()):g&&!u.help?n("div",{key:"error-placeholder",className:i.errorPlaceholder}):null]},b=Object.freeze({getElement:n,getInitialState:v,onMount:f,createProps:h,createContent:g}),m=function(e){return"rgba("+e+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)+")"},y={vertical_spacing_top:6,vertical_spacing_bottom:7,input_focus_border_width:2,input_focus_border_animation_duration:r.vars.animation_duration,floating_label_vertical_spacing_top:30,floating_label_vertical_spacing_bottom:7,floating_label_top:14,floating_label_animation_duration:".12s",input_padding_h:0,input_padding_v:7,input_border_width:1,margin_top_error_message:6,font_size_input:16,font_size_error:12,font_size_floating_label:12,line_height_input:20,dense_floating_label_vertical_spacing_top:23,dense_floating_label_vertical_spacing_bottom:4,dense_floating_label_top:10,dense_font_size_input:13,dense_font_size_floating_label:13,full_width_input_padding_h:20,full_width_input_padding_v:18,dense_full_width_input_padding_h:16,dense_full_width_input_padding_v:15,dense_full_width_font_size_input:13,color_light_input_text:m(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_light_input_background:"transparent",color_light_highlight_text:m(r.vars.color_primary,r.vars.blend_light_text_primary),color_light_input_bottom_border:m(r.vars.color_light_foreground,r.vars.blend_light_border_light),color_light_input_error_text:m("221, 44, 0"),color_light_input_error_border:m("221, 44, 0"),color_light_input_placeholder:m(r.vars.color_light_foreground,r.vars.blend_light_text_tertiary),color_light_label_text:m(r.vars.color_light_foreground,r.vars.blend_light_text_tertiary),color_light_disabled_label_text:m(r.vars.color_light_foreground,r.vars.blend_light_text_disabled),color_light_readonly_label_text:m(r.vars.color_light_foreground,r.vars.blend_light_text_tertiary),color_light_help_text:m(r.vars.color_light_foreground,r.vars.blend_light_text_tertiary),color_light_required_symbol:m("221, 44, 0"),color_light_focus_border:m(r.vars.color_primary),color_light_counter_ok_border:m(r.vars.color_primary),color_dark_input_text:m(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary),color_dark_input_background:"transparent",color_dark_highlight_text:m(r.vars.color_primary,r.vars.blend_dark_text_primary),color_dark_input_bottom_border:m(r.vars.color_dark_foreground,r.vars.blend_dark_border_light),color_dark_input_error_text:m("222, 50, 38"),color_dark_input_error_border:m("222, 50, 38"),color_dark_input_placeholder:m(r.vars.color_dark_foreground,r.vars.blend_dark_text_tertiary),color_dark_label_text:m(r.vars.color_dark_foreground,r.vars.blend_dark_text_tertiary),color_dark_disabled_label_text:m(r.vars.color_dark_foreground,r.vars.blend_dark_text_disabled),color_dark_readonly_label_text:m(r.vars.color_dark_foreground,r.vars.blend_dark_text_tertiary),color_dark_help_text:m(r.vars.color_dark_foreground,r.vars.blend_dark_text_tertiary),color_dark_required_symbol:m("221, 44, 0"),color_dark_focus_border:m(r.vars.color_primary),color_dark_counter_ok_border:m(r.vars.color_primary)};e.coreTextField=b,e.classes=i,e.vars=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-textfield.js.map
