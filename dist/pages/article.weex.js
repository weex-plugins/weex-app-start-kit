!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=75)}({1:function(t,e,n){var r,i,a=[];a.push(n(3)),r=n(2);var s=n(4);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/ali-130257n/www/weex-app-start-kit/src/include/navbar.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i.style=i.style||{},a.forEach(function(t){for(var e in t)i.style[e]=t[e]}),t.exports=r},10:function(t,e){t.exports={article:{paddingBottom:180},"article-bannar":{height:500,marginBottom:20},"article-title":{fontSize:48,fontWeight:"500",margin:20},"user-info":{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:"center"},"user-avatar":{width:65,height:65},"user-name":{color:"#333333",fontSize:32,marginLeft:20},"article-contents":{padding:20},"article-contents-h1":{margin:20,color:"#333333"},"article-contents-p":{fontSize:36,color:"#666666",lineHeight:54},"article-feedback":{flexDirection:"row"},"feedback-item":{alignItems:"center",flexDirection:"row",padding:20},"feedback-icon":{width:54,height:54},number:{marginLeft:20,fontSize:32,color:"#999999"}}},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["article"],on:{click:function(t){}}},[t._m(0),n("text",{staticClass:["article-title"]},[t._v(t._s(t.title))]),n("div",{staticClass:["user-info"]},[n("image",{staticClass:["user-avatar"],attrs:{src:t.user.avatar}}),n("text",{staticClass:["user-name"]},[t._v(t._s(t.user.username))])]),n("div",{staticClass:["article-contents"]},[n("text",{staticClass:["article-contents-p"]},[t._v(t._s(t.contents))])]),n("div",{staticClass:["article-feedback"]},[n("div",{staticClass:["feedback-item"]},[n("image",{staticClass:["feedback-icon"],attrs:{src:"http://img1.vued.vanthink.cn/vueddf4a54a82030df94baaa20d8cca68892.png"}}),n("text",{staticClass:["number"]},[t._v(t._s(t.comments))])]),n("div",{staticClass:["feedback-item"]},[n("image",{staticClass:["feedback-icon"],attrs:{src:"http://img1.vued.vanthink.cn/vued7f6073b9ef97d0d48e79f282837d2b01.png"}}),n("text",{staticClass:["number"]},[t._v(t._s(t.love))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("image",{staticClass:["article-bannar"],attrs:{src:"http://img1.vued.vanthink.cn/vuedc433556ffc003cdc182a79d7114f6314.png"}})])}]},t.exports.render._withStripped=!0},2:function(t,e,n){"use strict";var r=weex.requireModule("navigator");t.exports={props:{title:{default:"Title",type:String},back:{default:!1,type:Boolean}},methods:{goHome:function(){r.pop()}}}},21:function(t,e,n){var r,i,a=[];a.push(n(10)),r=n(9);var s=n(11);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/ali-130257n/www/weex-app-start-kit/src/components/article.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i.style=i.style||{},a.forEach(function(t){for(var e in t)i.style[e]=t[e]}),t.exports=r},28:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i),s=n(21),o=r(s);t.exports={components:{navbar:a.default,article:o.default}}},3:function(t,e){t.exports={navbar:{zIndex:200,position:"fixed",left:0,right:0,top:0,display:"flex",flexDirection:"row",height:88,backgroundColor:"#ffffff",alignItems:"center",borderBottomWidth:2,borderBottomStyle:"solid",borderBottomColor:"#dddddd"},"btn-icon-left":{zIndex:10,flexDirection:"row",alignItems:"center",width:180},"btn-arrow-left":{width:60,height:60,marginLeft:10},"btn-text":{color:"#0f89f5"},title:{position:"absolute",left:0,right:0,top:0,height:88,lineHeight:88,fontSize:34,textAlign:"center"}}},38:function(t,e){t.exports={container:{position:"relative",flex:1,flexDirection:"column",backgroundColor:"#ffffff"},map:{flex:1,position:"relative",minHeight:400}}},4:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["navbar"]},[t.leftCorner?n("div",{staticClass:["btn-icon-left"],on:{click:t.goHome}},[n("image",{staticClass:["btn-arrow-left"],attrs:{src:t.leftCorner.src}}),n("text",{staticClass:["btn-text"]},[t._v(t._s(t.leftCorner.text))])]):t._e(),t.back?n("div",{staticClass:["btn-icon-left"],on:{click:t.goHome}},[n("image",{staticClass:["btn-arrow-left"],attrs:{src:"http://img1.vued.vanthink.cn/vued9c8e7e738ff94abee23eb69d7f1401e9.png"}}),n("text",{staticClass:["btn-text"]},[t._v("返回")])]):t._e(),t.rightCorner?n("div",{staticClass:["btn-icon-left"],on:{click:t.goHome}},[n("image",{staticClass:["btn-arrow-left"],attrs:{src:"rightCorner.src"}}),n("text",{staticClass:["btn-text"]},[t._v(t._s(t.rightCorner.text))])]):t._e(),n("text",{staticClass:["title"]},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},46:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["container"]},[n("navbar",{attrs:{back:"true",title:"Preview Article"}}),n("scoller",{staticClass:["map"]},[n("article")],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},75:function(t,e,n){var r,i,a=[];a.push(n(38)),r=n(28);var s=n(46);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/ali-130257n/www/weex-app-start-kit/src/pages/article.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i.style=i.style||{},a.forEach(function(t){for(var e in t)i.style[e]=t[e]}),t.exports=r,t.exports.el="true",new Vue(t.exports)},9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{bannar:"http://img1.vued.vanthink.cn/vuedc433556ffc003cdc182a79d7114f6314.png",user:{avatar:"http://img1.vued.vanthink.cn/vuedb62b733271ae371de437ded63dfc1660.png",username:"Tom"},title:"This is title",contents:'Different from "web app" , "HTML5 app" and "hybrid app", you can use Weex to build a real mobile app. More intimate is that you write the code is relatively simple, just use HTML, CSS, Javascript can build native applications.But in fact, the bottom of the application is Objective-C or Java. At the same time, Weex will provide a lot of native components or modules for developers to use.',comments:"11.4K",love:"12K"}},methods:{read:function(){cp}}}}});