!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=79)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={setBundleUrl:function(e,t){var n=t.config.bundleUrl,r="",o="",i=void 0,a=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,s=n.indexOf("file:///")>=0&&n.indexOf("WeexDemo.app")>0;if(a)i="file://assets/";else if(s)i=n.substring(0,n.lastIndexOf("/")+1);else{var c=/\/\/([^\/]+?)\//.exec(n),f=/\/\/.+\/([^\/]+?)\//.exec(n);c&&c.length>=2&&(r=c[1]),f&&f.length>=2&&(o=f[1]),i="http://"+r+"/"}var d="./weex.html?page=",l=i;return l="undefined"==typeof navigator||"Mozilla"!==navigator.appCodeName&&"Gecko"!==navigator.product?i+o+"/":"web"===o?d+"/dist/":d,l+e}}},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{name:{default:""},shareCount:{default:""}}}},16:function(e,t){e.exports={card:{flex:.5,padding:10,margin:10,border:"1px solid #ddd",borderBottom:"2px solid rgba(0,0,0,.3)",minWidth:240,minHeight:120,backgroundColor:"#ffffff"},"card-cover":{height:200,marginBottom:20,border:"2px solid #eee"},"card-detail":{flexDirection:"row"},"card-name":{flex:1,fontSize:30,color:"#555555",fontWeight:"bold"},"share-contents":{flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"},"icon-share":{width:36,height:36},"share-count":{marginLeft:10,fontSize:24,color:"#999999"}}},19:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["card"]},[n("image",{staticClass:["card-cover"],attrs:{src:"http://img1.vued.vanthink.cn/vuedf9246c2edc2e4f1fc7caabf6cc84f719.png"}}),n("div",{staticClass:["card-detail"]},[n("text",{staticClass:["card-name"]},[e._v(e._s(e.name))]),n("div",{staticClass:["share-contents"]},[n("image",{staticClass:["icon-share"],attrs:{src:"http://img1.vued.vanthink.cn/vued823de5c04e0cc944dede20370bee354d.png"}}),n("text",{staticClass:["share-count"]},[e._v(e._s(e.shareCount))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},22:function(e,t,n){var r,o,i=[];i.push(n(24)),r=n(23);var a=n(25);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/ali-130257n/www/weex-app-start-kit/src/include/search-bar.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),e.exports=r},23:function(e,t,n){"use strict";var r=weex.requireModule("navigator");e.exports={props:{title:{default:"Title",type:String}},methods:{goHome:function(){r.pop()}}}},24:function(e,t){e.exports={"search-bar":{position:"absolute",top:0,left:0,right:0,display:"flex",flexDirection:"row",height:88,backgroundColor:"#1ba1e2",alignItems:"center",justifyContent:"center",borderBottomWidth:2,borderBottomColor:"#dddddd"},"btn-back":{zIndex:10,flexDirection:"row",alignItems:"center",width:180},"btn-arrow-left":{width:60,height:60,marginLeft:10},"btn-text":{color:"#0f89f5"},"input-wrap":{flex:1,flexDirection:"row",justifyContent:"center",marginLeft:20,marginRight:80,height:58,paddingLeft:20,fontSize:24,backgroundColor:"#ffffff",borderWidth:0,borderRadius:5},input:{flex:1,fontSize:24},"btn-search":{width:54,height:54}}},25:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["search-bar"]},[e.back?n("div",{staticClass:["btn-back"],on:{click:e.goHome}},[n("image",{staticClass:["btn-arrow-left"],attrs:{src:"http://img1.vued.vanthink.cn/vued9c8e7e738ff94abee23eb69d7f1401e9.png"}}),n("text",{staticClass:["btn-text"]},[e._v("返回")])]):e._e(),n("div",{staticClass:["input-wrap"]},[n("input",{staticClass:["input"],attrs:{placeholder:"Search..."},on:{change:e.change}}),n("div",{staticClass:["btn-search"],on:{click:e.searchEvent}},[n("image",{staticStyle:{width:"54px",height:"54px"},attrs:{src:"http://img1.vued.vanthink.cn/vuedea56601586fafc6cb665126938506b35.png"}})])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},32:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(22),i=r(o),a=n(56),s=r(a),c=n(5),f=r(c),d=n(50),l=r(d);e.exports={components:{"search-bar":i.default,footer:f.default,"box-item":l.default,tabbar:s.default},data:function(){for(var e=[],t=0;t<20;t++)e.push({id:t+1,name:"商品"+(t+1),shareCount:"1"+t+".3"+t+"K"});return{list:e,tabs:[{name:"Tab1"},{name:"Tab2"},{name:"Tab3"}]}},methods:{change:function(e){this.place=e.value},changeType:function(e){this.type=e}}}},36:function(e,t){e.exports={container:{position:"relative",flex:1,flexDirection:"column",paddingTop:88,backgroundColor:"#e3e3e3"},map:{flex:1,flexDirection:"row",flexWrap:"wrap",position:"relative",minHeight:400}}},44:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["container"]},[n("search-bar"),n("tabbar",{attrs:{items:e.tabs}}),n("div",{staticClass:["map"]},e._l(e.list,function(e){return n("box-item",{key:e.id,attrs:{name:e.name,shareCount:e.shareCount}})})),n("footer",{attrs:{active:"1"}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},5:function(e,t,n){var r,o,i=[];i.push(n(7)),r=n(6);var a=n(8);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/ali-130257n/www/weex-app-start-kit/src/include/footer.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),e.exports=r},50:function(e,t,n){var r,o,i=[];i.push(n(16)),r=n(12);var a=n(19);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/ali-130257n/www/weex-app-start-kit/src/components/card-item.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),e.exports=r},56:function(e,t,n){var r,o,i=[];i.push(n(64)),r=n(60);var a=n(68);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/ali-130257n/www/weex-app-start-kit/src/include/tab-bar.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),e.exports=r},6:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=weex.requireModule("navigator");t.default={props:{active:{default:0}},data:function(){return{type:"",items:[{name:"Home",url:"home.js",icon:"http://img1.vued.vanthink.cn/vued40a1db1fb50417e72fc59c3535de9d1f.png"},{name:"Shop",url:"shop.js",icon:"http://img1.vued.vanthink.cn/vuede3edd4e57e450d00b3fa0e0fd82bc6af.png"},{name:"Video",url:"video.js",icon:"http://img1.vued.vanthink.cn/vueda026977b63cd85ebbcc0309a2f592082.png"},{name:"Profile",url:"profile.js",icon:"http://img1.vued.vanthink.cn/vued78336017bc3e794059a4fea0fe1450f9.png"}]}},methods:{changeUrl:function(e){console.log(this.items[e].url);var t=i.default.setBundleUrl(this.items[e].url,weex);console.log(t),a.push({url:t})}}}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{items:{default:[]}},data:function(){return{tabIndex:0}},methods:{tabClick:function(e){this.tabIndex=e,this.$emit("tabClick",e)}}}},64:function(e,t){e.exports={tabs:{flexDirection:"row",height:88,backgroundColor:"#ffffff",borderBottom:"2px solid rgba(0,0,0,.25)"},tab:{flex:1,justifyContent:"center",alignItems:"center"},"tab-text":{colro:"#444"}}},68:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["tabs"]},e._l(e.items,function(t,r){return n("div",{staticClass:["tab"],on:{click:function(t){e.tabClick(r)}}},[e.tabIndex!=r?n("text",{staticClass:["tab-text"]},[e._v(e._s(t.name))]):e._e(),e.tabIndex==r?n("text",{staticClass:["tab-text","active"]},[e._v(e._s(t.name))]):e._e()])}))},staticRenderFns:[]},e.exports.render._withStripped=!0},7:function(e,t){e.exports={footer:{flexDirection:"row",alignItems:"center",zIndex:200,position:"fixed",bottom:0,left:0,right:0,height:100,lineHeight:100,backgroundColor:"#ffffff",borderTopWidth:1,borderTopStyle:"solid",borderTopColor:"rgba(0,0,0,0.15)"},"footer-item":{flex:1,justifyContent:"center",alignItems:"center"},"footer-item-icon":{width:54,height:54},"btn-sm-text":{color:"#777777",fontSize:20},active:{color:"#1ba1e2"}}},79:function(e,t,n){var r,o,i=[];i.push(n(36)),r=n(32);var a=n(44);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/ali-130257n/www/weex-app-start-kit/src/shop.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),e.exports=r,e.exports.el="true",new Vue(e.exports)},8:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["footer"]},e._l(e.items,function(t,r){return n("div",{key:t.url,staticClass:["footer-item"],on:{click:function(t){e.changeUrl(r)}}},[n("image",{staticClass:["footer-item-icon"],attrs:{src:t.icon}}),e.active!=r?n("text",{staticClass:["btn-sm-text"]},[e._v(e._s(t.name))]):e._e(),e.active==r?n("text",{staticClass:["btn-sm-text","active"]},[e._v(e._s(t.name))]):e._e()])}))},staticRenderFns:[]},e.exports.render._withStripped=!0}});