!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core"),require("polythene-utilities")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-utilities"],e):e((t=t||self).polythene={},t["polythene-core"],t["polythene-utilities"])}(this,function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var a={component:"pe-tabs",indicator:"pe-tabs__indicator",scrollButton:"pe-tabs__scroll-button",scrollButtonAtEnd:"pe-tabs__scroll-button-end",scrollButtonAtStart:"pe-tabs__scroll-button-start",tab:"pe-tab",tabContent:"pe-tabs__tab-content",tabRow:"pe-tabs__row",activeSelectable:"pe-tabs__active--selectable",isAtEnd:"pe-tabs--end",isAtStart:"pe-tabs--start",isAutofit:"pe-tabs--autofit",isMenu:"pe-tabs--menu",scrollable:"pe-tabs--scrollable",compactTabs:"pe-tabs--compact",tabHasIcon:"pe-tabs__tab--icon",tabRowCentered:"pe-tabs__row--centered",tabRowIndent:"pe-tabs__row--indent",label:"pe-button__label"},l=function(t){var e=t.attrs;return e.content?e.content:e.tabs?e.tabs:e.children||t.children||[]},i=function(t){var e=l(t),n=t.attrs,o=Array.isArray(e)?e.reduce(function(t,e,n){return void 0===t&&!e.disabled&&e.selected?n:t},void 0):void 0;if(void 0!==o)return o;var r=void 0!==n.selectedTabIndex?n.selectedTabIndex:void 0!==n.selectedTab?n.selectedTab:void 0;return void 0!==r?r:0},s=function(t,e,n,o){n.stopPropagation(),n.preventDefault();var r,a,l,i=t.selectedTabIndex(),s=(r=i,a=t.tabs,l=a.length-1,{backward:Math.max(r-1,0),forward:Math.min(r+1,l)})[o];s!==i?d(t,e,s,!0):c(t,s)},c=function(t,e){var o=t.tabs,r=t.tabRowEl,a=o.slice(0,e).reduce(function(t,e){return t+e.dom.getBoundingClientRect().width},0),l=r.getBoundingClientRect().width,i=r.scrollWidth-l,s=t.isRTL?-1*Math.min(a,i):Math.min(a,i),c=r.scrollLeft;if(c!==s){var d=Math.abs(c-s)/600;setTimeout(function(){n.scrollTo({element:r,to:s,duration:Math.max(.5,d),direction:"horizontal"}).then(function(){return u(t)})},150)}},u=function(t){var e=t.tabRowEl,n=e.scrollLeft,o=t.selectedTabIndex(),r=t.tabsEl,a=t.tabs.length-1,l=0===e.scrollLeft&&0===o,i=n>=e.scrollWidth-r.getBoundingClientRect().width-1&&o===a;t.scrollButtonAtStart(l),t.scrollButtonAtEnd(i)},d=function(t,e,n,o){if(t.selectedTabIndex(n),t.tabs.length){var r=t.tabs[n].dom;r&&t.tabIndicatorEl&&t.tabsEl&&function(t,e,n){var o=n.tabsEl.getBoundingClientRect(),r=t.getBoundingClientRect(),a=n.managesScroll?r.height:0,l=n.isRTL?r.right-o.right+n.tabRowEl.scrollLeft+a:r.left-o.left+n.tabRowEl.scrollLeft-a,i=1/(o.width-2*a)*r.width,s="translate(".concat(l,"px, 0) scaleX(").concat(i,")"),c=e?.25:0,u=n.tabIndicatorEl.style;u["transition-duration"]=c+"s",u.transform=s}(r,o,t),t.managesScroll&&u(t),c(t,n),e.onChange&&e.onChange({index:n,options:t.tabs[n].attrs,el:r})}},b=function(t,e){return t<e?1:t>e?-1:0},f=Object.freeze({getInitialState:function(t,n){var o=t.attrs;void 0!==o.selectedTab&&e.deprecation("Tabs",{option:"selectedTab",newOption:"selectedTabIndex"});var r=n(i(t)||0),a=n(!0),l=n(!0);return{tabsEl:void 0,tabRowEl:void 0,tabs:[],tabRow:void 0,tabIndicatorEl:void 0,selectedTabIndex:r,previousSelectedTabIndex:void 0,managesScroll:o.scrollable&&!e.isTouch,scrollButtonAtStart:a,scrollButtonAtEnd:l,scrollButtons:{start:void 0,end:void 0},registerTabButton:function(t){return function(e,n){return t.tabs[e]=n}},registerScrollButton:function(t){return function(e,n){return t.scrollButtons[e]=n}},isRTL:!1,cleanUp:void 0,redrawOnUpdate:n.merge([r,a,l])}},onMount:function(t){if(t.dom){var n=t.dom,o=t.state,r=t.attrs;o.tabsEl=n,o.isRTL=e.isRTL({element:n}),r.hideIndicator||(o.tabIndicatorEl=n.querySelector(".".concat(a.indicator))),o.tabRowEl=n.querySelector(".".concat(a.tabRow));var l=function(){return function(){if(o.tabs&&r.largestWidth){var t=o.tabs.map(function(t){return t.dom.getBoundingClientRect().width}).sort(b)[0];o.tabs.forEach(function(e){return e.dom.style.width=t+"px"})}}(),d(o,r,o.selectedTabIndex(),!1)},i=function(t){var e=t.name;return"active"===e||"inactive"===e?l():null};e.subscribe("resize",l),e.subscribe("webfontloader",i),o.cleanUp=function(){return e.unsubscribe("resize",l),e.unsubscribe("webfontloader",i)},Promise.resolve().then(l)}},onUnMount:function(t){return t.state.cleanUp()},createProps:function(t,n){var o=n.keys,l=t.state,s=t.attrs,c=!s.scrollable&&!s.centered&&!!s.autofit,u=i(t);return void 0!==u&&l.previousSelectedTabIndex!==u&&d(l,s,u,!0),l.previousSelectedTabIndex=u,r({},e.filterSupportedAttributes(s),{className:[a.component,s.scrollable?a.scrollable:null,l.scrollButtonAtStart()?a.isAtStart:null,l.scrollButtonAtEnd()?a.isAtEnd:null,s.activeSelected?a.activeSelectable:null,c?a.isAutofit:null,s.compact?a.compactTabs:null,s.menu?a.isMenu:null,"dark"===s.tone?"pe-dark-tone":null,"light"===s.tone?"pe-light-tone":null,s.className||s[o.class]].join(" ")})},createContent:function(t,e){var n=e.renderer,i=e.keys,c=e.Tab,u=e.ScrollButton,b=t.state,f=t.attrs,p=l(t);0===p.length&&console.error("No tabs specified");var v,h,g=p.map(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,o=r({},t,{selected:e===b.selectedTabIndex(),animateOnTap:!1!==f.animateOnTap},f.all,{index:e,key:t.key||"tab-".concat(e),register:b.registerTabButton(b),onSelect:function(){return d(b,f,e,!f.noIndicatorSlide)}});return n(c,o)});f.scrollable&&(v=n(u,r({},{key:"backward",icon:f.scrollIconBackward,className:a.scrollButtonAtStart,position:"start",register:b.registerScrollButton(b),events:o({},i.onclick,function(t){return s(b,f,t,"backward")}),isRTL:b.isRTL})),h=n(u,r({},{key:"forward",icon:f.scrollIconForward,className:a.scrollButtonAtEnd,position:"end",register:b.registerScrollButton(b),events:o({},i.onclick,function(t){return s(b,f,t,"forward")}),isRTL:b.isRTL})));var m=f.hideIndicator?null:n("div",{key:"indicator",className:a.indicator});return[f.scrollable?v:null,n("div",{key:"tabrow",className:[a.tabRow,f.centered?a.tabRowCentered:null,f.scrollable?a.tabRowIndent:null].join(" ")},[g,m]),f.scrollable?h:null]}}),p=Object.freeze({onMount:function(t){if(t.dom){var e=t.dom,n=t.attrs;n.register(n.index,{attrs:n,dom:e})}},createProps:function(t,e){var n=e.renderer,l=e.keys,i=e.Icon,s=t.attrs,c=s.events||{};return c[l.onclick]=c[l.onclick]||function(){},r({},s,{content:n("div",{className:a.tabContent},[s.icon?n(i,s.icon):null,s.label?n("div",{className:a.label},n("span",s.label)):null]),className:[a.tab,s.icon&&s.label?a.tabHasIcon:null,s.className||s[l.class]].join(" "),selected:s.selected,wash:!1,ripple:!0,events:r({},c,o({},l.onclick,function(t){s.onSelect(),c[l.onclick](t)}))})},createContent:function(t){return t.children}}),v='<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',h='<svg width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',g=Object.freeze({onMount:function(t){if(t.dom){var e=t.dom,n=t.attrs;n.register(n.position,e)}},createProps:function(t,e){var n=e.renderer,o=e.keys,r=t.attrs,l="start"===r.position?r.icon||{svg:{content:n.trust(r.isRTL?h:v)}}:r.icon||{svg:{content:n.trust(r.isRTL?v:h)}};return{className:[a.scrollButton,r.className||r[o.class]].join(" "),icon:l,ripple:{center:!0},events:r.events}}});t.coreTabs=f,t.coreTab=p,t.coreScrollButton=g,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-tabs.js.map
