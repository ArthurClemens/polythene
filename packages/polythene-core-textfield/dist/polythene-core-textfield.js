!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e=e||self).polythene={},e["polythene-core"])}(this,function(e,t){"use strict";function l(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){l(e,t,n[t])})}return e}var a={component:"pe-textfield",counter:"pe-textfield__counter",error:"pe-textfield__error",errorPlaceholder:"pe-textfield__error-placeholder",focusHelp:"pe-textfield__help-focus",help:"pe-textfield__help",input:"pe-textfield__input",inputArea:"pe-textfield__input-area",label:"pe-textfield__label",optionalIndicator:"pe-textfield__optional-indicator",requiredIndicator:"pe-textfield__required-indicator",hasCounter:"pe-textfield--counter",hasFloatingLabel:"pe-textfield--floating-label",hasFullWidth:"pe-textfield--full-width",hideClear:"pe-textfield--hide-clear",hideSpinner:"pe-textfield--hide-spinner",hideValidation:"pe-textfield--hide-validation",isDense:"pe-textfield--dense",isRequired:"pe-textfield--required",stateDirty:"pe-textfield--dirty",stateDisabled:"pe-textfield--disabled",stateFocused:"pe-textfield--focused",stateInvalid:"pe-textfield--invalid",stateReadonly:"pe-textfield--readonly"},r={invalid:!1,message:void 0},u=function(e,t){var l=r;return e.isTouched()&&e.isInvalid()&&0===e.inputEl().value.length&&t.validateResetOnClear&&(e.isTouched(!1),e.isInvalid(!1),e.error(void 0)),!l.invalid&&t.counter&&(l=function(e,t){return{invalid:e.inputEl().value.length>t.counter,message:t.error}}(e,t)),!l.invalid&&e.inputEl()&&e.inputEl().checkValidity&&(l=function(e,t){return{invalid:!e.inputEl().checkValidity(),message:t.error}}(e,t)),!l.invalid&&t.validate&&(l=function(e,t){if(!e.inputEl())return r;var l=t.validate(e.inputEl().value);return{invalid:l&&!l.valid,message:l&&l.error}}(e,t)),l},o=function(e){var t=e.state,l=e.attrs,n=void 0!==l.valid?{invalid:!l.valid,message:l.error}:t.isTouched()||l.validateAtStart?u(t,l):r,i=t.isInvalid();t.error(n.message),n.invalid!==i&&t.isInvalid(n.invalid),n.invalid||t.error(void 0)},d=function(e){var t=e.state,l=e.attrs;if(l.onChange){var i=u(t,l);l.onChange({focus:t.hasFocus(),dirty:t.isDirty(),el:t.inputEl(),invalid:i.invalid,error:i.error,value:t.inputEl().value,setInputState:function(l){var i=void 0!==l.value&&l.value!==t.inputEl().value,a=void 0!==l.focus&&l.focus!==t.hasFocus();(i||a)&&t.setInputState(n({},l,{vnode:e}))}})}},s=function(e,t){return e.ignoreEvents&&-1!==e.ignoreEvents.indexOf(t)},p=Object.freeze({getElement:function(e){return e.attrs.element||"div"},getInitialState:function(e,t,l){var n=l.keys,i=e.attrs,a=void 0!==i.defaultValue&&null!==i.defaultValue?i.defaultValue.toString():void 0!==i.value&&null!==i.value?i.value.toString():"",r=t(null),u=t(null),o=t({}),d=t(i.error),s=t(!1),p=t(!1),c=t(""!==a),v=t(!1);return{defaultValue:a,didSetFocusTime:0,el:r,error:d,hasFocus:s,inputEl:u,isDirty:c,isInvalid:v,isTouched:p,previousValue:t(void 0),setInputState:o,showErrorPlaceholder:!!(void 0!==i.valid||i.validate||i.min||i.max||i[n.minlength]||i[n.maxlength]||i.required||i.pattern),redrawOnUpdate:t.merge([u,v,c])}},onMount:function(e){if(e.dom){var t=e.dom,l=e.state,n=e.attrs;l.el(t);var i=n.multiLine?"textarea":"input",a=t.querySelector(i);e.state.inputEl(a),l.inputEl().value=l.defaultValue,l.setInputState.map(function(e){var t=e.vnode,i=e.type,a=e.focus,r=e.value;t&&(void 0!==r&&(l.inputEl().value=r),void 0!==a&&(l.hasFocus(a),a?l.inputEl().focus():l.inputEl().blur()),"input"===i&&(n.validateOnInput||n.counter)&&l.isTouched(l.inputEl().value!==l.defaultValue),"input"!==i&&l.isTouched(l.inputEl().value!==l.defaultValue),"onblur"===i&&l.isTouched(!0),l.isDirty(""!==l.inputEl().value),o(t),d(t),l.previousValue(l.inputEl().value))}),d(e)}},onUpdate:function(e){var t=e.state,l=e.attrs;o(e);var n=t.inputEl(),i=void 0!==l.value&&null!==l.value?l.value:n?n.value:t.previousValue(),a=null==i?"":i.toString();n&&t.previousValue()!==a&&(n.value=a,t.previousValue(a),t.setInputState({vnode:e,type:"input"}))},createProps:function(e,l){var i=l.keys,r=e.state,u=e.attrs,o=r.isInvalid();return n({},t.filterSupportedAttributes(u),{className:[a.component,o?a.stateInvalid:"",r.hasFocus()?a.stateFocused:"",r.isDirty()?a.stateDirty:"",u.floatingLabel?a.hasFloatingLabel:"",u.disabled?a.stateDisabled:"",u.readonly?a.stateReadonly:"",u.dense?a.isDense:"",u.required?a.isRequired:"",u.fullWidth?a.hasFullWidth:"",u.counter?a.hasCounter:"",!1!==u.hideSpinner&&void 0!==u.hideSpinner?a.hideSpinner:"",!1!==u.hideClear&&void 0!==u.hideClear?a.hideClear:"",u.hideValidation?a.hideValidation:"","dark"===u.tone?"pe-dark-tone":null,"light"===u.tone?"pe-light-tone":null,u.className||u[i.class]].join(" ")})},createContent:function(e,t){var r=t.renderer,u=t.keys,o=e.state,p=i({},e.attrs,e.attrs.domAttributes),c=o.inputEl(),v=p.error||o.error(),f=o.isInvalid(),h=p.multiLine?"textarea":"input",y=p.multiLine?null:p.type&&"submit"!==p.type&&"search"!==p.type?p.type:"text",m=f&&void 0!==v,b=p.disabled||p[u.readonly],x=p.required&&""!==p.requiredIndicator?r("span",{key:"required",className:a.requiredIndicator},p.requiredIndicator||"*"):null,g=!p.required&&p.optionalIndicator?r("span",{key:"optional",className:a.optionalIndicator},p.optionalIndicator):null,E=p.label?[p.label,x,g]:null;return[r("div",{className:a.inputArea,key:"input-area"},[E?r("label",{key:"label",className:a.label},E):null,r(h,n({},{key:"input",className:a.input,disabled:p.disabled},y?{type:y}:null,p.name?{name:p.name}:null,s(p,u.onclick)?null:l({},u.onclick,function(){b||(o.setInputState({vnode:e,focus:!0}),d(e))}),s(p,u.onfocus)?null:l({},u.onfocus,function(){b||(o.setInputState({vnode:e,focus:!0}),o.el()&&o.el().classList.add(a.stateFocused),d(e))}),s(p,u.onblur)?null:l({},u.onblur,function(){o.setInputState({vnode:e,type:"onblur",focus:!1}),o.el().classList.remove(a.stateFocused)}),s(p,u.oninput)?null:l({},u.oninput,function(){o.setInputState({vnode:e,type:"input"})}),s(p,u.onkeydown)?null:l({},u.onkeydown,function(t){"Enter"===t.key?o.isTouched(!0):"Escape"!==t.key&&"Esc"!==t.key||o.setInputState({vnode:e,focus:!1})}),p.events?p.events:null,void 0!==p.required&&p.required?{required:!0}:null,void 0!==p[u.readonly]&&p[u.readonly]?l({},u.readonly,!0):null,void 0!==p.pattern?{pattern:p.pattern}:null,void 0!==p[u.maxlength]?l({},u.maxlength,p[u.maxlength]):null,void 0!==p[u.minlength]?l({},u.minlength,p[u.minlength]):null,void 0!==p.max?{max:p.max}:null,void 0!==p.min?{min:p.min}:null,void 0!==p[u.autofocus]?l({},u.autofocus,p[u.autofocus]):null,void 0!==p[u.tabindex]?l({},u.tabindex,p[u.tabindex]):null,void 0!==p.rows?{rows:p.rows}:null,void 0!==p.placeholder?{placeholder:p.placeholder}:null,void 0!==p.domAttributes?i({},p.domAttributes):null))]),p.counter?r("div",{key:"counter",className:a.counter},(c&&c.value.length||0)+" / "+p.counter):null,p.help&&!m?r("div",{key:"help",className:[a.help,p.focusHelp?a.focusHelp:null].join(" ")},p.help):null,m?r("div",{key:"error",className:a.error},v):o.showErrorPlaceholder&&!p.help?r("div",{key:"error-placeholder",className:a.errorPlaceholder}):null]}});e.coreTextField=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-textfield.js.map
