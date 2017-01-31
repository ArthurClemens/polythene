"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),require("polythene/common/object.assign");var _events=require("polythene/common/events"),_events2=_interopRequireDefault(_events),_mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_dialog=require("polythene/dialog/dialog"),_dialog2=_interopRequireDefault(_dialog),_transition=require("polythene/common/transition"),_transition2=_interopRequireDefault(_transition),_shadow=require("polythene/shadow/shadow"),_shadow2=_interopRequireDefault(_shadow),_isomorphic=require("polythene/common/isomorphic"),_isomorphic2=_interopRequireDefault(_isomorphic);require("polythene/dialog/theme/theme");var CSS_CLASSES={block:"pe-dialog",visible:"pe-dialog--visible",body:"pe-dialog__body",fullscreen:"pe-dialog--fullscreen",content:"pe-dialog__content",header:"pe-dialog__header",footer:"pe-dialog__footer",footerHigh:"pe-dialog__footer--high",title:"pe-dialog__title",actions:"pe-dialog__actions",hasBackdrop:"pe-dialog--backdrop",hasTopOverflow:"pe-dialog--overflow-top",hasBottomOverflow:"pe-dialog--overflow-bottom",menuContent:"pe-menu__content"},SCROLL_WATCH_TIMER=150,updateScrollState=function(ctrl){var scroller=ctrl.scrollEl;scroller&&(ctrl.topOverflow=scroller.scrollTop>0,ctrl.bottomOverflow=scroller.scrollHeight-(scroller.scrollTop+scroller.getBoundingClientRect().height)>0)},updateFooterState=function(ctrl){if(!_isomorphic2.default.isServer()){var footerEl=ctrl.footerEl;if(footerEl){var style=window.getComputedStyle(footerEl),height=footerEl.getBoundingClientRect().height,minHeight=parseInt(style.minHeight,10);height>minHeight?footerEl.classList.add(CSS_CLASSES.footerHigh):footerEl.classList.remove(CSS_CLASSES.footerHigh)}}},show=function(ctrl,opts){var id=ctrl.instanceId;return ctrl.isTransitioning=!0,_transition2.default.show(Object.assign({},opts,{el:ctrl.el,showClass:CSS_CLASSES.visible})).then(function(){ctrl.isTransitioning=!1,ctrl.visible=!0,ctrl.didShow&&ctrl.didShow(id)})},hide=function(ctrl,opts){var id=ctrl.instanceId;return ctrl.isTransitioning=!0,_transition2.default.hide(Object.assign({},opts,{el:ctrl.el,showClass:CSS_CLASSES.visible})).then(function(){_dialog2.default.remove(id),ctrl.isTransitioning=!1,ctrl.visible=!1,ctrl.didHide&&ctrl.didHide(id),setTimeout(_mithril2.default.redraw,0)})},createViewContent=function(ctrl,opts){var style={},bodyOpts=opts.body||opts.menu;return(0,_mithril2.default)("div",{class:CSS_CLASSES.body,style:style,config:function(el,inited){inited||(ctrl.scrollEl=el)},onscroll:function(){ctrl.isScrolling=!0,updateScrollState(ctrl),clearTimeout(ctrl.scrollWatchId),ctrl.scrollWatchId=setTimeout(function(){ctrl.isScrolling=!1},SCROLL_WATCH_TIMER)}},bodyOpts)},createView=function(ctrl){var opts=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},bodyOpts=opts.body||opts.menu,updateContentOnScroll=opts.updateContentOnScroll||!1,ignoreContent=!updateContentOnScroll&&ctrl.isScrolling,tag=opts.tag||"form",update=function(){updateScrollState(ctrl),updateFooterState(ctrl),_mithril2.default.redraw()},props=Object.assign({},{class:[CSS_CLASSES.block,opts.fullscreen?CSS_CLASSES.fullscreen:null,opts.backdrop?CSS_CLASSES.hasBackdrop:null,ctrl.topOverflow||opts.borders?CSS_CLASSES.hasTopOverflow:null,ctrl.bottomOverflow||opts.borders?CSS_CLASSES.hasBottomOverflow:null,ctrl.visible?CSS_CLASSES.visible:null,opts.class].join(" "),id:opts.id||"",config:function(el,inited,context,vdom){if(!inited){opts.config&&opts.config(el,inited,context,vdom),ctrl.el=el;var cleanup=function(){_events2.default.unsubscribe("resize",update),_events2.default.unsubscribe("keydown",handleEscape)},handleEscape=function(e){opts.fullscreen||opts.backdrop||27===e.which&&(cleanup(),hide(ctrl,Object.assign({},opts,{hideDelay:0})))};_events2.default.subscribe("resize",update),_events2.default.subscribe("keydown",handleEscape),context.onunload=function(){cleanup()},updateScrollState(ctrl),updateFooterState(ctrl),show(ctrl,opts).then(function(){updateScrollState(ctrl),updateFooterState(ctrl),(ctrl.topOverflow||ctrl.bottomOverflow)&&setTimeout(_mithril2.default.redraw,0)})}},onclick:function(e){e.target===ctrl.el&&(opts.modal||ctrl.isTransitioning||hide(ctrl,Object.assign({},opts,{hideDelay:0})))}},opts.formOptions?opts.formOptions:null),body=bodyOpts?ignoreContent?{subtree:"retain"}:createViewContent(ctrl,opts):null,content=(0,_mithril2.default)("div",{class:[CSS_CLASSES.content,opts.menu?CSS_CLASSES.menuContent:null].join(" ")},[opts.fullscreen?null:_mithril2.default.component(_shadow2.default,{z:ctrl.z,animated:!0}),opts.fullscreen?null:opts.title?(0,_mithril2.default)("div",{class:CSS_CLASSES.header,config:function(el){ctrl.headerHeight=el.scrollHeight}},[(0,_mithril2.default)("div",{class:CSS_CLASSES.title},opts.title)]):null,body,opts.fullscreen?null:opts.footer?(0,_mithril2.default)("div",{class:CSS_CLASSES.footer,config:function(el,inited){ctrl.footerHeight=el.scrollHeight,inited||(ctrl.footerEl=el)}},[(0,_mithril2.default)("div",{class:CSS_CLASSES.actions},opts.footer)]):null]);return(0,_mithril2.default)(tag,props,[opts.before,content,opts.after])},component={controller:function(){var instanceData=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},opts=instanceData.opts||{},z=void 0!==opts.z?opts.z:3;return Object.assign({},instanceData,{instanceId:instanceData.instanceId,z:z,scrollEl:null,footerEl:null,topOverflow:!1,bottomOverflow:!1,scrollWatchId:0,isScrolling:!1,headerHeight:0,footerHeight:0,el:null,visible:!!instanceData.show,isTransitioning:!1})},view:function(ctrl,instanceData){var opts="function"==typeof instanceData.opts?instanceData.opts():instanceData.opts;return instanceData.hide&&!ctrl.isTransitioning&&hide(ctrl,opts),createView(ctrl,opts)}};exports.default=component,module.exports=exports.default;
//# sourceMappingURL=dialog-instance.js.map