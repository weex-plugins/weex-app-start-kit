// { "framework": "Vue" } 

!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=69)}({26:function(e,t,r){"use strict";var n=weex.requireModule("navigator");e.exports={props:{imgsrc:{type:String},keyword:{type:String},desc:{type:String},url:{type:String}},methods:{redirect:function(){n.push({url:this.url})}}}},37:function(e,t){e.exports={item:{height:460,margin:40,marginTop:20,backgroundColor:"#ffffff",borderWidth:1,borderBottomWidth:2,borderColor:"rgba(0,0,0,0.2)"},"item-bannar":{height:300,borderWidth:10,borderColor:"#ffffff"},"item-desc":{flex:1,flexDirection:"row",paddingTop:15,fontSize:36,color:"#555555",textAlign:"center"},inner:{flex:.7,flexDirection:"column",paddingLeft:10,alignItems:"flex-start"},keyword:{fontSize:40,color:"#1995f9"},details:{fontSize:24,color:"#333333"},"btn-wrap":{flex:.4,justifyContent:"center",alignSelf:"right"},btn:{alignSelf:"center",marginLeft:10,display:"inline-block",backgroundColor:"#1995f9",color:"#ffffff",padding:20,paddingTop:10,paddingBottom:10,borderRadius:30,fontSize:24}}},45:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["item"],on:{click:e.redirect}},[r("image",{staticClass:["item-bannar"],attrs:{src:e.imgsrc}}),r("div",{staticClass:["item-desc"]},[r("div",{staticClass:["inner"]},[r("text",{staticClass:["keyword"]},[e._v(e._s(e.keyword))]),r("text",{staticClass:["details"]},[e._v(e._s(e.desc))])]),e._m(0)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["btn-wrap"]},[r("text",{staticClass:["btn"]},[e._v("查看详情")])])}]},e.exports.render._withStripped=!0},69:function(e,t,r){var n,i,o=[];o.push(r(37)),n=r(26);var s=r(45);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/ali-130257n/www/weex-app-start-kit/src/components/article-list-item.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),e.exports=n,e.exports.el="true",new Vue(e.exports)}});