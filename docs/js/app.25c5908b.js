(function(t){function e(e){for(var r,o,l=e[0],i=e[1],c=e[2],p=0,f=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var i=n[l];0!==s[i]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},s={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto max-w-6xl px-8 xl:px-0",attrs:{id:"app"}},[n("Header")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header pt-8 text-gray-900"},[n("div",{staticClass:"sm:flex justify-between"},[t._m(0),n("button",{staticClass:"sm:hidden absolute top-0 right-0 mt-8 mr-8",on:{click:function(e){t.menuOpen=!t.menuOpen}}},[n("svg",{staticClass:"h-12 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t.menuOpen?t._e():n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}}),t.menuOpen?n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}}):t._e()])]),n("nav",{staticClass:"sm:block pt-6 sm:pt-2 sm:flex sm:space-x-6 space-y-6 sm:space-y-0 sm:items-center tracking-wide",class:t.menuOpen?"block":"hidden"},[n("a",{staticClass:"block sm:inlines",attrs:{href:"#"}},[t._v("About")]),n("a",{staticClass:"block sm:inlines",attrs:{href:"#"}},[t._v("Updates")]),n("a",{staticClass:"block sm:inlines",attrs:{href:"#"}},[t._v("Projects")]),n("a",{staticClass:"block sm:inlines",attrs:{href:"#"}},[t._v("Contact")])])])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"text-3xl sm:text-2xl"},[n("a",{attrs:{href:"#"}},[t._v("Matthew May")])])}],i={name:"Header",props:{},data:function(){return{menuOpen:!1}}},c=i,u=n("2877"),p=Object(u["a"])(c,o,l,!1,null,null,null),f=p.exports,d={name:"App",components:{Header:f}},h=d,m=Object(u["a"])(h,s,a,!1,null,null,null),v=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.25c5908b.js.map