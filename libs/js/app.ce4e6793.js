(function(t){function e(e){for(var o,s,i=e[0],l=e[1],u=e[2],c=0,f=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7b7d4db0"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var u=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,n[1](u)}a[t]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0dc3":function(t,e,n){},1:function(t,e){},"211e":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"64de":function(t,e,n){"use strict";var o=n("211e"),a=n.n(o);a.a},"9c0c":function(t,e,n){},"9d91":function(t,e,n){"use strict";var o=n("0dc3"),a=n.n(o);a.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("2b27"),r=n.n(a),s=n("28dd"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"match-parent",attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},l=[],u=o["a"].extend({}),c=u,d=(n("5c0b"),n("2877")),f=Object(d["a"])(c,i,l,!1,null,null,null),p=f.exports,m=(n("d3b7"),n("8c4f")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"match-parent",attrs:{id:"homepage"}},[n("div",{staticClass:"d-flex flex-row-reverse p-3"},[n("div",[n("a",{staticClass:"mr-2 mute-link",attrs:{href:"#"},on:{click:t.onDisplayLogin}},[t._v("Sign in")]),t._v("|"),n("a",{staticClass:"ml-2 mute-link",attrs:{href:"#"}},[t._v("Sign up")])])]),n("div",{staticClass:"welcome"},[n("span",{staticClass:"welcome-message"},[t._v("Welcome to")]),n("span",{staticClass:"app-title"},[t._v("Taammunde")]),n("x-button",[t._v("Go to dashboard")])],1),n("modal",{attrs:{title:"Log in",isVisible:t.displayLogin},on:{close:t.onHideLogin}},[n("form",{attrs:{action:"",id:"login-form"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Email")]),n("input",{staticClass:"form-control",attrs:{type:"email",required:""}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Password")]),n("input",{staticClass:"form-control",attrs:{type:"password",required:""}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Type user")]),n("select",{staticClass:"form-control"},[n("option",{attrs:{value:"administrator"}},[t._v("Administrator")]),n("option",{attrs:{value:"manager"}},[t._v("Manager")])])]),n("x-button",[t._v("SIGN IN")])],1)])],1)},h=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"x-modal-backdrop",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[n("transition",{attrs:{name:"up",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showInnerModal,expression:"showInnerModal"}],staticClass:"x-modal"},[t.showHeader?n("header",[t._t("header",[n("div",{staticClass:"default"},[n("span",[t._v(t._s(t.title))]),n("button",{staticClass:"material-icons modal-close-btn",on:{click:t.closeModal}},[t._v(" close ")])])])],2):t._e(),n("main",[t._t("default")],2),t.showFooter?n("footer",[t._t("footer")],2):t._e()])])],1)])},g=[],w=o["a"].extend({props:{isVisible:{type:Boolean,default:!0},title:{type:String},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0}},data:function(){return{showInnerModal:!1}},watch:{isVisible:function(t,e){this.showInnerModal=t}},methods:{closeModal:function(){this.$emit("close")}},mounted:function(){console.log("mount")}}),_=w,y=(n("cf2e"),Object(d["a"])(_,b,g,!1,null,"2ce57e9c",null)),x=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"x-btn",class:t.className,on:{mouseup:t.onMouseUp,mousedown:t.onMouseDown}},[t._t("default")],2)},M=[],j=o["a"].extend({props:{className:{type:String}},data:function(){return{shadow:""}},methods:{onMouseDown:function(t){this.$el.classList.add("mousedown")},onMouseUp:function(){this.$el.classList.remove("mousedown")}}}),O=j,k=(n("9d91"),Object(d["a"])(O,C,M,!1,null,null,null)),L=k.exports,S=o["a"].extend({data:function(){return{displayLogin:!1}},components:{Modal:x,XButton:L},methods:{onDisplayLogin:function(t){t.preventDefault(),this.displayLogin=!0},onHideLogin:function(){this.displayLogin=!1}}}),P=S,E=(n("64de"),Object(d["a"])(P,v,h,!1,null,"51ea642b",null)),T=E.exports;o["a"].use(m["a"]);var $=[{path:"/",name:"Homepage",component:T},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],H=new m["a"]({mode:"history",base:"/",routes:$}),I=H,N=n("2f62");o["a"].use(N["a"]);var D=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,o["a"].use(r.a),o["a"].use(s["a"]),new o["a"]({router:I,store:D,render:function(t){return t(p)}}).$mount("#app")},cf2e:function(t,e,n){"use strict";var o=n("f216"),a=n.n(o);a.a},f216:function(t,e,n){}});
//# sourceMappingURL=app.ce4e6793.js.map