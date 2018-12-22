!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core-css"),require("polythene-theme"),require("polythene-css-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme","polythene-css-shadow"],n):n((e=e||self).polythene={},e["polythene-core-css"],e["polythene-theme"],e["polythene-css-shadow"])}(this,function(e,n,t,i){"use strict";var o="pe-menu";const a={general_styles:e=>[]},r=e=>({["color_"+e+"_background"]:(t,i)=>[n.sel(t,{" .pe-menu__panel":{"background-color":i["color_"+e+"_background"]}})],["color_"+e+"_backdrop_background"]:(t,i)=>[n.sel(t,{" .pe-menu__backdrop":{"background-color":i["color_"+e+"_backdrop_background"]}})]}),_=Object.assign({},a,r("light")),s=Object.assign({},a,r("dark"));var p=n.createColor({varFns:{lightTintFns:_,darkTintFns:s}});const l={top_menu:!1},c=Object.assign({},{backdrop:void 0,z:t.vars.z_menu},l,i.sharedVars);var d=Object.assign({},{general_styles:!0,animation_delay:"0s",animation_duration:".180s",animation_hide_css:"opacity: 0;",animation_hide_origin_effect_css:"transform: scale(0.75);",animation_show_css:"opacity: 1;",animation_show_origin_effect_css:"transform: scale(1);",animation_timing_function:"ease-in-out",border_radius:t.vars.unit_block_border_radius,height:void 0,min_width:1.5,width_factor:t.vars.grid_unit_menu,widths:[1,1.5,2,3,4,5,6,7],color_light_background:n.rgba(t.vars.color_light_background),color_dark_background:n.rgba(t.vars.color_dark_background),color_light_backdrop_background:"rgba(0, 0, 0, .1)",color_dark_backdrop_background:"rgba(0, 0, 0, .5)"},c);const u=e=>()=>({textAlign:e?"right":"left"}),m=u(!1),h=u(!0),g=e=>{return"pe-menu--width-"+e.toString().replace(".","-")},b=({vars:e,width:n,value:t})=>{const i=((e,n)=>n<e.min_width?e.min_width:n)(e,n);return{["."+g(i)]:{" .pe-menu__panel":{width:t||e.width_factor*i+"px"}}}},f=(e,i)=>n.sel(e,[i.widths.map(e=>b({vars:i,width:e})),{" .pe-menu__panel":{minWidth:t.vars.grid_unit_menu*i.min_width+"px"}}]),y=e=>n.sel(e,{" .pe-menu__backdrop":{display:"block"}}),k=(e,t)=>n.sel(e,[t.widths.map(e=>b({vars:t,width:e,value:"100vw"})),n.createMarker(t,l),{" .pe-menu__panel":{position:"fixed",width:"100vw",top:0,left:0,right:0,bottom:"auto",borderTopLeftRadius:0,borderTopRightRadius:0}}]),w=(e,t)=>n.sel(e,{".pe-menu--floating":{" .pe-menu__panel, .pe-menu__backdrop":{zIndex:t.z}}}),v={general_styles:(e,t)=>[n.sel(e,[m(t),{position:"static",".pe-menu--width-auto":{width:"auto"},".pe-menu--permanent":{" .pe-menu__panel":{opacity:1,position:"relative"}},".pe-menu--floating":{" .pe-menu__panel":{transitionProperty:"opacity, transform"}}," .pe-menu__panel":{transitionProperty:"all",opacity:0,position:"absolute"}," .pe-menu__backdrop":{display:"none",transitionProperty:"all",position:"fixed",top:0,right:0,bottom:0,left:0,opacity:0},".pe-menu--backdrop":y(e),".pe-menu--visible .pe-menu__backdrop":{opacity:1},".pe-menu--top-menu":k(e,t)," .pe-menu__content":{overflow:"auto",width:"100%",height:"100%"},".pe-menu--full-height":{height:"100%"," .pe-menu__panel":{height:"100%"}}}]),{[n.selectorRTL(e)]:h(t)}],animation_delay:(e,t)=>[n.sel(e,{" .pe-menu__panel, .pe-menu__backdrop":{transitionDelay:t.animation_delay}})],animation_duration:(e,t)=>[n.sel(e,{" .pe-menu__panel, .pe-menu__backdrop":{transitionDuration:t.animation_duration}})],animation_timing_function:(e,t)=>[n.sel(e,{" .pe-menu__panel, .pe-menu__backdrop":{transitionTimingFunction:t.animation_timing_function}})],animation_show_css:(e,t)=>[n.sel(e,{".pe-menu--visible":{" .pe-menu__panel":t.animation_show_css}})],animation_hide_css:(e,t)=>[n.sel(e,{" .pe-menu__panel":t.animation_hide_css})],animation_show_origin_effect_css:(e,t)=>[n.sel(e,{".pe-menu--origin.pe-menu--visible":{" .pe-menu__panel":t.animation_show_origin_effect_css}})],animation_hide_origin_effect_css:(e,t)=>[n.sel(e,{".pe-menu--origin:not(.pe-menu--visible)":{" .pe-menu__panel":t.animation_hide_origin_effect_css}})],height:(e,t)=>[void 0!==t.height&&n.sel(e,{" .pe-menu__panel":{height:t.height}})],widths:(e,n)=>[f(e,n)],min_width:(e,n)=>[f(e,n)],width_factor:(e,n)=>[f(e,n)],border_radius:(e,t)=>[n.sel(e,{" .pe-menu__panel":{borderRadius:t.border_radius+"px"}})],backdrop:(e,n)=>[n.backdrop&&y(e)],top_menu:(e,n)=>[n.top_menu&&k(e,n)],z:(e,n)=>[n.z&&w(e,n)],...i.sharedVarFns};var x=n.createLayout({varFns:v});const j=[x,p],z=`.${o}`,F=n.styler.createAddStyle(z,j,d),S=n.styler.createGetStyle(z,j,d);n.styler.addStyle({selectors:[z],fns:j,vars:d}),e.addStyle=F,e.color=p,e.getStyle=S,e.layout=x,e.vars=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-menu.js.map
