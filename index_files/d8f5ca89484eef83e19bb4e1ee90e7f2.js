(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var m=ca(this);function p(a,b){if(b)a:{var c=m;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in c))break a;c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
p("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(h||"")+"_"+g++,h)}function c(h,e){this.g=h;ba(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",g=0;return b});function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var da="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},t;if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var u;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;u=fa.a;break a}catch(a){}u=!1}t=u?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=t;
function w(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
p("Promise",function(a){function b(e){this.h=0;this.i=void 0;this.g=[];this.C=!1;var f=this.o();try{e(f.resolve,f.reject)}catch(k){f.reject(k)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(f){f(e)})}if(a)return a;c.prototype.h=function(e){if(null==this.g){this.g=[];var f=this;this.i(function(){f.s()})}this.g.push(e)};var g=m.setTimeout;c.prototype.i=function(e){g(e,0)};c.prototype.s=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var f=0;f<e.length;++f){var k=
e[f];e[f]=null;try{k()}catch(l){this.o(l)}}}this.g=null};c.prototype.o=function(e){this.i(function(){throw e;})};b.prototype.o=function(){function e(l){return function(n){k||(k=!0,l.call(f,n))}}var f=this,k=!1;return{resolve:e(this.I),reject:e(this.s)}};b.prototype.I=function(e){if(e===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.K(e);else{a:switch(typeof e){case "object":var f=null!=e;break a;case "function":f=!0;break a;default:f=!1}f?this.H(e):this.B(e)}};
b.prototype.H=function(e){var f=void 0;try{f=e.then}catch(k){this.s(k);return}"function"==typeof f?this.L(f,e):this.B(e)};b.prototype.s=function(e){this.D(2,e)};b.prototype.B=function(e){this.D(1,e)};b.prototype.D=function(e,f){if(0!=this.h)throw Error("Cannot settle("+e+", "+f+"): Promise already settled in state"+this.h);this.h=e;this.i=f;2===this.h&&this.J();this.M()};b.prototype.J=function(){var e=this;g(function(){if(e.N()){var f=m.console;"undefined"!==typeof f&&f.error(e.i)}},1)};b.prototype.N=
function(){if(this.C)return!1;var e=m.CustomEvent,f=m.Event,k=m.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof f?e=new f("unhandledrejection",{cancelable:!0}):(e=m.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return k(e)};b.prototype.M=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)h.h(this.g[e]);this.g=null}};var h=new c;b.prototype.K=
function(e){var f=this.o();e.u(f.resolve,f.reject)};b.prototype.L=function(e,f){var k=this.o();try{e.call(f,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,f){function k(r,v){return"function"==typeof r?function(N){try{l(r(N))}catch(O){n(O)}}:v}var l,n,P=new b(function(r,v){l=r;n=v});this.u(k(e,l),k(f,n));return P};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.u=function(e,f){function k(){switch(l.h){case 1:e(l.i);break;case 2:f(l.i);break;default:throw Error("Unexpected state: "+
l.h);}}var l=this;null==this.g?h.h(k):this.g.push(k);this.C=!0};b.resolve=d;b.reject=function(e){return new b(function(f,k){k(e)})};b.race=function(e){return new b(function(f,k){for(var l=q(e),n=l.next();!n.done;n=l.next())d(n.value).u(f,k)})};b.all=function(e){var f=q(e),k=f.next();return k.done?d([]):new b(function(l,n){function P(N){return function(O){r[N]=O;v--;0==v&&l(r)}}var r=[],v=0;do r.push(void 0),v++,d(k.value).u(P(r.length-1),n),k=f.next();while(!k.done)})};return b});
p("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});var ia=this||self;function ja(a,b){a=a.split(".");var c=ia;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};var ka={};var la={},x=null;
function ma(a){var b;void 0===b&&(b=0);if(!x){x={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var h=c.concat(d[g].split(""));la[g]=h;for(var e=0;e<h.length;e++){var f=h[e];void 0===x[f]&&(x[f]=e)}}}b=la[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(g=h=0;h<a.length-2;h+=3){var k=a[h],l=a[h+1];f=a[h+2];e=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|f>>6];f=b[f&63];c[g++]=e+k+l+f}e=0;f=d;switch(a.length-h){case 2:e=
a[h+1],f=b[(e&15)<<2]||d;case 1:a=a[h],c[g]=b[a>>2]+b[(a&3)<<4|e>>4]+f+d}return c.join("")};var y="undefined"!==typeof Uint8Array,na={};var oa;function z(a){if(na!==na)throw Error("illegal external caller");this.G=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");};var A="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function B(a,b){Object.isFrozen(a)||(A?a[A]|=b:void 0!==a.m?a.m|=b:Object.defineProperties(a,{m:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}function C(a){var b;A?b=a[A]:b=a.m;return null==b?0:b}function D(a){B(a,1);return a}function E(a){return Array.isArray(a)?!!(C(a)&2):!1}function pa(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");B(a,2)};function F(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var G=Object.freeze(D([]));function H(a){if(E(a.j))throw Error("Cannot mutate an immutable Message");}var qa="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function ra(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};function sa(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(y&&null!=a&&a instanceof Uint8Array)return ma(a);if(a instanceof z){var b=a.G;b=null==b||"string"===typeof b?b:y&&b instanceof Uint8Array?ma(b):null;return null==b?"":a.G=b}}}return a};function ta(a){var b=ua;b=void 0===b?va:b;return wa(a,b)}function xa(a,b){if(null!=a){if(Array.isArray(a))a=wa(a,b);else if(F(a)){var c={},d;for(d in a)c[d]=xa(a[d],b);a=c}else a=b(a);return a}}function wa(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=xa(c[d],b);Array.isArray(a)&&C(a)&1&&D(c);return c}function ua(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=sa(a);return Array.isArray(a)?ta(a):a}function va(a){return y&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a};function I(a){return a.h||(a.h=a.j[a.i+a.l]={})}function J(a,b,c){return-1===b?null:b>=a.i?a.h?a.h[b]:void 0:(void 0===c?0:c)&&a.h&&(c=a.h[b],null!=c)?c:a.j[b+a.l]}function K(a,b,c,d){d=void 0===d?!1:d;H(a);b<a.i&&!d?a.j[b+a.l]=c:I(a)[b]=c}function ya(a,b){a=J(a,b);return null==a?a:!!a}function za(a){a=J(a,3);return null==a?0:a}function Aa(a){a=ya(a,1);return null==a?!1:a}function L(a,b,c,d){H(a);c!==d?K(a,b,c):K(a,b,void 0,!1)}
function M(a,b,c){var d=void 0===d?!1:d;if(-1===c)var g=null;else if(a.g||(a.g={}),g=a.g[c],!g){var h=J(a,c,d);var e=void 0;e=void 0===e?!1:e;b=Array.isArray(h)?new b(h):e?new b:void 0;void 0!=b&&(a.g[c]=b,E(a.j)&&pa(b.j),g=b)}if(null==g)return g;E(g.j)&&!E(a.j)&&(g=g.F(ka),K(a,c,g.j,d),a.g[c]=g);return g};function Q(a,b,c){a||(a=R);R=null;var d=this.constructor.h;a||(a=d?[d]:[]);this.l=(d?0:-1)-(this.constructor.g||0);this.g=void 0;this.j=a;a:{d=this.j.length;a=d-1;if(d&&(d=this.j[a],F(d))){this.i=a-this.l;this.h=d;break a}void 0!==b&&-1<b?(this.i=Math.max(b,a+1-this.l),this.h=void 0):this.i=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.i)a+=this.l,(d=this.j[a])?Array.isArray(d)&&D(d):this.j[a]=G;else{d=I(this);var g=d[a];g?Array.isArray(g)&&D(g):d[a]=G}}Q.prototype.toJSON=function(){return ta(this.j)};
function Ba(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw a=typeof b,Error("Expected to deserialize an Array but got "+("object"!=a?a:b?Array.isArray(b)?"array":a:"null")+": "+b);R=b;a=new a(b);R=null;return a}Q.prototype.toString=function(){return this.j.toString()};var R;function S(){Q.apply(this,arguments)}w(S,Q);S.prototype.F=function(){return this};if(qa){var Ca={};Object.defineProperties(S,(Ca[Symbol.hasInstance]=ra(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),Ca))};function Da(a,b,c,d,g,h){if(a=a.g&&a.g[c])if(Array.isArray(a)){d=h.v?D(a.slice()):a;H(b);if(null!=d){g=D([]);h=!1;for(a=0;a<d.length;a++)g[a]=d[a].j,h=h||E(g[a]);b.g||(b.g={});b.g[c]=d;d=g;if(!Array.isArray(d))throw Error("cannot mark non-array as mutable");h?Object.isFrozen(d)||(A?d[A]&=-9:void 0!==d.m&&(d.m&=-9)):B(d,8)}else b.g&&(b.g[c]=void 0),g=G;K(b,c,g)}else H(b),b.g||(b.g={}),g=null!=a?a.j:a,b.g[c]=a,K(b,c,g);else y&&d instanceof Uint8Array?g=d.length?new z(new Uint8Array(d)):oa||(oa=new z(null)):
(Array.isArray(d)&&(g?pa(d):Array.isArray(d)&&C(d)&1&&h.v&&(d=d.slice())),g=d),K(b,c,g)};function T(){S.apply(this,arguments)}w(T,S);T.prototype.F=function(a){if(a!==ka)throw Error("requires a valid immutable API token");if(E(this.j)){a={v:!0};var b=E(this.j);if(b&&!a.v)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.A&&(c.A=this.A.slice());for(var d=this.j,g=0;g<d.length;g++){var h=d[g];if(g===d.length-1&&F(h))for(f in h){var e=+f;Number.isNaN(e)?I(c)[f]=h[f]:Da(this,c,e,h[f],b,a)}else Da(this,c,g-this.l,h,b,a)}var f=c}else f=this;return f};
if(qa){var Ea={};Object.defineProperties(T,(Ea[Symbol.hasInstance]=ra(Object[Symbol.hasInstance]),Ea))};function U(a){T.call(this,a,-1,Fa)}w(U,T);var Fa=[8];function V(a){T.call(this,a,-1,Ga)}w(V,T);var Ga=[17];function Ha(a){T.call(this,a,-1,Ia)}w(Ha,T);var Ia=[27];function Ja(a){T.call(this,a)}w(Ja,T);function Ka(a){T.call(this,a,-1,La)}w(Ka,T);var La=[1,2,3,6];function Ma(a){T.call(this,a,-1,Na)}w(Ma,T);var Na=[12];/*

 SPDX-License-Identifier: Apache-2.0
*/
function W(a,b){a=a.getElementsByTagName("META");for(var c=0;c<a.length;++c)if(a[c].getAttribute("name")===b)return a[c].getAttribute("content")||"";return""};function Oa(a,b){this.head=a;this.body=b;this.g=[];this.h={};W(b,"sampling_mod");a=W(b,"namespace");if(!a){a=Math.random;a="ns-"+a().toString(36).substr(2,5);a:{var c=void 0===c?0:c;for(var d=b.getElementsByTagName("META"),g=0;g<d.length;++g)if("namespace"===d[g].getAttribute("name")&&d[g].getAttribute("index")===c.toString()){d[g].setAttribute("content",a);break a}d=b.querySelector("#mys-meta");d||(d=document.createElement("div"),d.id="mys-meta",d.style.position="absolute",d.style.display="none",
b.appendChild(d));b=document.createElement("META");b.setAttribute("name","namespace");b.setAttribute("content",a);b.setAttribute("index",c.toString());d.appendChild(b)}}Pa(this);!this.h.hasOwnProperty("META_LOCKED")&&(c=W(this.body,"custom_flags"))&&(this.h=JSON.parse(c))}
function X(a,b){a=a.body;var c={detail:void 0};c=void 0===c?{}:c;if("function"===typeof window.CustomEvent)var d=new CustomEvent(b,c);else d=document.createEvent("CustomEvent"),d.initCustomEvent(b,!!c.bubbles,!!c.cancelable,c.detail);a.dispatchEvent(d)}Oa.prototype.addEventListener=function(a,b){this.body.addEventListener(a,b)};function Pa(a){if(!(0<a.g.length)){var b=W(a.body,"environment");b=q(b.split("|"));for(var c=b.next();!c.done;c=b.next())(c=c.value)&&a.g.push(c)}};function Qa(a){T.call(this,a)}w(Qa,T);function Ra(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};function Sa(a,b){this.context=a;this.i=b;this.h=Ra("SPAN");this.g=Ra("DIV");this.h.style.fontSize="6px";this.h.textContent="go";this.g.style.position="absolute";this.g.style.top="100%";this.g.style.left="100%";this.g.style.width="1px";this.g.style.height="0";this.g.style.overflow="hidden";this.g.style.visibility="hidden";this.g.appendChild(this.h)}
Sa.prototype.wait=function(){var a=this;if(!Aa(this.i)&&(X(this.context,"spanStart"),this.context.body.appendChild(this.g),!Ta(this)))return new Promise(function(b){var c=setInterval(function(){Ta(a)&&(clearInterval(c),b())},za(a.i))})};function Ta(a){if(1>=a.h.offsetWidth||1>=a.h.offsetHeight)return!1;a.g.remove();X(a.context,"spanReady");return!0};function Ua(a,b){this.context=a;this.h=M(b,Ha,1);this.g=M(b,U,12)||new U;M(this.h,V,10)||new V};function Y(){this.channel=3;(this.g=!(!window.mys||!window.mys.pingback))&&this.setData(43,Date.now()-window.mys.pingback.getBaseTime())}Y.prototype.setAttribute=function(a,b){this.g&&window.mys.pingback.setAttribute(a,b)};Y.prototype.setData=function(a,b){this.g&&window.mys.pingback.setData(a,b,this.channel)};Y.prototype.send=function(a){this.g&&window.mys.pingback.send(a)};function Va(a,b){this.context=a;this.o=b;new Ma;this.g=0;this.pingback=new Y}function Wa(a){a.g&=-31}function Z(a,b){a.g|=b}Va.prototype.h=function(){};function Xa(a,b,c,d){this.g=d(a,b,c);this.context=this.g.context}function Ya(a){Ba(Ka,W(a.context.body,"engine_msg")||"[]");return a.g.h()||Promise.resolve()}
Xa.prototype.init=function(){var a=this;Wa(this.g);Z(this.g,1);var b;null==(b=window.AFMA_Communicator)||b.addEventListener("onshow",function(){Z(a.g,32)});var c=0,d=this.context.body;d.addEventListener("browserRender",function(){++c;if(1===c)X(a.context,"overallStart"),Ya(a).then(function(){X(a.context,"overallQuiet")});else{var g=d.clientHeight;d.clientWidth&&g&&Ya(a)}})};function Za(){this.h=this.g=!1;this.i=[]}function $a(a){a.i.length=0;a.h=!0}function ab(a,b){function c(){a.h=!1;var d=a.i.shift();return void 0===d?(a.g=!1,Promise.resolve()):ab(a,d())}a.g=!0;return b?b.then(c,function(){if(a.h)return c();a.g=!1;return Promise.reject()}):c()}function bb(a,b){b=q(b);for(var c=b.next();!c.done;c=b.next())a.i.push(c.value);if(!a.g)return ab(a)};function cb(){Va.apply(this,arguments);this.i=new Za}w(cb,Va);
cb.prototype.h=function(){var a=this;$a(this.i);return bb(this.i,[function(){},function(){var b,c=a.o,d=new Qa;L(d,3,100,0);L(d,4,1E4,0);L(d,5,!0,!1);ya(c.g,3)&&L(d,2,!0,!1);c=c.context;Pa(c);0<=c.g.indexOf("amp")&&L(d,2,!0,!1);d&&(b=(new Sa(a.context,d)).wait());X(a.context,"browserStart");X(a.context,"browserStartEnd");Wa(a);Z(a,2);return b},function(){X(a.context,"browserReady");X(a.context,"browserReadyEnd");Z(a,4);X(a.context,"overallReady")},function(){X(a.context,"browserQuiet");X(a.context,
"browserQuietEnd");Z(a,8)}])};(function(a){var b=null;ja("mys.engine.init",function(c,d){var g=Ba(Ja,W(d,"render_config")||"[]");b=new Xa(c,d,g,a);b.init()});ja("mys.engine.stage",function(){return b?b.g.g:0})})(function(a,b,c){a=new Oa(a,b);c=new Ua(a,c);return new cb(a,c)});}).call(this);
