(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("js-crypto-utils"), require("openpgp"));
	else if(typeof define === 'function' && define.amd)
		define(["js-crypto-utils", "openpgp"], factory);
	else if(typeof exports === 'object')
		exports["cascade"] = factory(require("js-crypto-utils"), require("openpgp"));
	else
		root["cascade"] = factory(root["js-crypto-utils"], root["openpgp"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_js_crypto_utils__, __WEBPACK_EXTERNAL_MODULE_openpgp__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/jun/ProjectJavaScript/cascade/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist sync recursive cascade.bundle.js":
/*!*************************************!*\
  !*** ./dist sync cascade.bundle.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cascade.bundle.js": "./dist/cascade.bundle.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./dist sync recursive cascade.bundle.js";

/***/ }),

/***/ "./dist/cascade.bundle.js":
/*!********************************!*\
  !*** ./dist/cascade.bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(function(){try{return __webpack_require__(/*! js-crypto-utils */ "js-crypto-utils")}catch(n){}}(),__webpack_require__(/*! openpgp */ "openpgp")):undefined}(this,function(n,e){return function(n){var e={};function t(l){if(e[l])return e[l].exports;var o=e[l]={i:l,l:!1,exports:{}};return n[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(l,o,function(e){return n[e]}.bind(null,o));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/Users/jun/ProjectJavaScript/cascade/dist",t(t.s=30)}([function(n,e,t){n.exports=t(31)},function(n,e){function t(n,e,t,l,o,i,r){try{var c=n[i](r),u=c.value}catch(n){return void t(n)}c.done?e(u):Promise.resolve(u).then(l,o)}n.exports=function(n){return function(){var e=this,l=arguments;return new Promise(function(o,i){var r=n.apply(e,l);function c(n){t(r,o,i,c,u,"next",n)}function u(n){t(r,o,i,c,u,"throw",n)}c(void 0)})}}},function(n,e){n.exports=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},function(n,e){function t(n,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}n.exports=function(n,e,l){return e&&t(n.prototype,e),l&&t(n,l),n}},function(n,e,t){(function(n,t){var l=200,o="__lodash_hash_undefined__",i=9007199254740991,r="[object Arguments]",c="[object Boolean]",u="[object Date]",s="[object Function]",a="[object GeneratorFunction]",m="[object Map]",d="[object Number]",f="[object Object]",p="[object RegExp]",y="[object Set]",h="[object String]",b="[object Symbol]",v="[object ArrayBuffer]",g="[object DataView]",w="[object Float32Array]",x="[object Float64Array]",k="[object Int8Array]",_="[object Int16Array]",E="[object Int32Array]",j="[object Uint8Array]",A="[object Uint8ClampedArray]",K="[object Uint16Array]",S="[object Uint32Array]",U=/\w*$/,P=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,O={};O[r]=O["[object Array]"]=O[v]=O[g]=O[c]=O[u]=O[w]=O[x]=O[k]=O[_]=O[E]=O[m]=O[d]=O[f]=O[p]=O[y]=O[h]=O[b]=O[j]=O[A]=O[K]=O[S]=!0,O["[object Error]"]=O[s]=O["[object WeakMap]"]=!1;var B="object"==typeof n&&n&&n.Object===Object&&n,M="object"==typeof self&&self&&self.Object===Object&&self,T=B||M||Function("return this")(),N=e&&!e.nodeType&&e,R=N&&"object"==typeof t&&t&&!t.nodeType&&t,L=R&&R.exports===N;function F(n,e){return n.set(e[0],e[1]),n}function C(n,e){return n.add(e),n}function D(n,e,t,l){var o=-1,i=n?n.length:0;for(l&&i&&(t=n[++o]);++o<i;)t=e(t,n[o],o,n);return t}function J(n){var e=!1;if(null!=n&&"function"!=typeof n.toString)try{e=!!(n+"")}catch(n){}return e}function G(n){var e=-1,t=Array(n.size);return n.forEach(function(n,l){t[++e]=[l,n]}),t}function H(n,e){return function(t){return n(e(t))}}function V(n){var e=-1,t=Array(n.size);return n.forEach(function(n){t[++e]=n}),t}var z=Array.prototype,Y=Function.prototype,W=Object.prototype,q=T["__core-js_shared__"],$=function(){var n=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Q=Y.toString,X=W.hasOwnProperty,Z=W.toString,nn=RegExp("^"+Q.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),en=L?T.Buffer:void 0,tn=T.Symbol,ln=T.Uint8Array,on=H(Object.getPrototypeOf,Object),rn=Object.create,cn=W.propertyIsEnumerable,un=z.splice,sn=Object.getOwnPropertySymbols,an=en?en.isBuffer:void 0,mn=H(Object.keys,Object),dn=Rn(T,"DataView"),fn=Rn(T,"Map"),pn=Rn(T,"Promise"),yn=Rn(T,"Set"),hn=Rn(T,"WeakMap"),bn=Rn(Object,"create"),vn=Jn(dn),gn=Jn(fn),wn=Jn(pn),xn=Jn(yn),kn=Jn(hn),_n=tn?tn.prototype:void 0,En=_n?_n.valueOf:void 0;function jn(n){var e=-1,t=n?n.length:0;for(this.clear();++e<t;){var l=n[e];this.set(l[0],l[1])}}function An(n){var e=-1,t=n?n.length:0;for(this.clear();++e<t;){var l=n[e];this.set(l[0],l[1])}}function Kn(n){var e=-1,t=n?n.length:0;for(this.clear();++e<t;){var l=n[e];this.set(l[0],l[1])}}function Sn(n){this.__data__=new An(n)}function Un(n,e){var t=Hn(n)||function(n){return function(n){return function(n){return!!n&&"object"==typeof n}(n)&&Vn(n)}(n)&&X.call(n,"callee")&&(!cn.call(n,"callee")||Z.call(n)==r)}(n)?function(n,e){for(var t=-1,l=Array(n);++t<n;)l[t]=e(t);return l}(n.length,String):[],l=t.length,o=!!l;for(var i in n)!e&&!X.call(n,i)||o&&("length"==i||Cn(i,l))||t.push(i);return t}function Pn(n,e,t){var l=n[e];X.call(n,e)&&Gn(l,t)&&(void 0!==t||e in n)||(n[e]=t)}function In(n,e){for(var t=n.length;t--;)if(Gn(n[t][0],e))return t;return-1}function On(n,e,t,l,o,i,P){var I;if(l&&(I=i?l(n,o,i,P):l(n)),void 0!==I)return I;if(!Wn(n))return n;var B=Hn(n);if(B){if(I=function(n){var e=n.length,t=n.constructor(e);e&&"string"==typeof n[0]&&X.call(n,"index")&&(t.index=n.index,t.input=n.input);return t}(n),!e)return function(n,e){var t=-1,l=n.length;e||(e=Array(l));for(;++t<l;)e[t]=n[t];return e}(n,I)}else{var M=Fn(n),T=M==s||M==a;if(zn(n))return function(n,e){if(e)return n.slice();var t=new n.constructor(n.length);return n.copy(t),t}(n,e);if(M==f||M==r||T&&!i){if(J(n))return i?n:{};if(I=function(n){return"function"!=typeof n.constructor||Dn(n)?{}:function(n){return Wn(n)?rn(n):{}}(on(n))}(T?{}:n),!e)return function(n,e){return Tn(n,Ln(n),e)}(n,function(n,e){return n&&Tn(e,qn(e),n)}(I,n))}else{if(!O[M])return i?n:{};I=function(n,e,t,l){var o=n.constructor;switch(e){case v:return Mn(n);case c:case u:return new o(+n);case g:return function(n,e){var t=e?Mn(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.byteLength)}(n,l);case w:case x:case k:case _:case E:case j:case A:case K:case S:return function(n,e){var t=e?Mn(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}(n,l);case m:return function(n,e,t){return D(e?t(G(n),!0):G(n),F,new n.constructor)}(n,l,t);case d:case h:return new o(n);case p:return function(n){var e=new n.constructor(n.source,U.exec(n));return e.lastIndex=n.lastIndex,e}(n);case y:return function(n,e,t){return D(e?t(V(n),!0):V(n),C,new n.constructor)}(n,l,t);case b:return function(n){return En?Object(En.call(n)):{}}(n)}}(n,M,On,e)}}P||(P=new Sn);var N=P.get(n);if(N)return N;if(P.set(n,I),!B)var R=t?function(n){return function(n,e,t){var l=e(n);return Hn(n)?l:function(n,e){for(var t=-1,l=e.length,o=n.length;++t<l;)n[o+t]=e[t];return n}(l,t(n))}(n,qn,Ln)}(n):qn(n);return function(n,e){for(var t=-1,l=n?n.length:0;++t<l&&!1!==e(n[t],t,n););}(R||n,function(o,i){R&&(o=n[i=o]),Pn(I,i,On(o,e,t,l,i,n,P))}),I}function Bn(n){return!(!Wn(n)||function(n){return!!$&&$ in n}(n))&&(Yn(n)||J(n)?nn:P).test(Jn(n))}function Mn(n){var e=new n.constructor(n.byteLength);return new ln(e).set(new ln(n)),e}function Tn(n,e,t,l){t||(t={});for(var o=-1,i=e.length;++o<i;){var r=e[o],c=l?l(t[r],n[r],r,t,n):void 0;Pn(t,r,void 0===c?n[r]:c)}return t}function Nn(n,e){var t=n.__data__;return function(n){var e=typeof n;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n}(e)?t["string"==typeof e?"string":"hash"]:t.map}function Rn(n,e){var t=function(n,e){return null==n?void 0:n[e]}(n,e);return Bn(t)?t:void 0}jn.prototype.clear=function(){this.__data__=bn?bn(null):{}},jn.prototype.delete=function(n){return this.has(n)&&delete this.__data__[n]},jn.prototype.get=function(n){var e=this.__data__;if(bn){var t=e[n];return t===o?void 0:t}return X.call(e,n)?e[n]:void 0},jn.prototype.has=function(n){var e=this.__data__;return bn?void 0!==e[n]:X.call(e,n)},jn.prototype.set=function(n,e){return this.__data__[n]=bn&&void 0===e?o:e,this},An.prototype.clear=function(){this.__data__=[]},An.prototype.delete=function(n){var e=this.__data__,t=In(e,n);return!(t<0||(t==e.length-1?e.pop():un.call(e,t,1),0))},An.prototype.get=function(n){var e=this.__data__,t=In(e,n);return t<0?void 0:e[t][1]},An.prototype.has=function(n){return In(this.__data__,n)>-1},An.prototype.set=function(n,e){var t=this.__data__,l=In(t,n);return l<0?t.push([n,e]):t[l][1]=e,this},Kn.prototype.clear=function(){this.__data__={hash:new jn,map:new(fn||An),string:new jn}},Kn.prototype.delete=function(n){return Nn(this,n).delete(n)},Kn.prototype.get=function(n){return Nn(this,n).get(n)},Kn.prototype.has=function(n){return Nn(this,n).has(n)},Kn.prototype.set=function(n,e){return Nn(this,n).set(n,e),this},Sn.prototype.clear=function(){this.__data__=new An},Sn.prototype.delete=function(n){return this.__data__.delete(n)},Sn.prototype.get=function(n){return this.__data__.get(n)},Sn.prototype.has=function(n){return this.__data__.has(n)},Sn.prototype.set=function(n,e){var t=this.__data__;if(t instanceof An){var o=t.__data__;if(!fn||o.length<l-1)return o.push([n,e]),this;t=this.__data__=new Kn(o)}return t.set(n,e),this};var Ln=sn?H(sn,Object):function(){return[]},Fn=function(n){return Z.call(n)};function Cn(n,e){return!!(e=null==e?i:e)&&("number"==typeof n||I.test(n))&&n>-1&&n%1==0&&n<e}function Dn(n){var e=n&&n.constructor;return n===("function"==typeof e&&e.prototype||W)}function Jn(n){if(null!=n){try{return Q.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function Gn(n,e){return n===e||n!=n&&e!=e}(dn&&Fn(new dn(new ArrayBuffer(1)))!=g||fn&&Fn(new fn)!=m||pn&&"[object Promise]"!=Fn(pn.resolve())||yn&&Fn(new yn)!=y||hn&&"[object WeakMap]"!=Fn(new hn))&&(Fn=function(n){var e=Z.call(n),t=e==f?n.constructor:void 0,l=t?Jn(t):void 0;if(l)switch(l){case vn:return g;case gn:return m;case wn:return"[object Promise]";case xn:return y;case kn:return"[object WeakMap]"}return e});var Hn=Array.isArray;function Vn(n){return null!=n&&function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=i}(n.length)&&!Yn(n)}var zn=an||function(){return!1};function Yn(n){var e=Wn(n)?Z.call(n):"";return e==s||e==a}function Wn(n){var e=typeof n;return!!n&&("object"==e||"function"==e)}function qn(n){return Vn(n)?Un(n):function(n){if(!Dn(n))return mn(n);var e=[];for(var t in Object(n))X.call(n,t)&&"constructor"!=t&&e.push(t);return e}(n)}t.exports=function(n){return On(n,!0,!0)}}).call(this,t(33),t(34)(n))},function(n,e){function t(e){return n.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},t(e)}n.exports=t},function(n,e,t){var l=t(38),o=t(39);n.exports=function(n,e){return!e||"object"!==l(e)&&"function"!=typeof e?o(n):e}},function(n,e,t){var l=t(14);n.exports=function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&l(n,e)}},function(n,e,t){var l=t(35),o=t(36),i=t(37);n.exports=function(n){return l(n)||o(n)||i()}},function(n,e,t){var l=t(5),o=t(14),i=t(42),r=t(43);function c(e){var t="function"==typeof Map?new Map:void 0;return n.exports=c=function(n){if(null===n||!i(n))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,e)}function e(){return r(n,arguments,l(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,n)},c(e)}n.exports=c},function(n,e,t){var l=e.global=t(44),o=e.hasBuffer=l&&!!l.isBuffer,i=e.hasArrayBuffer="undefined"!=typeof ArrayBuffer,r=e.isArray=t(17);e.isArrayBuffer=i?function(n){return n instanceof ArrayBuffer||p(n)}:h;var c=e.isBuffer=o?l.isBuffer:h,u=e.isView=i?ArrayBuffer.isView||b("ArrayBuffer","buffer"):h;e.alloc=f,e.concat=function(n,t){t||(t=0,Array.prototype.forEach.call(n,function(n){t+=n.length}));var l=this!==e&&this||n[0],o=f.call(l,t),i=0;return Array.prototype.forEach.call(n,function(n){i+=d.copy.call(n,o,i)}),o},e.from=function(n){return"string"==typeof n?function(n){var e=3*n.length,t=f.call(this,e),l=d.write.call(t,n);e!==l&&(t=d.slice.call(t,0,l));return t}.call(this,n):y(this).from(n)};var s=e.Array=t(45),a=e.Buffer=t(46),m=e.Uint8Array=t(47),d=e.prototype=t(18);function f(n){return y(this).alloc(n)}var p=b("ArrayBuffer");function y(n){return c(n)?a:u(n)?m:r(n)?s:o?a:i?m:s}function h(){return!1}function b(n,e){return n="[object "+n+"]",function(t){return null!=t&&{}.toString.call(e?t[e]:t)===n}}},function(n,e,t){n.exports=function(n){var e={};function t(l){if(e[l])return e[l].exports;var o=e[l]={i:l,l:!1,exports:{}};return n[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(l,o,function(e){return n[e]}.bind(null,o));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/Users/jun/ProjectJavaScript/js_buffer_utils/dist",t(t.s=0)}([function(n,e,t){n.exports=t(1)},function(n,e,t){"use strict";t.r(e);var l={};t.r(l),t.d(l,"encodeBase64",function(){return c}),t.d(l,"decodeBase64",function(){return u}),t.d(l,"encodeBase64Url",function(){return a}),t.d(l,"decodeBase64Url",function(){return m}),t.d(l,"arrayBufferToHexString",function(){return d}),t.d(l,"hexStringToArrayBuffer",function(){return f}),t.d(l,"arrayBufferToString",function(){return p}),t.d(l,"stringToArrayBuffer",function(){return y});var o={};t.r(o),t.d(o,"pemToBin",function(){return b}),t.d(o,"binToPem",function(){return v});var i=function(n){if("undefined"!=typeof Buffer){var e=Object.prototype.toString.call(n).slice(8,-1);return(Buffer.isBuffer(n)?n:0<=["ArrayBuffer","TypedArray","Uint8Array","Int8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"].indexOf(e)?Buffer.from(n):Buffer.from(n.toString(),"binary")).toString("base64")}throw new Error("UnsupportedEnvironment")},r=function(n){if("undefined"!=typeof Buffer)return Buffer.from(n,"base64").toString("binary");throw new Error("UnsupportedEnvironment")};function c(n){var e;return e="string"==typeof n?n:p(n),("undefined"==typeof window?i:window.btoa)(e)}function u(n){return function(n){if(n instanceof Uint8Array){for(var e=!0,t=0;t<n.length;t++)if(126<n[t]||32>n[t]&&13!==n[t]&&10!==n[t]){e=!1;break}var l=null;if(e){l="";for(var o=0;o<n.length;o++)l+=String.fromCharCode(n[o])}else l=n;return l}throw new Error("Input data must be an Uint8Array")}(y(("undefined"==typeof window?r:window.atob)(n)))}function s(n){if(n instanceof Uint8Array)return n;if(ArrayBuffer.isView(n)&&void 0!==n.buffer)return new Uint8Array(n.buffer);if(n instanceof ArrayBuffer)return new Uint8Array(n);throw new Error("Input must be an ArrayBuffer or a TypedArray")}function a(n){return c(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function m(n){if("string"!=typeof n)throw new Error("Input must be string");return u(n=n.replace(/-/g,"+").replace(/_/g,"/"))}function d(n){for(var e,t=s(n),l="",o=0;o<t.length;o++)l+=e=1===(e=(255&t[o]).toString(16)).length?"0".concat(e):e;return l}function f(n){if(!n||"string"!=typeof n)throw new Error("Input arg must be a non-null string");for(var e=[],t=n.length,l=0;l<t;l+=2)e.push(parseInt(n.substr(l,2),16));return new Uint8Array(e)}function p(n){var e=s(n);return String.fromCharCode.apply(null,e)}function y(n){if(!n||"string"!=typeof n)throw new Error("Input arg must be a non-null string");for(var e=new Uint8Array(n.length),t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}var h={public:"PUBLIC KEY",private:"PRIVATE KEY",encryptedPrivate:"ENCRYPTED PRIVATE KEY",certificate:"CERTIFICATE",certRequest:"CERTIFICATE REQUEST"};function b(n){return u(function(n){if(!n||"string"!=typeof n)throw new Error("Input arg must be a non-null string");try{var e=n.split(/^-----[s]*BEGIN[^-]*-----$/gm)[1].split(/^-----[s]*END[^-]*-----$/gm)[0];return e=e.replace(/\r?\n/g,"")}catch(n){throw new Error("Invalid format as PEM")}}(n))}function v(n,e){return function(n,e){if(!n||"string"!=typeof n)throw new Error("Input arg must be a non-null string");if(!e||"string"!=typeof e)throw new Error("Input arg must be a non-null string");if(0>Object.keys(h).indexOf(e))throw new Error("Unsupported type");for(var t=h[e],l="-----BEGIN ".concat(t,"-----\n");0<n.length;)l+="".concat(n.substring(0,64),"\n"),n=n.substring(64);return l="".concat(l,"-----END ").concat(t,"-----")}(c(n),e)}t.d(e,"encoder",function(){return l}),t.d(e,"formatter",function(){return o}),e.default={encoder:l,formatter:o}}])},function(n,e,t){e.encode=t(21).encode,e.decode=t(26).decode,e.Encoder=t(54).Encoder,e.Decoder=t(55).Decoder,e.createCodec=t(56).createCodec,e.codec=t(57).codec},function(n,e,t){var l=t(17);e.install=function(n){for(var e in n)i.prototype[e]=r(i.prototype[e],n[e])},e.filter=function(n){return l(n)?function(n){return n=n.slice(),function(t){return n.reduce(e,t)};function e(n,e){return e(n)}}(n):n};var o=t(10);function i(n){if(!(this instanceof i))return new i(n);this.options=n,this.init()}function r(n,e){return n&&e?function(){return n.apply(this,arguments),e.apply(this,arguments)}:n||e}function c(n){return new i(n)}i.prototype.init=function(){var n=this.options;return n&&n.uint8array&&(this.bufferish=o.Uint8Array),this},e.preset=c({preset:!0})},function(n,e){function t(e,l){return n.exports=t=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},t(e,l)}n.exports=t},function(n,e,t){var l=t(16).ExtBuffer,o=t(49),i=t(50),r=t(13);function c(){var n=this.options;return this.encode=function(n){var e=i.getWriteType(n);return function(n,t){var l=e[typeof t];if(!l)throw new Error('Unsupported type "'+typeof t+'": '+t);l(n,t)}}(n),n&&n.preset&&o.setExtPackers(this),this}r.install({addExtPacker:function(n,e,t){t=r.filter(t);var o=e.name;if(o&&"Object"!==o){var i=this.extPackers||(this.extPackers={});i[o]=u}else{var c=this.extEncoderList||(this.extEncoderList=[]);c.unshift([e,u])}function u(e){return t&&(e=t(e)),new l(e,n)}},getExtPacker:function(n){var e=this.extPackers||(this.extPackers={}),t=n.constructor,l=t&&t.name&&e[t.name];if(l)return l;for(var o=this.extEncoderList||(this.extEncoderList=[]),i=o.length,r=0;r<i;r++){var c=o[r];if(t===c[0])return c[1]}},init:c}),e.preset=c.call(r.preset)},function(n,e,t){e.ExtBuffer=function n(e,t){if(!(this instanceof n))return new n(e,t);this.buffer=l.from(e);this.type=t};var l=t(10)},function(n,e){var t={}.toString;n.exports=Array.isArray||function(n){return"[object Array]"==t.call(n)}},function(n,e,t){var l=t(48);e.copy=u,e.slice=s,e.toString=function(n,e,t){return(!r&&o.isBuffer(this)?this.toString:l.toString).apply(this,arguments)},e.write=function(n){return function(){return(this[n]||l[n]).apply(this,arguments)}}("write");var o=t(10),i=o.global,r=o.hasBuffer&&"TYPED_ARRAY_SUPPORT"in i,c=r&&!i.TYPED_ARRAY_SUPPORT;function u(n,e,t,i){var r=o.isBuffer(this),u=o.isBuffer(n);if(r&&u)return this.copy(n,e,t,i);if(c||r||u||!o.isView(this)||!o.isView(n))return l.copy.call(this,n,e,t,i);var a=t||null!=i?s.call(this,t,i):this;return n.set(a,e),a.length}function s(n,e){var t=this.slice||!c&&this.subarray;if(t)return t.call(this,n,e);var l=o.alloc.call(this,e-n);return u.call(this,l,0,n,e),l}},function(n,e,t){!function(n){var e,t="undefined",l=t!==typeof Buffer&&Buffer,o=t!==typeof Uint8Array&&Uint8Array,i=t!==typeof ArrayBuffer&&ArrayBuffer,r=[0,0,0,0,0,0,0,0],c=Array.isArray||function(n){return!!n&&"[object Array]"==Object.prototype.toString.call(n)},u=4294967296,s=16777216;function a(c,a,x){var k=a?0:4,_=a?4:0,E=a?0:3,j=a?1:2,A=a?2:1,K=a?3:0,S=a?b:g,U=a?v:w,P=B.prototype,I="is"+c,O="_"+I;return P.buffer=void 0,P.offset=0,P[O]=!0,P.toNumber=M,P.toString=function(n){var e=this.buffer,t=this.offset,l=N(e,t+k),o=N(e,t+_),i="",r=!x&&2147483648&l;r&&(l=~l,o=u-o);n=n||10;for(;;){var c=l%n*u+o;if(l=Math.floor(l/n),o=Math.floor(c/n),i=(c%n).toString(n)+i,!l&&!o)break}r&&(i="-"+i);return i},P.toJSON=M,P.toArray=m,l&&(P.toBuffer=d),o&&(P.toArrayBuffer=f),B[I]=function(n){return!(!n||!n[O])},n[c]=B,B;function B(n,l,c,s){return this instanceof B?function(n,l,c,s,a){o&&i&&(l instanceof i&&(l=new o(l)),s instanceof i&&(s=new o(s)));if(!(l||c||s||e))return void(n.buffer=h(r,0));if(!p(l,c)){var m=e||Array;a=c,s=l,c=0,l=new m(8)}if(n.buffer=l,n.offset=c|=0,t===typeof s)return;"string"==typeof s?function(n,e,t,l){var o=0,i=t.length,r=0,c=0;"-"===t[0]&&o++;var s=o;for(;o<i;){var a=parseInt(t[o++],l);if(!(a>=0))break;c=c*l+a,r=r*l+Math.floor(c/u),c%=u}s&&(r=~r,c?c=u-c:r++);T(n,e+k,r),T(n,e+_,c)}(l,c,s,a||10):p(s,a)?y(l,c,s,a):"number"==typeof a?(T(l,c+k,s),T(l,c+_,a)):s>0?S(l,c,s):s<0?U(l,c,s):y(l,c,r,0)}(this,n,l,c,s):new B(n,l,c,s)}function M(){var n=this.buffer,e=this.offset,t=N(n,e+k),l=N(n,e+_);return x||(t|=0),t?t*u+l:l}function T(n,e,t){n[e+K]=255&t,t>>=8,n[e+A]=255&t,t>>=8,n[e+j]=255&t,t>>=8,n[e+E]=255&t}function N(n,e){return n[e+E]*s+(n[e+j]<<16)+(n[e+A]<<8)+n[e+K]}}function m(n){var t=this.buffer,l=this.offset;return e=null,!1!==n&&0===l&&8===t.length&&c(t)?t:h(t,l)}function d(n){var t=this.buffer,o=this.offset;if(e=l,!1!==n&&0===o&&8===t.length&&Buffer.isBuffer(t))return t;var i=new l(8);return y(i,0,t,o),i}function f(n){var t=this.buffer,l=this.offset,r=t.buffer;if(e=o,!1!==n&&0===l&&r instanceof i&&8===r.byteLength)return r;var c=new o(8);return y(c,0,t,l),c.buffer}function p(n,e){var t=n&&n.length;return e|=0,t&&e+8<=t&&"string"!=typeof n[e]}function y(n,e,t,l){e|=0,l|=0;for(var o=0;o<8;o++)n[e++]=255&t[l++]}function h(n,e){return Array.prototype.slice.call(n,e,e+8)}function b(n,e,t){for(var l=e+8;l>e;)n[--l]=255&t,t/=256}function v(n,e,t){var l=e+8;for(t++;l>e;)n[--l]=255&-t^255,t/=256}function g(n,e,t){for(var l=e+8;e<l;)n[e++]=255&t,t/=256}function w(n,e,t){var l=e+8;for(t++;e<l;)n[e++]=255&-t^255,t/=256}a("Uint64BE",!0,!0),a("Int64BE",!0,!1),a("Uint64LE",!1,!0),a("Int64LE",!1,!1)}("string"!=typeof e.nodeName?e:this||{})},function(n,e,t){var l=t(16).ExtBuffer,o=t(52),i=t(28).readUint8,r=t(53),c=t(13);function u(){var n=this.options;return this.decode=function(n){var e=r.getReadToken(n);return function(n){var t=i(n),l=e[t];if(!l)throw new Error("Invalid type: "+(t?"0x"+t.toString(16):t));return l(n)}}(n),n&&n.preset&&o.setExtUnpackers(this),this}c.install({addExtUnpacker:function(n,e){(this.extUnpackers||(this.extUnpackers=[]))[n]=c.filter(e)},getExtUnpacker:function(n){return(this.extUnpackers||(this.extUnpackers=[]))[n]||function(e){return new l(e,n)}},init:u}),e.preset=u.call(c.preset)},function(n,e,t){e.encode=function(n,e){var t=new l(e);return t.write(n),t.read()};var l=t(22).EncodeBuffer},function(n,e,t){e.EncodeBuffer=o;var l=t(15).preset;function o(n){if(!(this instanceof o))return new o(n);if(n&&(this.options=n,n.codec)){var e=this.codec=n.codec;e.bufferish&&(this.bufferish=e.bufferish)}}t(25).FlexEncoder.mixin(o.prototype),o.prototype.codec=l,o.prototype.write=function(n){this.codec.encode(this,n)}},function(n,e){e.read=function(n,e,t,l,o){var i,r,c=8*o-l-1,u=(1<<c)-1,s=u>>1,a=-7,m=t?o-1:0,d=t?-1:1,f=n[e+m];for(m+=d,i=f&(1<<-a)-1,f>>=-a,a+=c;a>0;i=256*i+n[e+m],m+=d,a-=8);for(r=i&(1<<-a)-1,i>>=-a,a+=l;a>0;r=256*r+n[e+m],m+=d,a-=8);if(0===i)i=1-s;else{if(i===u)return r?NaN:1/0*(f?-1:1);r+=Math.pow(2,l),i-=s}return(f?-1:1)*r*Math.pow(2,i-l)},e.write=function(n,e,t,l,o,i){var r,c,u,s=8*i-o-1,a=(1<<s)-1,m=a>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,f=l?0:i-1,p=l?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(c=isNaN(e)?1:0,r=a):(r=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-r))<1&&(r--,u*=2),(e+=r+m>=1?d/u:d*Math.pow(2,1-m))*u>=2&&(r++,u/=2),r+m>=a?(c=0,r=a):r+m>=1?(c=(e*u-1)*Math.pow(2,o),r+=m):(c=e*Math.pow(2,m-1)*Math.pow(2,o),r=0));o>=8;n[t+f]=255&c,f+=p,c/=256,o-=8);for(r=r<<o|c,s+=o;s>0;n[t+f]=255&r,f+=p,r/=256,s-=8);n[t+f-p]|=128*y}},function(n,e){for(var t=e.uint8=new Array(256),l=0;l<=255;l++)t[l]=o(l);function o(n){return function(e){var t=e.reserve(1);e.buffer[t]=n}}},function(n,e,t){e.FlexDecoder=c,e.FlexEncoder=u;var l=t(10),o=2048,i=65536,r="BUFFER_SHORTAGE";function c(){if(!(this instanceof c))return new c}function u(){if(!(this instanceof u))return new u}function s(){throw new Error("method not implemented: write()")}function a(){throw new Error("method not implemented: fetch()")}function m(){return this.buffers&&this.buffers.length?(this.flush(),this.pull()):this.fetch()}function d(n){(this.buffers||(this.buffers=[])).push(n)}function f(){return(this.buffers||(this.buffers=[])).shift()}function p(n){return function(e){for(var t in n)e[t]=n[t];return e}}c.mixin=p(function(){return{bufferish:l,write:function(n){var e=this.offset?l.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=e?n?this.bufferish.concat([e,n]):e:n,this.offset=0},fetch:a,flush:function(){for(;this.offset<this.buffer.length;){var n,e=this.offset;try{n=this.fetch()}catch(n){if(n&&n.message!=r)throw n;this.offset=e;break}this.push(n)}},push:d,pull:f,read:m,reserve:function(n){var e=this.offset,t=e+n;if(t>this.buffer.length)throw new Error(r);return this.offset=t,e},offset:0}}()),c.mixin(c.prototype),u.mixin=p(function(){return{bufferish:l,write:s,fetch:function(){var n=this.start;if(n<this.offset){var e=this.start=this.offset;return l.prototype.slice.call(this.buffer,n,e)}},flush:function(){for(;this.start<this.offset;){var n=this.fetch();n&&this.push(n)}},push:d,pull:function(){var n=this.buffers||(this.buffers=[]),e=n.length>1?this.bufferish.concat(n):n[0];return n.length=0,e},read:m,reserve:function(n){var e=0|n;if(this.buffer){var t=this.buffer.length,l=0|this.offset,o=l+e;if(o<t)return this.offset=o,l;this.flush(),n=Math.max(n,Math.min(2*t,this.maxBufferSize))}return n=Math.max(n,this.minBufferSize),this.buffer=this.bufferish.alloc(n),this.start=0,this.offset=e,0},send:function(n){var e=n.length;if(e>this.minBufferSize)this.flush(),this.push(n);else{var t=this.reserve(e);l.prototype.copy.call(n,this.buffer,t)}},maxBufferSize:i,minBufferSize:o,offset:0,start:0}}()),u.mixin(u.prototype)},function(n,e,t){e.decode=function(n,e){var t=new l(e);return t.write(n),t.read()};var l=t(27).DecodeBuffer},function(n,e,t){e.DecodeBuffer=o;var l=t(20).preset;function o(n){if(!(this instanceof o))return new o(n);if(n&&(this.options=n,n.codec)){var e=this.codec=n.codec;e.bufferish&&(this.bufferish=e.bufferish)}}t(25).FlexDecoder.mixin(o.prototype),o.prototype.codec=l,o.prototype.fetch=function(){return this.codec.decode(this)}},function(n,e,t){var l=t(23),o=t(19),i=o.Uint64BE,r=o.Int64BE;e.getReadFormat=function(n){var e=c.hasArrayBuffer&&n&&n.binarraybuffer,t=n&&n.int64;return{map:s&&n&&n.usemap?d:m,array:f,str:p,bin:e?h:y,ext:b,uint8:v,uint16:w,uint32:k,uint64:E(8,t?K:j),int8:g,int16:x,int32:_,int64:E(8,t?S:A),float32:E(4,U),float64:E(8,P)}},e.readUint8=v;var c=t(10),u=t(18),s="undefined"!=typeof Map,a=!0;function m(n,e){var t,l={},o=new Array(e),i=new Array(e),r=n.codec.decode;for(t=0;t<e;t++)o[t]=r(n),i[t]=r(n);for(t=0;t<e;t++)l[o[t]]=i[t];return l}function d(n,e){var t,l=new Map,o=new Array(e),i=new Array(e),r=n.codec.decode;for(t=0;t<e;t++)o[t]=r(n),i[t]=r(n);for(t=0;t<e;t++)l.set(o[t],i[t]);return l}function f(n,e){for(var t=new Array(e),l=n.codec.decode,o=0;o<e;o++)t[o]=l(n);return t}function p(n,e){var t=n.reserve(e),l=t+e;return u.toString.call(n.buffer,"utf-8",t,l)}function y(n,e){var t=n.reserve(e),l=t+e,o=u.slice.call(n.buffer,t,l);return c.from(o)}function h(n,e){var t=n.reserve(e),l=t+e,o=u.slice.call(n.buffer,t,l);return c.Uint8Array.from(o).buffer}function b(n,e){var t=n.reserve(e+1),l=n.buffer[t++],o=t+e,i=n.codec.getExtUnpacker(l);if(!i)throw new Error("Invalid ext type: "+(l?"0x"+l.toString(16):l));return i(u.slice.call(n.buffer,t,o))}function v(n){var e=n.reserve(1);return n.buffer[e]}function g(n){var e=n.reserve(1),t=n.buffer[e];return 128&t?t-256:t}function w(n){var e=n.reserve(2),t=n.buffer;return t[e++]<<8|t[e]}function x(n){var e=n.reserve(2),t=n.buffer,l=t[e++]<<8|t[e];return 32768&l?l-65536:l}function k(n){var e=n.reserve(4),t=n.buffer;return 16777216*t[e++]+(t[e++]<<16)+(t[e++]<<8)+t[e]}function _(n){var e=n.reserve(4),t=n.buffer;return t[e++]<<24|t[e++]<<16|t[e++]<<8|t[e]}function E(n,e){return function(t){var l=t.reserve(n);return e.call(t.buffer,l,a)}}function j(n){return new i(this,n).toNumber()}function A(n){return new r(this,n).toNumber()}function K(n){return new i(this,n)}function S(n){return new r(this,n)}function U(n){return l.read(this,n,!1,23,4)}function P(n){return l.read(this,n,!1,52,8)}},function(n,e,t){!function(e){n.exports=e;var t="listeners",l={on:function(n,e){return r(this,n).push(e),this},once:function(n,e){var t=this;return l.originalListener=e,r(t,n).push(l),t;function l(){i.call(t,n,l),e.apply(this,arguments)}},off:i,emit:function(n,e){var t=this,l=r(t,n,!0);if(!l)return!1;var o=arguments.length;if(1===o)l.forEach(function(n){n.call(t)});else if(2===o)l.forEach(function(n){n.call(t,e)});else{var i=Array.prototype.slice.call(arguments,1);l.forEach(function(n){n.apply(t,i)})}return!!l.length}};function o(n){for(var e in l)n[e]=l[e];return n}function i(n,e){var l;if(arguments.length){if(e){if(l=r(this,n,!0)){if(!(l=l.filter(function(n){return n!==e&&n.originalListener!==e})).length)return i.call(this,n);this[t][n]=l}}else if((l=this[t])&&(delete l[n],!Object.keys(l).length))return i.call(this)}else delete this[t];return this}function r(n,e,l){if(!l||n[t]){var o=n[t]||(n[t]={});return o[e]||(o[e]=[])}}o(e.prototype),e.mixin=o}(
/**
 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
 *
 * @copyright Yusuke Kawasaki
 * @license MIT
 * @constructor
 * @see https://github.com/kawanet/event-lite
 * @see http://kawanet.github.io/event-lite/EventLite.html
 * @example
 * var EventLite = require("event-lite");
 *
 * function MyClass() {...}             // your class
 *
 * EventLite.mixin(MyClass.prototype);  // import event methods
 *
 * var obj = new MyClass();
 * obj.on("foo", function() {...});     // add event listener
 * obj.once("bar", function() {...});   // add one-time event listener
 * obj.emit("foo");                     // dispatch event
 * obj.emit("bar");                     // dispatch another event
 * obj.off("foo");                      // remove event listener
 */
function n(){if(!(this instanceof n))return new n})},function(n,e,t){n.exports=t(58)},function(n,e,t){var l=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=l.regeneratorRuntime&&Object.getOwnPropertyNames(l).indexOf("regeneratorRuntime")>=0,i=o&&l.regeneratorRuntime;if(l.regeneratorRuntime=void 0,n.exports=t(32),o)l.regeneratorRuntime=i;else try{delete l.regeneratorRuntime}catch(n){l.regeneratorRuntime=void 0}},function(n,e){!function(e){"use strict";var t,l=Object.prototype,o=l.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof n,a=e.regeneratorRuntime;if(a)s&&(n.exports=a);else{(a=e.regeneratorRuntime=s?n.exports:{}).wrap=w;var m="suspendedStart",d="suspendedYield",f="executing",p="completed",y={},h={};h[r]=function(){return this};var b=Object.getPrototypeOf,v=b&&b(b(I([])));v&&v!==l&&o.call(v,r)&&(h=v);var g=E.prototype=k.prototype=Object.create(h);_.prototype=g.constructor=E,E.constructor=_,E[u]=_.displayName="GeneratorFunction",a.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,E):(n.__proto__=E,u in n||(n[u]="GeneratorFunction")),n.prototype=Object.create(g),n},a.awrap=function(n){return{__await:n}},j(A.prototype),A.prototype[c]=function(){return this},a.AsyncIterator=A,a.async=function(n,e,t,l){var o=new A(w(n,e,t,l));return a.isGeneratorFunction(e)?o:o.next().then(function(n){return n.done?n.value:o.next()})},j(g),g[u]="Generator",g[r]=function(){return this},g.toString=function(){return"[object Generator]"},a.keys=function(n){var e=[];for(var t in n)e.push(t);return e.reverse(),function t(){for(;e.length;){var l=e.pop();if(l in n)return t.value=l,t.done=!1,t}return t.done=!0,t}},a.values=I,P.prototype={constructor:P,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(U),!n)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function l(l,o){return c.type="throw",c.arg=n,e.next=l,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],c=r.completion;if("root"===r.tryLoc)return l("end");if(r.tryLoc<=this.prev){var u=o.call(r,"catchLoc"),s=o.call(r,"finallyLoc");if(u&&s){if(this.prev<r.catchLoc)return l(r.catchLoc,!0);if(this.prev<r.finallyLoc)return l(r.finallyLoc)}else if(u){if(this.prev<r.catchLoc)return l(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return l(r.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;t>=0;--t){var l=this.tryEntries[t];if(l.tryLoc<=this.prev&&o.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var i=l;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var r=i?i.completion:{};return r.type=n,r.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(r)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),y},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),U(t),y}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var l=t.completion;if("throw"===l.type){var o=l.arg;U(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,l){return this.delegate={iterator:I(n),resultName:e,nextLoc:l},"next"===this.method&&(this.arg=t),y}}}function w(n,e,t,l){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),r=new P(l||[]);return i._invoke=function(n,e,t){var l=m;return function(o,i){if(l===f)throw new Error("Generator is already running");if(l===p){if("throw"===o)throw i;return O()}for(t.method=o,t.arg=i;;){var r=t.delegate;if(r){var c=K(r,t);if(c){if(c===y)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(l===m)throw l=p,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);l=f;var u=x(n,e,t);if("normal"===u.type){if(l=t.done?p:d,u.arg===y)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(l=p,t.method="throw",t.arg=u.arg)}}}(n,t,r),i}function x(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}function k(){}function _(){}function E(){}function j(n){["next","throw","return"].forEach(function(e){n[e]=function(n){return this._invoke(e,n)}})}function A(n){var e;this._invoke=function(t,l){function i(){return new Promise(function(e,i){!function e(t,l,i,r){var c=x(n[t],n,l);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(n){e("next",n,i,r)},function(n){e("throw",n,i,r)}):Promise.resolve(s).then(function(n){u.value=n,i(u)},function(n){return e("throw",n,i,r)})}r(c.arg)}(t,l,e,i)})}return e=e?e.then(i,i):i()}}function K(n,e){var l=n.iterator[e.method];if(l===t){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=t,K(n,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(l,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function S(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function U(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function P(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(S,this),this.reset(!0)}function I(n){if(n){var e=n[r];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var l=-1,i=function e(){for(;++l<n.length;)if(o.call(n,l))return e.value=n[l],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(n,e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(t=window)}n.exports=t},function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,e){n.exports=function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}},function(n,e){n.exports=function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}},function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(n,e){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function l(e){return"function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?n.exports=l=function(n){return t(n)}:n.exports=l=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)},l(e)}n.exports=l},function(n,e){n.exports=function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},function(e,t){if(void 0===n){var l=new Error("Cannot find module 'js-crypto-utils'");throw l.code="MODULE_NOT_FOUND",l}e.exports=n},function(n,t){n.exports=e},function(n,e){n.exports=function(n){return-1!==Function.toString.call(n).indexOf("[native code]")}},function(n,e,t){var l=t(14);function o(e,t,i){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()?n.exports=o=function(n,e,t){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(n,o));return t&&l(i,t.prototype),i}:n.exports=o=Reflect.construct,o.apply(null,arguments)}n.exports=o},function(n,e){function t(n){return n&&n.isBuffer&&n}n.exports=t("undefined"!=typeof Buffer&&Buffer)||t(this.Buffer)||t("undefined"!=typeof window&&window.Buffer)||this.Buffer},function(n,e,t){var l=t(10);function o(n){return new Array(n)}(e=n.exports=o(0)).alloc=o,e.concat=l.concat,e.from=function(n){if(!l.isBuffer(n)&&l.isView(n))n=l.Uint8Array.from(n);else if(l.isArrayBuffer(n))n=new Uint8Array(n);else{if("string"==typeof n)return l.from.call(e,n);if("number"==typeof n)throw new TypeError('"value" argument must not be a number')}return Array.prototype.slice.call(n)}},function(n,e,t){var l=t(10),o=l.global;function i(n){return new o(n)}(e=n.exports=l.hasBuffer?i(0):[]).alloc=l.hasBuffer&&o.alloc||i,e.concat=l.concat,e.from=function(n){if(!l.isBuffer(n)&&l.isView(n))n=l.Uint8Array.from(n);else if(l.isArrayBuffer(n))n=new Uint8Array(n);else{if("string"==typeof n)return l.from.call(e,n);if("number"==typeof n)throw new TypeError('"value" argument must not be a number')}return o.from&&1!==o.from.length?o.from(n):new o(n)}},function(n,e,t){var l=t(10);function o(n){return new Uint8Array(n)}(e=n.exports=l.hasArrayBuffer?o(0):[]).alloc=o,e.concat=l.concat,e.from=function(n){if(l.isView(n)){var t=n.byteOffset,o=n.byteLength;(n=n.buffer).byteLength!==o&&(n.slice?n=n.slice(t,t+o):(n=new Uint8Array(n)).byteLength!==o&&(n=Array.prototype.slice.call(n,t,t+o)))}else{if("string"==typeof n)return l.from.call(e,n);if("number"==typeof n)throw new TypeError('"value" argument must not be a number')}return new Uint8Array(n)}},function(n,e){e.copy=function(n,e,t,l){var o;t||(t=0);l||0===l||(l=this.length);e||(e=0);var i=l-t;if(n===this&&t<e&&e<l)for(o=i-1;o>=0;o--)n[o+e]=this[o+t];else for(o=0;o<i;o++)n[o+e]=this[o+t];return i},e.toString=function(n,e,t){var l=0|e;t||(t=this.length);var o="",i=0;for(;l<t;)(i=this[l++])<128?o+=String.fromCharCode(i):(192==(224&i)?i=(31&i)<<6|63&this[l++]:224==(240&i)?i=(15&i)<<12|(63&this[l++])<<6|63&this[l++]:240==(248&i)&&(i=(7&i)<<18|(63&this[l++])<<12|(63&this[l++])<<6|63&this[l++]),i>=65536?(i-=65536,o+=String.fromCharCode(55296+(i>>>10),56320+(1023&i))):o+=String.fromCharCode(i));return o},e.write=function(n,e){var t=e||(e|=0),l=n.length,o=0,i=0;for(;i<l;)(o=n.charCodeAt(i++))<128?this[t++]=o:o<2048?(this[t++]=192|o>>>6,this[t++]=128|63&o):o<55296||o>57343?(this[t++]=224|o>>>12,this[t++]=128|o>>>6&63,this[t++]=128|63&o):(o=65536+(o-55296<<10|n.charCodeAt(i++)-56320),this[t++]=240|o>>>18,this[t++]=128|o>>>12&63,this[t++]=128|o>>>6&63,this[t++]=128|63&o);return t-e}},function(n,e,t){e.setExtPackers=function(n){n.addExtPacker(14,Error,[m,u]),n.addExtPacker(1,EvalError,[m,u]),n.addExtPacker(2,RangeError,[m,u]),n.addExtPacker(3,ReferenceError,[m,u]),n.addExtPacker(4,SyntaxError,[m,u]),n.addExtPacker(5,TypeError,[m,u]),n.addExtPacker(6,URIError,[m,u]),n.addExtPacker(10,RegExp,[a,u]),n.addExtPacker(11,Boolean,[s,u]),n.addExtPacker(12,String,[s,u]),n.addExtPacker(13,Date,[Number,u]),n.addExtPacker(15,Number,[s,u]),"undefined"!=typeof Uint8Array&&(n.addExtPacker(17,Int8Array,r),n.addExtPacker(18,Uint8Array,r),n.addExtPacker(19,Int16Array,r),n.addExtPacker(20,Uint16Array,r),n.addExtPacker(21,Int32Array,r),n.addExtPacker(22,Uint32Array,r),n.addExtPacker(23,Float32Array,r),"undefined"!=typeof Float64Array&&n.addExtPacker(24,Float64Array,r),"undefined"!=typeof Uint8ClampedArray&&n.addExtPacker(25,Uint8ClampedArray,r),n.addExtPacker(26,ArrayBuffer,r),n.addExtPacker(29,DataView,r));o.hasBuffer&&n.addExtPacker(27,i,o.from)};var l,o=t(10),i=o.global,r=o.Uint8Array.from,c={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function u(n){return l||(l=t(21).encode),l(n)}function s(n){return n.valueOf()}function a(n){(n=RegExp.prototype.toString.call(n).split("/")).shift();var e=[n.pop()];return e.unshift(n.join("/")),e}function m(n){var e={};for(var t in c)e[t]=n[t];return e}},function(n,e,t){var l=t(17),o=t(19),i=o.Uint64BE,r=o.Int64BE,c=t(10),u=t(18),s=t(51),a=t(24).uint8,m=t(16).ExtBuffer,d="undefined"!=typeof Uint8Array,f="undefined"!=typeof Map,p=[];p[1]=212,p[2]=213,p[4]=214,p[8]=215,p[16]=216,e.getWriteType=function(n){var e=s.getWriteToken(n),t=n&&n.useraw,o=d&&n&&n.binarraybuffer,y=o?c.isArrayBuffer:c.isBuffer,h=o?function(n,e){w(n,new Uint8Array(e))}:w,b=f&&n&&n.usemap?function(n,t){if(!(t instanceof Map))return x(n,t);var l=t.size;e[l<16?128+l:l<=65535?222:223](n,l);var o=n.codec.encode;t.forEach(function(e,t,l){o(n,t),o(n,e)})}:x;return{boolean:function(n,t){e[t?195:194](n,t)},function:g,number:function(n,t){var l,o=0|t;if(t!==o)return void e[l=203](n,t);l=-32<=o&&o<=127?255&o:0<=o?o<=255?204:o<=65535?205:206:-128<=o?208:-32768<=o?209:210;e[l](n,o)},object:t?function(n,t){if(y(t))return function(n,t){var l=t.length;e[l<32?160+l:l<=65535?218:219](n,l),n.send(t)}(n,t);v(n,t)}:v,string:function(n){return function(t,l){var o=l.length,i=5+3*o;t.offset=t.reserve(i);var r=t.buffer,c=n(o),s=t.offset+c;o=u.write.call(r,l,s);var a=n(o);if(c!==a){var m=s+a-c,d=s+o;u.copy.call(r,r,m,s,d)}e[1===a?160+o:a<=3?215+a:219](t,o),t.offset+=o}}(t?function(n){return n<32?1:n<=65535?3:5}:function(n){return n<32?1:n<=255?2:n<=65535?3:5}),symbol:g,undefined:g};function v(n,t){if(null===t)return g(n,t);if(y(t))return h(n,t);if(l(t))return function(n,t){var l=t.length;e[l<16?144+l:l<=65535?220:221](n,l);for(var o=n.codec.encode,i=0;i<l;i++)o(n,t[i])}(n,t);if(i.isUint64BE(t))return function(n,t){e[207](n,t.toArray())}(n,t);if(r.isInt64BE(t))return function(n,t){e[211](n,t.toArray())}(n,t);var o=n.codec.getExtPacker(t);if(o&&(t=o(t)),t instanceof m)return function(n,t){var l=t.buffer,o=l.length,i=p[o]||(o<255?199:o<=65535?200:201);e[i](n,o),a[t.type](n),n.send(l)}(n,t);b(n,t)}function g(n,t){e[192](n,t)}function w(n,t){var l=t.length,o=l<255?196:l<=65535?197:198;e[o](n,l),n.send(t)}function x(n,t){var l=Object.keys(t),o=l.length,i=o<16?128+o:o<=65535?222:223;e[i](n,o);var r=n.codec.encode;l.forEach(function(e){r(n,e),r(n,t[e])})}}},function(n,e,t){var l=t(23),o=t(19),i=o.Uint64BE,r=o.Int64BE,c=t(24).uint8,u=t(10),s=u.global,a=u.hasBuffer&&"TYPED_ARRAY_SUPPORT"in s&&!s.TYPED_ARRAY_SUPPORT,m=u.hasBuffer&&s.prototype||{};function d(){var n=c.slice();return n[196]=f(196),n[197]=p(197),n[198]=y(198),n[199]=f(199),n[200]=p(200),n[201]=y(201),n[202]=h(202,4,m.writeFloatBE||g,!0),n[203]=h(203,8,m.writeDoubleBE||w,!0),n[204]=f(204),n[205]=p(205),n[206]=y(206),n[207]=h(207,8,b),n[208]=f(208),n[209]=p(209),n[210]=y(210),n[211]=h(211,8,v),n[217]=f(217),n[218]=p(218),n[219]=y(219),n[220]=p(220),n[221]=y(221),n[222]=p(222),n[223]=y(223),n}function f(n){return function(e,t){var l=e.reserve(2),o=e.buffer;o[l++]=n,o[l]=t}}function p(n){return function(e,t){var l=e.reserve(3),o=e.buffer;o[l++]=n,o[l++]=t>>>8,o[l]=t}}function y(n){return function(e,t){var l=e.reserve(5),o=e.buffer;o[l++]=n,o[l++]=t>>>24,o[l++]=t>>>16,o[l++]=t>>>8,o[l]=t}}function h(n,e,t,l){return function(o,i){var r=o.reserve(e+1);o.buffer[r++]=n,t.call(o.buffer,i,r,l)}}function b(n,e){new i(this,e,n)}function v(n,e){new r(this,e,n)}function g(n,e){l.write(this,n,e,!1,23,4)}function w(n,e){l.write(this,n,e,!1,52,8)}e.getWriteToken=function(n){return n&&n.uint8array?function(){var n=d();return n[202]=h(202,4,g),n[203]=h(203,8,w),n}():a||u.hasBuffer&&n&&n.safe?function(){var n=c.slice();return n[196]=h(196,1,s.prototype.writeUInt8),n[197]=h(197,2,s.prototype.writeUInt16BE),n[198]=h(198,4,s.prototype.writeUInt32BE),n[199]=h(199,1,s.prototype.writeUInt8),n[200]=h(200,2,s.prototype.writeUInt16BE),n[201]=h(201,4,s.prototype.writeUInt32BE),n[202]=h(202,4,s.prototype.writeFloatBE),n[203]=h(203,8,s.prototype.writeDoubleBE),n[204]=h(204,1,s.prototype.writeUInt8),n[205]=h(205,2,s.prototype.writeUInt16BE),n[206]=h(206,4,s.prototype.writeUInt32BE),n[207]=h(207,8,b),n[208]=h(208,1,s.prototype.writeInt8),n[209]=h(209,2,s.prototype.writeInt16BE),n[210]=h(210,4,s.prototype.writeInt32BE),n[211]=h(211,8,v),n[217]=h(217,1,s.prototype.writeUInt8),n[218]=h(218,2,s.prototype.writeUInt16BE),n[219]=h(219,4,s.prototype.writeUInt32BE),n[220]=h(220,2,s.prototype.writeUInt16BE),n[221]=h(221,4,s.prototype.writeUInt32BE),n[222]=h(222,2,s.prototype.writeUInt16BE),n[223]=h(223,4,s.prototype.writeUInt32BE),n}():d()}},function(n,e,t){e.setExtUnpackers=function(n){n.addExtUnpacker(14,[c,s(Error)]),n.addExtUnpacker(1,[c,s(EvalError)]),n.addExtUnpacker(2,[c,s(RangeError)]),n.addExtUnpacker(3,[c,s(ReferenceError)]),n.addExtUnpacker(4,[c,s(SyntaxError)]),n.addExtUnpacker(5,[c,s(TypeError)]),n.addExtUnpacker(6,[c,s(URIError)]),n.addExtUnpacker(10,[c,u]),n.addExtUnpacker(11,[c,a(Boolean)]),n.addExtUnpacker(12,[c,a(String)]),n.addExtUnpacker(13,[c,a(Date)]),n.addExtUnpacker(15,[c,a(Number)]),"undefined"!=typeof Uint8Array&&(n.addExtUnpacker(17,a(Int8Array)),n.addExtUnpacker(18,a(Uint8Array)),n.addExtUnpacker(19,[m,a(Int16Array)]),n.addExtUnpacker(20,[m,a(Uint16Array)]),n.addExtUnpacker(21,[m,a(Int32Array)]),n.addExtUnpacker(22,[m,a(Uint32Array)]),n.addExtUnpacker(23,[m,a(Float32Array)]),"undefined"!=typeof Float64Array&&n.addExtUnpacker(24,[m,a(Float64Array)]),"undefined"!=typeof Uint8ClampedArray&&n.addExtUnpacker(25,a(Uint8ClampedArray)),n.addExtUnpacker(26,m),n.addExtUnpacker(29,[m,a(DataView)]));o.hasBuffer&&n.addExtUnpacker(27,a(i))};var l,o=t(10),i=o.global,r={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function c(n){return l||(l=t(26).decode),l(n)}function u(n){return RegExp.apply(null,n)}function s(n){return function(e){var t=new n;for(var l in r)t[l]=e[l];return t}}function a(n){return function(e){return new n(e)}}function m(n){return new Uint8Array(n).buffer}},function(n,e,t){var l=t(28);function o(n){var e,t=new Array(256);for(e=0;e<=127;e++)t[e]=i(e);for(e=128;e<=143;e++)t[e]=c(e-128,n.map);for(e=144;e<=159;e++)t[e]=c(e-144,n.array);for(e=160;e<=191;e++)t[e]=c(e-160,n.str);for(t[192]=i(null),t[193]=null,t[194]=i(!1),t[195]=i(!0),t[196]=r(n.uint8,n.bin),t[197]=r(n.uint16,n.bin),t[198]=r(n.uint32,n.bin),t[199]=r(n.uint8,n.ext),t[200]=r(n.uint16,n.ext),t[201]=r(n.uint32,n.ext),t[202]=n.float32,t[203]=n.float64,t[204]=n.uint8,t[205]=n.uint16,t[206]=n.uint32,t[207]=n.uint64,t[208]=n.int8,t[209]=n.int16,t[210]=n.int32,t[211]=n.int64,t[212]=c(1,n.ext),t[213]=c(2,n.ext),t[214]=c(4,n.ext),t[215]=c(8,n.ext),t[216]=c(16,n.ext),t[217]=r(n.uint8,n.str),t[218]=r(n.uint16,n.str),t[219]=r(n.uint32,n.str),t[220]=r(n.uint16,n.array),t[221]=r(n.uint32,n.array),t[222]=r(n.uint16,n.map),t[223]=r(n.uint32,n.map),e=224;e<=255;e++)t[e]=i(e-256);return t}function i(n){return function(){return n}}function r(n,e){return function(t){var l=n(t);return e(t,l)}}function c(n,e){return function(t){return e(t,n)}}e.getReadToken=function(n){var e=l.getReadFormat(n);return n&&n.useraw?function(n){var e,t=o(n).slice();for(t[217]=t[196],t[218]=t[197],t[219]=t[198],e=160;e<=191;e++)t[e]=c(e-160,n.bin);return t}(e):o(e)}},function(n,e,t){var l=t(29),o=t(22).EncodeBuffer;function i(n){if(!(this instanceof i))return new i(n);o.call(this,n)}i.prototype=new o,l.mixin(i.prototype),i.prototype.encode=function(n){this.write(n),this.emit("data",this.read())},i.prototype.end=function(n){arguments.length&&this.encode(n),this.flush(),this.emit("end")}},function(n,e,t){var l=t(29),o=t(27).DecodeBuffer;function i(n){if(!(this instanceof i))return new i(n);o.call(this,n)}i.prototype=new o,l.mixin(i.prototype),i.prototype.decode=function(n){arguments.length&&this.write(n),this.flush()},i.prototype.push=function(n){this.emit("data",n)},i.prototype.end=function(n){this.decode(n),this.emit("end")}},function(n,e,t){t(20),t(15),t(13).createCodec},function(n,e,t){t(20),t(15),t(13).preset},function(n,e,t){"use strict";t.r(e);var l=t(0),o=t.n(l),i=t(1),r=t.n(i),c=t(2),u=t.n(c),s=t(3),a=t.n(s),m=t(4),d=t.n(m),f=t(8),p=t.n(f),y=t(6),h=t.n(y),b=t(5),v=t.n(b),g=t(7),w=t.n(g),x=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/suite.js",e="979071e0cbeebf1bb888ed525238c1fbbf9e6afe",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/suite.js",statementMap:{0:{start:{line:7,column:4},end:{line:9,column:5}},1:{start:{line:8,column:6},end:{line:8,column:68}},2:{start:{line:10,column:4},end:{line:19,column:5}},3:{start:{line:18,column:6},end:{line:18,column:52}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:16},end:{line:20,column:3}},line:6}},branchMap:{0:{loc:{start:{line:7,column:4},end:{line:9,column:5}},type:"if",locations:[{start:{line:7,column:4},end:{line:9,column:5}},{start:{line:7,column:4},end:{line:9,column:5}}],line:7},1:{loc:{start:{line:10,column:4},end:{line:19,column:5}},type:"if",locations:[{start:{line:10,column:4},end:{line:19,column:5}},{start:{line:10,column:4},end:{line:19,column:5}}],line:10},2:{loc:{start:{line:11,column:6},end:{line:16,column:46}},type:"binary-expr",locations:[{start:{line:11,column:6},end:{line:11,column:48}},{start:{line:12,column:6},end:{line:12,column:44}},{start:{line:13,column:6},end:{line:13,column:44}},{start:{line:14,column:6},end:{line:14,column:41}},{start:{line:15,column:6},end:{line:15,column:43}},{start:{line:16,column:6},end:{line:16,column:46}}],line:11}},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{0:[0,0],1:[0,0],2:[0,0,0,0,0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}(),k=function n(){if(u()(this,n),x.f[0]++,x.s[0]++,(this instanceof n?this.constructor:void 0)===n)throw x.b[0][0]++,x.s[1]++,new TypeError("SuiteClassCannotBeInstantiatedDirectly");if(x.b[0][1]++,x.s[2]++,x.b[2][0]++,void 0===this.constructor.generateKey||(x.b[2][1]++,void 0===this.constructor.encrypt)||(x.b[2][2]++,void 0===this.constructor.decrypt)||(x.b[2][3]++,void 0===this.constructor.sign)||(x.b[2][4]++,void 0===this.constructor.verify)||(x.b[2][5]++,void 0===this.constructor.importKey))throw x.b[1][0]++,x.s[3]++,new TypeError("MustOverrideAllMethods");x.b[1][1]++},_=(function(){var n="/Users/jun/ProjectJavaScript/cascade/src/params.js",e="c5252760c740ce671b5d88dc2e8c199d4d6c2d60",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/params.js",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}(),{publicKeyIdLEN:32,publicKeyIdHash:"SHA-256",sessionKeyIdLength:32,sessionKeyIdHash:"SHA-256",jscu:{ivLengthAesGcm:12},openpgp:{defaultUser:"<example@example.com>",workerPathWeb:"./openpgp.worker.min.js",workerPathNode:"../node_modules/openpgp/dist/openpgp.worker.min.js",curveList:{"P-256":{name:"p256"},"P-384":{name:"p384"},"P-521":{name:"p521"}}}}),E=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/util.js",e="bc5d8c36ac591f050ea031549e6e87dad475fcf3",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/util.js",statementMap:{0:{start:{line:9,column:2},end:{line:18,column:3}},1:{start:{line:10,column:4},end:{line:10,column:23}},2:{start:{line:13,column:4},end:{line:17,column:5}},3:{start:{line:14,column:6},end:{line:14,column:40}},4:{start:{line:16,column:6},end:{line:16,column:56}},5:{start:{line:19,column:2},end:{line:19,column:14}},6:{start:{line:26,column:2},end:{line:35,column:3}},7:{start:{line:27,column:4},end:{line:27,column:29}},8:{start:{line:28,column:4},end:{line:28,column:46}},9:{start:{line:31,column:4},end:{line:31,column:33}},10:{start:{line:32,column:4},end:{line:32,column:47}},11:{start:{line:38,column:2},end:{line:42,column:3}},12:{start:{line:39,column:4},end:{line:39,column:43}},13:{start:{line:41,column:4},end:{line:41,column:29}},14:{start:{line:43,column:2},end:{line:43,column:37}},15:{start:{line:44,column:2},end:{line:44,column:52}},16:{start:{line:45,column:2},end:{line:45,column:67}},17:{start:{line:46,column:2},end:{line:46,column:68}},18:{start:{line:47,column:2},end:{line:47,column:62}},19:{start:{line:48,column:2},end:{line:48,column:42}},20:{start:{line:49,column:2},end:{line:49,column:37}},21:{start:{line:50,column:2},end:{line:50,column:38}},22:{start:{line:51,column:2},end:{line:51,column:38}},23:{start:{line:53,column:2},end:{line:53,column:17}}},fnMap:{0:{name:"getJscu",decl:{start:{line:7,column:16},end:{line:7,column:23}},loc:{start:{line:7,column:26},end:{line:20,column:1}},line:7},1:{name:"getOpenPgp",decl:{start:{line:22,column:16},end:{line:22,column:26}},loc:{start:{line:22,column:28},end:{line:54,column:1}},line:22}},branchMap:{0:{loc:{start:{line:9,column:2},end:{line:18,column:3}},type:"if",locations:[{start:{line:9,column:2},end:{line:18,column:3}},{start:{line:9,column:2},end:{line:18,column:3}}],line:9},1:{loc:{start:{line:9,column:6},end:{line:9,column:73}},type:"binary-expr",locations:[{start:{line:9,column:6},end:{line:9,column:35}},{start:{line:9,column:39},end:{line:9,column:73}}],line:9},2:{loc:{start:{line:26,column:2},end:{line:35,column:3}},type:"if",locations:[{start:{line:26,column:2},end:{line:35,column:3}},{start:{line:26,column:2},end:{line:35,column:3}}],line:26},3:{loc:{start:{line:26,column:5},end:{line:26,column:75}},type:"binary-expr",locations:[{start:{line:26,column:5},end:{line:26,column:34}},{start:{line:26,column:38},end:{line:26,column:75}}],line:26}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}();function j(){var n;if(E.f[0]++,E.s[0]++,E.b[1][0]++,"undefined"!=typeof window&&(E.b[1][1]++,void 0!==window.jscu))E.b[0][0]++,E.s[1]++,n=window.jscu;else{E.b[0][1]++,E.s[2]++;try{E.s[3]++,n=t(40)}catch(n){throw E.s[4]++,new Error("FailedToLoadJSCU: ".concat(n.message))}}return E.s[5]++,n}function A(){var n,e;E.f[1]++,E.s[6]++,E.b[3][0]++,"undefined"!=typeof window&&(E.b[3][1]++,void 0!==window.openpgp)?(E.b[2][0]++,E.s[7]++,n=window.openpgp,E.s[8]++,e=_.openpgp.workerPathWeb):(E.b[2][1]++,E.s[9]++,n=t(41),E.s[10]++,e=_.openpgp.workerPathNode),E.s[11]++;try{E.s[12]++,n.initWorker({path:e})}catch(n){E.s[13]++,console.error(n.message)}return E.s[14]++,n.config.aead_protect=!0,E.s[15]++,n.config.aead_mode=n.enums.aead.eax,E.s[16]++,n.config.prefer_hash_algorithm=n.enums.hash.sha512,E.s[17]++,n.config.encryption_cipher=n.enums.symmetric.aes256,E.s[18]++,n.config.compression=n.enums.compression.zlib,E.s[19]++,n.config.integrity_protect=!0,E.s[20]++,n.config.rsa_blinding=!0,E.s[21]++,n.config.show_version=!1,E.s[22]++,n.config.show_comment=!1,E.s[23]++,n}var K=t(9),S=t.n(K),U=t(11),P=t.n(U),I=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/keyid.js",e="207eec537b947d592bf13dabc55777d6bfe39edb",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/keyid.js",statementMap:{0:{start:{line:17,column:13},end:{line:17,column:39}},1:{start:{line:18,column:14},end:{line:18,column:53}},2:{start:{line:19,column:2},end:{line:19,column:40}},3:{start:{line:31,column:24},end:{line:31,column:90}},4:{start:{line:32,column:2},end:{line:32,column:50}},5:{start:{line:42,column:15},end:{line:42,column:24}},6:{start:{line:43,column:17},end:{line:43,column:70}},7:{start:{line:44,column:2},end:{line:44,column:43}},8:{start:{line:49,column:2},end:{line:49,column:75}},9:{start:{line:49,column:37},end:{line:49,column:75}},10:{start:{line:50,column:21},end:{line:50,column:37}},11:{start:{line:51,column:2},end:{line:51,column:31}},12:{start:{line:57,column:4},end:{line:57,column:17}},13:{start:{line:60,column:12},end:{line:60,column:61}},14:{start:{line:62,column:16},end:{line:62,column:36}},15:{start:{line:63,column:4},end:{line:63,column:26}},16:{start:{line:70,column:14},end:{line:70,column:29}},17:{start:{line:71,column:2},end:{line:71,column:20}},18:{start:{line:72,column:2},end:{line:72,column:13}},19:{start:{line:77,column:4},end:{line:77,column:72}},20:{start:{line:77,column:36},end:{line:77,column:72}},21:{start:{line:78,column:25},end:{line:81,column:6}},22:{start:{line:79,column:6},end:{line:79,column:60}},23:{start:{line:79,column:32},end:{line:79,column:60}},24:{start:{line:80,column:6},end:{line:80,column:15}},25:{start:{line:82,column:4},end:{line:82,column:31}},26:{start:{line:84,column:15},end:{line:84,column:57}},27:{start:{line:84,column:41},end:{line:84,column:55}},28:{start:{line:85,column:14},end:{line:85,column:38}},29:{start:{line:87,column:18},end:{line:87,column:54}}},fnMap:{0:{name:"fromOpenPgpKey",decl:{start:{line:16,column:16},end:{line:16,column:30}},loc:{start:{line:16,column:68},end:{line:20,column:1}},line:16},1:{name:"fromJscuKey",decl:{start:{line:30,column:22},end:{line:30,column:33}},loc:{start:{line:30,column:72},end:{line:33,column:1}},line:30},2:{name:"fromRawKey",decl:{start:{line:41,column:22},end:{line:41,column:32}},loc:{start:{line:41,column:71},end:{line:45,column:1}},line:41},3:{name:"createKeyId",decl:{start:{line:48,column:16},end:{line:48,column:27}},loc:{start:{line:48,column:34},end:{line:52,column:1}},line:48},4:{name:"(anonymous_4)",decl:{start:{line:56,column:2},end:{line:56,column:3}},loc:{start:{line:56,column:20},end:{line:58,column:3}},line:56},5:{name:"(anonymous_5)",decl:{start:{line:60,column:2},end:{line:60,column:3}},loc:{start:{line:60,column:10},end:{line:60,column:63}},line:60},6:{name:"(anonymous_6)",decl:{start:{line:61,column:2},end:{line:61,column:3}},loc:{start:{line:61,column:13},end:{line:64,column:3}},line:61},7:{name:"createKeyIdList",decl:{start:{line:69,column:16},end:{line:69,column:31}},loc:{start:{line:69,column:41},end:{line:73,column:1}},line:69},8:{name:"(anonymous_8)",decl:{start:{line:76,column:2},end:{line:76,column:3}},loc:{start:{line:76,column:15},end:{line:83,column:3}},line:76},9:{name:"(anonymous_9)",decl:{start:{line:78,column:37},end:{line:78,column:38}},loc:{start:{line:78,column:44},end:{line:81,column:5}},line:78},10:{name:"(anonymous_10)",decl:{start:{line:84,column:2},end:{line:84,column:3}},loc:{start:{line:84,column:13},end:{line:84,column:59}},line:84},11:{name:"(anonymous_11)",decl:{start:{line:84,column:32},end:{line:84,column:33}},loc:{start:{line:84,column:41},end:{line:84,column:55}},line:84},12:{name:"(anonymous_12)",decl:{start:{line:85,column:2},end:{line:85,column:3}},loc:{start:{line:85,column:12},end:{line:85,column:40}},line:85},13:{name:"(anonymous_13)",decl:{start:{line:87,column:2},end:{line:87,column:3}},loc:{start:{line:87,column:16},end:{line:87,column:56}},line:87}},branchMap:{0:{loc:{start:{line:16,column:42},end:{line:16,column:67}},type:"default-arg",locations:[{start:{line:16,column:46},end:{line:16,column:67}}],line:16},1:{loc:{start:{line:30,column:45},end:{line:30,column:70}},type:"default-arg",locations:[{start:{line:30,column:49},end:{line:30,column:70}}],line:30},2:{loc:{start:{line:41,column:38},end:{line:41,column:69}},type:"default-arg",locations:[{start:{line:41,column:44},end:{line:41,column:69}}],line:41},3:{loc:{start:{line:49,column:2},end:{line:49,column:75}},type:"if",locations:[{start:{line:49,column:2},end:{line:49,column:75}},{start:{line:49,column:2},end:{line:49,column:75}}],line:49},4:{loc:{start:{line:77,column:4},end:{line:77,column:72}},type:"if",locations:[{start:{line:77,column:4},end:{line:77,column:72}},{start:{line:77,column:4},end:{line:77,column:72}}],line:77},5:{loc:{start:{line:79,column:6},end:{line:79,column:60}},type:"if",locations:[{start:{line:79,column:6},end:{line:79,column:60}},{start:{line:79,column:6},end:{line:79,column:60}}],line:79}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0},b:{0:[0],1:[0],2:[0],3:[0,0],4:[0,0],5:[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}();function O(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(I.b[0][0]++,_.publicKeyIdLEN);I.f[0]++;var t=(I.s[0]++,n.getFingerprint()),l=(I.s[1]++,P.a.encoder.hexStringToArrayBuffer(t));return I.s[2]++,R(l.slice(0,e))}function B(n){return M.apply(this,arguments)}function M(){return(M=r()(o.a.mark(function n(e){var t,l,i=arguments;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:(I.b[1][0]++,_.publicKeyIdLEN),I.f[1]++,I.s[3]++,n.next=5,e.getJwkThumbprint(_.publicKeyIdHash,"binary");case 5:return l=n.sent,I.s[4]++,n.abrupt("return",R(l.slice(0,t)));case 8:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function T(n){return N.apply(this,arguments)}function N(){return(N=r()(o.a.mark(function n(e){var t,l,i,r=arguments;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:(I.b[2][0]++,_.sessionKeyIdLength),I.f[2]++,I.s[5]++,l=j(),I.s[6]++,n.next=6,l.hash.compute(e,_.sessionKeyIdHash);case 6:return i=n.sent,I.s[7]++,n.abrupt("return",R(i.slice(0,t)));case 9:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function R(n){if(I.f[3]++,I.s[8]++,!(n instanceof Uint8Array))throw I.b[3][0]++,I.s[9]++,new Error("NotUint8ArrayKeyId");I.b[3][1]++;var e=(I.s[10]++,d()(n));return I.s[11]++,new L(e)}var L=function(n){function e(n){return u()(this,e),I.f[4]++,I.s[12]++,h()(this,v()(e).call(this,n))}return w()(e,n),a()(e,[{key:"toHex",value:function(){return I.f[5]++,I.s[13]++,P.a.encoder.arrayBufferToHexString(this)}},{key:"toBuffer",value:function(){I.f[6]++;var n=(I.s[14]++,new Uint8Array(this));return I.s[15]++,d()(n)}}]),e}(S()(Uint8Array));function F(n){I.f[7]++;var e=(I.s[16]++,new C);return I.s[17]++,e._init(n),I.s[18]++,e}var C=function(n){function e(){return u()(this,e),h()(this,v()(e).apply(this,arguments))}return w()(e,n),a()(e,[{key:"_init",value:function(n){if(I.f[8]++,I.s[19]++,!(n instanceof Array))throw I.b[4][0]++,I.s[20]++,new Error("InvalidKeyIdList");I.b[4][1]++;var e=(I.s[21]++,n.map(function(n){if(I.f[9]++,I.s[22]++,!(n instanceof L))throw I.b[5][0]++,I.s[23]++,new Error("NotKeyId");return I.b[5][1]++,I.s[24]++,n}));I.s[25]++,this.push.apply(this,p()(e))}},{key:"toBuffer",value:function(){return I.f[10]++,I.s[26]++,this.map(function(n){return I.f[11]++,I.s[27]++,n.toBuffer()})}},{key:"toArray",value:function(){return I.f[12]++,I.s[28]++,Array.from(this)}},{key:"map",value:function(n){return I.f[13]++,I.s[29]++,this.toArray().map(n)}}]),e}(S()(Array)),D=t(12),J=t.n(D),G=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/encrypted_message.js",e="3aefa10bb60e0fa87e08fb31476fbd308aedb2e6",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/encrypted_message.js",statementMap:{0:{start:{line:10,column:15},end:{line:10,column:34}},1:{start:{line:11,column:17},end:{line:11,column:62}},2:{start:{line:15,column:2},end:{line:15,column:90}},3:{start:{line:15,column:43},end:{line:15,column:90}},4:{start:{line:17,column:2},end:{line:19,column:87}},5:{start:{line:18,column:4},end:{line:18,column:37}},6:{start:{line:19,column:16},end:{line:19,column:85}},7:{start:{line:21,column:2},end:{line:21,column:115}},8:{start:{line:21,column:66},end:{line:21,column:115}},9:{start:{line:23,column:22},end:{line:28,column:4}},10:{start:{line:25,column:4},end:{line:26,column:57}},11:{start:{line:25,column:36},end:{line:25,column:116}},12:{start:{line:25,column:83},end:{line:25,column:113}},13:{start:{line:26,column:9},end:{line:26,column:57}},14:{start:{line:27,column:4},end:{line:27,column:68}},15:{start:{line:30,column:2},end:{line:30,column:84}},16:{start:{line:34,column:2},end:{line:34,column:77}},17:{start:{line:34,column:33},end:{line:34,column:77}},18:{start:{line:35,column:2},end:{line:37,column:5}},19:{start:{line:36,column:4},end:{line:36,column:84}},20:{start:{line:36,column:37},end:{line:36,column:84}},21:{start:{line:39,column:2},end:{line:47,column:84}},22:{start:{line:40,column:4},end:{line:46,column:7}},23:{start:{line:41,column:22},end:{line:41,column:41}},24:{start:{line:43,column:6},end:{line:44,column:62}},25:{start:{line:43,column:41},end:{line:43,column:124}},26:{start:{line:43,column:91},end:{line:43,column:121}},27:{start:{line:44,column:11},end:{line:44,column:62}},28:{start:{line:45,column:6},end:{line:45,column:76}},29:{start:{line:47,column:16},end:{line:47,column:82}},30:{start:{line:49,column:2},end:{line:49,column:27}},31:{start:{line:55,column:2},end:{line:55,column:69}},32:{start:{line:55,column:33},end:{line:55,column:69}},33:{start:{line:56,column:2},end:{line:56,column:75}},34:{start:{line:56,column:37},end:{line:56,column:75}},35:{start:{line:58,column:2},end:{line:58,column:64}},36:{start:{line:62,column:2},end:{line:62,column:74}},37:{start:{line:62,column:37},end:{line:62,column:74}},38:{start:{line:63,column:2},end:{line:63,column:111}},39:{start:{line:63,column:66},end:{line:63,column:111}},40:{start:{line:65,column:2},end:{line:65,column:54}},41:{start:{line:70,column:4},end:{line:70,column:24}},42:{start:{line:71,column:4},end:{line:71,column:28}},43:{start:{line:72,column:4},end:{line:72,column:30}},44:{start:{line:73,column:4},end:{line:73,column:28}},45:{start:{line:77,column:4},end:{line:77,column:50}},46:{start:{line:78,column:4},end:{line:78,column:32}},47:{start:{line:82,column:24},end:{line:82,column:48}},48:{start:{line:83,column:4},end:{line:83,column:50}},49:{start:{line:84,column:4},end:{line:84,column:27}},50:{start:{line:85,column:4},end:{line:85,column:33}},51:{start:{line:89,column:4},end:{line:89,column:50}},52:{start:{line:90,column:4},end:{line:90,column:37}},53:{start:{line:93,column:16},end:{line:93,column:35}},54:{start:{line:94,column:18},end:{line:94,column:39}},55:{start:{line:95,column:18},end:{line:95,column:39}},56:{start:{line:96,column:18},end:{line:96,column:39}},57:{start:{line:99,column:4},end:{line:104,column:7}},58:{start:{line:110,column:4},end:{line:110,column:16}},59:{start:{line:111,column:4},end:{line:111,column:24}},60:{start:{line:112,column:4},end:{line:112,column:26}},61:{start:{line:115,column:15},end:{line:115,column:54}},62:{start:{line:118,column:16},end:{line:118,column:36}},63:{start:{line:119,column:4},end:{line:119,column:26}},64:{start:{line:123,column:4},end:{line:127,column:6}},65:{start:{line:131,column:4},end:{line:131,column:45}},66:{start:{line:134,column:16},end:{line:134,column:35}},67:{start:{line:135,column:17},end:{line:135,column:37}},68:{start:{line:140,column:4},end:{line:140,column:84}},69:{start:{line:140,column:37},end:{line:140,column:84}},70:{start:{line:141,column:26},end:{line:144,column:6}},71:{start:{line:142,column:6},end:{line:142,column:86}},72:{start:{line:142,column:47},end:{line:142,column:86}},73:{start:{line:143,column:6},end:{line:143,column:15}},74:{start:{line:145,column:4},end:{line:145,column:32}},75:{start:{line:148,column:17},end:{line:148,column:60}},76:{start:{line:148,column:42},end:{line:148,column:58}},77:{start:{line:149,column:14},end:{line:149,column:38}},78:{start:{line:151,column:18},end:{line:151,column:54}},79:{start:{line:152,column:21},end:{line:152,column:60}}},fnMap:{0:{name:"importEncryptedBuffer",decl:{start:{line:14,column:16},end:{line:14,column:37}},loc:{start:{line:14,column:49},end:{line:31,column:1}},line:14},1:{name:"(anonymous_1)",decl:{start:{line:23,column:39},end:{line:23,column:40}},loc:{start:{line:23,column:49},end:{line:28,column:3}},line:23},2:{name:"(anonymous_2)",decl:{start:{line:25,column:76},end:{line:25,column:77}},loc:{start:{line:25,column:83},end:{line:25,column:113}},line:25},3:{name:"importRawEncryptedBufferList",decl:{start:{line:33,column:16},end:{line:33,column:44}},loc:{start:{line:33,column:51},end:{line:50,column:1}},line:33},4:{name:"(anonymous_4)",decl:{start:{line:35,column:17},end:{line:35,column:18}},loc:{start:{line:35,column:26},end:{line:37,column:3}},line:35},5:{name:"(anonymous_5)",decl:{start:{line:40,column:35},end:{line:40,column:36}},loc:{start:{line:40,column:44},end:{line:46,column:5}},line:40},6:{name:"(anonymous_6)",decl:{start:{line:43,column:84},end:{line:43,column:85}},loc:{start:{line:43,column:91},end:{line:43,column:121}},line:43},7:{name:"createEncryptedMessage",decl:{start:{line:53,column:16},end:{line:53,column:38}},loc:{start:{line:53,column:78},end:{line:59,column:1}},line:53},8:{name:"createRawEncryptedMessage",decl:{start:{line:61,column:16},end:{line:61,column:41}},loc:{start:{line:61,column:63},end:{line:66,column:1}},line:61},9:{name:"(anonymous_9)",decl:{start:{line:69,column:2},end:{line:69,column:3}},loc:{start:{line:69,column:53},end:{line:74,column:3}},line:69},10:{name:"(anonymous_10)",decl:{start:{line:76,column:2},end:{line:76,column:3}},loc:{start:{line:76,column:23},end:{line:79,column:3}},line:76},11:{name:"(anonymous_11)",decl:{start:{line:81,column:2},end:{line:81,column:3}},loc:{start:{line:81,column:12},end:{line:86,column:3}},line:81},12:{name:"(anonymous_12)",decl:{start:{line:88,column:2},end:{line:88,column:3}},loc:{start:{line:88,column:23},end:{line:91,column:3}},line:88},13:{name:"(anonymous_13)",decl:{start:{line:93,column:2},end:{line:93,column:3}},loc:{start:{line:93,column:14},end:{line:93,column:37}},line:93},14:{name:"(anonymous_14)",decl:{start:{line:94,column:2},end:{line:94,column:3}},loc:{start:{line:94,column:16},end:{line:94,column:41}},line:94},15:{name:"(anonymous_15)",decl:{start:{line:95,column:2},end:{line:95,column:3}},loc:{start:{line:95,column:16},end:{line:95,column:41}},line:95},16:{name:"(anonymous_16)",decl:{start:{line:96,column:2},end:{line:96,column:3}},loc:{start:{line:96,column:16},end:{line:96,column:41}},line:96},17:{name:"(anonymous_17)",decl:{start:{line:98,column:2},end:{line:98,column:3}},loc:{start:{line:98,column:14},end:{line:105,column:3}},line:98},18:{name:"(anonymous_18)",decl:{start:{line:109,column:2},end:{line:109,column:3}},loc:{start:{line:109,column:40},end:{line:113,column:3}},line:109},19:{name:"(anonymous_19)",decl:{start:{line:115,column:2},end:{line:115,column:3}},loc:{start:{line:115,column:13},end:{line:115,column:56}},line:115},20:{name:"(anonymous_20)",decl:{start:{line:117,column:2},end:{line:117,column:3}},loc:{start:{line:117,column:13},end:{line:120,column:3}},line:117},21:{name:"(anonymous_21)",decl:{start:{line:122,column:2},end:{line:122,column:3}},loc:{start:{line:122,column:15},end:{line:128,column:3}},line:122},22:{name:"(anonymous_22)",decl:{start:{line:130,column:2},end:{line:130,column:3}},loc:{start:{line:130,column:14},end:{line:132,column:3}},line:130},23:{name:"(anonymous_23)",decl:{start:{line:134,column:2},end:{line:134,column:3}},loc:{start:{line:134,column:14},end:{line:134,column:37}},line:134},24:{name:"(anonymous_24)",decl:{start:{line:135,column:2},end:{line:135,column:3}},loc:{start:{line:135,column:15},end:{line:135,column:39}},line:135},25:{name:"(anonymous_25)",decl:{start:{line:139,column:2},end:{line:139,column:3}},loc:{start:{line:139,column:16},end:{line:146,column:3}},line:139},26:{name:"(anonymous_26)",decl:{start:{line:141,column:38},end:{line:141,column:39}},loc:{start:{line:141,column:45},end:{line:144,column:5}},line:141},27:{name:"(anonymous_27)",decl:{start:{line:148,column:2},end:{line:148,column:3}},loc:{start:{line:148,column:15},end:{line:148,column:62}},line:148},28:{name:"(anonymous_28)",decl:{start:{line:148,column:33},end:{line:148,column:34}},loc:{start:{line:148,column:42},end:{line:148,column:58}},line:148},29:{name:"(anonymous_29)",decl:{start:{line:149,column:2},end:{line:149,column:3}},loc:{start:{line:149,column:12},end:{line:149,column:40}},line:149},30:{name:"(anonymous_30)",decl:{start:{line:151,column:2},end:{line:151,column:3}},loc:{start:{line:151,column:16},end:{line:151,column:56}},line:151},31:{name:"(anonymous_31)",decl:{start:{line:152,column:2},end:{line:152,column:3}},loc:{start:{line:152,column:19},end:{line:152,column:62}},line:152}},branchMap:{0:{loc:{start:{line:15,column:2},end:{line:15,column:90}},type:"if",locations:[{start:{line:15,column:2},end:{line:15,column:90}},{start:{line:15,column:2},end:{line:15,column:90}}],line:15},1:{loc:{start:{line:21,column:2},end:{line:21,column:115}},type:"if",locations:[{start:{line:21,column:2},end:{line:21,column:115}},{start:{line:21,column:2},end:{line:21,column:115}}],line:21},2:{loc:{start:{line:21,column:6},end:{line:21,column:64}},type:"binary-expr",locations:[{start:{line:21,column:6},end:{line:21,column:16}},{start:{line:21,column:20},end:{line:21,column:32}},{start:{line:21,column:36},end:{line:21,column:48}},{start:{line:21,column:52},end:{line:21,column:64}}],line:21},3:{loc:{start:{line:25,column:4},end:{line:26,column:57}},type:"if",locations:[{start:{line:25,column:4},end:{line:26,column:57}},{start:{line:25,column:4},end:{line:26,column:57}}],line:25},4:{loc:{start:{line:34,column:2},end:{line:34,column:77}},type:"if",locations:[{start:{line:34,column:2},end:{line:34,column:77}},{start:{line:34,column:2},end:{line:34,column:77}}],line:34},5:{loc:{start:{line:36,column:4},end:{line:36,column:84}},type:"if",locations:[{start:{line:36,column:4},end:{line:36,column:84}},{start:{line:36,column:4},end:{line:36,column:84}}],line:36},6:{loc:{start:{line:43,column:6},end:{line:44,column:62}},type:"if",locations:[{start:{line:43,column:6},end:{line:44,column:62}},{start:{line:43,column:6},end:{line:44,column:62}}],line:43},7:{loc:{start:{line:53,column:64},end:{line:53,column:76}},type:"default-arg",locations:[{start:{line:53,column:74},end:{line:53,column:76}}],line:53},8:{loc:{start:{line:55,column:2},end:{line:55,column:69}},type:"if",locations:[{start:{line:55,column:2},end:{line:55,column:69}},{start:{line:55,column:2},end:{line:55,column:69}}],line:55},9:{loc:{start:{line:56,column:2},end:{line:56,column:75}},type:"if",locations:[{start:{line:56,column:2},end:{line:56,column:75}},{start:{line:56,column:2},end:{line:56,column:75}}],line:56},10:{loc:{start:{line:62,column:2},end:{line:62,column:74}},type:"if",locations:[{start:{line:62,column:2},end:{line:62,column:74}},{start:{line:62,column:2},end:{line:62,column:74}}],line:62},11:{loc:{start:{line:63,column:2},end:{line:63,column:111}},type:"if",locations:[{start:{line:63,column:2},end:{line:63,column:111}},{start:{line:63,column:2},end:{line:63,column:111}}],line:63},12:{loc:{start:{line:63,column:6},end:{line:63,column:64}},type:"binary-expr",locations:[{start:{line:63,column:6},end:{line:63,column:31}},{start:{line:63,column:35},end:{line:63,column:64}}],line:63},13:{loc:{start:{line:69,column:39},end:{line:69,column:51}},type:"default-arg",locations:[{start:{line:69,column:49},end:{line:69,column:51}}],line:69},14:{loc:{start:{line:109,column:27},end:{line:109,column:38}},type:"default-arg",locations:[{start:{line:109,column:36},end:{line:109,column:38}}],line:109},15:{loc:{start:{line:140,column:4},end:{line:140,column:84}},type:"if",locations:[{start:{line:140,column:4},end:{line:140,column:84}},{start:{line:140,column:4},end:{line:140,column:84}}],line:140},16:{loc:{start:{line:142,column:6},end:{line:142,column:86}},type:"if",locations:[{start:{line:142,column:6},end:{line:142,column:86}},{start:{line:142,column:6},end:{line:142,column:86}}],line:142}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0},b:{0:[0,0],1:[0,0],2:[0,0,0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0],14:[0],15:[0,0],16:[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}(),H=(G.s[0]++,["jscu","openpgp"]),V=(G.s[1]++,["public_key_encrypt","session_key_encrypt"]);function z(n){if(G.f[0]++,G.s[2]++,!(n instanceof Uint8Array))throw G.b[0][0]++,G.s[3]++,new Error("NonUint8ArraySerializedData");var e;G.b[0][1]++,G.s[4]++;try{G.s[5]++,e=J.a.decode(n)}catch(n){throw G.s[6]++,new Error("FailedToParseEncryptedMessageBuffer: ".concat(n.message))}if(G.s[7]++,G.b[2][0]++,!(e.suite&&(G.b[2][1]++,e.keyType)&&(G.b[2][2]++,e.message)&&(G.b[2][3]++,e.options)))throw G.b[1][0]++,G.s[8]++,new Error("InvalidEncryptedMessageFormat");G.b[1][1]++;var t=(G.s[9]++,e.message.map(function(n){var e;return G.f[1]++,G.s[10]++,n.keyId instanceof Array?(G.b[3][0]++,G.s[11]++,e=F(n.keyId.map(function(n){return G.f[2]++,G.s[12]++,R(new Uint8Array(n))}))):(G.b[3][1]++,G.s[13]++,e=R(new Uint8Array(n.keyId))),G.s[14]++,q(n.data,e,n.params)}));return G.s[15]++,W(e.suite,e.keyType,t,e.options)}function Y(n){if(G.f[3]++,G.s[16]++,!(n instanceof Array))throw G.b[4][0]++,G.s[17]++,new Error("NotArrayOfSerializedData");var e;G.b[4][1]++,G.s[18]++,n.forEach(function(n){if(G.f[4]++,G.s[19]++,!(n instanceof Uint8Array))throw G.b[5][0]++,G.s[20]++,new Error("NotUint8ArraySerializedData");G.b[5][1]++}),G.s[21]++;try{G.s[22]++,e=n.map(function(n){G.f[5]++;var e,t=(G.s[23]++,J.a.decode(n));return G.s[24]++,t.keyId instanceof Array?(G.b[6][0]++,G.s[25]++,e=F(t.keyId.map(function(n){return G.f[6]++,G.s[26]++,R(new Uint8Array(n))}))):(G.b[6][1]++,G.s[27]++,e=R(new Uint8Array(t.keyId))),G.s[28]++,q(t.data,e,t.params)})}catch(n){throw G.s[29]++,new Error("FailedToParseRawEncryptedMessage: ".concat(n.message))}return G.s[30]++,e}function W(n,e,t){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(G.b[7][0]++,{});if(G.f[7]++,G.s[31]++,H.indexOf(n)<0)throw G.b[8][0]++,G.s[32]++,new Error("UnsupportedSuite");if(G.b[8][1]++,G.s[33]++,V.indexOf(e)<0)throw G.b[9][0]++,G.s[34]++,new Error("UnsupportedKeyType");return G.b[9][1]++,G.s[35]++,new $(n,e,t,l)}function q(n,e,t){if(G.f[8]++,G.s[36]++,!(n instanceof Uint8Array))throw G.b[10][0]++,G.s[37]++,new Error("NonUint8ArrayData");if(G.b[10][1]++,G.s[38]++,G.b[12][0]++,!(e instanceof L||(G.b[12][1]++,e instanceof C)))throw G.b[11][0]++,G.s[39]++,new Error("NonKeyIdOrKeyIdListObject");return G.b[11][1]++,G.s[40]++,new Q(n,e,t)}var $=function(){function n(e,t,l){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(G.b[13][0]++,{});u()(this,n),G.f[9]++,G.s[41]++,this._suite=e,G.s[42]++,this._keyType=t,G.s[43]++,this._setMessage(l),G.s[44]++,this._options=o}return a()(n,[{key:"_setMessage",value:function(n){G.f[10]++,G.s[45]++,this._message=new X,G.s[46]++,this._message._set(n)}},{key:"extract",value:function(){G.f[11]++;var n=(G.s[47]++,d()(this._message));return G.s[48]++,this._message=new X,G.s[49]++,this._message._set([]),G.s[50]++,n.toArray()}},{key:"insert",value:function(n){G.f[12]++,G.s[51]++,this._message=new X,G.s[52]++,this._message._set(n)}},{key:"serialize",value:function(){return G.f[17]++,G.s[57]++,J.a.encode({suite:this._suite,keyType:this._keyType,message:this._message.toJsObject(),options:this._options})}},{key:"suite",get:function(){return G.f[13]++,G.s[53]++,this._suite}},{key:"keyType",get:function(){return G.f[14]++,G.s[54]++,this._keyType}},{key:"message",get:function(){return G.f[15]++,G.s[55]++,this._message}},{key:"options",get:function(){return G.f[16]++,G.s[56]++,this._options}}]),n}(),Q=function(n){function e(n,t){var l,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(G.b[14][0]++,{});return u()(this,e),G.f[18]++,G.s[58]++,l=h()(this,v()(e).call(this,n)),G.s[59]++,l._keyId=t,G.s[60]++,l._params=o,l}return w()(e,n),a()(e,[{key:"toBase64",value:function(){return G.f[19]++,G.s[61]++,P.a.encoder.encodeBase64(this)}},{key:"toBuffer",value:function(){G.f[20]++;var n=(G.s[62]++,new Uint8Array(this));return G.s[63]++,d()(n)}},{key:"toJsObject",value:function(){return G.f[21]++,G.s[64]++,{data:this.toBuffer(),keyId:this._keyId.toBuffer(),params:this._params}}},{key:"serialize",value:function(){return G.f[22]++,G.s[65]++,J.a.encode(this.toJsObject())}},{key:"keyId",get:function(){return G.f[23]++,G.s[66]++,this._keyId}},{key:"params",get:function(){return G.f[24]++,G.s[67]++,this._params}}]),e}(S()(Uint8Array)),X=function(n){function e(){return u()(this,e),h()(this,v()(e).apply(this,arguments))}return w()(e,n),a()(e,[{key:"_set",value:function(n){if(G.f[25]++,G.s[68]++,!(n instanceof Array))throw G.b[15][0]++,G.s[69]++,new Error("InvalidEncryptedMessageList");G.b[15][1]++;var e=(G.s[70]++,n.map(function(n){if(G.f[26]++,G.s[71]++,!(n instanceof Q))throw G.b[16][0]++,G.s[72]++,new Error("NotEncryptedMessage");return G.b[16][1]++,G.s[73]++,n}));G.s[74]++,this.push.apply(this,p()(e))}},{key:"toJsObject",value:function(){return G.f[27]++,G.s[75]++,this.map(function(n){return G.f[28]++,G.s[76]++,n.toJsObject()})}},{key:"toArray",value:function(){return G.f[29]++,G.s[77]++,Array.from(this)}},{key:"map",value:function(n){return G.f[30]++,G.s[78]++,this.toArray().map(n)}},{key:"filter",value:function(n){return G.f[31]++,G.s[79]++,this.toArray().filter(n)}}]),e}(S()(Array)),Z=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/signature.js",e="8c5fbaa864a13eb3222d627f46d0209a9f0d6eb3",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/signature.js",statementMap:{0:{start:{line:9,column:15},end:{line:9,column:34}},1:{start:{line:10,column:17},end:{line:10,column:36}},2:{start:{line:13,column:2},end:{line:13,column:90}},3:{start:{line:13,column:43},end:{line:13,column:90}},4:{start:{line:15,column:2},end:{line:17,column:80}},5:{start:{line:16,column:4},end:{line:16,column:37}},6:{start:{line:17,column:16},end:{line:17,column:78}},7:{start:{line:19,column:2},end:{line:19,column:111}},8:{start:{line:19,column:69},end:{line:19,column:111}},9:{start:{line:21,column:24},end:{line:21,column:110}},10:{start:{line:21,column:54},end:{line:21,column:108}},11:{start:{line:23,column:2},end:{line:23,column:78}},12:{start:{line:28,column:2},end:{line:28,column:68}},13:{start:{line:28,column:32},end:{line:28,column:68}},14:{start:{line:29,column:2},end:{line:29,column:74}},15:{start:{line:29,column:36},end:{line:29,column:74}},16:{start:{line:30,column:2},end:{line:30,column:101}},17:{start:{line:30,column:62},end:{line:30,column:101}},18:{start:{line:31,column:2},end:{line:31,column:78}},19:{start:{line:31,column:38},end:{line:31,column:78}},20:{start:{line:33,column:2},end:{line:33,column:60}},21:{start:{line:38,column:4},end:{line:38,column:24}},22:{start:{line:39,column:4},end:{line:39,column:28}},23:{start:{line:40,column:4},end:{line:40,column:53}},24:{start:{line:41,column:4},end:{line:41,column:28}},25:{start:{line:44,column:17},end:{line:44,column:36}},26:{start:{line:45,column:19},end:{line:45,column:40}},27:{start:{line:46,column:22},end:{line:46,column:46}},28:{start:{line:47,column:19},end:{line:47,column:40}},29:{start:{line:50,column:4},end:{line:55,column:7}},30:{start:{line:61,column:4},end:{line:61,column:12}},31:{start:{line:62,column:29},end:{line:65,column:6}},32:{start:{line:63,column:6},end:{line:63,column:82}},33:{start:{line:63,column:41},end:{line:63,column:82}},34:{start:{line:64,column:6},end:{line:64,column:17}},35:{start:{line:66,column:4},end:{line:66,column:35}},36:{start:{line:69,column:17},end:{line:69,column:58}},37:{start:{line:69,column:41},end:{line:69,column:55}},38:{start:{line:70,column:14},end:{line:70,column:38}},39:{start:{line:72,column:18},end:{line:72,column:54}},40:{start:{line:73,column:21},end:{line:73,column:60}},41:{start:{line:78,column:2},end:{line:78,column:77}},42:{start:{line:78,column:35},end:{line:78,column:77}},43:{start:{line:79,column:2},end:{line:79,column:66}},44:{start:{line:79,column:32},end:{line:79,column:66}},45:{start:{line:81,column:2},end:{line:81,column:38}},46:{start:{line:86,column:4},end:{line:86,column:15}},47:{start:{line:87,column:4},end:{line:87,column:24}},48:{start:{line:90,column:16},end:{line:90,column:55}},49:{start:{line:91,column:28},end:{line:91,column:48}},50:{start:{line:92,column:4},end:{line:92,column:26}},51:{start:{line:95,column:4},end:{line:98,column:6}},52:{start:{line:101,column:17},end:{line:101,column:36}}},fnMap:{0:{name:"importSignatureBuffer",decl:{start:{line:12,column:16},end:{line:12,column:37}},loc:{start:{line:12,column:49},end:{line:24,column:1}},line:12},1:{name:"(anonymous_1)",decl:{start:{line:21,column:44},end:{line:21,column:45}},loc:{start:{line:21,column:54},end:{line:21,column:108}},line:21},2:{name:"createSignature",decl:{start:{line:26,column:16},end:{line:26,column:31}},loc:{start:{line:26,column:73},end:{line:34,column:1}},line:26},3:{name:"(anonymous_3)",decl:{start:{line:37,column:2},end:{line:37,column:3}},loc:{start:{line:37,column:55},end:{line:42,column:3}},line:37},4:{name:"(anonymous_4)",decl:{start:{line:44,column:2},end:{line:44,column:3}},loc:{start:{line:44,column:15},end:{line:44,column:38}},line:44},5:{name:"(anonymous_5)",decl:{start:{line:45,column:2},end:{line:45,column:3}},loc:{start:{line:45,column:17},end:{line:45,column:42}},line:45},6:{name:"(anonymous_6)",decl:{start:{line:46,column:2},end:{line:46,column:3}},loc:{start:{line:46,column:20},end:{line:46,column:48}},line:46},7:{name:"(anonymous_7)",decl:{start:{line:47,column:2},end:{line:47,column:3}},loc:{start:{line:47,column:17},end:{line:47,column:42}},line:47},8:{name:"(anonymous_8)",decl:{start:{line:49,column:2},end:{line:49,column:3}},loc:{start:{line:49,column:15},end:{line:56,column:3}},line:49},9:{name:"(anonymous_9)",decl:{start:{line:60,column:2},end:{line:60,column:3}},loc:{start:{line:60,column:25},end:{line:67,column:3}},line:60},10:{name:"(anonymous_10)",decl:{start:{line:62,column:45},end:{line:62,column:46}},loc:{start:{line:62,column:54},end:{line:65,column:5}},line:62},11:{name:"(anonymous_11)",decl:{start:{line:69,column:2},end:{line:69,column:3}},loc:{start:{line:69,column:15},end:{line:69,column:60}},line:69},12:{name:"(anonymous_12)",decl:{start:{line:69,column:34},end:{line:69,column:35}},loc:{start:{line:69,column:41},end:{line:69,column:55}},line:69},13:{name:"(anonymous_13)",decl:{start:{line:70,column:2},end:{line:70,column:3}},loc:{start:{line:70,column:12},end:{line:70,column:40}},line:70},14:{name:"(anonymous_14)",decl:{start:{line:72,column:2},end:{line:72,column:3}},loc:{start:{line:72,column:16},end:{line:72,column:56}},line:72},15:{name:"(anonymous_15)",decl:{start:{line:73,column:2},end:{line:73,column:3}},loc:{start:{line:73,column:19},end:{line:73,column:62}},line:73},16:{name:"createRawSignature",decl:{start:{line:76,column:16},end:{line:76,column:34}},loc:{start:{line:76,column:46},end:{line:82,column:1}},line:76},17:{name:"(anonymous_17)",decl:{start:{line:85,column:2},end:{line:85,column:3}},loc:{start:{line:85,column:25},end:{line:88,column:3}},line:85},18:{name:"(anonymous_18)",decl:{start:{line:90,column:2},end:{line:90,column:3}},loc:{start:{line:90,column:14},end:{line:90,column:57}},line:90},19:{name:"(anonymous_19)",decl:{start:{line:91,column:2},end:{line:91,column:3}},loc:{start:{line:91,column:14},end:{line:93,column:3}},line:91},20:{name:"(anonymous_20)",decl:{start:{line:94,column:2},end:{line:94,column:3}},loc:{start:{line:94,column:16},end:{line:99,column:3}},line:94},21:{name:"(anonymous_21)",decl:{start:{line:101,column:2},end:{line:101,column:3}},loc:{start:{line:101,column:15},end:{line:101,column:38}},line:101}},branchMap:{0:{loc:{start:{line:13,column:2},end:{line:13,column:90}},type:"if",locations:[{start:{line:13,column:2},end:{line:13,column:90}},{start:{line:13,column:2},end:{line:13,column:90}}],line:13},1:{loc:{start:{line:19,column:2},end:{line:19,column:111}},type:"if",locations:[{start:{line:19,column:2},end:{line:19,column:111}},{start:{line:19,column:2},end:{line:19,column:111}}],line:19},2:{loc:{start:{line:19,column:6},end:{line:19,column:67}},type:"binary-expr",locations:[{start:{line:19,column:6},end:{line:19,column:16}},{start:{line:19,column:20},end:{line:19,column:32}},{start:{line:19,column:36},end:{line:19,column:51}},{start:{line:19,column:55},end:{line:19,column:67}}],line:19},3:{loc:{start:{line:26,column:60},end:{line:26,column:72}},type:"default-arg",locations:[{start:{line:26,column:70},end:{line:26,column:72}}],line:26},4:{loc:{start:{line:28,column:2},end:{line:28,column:68}},type:"if",locations:[{start:{line:28,column:2},end:{line:28,column:68}},{start:{line:28,column:2},end:{line:28,column:68}}],line:28},5:{loc:{start:{line:29,column:2},end:{line:29,column:74}},type:"if",locations:[{start:{line:29,column:2},end:{line:29,column:74}},{start:{line:29,column:2},end:{line:29,column:74}}],line:29},6:{loc:{start:{line:30,column:2},end:{line:30,column:101}},type:"if",locations:[{start:{line:30,column:2},end:{line:30,column:101}},{start:{line:30,column:2},end:{line:30,column:101}}],line:30},7:{loc:{start:{line:30,column:5},end:{line:30,column:60}},type:"binary-expr",locations:[{start:{line:30,column:5},end:{line:30,column:21}},{start:{line:30,column:25},end:{line:30,column:60}}],line:30},8:{loc:{start:{line:31,column:2},end:{line:31,column:78}},type:"if",locations:[{start:{line:31,column:2},end:{line:31,column:78}},{start:{line:31,column:2},end:{line:31,column:78}}],line:31},9:{loc:{start:{line:37,column:42},end:{line:37,column:54}},type:"default-arg",locations:[{start:{line:37,column:52},end:{line:37,column:54}}],line:37},10:{loc:{start:{line:63,column:6},end:{line:63,column:82}},type:"if",locations:[{start:{line:63,column:6},end:{line:63,column:82}},{start:{line:63,column:6},end:{line:63,column:82}}],line:63},11:{loc:{start:{line:78,column:2},end:{line:78,column:77}},type:"if",locations:[{start:{line:78,column:2},end:{line:78,column:77}},{start:{line:78,column:2},end:{line:78,column:77}}],line:78},12:{loc:{start:{line:79,column:2},end:{line:79,column:66}},type:"if",locations:[{start:{line:79,column:2},end:{line:79,column:66}},{start:{line:79,column:2},end:{line:79,column:66}}],line:79}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0},b:{0:[0,0],1:[0,0],2:[0,0,0,0],3:[0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0],10:[0,0],11:[0,0],12:[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}(),nn=(Z.s[0]++,["jscu","openpgp"]),en=(Z.s[1]++,["public_key_sign"]);function tn(n){if(Z.f[0]++,Z.s[2]++,!(n instanceof Uint8Array))throw Z.b[0][0]++,Z.s[3]++,new Error("NonUint8ArraySerializedData");var e;Z.b[0][1]++,Z.s[4]++;try{Z.s[5]++,e=J.a.decode(n)}catch(n){throw Z.s[6]++,new Error("FailedToParseSignatureBuffer: ".concat(n.message))}if(Z.s[7]++,Z.b[2][0]++,!(e.suite&&(Z.b[2][1]++,e.keyType)&&(Z.b[2][2]++,e.signatures)&&(Z.b[2][3]++,e.options)))throw Z.b[1][0]++,Z.s[8]++,new Error("InvalidSignatureFormat");Z.b[1][1]++;var t=(Z.s[9]++,e.signatures.map(function(n){return Z.f[1]++,Z.s[10]++,cn(n.data,R(n.keyId))}));return Z.s[11]++,ln(e.suite,e.keyType,t,e.options)}function ln(n,e,t){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(Z.b[3][0]++,{});if(Z.f[2]++,Z.s[12]++,nn.indexOf(n)<0)throw Z.b[4][0]++,Z.s[13]++,new Error("UnsupportedSuite");if(Z.b[4][1]++,Z.s[14]++,en.indexOf(e)<0)throw Z.b[5][0]++,Z.s[15]++,new Error("UnsupportedKeyType");if(Z.b[5][1]++,Z.s[16]++,Z.b[7][0]++,"jscu"===n&&(Z.b[7][1]++,void 0===l.hash))throw Z.b[6][0]++,Z.s[17]++,new Error("HashMustBeSpecified");if(Z.b[6][1]++,Z.s[18]++,!(t instanceof Array))throw Z.b[8][0]++,Z.s[19]++,new Error("InvalidSignatureList");return Z.b[8][1]++,Z.s[20]++,new on(n,e,t,l)}var on=function(){function n(e,t,l){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(Z.b[9][0]++,{});u()(this,n),Z.f[3]++,Z.s[21]++,this._suite=e,Z.s[22]++,this._keyType=t,Z.s[23]++,this._signatures=new rn(l),Z.s[24]++,this._options=o}return a()(n,[{key:"serialize",value:function(){return Z.f[8]++,Z.s[29]++,J.a.encode({suite:this._suite,keyType:this._keyType,signatures:this._signatures.toJsObject(),options:this._options})}},{key:"suite",get:function(){return Z.f[4]++,Z.s[25]++,this._suite}},{key:"keyType",get:function(){return Z.f[5]++,Z.s[26]++,this._keyType}},{key:"signatures",get:function(){return Z.f[6]++,Z.s[27]++,this._signatures}},{key:"options",get:function(){return Z.f[7]++,Z.s[28]++,this._options}}]),n}(),rn=function(n){function e(n){var t,l;u()(this,e),Z.f[9]++,Z.s[30]++,l=h()(this,v()(e).call(this));var o=(Z.s[31]++,n.map(function(n){if(Z.f[10]++,Z.s[32]++,!(n instanceof un))throw Z.b[10][0]++,Z.s[33]++,new Error("NotRawSignatureObject");return Z.b[10][1]++,Z.s[34]++,n}));return Z.s[35]++,(t=l).push.apply(t,p()(o)),l}return w()(e,n),a()(e,[{key:"toJsObject",value:function(){return Z.f[11]++,Z.s[36]++,this.map(function(n){return Z.f[12]++,Z.s[37]++,n.toJsObject()})}},{key:"toArray",value:function(){return Z.f[13]++,Z.s[38]++,Array.from(this)}},{key:"map",value:function(n){return Z.f[14]++,Z.s[39]++,this.toArray().map(n)}},{key:"filter",value:function(n){return Z.f[15]++,Z.s[40]++,this.toArray().filter(n)}}]),e}(S()(Array));function cn(n,e){if(Z.f[16]++,Z.s[41]++,!(n instanceof Uint8Array))throw Z.b[11][0]++,Z.s[42]++,new Error("NonUint8ArraySignature");if(Z.b[11][1]++,Z.s[43]++,!(e instanceof L))throw Z.b[12][0]++,Z.s[44]++,new Error("NonKeyIdObject");return Z.b[12][1]++,Z.s[45]++,new un(n,e)}var un=function(n){function e(n,t){var l;return u()(this,e),Z.f[17]++,Z.s[46]++,l=h()(this,v()(e).call(this,n)),Z.s[47]++,l._keyId=t,l}return w()(e,n),a()(e,[{key:"toBase64",value:function(){return Z.f[18]++,Z.s[48]++,P.a.encoder.encodeBase64(this)}},{key:"toBuffer",value:function(){Z.f[19]++;var n=(Z.s[49]++,new Uint8Array(this));return Z.s[50]++,d()(n)}},{key:"toJsObject",value:function(){return Z.f[20]++,Z.s[51]++,{data:this.toBuffer(),keyId:this._keyId.toBuffer()}}},{key:"keyId",get:function(){return Z.f[21]++,Z.s[52]++,this._keyId}}]),e}(S()(Uint8Array)),sn=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/suite_jscu.js",e="9f78e4155ab062b20f4285b16001a2f95e53507c",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/suite_jscu.js",statementMap:{0:{start:{line:21,column:17},end:{line:21,column:26}},1:{start:{line:23,column:4},end:{line:54,column:51}},2:{start:{line:24,column:6},end:{line:24,column:77}},3:{start:{line:24,column:26},end:{line:24,column:77}},4:{start:{line:25,column:21},end:{line:25,column:68}},5:{start:{line:26,column:20},end:{line:26,column:54}},6:{start:{line:27,column:6},end:{line:30,column:8}},7:{start:{line:32,column:9},end:{line:54,column:51}},8:{start:{line:33,column:22},end:{line:33,column:59}},9:{start:{line:34,column:22},end:{line:34,column:113}},10:{start:{line:36,column:21},end:{line:36,column:65}},11:{start:{line:37,column:20},end:{line:37,column:86}},12:{start:{line:39,column:27},end:{line:39,column:64}},13:{start:{line:40,column:26},end:{line:40,column:64}},14:{start:{line:43,column:6},end:{line:46,column:7}},15:{start:{line:44,column:29},end:{line:44,column:124}},16:{start:{line:45,column:8},end:{line:45,column:58}},17:{start:{line:48,column:6},end:{line:52,column:8}},18:{start:{line:54,column:9},end:{line:54,column:51}},19:{start:{line:65,column:17},end:{line:65,column:26}},20:{start:{line:67,column:19},end:{line:67,column:42}},21:{start:{line:69,column:4},end:{line:74,column:5}},22:{start:{line:70,column:6},end:{line:70,column:60}},23:{start:{line:70,column:22},end:{line:70,column:60}},24:{start:{line:71,column:6},end:{line:73,column:9}},25:{start:{line:72,column:8},end:{line:72,column:67}},26:{start:{line:76,column:4},end:{line:76,column:18}},27:{start:{line:87,column:17},end:{line:87,column:26}},28:{start:{line:90,column:4},end:{line:90,column:52}},29:{start:{line:90,column:39},end:{line:90,column:52}},30:{start:{line:95,column:4},end:{line:140,column:53}},31:{start:{line:97,column:6},end:{line:101,column:7}},32:{start:{line:98,column:8},end:{line:98,column:127}},33:{start:{line:99,column:8},end:{line:99,column:68}},34:{start:{line:100,column:8},end:{line:100,column:38}},35:{start:{line:104,column:6},end:{line:110,column:7}},36:{start:{line:105,column:20},end:{line:105,column:58}},37:{start:{line:106,column:8},end:{line:109,column:9}},38:{start:{line:107,column:28},end:{line:107,column:83}},39:{start:{line:108,column:10},end:{line:108,column:52}},40:{start:{line:112,column:6},end:{line:118,column:10}},41:{start:{line:113,column:26},end:{line:113,column:58}},42:{start:{line:114,column:21},end:{line:114,column:79}},43:{start:{line:115,column:20},end:{line:115,column:45}},44:{start:{line:116,column:8},end:{line:116,column:25}},45:{start:{line:117,column:8},end:{line:117,column:95}},46:{start:{line:121,column:6},end:{line:125,column:7}},47:{start:{line:122,column:26},end:{line:122,column:65}},48:{start:{line:123,column:8},end:{line:123,column:80}},49:{start:{line:124,column:8},end:{line:124,column:34}},50:{start:{line:127,column:6},end:{line:127,column:108}},51:{start:{line:129,column:9},end:{line:140,column:53}},52:{start:{line:130,column:6},end:{line:137,column:61}},53:{start:{line:131,column:19},end:{line:131,column:79}},54:{start:{line:132,column:21},end:{line:132,column:102}},55:{start:{line:133,column:22},end:{line:133,column:65}},56:{start:{line:134,column:20},end:{line:134,column:64}},57:{start:{line:135,column:8},end:{line:135,column:26}},58:{start:{line:137,column:11},end:{line:137,column:61}},59:{start:{line:138,column:6},end:{line:138,column:109}},60:{start:{line:140,column:9},end:{line:140,column:53}},61:{start:{line:142,column:4},end:{line:142,column:27}},62:{start:{line:153,column:4},end:{line:153,column:93}},63:{start:{line:153,column:50},end:{line:153,column:93}},64:{start:{line:154,column:4},end:{line:154,column:90}},65:{start:{line:154,column:55},end:{line:154,column:90}},66:{start:{line:155,column:17},end:{line:155,column:26}},67:{start:{line:157,column:20},end:{line:157,column:45}},68:{start:{line:161,column:4},end:{line:218,column:61}},69:{start:{line:163,column:6},end:{line:163,column:71}},70:{start:{line:163,column:29},end:{line:163,column:71}},71:{start:{line:164,column:6},end:{line:167,column:7}},72:{start:{line:165,column:8},end:{line:165,column:75}},73:{start:{line:166,column:8},end:{line:166,column:66}},74:{start:{line:170,column:35},end:{line:177,column:7}},75:{start:{line:171,column:21},end:{line:171,column:41}},76:{start:{line:172,column:21},end:{line:172,column:103}},77:{start:{line:173,column:19},end:{line:173,column:97}},78:{start:{line:174,column:27},end:{line:174,column:63}},79:{start:{line:175,column:27},end:{line:175,column:63}},80:{start:{line:176,column:8},end:{line:176,column:68}},81:{start:{line:180,column:24},end:{line:180,column:26}},82:{start:{line:181,column:6},end:{line:185,column:10}},83:{start:{line:182,column:22},end:{line:182,column:53}},84:{start:{line:183,column:25},end:{line:183,column:102}},85:{start:{line:183,column:67},end:{line:183,column:100}},86:{start:{line:184,column:8},end:{line:184,column:80}},87:{start:{line:184,column:47},end:{line:184,column:75}},88:{start:{line:186,column:6},end:{line:186,column:88}},89:{start:{line:186,column:34},end:{line:186,column:88}},90:{start:{line:188,column:19},end:{line:188,column:21}},91:{start:{line:189,column:29},end:{line:193,column:9}},92:{start:{line:190,column:18},end:{line:190,column:112}},93:{start:{line:190,column:90},end:{line:190,column:109}},94:{start:{line:191,column:8},end:{line:192,column:25}},95:{start:{line:191,column:14},end:{line:191,column:23}},96:{start:{line:192,column:13},end:{line:192,column:25}},97:{start:{line:194,column:26},end:{line:194,column:69}},98:{start:{line:194,column:57},end:{line:194,column:67}},99:{start:{line:196,column:6},end:{line:197,column:35}},100:{start:{line:196,column:33},end:{line:196,column:60}},101:{start:{line:197,column:11},end:{line:197,column:35}},102:{start:{line:201,column:9},end:{line:218,column:61}},103:{start:{line:203,column:6},end:{line:203,column:70}},104:{start:{line:203,column:28},end:{line:203,column:70}},105:{start:{line:204,column:6},end:{line:204,column:92}},106:{start:{line:204,column:57},end:{line:204,column:92}},107:{start:{line:206,column:22},end:{line:206,column:50}},108:{start:{line:207,column:17},end:{line:207,column:86}},109:{start:{line:209,column:6},end:{line:216,column:61}},110:{start:{line:210,column:8},end:{line:214,column:10}},111:{start:{line:216,column:11},end:{line:216,column:61}},112:{start:{line:218,column:9},end:{line:218,column:61}},113:{start:{line:220,column:4},end:{line:220,column:29}},114:{start:{line:231,column:4},end:{line:231,column:68}},115:{start:{line:231,column:26},end:{line:231,column:68}},116:{start:{line:233,column:17},end:{line:233,column:26}},117:{start:{line:235,column:23},end:{line:241,column:7}},118:{start:{line:236,column:25},end:{line:236,column:52}},119:{start:{line:237,column:24},end:{line:237,column:126}},120:{start:{line:238,column:20},end:{line:238,column:56}},121:{start:{line:240,column:6},end:{line:240,column:50}},122:{start:{line:243,column:4},end:{line:243,column:89}},123:{start:{line:255,column:4},end:{line:255,column:72}},124:{start:{line:255,column:25},end:{line:255,column:72}},125:{start:{line:257,column:17},end:{line:257,column:26}},126:{start:{line:259,column:28},end:{line:259,column:30}},127:{start:{line:260,column:23},end:{line:260,column:25}},128:{start:{line:261,column:4},end:{line:271,column:8}},129:{start:{line:262,column:20},end:{line:262,column:51}},130:{start:{line:263,column:23},end:{line:269,column:8}},131:{start:{line:264,column:8},end:{line:268,column:9}},132:{start:{line:264,column:46},end:{line:264,column:58}},133:{start:{line:266,column:10},end:{line:266,column:62}},134:{start:{line:267,column:10},end:{line:267,column:23}},135:{start:{line:270,column:6},end:{line:270,column:85}},136:{start:{line:270,column:51},end:{line:270,column:80}},137:{start:{line:273,column:21},end:{line:282,column:7}},138:{start:{line:274,column:20},end:{line:280,column:7}},139:{start:{line:281,column:6},end:{line:281,column:52}},140:{start:{line:284,column:4},end:{line:284,column:39}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:20,column:2},end:{line:20,column:3}},loc:{start:{line:20,column:73},end:{line:55,column:3}},line:20},1:{name:"(anonymous_1)",decl:{start:{line:64,column:2},end:{line:64,column:3}},loc:{start:{line:64,column:47},end:{line:77,column:3}},line:64},2:{name:"(anonymous_2)",decl:{start:{line:71,column:46},end:{line:71,column:47}},loc:{start:{line:71,column:53},end:{line:73,column:7}},line:71},3:{name:"(anonymous_3)",decl:{start:{line:86,column:2},end:{line:86,column:3}},loc:{start:{line:86,column:49},end:{line:143,column:3}},line:86},4:{name:"(anonymous_4)",decl:{start:{line:112,column:57},end:{line:112,column:58}},loc:{start:{line:112,column:81},end:{line:118,column:7}},line:112},5:{name:"(anonymous_5)",decl:{start:{line:152,column:2},end:{line:152,column:3}},loc:{start:{line:152,column:52},end:{line:221,column:3}},line:152},6:{name:"(anonymous_6)",decl:{start:{line:170,column:35},end:{line:170,column:36}},loc:{start:{line:170,column:74},end:{line:177,column:7}},line:170},7:{name:"(anonymous_7)",decl:{start:{line:181,column:46},end:{line:181,column:47}},loc:{start:{line:181,column:60},end:{line:185,column:7}},line:181},8:{name:"(anonymous_8)",decl:{start:{line:183,column:59},end:{line:183,column:60}},loc:{start:{line:183,column:67},end:{line:183,column:100}},line:183},9:{name:"(anonymous_9)",decl:{start:{line:184,column:39},end:{line:184,column:40}},loc:{start:{line:184,column:47},end:{line:184,column:75}},line:184},10:{name:"(anonymous_10)",decl:{start:{line:189,column:62},end:{line:189,column:63}},loc:{start:{line:189,column:77},end:{line:193,column:7}},line:189},11:{name:"(anonymous_11)",decl:{start:{line:190,column:81},end:{line:190,column:82}},loc:{start:{line:190,column:88},end:{line:190,column:111}},line:190},12:{name:"(anonymous_12)",decl:{start:{line:194,column:49},end:{line:194,column:50}},loc:{start:{line:194,column:57},end:{line:194,column:67}},line:194},13:{name:"(anonymous_13)",decl:{start:{line:230,column:2},end:{line:230,column:3}},loc:{start:{line:230,column:45},end:{line:244,column:3}},line:230},14:{name:"(anonymous_14)",decl:{start:{line:235,column:63},end:{line:235,column:64}},loc:{start:{line:235,column:82},end:{line:241,column:5}},line:235},15:{name:"(anonymous_15)",decl:{start:{line:254,column:2},end:{line:254,column:3}},loc:{start:{line:254,column:58},end:{line:285,column:3}},line:254},16:{name:"(anonymous_16)",decl:{start:{line:261,column:43},end:{line:261,column:44}},loc:{start:{line:261,column:57},end:{line:271,column:5}},line:261},17:{name:"(anonymous_17)",decl:{start:{line:263,column:52},end:{line:263,column:53}},loc:{start:{line:263,column:59},end:{line:269,column:7}},line:263},18:{name:"(anonymous_18)",decl:{start:{line:270,column:43},end:{line:270,column:44}},loc:{start:{line:270,column:51},end:{line:270,column:80}},line:270},19:{name:"(anonymous_19)",decl:{start:{line:273,column:60},end:{line:273,column:61}},loc:{start:{line:273,column:78},end:{line:282,column:5}},line:273}},branchMap:{0:{loc:{start:{line:20,column:36},end:{line:20,column:51}},type:"default-arg",locations:[{start:{line:20,column:47},end:{line:20,column:51}}],line:20},1:{loc:{start:{line:20,column:53},end:{line:20,column:70}},type:"default-arg",locations:[{start:{line:20,column:68},end:{line:20,column:70}}],line:20},2:{loc:{start:{line:23,column:4},end:{line:54,column:51}},type:"if",locations:[{start:{line:23,column:4},end:{line:54,column:51}},{start:{line:23,column:4},end:{line:54,column:51}}],line:23},3:{loc:{start:{line:24,column:6},end:{line:24,column:77}},type:"if",locations:[{start:{line:24,column:6},end:{line:24,column:77}},{start:{line:24,column:6},end:{line:24,column:77}}],line:24},4:{loc:{start:{line:32,column:9},end:{line:54,column:51}},type:"if",locations:[{start:{line:32,column:9},end:{line:54,column:51}},{start:{line:32,column:9},end:{line:54,column:51}}],line:32},5:{loc:{start:{line:32,column:13},end:{line:32,column:58}},type:"binary-expr",locations:[{start:{line:32,column:13},end:{line:32,column:33}},{start:{line:32,column:37},end:{line:32,column:58}}],line:32},6:{loc:{start:{line:33,column:22},end:{line:33,column:59}},type:"cond-expr",locations:[{start:{line:33,column:47},end:{line:33,column:51}},{start:{line:33,column:54},end:{line:33,column:59}}],line:33},7:{loc:{start:{line:34,column:22},end:{line:34,column:113}},type:"cond-expr",locations:[{start:{line:34,column:47},end:{line:34,column:73}},{start:{line:34,column:76},end:{line:34,column:113}}],line:34},8:{loc:{start:{line:43,column:6},end:{line:46,column:7}},type:"if",locations:[{start:{line:43,column:6},end:{line:46,column:7}},{start:{line:43,column:6},end:{line:46,column:7}}],line:43},9:{loc:{start:{line:69,column:4},end:{line:74,column:5}},type:"if",locations:[{start:{line:69,column:4},end:{line:74,column:5}},{start:{line:69,column:4},end:{line:74,column:5}}],line:69},10:{loc:{start:{line:69,column:7},end:{line:69,column:45}},type:"binary-expr",locations:[{start:{line:69,column:7},end:{line:69,column:23}},{start:{line:69,column:27},end:{line:69,column:45}}],line:69},11:{loc:{start:{line:70,column:6},end:{line:70,column:60}},type:"if",locations:[{start:{line:70,column:6},end:{line:70,column:60}},{start:{line:70,column:6},end:{line:70,column:60}}],line:70},12:{loc:{start:{line:90,column:4},end:{line:90,column:52}},type:"if",locations:[{start:{line:90,column:4},end:{line:90,column:52}},{start:{line:90,column:4},end:{line:90,column:52}}],line:90},13:{loc:{start:{line:95,column:4},end:{line:140,column:53}},type:"if",locations:[{start:{line:95,column:4},end:{line:140,column:53}},{start:{line:95,column:4},end:{line:140,column:53}}],line:95},14:{loc:{start:{line:97,column:6},end:{line:101,column:7}},type:"if",locations:[{start:{line:97,column:6},end:{line:101,column:7}},{start:{line:97,column:6},end:{line:101,column:7}}],line:97},15:{loc:{start:{line:104,column:6},end:{line:110,column:7}},type:"if",locations:[{start:{line:104,column:6},end:{line:110,column:7}},{start:{line:104,column:6},end:{line:110,column:7}}],line:104},16:{loc:{start:{line:106,column:8},end:{line:109,column:9}},type:"if",locations:[{start:{line:106,column:8},end:{line:109,column:9}},{start:{line:106,column:8},end:{line:109,column:9}}],line:106},17:{loc:{start:{line:121,column:6},end:{line:125,column:7}},type:"if",locations:[{start:{line:121,column:6},end:{line:125,column:7}},{start:{line:121,column:6},end:{line:125,column:7}}],line:121},18:{loc:{start:{line:129,column:9},end:{line:140,column:53}},type:"if",locations:[{start:{line:129,column:9},end:{line:140,column:53}},{start:{line:129,column:9},end:{line:140,column:53}}],line:129},19:{loc:{start:{line:130,column:6},end:{line:137,column:61}},type:"if",locations:[{start:{line:130,column:6},end:{line:137,column:61}},{start:{line:130,column:6},end:{line:137,column:61}}],line:130},20:{loc:{start:{line:153,column:4},end:{line:153,column:93}},type:"if",locations:[{start:{line:153,column:4},end:{line:153,column:93}},{start:{line:153,column:4},end:{line:153,column:93}}],line:153},21:{loc:{start:{line:154,column:4},end:{line:154,column:90}},type:"if",locations:[{start:{line:154,column:4},end:{line:154,column:90}},{start:{line:154,column:4},end:{line:154,column:90}}],line:154},22:{loc:{start:{line:161,column:4},end:{line:218,column:61}},type:"if",locations:[{start:{line:161,column:4},end:{line:218,column:61}},{start:{line:161,column:4},end:{line:218,column:61}}],line:161},23:{loc:{start:{line:163,column:6},end:{line:163,column:71}},type:"if",locations:[{start:{line:163,column:6},end:{line:163,column:71}},{start:{line:163,column:6},end:{line:163,column:71}}],line:163},24:{loc:{start:{line:164,column:6},end:{line:167,column:7}},type:"if",locations:[{start:{line:164,column:6},end:{line:167,column:7}},{start:{line:164,column:6},end:{line:167,column:7}}],line:164},25:{loc:{start:{line:172,column:21},end:{line:172,column:103}},type:"cond-expr",locations:[{start:{line:172,column:70},end:{line:172,column:91}},{start:{line:172,column:94},end:{line:172,column:103}}],line:172},26:{loc:{start:{line:173,column:19},end:{line:173,column:97}},type:"cond-expr",locations:[{start:{line:173,column:66},end:{line:173,column:85}},{start:{line:173,column:88},end:{line:173,column:97}}],line:173},27:{loc:{start:{line:186,column:6},end:{line:186,column:88}},type:"if",locations:[{start:{line:186,column:6},end:{line:186,column:88}},{start:{line:186,column:6},end:{line:186,column:88}}],line:186},28:{loc:{start:{line:191,column:8},end:{line:192,column:25}},type:"if",locations:[{start:{line:191,column:8},end:{line:192,column:25}},{start:{line:191,column:8},end:{line:192,column:25}}],line:191},29:{loc:{start:{line:196,column:6},end:{line:197,column:35}},type:"if",locations:[{start:{line:196,column:6},end:{line:197,column:35}},{start:{line:196,column:6},end:{line:197,column:35}}],line:196},30:{loc:{start:{line:201,column:9},end:{line:218,column:61}},type:"if",locations:[{start:{line:201,column:9},end:{line:218,column:61}},{start:{line:201,column:9},end:{line:218,column:61}}],line:201},31:{loc:{start:{line:203,column:6},end:{line:203,column:70}},type:"if",locations:[{start:{line:203,column:6},end:{line:203,column:70}},{start:{line:203,column:6},end:{line:203,column:70}}],line:203},32:{loc:{start:{line:204,column:6},end:{line:204,column:92}},type:"if",locations:[{start:{line:204,column:6},end:{line:204,column:92}},{start:{line:204,column:6},end:{line:204,column:92}}],line:204},33:{loc:{start:{line:207,column:17},end:{line:207,column:86}},type:"cond-expr",locations:[{start:{line:207,column:62},end:{line:207,column:79}},{start:{line:207,column:82},end:{line:207,column:86}}],line:207},34:{loc:{start:{line:209,column:6},end:{line:216,column:61}},type:"if",locations:[{start:{line:209,column:6},end:{line:216,column:61}},{start:{line:209,column:6},end:{line:216,column:61}}],line:209},35:{loc:{start:{line:231,column:4},end:{line:231,column:68}},type:"if",locations:[{start:{line:231,column:4},end:{line:231,column:68}},{start:{line:231,column:4},end:{line:231,column:68}}],line:231},36:{loc:{start:{line:255,column:4},end:{line:255,column:72}},type:"if",locations:[{start:{line:255,column:4},end:{line:255,column:72}},{start:{line:255,column:4},end:{line:255,column:72}}],line:255},37:{loc:{start:{line:264,column:8},end:{line:268,column:9}},type:"if",locations:[{start:{line:264,column:8},end:{line:268,column:9}},{start:{line:264,column:8},end:{line:268,column:9}}],line:264}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0,80:0,81:0,82:0,83:0,84:0,85:0,86:0,87:0,88:0,89:0,90:0,91:0,92:0,93:0,94:0,95:0,96:0,97:0,98:0,99:0,100:0,101:0,102:0,103:0,104:0,105:0,106:0,107:0,108:0,109:0,110:0,111:0,112:0,113:0,114:0,115:0,116:0,117:0,118:0,119:0,120:0,121:0,122:0,123:0,124:0,125:0,126:0,127:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:0,136:0,137:0,138:0,139:0,140:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0},b:{0:[0],1:[0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0],23:[0,0],24:[0,0],25:[0,0],26:[0,0],27:[0,0],28:[0,0],29:[0,0],30:[0,0],31:[0,0],32:[0,0],33:[0,0],34:[0,0],35:[0,0],36:[0,0],37:[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}(),an=function(n){function e(){return u()(this,e),h()(this,v()(e).apply(this,arguments))}return w()(e,n),a()(e,null,[{key:"generateKey",value:function(){var n=r()(o.a.mark(function n(e){var t,l,i,r,c,u,s,a,m,d,f,p,y,h,b;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.params,l=e.passphrase,i=void 0===l?(sn.b[0][0]++,null):l,r=e.encryptOptions,c=void 0===r?(sn.b[1][0]++,{}):r,sn.f[0]++,sn.s[0]++,u=j(),sn.s[1]++,"session"!==t.type){n.next=26;break}if(sn.b[2][0]++,sn.s[2]++,t.length){n.next=13;break}throw sn.b[3][0]++,sn.s[3]++,new Error("params.length must be specified");case 13:sn.b[3][1]++;case 14:return sn.s[4]++,n.next=17,u.random.getRandomBytes(t.length);case 17:return s=n.sent,sn.s[5]++,n.next=21,T(s);case 21:return a=n.sent,sn.s[6]++,n.abrupt("return",{key:s,keyId:a});case 26:if(sn.b[2][1]++,sn.s[7]++,sn.b[5][0]++,"ec"!==t.type&&(sn.b[5][1]++,"rsa"!==t.type)){n.next=58;break}return sn.b[4][0]++,sn.s[8]++,m="ec"===t.type?(sn.b[6][0]++,"EC"):(sn.b[6][1]++,"RSA"),sn.s[9]++,d="ec"===t.type?(sn.b[7][0]++,{namedCurve:t.curve}):(sn.b[7][1]++,{modulusLength:t.modulusLength}),sn.s[10]++,n.next=35,u.pkc.generateKey(m,d);case 35:return f=n.sent,sn.s[11]++,n.next=39,B(new u.Key("jwk",f.publicKey));case 39:if(p=n.sent,sn.s[12]++,y=new u.Key("jwk",f.publicKey),sn.s[13]++,h=new u.Key("jwk",f.privateKey),sn.s[14]++,!i){n.next=53;break}return sn.b[8][0]++,sn.s[15]++,n.next=48,h.export("der",{encryptParams:Object.assign({passphrase:i},c)});case 48:b=n.sent,sn.s[16]++,h=new u.Key("der",b),n.next=54;break;case 53:sn.b[8][1]++;case 54:return sn.s[17]++,n.abrupt("return",{publicKey:y,privateKey:h,keyId:p});case 58:throw sn.b[4][1]++,sn.s[18]++,new Error("JscuUnsupportedKeyType");case 61:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"importKey",value:function(){var n=r()(o.a.mark(function n(e,t,l){var i,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(sn.f[1]++,sn.s[19]++,i=j(),sn.s[20]++,r=new i.Key(e,t),sn.s[21]++,sn.b[10][0]++,!r.isPrivate||(sn.b[10][1]++,!r.isEncrypted)){n.next=19;break}if(sn.b[9][0]++,sn.s[22]++,l){n.next=13;break}throw sn.b[11][0]++,sn.s[23]++,new Error("PassphraseRequired");case 13:sn.b[11][1]++;case 14:return sn.s[24]++,n.next=17,r.decrypt(l).catch(function(n){throw sn.f[2]++,sn.s[25]++,new Error("FailedToDecryptPrivateKey: ".concat(n.message))});case 17:n.next=20;break;case 19:sn.b[9][1]++;case 20:return sn.s[26]++,n.abrupt("return",r);case 22:case"end":return n.stop()}},n,this)}));return function(e,t,l){return n.apply(this,arguments)}}()},{key:"encrypt",value:function(){var n=r()(o.a.mark(function n(t){var l,i,c,u,s,a,m,d,f,p,y,h,b;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(l=t.message,i=t.keys,c=t.options,sn.f[3]++,sn.s[27]++,u=j(),sn.s[28]++,void 0===c?(sn.b[12][0]++,sn.s[29]++,c={}):sn.b[12][1]++,sn.s[30]++,!i.publicKeys){n.next=67;break}if(sn.b[13][0]++,sn.s[31]++,!c.privateKeyPass){n.next=23;break}return sn.b[14][0]++,sn.s[32]++,n.next=14,e.importKey("pem",c.privateKeyPass.privateKey,c.privateKeyPass.passphrase);case 14:return c.privateKey=n.sent,sn.s[33]++,n.next=18,c.privateKey.export("jwk");case 18:c.privateKey=n.sent,sn.s[34]++,delete c.privateKeyPass,n.next=24;break;case 23:sn.b[14][1]++;case 24:if(sn.s[35]++,c.privateKey){n.next=45;break}return sn.b[15][0]++,sn.s[36]++,n.next=30,i.publicKeys[0].export("jwk");case 30:if(m=n.sent,sn.s[37]++,"EC"!==m.kty){n.next=42;break}return sn.b[16][0]++,sn.s[38]++,n.next=37,u.pkc.generateKey("EC",{namedCurve:m.crv});case 37:d=n.sent,sn.s[39]++,c.privateKey=d.privateKey,n.next=43;break;case 42:sn.b[16][1]++;case 43:n.next=46;break;case 45:sn.b[15][1]++;case 46:return sn.s[40]++,n.next=49,Promise.all(i.publicKeys.map(function(){var n=r()(o.a.mark(function n(e){var t,i,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return sn.f[4]++,sn.s[41]++,n.next=4,e.export("jwk");case 4:return t=n.sent,sn.s[42]++,n.next=8,u.pkc.encrypt(l.binary,t,c);case 8:return i=n.sent,sn.s[43]++,r=new Uint8Array(i.data),sn.s[44]++,delete i.data,sn.s[45]++,n.t0=q,n.t1=r,n.next=17,B(e);case 17:return n.t2=n.sent,n.t3=i,n.abrupt("return",(0,n.t0)(n.t1,n.t2,n.t3));case 20:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()));case 49:if(s=n.sent,sn.s[46]++,void 0===c.privateKey){n.next=62;break}return sn.b[17][0]++,sn.s[47]++,f=new u.Key("jwk",c.privateKey),sn.s[48]++,n.next=57,f.export("der",{outputPublic:!0});case 57:c.publicKey=n.sent,sn.s[49]++,delete c.privateKey,n.next=63;break;case 62:sn.b[17][1]++;case 63:sn.s[50]++,a={message:W("jscu","public_key_encrypt",s,c)},n.next=101;break;case 67:if(sn.b[13][1]++,sn.s[51]++,!i.sessionKey){n.next=98;break}if(sn.b[18][0]++,sn.s[52]++,"AES-GCM"!==c.name){n.next=91;break}return sn.b[19][0]++,sn.s[53]++,n.next=77,u.random.getRandomBytes(_.jscu.ivLengthAesGcm);case 77:return p=n.sent,sn.s[54]++,n.next=81,u.aes.encrypt(l.binary,i.sessionKey,{name:c.name,iv:p});case 81:return y=n.sent,sn.s[55]++,n.next=85,T(i.sessionKey);case 85:h=n.sent,sn.s[56]++,b=q(y,h,{iv:p}),sn.s[57]++,s=[b],n.next=94;break;case 91:throw sn.b[19][1]++,sn.s[58]++,new Error("JscuInvalidEncryptionAlgorithm");case 94:sn.s[59]++,a={message:W("jscu","session_key_encrypt",s,c)},n.next=101;break;case 98:throw sn.b[18][1]++,sn.s[60]++,new Error("JscuInvalidEncryptionKey");case 101:return sn.s[61]++,n.abrupt("return",a);case 103:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"decrypt",value:function(){var n=r()(o.a.mark(function n(t){var l,i,c,u,s,a,m,d,f,y,h,b,v;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(l=t.encrypted,i=t.keys,c=t.options,sn.f[5]++,sn.s[62]++,void 0!==l.message){n.next=9;break}throw sn.b[20][0]++,sn.s[63]++,new Error("InvalidEncryptedMessage");case 9:sn.b[20][1]++;case 10:if(sn.s[64]++,l.message.message instanceof Array){n.next=17;break}throw sn.b[21][0]++,sn.s[65]++,new Error("NonArrayMessage");case 17:sn.b[21][1]++;case 18:if(sn.s[66]++,u=j(),sn.s[67]++,s=l.message.keyType,sn.s[68]++,"public_key_encrypt"!==s){n.next=77;break}if(sn.b[22][0]++,sn.s[69]++,i.privateKeys){n.next=30;break}throw sn.b[23][0]++,sn.s[70]++,new Error("JscuPrivateKeyRequired");case 30:sn.b[23][1]++;case 31:if(sn.s[71]++,!c.publicKey){n.next=44;break}return sn.b[24][0]++,sn.s[72]++,n.next=37,e.importKey("der",c.publicKey);case 37:return c.publicKey=n.sent,sn.s[73]++,n.next=41,c.publicKey.export("jwk");case 41:c.publicKey=n.sent,n.next=45;break;case 44:sn.b[24][1]++;case 45:return sn.s[74]++,m=function(){var n=r()(o.a.mark(function n(e,t){var l,i,r,s,a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return sn.f[6]++,sn.s[75]++,l=e.toBuffer(),sn.s[76]++,i=void 0!==e.params.salt?(sn.b[25][0]++,e.params.salt):void sn.b[25][1]++,sn.s[77]++,r=void 0!==e.params.iv?(sn.b[26][0]++,e.params.iv):void sn.b[26][1]++,sn.s[78]++,n.next=7,t.export("jwk");case 7:return s=n.sent,sn.s[79]++,a=Object.assign({salt:i,iv:r},c),sn.s[80]++,n.next=12,u.pkc.decrypt(l,s,a);case 12:return n.abrupt("return",n.sent);case 13:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}(),sn.s[81]++,d=[],sn.s[82]++,n.next=51,Promise.all(i.privateKeys.map(function(){var n=r()(o.a.mark(function n(e){var t,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return sn.f[7]++,sn.s[83]++,n.next=4,B(e);case 4:t=n.sent,sn.s[84]++,i=l.message.message.filter(function(n){return sn.f[8]++,sn.s[85]++,n.keyId.toHex()===t.toHex()}),sn.s[86]++,d.push.apply(d,p()(i.map(function(n){return sn.f[9]++,sn.s[87]++,{message:n,privateKey:e}})));case 8:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()));case 51:if(sn.s[88]++,0!==d.length){n.next=58;break}throw sn.b[27][0]++,sn.s[89]++,new Error("UnableToDecryptWithGivenPrivateKey");case 58:sn.b[27][1]++;case 59:return sn.s[90]++,f="",sn.s[91]++,n.next=63,Promise.all(d.map(function(){var n=r()(o.a.mark(function n(e){var t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return sn.f[10]++,sn.s[92]++,n.next=4,m(e.message,e.privateKey).catch(function(n){sn.f[11]++,sn.s[93]++,f=n.message});case 4:if(t=n.sent,sn.s[94]++,!t){n.next=12;break}return sn.b[28][0]++,sn.s[95]++,n.abrupt("return",t);case 12:return sn.b[28][1]++,sn.s[96]++,n.abrupt("return",null);case 15:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()));case 63:if(y=n.sent,sn.s[97]++,h=y.filter(function(n){return sn.f[12]++,sn.s[98]++,null!==n}),sn.s[99]++,!(h.length>0)){n.next=72;break}sn.b[29][0]++,sn.s[100]++,a=h[0],n.next=75;break;case 72:throw sn.b[29][1]++,sn.s[101]++,new Error(f);case 75:n.next=116;break;case 77:if(sn.b[22][1]++,sn.s[102]++,"session_key_encrypt"!==s){n.next=113;break}if(sn.b[30][0]++,sn.s[103]++,i.sessionKey){n.next=88;break}throw sn.b[31][0]++,sn.s[104]++,new Error("JscuSessionKeyRequired");case 88:sn.b[31][1]++;case 89:if(sn.s[105]++,l.message.message instanceof Array){n.next=96;break}throw sn.b[32][0]++,sn.s[106]++,new Error("NonArrayMessage");case 96:sn.b[32][1]++;case 97:if(sn.s[107]++,b=l.message.message[0],sn.s[108]++,v=void 0!==b.params.iv?(sn.b[33][0]++,b.params.iv):(sn.b[33][1]++,null),sn.s[109]++,"AES-GCM"!==c.name){n.next=108;break}return sn.b[34][0]++,sn.s[110]++,n.next=105,u.aes.decrypt(b.toBuffer(),i.sessionKey,{name:i.sessionKey.algorithm,iv:v});case 105:a=n.sent,n.next=111;break;case 108:throw sn.b[34][1]++,sn.s[111]++,new Error("JscuInvalidEncryptionAlgorithm");case 111:n.next=116;break;case 113:throw sn.b[30][1]++,sn.s[112]++,new Error("JscuInvalidKeyType_NotSessionKey");case 116:return sn.s[113]++,n.abrupt("return",{data:a});case 118:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"sign",value:function(){var n=r()(o.a.mark(function n(e){var t,l,i,c,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.message,l=e.keys,i=e.options,sn.f[13]++,sn.s[114]++,l.privateKeys){n.next=9;break}throw sn.b[35][0]++,sn.s[115]++,new Error("JscuInvalidSigningKeys");case 9:sn.b[35][1]++;case 10:return sn.s[116]++,c=j(),sn.s[117]++,n.next=14,Promise.all(l.privateKeys.map(function(){var n=r()(o.a.mark(function n(e){var l,r,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return sn.f[14]++,sn.s[118]++,n.next=4,e.export("jwk");case 4:return l=n.sent,sn.s[119]++,n.next=8,c.pkc.sign(t.binary,l,i.hash,Object.assign({format:"raw"},i));case 8:return r=n.sent,sn.s[120]++,n.next=12,B(e);case 12:return u=n.sent,sn.s[121]++,n.abrupt("return",cn(r,u));case 15:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()));case 14:return u=n.sent,sn.s[122]++,n.abrupt("return",{signature:ln("jscu","public_key_sign",u,i)});case 17:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"verify",value:function(){var n=r()(o.a.mark(function n(e){var t,l,i,c,u,s,a,m;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.message,l=e.signature,i=e.keys,c=e.options,sn.f[15]++,sn.s[123]++,i.publicKeys){n.next=9;break}throw sn.b[36][0]++,sn.s[124]++,new Error("JscuInvalidVerificationKeys");case 9:sn.b[36][1]++;case 10:return sn.s[125]++,u=j(),sn.s[126]++,s=[],sn.s[127]++,a=[],sn.s[128]++,n.next=16,Promise.all(i.publicKeys.map(function(){var n=r()(o.a.mark(function n(e){var t,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return sn.f[16]++,sn.s[129]++,n.next=4,B(e);case 4:t=n.sent,sn.s[130]++,i=l.signatures.filter(function(n){return sn.f[17]++,sn.s[131]++,n.keyId.toHex()===t.toHex()?(sn.b[37][0]++,sn.s[132]++,!0):(sn.b[37][1]++,sn.s[133]++,a.push({keyId:n.keyId,valid:void 0}),sn.s[134]++,!1)}),sn.s[135]++,s.push.apply(s,p()(i.map(function(n){return sn.f[18]++,sn.s[136]++,{signature:n,publicKey:e}})));case 8:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()));case 16:return sn.s[137]++,n.next=19,Promise.all(s.map(function(){var n=r()(o.a.mark(function n(e){var l;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return sn.f[19]++,sn.s[138]++,n.t0=u.pkc,n.t1=t.binary,n.t2=e.signature.toBuffer(),n.next=7,e.publicKey.export("jwk");case 7:return n.t3=n.sent,n.t4=c.hash,n.t5=Object.assign({format:"raw"},c),n.next=12,n.t0.verify.call(n.t0,n.t1,n.t2,n.t3,n.t4,n.t5);case 12:return l=n.sent,sn.s[139]++,n.abrupt("return",{keyId:e.signature.keyId,valid:l});case 15:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()));case 19:return m=n.sent,sn.s[140]++,n.abrupt("return",m.concat(a));case 22:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}]),e}(k),mn=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/suite_openpgp.js",e="19726c9d482277c78f72880a2489f6194abeefb5",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/suite_openpgp.js",statementMap:{0:{start:{line:22,column:20},end:{line:22,column:32}},1:{start:{line:25,column:4},end:{line:49,column:5}},2:{start:{line:27,column:6},end:{line:32,column:8}},3:{start:{line:33,column:6},end:{line:33,column:12}},4:{start:{line:35,column:6},end:{line:40,column:8}},5:{start:{line:41,column:6},end:{line:41,column:12}},6:{start:{line:43,column:6},end:{line:45,column:8}},7:{start:{line:46,column:6},end:{line:46,column:12}},8:{start:{line:48,column:6},end:{line:48,column:49}},9:{start:{line:51,column:4},end:{line:66,column:5}},10:{start:{line:52,column:17},end:{line:52,column:51}},11:{start:{line:53,column:18},end:{line:53,column:74}},12:{start:{line:53,column:46},end:{line:53,column:73}},13:{start:{line:54,column:6},end:{line:54,column:47}},14:{start:{line:54,column:30},end:{line:54,column:47}},15:{start:{line:56,column:6},end:{line:60,column:8}},16:{start:{line:62,column:9},end:{line:66,column:5}},17:{start:{line:63,column:21},end:{line:63,column:79}},18:{start:{line:64,column:20},end:{line:64,column:54}},19:{start:{line:65,column:6},end:{line:65,column:34}},20:{start:{line:70,column:20},end:{line:70,column:32}},21:{start:{line:72,column:17},end:{line:74,column:35}},22:{start:{line:76,column:4},end:{line:76,column:73}},23:{start:{line:76,column:17},end:{line:76,column:73}},24:{start:{line:78,column:21},end:{line:83,column:7}},25:{start:{line:79,column:6},end:{line:81,column:7}},26:{start:{line:80,column:8},end:{line:80,column:44}},27:{start:{line:82,column:6},end:{line:82,column:23}},28:{start:{line:85,column:4},end:{line:85,column:58}},29:{start:{line:98,column:20},end:{line:98,column:32}},30:{start:{line:101,column:4},end:{line:101,column:97}},31:{start:{line:101,column:28},end:{line:101,column:97}},32:{start:{line:102,column:4},end:{line:102,column:26}},33:{start:{line:105,column:19},end:{line:105,column:61}},34:{start:{line:109,column:4},end:{line:111,column:88}},35:{start:{line:111,column:57},end:{line:111,column:88}},36:{start:{line:116,column:4},end:{line:152,column:49}},37:{start:{line:117,column:18},end:{line:122,column:7}},38:{start:{line:123,column:6},end:{line:123,column:69}},39:{start:{line:126,column:32},end:{line:126,column:96}},40:{start:{line:126,column:85},end:{line:126,column:95}},41:{start:{line:127,column:29},end:{line:127,column:31}},42:{start:{line:128,column:6},end:{line:128,column:115}},43:{start:{line:128,column:34},end:{line:128,column:112}},44:{start:{line:128,column:60},end:{line:128,column:109}},45:{start:{line:129,column:30},end:{line:129,column:117}},46:{start:{line:129,column:61},end:{line:129,column:116}},47:{start:{line:130,column:31},end:{line:132,column:7}},48:{start:{line:133,column:6},end:{line:133,column:113}},49:{start:{line:135,column:9},end:{line:152,column:49}},50:{start:{line:136,column:18},end:{line:141,column:7}},51:{start:{line:142,column:6},end:{line:142,column:69}},52:{start:{line:145,column:31},end:{line:147,column:7}},53:{start:{line:148,column:6},end:{line:150,column:9}},54:{start:{line:152,column:9},end:{line:152,column:49}},55:{start:{line:154,column:23},end:{line:154,column:25}},56:{start:{line:155,column:4},end:{line:158,column:5}},57:{start:{line:156,column:34},end:{line:156,column:103}},58:{start:{line:157,column:6},end:{line:157,column:105}},59:{start:{line:160,column:4},end:{line:160,column:56}},60:{start:{line:172,column:20},end:{line:172,column:32}},61:{start:{line:174,column:20},end:{line:174,column:94}},62:{start:{line:177,column:4},end:{line:192,column:5}},63:{start:{line:178,column:6},end:{line:183,column:19}},64:{start:{line:185,column:9},end:{line:192,column:5}},65:{start:{line:186,column:6},end:{line:191,column:19}},66:{start:{line:194,column:4},end:{line:194,column:52}},67:{start:{line:196,column:4},end:{line:204,column:5}},68:{start:{line:197,column:6},end:{line:203,column:9}},69:{start:{line:198,column:22},end:{line:198,column:39}},70:{start:{line:199,column:21},end:{line:199,column:91}},71:{start:{line:199,column:55},end:{line:199,column:90}},72:{start:{line:200,column:25},end:{line:200,column:107}},73:{start:{line:200,column:44},end:{line:200,column:105}},74:{start:{line:201,column:8},end:{line:201,column:87}},75:{start:{line:201,column:35},end:{line:201,column:87}},76:{start:{line:202,column:8},end:{line:202,column:77}},77:{start:{line:206,column:4},end:{line:206,column:21}},78:{start:{line:218,column:20},end:{line:218,column:32}},79:{start:{line:221,column:4},end:{line:221,column:28}},80:{start:{line:222,column:4},end:{line:222,column:26}},81:{start:{line:224,column:19},end:{line:224,column:61}},82:{start:{line:226,column:4},end:{line:226,column:64}},83:{start:{line:226,column:26},end:{line:226,column:64}},84:{start:{line:227,column:16},end:{line:230,column:5}},85:{start:{line:231,column:22},end:{line:231,column:69}},86:{start:{line:232,column:32},end:{line:232,column:106}},87:{start:{line:233,column:4},end:{line:233,column:95}},88:{start:{line:245,column:20},end:{line:245,column:32}},89:{start:{line:247,column:4},end:{line:247,column:68}},90:{start:{line:247,column:25},end:{line:247,column:68}},91:{start:{line:248,column:17},end:{line:248,column:81}},92:{start:{line:249,column:19},end:{line:249,column:61}},93:{start:{line:251,column:21},end:{line:257,column:7}},94:{start:{line:252,column:18},end:{line:252,column:43}},95:{start:{line:253,column:30},end:{line:253,column:83}},96:{start:{line:254,column:28},end:{line:254,column:53}},97:{start:{line:255,column:20},end:{line:255,column:131}},98:{start:{line:256,column:6},end:{line:256,column:77}},99:{start:{line:259,column:4},end:{line:259,column:44}},100:{start:{line:263,column:4},end:{line:263,column:80}},101:{start:{line:263,column:40},end:{line:263,column:80}},102:{start:{line:265,column:27},end:{line:265,column:29}},103:{start:{line:266,column:4},end:{line:266,column:102}},104:{start:{line:266,column:21},end:{line:266,column:99}},105:{start:{line:266,column:47},end:{line:266,column:96}},106:{start:{line:268,column:29},end:{line:268,column:31}},107:{start:{line:269,column:4},end:{line:274,column:7}},108:{start:{line:270,column:31},end:{line:270,column:110}},109:{start:{line:270,column:59},end:{line:270,column:109}},110:{start:{line:271,column:6},end:{line:273,column:9}},111:{start:{line:272,column:8},end:{line:272,column:67}},112:{start:{line:276,column:4},end:{line:276,column:28}},113:{start:{line:280,column:4},end:{line:280,column:80}},114:{start:{line:280,column:40},end:{line:280,column:80}},115:{start:{line:282,column:20},end:{line:282,column:32}},116:{start:{line:284,column:27},end:{line:289,column:6}},117:{start:{line:285,column:6},end:{line:285,column:83}},118:{start:{line:285,column:42},end:{line:285,column:83}},119:{start:{line:286,column:18},end:{line:286,column:48}},120:{start:{line:287,column:6},end:{line:287,column:38}},121:{start:{line:288,column:6},end:{line:288,column:53}},122:{start:{line:291,column:24},end:{line:291,column:26}},123:{start:{line:292,column:4},end:{line:292,column:122}},124:{start:{line:292,column:21},end:{line:292,column:119}},125:{start:{line:292,column:47},end:{line:292,column:116}},126:{start:{line:294,column:29},end:{line:294,column:31}},127:{start:{line:295,column:4},end:{line:300,column:7}},128:{start:{line:296,column:31},end:{line:296,column:137}},129:{start:{line:296,column:63},end:{line:296,column:136}},130:{start:{line:297,column:6},end:{line:299,column:9}},131:{start:{line:298,column:8},end:{line:298,column:77}},132:{start:{line:301,column:23},end:{line:301,column:25}},133:{start:{line:302,column:20},end:{line:302,column:88}},134:{start:{line:302,column:49},end:{line:302,column:87}},135:{start:{line:303,column:4},end:{line:307,column:7}},136:{start:{line:304,column:6},end:{line:306,column:7}},137:{start:{line:305,column:8},end:{line:305,column:114}},138:{start:{line:309,column:4},end:{line:309,column:42}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:21,column:2},end:{line:21,column:3}},loc:{start:{line:21,column:96},end:{line:67,column:3}},line:21},1:{name:"(anonymous_1)",decl:{start:{line:53,column:39},end:{line:53,column:40}},loc:{start:{line:53,column:46},end:{line:53,column:73}},line:53},2:{name:"(anonymous_2)",decl:{start:{line:69,column:2},end:{line:69,column:3}},loc:{start:{line:69,column:47},end:{line:86,column:3}},line:69},3:{name:"(anonymous_3)",decl:{start:{line:78,column:53},end:{line:78,column:54}},loc:{start:{line:78,column:74},end:{line:83,column:5}},line:78},4:{name:"(anonymous_4)",decl:{start:{line:97,column:2},end:{line:97,column:3}},loc:{start:{line:97,column:51},end:{line:161,column:3}},line:97},5:{name:"(anonymous_5)",decl:{start:{line:126,column:77},end:{line:126,column:78}},loc:{start:{line:126,column:85},end:{line:126,column:95}},line:126},6:{name:"(anonymous_6)",decl:{start:{line:128,column:27},end:{line:128,column:28}},loc:{start:{line:128,column:34},end:{line:128,column:112}},line:128},7:{name:"(anonymous_7)",decl:{start:{line:128,column:51},end:{line:128,column:52}},loc:{start:{line:128,column:58},end:{line:128,column:110}},line:128},8:{name:"(anonymous_8)",decl:{start:{line:129,column:53},end:{line:129,column:54}},loc:{start:{line:129,column:61},end:{line:129,column:116}},line:129},9:{name:"(anonymous_9)",decl:{start:{line:171,column:2},end:{line:171,column:3}},loc:{start:{line:171,column:57},end:{line:207,column:3}},line:171},10:{name:"(anonymous_10)",decl:{start:{line:197,column:55},end:{line:197,column:56}},loc:{start:{line:197,column:64},end:{line:203,column:7}},line:197},11:{name:"(anonymous_11)",decl:{start:{line:199,column:48},end:{line:199,column:49}},loc:{start:{line:199,column:55},end:{line:199,column:90}},line:199},12:{name:"(anonymous_12)",decl:{start:{line:200,column:37},end:{line:200,column:38}},loc:{start:{line:200,column:44},end:{line:200,column:105}},line:200},13:{name:"(anonymous_13)",decl:{start:{line:217,column:2},end:{line:217,column:3}},loc:{start:{line:217,column:48},end:{line:234,column:3}},line:217},14:{name:"(anonymous_14)",decl:{start:{line:244,column:2},end:{line:244,column:3}},loc:{start:{line:244,column:58},end:{line:260,column:3}},line:244},15:{name:"(anonymous_15)",decl:{start:{line:251,column:66},end:{line:251,column:67}},loc:{start:{line:251,column:84},end:{line:257,column:5}},line:251},16:{name:"(anonymous_16)",decl:{start:{line:262,column:2},end:{line:262,column:3}},loc:{start:{line:262,column:48},end:{line:277,column:3}},line:262},17:{name:"(anonymous_17)",decl:{start:{line:266,column:14},end:{line:266,column:15}},loc:{start:{line:266,column:21},end:{line:266,column:99}},line:266},18:{name:"(anonymous_18)",decl:{start:{line:266,column:38},end:{line:266,column:39}},loc:{start:{line:266,column:45},end:{line:266,column:97}},line:266},19:{name:"(anonymous_19)",decl:{start:{line:269,column:24},end:{line:269,column:25}},loc:{start:{line:269,column:32},end:{line:274,column:5}},line:269},20:{name:"(anonymous_20)",decl:{start:{line:270,column:50},end:{line:270,column:51}},loc:{start:{line:270,column:59},end:{line:270,column:109}},line:270},21:{name:"(anonymous_21)",decl:{start:{line:271,column:27},end:{line:271,column:28}},loc:{start:{line:271,column:36},end:{line:273,column:7}},line:271},22:{name:"(anonymous_22)",decl:{start:{line:279,column:2},end:{line:279,column:3}},loc:{start:{line:279,column:46},end:{line:310,column:3}},line:279},23:{name:"(anonymous_23)",decl:{start:{line:284,column:42},end:{line:284,column:43}},loc:{start:{line:284,column:51},end:{line:289,column:5}},line:284},24:{name:"(anonymous_24)",decl:{start:{line:292,column:14},end:{line:292,column:15}},loc:{start:{line:292,column:21},end:{line:292,column:119}},line:292},25:{name:"(anonymous_25)",decl:{start:{line:292,column:38},end:{line:292,column:39}},loc:{start:{line:292,column:45},end:{line:292,column:117}},line:292},26:{name:"(anonymous_26)",decl:{start:{line:295,column:21},end:{line:295,column:22}},loc:{start:{line:295,column:29},end:{line:300,column:5}},line:295},27:{name:"(anonymous_27)",decl:{start:{line:296,column:54},end:{line:296,column:55}},loc:{start:{line:296,column:63},end:{line:296,column:136}},line:296},28:{name:"(anonymous_28)",decl:{start:{line:297,column:27},end:{line:297,column:28}},loc:{start:{line:297,column:36},end:{line:299,column:7}},line:297},29:{name:"(anonymous_29)",decl:{start:{line:302,column:42},end:{line:302,column:43}},loc:{start:{line:302,column:49},end:{line:302,column:87}},line:302},30:{name:"(anonymous_30)",decl:{start:{line:303,column:24},end:{line:303,column:25}},loc:{start:{line:303,column:33},end:{line:307,column:5}},line:303}},branchMap:{0:{loc:{start:{line:21,column:28},end:{line:21,column:68}},type:"default-arg",locations:[{start:{line:21,column:36},end:{line:21,column:68}}],line:21},1:{loc:{start:{line:21,column:70},end:{line:21,column:85}},type:"default-arg",locations:[{start:{line:21,column:81},end:{line:21,column:85}}],line:21},2:{loc:{start:{line:25,column:4},end:{line:49,column:5}},type:"switch",locations:[{start:{line:26,column:4},end:{line:33,column:12}},{start:{line:34,column:4},end:{line:41,column:12}},{start:{line:42,column:4},end:{line:46,column:12}},{start:{line:47,column:4},end:{line:48,column:49}}],line:25},3:{loc:{start:{line:51,column:4},end:{line:66,column:5}},type:"if",locations:[{start:{line:51,column:4},end:{line:66,column:5}},{start:{line:51,column:4},end:{line:66,column:5}}],line:51},4:{loc:{start:{line:51,column:8},end:{line:51,column:53}},type:"binary-expr",locations:[{start:{line:51,column:8},end:{line:51,column:29}},{start:{line:51,column:33},end:{line:51,column:53}}],line:51},5:{loc:{start:{line:54,column:6},end:{line:54,column:47}},type:"if",locations:[{start:{line:54,column:6},end:{line:54,column:47}},{start:{line:54,column:6},end:{line:54,column:47}}],line:54},6:{loc:{start:{line:62,column:9},end:{line:66,column:5}},type:"if",locations:[{start:{line:62,column:9},end:{line:66,column:5}},{start:{line:62,column:9},end:{line:66,column:5}}],line:62},7:{loc:{start:{line:72,column:17},end:{line:74,column:35}},type:"cond-expr",locations:[{start:{line:73,column:8},end:{line:73,column:42}},{start:{line:74,column:8},end:{line:74,column:35}}],line:72},8:{loc:{start:{line:76,column:4},end:{line:76,column:73}},type:"if",locations:[{start:{line:76,column:4},end:{line:76,column:73}},{start:{line:76,column:4},end:{line:76,column:73}}],line:76},9:{loc:{start:{line:79,column:6},end:{line:81,column:7}},type:"if",locations:[{start:{line:79,column:6},end:{line:81,column:7}},{start:{line:79,column:6},end:{line:81,column:7}}],line:79},10:{loc:{start:{line:79,column:10},end:{line:79,column:67}},type:"binary-expr",locations:[{start:{line:79,column:10},end:{line:79,column:31}},{start:{line:79,column:35},end:{line:79,column:67}}],line:79},11:{loc:{start:{line:85,column:11},end:{line:85,column:57}},type:"cond-expr",locations:[{start:{line:85,column:35},end:{line:85,column:43}},{start:{line:85,column:46},end:{line:85,column:57}}],line:85},12:{loc:{start:{line:97,column:39},end:{line:97,column:49}},type:"default-arg",locations:[{start:{line:97,column:47},end:{line:97,column:49}}],line:97},13:{loc:{start:{line:101,column:4},end:{line:101,column:97}},type:"if",locations:[{start:{line:101,column:4},end:{line:101,column:97}},{start:{line:101,column:4},end:{line:101,column:97}}],line:101},14:{loc:{start:{line:109,column:4},end:{line:111,column:88}},type:"if",locations:[{start:{line:109,column:4},end:{line:111,column:88}},{start:{line:109,column:4},end:{line:111,column:88}}],line:109},15:{loc:{start:{line:109,column:7},end:{line:111,column:55}},type:"binary-expr",locations:[{start:{line:109,column:7},end:{line:109,column:46}},{start:{line:110,column:9},end:{line:110,column:42}},{start:{line:111,column:9},end:{line:111,column:55}}],line:109},16:{loc:{start:{line:116,column:4},end:{line:152,column:49}},type:"if",locations:[{start:{line:116,column:4},end:{line:152,column:49}},{start:{line:116,column:4},end:{line:152,column:49}}],line:116},17:{loc:{start:{line:135,column:9},end:{line:152,column:49}},type:"if",locations:[{start:{line:135,column:9},end:{line:152,column:49}},{start:{line:135,column:9},end:{line:152,column:49}}],line:135},18:{loc:{start:{line:155,column:4},end:{line:158,column:5}},type:"if",locations:[{start:{line:155,column:4},end:{line:158,column:5}},{start:{line:155,column:4},end:{line:158,column:5}}],line:155},19:{loc:{start:{line:155,column:8},end:{line:155,column:47}},type:"binary-expr",locations:[{start:{line:155,column:8},end:{line:155,column:24}},{start:{line:155,column:28},end:{line:155,column:47}}],line:155},20:{loc:{start:{line:171,column:42},end:{line:171,column:54}},type:"default-arg",locations:[{start:{line:171,column:52},end:{line:171,column:54}}],line:171},21:{loc:{start:{line:177,column:4},end:{line:192,column:5}},type:"if",locations:[{start:{line:177,column:4},end:{line:192,column:5}},{start:{line:177,column:4},end:{line:192,column:5}}],line:177},22:{loc:{start:{line:185,column:9},end:{line:192,column:5}},type:"if",locations:[{start:{line:185,column:9},end:{line:192,column:5}},{start:{line:185,column:9},end:{line:192,column:5}}],line:185},23:{loc:{start:{line:196,column:4},end:{line:204,column:5}},type:"if",locations:[{start:{line:196,column:4},end:{line:204,column:5}},{start:{line:196,column:4},end:{line:204,column:5}}],line:196},24:{loc:{start:{line:201,column:8},end:{line:201,column:87}},type:"if",locations:[{start:{line:201,column:8},end:{line:201,column:87}},{start:{line:201,column:8},end:{line:201,column:87}}],line:201},25:{loc:{start:{line:217,column:36},end:{line:217,column:46}},type:"default-arg",locations:[{start:{line:217,column:44},end:{line:217,column:46}}],line:217},26:{loc:{start:{line:226,column:4},end:{line:226,column:64}},type:"if",locations:[{start:{line:226,column:4},end:{line:226,column:64}},{start:{line:226,column:4},end:{line:226,column:64}}],line:226},27:{loc:{start:{line:247,column:4},end:{line:247,column:68}},type:"if",locations:[{start:{line:247,column:4},end:{line:247,column:68}},{start:{line:247,column:4},end:{line:247,column:68}}],line:247},28:{loc:{start:{line:263,column:4},end:{line:263,column:80}},type:"if",locations:[{start:{line:263,column:4},end:{line:263,column:80}},{start:{line:263,column:4},end:{line:263,column:80}}],line:263},29:{loc:{start:{line:280,column:4},end:{line:280,column:80}},type:"if",locations:[{start:{line:280,column:4},end:{line:280,column:80}},{start:{line:280,column:4},end:{line:280,column:80}}],line:280},30:{loc:{start:{line:285,column:6},end:{line:285,column:83}},type:"if",locations:[{start:{line:285,column:6},end:{line:285,column:83}},{start:{line:285,column:6},end:{line:285,column:83}}],line:285},31:{loc:{start:{line:304,column:6},end:{line:306,column:7}},type:"if",locations:[{start:{line:304,column:6},end:{line:306,column:7}},{start:{line:304,column:6},end:{line:306,column:7}}],line:304}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0,80:0,81:0,82:0,83:0,84:0,85:0,86:0,87:0,88:0,89:0,90:0,91:0,92:0,93:0,94:0,95:0,96:0,97:0,98:0,99:0,100:0,101:0,102:0,103:0,104:0,105:0,106:0,107:0,108:0,109:0,110:0,111:0,112:0,113:0,114:0,115:0,116:0,117:0,118:0,119:0,120:0,121:0,122:0,123:0,124:0,125:0,126:0,127:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:0,136:0,137:0,138:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0},b:{0:[0],1:[0],2:[0,0,0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0],13:[0,0],14:[0,0],15:[0,0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0],21:[0,0],22:[0,0],23:[0,0],24:[0,0],25:[0],26:[0,0],27:[0,0],28:[0,0],29:[0,0],30:[0,0],31:[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}(),dn=function(n){function e(){return u()(this,e),h()(this,v()(e).apply(this,arguments))}return w()(e,n),a()(e,null,[{key:"generateKey",value:function(){var n=r()(o.a.mark(function n(e){var t,l,i,r,c,u,s,a,m,d,f;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=e.userIds,l=void 0===t?(mn.b[0][0]++,_.openpgp.defaultUser):t,i=e.passphrase,r=void 0===i?(mn.b[1][0]++,null):i,c=e.params,mn.f[0]++,mn.s[0]++,u=A(),mn.s[1]++,n.t0=c.type,n.next="rsa"===n.t0?7:"ec"===n.t0?12:"session"===n.t0?17:22;break;case 7:return mn.b[2][0]++,mn.s[2]++,s={userIds:l,numBits:c.modulusLength,passphrase:r,keyExpirationTime:c.keyExpirationTime},mn.s[3]++,n.abrupt("break",25);case 12:return mn.b[2][1]++,mn.s[4]++,s={userIds:l,curve:_.openpgp.curveList[c.curve].name,passphrase:r,keyExpirationTime:c.keyExpirationTime},mn.s[5]++,n.abrupt("break",25);case 17:return mn.b[2][2]++,mn.s[6]++,s={length:c.length},mn.s[7]++,n.abrupt("break",25);case 22:throw mn.b[2][3]++,mn.s[8]++,new Error("GPGUnsupportedAlgorithm");case 25:if(mn.s[9]++,mn.b[4][0]++,"rsa"!==c.type&&(mn.b[4][1]++,"ec"!==c.type)){n.next=39;break}return mn.b[3][0]++,mn.s[10]++,n.next=31,u.generateKey(s);case 31:return a=n.sent,mn.s[11]++,m=a.key.getKeys().map(function(n){return mn.f[1]++,mn.s[12]++,O(n)}),mn.s[13]++,1===m.length?(mn.b[5][0]++,mn.s[14]++,m=m[0]):mn.b[5][1]++,mn.s[15]++,n.abrupt("return",{publicKey:a.key.toPublic(),privateKey:a.key,keyId:m});case 39:if(mn.b[3][1]++,mn.s[16]++,"session"!==c.type){n.next=55;break}return mn.b[6][0]++,mn.s[17]++,n.next=46,u.crypto.random.getRandomBytes(s.length);case 46:return d=n.sent,mn.s[18]++,n.next=50,T(d);case 50:return f=n.sent,mn.s[19]++,n.abrupt("return",{key:d,keyId:f});case 55:mn.b[6][1]++;case 56:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"importKey",value:function(){var n=r()(o.a.mark(function n(e,t,l){var i,c,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(mn.f[2]++,mn.s[20]++,i=A(),mn.s[21]++,"pem"!==e){n.next=10;break}return mn.b[7][0]++,n.next=7,i.key.readArmored(t);case 7:n.t0=n.sent,n.next=14;break;case 10:return mn.b[7][1]++,n.next=13,i.key.read(t);case 13:n.t0=n.sent;case 14:if(c=n.t0,mn.s[22]++,!c.err){n.next=22;break}throw mn.b[8][0]++,mn.s[23]++,new Error("InvalidOpenPGPKeyFormat: ".concat(c.err));case 22:mn.b[8][1]++;case 23:return mn.s[24]++,n.next=26,Promise.all(c.keys.map(function(){var n=r()(o.a.mark(function n(e){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(mn.f[3]++,mn.s[25]++,mn.b[10][0]++,!e.isPrivate()||(mn.b[10][1]++,!e.primaryKey.isEncrypted)){n.next=9;break}return mn.b[9][0]++,mn.s[26]++,n.next=7,e.decrypt(l);case 7:n.next=10;break;case 9:mn.b[9][1]++;case 10:return mn.s[27]++,n.abrupt("return",e);case 12:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()));case 26:return u=n.sent,mn.s[28]++,n.abrupt("return",u.length>1?(mn.b[11][0]++,u):(mn.b[11][1]++,u[0]));case 29:case"end":return n.stop()}},n,this)}));return function(e,t,l){return n.apply(this,arguments)}}()},{key:"encrypt",value:function(){var n=r()(o.a.mark(function n(t){var l,i,r,c,u,s,a,m,d,f,p,y,h,b,v,g,w,x;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(l=t.message,i=t.keys,r=t.options,c=void 0===r?(mn.b[12][0]++,{}):r,mn.f[4]++,mn.s[29]++,u=A(),mn.s[30]++,c.compression?(mn.b[13][0]++,mn.s[31]++,c.compression=u.enums.compression[c.compression]):mn.b[13][1]++,mn.s[32]++,c.armor=!1,mn.s[33]++,s=u.message.fromBinary(l.binary),mn.s[34]++,mn.b[15][0]++,void 0!==i.privateKeys&&(mn.b[15][1]++,i.privateKeys instanceof Array)&&(mn.b[15][2]++,i.privateKeys[0]instanceof u.key.Key)?(mn.b[14][0]++,mn.s[35]++,a=i.privateKeys):mn.b[14][1]++,mn.s[36]++,!i.publicKeys){n.next=28;break}return mn.b[16][0]++,mn.s[37]++,f={message:s,publicKeys:i.publicKeys,privateKeys:a,format:"binary"},mn.s[38]++,n.next=17,u.encrypt(Object.assign(f,c));case 17:m=n.sent,mn.s[39]++,p=m.message.getEncryptionKeyIds().map(function(n){return mn.f[5]++,mn.s[40]++,n.toHex()}),mn.s[41]++,y=[],mn.s[42]++,i.publicKeys.map(function(n){return mn.f[6]++,mn.s[43]++,n.getKeys().map(function(n){mn.f[7]++,mn.s[44]++,y.push(O(n))})}),mn.s[45]++,h=y.filter(function(n){return mn.f[8]++,mn.s[46]++,p.indexOf(n.toHex().slice(0,16))>=0}),mn.s[47]++,b=[q(m.message.packets.write(),F(h),{})],mn.s[48]++,d={message:W("openpgp","public_key_encrypt",b,{})},n.next=53;break;case 28:if(mn.b[16][1]++,mn.s[49]++,!i.sessionKey){n.next=50;break}return mn.b[17][0]++,mn.s[50]++,v={message:s,sessionKey:{data:i.sessionKey,algorithm:c.algorithm},privateKeys:a,format:"binary"},mn.s[51]++,n.next=36,u.encrypt(Object.assign(v,c));case 36:return m=n.sent,mn.s[52]++,n.t0=q,n.t1=m.message.packets.write(),n.next=42,T(i.sessionKey);case 42:n.t2=n.sent,n.t3={},n.t4=(0,n.t0)(n.t1,n.t2,n.t3),g=[n.t4],mn.s[53]++,d={message:W("openpgp","session_key_encrypt",g,{algorithm:c.algorithm})},n.next=53;break;case 50:throw mn.b[17][1]++,mn.s[54]++,new Error("InvalidEncryptionKey");case 53:return mn.s[55]++,w={},mn.s[56]++,mn.b[19][0]++,i.privateKeys&&(mn.b[19][1]++,m.signature)?(mn.b[18][0]++,mn.s[57]++,x=e._listFromOpenPgpSig(m.signature.packets,a),mn.s[58]++,w={signature:ln("openpgp","public_key_sign",x,{})}):mn.b[18][1]++,mn.s[59]++,n.abrupt("return",Object.assign(d,w));case 58:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"decrypt",value:function(){var n=r()(o.a.mark(function n(e){var t,l,i,r,c,u,s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.encrypted,l=e.keys,i=e.options,r=void 0===i?(mn.b[20][0]++,{}):i,mn.f[9]++,mn.s[60]++,c=A(),mn.s[61]++,n.next=6,c.message.read(t.message.message[0].toBuffer(),!1);case 6:if(u=n.sent,mn.s[62]++,"public_key_encrypt"!==t.message.keyType){n.next=16;break}return mn.b[21][0]++,mn.s[63]++,n.next=13,c.decrypt(Object.assign({message:u,privateKeys:l.privateKeys,publicKeys:l.publicKeys,format:"binary"},r));case 13:s=n.sent,n.next=27;break;case 16:if(mn.b[21][1]++,mn.s[64]++,"session_key_encrypt"!==t.message.keyType){n.next=26;break}return mn.b[22][0]++,mn.s[65]++,n.next=23,c.decrypt(Object.assign({message:u,sessionKeys:[{data:l.sessionKey,algorithm:r.algorithm}],publicKeys:l.publicKeys,format:"binary"},r));case 23:s=n.sent,n.next=27;break;case 26:mn.b[22][1]++;case 27:return mn.s[66]++,s.data=new Uint8Array(s.data),mn.s[67]++,s.signatures instanceof Array?(mn.b[23][0]++,mn.s[68]++,s.signatures=s.signatures.map(function(n){mn.f[10]++;var e=(mn.s[69]++,n.keyid.toHex()),t=(mn.s[70]++,n.signature.packets.map(function(n){return mn.f[11]++,mn.s[71]++,new Uint8Array(n.issuerFingerprint)})),l=(mn.s[72]++,t.filter(function(n){return mn.f[12]++,mn.s[73]++,e===P.a.encoder.arrayBufferToHexString(n).slice(0,16)}));if(mn.s[74]++,0===l.length)throw mn.b[24][0]++,mn.s[75]++,new Error("SomethingWrongInOpenPGPSignature");return mn.b[24][1]++,mn.s[76]++,{keyId:R(l[0]),valid:n.valid}})):mn.b[23][1]++,mn.s[77]++,n.abrupt("return",s);case 33:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"sign",value:function(){var n=r()(o.a.mark(function n(t){var l,i,r,c,u,s,a,m,d;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(l=t.message,i=t.keys,r=t.options,c=void 0===r?(mn.b[25][0]++,{}):r,mn.f[13]++,mn.s[78]++,u=A(),mn.s[79]++,c.detached=!0,mn.s[80]++,c.armor=!1,mn.s[81]++,s=u.message.fromBinary(l.binary),mn.s[82]++,i.privateKeys){n.next=15;break}throw mn.b[26][0]++,mn.s[83]++,new Error("SigningKeyRequired");case 15:mn.b[26][1]++;case 16:return mn.s[84]++,a={message:s,privateKeys:i.privateKeys},mn.s[85]++,n.next=20,u.sign(Object.assign(a,c));case 20:return m=n.sent,mn.s[86]++,d=e._listFromOpenPgpSig(m.signature.packets,i.privateKeys),mn.s[87]++,n.abrupt("return",{signature:ln("openpgp","public_key_sign",d,{})});case 24:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"verify",value:function(){var n=r()(o.a.mark(function n(t){var l,i,c,u,s,a,m;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(l=t.message,i=t.signature,c=t.keys,t.options,mn.f[14]++,mn.s[88]++,u=A(),mn.s[89]++,c.publicKeys){n.next=10;break}throw mn.b[27][0]++,mn.s[90]++,new Error("VerificationKeyRequired");case 10:mn.b[27][1]++;case 11:return mn.s[91]++,s=e._ListToOpenPgpSig(i.signatures,c.publicKeys),mn.s[92]++,a=u.message.fromBinary(l.binary),mn.s[93]++,n.next=16,Promise.all(s.signatureObjects.map(function(){var n=r()(o.a.mark(function n(e){var t,l,i,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return mn.f[15]++,mn.s[94]++,t=a.unwrapCompressed(),mn.s[95]++,l=t.packets.filterByTag(u.enums.packet.literal),mn.s[96]++,i=[e.openpgpSignature],mn.s[97]++,n.next=7,u.message.createVerificationObjects(i,l,[e.publicKey],new Date);case 7:return r=n.sent,mn.s[98]++,n.t0=e.signature.keyId,n.next=12,r[0].verified;case 12:return n.t1=n.sent,n.abrupt("return",{keyId:n.t0,valid:n.t1});case 14:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()));case 16:return m=n.sent,mn.s[99]++,n.abrupt("return",m.concat(s.unverified));case 19:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"_listFromOpenPgpSig",value:function(n,e){if(mn.f[16]++,mn.s[100]++,!(n instanceof Array))throw mn.b[28][0]++,mn.s[101]++,new Error("InvalidSignatureList");mn.b[28][1]++;var t=(mn.s[102]++,[]);mn.s[103]++,e.map(function(n){return mn.f[17]++,mn.s[104]++,n.getKeys().map(function(n){mn.f[18]++,mn.s[105]++,t.push(O(n))})});var l=(mn.s[106]++,[]);return mn.s[107]++,t.map(function(e){mn.f[19]++;var t=(mn.s[108]++,n.filter(function(n){return mn.f[20]++,mn.s[109]++,n.issuerKeyId.toHex()===e.toHex().slice(0,16)}));mn.s[110]++,t.map(function(n){mn.f[21]++,mn.s[111]++,l.push(cn(n.write(),e))})}),mn.s[112]++,l}},{key:"_ListToOpenPgpSig",value:function(n,e){if(mn.f[22]++,mn.s[113]++,!(n instanceof Array))throw mn.b[29][0]++,mn.s[114]++,new Error("InvalidSignatureList");mn.b[29][1]++;var t=(mn.s[115]++,A()),l=(mn.s[116]++,n.map(function(n){if(mn.f[23]++,mn.s[117]++,!(n instanceof un))throw mn.b[30][0]++,mn.s[118]++,new Error("NotRawSignatureObject");mn.b[30][1]++;var e=(mn.s[119]++,new t.packet.Signature);return mn.s[120]++,e.read(n.toBuffer(),0,-1),mn.s[121]++,{openpgpSignature:e,signature:n}})),o=(mn.s[122]++,[]);mn.s[123]++,e.map(function(n){return mn.f[24]++,mn.s[124]++,n.getKeys().map(function(n){mn.f[25]++,mn.s[125]++,o.push({publicKey:n,keyId:O(n)})})});var i=(mn.s[126]++,[]);mn.s[127]++,o.map(function(n){mn.f[26]++;var e=(mn.s[128]++,l.filter(function(e){return mn.f[27]++,mn.s[129]++,e.openpgpSignature.issuerKeyId.toHex()===n.keyId.toHex().slice(0,16)}));mn.s[130]++,e.map(function(e){mn.f[28]++,mn.s[131]++,i.push(Object.assign({publicKey:n.publicKey},e))})});var r=(mn.s[132]++,[]),c=(mn.s[133]++,i.map(function(n){return mn.f[29]++,mn.s[134]++,n.openpgpSignature.issuerKeyId.toHex()}));return mn.s[135]++,l.map(function(n){mn.f[30]++,mn.s[136]++,c.indexOf(n.openpgpSignature.issuerKeyId.toHex().slice(0,16))<0?(mn.b[31][0]++,mn.s[137]++,r.push({keyId:R(n.openpgpSignature.issuerFingerprint),valid:void 0})):mn.b[31][1]++}),mn.s[138]++,{signatureObjects:i,unverified:r}}}]),e}(k),fn=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/keys.js",e="667504824e694334911945f685905a5ab3f8f6f1",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/keys.js",statementMap:{0:{start:{line:12,column:4},end:{line:19,column:5}},1:{start:{line:13,column:6},end:{line:13,column:101}},2:{start:{line:13,column:70},end:{line:13,column:101}},3:{start:{line:14,column:6},end:{line:18,column:7}},4:{start:{line:15,column:8},end:{line:15,column:106}},5:{start:{line:15,column:52},end:{line:15,column:106}},6:{start:{line:17,column:8},end:{line:17,column:102}},7:{start:{line:17,column:52},end:{line:17,column:102}},8:{start:{line:21,column:4},end:{line:28,column:5}},9:{start:{line:22,column:6},end:{line:22,column:99}},10:{start:{line:22,column:68},end:{line:22,column:99}},11:{start:{line:23,column:6},end:{line:27,column:7}},12:{start:{line:24,column:8},end:{line:24,column:107}},13:{start:{line:24,column:52},end:{line:24,column:107}},14:{start:{line:26,column:8},end:{line:26,column:103}},15:{start:{line:26,column:52},end:{line:26,column:103}},16:{start:{line:30,column:4},end:{line:33,column:5}},17:{start:{line:31,column:6},end:{line:31,column:101}},18:{start:{line:31,column:70},end:{line:31,column:101}},19:{start:{line:32,column:6},end:{line:32,column:133}},20:{start:{line:32,column:101},end:{line:32,column:133}},21:{start:{line:34,column:4},end:{line:37,column:5}},22:{start:{line:35,column:6},end:{line:35,column:99}},23:{start:{line:35,column:68},end:{line:35,column:99}},24:{start:{line:36,column:6},end:{line:36,column:80}},25:{start:{line:36,column:49},end:{line:36,column:80}},26:{start:{line:40,column:4},end:{line:42,column:51}},27:{start:{line:40,column:29},end:{line:40,column:79}},28:{start:{line:41,column:9},end:{line:42,column:51}},29:{start:{line:41,column:34},end:{line:41,column:84}},30:{start:{line:42,column:9},end:{line:42,column:51}},31:{start:{line:44,column:4},end:{line:44,column:26}},32:{start:{line:45,column:4},end:{line:45,column:28}},33:{start:{line:46,column:4},end:{line:46,column:26}},34:{start:{line:48,column:4},end:{line:48,column:16}},35:{start:{line:51,column:16},end:{line:51,column:34}},36:{start:{line:52,column:17},end:{line:52,column:36}},37:{start:{line:53,column:16},end:{line:53,column:34}},38:{start:{line:55,column:17},end:{line:55,column:58}},39:{start:{line:56,column:17},end:{line:56,column:58}},40:{start:{line:57,column:14},end:{line:57,column:52}},41:{start:{line:58,column:16},end:{line:58,column:56}},42:{start:{line:71,column:22},end:{line:71,column:39}},43:{start:{line:72,column:20},end:{line:72,column:35}},44:{start:{line:73,column:21},end:{line:73,column:37}},45:{start:{line:74,column:20},end:{line:74,column:35}},46:{start:{line:76,column:17},end:{line:76,column:27}},47:{start:{line:77,column:2},end:{line:77,column:88}},48:{start:{line:78,column:2},end:{line:78,column:16}},49:{start:{line:90,column:21},end:{line:90,column:23}},50:{start:{line:92,column:2},end:{line:92,column:63}},51:{start:{line:92,column:23},end:{line:92,column:63}},52:{start:{line:94,column:16},end:{line:97,column:3}},53:{start:{line:98,column:2},end:{line:119,column:6}},54:{start:{line:99,column:4},end:{line:118,column:5}},55:{start:{line:103,column:6},end:{line:105,column:43}},56:{start:{line:103,column:45},end:{line:103,column:61}},57:{start:{line:104,column:11},end:{line:105,column:43}},58:{start:{line:104,column:53},end:{line:104,column:72}},59:{start:{line:105,column:11},end:{line:105,column:43}},60:{start:{line:107,column:6},end:{line:117,column:45}},61:{start:{line:108,column:8},end:{line:108,column:132}},62:{start:{line:108,column:29},end:{line:108,column:132}},63:{start:{line:108,column:100},end:{line:108,column:129}},64:{start:{line:110,column:11},end:{line:117,column:45}},65:{start:{line:111,column:8},end:{line:115,column:9}},66:{start:{line:112,column:10},end:{line:114,column:12}},67:{start:{line:113,column:50},end:{line:113,column:109}},68:{start:{line:117,column:11},end:{line:117,column:45}},69:{start:{line:121,column:2},end:{line:121,column:43}},70:{start:{line:132,column:21},end:{line:132,column:23}},71:{start:{line:134,column:2},end:{line:134,column:63}},72:{start:{line:134,column:23},end:{line:134,column:63}},73:{start:{line:136,column:2},end:{line:136,column:63}},74:{start:{line:136,column:23},end:{line:136,column:63}},75:{start:{line:138,column:2},end:{line:138,column:66}},76:{start:{line:138,column:24},end:{line:138,column:66}},77:{start:{line:140,column:2},end:{line:140,column:41}},78:{start:{line:150,column:25},end:{line:150,column:45}},79:{start:{line:152,column:2},end:{line:173,column:49}},80:{start:{line:153,column:4},end:{line:160,column:9}},81:{start:{line:159,column:8},end:{line:159,column:64}},82:{start:{line:163,column:7},end:{line:173,column:49}},83:{start:{line:164,column:4},end:{line:171,column:9}},84:{start:{line:170,column:8},end:{line:170,column:65}},85:{start:{line:173,column:7},end:{line:173,column:49}},86:{start:{line:175,column:2},end:{line:175,column:19}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:10,column:2},end:{line:10,column:3}},loc:{start:{line:10,column:41},end:{line:49,column:3}},line:10},1:{name:"(anonymous_1)",decl:{start:{line:51,column:2},end:{line:51,column:3}},loc:{start:{line:51,column:14},end:{line:51,column:36}},line:51},2:{name:"(anonymous_2)",decl:{start:{line:52,column:2},end:{line:52,column:3}},loc:{start:{line:52,column:15},end:{line:52,column:38}},line:52},3:{name:"(anonymous_3)",decl:{start:{line:53,column:2},end:{line:53,column:3}},loc:{start:{line:53,column:14},end:{line:53,column:36}},line:53},4:{name:"(anonymous_4)",decl:{start:{line:55,column:2},end:{line:55,column:3}},loc:{start:{line:55,column:15},end:{line:55,column:60}},line:55},5:{name:"(anonymous_5)",decl:{start:{line:56,column:2},end:{line:56,column:3}},loc:{start:{line:56,column:15},end:{line:56,column:60}},line:56},6:{name:"(anonymous_6)",decl:{start:{line:57,column:2},end:{line:57,column:3}},loc:{start:{line:57,column:12},end:{line:57,column:54}},line:57},7:{name:"(anonymous_7)",decl:{start:{line:58,column:2},end:{line:58,column:3}},loc:{start:{line:58,column:14},end:{line:58,column:58}},line:58},8:{name:"importKeys",decl:{start:{line:70,column:22},end:{line:70,column:32}},loc:{start:{line:70,column:70},end:{line:79,column:1}},line:70},9:{name:"importKeyStrings",decl:{start:{line:89,column:15},end:{line:89,column:31}},loc:{start:{line:89,column:52},end:{line:122,column:1}},line:89},10:{name:"(anonymous_10)",decl:{start:{line:98,column:31},end:{line:98,column:32}},loc:{start:{line:98,column:53},end:{line:119,column:3}},line:98},11:{name:"(anonymous_11)",decl:{start:{line:108,column:92},end:{line:108,column:93}},loc:{start:{line:108,column:100},end:{line:108,column:129}},line:108},12:{name:"(anonymous_12)",decl:{start:{line:113,column:40},end:{line:113,column:41}},loc:{start:{line:113,column:50},end:{line:113,column:109}},line:113},13:{name:"importKeyObjects",decl:{start:{line:131,column:15},end:{line:131,column:31}},loc:{start:{line:131,column:52},end:{line:141,column:1}},line:131},14:{name:"generateKeyObject",decl:{start:{line:149,column:22},end:{line:149,column:39}},loc:{start:{line:149,column:51},end:{line:176,column:1}},line:149},15:{name:"(anonymous_15)",decl:{start:{line:158,column:13},end:{line:158,column:14}},loc:{start:{line:158,column:20},end:{line:160,column:7}},line:158},16:{name:"(anonymous_16)",decl:{start:{line:169,column:13},end:{line:169,column:14}},loc:{start:{line:169,column:20},end:{line:171,column:7}},line:169}},branchMap:{0:{loc:{start:{line:12,column:4},end:{line:19,column:5}},type:"if",locations:[{start:{line:12,column:4},end:{line:19,column:5}},{start:{line:12,column:4},end:{line:19,column:5}}],line:12},1:{loc:{start:{line:13,column:6},end:{line:13,column:101}},type:"if",locations:[{start:{line:13,column:6},end:{line:13,column:101}},{start:{line:13,column:6},end:{line:13,column:101}}],line:13},2:{loc:{start:{line:13,column:9},end:{line:13,column:68}},type:"binary-expr",locations:[{start:{line:13,column:9},end:{line:13,column:36}},{start:{line:13,column:40},end:{line:13,column:68}}],line:13},3:{loc:{start:{line:14,column:6},end:{line:18,column:7}},type:"if",locations:[{start:{line:14,column:6},end:{line:18,column:7}},{start:{line:14,column:6},end:{line:18,column:7}}],line:14},4:{loc:{start:{line:15,column:8},end:{line:15,column:106}},type:"if",locations:[{start:{line:15,column:8},end:{line:15,column:106}},{start:{line:15,column:8},end:{line:15,column:106}}],line:15},5:{loc:{start:{line:17,column:8},end:{line:17,column:102}},type:"if",locations:[{start:{line:17,column:8},end:{line:17,column:102}},{start:{line:17,column:8},end:{line:17,column:102}}],line:17},6:{loc:{start:{line:21,column:4},end:{line:28,column:5}},type:"if",locations:[{start:{line:21,column:4},end:{line:28,column:5}},{start:{line:21,column:4},end:{line:28,column:5}}],line:21},7:{loc:{start:{line:22,column:6},end:{line:22,column:99}},type:"if",locations:[{start:{line:22,column:6},end:{line:22,column:99}},{start:{line:22,column:6},end:{line:22,column:99}}],line:22},8:{loc:{start:{line:22,column:9},end:{line:22,column:66}},type:"binary-expr",locations:[{start:{line:22,column:9},end:{line:22,column:34}},{start:{line:22,column:38},end:{line:22,column:66}}],line:22},9:{loc:{start:{line:23,column:6},end:{line:27,column:7}},type:"if",locations:[{start:{line:23,column:6},end:{line:27,column:7}},{start:{line:23,column:6},end:{line:27,column:7}}],line:23},10:{loc:{start:{line:23,column:10},end:{line:23,column:99}},type:"binary-expr",locations:[{start:{line:23,column:10},end:{line:23,column:56}},{start:{line:23,column:60},end:{line:23,column:99}}],line:23},11:{loc:{start:{line:24,column:8},end:{line:24,column:107}},type:"if",locations:[{start:{line:24,column:8},end:{line:24,column:107}},{start:{line:24,column:8},end:{line:24,column:107}}],line:24},12:{loc:{start:{line:26,column:8},end:{line:26,column:103}},type:"if",locations:[{start:{line:26,column:8},end:{line:26,column:103}},{start:{line:26,column:8},end:{line:26,column:103}}],line:26},13:{loc:{start:{line:30,column:4},end:{line:33,column:5}},type:"if",locations:[{start:{line:30,column:4},end:{line:33,column:5}},{start:{line:30,column:4},end:{line:33,column:5}}],line:30},14:{loc:{start:{line:31,column:6},end:{line:31,column:101}},type:"if",locations:[{start:{line:31,column:6},end:{line:31,column:101}},{start:{line:31,column:6},end:{line:31,column:101}}],line:31},15:{loc:{start:{line:31,column:9},end:{line:31,column:68}},type:"binary-expr",locations:[{start:{line:31,column:9},end:{line:31,column:36}},{start:{line:31,column:40},end:{line:31,column:68}}],line:31},16:{loc:{start:{line:32,column:6},end:{line:32,column:133}},type:"if",locations:[{start:{line:32,column:6},end:{line:32,column:133}},{start:{line:32,column:6},end:{line:32,column:133}}],line:32},17:{loc:{start:{line:32,column:9},end:{line:32,column:99}},type:"binary-expr",locations:[{start:{line:32,column:9},end:{line:32,column:55}},{start:{line:32,column:60},end:{line:32,column:99}}],line:32},18:{loc:{start:{line:34,column:4},end:{line:37,column:5}},type:"if",locations:[{start:{line:34,column:4},end:{line:37,column:5}},{start:{line:34,column:4},end:{line:37,column:5}}],line:34},19:{loc:{start:{line:35,column:6},end:{line:35,column:99}},type:"if",locations:[{start:{line:35,column:6},end:{line:35,column:99}},{start:{line:35,column:6},end:{line:35,column:99}}],line:35},20:{loc:{start:{line:35,column:9},end:{line:35,column:66}},type:"binary-expr",locations:[{start:{line:35,column:9},end:{line:35,column:34}},{start:{line:35,column:38},end:{line:35,column:66}}],line:35},21:{loc:{start:{line:36,column:6},end:{line:36,column:80}},type:"if",locations:[{start:{line:36,column:6},end:{line:36,column:80}},{start:{line:36,column:6},end:{line:36,column:80}}],line:36},22:{loc:{start:{line:40,column:4},end:{line:42,column:51}},type:"if",locations:[{start:{line:40,column:4},end:{line:42,column:51}},{start:{line:40,column:4},end:{line:42,column:51}}],line:40},23:{loc:{start:{line:41,column:9},end:{line:42,column:51}},type:"if",locations:[{start:{line:41,column:9},end:{line:42,column:51}},{start:{line:41,column:9},end:{line:42,column:51}}],line:41},24:{loc:{start:{line:70,column:33},end:{line:70,column:48}},type:"default-arg",locations:[{start:{line:70,column:40},end:{line:70,column:48}}],line:70},25:{loc:{start:{line:92,column:2},end:{line:92,column:63}},type:"if",locations:[{start:{line:92,column:2},end:{line:92,column:63}},{start:{line:92,column:2},end:{line:92,column:63}}],line:92},26:{loc:{start:{line:99,column:4},end:{line:118,column:5}},type:"if",locations:[{start:{line:99,column:4},end:{line:118,column:5}},{start:{line:99,column:4},end:{line:118,column:5}}],line:99},27:{loc:{start:{line:103,column:6},end:{line:105,column:43}},type:"if",locations:[{start:{line:103,column:6},end:{line:105,column:43}},{start:{line:103,column:6},end:{line:105,column:43}}],line:103},28:{loc:{start:{line:104,column:11},end:{line:105,column:43}},type:"if",locations:[{start:{line:104,column:11},end:{line:105,column:43}},{start:{line:104,column:11},end:{line:105,column:43}}],line:104},29:{loc:{start:{line:107,column:6},end:{line:117,column:45}},type:"if",locations:[{start:{line:107,column:6},end:{line:117,column:45}},{start:{line:107,column:6},end:{line:117,column:45}}],line:107},30:{loc:{start:{line:108,column:8},end:{line:108,column:132}},type:"if",locations:[{start:{line:108,column:8},end:{line:108,column:132}},{start:{line:108,column:8},end:{line:108,column:132}}],line:108},31:{loc:{start:{line:110,column:11},end:{line:117,column:45}},type:"if",locations:[{start:{line:110,column:11},end:{line:117,column:45}},{start:{line:110,column:11},end:{line:117,column:45}}],line:110},32:{loc:{start:{line:111,column:8},end:{line:115,column:9}},type:"if",locations:[{start:{line:111,column:8},end:{line:115,column:9}},{start:{line:111,column:8},end:{line:115,column:9}}],line:111},33:{loc:{start:{line:134,column:2},end:{line:134,column:63}},type:"if",locations:[{start:{line:134,column:2},end:{line:134,column:63}},{start:{line:134,column:2},end:{line:134,column:63}}],line:134},34:{loc:{start:{line:136,column:2},end:{line:136,column:63}},type:"if",locations:[{start:{line:136,column:2},end:{line:136,column:63}},{start:{line:136,column:2},end:{line:136,column:63}}],line:136},35:{loc:{start:{line:138,column:2},end:{line:138,column:66}},type:"if",locations:[{start:{line:138,column:2},end:{line:138,column:66}},{start:{line:138,column:2},end:{line:138,column:66}}],line:138},36:{loc:{start:{line:152,column:2},end:{line:173,column:49}},type:"if",locations:[{start:{line:152,column:2},end:{line:173,column:49}},{start:{line:152,column:2},end:{line:173,column:49}}],line:152},37:{loc:{start:{line:163,column:7},end:{line:173,column:49}},type:"if",locations:[{start:{line:163,column:7},end:{line:173,column:49}},{start:{line:163,column:7},end:{line:173,column:49}}],line:163}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0,80:0,81:0,82:0,83:0,84:0,85:0,86:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0],23:[0,0],24:[0],25:[0,0],26:[0,0],27:[0,0],28:[0,0],29:[0,0],30:[0,0],31:[0,0],32:[0,0],33:[0,0],34:[0,0],35:[0,0],36:[0,0],37:[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}(),pn=function(){function n(){u()(this,n)}return a()(n,[{key:"from",value:function(){var n=r()(o.a.mark(function n(e,t){var l,i,r,c;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(l=t.keys,i=t.suite,r=t.mode,fn.f[0]++,fn.s[0]++,!(r.indexOf("encrypt")>=0)){n.next=37;break}if(fn.b[0][0]++,fn.s[1]++,fn.b[2][0]++,!(r.indexOf("verify")>=0||(fn.b[2][1]++,r.indexOf("decrypt")>=0))){n.next=12;break}throw fn.b[1][0]++,fn.s[2]++,new Error("InvalidMode");case 12:fn.b[1][1]++;case 13:if(fn.s[3]++,void 0===l.publicKeys){n.next=26;break}if(fn.b[3][0]++,fn.s[4]++,void 0===l.sessionKey){n.next=23;break}throw fn.b[4][0]++,fn.s[5]++,new Error("SessionKeyAndPublicKeyAreExclusive");case 23:fn.b[4][1]++;case 24:n.next=35;break;case 26:if(fn.b[3][1]++,fn.s[6]++,void 0!==l.sessionKey){n.next=34;break}throw fn.b[5][0]++,fn.s[7]++,new Error("NoSessionKeyOrPublicKeyIsGiven");case 34:fn.b[5][1]++;case 35:n.next=38;break;case 37:fn.b[0][1]++;case 38:if(fn.s[8]++,!(r.indexOf("decrypt")>=0)){n.next=73;break}if(fn.b[6][0]++,fn.s[9]++,fn.b[8][0]++,!(r.indexOf("sign")>=0||(fn.b[8][1]++,r.indexOf("encrypt")>=0))){n.next=48;break}throw fn.b[7][0]++,fn.s[10]++,new Error("InvalidMode");case 48:fn.b[7][1]++;case 49:if(fn.s[11]++,fn.b[10][0]++,void 0===l.privateKeyPassSets&&(fn.b[10][1]++,void 0===l.privateKeys)){n.next=62;break}if(fn.b[9][0]++,fn.s[12]++,void 0===l.sessionKey){n.next=59;break}throw fn.b[11][0]++,fn.s[13]++,new Error("SessionKeyAndPrivateKeyAreExclusive");case 59:fn.b[11][1]++;case 60:n.next=71;break;case 62:if(fn.b[9][1]++,fn.s[14]++,void 0!==l.sessionKey){n.next=70;break}throw fn.b[12][0]++,fn.s[15]++,new Error("NoSessionKeyOrPrivateKeyIsGiven");case 70:fn.b[12][1]++;case 71:n.next=74;break;case 73:fn.b[6][1]++;case 74:if(fn.s[16]++,!(r.indexOf("sign")>=0)){n.next=95;break}if(fn.b[13][0]++,fn.s[17]++,fn.b[15][0]++,!(r.indexOf("verify")>=0||(fn.b[15][1]++,r.indexOf("decrypt")>=0))){n.next=84;break}throw fn.b[14][0]++,fn.s[18]++,new Error("InvalidMode");case 84:fn.b[14][1]++;case 85:if(fn.s[19]++,fn.b[17][0]++,void 0!==l.privateKeyPassSets||(fn.b[17][1]++,void 0!==l.privateKeys)){n.next=92;break}throw fn.b[16][0]++,fn.s[20]++,new Error("NoPrivateKey");case 92:fn.b[16][1]++;case 93:n.next=96;break;case 95:fn.b[13][1]++;case 96:if(fn.s[21]++,!(r.indexOf("verify")>=0)){n.next=117;break}if(fn.b[18][0]++,fn.s[22]++,fn.b[20][0]++,!(r.indexOf("sign")>=0||(fn.b[20][1]++,r.indexOf("encrypt")>=0))){n.next=106;break}throw fn.b[19][0]++,fn.s[23]++,new Error("InvalidMode");case 106:fn.b[19][1]++;case 107:if(fn.s[24]++,void 0!==l.publicKeys){n.next=114;break}throw fn.b[21][0]++,fn.s[25]++,new Error("NoPublicKey");case 114:fn.b[21][1]++;case 115:n.next=118;break;case 117:fn.b[18][1]++;case 118:if(fn.s[26]++,"string"!==e){n.next=127;break}return fn.b[22][0]++,fn.s[27]++,n.next=124,bn({keys:l,suite:i,mode:r});case 124:c=n.sent,n.next=140;break;case 127:if(fn.b[22][1]++,fn.s[28]++,"object"!==e){n.next=137;break}return fn.b[23][0]++,fn.s[29]++,n.next=134,gn({keys:l,suite:i,mode:r});case 134:c=n.sent,n.next=140;break;case 137:throw fn.b[23][1]++,fn.s[30]++,new Error("UnsupportedAtThisPoint");case 140:return fn.s[31]++,this._keys=c.keys,fn.s[32]++,this._suite=c.suite,fn.s[33]++,this._mode=c.mode,fn.s[34]++,n.abrupt("return",!0);case 148:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}()},{key:"canEncrypt",value:function(){return fn.f[4]++,fn.s[38]++,this.mode.indexOf("encrypt")>=0}},{key:"canDecrypt",value:function(){return fn.f[5]++,fn.s[39]++,this.mode.indexOf("decrypt")>=0}},{key:"canSign",value:function(){return fn.f[6]++,fn.s[40]++,this.mode.indexOf("sign")>=0}},{key:"canVerify",value:function(){return fn.f[7]++,fn.s[41]++,this.mode.indexOf("verify")>=0}},{key:"keys",get:function(){return fn.f[1]++,fn.s[35]++,this._keys}},{key:"suite",get:function(){return fn.f[2]++,fn.s[36]++,this._suite}},{key:"mode",get:function(){return fn.f[3]++,fn.s[37]++,this._mode}}]),n}();function yn(){return hn.apply(this,arguments)}function hn(){return(hn=r()(o.a.mark(function n(){var e,t,l,i,r,c,u,s,a,m,f=arguments;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=f.length>0&&void 0!==f[0]?f[0]:(fn.b[24][0]++,"string"),t=f.length>1?f[1]:void 0,l=t.keys,i=t.suite,r=t.mode,fn.f[8]++,fn.s[42]++,c=d()(e),fn.s[43]++,u=d()(l),fn.s[44]++,s=d()(i),fn.s[45]++,a=d()(r),fn.s[46]++,m=new pn,fn.s[47]++,n.next=11,m.from(c,{keys:u,suite:s,mode:a});case 11:return fn.s[48]++,n.abrupt("return",m);case 13:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function bn(n){return vn.apply(this,arguments)}function vn(){return(vn=r()(o.a.mark(function n(e){var t,l,i,c,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.keys,l=e.suite,i=e.mode,fn.f[9]++,fn.s[49]++,c={},fn.s[50]++,t.sessionKey?(fn.b[25][0]++,fn.s[51]++,c.sessionKey=t.sessionKey):fn.b[25][1]++,fn.s[52]++,u=[{name:"encrypt_decrypt",op:{public:"encrypt",private:"decrypt"}},{name:"sign_verify",op:{public:"verify",private:"sign"}}],fn.s[53]++,n.next=9,Promise.all(u.map(function(){var n=r()(o.a.mark(function n(e){var r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(fn.f[10]++,fn.s[54]++,void 0===l[e.name]){n.next=58;break}if(fn.b[26][0]++,fn.s[55]++,"jscu"!==l[e.name]){n.next=11;break}fn.b[27][0]++,fn.s[56]++,r=an,n.next=22;break;case 11:if(fn.b[27][1]++,fn.s[57]++,"openpgp"!==l[e.name]){n.next=19;break}fn.b[28][0]++,fn.s[58]++,r=dn,n.next=22;break;case 19:throw fn.b[28][1]++,fn.s[59]++,new Error("InvalidSuite");case 22:if(fn.s[60]++,!(i.indexOf(e.op.public)>=0)){n.next=37;break}if(fn.b[29][0]++,fn.s[61]++,!t.publicKeys){n.next=34;break}return fn.b[30][0]++,fn.s[62]++,n.next=31,Promise.all(t.publicKeys.map(function(n){return fn.f[11]++,fn.s[63]++,r.importKey("pem",n)}));case 31:c.publicKeys=n.sent,n.next=35;break;case 34:fn.b[30][1]++;case 35:n.next=56;break;case 37:if(fn.b[29][1]++,fn.s[64]++,!(i.indexOf(e.op.private)>=0)){n.next=53;break}if(fn.b[31][0]++,fn.s[65]++,!t.privateKeyPassSets){n.next=50;break}return fn.b[32][0]++,fn.s[66]++,n.next=47,Promise.all(t.privateKeyPassSets.map(function(n){return fn.f[12]++,fn.s[67]++,r.importKey("pem",n.privateKey,n.passphrase)}));case 47:c.privateKeys=n.sent,n.next=51;break;case 50:fn.b[32][1]++;case 51:n.next=56;break;case 53:throw fn.b[31][1]++,fn.s[68]++,new Error("InvalidKeyMode");case 56:n.next=59;break;case 58:fn.b[26][1]++;case 59:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()));case 9:return fn.s[69]++,n.abrupt("return",{keys:c,suite:l,mode:i});case 11:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function gn(n){return wn.apply(this,arguments)}function wn(){return(wn=r()(o.a.mark(function n(e){var t,l,i,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.keys,l=e.suite,i=e.mode,fn.f[13]++,fn.s[70]++,r={},fn.s[71]++,t.sessionKey?(fn.b[33][0]++,fn.s[72]++,r.sessionKey=t.sessionKey):fn.b[33][1]++,fn.s[73]++,t.publicKeys?(fn.b[34][0]++,fn.s[74]++,r.publicKeys=t.publicKeys):fn.b[34][1]++,fn.s[75]++,t.privateKeys?(fn.b[35][0]++,fn.s[76]++,r.privateKeys=t.privateKeys):fn.b[35][1]++,fn.s[77]++,n.abrupt("return",{keys:r,suite:l,mode:i});case 11:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function xn(n){return kn.apply(this,arguments)}function kn(){return(kn=r()(o.a.mark(function n(e){var t,l;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(fn.f[14]++,fn.s[78]++,t=d()(e),fn.s[79]++,"openpgp"!==t.suite){n.next=11;break}return fn.b[36][0]++,fn.s[80]++,n.next=8,dn.generateKey({userIds:t.userIds,passphrase:t.passphrase,params:t.keyParams}).catch(function(n){throw fn.f[15]++,fn.s[81]++,new Error("GPGKeyGenerationFailed: ".concat(n.message))});case 8:l=n.sent,n.next=24;break;case 11:if(fn.b[36][1]++,fn.s[82]++,"jscu"!==t.suite){n.next=21;break}return fn.b[37][0]++,fn.s[83]++,n.next=18,an.generateKey({passphrase:t.passphrase,params:t.keyParams,encryptOptions:t.encryptOptions}).catch(function(n){throw fn.f[16]++,fn.s[84]++,new Error("JscuKeyGenerationFailed: ".concat(n.message))});case 18:l=n.sent,n.next=24;break;case 21:throw fn.b[37][1]++,fn.s[85]++,new Error("UnsupportedCryptoSuite");case 24:return fn.s[86]++,n.abrupt("return",l);case 26:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}var _n=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/message.js",e="03339d1c694fc5a88b9c35960d208c2f52749595",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/message.js",statementMap:{0:{start:{line:14,column:23},end:{line:14,column:37}},1:{start:{line:15,column:14},end:{line:15,column:27}},2:{start:{line:16,column:2},end:{line:16,column:26}},3:{start:{line:17,column:2},end:{line:17,column:13}},4:{start:{line:22,column:4},end:{line:30,column:51}},5:{start:{line:23,column:6},end:{line:23,column:26}},6:{start:{line:24,column:6},end:{line:24,column:35}},7:{start:{line:26,column:9},end:{line:30,column:51}},8:{start:{line:27,column:6},end:{line:27,column:60}},9:{start:{line:28,column:6},end:{line:28,column:35}},10:{start:{line:30,column:9},end:{line:30,column:51}},11:{start:{line:34,column:4},end:{line:34,column:25}},12:{start:{line:38,column:4},end:{line:40,column:21}},13:{start:{line:38,column:38},end:{line:38,column:59}},14:{start:{line:39,column:9},end:{line:40,column:21}},15:{start:{line:39,column:44},end:{line:39,column:99}},16:{start:{line:40,column:9},end:{line:40,column:21}},17:{start:{line:42,column:23},end:{line:42,column:48}}},fnMap:{0:{name:"importMessage",decl:{start:{line:13,column:16},end:{line:13,column:29}},loc:{start:{line:13,column:34},end:{line:18,column:1}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:21,column:2},end:{line:21,column:3}},loc:{start:{line:21,column:12},end:{line:31,column:3}},line:21},2:{name:"(anonymous_2)",decl:{start:{line:33,column:2},end:{line:33,column:3}},loc:{start:{line:33,column:16},end:{line:35,column:3}},line:33},3:{name:"(anonymous_3)",decl:{start:{line:37,column:2},end:{line:37,column:3}},loc:{start:{line:37,column:17},end:{line:41,column:3}},line:37},4:{name:"(anonymous_4)",decl:{start:{line:42,column:2},end:{line:42,column:3}},loc:{start:{line:42,column:21},end:{line:42,column:50}},line:42}},branchMap:{0:{loc:{start:{line:22,column:4},end:{line:30,column:51}},type:"if",locations:[{start:{line:22,column:4},end:{line:30,column:51}},{start:{line:22,column:4},end:{line:30,column:51}}],line:22},1:{loc:{start:{line:26,column:9},end:{line:30,column:51}},type:"if",locations:[{start:{line:26,column:9},end:{line:30,column:51}},{start:{line:26,column:9},end:{line:30,column:51}}],line:26},2:{loc:{start:{line:38,column:4},end:{line:40,column:21}},type:"if",locations:[{start:{line:38,column:4},end:{line:40,column:21}},{start:{line:38,column:4},end:{line:40,column:21}}],line:38},3:{loc:{start:{line:39,column:9},end:{line:40,column:21}},type:"if",locations:[{start:{line:39,column:9},end:{line:40,column:21}},{start:{line:39,column:9},end:{line:40,column:21}}],line:39}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}();function En(n){_n.f[0]++;var e=(_n.s[0]++,d()(n)),t=(_n.s[1]++,new jn);return _n.s[2]++,t._init(e),_n.s[3]++,t}var jn=function(){function n(){u()(this,n)}return a()(n,[{key:"_init",value:function(n){if(_n.f[1]++,_n.s[4]++,n instanceof Uint8Array)_n.b[0][0]++,_n.s[5]++,this._message=n,_n.s[6]++,this._messageType="binary";else{if(_n.b[0][1]++,_n.s[7]++,"string"!=typeof n)throw _n.b[1][1]++,_n.s[10]++,new Error("UnsupportedMessageType");_n.b[1][0]++,_n.s[8]++,this._message=P.a.encoder.stringToArrayBuffer(n),_n.s[9]++,this._messageType="string"}}},{key:"binary",get:function(){return _n.f[2]++,_n.s[11]++,this._message}},{key:"message",get:function(){return _n.f[3]++,_n.s[12]++,"binary"===this.messageType?(_n.b[2][0]++,_n.s[13]++,this._message):(_n.b[2][1]++,_n.s[14]++,"string"===this.messageType?(_n.b[3][0]++,_n.s[15]++,P.a.encoder.arrayBufferToString(this._message)):(_n.b[3][1]++,_n.s[16]++,null))}},{key:"messageType",get:function(){return _n.f[4]++,_n.s[17]++,this._messageType}}]),n}(),An=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/core.js",e="2959919c9eab3283a7f031fa6cc8f0844d15c085",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/core.js",statementMap:{0:{start:{line:25,column:17},end:{line:25,column:51}},1:{start:{line:28,column:2},end:{line:52,column:3}},2:{start:{line:29,column:4},end:{line:29,column:18}},3:{start:{line:32,column:4},end:{line:51,column:47}},4:{start:{line:33,column:6},end:{line:38,column:8}},5:{start:{line:40,column:9},end:{line:51,column:47}},6:{start:{line:41,column:6},end:{line:49,column:8}},7:{start:{line:51,column:9},end:{line:51,column:47}},8:{start:{line:64,column:2},end:{line:64,column:91}},9:{start:{line:64,column:45},end:{line:64,column:91}},10:{start:{line:67,column:17},end:{line:67,column:39}},11:{start:{line:70,column:15},end:{line:70,column:17}},12:{start:{line:71,column:2},end:{line:79,column:3}},13:{start:{line:75,column:4},end:{line:75,column:104}},14:{start:{line:75,column:54},end:{line:75,column:104}},15:{start:{line:76,column:4},end:{line:78,column:73}},16:{start:{line:78,column:22},end:{line:78,column:69}},17:{start:{line:83,column:2},end:{line:83,column:112}},18:{start:{line:83,column:59},end:{line:83,column:112}},19:{start:{line:84,column:20},end:{line:86,column:74}},20:{start:{line:86,column:21},end:{line:86,column:71}},21:{start:{line:90,column:2},end:{line:90,column:42}},22:{start:{line:100,column:2},end:{line:100,column:88}},23:{start:{line:100,column:42},end:{line:100,column:88}},24:{start:{line:103,column:2},end:{line:103,column:110}},25:{start:{line:103,column:57},end:{line:103,column:110}},26:{start:{line:104,column:20},end:{line:106,column:92}},27:{start:{line:106,column:21},end:{line:106,column:38}},28:{start:{line:106,column:39},end:{line:106,column:89}},29:{start:{line:109,column:17},end:{line:109,column:19}},30:{start:{line:110,column:2},end:{line:115,column:88}},31:{start:{line:111,column:4},end:{line:113,column:78}},32:{start:{line:113,column:22},end:{line:113,column:74}},33:{start:{line:115,column:7},end:{line:115,column:88}},34:{start:{line:115,column:56},end:{line:115,column:88}},35:{start:{line:117,column:2},end:{line:117,column:54}},36:{start:{line:129,column:2},end:{line:129,column:85}},37:{start:{line:129,column:42},end:{line:129,column:85}},38:{start:{line:132,column:17},end:{line:132,column:39}},39:{start:{line:136,column:2},end:{line:142,column:47}},40:{start:{line:137,column:4},end:{line:141,column:7}},41:{start:{line:140,column:6},end:{line:140,column:53}},42:{start:{line:142,column:9},end:{line:142,column:47}},43:{start:{line:144,column:2},end:{line:144,column:16}},44:{start:{line:149,column:2},end:{line:149,column:85}},45:{start:{line:149,column:40},end:{line:149,column:85}},46:{start:{line:151,column:17},end:{line:151,column:39}},47:{start:{line:154,column:17},end:{line:154,column:19}},48:{start:{line:155,column:2},end:{line:161,column:63}},49:{start:{line:156,column:4},end:{line:160,column:7}},50:{start:{line:159,column:6},end:{line:159,column:58}},51:{start:{line:161,column:9},end:{line:161,column:63}},52:{start:{line:163,column:2},end:{line:163,column:18}},53:{start:{line:168,column:20},end:{line:177,column:1}},54:{start:{line:169,column:2},end:{line:169,column:73}},55:{start:{line:169,column:26},end:{line:169,column:73}},56:{start:{line:172,column:2},end:{line:174,column:49}},57:{start:{line:172,column:45},end:{line:172,column:61}},58:{start:{line:173,column:7},end:{line:174,column:49}},59:{start:{line:173,column:53},end:{line:173,column:72}},60:{start:{line:174,column:7},end:{line:174,column:49}},61:{start:{line:176,column:2},end:{line:176,column:65}},62:{start:{line:179,column:20},end:{line:188,column:1}},63:{start:{line:180,column:2},end:{line:180,column:72}},64:{start:{line:180,column:25},end:{line:180,column:72}},65:{start:{line:183,column:2},end:{line:185,column:49}},66:{start:{line:183,column:45},end:{line:183,column:61}},67:{start:{line:184,column:7},end:{line:185,column:49}},68:{start:{line:184,column:53},end:{line:184,column:72}},69:{start:{line:185,column:7},end:{line:185,column:49}},70:{start:{line:187,column:2},end:{line:187,column:67}},71:{start:{line:190,column:17},end:{line:199,column:1}},72:{start:{line:191,column:2},end:{line:191,column:64}},73:{start:{line:191,column:23},end:{line:191,column:64}},74:{start:{line:194,column:2},end:{line:196,column:46}},75:{start:{line:194,column:41},end:{line:194,column:57}},76:{start:{line:195,column:7},end:{line:196,column:46}},77:{start:{line:195,column:49},end:{line:195,column:68}},78:{start:{line:196,column:7},end:{line:196,column:46}},79:{start:{line:198,column:2},end:{line:198,column:62}},80:{start:{line:201,column:19},end:{line:210,column:1}},81:{start:{line:202,column:2},end:{line:202,column:73}},82:{start:{line:202,column:24},end:{line:202,column:73}},83:{start:{line:205,column:2},end:{line:207,column:46}},84:{start:{line:205,column:41},end:{line:205,column:57}},85:{start:{line:206,column:7},end:{line:207,column:46}},86:{start:{line:206,column:49},end:{line:206,column:68}},87:{start:{line:207,column:7},end:{line:207,column:46}},88:{start:{line:209,column:2},end:{line:209,column:74}}},fnMap:{0:{name:"generateKey",decl:{start:{line:24,column:22},end:{line:24,column:33}},loc:{start:{line:24,column:46},end:{line:53,column:1}},line:24},1:{name:"encrypt",decl:{start:{line:62,column:22},end:{line:62,column:29}},loc:{start:{line:62,column:54},end:{line:91,column:1}},line:62},2:{name:"(anonymous_2)",decl:{start:{line:78,column:13},end:{line:78,column:14}},loc:{start:{line:78,column:20},end:{line:78,column:71}},line:78},3:{name:"(anonymous_3)",decl:{start:{line:86,column:12},end:{line:86,column:13}},loc:{start:{line:86,column:19},end:{line:86,column:73}},line:86},4:{name:"decrypt",decl:{start:{line:99,column:22},end:{line:99,column:29}},loc:{start:{line:99,column:43},end:{line:118,column:1}},line:99},5:{name:"(anonymous_5)",decl:{start:{line:106,column:12},end:{line:106,column:13}},loc:{start:{line:106,column:19},end:{line:106,column:91}},line:106},6:{name:"(anonymous_6)",decl:{start:{line:113,column:13},end:{line:113,column:14}},loc:{start:{line:113,column:20},end:{line:113,column:76}},line:113},7:{name:"sign",decl:{start:{line:127,column:22},end:{line:127,column:26}},loc:{start:{line:127,column:51},end:{line:145,column:1}},line:127},8:{name:"(anonymous_8)",decl:{start:{line:139,column:13},end:{line:139,column:14}},loc:{start:{line:139,column:20},end:{line:141,column:5}},line:139},9:{name:"verify",decl:{start:{line:147,column:22},end:{line:147,column:28}},loc:{start:{line:147,column:56},end:{line:164,column:1}},line:147},10:{name:"(anonymous_10)",decl:{start:{line:158,column:13},end:{line:158,column:14}},loc:{start:{line:158,column:20},end:{line:160,column:5}},line:158},11:{name:"(anonymous_11)",decl:{start:{line:168,column:20},end:{line:168,column:21}},loc:{start:{line:168,column:56},end:{line:177,column:1}},line:168},12:{name:"(anonymous_12)",decl:{start:{line:179,column:20},end:{line:179,column:21}},loc:{start:{line:179,column:58},end:{line:188,column:1}},line:179},13:{name:"(anonymous_13)",decl:{start:{line:190,column:17},end:{line:190,column:18}},loc:{start:{line:190,column:53},end:{line:199,column:1}},line:190},14:{name:"(anonymous_14)",decl:{start:{line:201,column:19},end:{line:201,column:20}},loc:{start:{line:201,column:66},end:{line:210,column:1}},line:201}},branchMap:{0:{loc:{start:{line:28,column:2},end:{line:52,column:3}},type:"if",locations:[{start:{line:28,column:2},end:{line:52,column:3}},{start:{line:28,column:2},end:{line:52,column:3}}],line:28},1:{loc:{start:{line:32,column:4},end:{line:51,column:47}},type:"if",locations:[{start:{line:32,column:4},end:{line:51,column:47}},{start:{line:32,column:4},end:{line:51,column:47}}],line:32},2:{loc:{start:{line:37,column:10},end:{line:37,column:74}},type:"cond-expr",locations:[{start:{line:37,column:35},end:{line:37,column:69}},{start:{line:37,column:72},end:{line:37,column:74}}],line:37},3:{loc:{start:{line:40,column:9},end:{line:51,column:47}},type:"if",locations:[{start:{line:40,column:9},end:{line:51,column:47}},{start:{line:40,column:9},end:{line:51,column:47}}],line:40},4:{loc:{start:{line:48,column:10},end:{line:48,column:74}},type:"cond-expr",locations:[{start:{line:48,column:35},end:{line:48,column:69}},{start:{line:48,column:72},end:{line:48,column:74}}],line:48},5:{loc:{start:{line:64,column:2},end:{line:64,column:91}},type:"if",locations:[{start:{line:64,column:2},end:{line:64,column:91}},{start:{line:64,column:2},end:{line:64,column:91}}],line:64},6:{loc:{start:{line:71,column:2},end:{line:79,column:3}},type:"if",locations:[{start:{line:71,column:2},end:{line:79,column:3}},{start:{line:71,column:2},end:{line:79,column:3}}],line:71},7:{loc:{start:{line:71,column:6},end:{line:73,column:120}},type:"binary-expr",locations:[{start:{line:71,column:6},end:{line:71,column:40}},{start:{line:71,column:44},end:{line:71,column:64}},{start:{line:72,column:5},end:{line:72,column:42}},{start:{line:73,column:5},end:{line:73,column:42}},{start:{line:73,column:46},end:{line:73,column:118}}],line:71},8:{loc:{start:{line:73,column:48},end:{line:73,column:117}},type:"binary-expr",locations:[{start:{line:73,column:48},end:{line:73,column:82}},{start:{line:73,column:86},end:{line:73,column:117}}],line:73},9:{loc:{start:{line:75,column:4},end:{line:75,column:104}},type:"if",locations:[{start:{line:75,column:4},end:{line:75,column:104}},{start:{line:75,column:4},end:{line:75,column:104}}],line:75},10:{loc:{start:{line:83,column:2},end:{line:83,column:112}},type:"if",locations:[{start:{line:83,column:2},end:{line:83,column:112}},{start:{line:83,column:2},end:{line:83,column:112}}],line:83},11:{loc:{start:{line:100,column:2},end:{line:100,column:88}},type:"if",locations:[{start:{line:100,column:2},end:{line:100,column:88}},{start:{line:100,column:2},end:{line:100,column:88}}],line:100},12:{loc:{start:{line:103,column:2},end:{line:103,column:110}},type:"if",locations:[{start:{line:103,column:2},end:{line:103,column:110}},{start:{line:103,column:2},end:{line:103,column:110}}],line:103},13:{loc:{start:{line:110,column:2},end:{line:115,column:88}},type:"if",locations:[{start:{line:110,column:2},end:{line:115,column:88}},{start:{line:110,column:2},end:{line:115,column:88}}],line:110},14:{loc:{start:{line:110,column:5},end:{line:110,column:66}},type:"binary-expr",locations:[{start:{line:110,column:5},end:{line:110,column:42}},{start:{line:110,column:46},end:{line:110,column:66}}],line:110},15:{loc:{start:{line:115,column:7},end:{line:115,column:88}},type:"if",locations:[{start:{line:115,column:7},end:{line:115,column:88}},{start:{line:115,column:7},end:{line:115,column:88}}],line:115},16:{loc:{start:{line:129,column:2},end:{line:129,column:85}},type:"if",locations:[{start:{line:129,column:2},end:{line:129,column:85}},{start:{line:129,column:2},end:{line:129,column:85}}],line:129},17:{loc:{start:{line:136,column:2},end:{line:142,column:47}},type:"if",locations:[{start:{line:136,column:2},end:{line:142,column:47}},{start:{line:136,column:2},end:{line:142,column:47}}],line:136},18:{loc:{start:{line:149,column:2},end:{line:149,column:85}},type:"if",locations:[{start:{line:149,column:2},end:{line:149,column:85}},{start:{line:149,column:2},end:{line:149,column:85}}],line:149},19:{loc:{start:{line:155,column:2},end:{line:161,column:63}},type:"if",locations:[{start:{line:155,column:2},end:{line:161,column:63}},{start:{line:155,column:2},end:{line:161,column:63}}],line:155},20:{loc:{start:{line:155,column:5},end:{line:155,column:61}},type:"binary-expr",locations:[{start:{line:155,column:5},end:{line:155,column:37}},{start:{line:155,column:41},end:{line:155,column:61}}],line:155},21:{loc:{start:{line:169,column:2},end:{line:169,column:73}},type:"if",locations:[{start:{line:169,column:2},end:{line:169,column:73}},{start:{line:169,column:2},end:{line:169,column:73}}],line:169},22:{loc:{start:{line:172,column:2},end:{line:174,column:49}},type:"if",locations:[{start:{line:172,column:2},end:{line:174,column:49}},{start:{line:172,column:2},end:{line:174,column:49}}],line:172},23:{loc:{start:{line:173,column:7},end:{line:174,column:49}},type:"if",locations:[{start:{line:173,column:7},end:{line:174,column:49}},{start:{line:173,column:7},end:{line:174,column:49}}],line:173},24:{loc:{start:{line:180,column:2},end:{line:180,column:72}},type:"if",locations:[{start:{line:180,column:2},end:{line:180,column:72}},{start:{line:180,column:2},end:{line:180,column:72}}],line:180},25:{loc:{start:{line:183,column:2},end:{line:185,column:49}},type:"if",locations:[{start:{line:183,column:2},end:{line:185,column:49}},{start:{line:183,column:2},end:{line:185,column:49}}],line:183},26:{loc:{start:{line:184,column:7},end:{line:185,column:49}},type:"if",locations:[{start:{line:184,column:7},end:{line:185,column:49}},{start:{line:184,column:7},end:{line:185,column:49}}],line:184},27:{loc:{start:{line:191,column:2},end:{line:191,column:64}},type:"if",locations:[{start:{line:191,column:2},end:{line:191,column:64}},{start:{line:191,column:2},end:{line:191,column:64}}],line:191},28:{loc:{start:{line:194,column:2},end:{line:196,column:46}},type:"if",locations:[{start:{line:194,column:2},end:{line:196,column:46}},{start:{line:194,column:2},end:{line:196,column:46}}],line:194},29:{loc:{start:{line:195,column:7},end:{line:196,column:46}},type:"if",locations:[{start:{line:195,column:7},end:{line:196,column:46}},{start:{line:195,column:7},end:{line:196,column:46}}],line:195},30:{loc:{start:{line:202,column:2},end:{line:202,column:73}},type:"if",locations:[{start:{line:202,column:2},end:{line:202,column:73}},{start:{line:202,column:2},end:{line:202,column:73}}],line:202},31:{loc:{start:{line:205,column:2},end:{line:207,column:46}},type:"if",locations:[{start:{line:205,column:2},end:{line:207,column:46}},{start:{line:205,column:2},end:{line:207,column:46}}],line:205},32:{loc:{start:{line:206,column:7},end:{line:207,column:46}},type:"if",locations:[{start:{line:206,column:7},end:{line:207,column:46}},{start:{line:206,column:7},end:{line:207,column:46}}],line:206}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0,80:0,81:0,82:0,83:0,84:0,85:0,86:0,87:0,88:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0,0,0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0],23:[0,0],24:[0,0],25:[0,0],26:[0,0],27:[0,0],28:[0,0],29:[0,0],30:[0,0],31:[0,0],32:[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}();function Kn(n){return Sn.apply(this,arguments)}function Sn(){return(Sn=r()(o.a.mark(function n(e){var t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return An.f[0]++,An.s[0]++,n.next=4,xn(e);case 4:if(t=n.sent,An.s[1]++,"session"!==e.keyParams.type){n.next=12;break}return An.b[0][0]++,An.s[2]++,n.abrupt("return",t);case 12:if(An.b[0][1]++,An.s[3]++,"openpgp"!==e.suite){n.next=20;break}return An.b[1][0]++,An.s[4]++,n.abrupt("return",{publicKey:{keyString:t.publicKey.armor(),keyIds:t.keyIds},privateKey:Object.assign({keyString:t.privateKey.armor(),keyIds:t.keyIds},e.passphrase?(An.b[2][0]++,{passphrase:e.passphrase}):(An.b[2][1]++,{}))});case 20:if(An.b[1][1]++,An.s[5]++,"jscu"!==e.suite){n.next=41;break}return An.b[3][0]++,An.s[6]++,n.next=27,t.publicKey.export("pem",{outputPublic:!0});case 27:return n.t0=n.sent,n.t1=t.keyIds,n.t2={keyString:n.t0,keyIds:n.t1},n.t3=Object,n.next=33,t.privateKey.export("pem");case 33:return n.t4=n.sent,n.t5=t.keyIds,n.t6={keyString:n.t4,keyIds:n.t5},n.t7=e.passphrase?(An.b[4][0]++,{passphrase:e.passphrase}):(An.b[4][1]++,{}),n.t8=n.t3.assign.call(n.t3,n.t6,n.t7),n.abrupt("return",{publicKey:n.t2,privateKey:n.t8});case 41:throw An.b[3][1]++,An.s[7]++,new Error("InvalidCryptoSuite");case 44:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function Un(n){return Pn.apply(this,arguments)}function Pn(){return(Pn=r()(o.a.mark(function n(e){var t,l,i,r,c,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.message,l=e.keys,i=e.config,An.f[1]++,An.s[8]++,void 0!==i.encrypt){n.next=9;break}throw An.b[5][0]++,An.s[9]++,new Error("InvalidConfigForEncryption");case 9:An.b[5][1]++;case 10:if(An.s[10]++,r=En(t),An.s[11]++,c={},An.s[12]++,An.b[7][0]++,void 0===i.sign||(An.b[7][1]++,!i.sign.required)||(An.b[7][2]++,void 0!==i.encrypt&&(An.b[7][3]++,void 0===i.encrypt||(An.b[7][4]++,An.b[8][0]++,"openpgp"===i.encrypt.suite&&(An.b[8][1]++,"openpgp"===i.sign.suite))))){n.next=29;break}if(An.b[6][0]++,An.s[13]++,l.suite.sign_verify===i.sign.suite){n.next=22;break}throw An.b[9][0]++,An.s[14]++,new Error("UnmatchedKeyTypeToSigningSuite");case 22:An.b[9][1]++;case 23:return An.s[15]++,n.next=26,Fn({message:r,keys:l,options:i.sign.options}).catch(function(n){throw An.f[2]++,An.s[16]++,new Error("SigningFailed: ".concat(n.message))});case 26:c=n.sent,n.next=30;break;case 29:An.b[6][1]++;case 30:if(An.s[17]++,l.suite.encrypt_decrypt===i.encrypt.suite){n.next=37;break}throw An.b[10][0]++,An.s[18]++,new Error("UnmatchedKeyTypeToEncryptionSuite");case 37:An.b[10][1]++;case 38:return An.s[19]++,n.next=41,Rn({message:r,keys:l,options:i.encrypt.options}).catch(function(n){throw An.f[3]++,An.s[20]++,new Error("EncryptionFailed: ".concat(n.message))});case 41:return u=n.sent,An.s[21]++,n.abrupt("return",Object.assign(u,c));case 44:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function In(n){return On.apply(this,arguments)}function On(){return(On=r()(o.a.mark(function n(e){var t,l,i,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.data,l=e.keys,An.f[4]++,An.s[22]++,void 0!==t.message){n.next=9;break}throw An.b[11][0]++,An.s[23]++,new Error("InvalidEncryptedDataFormat");case 9:An.b[11][1]++;case 10:if(An.s[24]++,l.suite.encrypt_decrypt===t.message.suite){n.next=17;break}throw An.b[12][0]++,An.s[25]++,new Error("UnmatchedKeyTypeToEncryptionSuite");case 17:An.b[12][1]++;case 18:return An.s[26]++,n.next=21,Ln({encrypted:t,keys:l,options:t.message.options}).catch(function(n){throw An.f[5]++,An.s[27]++,console.error(n),An.s[28]++,new Error("DecryptionFailed: ".concat(n.message))});case 21:if(i=n.sent,An.s[29]++,r={},An.s[30]++,An.b[14][0]++,void 0===t.signature||(An.b[14][1]++,!l.keys.publicKeys)){n.next=32;break}return An.b[13][0]++,An.s[31]++,n.next=29,Cn({message:En(i.data),signature:t.signature,keys:l,options:t.signature.options}).catch(function(n){throw An.f[6]++,An.s[32]++,new Error("VerificationFailed: ".concat(n.message))});case 29:r=n.sent,n.next=35;break;case 32:An.b[13][1]++,An.s[33]++,void 0!==i.signatures?(An.b[15][0]++,An.s[34]++,r=i.signatures):An.b[15][1]++;case 35:return An.s[35]++,n.abrupt("return",{data:i.data,signatures:r});case 37:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function Bn(n){return Mn.apply(this,arguments)}function Mn(){return(Mn=r()(o.a.mark(function n(e){var t,l,i,r,c;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.message,l=e.keys,i=e.config,An.f[7]++,An.s[36]++,void 0!==i.sign){n.next=9;break}throw An.b[16][0]++,An.s[37]++,new Error("InvalidConfigForSigning");case 9:An.b[16][1]++;case 10:if(An.s[38]++,r=En(t),An.s[39]++,!l.keys.privateKeys){n.next=20;break}return An.b[17][0]++,An.s[40]++,n.next=17,Fn({message:r,keys:l,options:i.sign.options,output:{sign:i.sign.output}}).catch(function(n){throw An.f[8]++,An.s[41]++,new Error("SigningFailed: ".concat(n.message))});case 17:c=n.sent,n.next=23;break;case 20:throw An.b[17][1]++,An.s[42]++,new Error("InvalidPrivateKeys");case 23:return An.s[43]++,n.abrupt("return",c);case 25:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function Tn(n){return Nn.apply(this,arguments)}function Nn(){return(Nn=r()(o.a.mark(function n(e){var t,l,i,r,c;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.message,l=e.signature,i=e.keys,An.f[9]++,An.s[44]++,void 0!==l){n.next=9;break}throw An.b[18][0]++,An.s[45]++,new Error("InvalidObjectForSignature");case 9:An.b[18][1]++;case 10:if(An.s[46]++,r=En(t),An.s[47]++,c={},An.s[48]++,An.b[20][0]++,void 0===l||(An.b[20][1]++,!i.keys.publicKeys)){n.next=21;break}return An.b[19][0]++,An.s[49]++,n.next=18,Cn({message:r,signature:l,keys:i,options:l.options}).catch(function(n){throw An.f[10]++,An.s[50]++,new Error("VerificationFailed: ".concat(n.message))});case 18:c=n.sent,n.next=24;break;case 21:throw An.b[19][1]++,An.s[51]++,new Error("InvalidSignatureOrInvalidPublicKey");case 24:return An.s[52]++,n.abrupt("return",c);case 26:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}An.s[53]++;var Rn=function(){var n=r()(o.a.mark(function n(e){var t,l,i,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.message,l=e.keys,i=e.options,An.f[11]++,An.s[54]++,l.canEncrypt()){n.next=9;break}throw An.b[21][0]++,An.s[55]++,new Error("UnsupportedKeyForEncryption");case 9:An.b[21][1]++;case 10:if(An.s[56]++,"jscu"!==l.suite.encrypt_decrypt){n.next=17;break}An.b[22][0]++,An.s[57]++,r=an,n.next=28;break;case 17:if(An.b[22][1]++,An.s[58]++,"openpgp"!==l.suite.encrypt_decrypt){n.next=25;break}An.b[23][0]++,An.s[59]++,r=dn,n.next=28;break;case 25:throw An.b[23][1]++,An.s[60]++,new Error("UnknownEncryptionSuite");case 28:return An.s[61]++,n.abrupt("return",r.encrypt({message:t,keys:l.keys,options:i}));case 30:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}();An.s[62]++;var Ln=function(){var n=r()(o.a.mark(function n(e){var t,l,i,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.encrypted,l=e.keys,i=e.options,An.f[12]++,An.s[63]++,l.canDecrypt()){n.next=9;break}throw An.b[24][0]++,An.s[64]++,new Error("UnsupportedKeyForDecryption");case 9:An.b[24][1]++;case 10:if(An.s[65]++,"jscu"!==l.suite.encrypt_decrypt){n.next=17;break}An.b[25][0]++,An.s[66]++,r=an,n.next=28;break;case 17:if(An.b[25][1]++,An.s[67]++,"openpgp"!==l.suite.encrypt_decrypt){n.next=25;break}An.b[26][0]++,An.s[68]++,r=dn,n.next=28;break;case 25:throw An.b[26][1]++,An.s[69]++,new Error("UnknownDecryptionSuite");case 28:return An.s[70]++,n.abrupt("return",r.decrypt({encrypted:t,keys:l.keys,options:i}));case 30:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}();An.s[71]++;var Fn=function(){var n=r()(o.a.mark(function n(e){var t,l,i,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.message,l=e.keys,i=e.options,An.f[13]++,An.s[72]++,l.canSign()){n.next=9;break}throw An.b[27][0]++,An.s[73]++,new Error("UnsupportedKeyForSign");case 9:An.b[27][1]++;case 10:if(An.s[74]++,"jscu"!==l.suite.sign_verify){n.next=17;break}An.b[28][0]++,An.s[75]++,r=an,n.next=28;break;case 17:if(An.b[28][1]++,An.s[76]++,"openpgp"!==l.suite.sign_verify){n.next=25;break}An.b[29][0]++,An.s[77]++,r=dn,n.next=28;break;case 25:throw An.b[29][1]++,An.s[78]++,new Error("UnknownSigningSuite");case 28:return An.s[79]++,n.abrupt("return",r.sign({message:t,keys:l.keys,options:i}));case 30:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}();An.s[80]++;var Cn=function(){var n=r()(o.a.mark(function n(e){var t,l,i,r,c;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.message,l=e.signature,i=e.keys,r=e.options,An.f[14]++,An.s[81]++,i.canVerify()){n.next=9;break}throw An.b[30][0]++,An.s[82]++,new Error("UnsupportedKeyForVerification");case 9:An.b[30][1]++;case 10:if(An.s[83]++,"jscu"!==i.suite.sign_verify){n.next=17;break}An.b[31][0]++,An.s[84]++,c=an,n.next=28;break;case 17:if(An.b[31][1]++,An.s[85]++,"openpgp"!==i.suite.sign_verify){n.next=25;break}An.b[32][0]++,An.s[86]++,c=dn,n.next=28;break;case 25:throw An.b[32][1]++,An.s[87]++,new Error("UnknownSigningSuite");case 28:return An.s[88]++,n.abrupt("return",c.verify({message:t,signature:l,keys:i.keys,options:r}));case 30:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),Dn=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/cascaded_data.js",e="b74cc94070ed1efa1ed2c3bb456d5ad9eb7a02ab",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/cascaded_data.js",statementMap:{0:{start:{line:10,column:2},end:{line:10,column:90}},1:{start:{line:10,column:43},end:{line:10,column:90}},2:{start:{line:12,column:2},end:{line:14,column:79}},3:{start:{line:13,column:4},end:{line:13,column:37}},4:{start:{line:14,column:16},end:{line:14,column:77}},5:{start:{line:16,column:2},end:{line:16,column:70}},6:{start:{line:16,column:31},end:{line:16,column:70}},7:{start:{line:18,column:27},end:{line:23,column:4}},8:{start:{line:19,column:25},end:{line:19,column:27}},9:{start:{line:20,column:4},end:{line:20,column:101}},10:{start:{line:20,column:43},end:{line:20,column:101}},11:{start:{line:21,column:4},end:{line:21,column:107}},12:{start:{line:21,column:45},end:{line:21,column:107}},13:{start:{line:22,column:4},end:{line:22,column:24}},14:{start:{line:25,column:2},end:{line:25,column:46}},15:{start:{line:30,column:2},end:{line:30,column:75}},16:{start:{line:30,column:32},end:{line:30,column:75}},17:{start:{line:31,column:2},end:{line:35,column:5}},18:{start:{line:32,column:4},end:{line:32,column:132}},19:{start:{line:32,column:89},end:{line:32,column:132}},20:{start:{line:33,column:4},end:{line:33,column:122}},21:{start:{line:33,column:86},end:{line:33,column:122}},22:{start:{line:34,column:4},end:{line:34,column:133}},23:{start:{line:34,column:83},end:{line:34,column:133}},24:{start:{line:37,column:2},end:{line:37,column:32}},25:{start:{line:42,column:4},end:{line:42,column:12}},26:{start:{line:43,column:4},end:{line:43,column:23}},27:{start:{line:47,column:4},end:{line:47,column:83}},28:{start:{line:47,column:41},end:{line:47,column:83}},29:{start:{line:48,column:4},end:{line:48,column:95}},30:{start:{line:48,column:50},end:{line:48,column:95}},31:{start:{line:50,column:4},end:{line:50,column:39}},32:{start:{line:54,column:4},end:{line:54,column:83}},33:{start:{line:54,column:41},end:{line:54,column:83}},34:{start:{line:55,column:4},end:{line:55,column:85}},35:{start:{line:55,column:37},end:{line:55,column:85}},36:{start:{line:56,column:4},end:{line:56,column:78}},37:{start:{line:56,column:38},end:{line:56,column:78}},38:{start:{line:58,column:4},end:{line:58,column:38}},39:{start:{line:62,column:32},end:{line:67,column:6}},40:{start:{line:63,column:27},end:{line:63,column:29}},41:{start:{line:64,column:6},end:{line:64,column:93}},42:{start:{line:64,column:46},end:{line:64,column:93}},43:{start:{line:65,column:6},end:{line:65,column:99}},44:{start:{line:65,column:48},end:{line:65,column:99}},45:{start:{line:66,column:6},end:{line:66,column:26}},46:{start:{line:68,column:24},end:{line:68,column:59}},47:{start:{line:69,column:4},end:{line:69,column:39}},48:{start:{line:72,column:14},end:{line:72,column:38}},49:{start:{line:74,column:18},end:{line:74,column:56}}},fnMap:{0:{name:"importCascadedBuffer",decl:{start:{line:9,column:16},end:{line:9,column:36}},loc:{start:{line:9,column:48},end:{line:26,column:1}},line:9},1:{name:"(anonymous_1)",decl:{start:{line:18,column:36},end:{line:18,column:37}},loc:{start:{line:18,column:45},end:{line:23,column:3}},line:18},2:{name:"createCascadedData",decl:{start:{line:28,column:16},end:{line:28,column:34}},loc:{start:{line:28,column:41},end:{line:38,column:1}},line:28},3:{name:"(anonymous_3)",decl:{start:{line:31,column:12},end:{line:31,column:13}},loc:{start:{line:31,column:21},end:{line:35,column:3}},line:31},4:{name:"(anonymous_4)",decl:{start:{line:41,column:2},end:{line:41,column:3}},loc:{start:{line:41,column:19},end:{line:44,column:3}},line:41},5:{name:"(anonymous_5)",decl:{start:{line:46,column:2},end:{line:46,column:3}},loc:{start:{line:46,column:15},end:{line:51,column:3}},line:46},6:{name:"(anonymous_6)",decl:{start:{line:53,column:2},end:{line:53,column:3}},loc:{start:{line:53,column:23},end:{line:59,column:3}},line:53},7:{name:"(anonymous_7)",decl:{start:{line:61,column:2},end:{line:61,column:3}},loc:{start:{line:61,column:14},end:{line:70,column:3}},line:61},8:{name:"(anonymous_8)",decl:{start:{line:62,column:42},end:{line:62,column:43}},loc:{start:{line:62,column:51},end:{line:67,column:5}},line:62},9:{name:"(anonymous_9)",decl:{start:{line:72,column:2},end:{line:72,column:3}},loc:{start:{line:72,column:12},end:{line:72,column:40}},line:72},10:{name:"(anonymous_10)",decl:{start:{line:74,column:2},end:{line:74,column:3}},loc:{start:{line:74,column:16},end:{line:74,column:58}},line:74}},branchMap:{0:{loc:{start:{line:10,column:2},end:{line:10,column:90}},type:"if",locations:[{start:{line:10,column:2},end:{line:10,column:90}},{start:{line:10,column:2},end:{line:10,column:90}}],line:10},1:{loc:{start:{line:16,column:2},end:{line:16,column:70}},type:"if",locations:[{start:{line:16,column:2},end:{line:16,column:70}},{start:{line:16,column:2},end:{line:16,column:70}}],line:16},2:{loc:{start:{line:20,column:4},end:{line:20,column:101}},type:"if",locations:[{start:{line:20,column:4},end:{line:20,column:101}},{start:{line:20,column:4},end:{line:20,column:101}}],line:20},3:{loc:{start:{line:21,column:4},end:{line:21,column:107}},type:"if",locations:[{start:{line:21,column:4},end:{line:21,column:107}},{start:{line:21,column:4},end:{line:21,column:107}}],line:21},4:{loc:{start:{line:30,column:2},end:{line:30,column:75}},type:"if",locations:[{start:{line:30,column:2},end:{line:30,column:75}},{start:{line:30,column:2},end:{line:30,column:75}}],line:30},5:{loc:{start:{line:32,column:4},end:{line:32,column:132}},type:"if",locations:[{start:{line:32,column:4},end:{line:32,column:132}},{start:{line:32,column:4},end:{line:32,column:132}}],line:32},6:{loc:{start:{line:32,column:7},end:{line:32,column:87}},type:"binary-expr",locations:[{start:{line:32,column:7},end:{line:32,column:41}},{start:{line:32,column:45},end:{line:32,column:87}}],line:32},7:{loc:{start:{line:33,column:4},end:{line:33,column:122}},type:"if",locations:[{start:{line:33,column:4},end:{line:33,column:122}},{start:{line:33,column:4},end:{line:33,column:122}}],line:33},8:{loc:{start:{line:33,column:7},end:{line:33,column:84}},type:"binary-expr",locations:[{start:{line:33,column:7},end:{line:33,column:43}},{start:{line:33,column:47},end:{line:33,column:84}}],line:33},9:{loc:{start:{line:34,column:4},end:{line:34,column:133}},type:"if",locations:[{start:{line:34,column:4},end:{line:34,column:133}},{start:{line:34,column:4},end:{line:34,column:133}}],line:34},10:{loc:{start:{line:34,column:7},end:{line:34,column:81}},type:"binary-expr",locations:[{start:{line:34,column:7},end:{line:34,column:41}},{start:{line:34,column:45},end:{line:34,column:81}}],line:34},11:{loc:{start:{line:47,column:4},end:{line:47,column:83}},type:"if",locations:[{start:{line:47,column:4},end:{line:47,column:83}},{start:{line:47,column:4},end:{line:47,column:83}}],line:47},12:{loc:{start:{line:47,column:8},end:{line:47,column:39}},type:"binary-expr",locations:[{start:{line:47,column:8},end:{line:47,column:28}},{start:{line:47,column:32},end:{line:47,column:39}}],line:47},13:{loc:{start:{line:48,column:4},end:{line:48,column:95}},type:"if",locations:[{start:{line:48,column:4},end:{line:48,column:95}},{start:{line:48,column:4},end:{line:48,column:95}}],line:48},14:{loc:{start:{line:54,column:4},end:{line:54,column:83}},type:"if",locations:[{start:{line:54,column:4},end:{line:54,column:83}},{start:{line:54,column:4},end:{line:54,column:83}}],line:54},15:{loc:{start:{line:54,column:8},end:{line:54,column:39}},type:"binary-expr",locations:[{start:{line:54,column:8},end:{line:54,column:28}},{start:{line:54,column:32},end:{line:54,column:39}}],line:54},16:{loc:{start:{line:55,column:4},end:{line:55,column:85}},type:"if",locations:[{start:{line:55,column:4},end:{line:55,column:85}},{start:{line:55,column:4},end:{line:55,column:85}}],line:55},17:{loc:{start:{line:56,column:4},end:{line:56,column:78}},type:"if",locations:[{start:{line:56,column:4},end:{line:56,column:78}},{start:{line:56,column:4},end:{line:56,column:78}}],line:56},18:{loc:{start:{line:64,column:6},end:{line:64,column:93}},type:"if",locations:[{start:{line:64,column:6},end:{line:64,column:93}},{start:{line:64,column:6},end:{line:64,column:93}}],line:64},19:{loc:{start:{line:65,column:6},end:{line:65,column:99}},type:"if",locations:[{start:{line:65,column:6},end:{line:65,column:99}},{start:{line:65,column:6},end:{line:65,column:99}}],line:65}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}();function Jn(n){if(Dn.f[0]++,Dn.s[0]++,!(n instanceof Uint8Array))throw Dn.b[0][0]++,Dn.s[1]++,new Error("NonUint8ArraySerializedData");var e;Dn.b[0][1]++,Dn.s[2]++;try{Dn.s[3]++,e=J.a.decode(n)}catch(n){throw Dn.s[4]++,new Error("FailedToParseCascadedBuffer: ".concat(n.message))}if(Dn.s[5]++,!(e instanceof Array))throw Dn.b[1][0]++,Dn.s[6]++,new Error("InvalidCascadedData");Dn.b[1][1]++;var t=(Dn.s[7]++,e.map(function(n){Dn.f[1]++;var e=(Dn.s[8]++,{});return Dn.s[9]++,void 0!==n.message?(Dn.b[2][0]++,Dn.s[10]++,e.message=z(n.message)):Dn.b[2][1]++,Dn.s[11]++,void 0!==n.signature?(Dn.b[3][0]++,Dn.s[12]++,e.signature=tn(n.signature)):Dn.b[3][1]++,Dn.s[13]++,e}));return Dn.s[14]++,Gn(t)}function Gn(n){if(Dn.f[2]++,Dn.s[15]++,!(n instanceof Array))throw Dn.b[4][0]++,Dn.s[16]++,new Error("NotArrayForCascadedData");return Dn.b[4][1]++,Dn.s[17]++,n.map(function(n){if(Dn.f[3]++,Dn.s[18]++,Dn.b[6][0]++,!(void 0===n.message||(Dn.b[6][1]++,n.message instanceof $)))throw Dn.b[5][0]++,Dn.s[19]++,new Error("InvalidEncryptedMessage");if(Dn.b[5][1]++,Dn.s[20]++,Dn.b[8][0]++,!(void 0===n.signature||(Dn.b[8][1]++,n.signature instanceof on)))throw Dn.b[7][0]++,Dn.s[21]++,new Error("InvalidSignature");if(Dn.b[7][1]++,Dn.s[22]++,Dn.b[10][0]++,void 0===n.message&&(Dn.b[10][1]++,void 0===n.signature))throw Dn.b[9][0]++,Dn.s[23]++,new Error("NoEncryptedMessageAndSignature");Dn.b[9][1]++}),Dn.s[24]++,new Hn(n)}var Hn=function(n){function e(n){var t,l;return u()(this,e),Dn.f[4]++,Dn.s[25]++,l=h()(this,v()(e).call(this)),Dn.s[26]++,(t=l).push.apply(t,p()(n)),l}return w()(e,n),a()(e,[{key:"extract",value:function(n){if(Dn.f[5]++,Dn.s[27]++,Dn.b[12][0]++,n>this.length-1||(Dn.b[12][1]++,n<0))throw Dn.b[11][0]++,Dn.s[28]++,new Error("InvalidIndexOutOfRange");if(Dn.b[11][1]++,Dn.s[29]++,void 0===this[n].message)throw Dn.b[13][0]++,Dn.s[30]++,new Error("MessageObjectDoesNotExist");return Dn.b[13][1]++,Dn.s[31]++,this[n].message.extract()}},{key:"insert",value:function(n,e){if(Dn.f[6]++,Dn.s[32]++,Dn.b[15][0]++,n>this.length-1||(Dn.b[15][1]++,n<0))throw Dn.b[14][0]++,Dn.s[33]++,new Error("InvalidIndexOutOfRange");if(Dn.b[14][1]++,Dn.s[34]++,!(e instanceof Array))throw Dn.b[16][0]++,Dn.s[35]++,new Error("InvalidEncryptedMessageArray");if(Dn.b[16][1]++,Dn.s[36]++,this[n].message.length>0)throw Dn.b[17][0]++,Dn.s[37]++,new Error("MessageAlreadyExists");Dn.b[17][1]++,Dn.s[38]++,this[n].message.insert(e)}},{key:"serialize",value:function(){Dn.f[7]++;var n=(Dn.s[39]++,this.map(function(n){Dn.f[8]++;var e=(Dn.s[40]++,{});return Dn.s[41]++,void 0!==n.message?(Dn.b[18][0]++,Dn.s[42]++,e.message=n.message.serialize()):Dn.b[18][1]++,Dn.s[43]++,void 0!==n.signature?(Dn.b[19][0]++,Dn.s[44]++,e.signature=n.signature.serialize()):Dn.b[19][1]++,Dn.s[45]++,e})),e=(Dn.s[46]++,J.a.encode(n));return Dn.s[47]++,new Uint8Array(e)}},{key:"toArray",value:function(){return Dn.f[9]++,Dn.s[48]++,Array.from(this)}},{key:"map",value:function(n){return Dn.f[10]++,Dn.s[49]++,Array.from(this).map(n)}}]),e}(S()(Array)),Vn=function(){var n="/Users/jun/ProjectJavaScript/cascade/src/cascade.js",e="c3a7d03cdb7f9eaffefdd506f4037b461c4ffa06",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/cascade.js",statementMap:{0:{start:{line:15,column:20},end:{line:15,column:35}},1:{start:{line:16,column:25},end:{line:16,column:60}},2:{start:{line:16,column:47},end:{line:16,column:59}},3:{start:{line:18,column:18},end:{line:18,column:31}},4:{start:{line:19,column:2},end:{line:19,column:79}},5:{start:{line:20,column:2},end:{line:20,column:43}},6:{start:{line:22,column:2},end:{line:22,column:17}},7:{start:{line:26,column:20},end:{line:26,column:35}},8:{start:{line:28,column:18},end:{line:28,column:31}},9:{start:{line:29,column:2},end:{line:29,column:63}},10:{start:{line:30,column:2},end:{line:30,column:37}},11:{start:{line:32,column:2},end:{line:32,column:17}},12:{start:{line:36,column:14},end:{line:36,column:36}},13:{start:{line:40,column:4},end:{line:40,column:64}},14:{start:{line:40,column:33},end:{line:40,column:64}},15:{start:{line:41,column:4},end:{line:41,column:65}},16:{start:{line:41,column:33},end:{line:41,column:65}},17:{start:{line:42,column:4},end:{line:42,column:73}},18:{start:{line:42,column:37},end:{line:42,column:73}},19:{start:{line:44,column:4},end:{line:44,column:29}},20:{start:{line:45,column:4},end:{line:45,column:25}},21:{start:{line:47,column:4},end:{line:54,column:5}},22:{start:{line:48,column:6},end:{line:48,column:78}},23:{start:{line:48,column:41},end:{line:48,column:78}},24:{start:{line:49,column:22},end:{line:52,column:8}},25:{start:{line:50,column:8},end:{line:50,column:86}},26:{start:{line:50,column:50},end:{line:50,column:86}},27:{start:{line:51,column:8},end:{line:51,column:24}},28:{start:{line:53,column:6},end:{line:53,column:28}},29:{start:{line:56,column:4},end:{line:63,column:5}},30:{start:{line:57,column:6},end:{line:57,column:92}},31:{start:{line:57,column:48},end:{line:57,column:92}},32:{start:{line:58,column:22},end:{line:61,column:8}},33:{start:{line:59,column:8},end:{line:59,column:102}},34:{start:{line:59,column:59},end:{line:59,column:102}},35:{start:{line:60,column:8},end:{line:60,column:39}},36:{start:{line:62,column:6},end:{line:62,column:28}},37:{start:{line:66,column:4},end:{line:66,column:47}},38:{start:{line:71,column:24},end:{line:71,column:54}},39:{start:{line:73,column:23},end:{line:73,column:52}},40:{start:{line:74,column:4},end:{line:108,column:8}},41:{start:{line:75,column:6},end:{line:75,column:101}},42:{start:{line:75,column:65},end:{line:75,column:101}},43:{start:{line:77,column:26},end:{line:77,column:70}},44:{start:{line:78,column:24},end:{line:78,column:35}},45:{start:{line:81,column:24},end:{line:81,column:106}},46:{start:{line:82,column:6},end:{line:82,column:44}},47:{start:{line:83,column:25},end:{line:83,column:59}},48:{start:{line:84,column:31},end:{line:86,column:46}},49:{start:{line:91,column:6},end:{line:96,column:7}},50:{start:{line:91,column:50},end:{line:91,column:83}},51:{start:{line:93,column:8},end:{line:95,column:45}},52:{start:{line:93,column:40},end:{line:93,column:100}},53:{start:{line:94,column:13},end:{line:95,column:45}},54:{start:{line:94,column:48},end:{line:94,column:111}},55:{start:{line:95,column:13},end:{line:95,column:45}},56:{start:{line:97,column:6},end:{line:97,column:44}},57:{start:{line:100,column:6},end:{line:105,column:7}},58:{start:{line:101,column:8},end:{line:101,column:92}},59:{start:{line:102,column:8},end:{line:102,column:51}},60:{start:{line:103,column:8},end:{line:103,column:57}},61:{start:{line:104,column:8},end:{line:104,column:31}},62:{start:{line:107,column:6},end:{line:107,column:112}},63:{start:{line:116,column:4},end:{line:116,column:80}},64:{start:{line:116,column:40},end:{line:116,column:80}},65:{start:{line:117,column:4},end:{line:117,column:81}},66:{start:{line:117,column:41},end:{line:117,column:81}},67:{start:{line:120,column:4},end:{line:120,column:30}},68:{start:{line:122,column:17},end:{line:122,column:75}},69:{start:{line:122,column:55},end:{line:122,column:73}},70:{start:{line:123,column:4},end:{line:123,column:36}},71:{start:{line:127,column:4},end:{line:127,column:80}},72:{start:{line:127,column:40},end:{line:127,column:80}},73:{start:{line:130,column:29},end:{line:130,column:58}},74:{start:{line:133,column:22},end:{line:133,column:44}},75:{start:{line:134,column:4},end:{line:174,column:5}},76:{start:{line:135,column:6},end:{line:135,column:82}},77:{start:{line:135,column:45},end:{line:135,column:82}},78:{start:{line:136,column:6},end:{line:136,column:86}},79:{start:{line:136,column:49},end:{line:136,column:86}},80:{start:{line:138,column:6},end:{line:138,column:53}},81:{start:{line:141,column:6},end:{line:173,column:7}},82:{start:{line:142,column:28},end:{line:142,column:77}},83:{start:{line:143,column:26},end:{line:143,column:37}},84:{start:{line:146,column:8},end:{line:155,column:9}},85:{start:{line:146,column:72},end:{line:146,column:132}},86:{start:{line:148,column:10},end:{line:154,column:47}},87:{start:{line:149,column:12},end:{line:149,column:104}},88:{start:{line:151,column:15},end:{line:154,column:47}},89:{start:{line:152,column:12},end:{line:152,column:107}},90:{start:{line:154,column:15},end:{line:154,column:47}},91:{start:{line:158,column:8},end:{line:170,column:9}},92:{start:{line:159,column:10},end:{line:159,column:64}},93:{start:{line:160,column:10},end:{line:160,column:69}},94:{start:{line:161,column:10},end:{line:161,column:35}},95:{start:{line:164,column:13},end:{line:170,column:9}},96:{start:{line:167,column:10},end:{line:167,column:64}},97:{start:{line:168,column:10},end:{line:168,column:46}},98:{start:{line:169,column:10},end:{line:169,column:35}},99:{start:{line:172,column:8},end:{line:172,column:126}},100:{start:{line:175,column:4},end:{line:175,column:21}},101:{start:{line:179,column:16},end:{line:179,column:41}},102:{start:{line:180,column:16},end:{line:180,column:37}},103:{start:{line:183,column:14},end:{line:183,column:38}},104:{start:{line:185,column:18},end:{line:185,column:54}},105:{start:{line:186,column:17},end:{line:186,column:51}}},fnMap:{0:{name:"createEncryptionCascade",decl:{start:{line:14,column:22},end:{line:14,column:45}},loc:{start:{line:14,column:64},end:{line:23,column:1}},line:14},1:{name:"(anonymous_1)",decl:{start:{line:16,column:40},end:{line:16,column:41}},loc:{start:{line:16,column:47},end:{line:16,column:59}},line:16},2:{name:"createDecryptionCascade",decl:{start:{line:25,column:16},end:{line:25,column:39}},loc:{start:{line:25,column:58},end:{line:33,column:1}},line:25},3:{name:"(anonymous_3)",decl:{start:{line:38,column:2},end:{line:38,column:3}},loc:{start:{line:38,column:43},end:{line:67,column:3}},line:38},4:{name:"(anonymous_4)",decl:{start:{line:49,column:37},end:{line:49,column:38}},loc:{start:{line:49,column:49},end:{line:52,column:7}},line:49},5:{name:"(anonymous_5)",decl:{start:{line:58,column:37},end:{line:58,column:38}},loc:{start:{line:58,column:58},end:{line:61,column:7}},line:58},6:{name:"(anonymous_6)",decl:{start:{line:69,column:2},end:{line:69,column:3}},loc:{start:{line:69,column:34},end:{line:109,column:3}},line:69},7:{name:"(anonymous_7)",decl:{start:{line:74,column:38},end:{line:74,column:39}},loc:{start:{line:74,column:59},end:{line:108,column:5}},line:74},8:{name:"(anonymous_8)",decl:{start:{line:111,column:2},end:{line:111,column:3}},loc:{start:{line:111,column:28},end:{line:113,column:3}},line:111},9:{name:"(anonymous_9)",decl:{start:{line:115,column:2},end:{line:115,column:3}},loc:{start:{line:115,column:24},end:{line:124,column:3}},line:115},10:{name:"(anonymous_10)",decl:{start:{line:122,column:45},end:{line:122,column:46}},loc:{start:{line:122,column:55},end:{line:122,column:73}},line:122},11:{name:"(anonymous_11)",decl:{start:{line:126,column:2},end:{line:126,column:3}},loc:{start:{line:126,column:17},end:{line:177,column:3}},line:126},12:{name:"(anonymous_12)",decl:{start:{line:179,column:2},end:{line:179,column:3}},loc:{start:{line:179,column:14},end:{line:179,column:43}},line:179},13:{name:"(anonymous_13)",decl:{start:{line:180,column:2},end:{line:180,column:3}},loc:{start:{line:180,column:14},end:{line:180,column:39}},line:180},14:{name:"(anonymous_14)",decl:{start:{line:183,column:2},end:{line:183,column:3}},loc:{start:{line:183,column:12},end:{line:183,column:40}},line:183},15:{name:"(anonymous_15)",decl:{start:{line:185,column:2},end:{line:185,column:3}},loc:{start:{line:185,column:16},end:{line:185,column:56}},line:185},16:{name:"(anonymous_16)",decl:{start:{line:186,column:2},end:{line:186,column:3}},loc:{start:{line:186,column:15},end:{line:186,column:53}},line:186}},branchMap:{0:{loc:{start:{line:40,column:4},end:{line:40,column:64}},type:"if",locations:[{start:{line:40,column:4},end:{line:40,column:64}},{start:{line:40,column:4},end:{line:40,column:64}}],line:40},1:{loc:{start:{line:41,column:4},end:{line:41,column:65}},type:"if",locations:[{start:{line:41,column:4},end:{line:41,column:65}},{start:{line:41,column:4},end:{line:41,column:65}}],line:41},2:{loc:{start:{line:42,column:4},end:{line:42,column:73}},type:"if",locations:[{start:{line:42,column:4},end:{line:42,column:73}},{start:{line:42,column:4},end:{line:42,column:73}}],line:42},3:{loc:{start:{line:47,column:4},end:{line:54,column:5}},type:"if",locations:[{start:{line:47,column:4},end:{line:54,column:5}},{start:{line:47,column:4},end:{line:54,column:5}}],line:47},4:{loc:{start:{line:48,column:6},end:{line:48,column:78}},type:"if",locations:[{start:{line:48,column:6},end:{line:48,column:78}},{start:{line:48,column:6},end:{line:48,column:78}}],line:48},5:{loc:{start:{line:50,column:8},end:{line:50,column:86}},type:"if",locations:[{start:{line:50,column:8},end:{line:50,column:86}},{start:{line:50,column:8},end:{line:50,column:86}}],line:50},6:{loc:{start:{line:56,column:4},end:{line:63,column:5}},type:"if",locations:[{start:{line:56,column:4},end:{line:63,column:5}},{start:{line:56,column:4},end:{line:63,column:5}}],line:56},7:{loc:{start:{line:57,column:6},end:{line:57,column:92}},type:"if",locations:[{start:{line:57,column:6},end:{line:57,column:92}},{start:{line:57,column:6},end:{line:57,column:92}}],line:57},8:{loc:{start:{line:59,column:8},end:{line:59,column:102}},type:"if",locations:[{start:{line:59,column:8},end:{line:59,column:102}},{start:{line:59,column:8},end:{line:59,column:102}}],line:59},9:{loc:{start:{line:75,column:6},end:{line:75,column:101}},type:"if",locations:[{start:{line:75,column:6},end:{line:75,column:101}},{start:{line:75,column:6},end:{line:75,column:101}}],line:75},10:{loc:{start:{line:84,column:31},end:{line:86,column:46}},type:"cond-expr",locations:[{start:{line:85,column:10},end:{line:85,column:38}},{start:{line:86,column:10},end:{line:86,column:46}}],line:84},11:{loc:{start:{line:91,column:6},end:{line:96,column:7}},type:"if",locations:[{start:{line:91,column:6},end:{line:96,column:7}},{start:{line:91,column:6},end:{line:96,column:7}}],line:91},12:{loc:{start:{line:93,column:8},end:{line:95,column:45}},type:"if",locations:[{start:{line:93,column:8},end:{line:95,column:45}},{start:{line:93,column:8},end:{line:95,column:45}}],line:93},13:{loc:{start:{line:94,column:13},end:{line:95,column:45}},type:"if",locations:[{start:{line:94,column:13},end:{line:95,column:45}},{start:{line:94,column:13},end:{line:95,column:45}}],line:94},14:{loc:{start:{line:100,column:6},end:{line:105,column:7}},type:"if",locations:[{start:{line:100,column:6},end:{line:105,column:7}},{start:{line:100,column:6},end:{line:105,column:7}}],line:100},15:{loc:{start:{line:100,column:10},end:{line:100,column:78}},type:"binary-expr",locations:[{start:{line:100,column:10},end:{line:100,column:49}},{start:{line:100,column:53},end:{line:100,column:78}}],line:100},16:{loc:{start:{line:116,column:4},end:{line:116,column:80}},type:"if",locations:[{start:{line:116,column:4},end:{line:116,column:80}},{start:{line:116,column:4},end:{line:116,column:80}}],line:116},17:{loc:{start:{line:117,column:4},end:{line:117,column:81}},type:"if",locations:[{start:{line:117,column:4},end:{line:117,column:81}},{start:{line:117,column:4},end:{line:117,column:81}}],line:117},18:{loc:{start:{line:127,column:4},end:{line:127,column:80}},type:"if",locations:[{start:{line:127,column:4},end:{line:127,column:80}},{start:{line:127,column:4},end:{line:127,column:80}}],line:127},19:{loc:{start:{line:135,column:6},end:{line:135,column:82}},type:"if",locations:[{start:{line:135,column:6},end:{line:135,column:82}},{start:{line:135,column:6},end:{line:135,column:82}}],line:135},20:{loc:{start:{line:136,column:6},end:{line:136,column:86}},type:"if",locations:[{start:{line:136,column:6},end:{line:136,column:86}},{start:{line:136,column:6},end:{line:136,column:86}}],line:136},21:{loc:{start:{line:141,column:6},end:{line:173,column:7}},type:"if",locations:[{start:{line:141,column:6},end:{line:173,column:7}},{start:{line:141,column:6},end:{line:173,column:7}}],line:141},22:{loc:{start:{line:146,column:8},end:{line:155,column:9}},type:"if",locations:[{start:{line:146,column:8},end:{line:155,column:9}},{start:{line:146,column:8},end:{line:155,column:9}}],line:146},23:{loc:{start:{line:148,column:10},end:{line:154,column:47}},type:"if",locations:[{start:{line:148,column:10},end:{line:154,column:47}},{start:{line:148,column:10},end:{line:154,column:47}}],line:148},24:{loc:{start:{line:151,column:15},end:{line:154,column:47}},type:"if",locations:[{start:{line:151,column:15},end:{line:154,column:47}},{start:{line:151,column:15},end:{line:154,column:47}}],line:151},25:{loc:{start:{line:158,column:8},end:{line:170,column:9}},type:"if",locations:[{start:{line:158,column:8},end:{line:170,column:9}},{start:{line:158,column:8},end:{line:170,column:9}}],line:158},26:{loc:{start:{line:158,column:12},end:{line:158,column:102}},type:"binary-expr",locations:[{start:{line:158,column:12},end:{line:158,column:59}},{start:{line:158,column:63},end:{line:158,column:102}}],line:158},27:{loc:{start:{line:164,column:13},end:{line:170,column:9}},type:"if",locations:[{start:{line:164,column:13},end:{line:170,column:9}},{start:{line:164,column:13},end:{line:170,column:9}}],line:164},28:{loc:{start:{line:164,column:17},end:{line:166,column:52}},type:"binary-expr",locations:[{start:{line:164,column:17},end:{line:164,column:64}},{start:{line:165,column:13},end:{line:165,column:57}},{start:{line:166,column:13},end:{line:166,column:52}}],line:164}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0,80:0,81:0,82:0,83:0,84:0,85:0,86:0,87:0,88:0,89:0,90:0,91:0,92:0,93:0,94:0,95:0,96:0,97:0,98:0,99:0,100:0,101:0,102:0,103:0,104:0,105:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0],23:[0,0],24:[0,0],25:[0,0],26:[0,0],27:[0,0],28:[0,0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});return i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)}();function zn(n){return Yn.apply(this,arguments)}function Yn(){return(Yn=r()(o.a.mark(function n(e){var t,l,i,r,c;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.keys,l=e.procedure,Vn.f[0]++,Vn.s[0]++,i=d()(t),Vn.s[1]++,r=l.map(function(n){return Vn.f[1]++,Vn.s[2]++,d()(n)}),Vn.s[3]++,c=new $n,Vn.s[4]++,c._init({mode:"encrypt",keys:i,procedure:r}),Vn.s[5]++,n.next=10,c._initEncryptionProcedure();case 10:return Vn.s[6]++,n.abrupt("return",c);case 12:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function Wn(n){var e=n.keys,t=n.encrypted;Vn.f[2]++;var l=(Vn.s[7]++,d()(e)),o=(Vn.s[8]++,new $n);return Vn.s[9]++,o._init({mode:"decrypt",keys:l,encrypted:t}),Vn.s[10]++,o._initDecryptionProcedure(),Vn.s[11]++,o}var qn=(Vn.s[12]++,["encrypt","decrypt"]),$n=function(n){function e(){return u()(this,e),h()(this,v()(e).apply(this,arguments))}return w()(e,n),a()(e,[{key:"_init",value:function(n){var e=n.mode,t=n.keys,l=n.procedure,o=n.encrypted;if(Vn.f[3]++,Vn.s[13]++,qn.indexOf(e)<0)throw Vn.b[0][0]++,Vn.s[14]++,new Error("InvalidMode");if(Vn.b[0][1]++,Vn.s[15]++,!(t instanceof pn))throw Vn.b[1][0]++,Vn.s[16]++,new Error("NotKeyObject");if(Vn.b[1][1]++,Vn.s[17]++,t.mode.indexOf(e)<0)throw Vn.b[2][0]++,Vn.s[18]++,new Error("UnmatchedKeyMode");if(Vn.b[2][1]++,Vn.s[19]++,this._cascadeMode=e,Vn.s[20]++,this._orgKeys=t,Vn.s[21]++,"encrypt"===e){if(Vn.b[3][0]++,Vn.s[22]++,!(l instanceof Array))throw Vn.b[4][0]++,Vn.s[23]++,new Error("NotArrayProcedure");Vn.b[4][1]++;var i=(Vn.s[24]++,l.map(function(n){if(Vn.f[4]++,Vn.s[25]++,void 0===n.encrypt)throw Vn.b[5][0]++,Vn.s[26]++,new Error("InvalidProcedure");return Vn.b[5][1]++,Vn.s[27]++,{config:n}}));Vn.s[28]++,this.push.apply(this,p()(i))}else Vn.b[3][1]++;if(Vn.s[29]++,"decrypt"===e){if(Vn.b[6][0]++,Vn.s[30]++,!(o instanceof Hn))throw Vn.b[7][0]++,Vn.s[31]++,new Error("NotCascadedEncryptedData");Vn.b[7][1]++;var r=(Vn.s[32]++,o.map(function(n){if(Vn.f[5]++,Vn.s[33]++,void 0===n.message)throw Vn.b[8][0]++,Vn.s[34]++,new Error("InvalidEncryptedMessage");return Vn.b[8][1]++,Vn.s[35]++,{data:n}}));Vn.s[36]++,this.push.apply(this,p()(r))}else Vn.b[6][1]++;Vn.s[37]++,this[this.length-1].keys=this._orgKeys}},{key:"_initEncryptionProcedure",value:function(){var n=r()(o.a.mark(function n(){var e,t,l=this;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return Vn.f[6]++,Vn.s[38]++,e=this._orgKeys.keys.privateKeys,Vn.s[39]++,t=this.slice(0,this.length-1),Vn.s[40]++,n.next=6,Promise.all(t.map(function(){var n=r()(o.a.mark(function n(t,i){var r,c,u,s,a,m;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(Vn.f[7]++,Vn.s[41]++,void 0!==t.config.encrypt.onetimeKey){n.next=8;break}throw Vn.b[9][0]++,Vn.s[42]++,new Error("NoKeyParamsGiven");case 8:Vn.b[9][1]++;case 9:return Vn.s[43]++,r={encrypt_decrypt:t.config.encrypt.suite},Vn.s[44]++,c=["encrypt"],Vn.s[45]++,u=Object.assign({suite:t.config.encrypt.suite},t.config.encrypt.onetimeKey),Vn.s[46]++,delete t.config.encrypt.onetimeKey,Vn.s[47]++,n.next=17,xn(u);case 17:if(s=n.sent,Vn.s[48]++,a="session"===u.keyParams.type?(Vn.b[10][0]++,{sessionKey:s.key}):(Vn.b[10][1]++,{publicKeys:[s.publicKey]}),Vn.s[49]++,"session"!==u.keyParams.type){n.next=26;break}Vn.b[11][0]++,Vn.s[50]++,m=s.key,n.next=47;break;case 26:if(Vn.b[11][1]++,Vn.s[51]++,"jscu"!==u.suite){n.next=36;break}return Vn.b[12][0]++,Vn.s[52]++,n.next=33,s.privateKey.export("der");case 33:m=n.sent,n.next=47;break;case 36:if(Vn.b[12][1]++,Vn.s[53]++,"openpgp"!==u.suite){n.next=44;break}Vn.b[13][0]++,Vn.s[54]++,m=s.privateKey.toPacketlist().write(),n.next=47;break;case 44:throw Vn.b[13][1]++,Vn.s[55]++,new Error("UnknownSuite");case 47:return Vn.s[56]++,l[i+1].message=m,Vn.s[57]++,Vn.b[15][0]++,void 0!==t.config.sign&&(Vn.b[15][1]++,t.config.sign.required)?(Vn.b[14][0]++,Vn.s[58]++,t.config.sign=Object.assign(t.config.sign,l[l.length-1].config.sign),Vn.s[59]++,a.privateKeys=e,Vn.s[60]++,r.sign_verify=t.config.sign.suite,Vn.s[61]++,c.push("sign")):Vn.b[14][1]++,Vn.s[62]++,n.next=54,yn("object",{keys:a,suite:r,mode:c});case 54:l[i].keys=n.sent;case 55:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}()));case 6:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"_initDecryptionProcedure",value:function(){Vn.f[8]++}},{key:"encrypt",value:function(){var n=r()(o.a.mark(function n(e){var t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(Vn.f[9]++,Vn.s[63]++,"encrypt"===this._cascadeMode){n.next=8;break}throw Vn.b[16][0]++,Vn.s[64]++,new Error("NotEncryptionCascade");case 8:Vn.b[16][1]++;case 9:if(Vn.s[65]++,e instanceof Uint8Array){n.next=16;break}throw Vn.b[17][0]++,Vn.s[66]++,new Error("NotUint8ArrayMessage");case 16:Vn.b[17][1]++;case 17:return Vn.s[67]++,this[0].message=e,Vn.s[68]++,n.next=22,Promise.all(this.map(function(n){return Vn.f[10]++,Vn.s[69]++,Un(n)}));case 22:return t=n.sent,Vn.s[70]++,n.abrupt("return",Gn(t));case 25:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"decrypt",value:function(){var n=r()(o.a.mark(function n(){var e,t,l,i,r,c;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(Vn.f[11]++,Vn.s[71]++,"decrypt"===this._cascadeMode){n.next=8;break}throw Vn.b[18][0]++,Vn.s[72]++,new Error("NotDecryptionCascade");case 8:Vn.b[18][1]++;case 9:Vn.s[73]++,e=this._orgKeys.keys.publicKeys,Vn.s[74]++,t=new Array(this.length),Vn.s[75]++,l=this.length-1;case 13:if(!(l>=0)){n.next=86;break}if(Vn.s[76]++,this[l].keys instanceof pn){n.next=21;break}throw Vn.b[19][0]++,Vn.s[77]++,new Error("InvalidKeysObject");case 21:Vn.b[19][1]++;case 22:if(Vn.s[78]++,void 0!==this[l].data){n.next=29;break}throw Vn.b[20][0]++,Vn.s[79]++,new Error("InvalidDataObject");case 29:Vn.b[20][1]++;case 30:return Vn.s[80]++,n.next=33,In(this[l]);case 33:if(t[l]=n.sent,Vn.s[81]++,!(l>0)){n.next=82;break}if(Vn.b[21][0]++,Vn.s[82]++,i={encrypt_decrypt:this[l-1].data.message.suite},Vn.s[83]++,r=["decrypt"],c=void 0,Vn.s[84]++,"session_key_encrypt"!==this[l-1].data.message.keyType){n.next=47;break}Vn.b[22][0]++,Vn.s[85]++,c={sessionKey:t[l].data},n.next=74;break;case 47:if(Vn.b[22][1]++,Vn.s[86]++,"jscu"!==this[l-1].data.message.suite){n.next=59;break}return Vn.b[23][0]++,Vn.s[87]++,n.next=54,an.importKey("der",t[l].data);case 54:n.t0=n.sent,n.t1=[n.t0],c={privateKeys:n.t1},n.next=74;break;case 59:if(Vn.b[23][1]++,Vn.s[88]++,"openpgp"!==this[l-1].data.message.suite){n.next=71;break}return Vn.b[24][0]++,Vn.s[89]++,n.next=66,dn.importKey("der",t[l].data);case 66:n.t2=n.sent,n.t3=[n.t2],c={privateKeys:n.t3},n.next=74;break;case 71:throw Vn.b[24][1]++,Vn.s[90]++,new Error("UnknownSuite");case 74:return Vn.s[91]++,Vn.b[26][0]++,this[l-1].data.signature instanceof on&&(Vn.b[26][1]++,void 0!==e)?(Vn.b[25][0]++,Vn.s[92]++,c.publicKeys=e,Vn.s[93]++,i.sign_verify=this[l-1].data.signature.suite,Vn.s[94]++,r.push("verify")):(Vn.b[25][1]++,Vn.s[95]++,Vn.b[28][0]++,void 0!==this[l-1].data.message&&(Vn.b[28][1]++,"openpgp"===this[l-1].data.message.suite)&&(Vn.b[28][2]++,void 0!==e)?(Vn.b[27][0]++,Vn.s[96]++,c.publicKeys=e,Vn.s[97]++,i.sign_verify="openpgp",Vn.s[98]++,r.push("verify")):Vn.b[27][1]++),Vn.s[99]++,n.next=79,yn("object",{keys:c,suite:i,mode:r});case 79:this[l-1].keys=n.sent,n.next=83;break;case 82:Vn.b[21][1]++;case 83:l--,n.next=13;break;case 86:return Vn.s[100]++,n.abrupt("return",t);case 88:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"toArray",value:function(){return Vn.f[14]++,Vn.s[103]++,Array.from(this)}},{key:"map",value:function(n){return Vn.f[15]++,Vn.s[104]++,this.toArray().map(n)}},{key:"slice",value:function(n,e){return Vn.f[16]++,Vn.s[105]++,this.toArray().slice(n,e)}},{key:"mode",get:function(){return Vn.f[12]++,Vn.s[101]++,this._cascadeMode}},{key:"keys",get:function(){return Vn.f[13]++,Vn.s[102]++,this._orgKeys}}]),e}(S()(Array));t.d(e,"generateKey",function(){return Kn}),t.d(e,"encrypt",function(){return Un}),t.d(e,"decrypt",function(){return In}),t.d(e,"sign",function(){return Bn}),t.d(e,"verify",function(){return Tn}),t.d(e,"importKeys",function(){return yn}),t.d(e,"importEncryptedBuffer",function(){return z}),t.d(e,"importRawEncryptedBufferList",function(){return Y}),t.d(e,"importSignatureBuffer",function(){return tn}),t.d(e,"importCascadedBuffer",function(){return Jn}),t.d(e,"createEncryptionCascade",function(){return zn}),t.d(e,"createDecryptionCascade",function(){return Wn});(function(){var n="/Users/jun/ProjectJavaScript/cascade/src/index.js",e="6c7d423d552f8d57db9d458ae91ce6a09ca3521b",t=new(0,function(){}.constructor)("return this")(),l="__coverage__",o={path:"/Users/jun/ProjectJavaScript/cascade/src/index.js",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},i=t[l]||(t[l]={});i[n]&&i[n].hash===e?i[n]:(o.hash=e,i[n]=o)})(),e.default={generateKey:Kn,encrypt:Un,decrypt:In,sign:Bn,verify:Tn,importKeys:yn,importEncryptedBuffer:z,importRawEncryptedBufferList:Y,importSignatureBuffer:tn,importCascadedBuffer:Jn,createEncryptionCascade:zn,createDecryptionCascade:Wn}}])});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/assertion-error/index.js":
/*!***********************************************!*\
  !*** ./node_modules/assertion-error/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */

function exclude () {
  var excludes = [].slice.call(arguments);

  function excludeProps (res, obj) {
    Object.keys(obj).forEach(function (key) {
      if (!~excludes.indexOf(key)) res[key] = obj[key];
    });
  }

  return function extendExclude () {
    var args = [].slice.call(arguments)
      , i = 0
      , res = {};

    for (; i < args.length; i++) {
      excludeProps(res, args[i]);
    }

    return res;
  };
};

/*!
 * Primary Exports
 */

module.exports = AssertionError;

/**
 * ### AssertionError
 *
 * An extension of the JavaScript `Error` constructor for
 * assertion and validation scenarios.
 *
 * @param {String} message
 * @param {Object} properties to include (optional)
 * @param {callee} start stack function (optional)
 */

function AssertionError (message, _props, ssf) {
  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
    , props = extend(_props || {});

  // default values
  this.message = message || 'Unspecified AssertionError';
  this.showDiff = false;

  // copy from properties
  for (var key in props) {
    this[key] = props[key];
  }

  // capture stack trace
  ssf = ssf || AssertionError;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ssf);
  } else {
    try {
      throw new Error();
    } catch(e) {
      this.stack = e.stack;
    }
  }
}

/*!
 * Inherit from Error.prototype
 */

AssertionError.prototype = Object.create(Error.prototype);

/*!
 * Statically set name
 */

AssertionError.prototype.name = 'AssertionError';

/*!
 * Ensure correct constructor
 */

AssertionError.prototype.constructor = AssertionError;

/**
 * Allow errors to be converted to JSON for static transfer.
 *
 * @param {Boolean} include stack (default: `true`)
 * @return {Object} object that can be `JSON.stringify`
 */

AssertionError.prototype.toJSON = function (stack) {
  var extend = exclude('constructor', 'toJSON', 'stack')
    , props = extend({ name: this.name }, this);

  // include stack if exists and not turned off
  if (false !== stack && this.stack) {
    props.stack = this.stack;
  }

  return props;
};


/***/ }),

/***/ "./node_modules/chai/index.js":
/*!************************************!*\
  !*** ./node_modules/chai/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/chai */ "./node_modules/chai/lib/chai.js");


/***/ }),

/***/ "./node_modules/chai/lib/chai.js":
/*!***************************************!*\
  !*** ./node_modules/chai/lib/chai.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var used = [];

/*!
 * Chai version
 */

exports.version = '4.2.0';

/*!
 * Assertion Error
 */

exports.AssertionError = __webpack_require__(/*! assertion-error */ "./node_modules/assertion-error/index.js");

/*!
 * Utils for plugins (not exported)
 */

var util = __webpack_require__(/*! ./chai/utils */ "./node_modules/chai/lib/chai/utils/index.js");

/**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai.
 *
 * @param {Function}
 * @returns {this} for chaining
 * @api public
 */

exports.use = function (fn) {
  if (!~used.indexOf(fn)) {
    fn(exports, util);
    used.push(fn);
  }

  return exports;
};

/*!
 * Utility Functions
 */

exports.util = util;

/*!
 * Configuration
 */

var config = __webpack_require__(/*! ./chai/config */ "./node_modules/chai/lib/chai/config.js");
exports.config = config;

/*!
 * Primary `Assertion` prototype
 */

var assertion = __webpack_require__(/*! ./chai/assertion */ "./node_modules/chai/lib/chai/assertion.js");
exports.use(assertion);

/*!
 * Core Assertions
 */

var core = __webpack_require__(/*! ./chai/core/assertions */ "./node_modules/chai/lib/chai/core/assertions.js");
exports.use(core);

/*!
 * Expect interface
 */

var expect = __webpack_require__(/*! ./chai/interface/expect */ "./node_modules/chai/lib/chai/interface/expect.js");
exports.use(expect);

/*!
 * Should interface
 */

var should = __webpack_require__(/*! ./chai/interface/should */ "./node_modules/chai/lib/chai/interface/should.js");
exports.use(should);

/*!
 * Assert interface
 */

var assert = __webpack_require__(/*! ./chai/interface/assert */ "./node_modules/chai/lib/chai/interface/assert.js");
exports.use(assert);


/***/ }),

/***/ "./node_modules/chai/lib/chai/assertion.js":
/*!*************************************************!*\
  !*** ./node_modules/chai/lib/chai/assertion.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var config = __webpack_require__(/*! ./config */ "./node_modules/chai/lib/chai/config.js");

module.exports = function (_chai, util) {
  /*!
   * Module dependencies.
   */

  var AssertionError = _chai.AssertionError
    , flag = util.flag;

  /*!
   * Module export.
   */

  _chai.Assertion = Assertion;

  /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */

  function Assertion (obj, msg, ssfi, lockSsfi) {
    flag(this, 'ssfi', ssfi || Assertion);
    flag(this, 'lockSsfi', lockSsfi);
    flag(this, 'object', obj);
    flag(this, 'message', msg);

    return util.proxify(this);
  }

  Object.defineProperty(Assertion, 'includeStack', {
    get: function() {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      return config.includeStack;
    },
    set: function(value) {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      config.includeStack = value;
    }
  });

  Object.defineProperty(Assertion, 'showDiff', {
    get: function() {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      return config.showDiff;
    },
    set: function(value) {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      config.showDiff = value;
    }
  });

  Assertion.addProperty = function (name, fn) {
    util.addProperty(this.prototype, name, fn);
  };

  Assertion.addMethod = function (name, fn) {
    util.addMethod(this.prototype, name, fn);
  };

  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  Assertion.overwriteProperty = function (name, fn) {
    util.overwriteProperty(this.prototype, name, fn);
  };

  Assertion.overwriteMethod = function (name, fn) {
    util.overwriteMethod(this.prototype, name, fn);
  };

  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  /**
   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
   *
   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
   *
   * @name assert
   * @param {Philosophical} expression to be tested
   * @param {String|Function} message or function that returns message to display if expression fails
   * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
   * @param {Mixed} expected value (remember to check for negation)
   * @param {Mixed} actual (optional) will default to `this.obj`
   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
   * @api private
   */

  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
    var ok = util.test(this, arguments);
    if (false !== showDiff) showDiff = true;
    if (undefined === expected && undefined === _actual) showDiff = false;
    if (true !== config.showDiff) showDiff = false;

    if (!ok) {
      msg = util.getMessage(this, arguments);
      var actual = util.getActual(this, arguments);
      throw new AssertionError(msg, {
          actual: actual
        , expected: expected
        , showDiff: showDiff
      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
    }
  };

  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */

  Object.defineProperty(Assertion.prototype, '_obj',
    { get: function () {
        return flag(this, 'object');
      }
    , set: function (val) {
        flag(this, 'object', val);
      }
  });
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/config.js":
/*!**********************************************!*\
  !*** ./node_modules/chai/lib/chai/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {

  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */

  includeStack: false,

  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */

  showDiff: true,

  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */

  truncateThreshold: 40,

  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {Boolean}
   * @api public
   */

  useProxy: true,

  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @api public
   */

  proxyExcludedKeys: ['then', 'catch', 'inspect', 'toJSON']
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/core/assertions.js":
/*!*******************************************************!*\
  !*** ./node_modules/chai/lib/chai/core/assertions.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, _) {
  var Assertion = chai.Assertion
    , AssertionError = chai.AssertionError
    , flag = _.flag;

  /**
   * ### Language Chains
   *
   * The following are provided as chainable getters to improve the readability
   * of your assertions.
   *
   * **Chains**
   *
   * - to
   * - be
   * - been
   * - is
   * - that
   * - which
   * - and
   * - has
   * - have
   * - with
   * - at
   * - of
   * - same
   * - but
   * - does
   * - still
   *
   * @name language chains
   * @namespace BDD
   * @api public
   */

  [ 'to', 'be', 'been', 'is'
  , 'and', 'has', 'have', 'with'
  , 'that', 'which', 'at', 'of'
  , 'same', 'but', 'does', 'still' ].forEach(function (chain) {
    Assertion.addProperty(chain);
  });

  /**
   * ### .not
   *
   * Negates all assertions that follow in the chain.
   *
   *     expect(function () {}).to.not.throw();
   *     expect({a: 1}).to.not.have.property('b');
   *     expect([1, 2]).to.be.an('array').that.does.not.include(3);
   *
   * Just because you can negate any assertion with `.not` doesn't mean you
   * should. With great power comes great responsibility. It's often best to
   * assert that the one expected output was produced, rather than asserting
   * that one of countless unexpected outputs wasn't produced. See individual
   * assertions for specific guidance.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.equal(1); // Not recommended
   *
   * @name not
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('not', function () {
    flag(this, 'negate', true);
  });

  /**
   * ### .deep
   *
   * Causes all `.equal`, `.include`, `.members`, `.keys`, and `.property`
   * assertions that follow in the chain to use deep equality instead of strict
   * (`===`) equality. See the `deep-eql` project page for info on the deep
   * equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) equals `{a: 1}`
   *     expect({a: 1}).to.deep.equal({a: 1});
   *     expect({a: 1}).to.not.equal({a: 1});
   *
   *     // Target array deeply (but not strictly) includes `{a: 1}`
   *     expect([{a: 1}]).to.deep.include({a: 1});
   *     expect([{a: 1}]).to.not.include({a: 1});
   *
   *     // Target object deeply (but not strictly) includes `x: {a: 1}`
   *     expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
   *     expect({x: {a: 1}}).to.not.include({x: {a: 1}});
   *
   *     // Target array deeply (but not strictly) has member `{a: 1}`
   *     expect([{a: 1}]).to.have.deep.members([{a: 1}]);
   *     expect([{a: 1}]).to.not.have.members([{a: 1}]);
   *
   *     // Target set deeply (but not strictly) has key `{a: 1}`
   *     expect(new Set([{a: 1}])).to.have.deep.keys([{a: 1}]);
   *     expect(new Set([{a: 1}])).to.not.have.keys([{a: 1}]);
   *
   *     // Target object deeply (but not strictly) has property `x: {a: 1}`
   *     expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
   *     expect({x: {a: 1}}).to.not.have.property('x', {a: 1});
   *
   * @name deep
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('deep', function () {
    flag(this, 'deep', true);
  });

  /**
   * ### .nested
   *
   * Enables dot- and bracket-notation in all `.property` and `.include`
   * assertions that follow in the chain.
   *
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
   *     expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
   *     expect({'.a': {'[b]': 'x'}}).to.nested.include({'\\.a.\\[b\\]': 'x'});
   *
   * `.nested` cannot be combined with `.own`.
   *
   * @name nested
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('nested', function () {
    flag(this, 'nested', true);
  });

  /**
   * ### .own
   *
   * Causes all `.property` and `.include` assertions that follow in the chain
   * to ignore inherited properties.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.have.own.property('a');
   *     expect({a: 1}).to.have.property('b');
   *     expect({a: 1}).to.not.have.own.property('b');
   *
   *     expect({a: 1}).to.own.include({a: 1});
   *     expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
   *
   * `.own` cannot be combined with `.nested`.
   *
   * @name own
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('own', function () {
    flag(this, 'own', true);
  });

  /**
   * ### .ordered
   *
   * Causes all `.members` assertions that follow in the chain to require that
   * members be in the same order.
   *
   *     expect([1, 2]).to.have.ordered.members([1, 2])
   *       .but.not.have.ordered.members([2, 1]);
   *
   * When `.include` and `.ordered` are combined, the ordering begins at the
   * start of both arrays.
   *
   *     expect([1, 2, 3]).to.include.ordered.members([1, 2])
   *       .but.not.include.ordered.members([2, 3]);
   *
   * @name ordered
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('ordered', function () {
    flag(this, 'ordered', true);
  });

  /**
   * ### .any
   *
   * Causes all `.keys` assertions that follow in the chain to only require that
   * the target have at least one of the given keys. This is the opposite of
   * `.all`, which requires that the target have all of the given keys.
   *
   *     expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
   *
   * See the `.keys` doc for guidance on when to use `.any` or `.all`.
   *
   * @name any
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('any', function () {
    flag(this, 'any', true);
    flag(this, 'all', false);
  });

  /**
   * ### .all
   *
   * Causes all `.keys` assertions that follow in the chain to require that the
   * target have all of the given keys. This is the opposite of `.any`, which
   * only requires that the target have at least one of the given keys.
   *
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *
   * Note that `.all` is used by default when neither `.all` nor `.any` are
   * added earlier in the chain. However, it's often best to add `.all` anyway
   * because it improves readability.
   *
   * See the `.keys` doc for guidance on when to use `.any` or `.all`.
   *
   * @name all
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('all', function () {
    flag(this, 'all', true);
    flag(this, 'any', false);
  });

  /**
   * ### .a(type[, msg])
   *
   * Asserts that the target's type is equal to the given string `type`. Types
   * are case insensitive. See the `type-detect` project page for info on the
   * type detection algorithm: https://github.com/chaijs/type-detect.
   *
   *     expect('foo').to.be.a('string');
   *     expect({a: 1}).to.be.an('object');
   *     expect(null).to.be.a('null');
   *     expect(undefined).to.be.an('undefined');
   *     expect(new Error).to.be.an('error');
   *     expect(Promise.resolve()).to.be.a('promise');
   *     expect(new Float32Array).to.be.a('float32array');
   *     expect(Symbol()).to.be.a('symbol');
   *
   * `.a` supports objects that have a custom type set via `Symbol.toStringTag`.
   *
   *     var myObj = {
   *       [Symbol.toStringTag]: 'myCustomType'
   *     };
   *
   *     expect(myObj).to.be.a('myCustomType').but.not.an('object');
   *
   * It's often best to use `.a` to check a target's type before making more
   * assertions on the same target. That way, you avoid unexpected behavior from
   * any assertion that does different things based on the target's type.
   *
   *     expect([1, 2, 3]).to.be.an('array').that.includes(2);
   *     expect([]).to.be.an('array').that.is.empty;
   *
   * Add `.not` earlier in the chain to negate `.a`. However, it's often best to
   * assert that the target is the expected type, rather than asserting that it
   * isn't one of many unexpected types.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.an('array'); // Not recommended
   *
   * `.a` accepts an optional `msg` argument which is a custom error message to
   * show when the assertion fails. The message can also be given as the second
   * argument to `expect`.
   *
   *     expect(1).to.be.a('string', 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.a('string');
   *
   * `.a` can also be used as a language chain to improve the readability of
   * your assertions.
   *
   *     expect({b: 2}).to.have.a.property('b');
   *
   * The alias `.an` can be used interchangeably with `.a`.
   *
   * @name a
   * @alias an
   * @param {String} type
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function an (type, msg) {
    if (msg) flag(this, 'message', msg);
    type = type.toLowerCase();
    var obj = flag(this, 'object')
      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';

    this.assert(
        type === _.type(obj).toLowerCase()
      , 'expected #{this} to be ' + article + type
      , 'expected #{this} not to be ' + article + type
    );
  }

  Assertion.addChainableMethod('an', an);
  Assertion.addChainableMethod('a', an);

  /**
   * ### .include(val[, msg])
   *
   * When the target is a string, `.include` asserts that the given string `val`
   * is a substring of the target.
   *
   *     expect('foobar').to.include('foo');
   *
   * When the target is an array, `.include` asserts that the given `val` is a
   * member of the target.
   *
   *     expect([1, 2, 3]).to.include(2);
   *
   * When the target is an object, `.include` asserts that the given object
   * `val`'s properties are a subset of the target's properties.
   *
   *     expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2});
   *
   * When the target is a Set or WeakSet, `.include` asserts that the given `val` is a
   * member of the target. SameValueZero equality algorithm is used.
   *
   *     expect(new Set([1, 2])).to.include(2);
   *
   * When the target is a Map, `.include` asserts that the given `val` is one of
   * the values of the target. SameValueZero equality algorithm is used.
   *
   *     expect(new Map([['a', 1], ['b', 2]])).to.include(2);
   *
   * Because `.include` does different things based on the target's type, it's
   * important to check the target's type before using `.include`. See the `.a`
   * doc for info on testing a target's type.
   *
   *     expect([1, 2, 3]).to.be.an('array').that.includes(2);
   *
   * By default, strict (`===`) equality is used to compare array members and
   * object properties. Add `.deep` earlier in the chain to use deep equality
   * instead (WeakSet targets are not supported). See the `deep-eql` project
   * page for info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target array deeply (but not strictly) includes `{a: 1}`
   *     expect([{a: 1}]).to.deep.include({a: 1});
   *     expect([{a: 1}]).to.not.include({a: 1});
   *
   *     // Target object deeply (but not strictly) includes `x: {a: 1}`
   *     expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
   *     expect({x: {a: 1}}).to.not.include({x: {a: 1}});
   *
   * By default, all of the target's properties are searched when working with
   * objects. This includes properties that are inherited and/or non-enumerable.
   * Add `.own` earlier in the chain to exclude the target's inherited
   * properties from the search.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.own.include({a: 1});
   *     expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
   *
   * Note that a target object is always only searched for `val`'s own
   * enumerable properties.
   *
   * `.deep` and `.own` can be combined.
   *
   *     expect({a: {b: 2}}).to.deep.own.include({a: {b: 2}});
   *
   * Add `.nested` earlier in the chain to enable dot- and bracket-notation when
   * referencing nested properties.
   *
   *     expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 2}}).to.nested.include({'\\.a.\\[b\\]': 2});
   *
   * `.deep` and `.nested` can be combined.
   *
   *     expect({a: {b: [{c: 3}]}}).to.deep.nested.include({'a.b[0]': {c: 3}});
   *
   * `.own` and `.nested` cannot be combined.
   *
   * Add `.not` earlier in the chain to negate `.include`.
   *
   *     expect('foobar').to.not.include('taco');
   *     expect([1, 2, 3]).to.not.include(4);
   *
   * However, it's dangerous to negate `.include` when the target is an object.
   * The problem is that it creates uncertain expectations by asserting that the
   * target object doesn't have all of `val`'s key/value pairs but may or may
   * not have some of them. It's often best to identify the exact output that's
   * expected, and then write an assertion that only accepts that exact output.
   *
   * When the target object isn't even expected to have `val`'s keys, it's
   * often best to assert exactly that.
   *
   *     expect({c: 3}).to.not.have.any.keys('a', 'b'); // Recommended
   *     expect({c: 3}).to.not.include({a: 1, b: 2}); // Not recommended
   *
   * When the target object is expected to have `val`'s keys, it's often best to
   * assert that each of the properties has its expected value, rather than
   * asserting that each property doesn't have one of many unexpected values.
   *
   *     expect({a: 3, b: 4}).to.include({a: 3, b: 4}); // Recommended
   *     expect({a: 3, b: 4}).to.not.include({a: 1, b: 2}); // Not recommended
   *
   * `.include` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2, 3]).to.include(4, 'nooo why fail??');
   *     expect([1, 2, 3], 'nooo why fail??').to.include(4);
   *
   * `.include` can also be used as a language chain, causing all `.members` and
   * `.keys` assertions that follow in the chain to require the target to be a
   * superset of the expected set, rather than an identical set. Note that
   * `.members` ignores duplicates in the subset when `.include` is added.
   *
   *     // Target object's keys are a superset of ['a', 'b'] but not identical
   *     expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
   *     expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');
   *
   *     // Target array is a superset of [1, 2] but not identical
   *     expect([1, 2, 3]).to.include.members([1, 2]);
   *     expect([1, 2, 3]).to.not.have.members([1, 2]);
   *
   *     // Duplicates in the subset are ignored
   *     expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);
   *
   * Note that adding `.any` earlier in the chain causes the `.keys` assertion
   * to ignore `.include`.
   *
   *     // Both assertions are identical
   *     expect({a: 1}).to.include.any.keys('a', 'b');
   *     expect({a: 1}).to.have.any.keys('a', 'b');
   *
   * The aliases `.includes`, `.contain`, and `.contains` can be used
   * interchangeably with `.include`.
   *
   * @name include
   * @alias contain
   * @alias includes
   * @alias contains
   * @param {Mixed} val
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function SameValueZero(a, b) {
    return (_.isNaN(a) && _.isNaN(b)) || a === b;
  }

  function includeChainingBehavior () {
    flag(this, 'contains', true);
  }

  function include (val, msg) {
    if (msg) flag(this, 'message', msg);

    var obj = flag(this, 'object')
      , objType = _.type(obj).toLowerCase()
      , flagMsg = flag(this, 'message')
      , negate = flag(this, 'negate')
      , ssfi = flag(this, 'ssfi')
      , isDeep = flag(this, 'deep')
      , descriptor = isDeep ? 'deep ' : '';

    flagMsg = flagMsg ? flagMsg + ': ' : '';

    var included = false;

    switch (objType) {
      case 'string':
        included = obj.indexOf(val) !== -1;
        break;

      case 'weakset':
        if (isDeep) {
          throw new AssertionError(
            flagMsg + 'unable to use .deep.include with WeakSet',
            undefined,
            ssfi
          );
        }

        included = obj.has(val);
        break;

      case 'map':
        var isEql = isDeep ? _.eql : SameValueZero;
        obj.forEach(function (item) {
          included = included || isEql(item, val);
        });
        break;

      case 'set':
        if (isDeep) {
          obj.forEach(function (item) {
            included = included || _.eql(item, val);
          });
        } else {
          included = obj.has(val);
        }
        break;

      case 'array':
        if (isDeep) {
          included = obj.some(function (item) {
            return _.eql(item, val);
          })
        } else {
          included = obj.indexOf(val) !== -1;
        }
        break;

      default:
        // This block is for asserting a subset of properties in an object.
        // `_.expectTypes` isn't used here because `.include` should work with
        // objects with a custom `@@toStringTag`.
        if (val !== Object(val)) {
          throw new AssertionError(
            flagMsg + 'object tested must be an array, a map, an object,'
              + ' a set, a string, or a weakset, but ' + objType + ' given',
            undefined,
            ssfi
          );
        }

        var props = Object.keys(val)
          , firstErr = null
          , numErrs = 0;

        props.forEach(function (prop) {
          var propAssertion = new Assertion(obj);
          _.transferFlags(this, propAssertion, true);
          flag(propAssertion, 'lockSsfi', true);

          if (!negate || props.length === 1) {
            propAssertion.property(prop, val[prop]);
            return;
          }

          try {
            propAssertion.property(prop, val[prop]);
          } catch (err) {
            if (!_.checkError.compatibleConstructor(err, AssertionError)) {
              throw err;
            }
            if (firstErr === null) firstErr = err;
            numErrs++;
          }
        }, this);

        // When validating .not.include with multiple properties, we only want
        // to throw an assertion error if all of the properties are included,
        // in which case we throw the first property assertion error that we
        // encountered.
        if (negate && props.length > 1 && numErrs === props.length) {
          throw firstErr;
        }
        return;
    }

    // Assert inclusion in collection or substring in a string.
    this.assert(
      included
      , 'expected #{this} to ' + descriptor + 'include ' + _.inspect(val)
      , 'expected #{this} to not ' + descriptor + 'include ' + _.inspect(val));
  }

  Assertion.addChainableMethod('include', include, includeChainingBehavior);
  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
  Assertion.addChainableMethod('includes', include, includeChainingBehavior);

  /**
   * ### .ok
   *
   * Asserts that the target is a truthy value (considered `true` in boolean context).
   * However, it's often best to assert that the target is strictly (`===`) or
   * deeply equal to its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.ok; // Not recommended
   *
   *     expect(true).to.be.true; // Recommended
   *     expect(true).to.be.ok; // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.ok`.
   *
   *     expect(0).to.equal(0); // Recommended
   *     expect(0).to.not.be.ok; // Not recommended
   *
   *     expect(false).to.be.false; // Recommended
   *     expect(false).to.not.be.ok; // Not recommended
   *
   *     expect(null).to.be.null; // Recommended
   *     expect(null).to.not.be.ok; // Not recommended
   *
   *     expect(undefined).to.be.undefined; // Recommended
   *     expect(undefined).to.not.be.ok; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(false, 'nooo why fail??').to.be.ok;
   *
   * @name ok
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('ok', function () {
    this.assert(
        flag(this, 'object')
      , 'expected #{this} to be truthy'
      , 'expected #{this} to be falsy');
  });

  /**
   * ### .true
   *
   * Asserts that the target is strictly (`===`) equal to `true`.
   *
   *     expect(true).to.be.true;
   *
   * Add `.not` earlier in the chain to negate `.true`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `true`.
   *
   *     expect(false).to.be.false; // Recommended
   *     expect(false).to.not.be.true; // Not recommended
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.true; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(false, 'nooo why fail??').to.be.true;
   *
   * @name true
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('true', function () {
    this.assert(
        true === flag(this, 'object')
      , 'expected #{this} to be true'
      , 'expected #{this} to be false'
      , flag(this, 'negate') ? false : true
    );
  });

  /**
   * ### .false
   *
   * Asserts that the target is strictly (`===`) equal to `false`.
   *
   *     expect(false).to.be.false;
   *
   * Add `.not` earlier in the chain to negate `.false`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to `false`.
   *
   *     expect(true).to.be.true; // Recommended
   *     expect(true).to.not.be.false; // Not recommended
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.false; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(true, 'nooo why fail??').to.be.false;
   *
   * @name false
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('false', function () {
    this.assert(
        false === flag(this, 'object')
      , 'expected #{this} to be false'
      , 'expected #{this} to be true'
      , flag(this, 'negate') ? true : false
    );
  });

  /**
   * ### .null
   *
   * Asserts that the target is strictly (`===`) equal to `null`.
   *
   *     expect(null).to.be.null;
   *
   * Add `.not` earlier in the chain to negate `.null`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `null`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.null; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.null;
   *
   * @name null
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('null', function () {
    this.assert(
        null === flag(this, 'object')
      , 'expected #{this} to be null'
      , 'expected #{this} not to be null'
    );
  });

  /**
   * ### .undefined
   *
   * Asserts that the target is strictly (`===`) equal to `undefined`.
   *
   *     expect(undefined).to.be.undefined;
   *
   * Add `.not` earlier in the chain to negate `.undefined`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to `undefined`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.undefined; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.undefined;
   *
   * @name undefined
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('undefined', function () {
    this.assert(
        undefined === flag(this, 'object')
      , 'expected #{this} to be undefined'
      , 'expected #{this} not to be undefined'
    );
  });

  /**
   * ### .NaN
   *
   * Asserts that the target is exactly `NaN`.
   *
   *     expect(NaN).to.be.NaN;
   *
   * Add `.not` earlier in the chain to negate `.NaN`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `NaN`.
   *
   *     expect('foo').to.equal('foo'); // Recommended
   *     expect('foo').to.not.be.NaN; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.NaN;
   *
   * @name NaN
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('NaN', function () {
    this.assert(
        _.isNaN(flag(this, 'object'))
        , 'expected #{this} to be NaN'
        , 'expected #{this} not to be NaN'
    );
  });

  /**
   * ### .exist
   *
   * Asserts that the target is not strictly (`===`) equal to either `null` or
   * `undefined`. However, it's often best to assert that the target is equal to
   * its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.exist; // Not recommended
   *
   *     expect(0).to.equal(0); // Recommended
   *     expect(0).to.exist; // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.exist`.
   *
   *     expect(null).to.be.null; // Recommended
   *     expect(null).to.not.exist; // Not recommended
   *
   *     expect(undefined).to.be.undefined; // Recommended
   *     expect(undefined).to.not.exist; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(null, 'nooo why fail??').to.exist;
   *
   * @name exist
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('exist', function () {
    var val = flag(this, 'object');
    this.assert(
        val !== null && val !== undefined
      , 'expected #{this} to exist'
      , 'expected #{this} to not exist'
    );
  });

  /**
   * ### .empty
   *
   * When the target is a string or array, `.empty` asserts that the target's
   * `length` property is strictly (`===`) equal to `0`.
   *
   *     expect([]).to.be.empty;
   *     expect('').to.be.empty;
   *
   * When the target is a map or set, `.empty` asserts that the target's `size`
   * property is strictly equal to `0`.
   *
   *     expect(new Set()).to.be.empty;
   *     expect(new Map()).to.be.empty;
   *
   * When the target is a non-function object, `.empty` asserts that the target
   * doesn't have any own enumerable properties. Properties with Symbol-based
   * keys are excluded from the count.
   *
   *     expect({}).to.be.empty;
   *
   * Because `.empty` does different things based on the target's type, it's
   * important to check the target's type before using `.empty`. See the `.a`
   * doc for info on testing a target's type.
   *
   *     expect([]).to.be.an('array').that.is.empty;
   *
   * Add `.not` earlier in the chain to negate `.empty`. However, it's often
   * best to assert that the target contains its expected number of values,
   * rather than asserting that it's not empty.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.not.be.empty; // Not recommended
   *
   *     expect(new Set([1, 2, 3])).to.have.property('size', 3); // Recommended
   *     expect(new Set([1, 2, 3])).to.not.be.empty; // Not recommended
   *
   *     expect(Object.keys({a: 1})).to.have.lengthOf(1); // Recommended
   *     expect({a: 1}).to.not.be.empty; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect([1, 2, 3], 'nooo why fail??').to.be.empty;
   *
   * @name empty
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('empty', function () {
    var val = flag(this, 'object')
      , ssfi = flag(this, 'ssfi')
      , flagMsg = flag(this, 'message')
      , itemsCount;

    flagMsg = flagMsg ? flagMsg + ': ' : '';

    switch (_.type(val).toLowerCase()) {
      case 'array':
      case 'string':
        itemsCount = val.length;
        break;
      case 'map':
      case 'set':
        itemsCount = val.size;
        break;
      case 'weakmap':
      case 'weakset':
        throw new AssertionError(
          flagMsg + '.empty was passed a weak collection',
          undefined,
          ssfi
        );
      case 'function':
        var msg = flagMsg + '.empty was passed a function ' + _.getName(val);
        throw new AssertionError(msg.trim(), undefined, ssfi);
      default:
        if (val !== Object(val)) {
          throw new AssertionError(
            flagMsg + '.empty was passed non-string primitive ' + _.inspect(val),
            undefined,
            ssfi
          );
        }
        itemsCount = Object.keys(val).length;
    }

    this.assert(
        0 === itemsCount
      , 'expected #{this} to be empty'
      , 'expected #{this} not to be empty'
    );
  });

  /**
   * ### .arguments
   *
   * Asserts that the target is an `arguments` object.
   *
   *     function test () {
   *       expect(arguments).to.be.arguments;
   *     }
   *
   *     test();
   *
   * Add `.not` earlier in the chain to negate `.arguments`. However, it's often
   * best to assert which type the target is expected to be, rather than
   * asserting that its not an `arguments` object.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.arguments; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({}, 'nooo why fail??').to.be.arguments;
   *
   * The alias `.Arguments` can be used interchangeably with `.arguments`.
   *
   * @name arguments
   * @alias Arguments
   * @namespace BDD
   * @api public
   */

  function checkArguments () {
    var obj = flag(this, 'object')
      , type = _.type(obj);
    this.assert(
        'Arguments' === type
      , 'expected #{this} to be arguments but got ' + type
      , 'expected #{this} to not be arguments'
    );
  }

  Assertion.addProperty('arguments', checkArguments);
  Assertion.addProperty('Arguments', checkArguments);

  /**
   * ### .equal(val[, msg])
   *
   * Asserts that the target is strictly (`===`) equal to the given `val`.
   *
   *     expect(1).to.equal(1);
   *     expect('foo').to.equal('foo');
   *
   * Add `.deep` earlier in the chain to use deep equality instead. See the
   * `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) equals `{a: 1}`
   *     expect({a: 1}).to.deep.equal({a: 1});
   *     expect({a: 1}).to.not.equal({a: 1});
   *
   *     // Target array deeply (but not strictly) equals `[1, 2]`
   *     expect([1, 2]).to.deep.equal([1, 2]);
   *     expect([1, 2]).to.not.equal([1, 2]);
   *
   * Add `.not` earlier in the chain to negate `.equal`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to one of countless unexpected values.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.equal(2); // Not recommended
   *
   * `.equal` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.equal(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.equal(2);
   *
   * The aliases `.equals` and `eq` can be used interchangeably with `.equal`.
   *
   * @name equal
   * @alias equals
   * @alias eq
   * @param {Mixed} val
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertEqual (val, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'deep')) {
      var prevLockSsfi = flag(this, 'lockSsfi');
      flag(this, 'lockSsfi', true);
      this.eql(val);
      flag(this, 'lockSsfi', prevLockSsfi);
    } else {
      this.assert(
          val === obj
        , 'expected #{this} to equal #{exp}'
        , 'expected #{this} to not equal #{exp}'
        , val
        , this._obj
        , true
      );
    }
  }

  Assertion.addMethod('equal', assertEqual);
  Assertion.addMethod('equals', assertEqual);
  Assertion.addMethod('eq', assertEqual);

  /**
   * ### .eql(obj[, msg])
   *
   * Asserts that the target is deeply equal to the given `obj`. See the
   * `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target object is deeply (but not strictly) equal to {a: 1}
   *     expect({a: 1}).to.eql({a: 1}).but.not.equal({a: 1});
   *
   *     // Target array is deeply (but not strictly) equal to [1, 2]
   *     expect([1, 2]).to.eql([1, 2]).but.not.equal([1, 2]);
   *
   * Add `.not` earlier in the chain to negate `.eql`. However, it's often best
   * to assert that the target is deeply equal to its expected value, rather
   * than not deeply equal to one of countless unexpected values.
   *
   *     expect({a: 1}).to.eql({a: 1}); // Recommended
   *     expect({a: 1}).to.not.eql({b: 2}); // Not recommended
   *
   * `.eql` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect({a: 1}).to.eql({b: 2}, 'nooo why fail??');
   *     expect({a: 1}, 'nooo why fail??').to.eql({b: 2});
   *
   * The alias `.eqls` can be used interchangeably with `.eql`.
   *
   * The `.deep.equal` assertion is almost identical to `.eql` but with one
   * difference: `.deep.equal` causes deep equality comparisons to also be used
   * for any other assertions that follow in the chain.
   *
   * @name eql
   * @alias eqls
   * @param {Mixed} obj
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertEql(obj, msg) {
    if (msg) flag(this, 'message', msg);
    this.assert(
        _.eql(obj, flag(this, 'object'))
      , 'expected #{this} to deeply equal #{exp}'
      , 'expected #{this} to not deeply equal #{exp}'
      , obj
      , this._obj
      , true
    );
  }

  Assertion.addMethod('eql', assertEql);
  Assertion.addMethod('eqls', assertEql);

  /**
   * ### .above(n[, msg])
   *
   * Asserts that the target is a number or a date greater than the given number or date `n` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.above(1); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the target's `length`
   * or `size` is greater than the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.above(2); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.above(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.above`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(1).to.not.be.above(2); // Not recommended
   *
   * `.above` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.above(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.above(2);
   *
   * The aliases `.gt` and `.greaterThan` can be used interchangeably with
   * `.above`.
   *
   * @name above
   * @alias gt
   * @alias greaterThan
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertAbove (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , errorMessage
      , shouldThrow = true;

    if (doLength && objType !== 'map' && objType !== 'set') {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to above must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to above must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var descriptor = 'length'
        , itemsCount;
      if (objType === 'map' || objType === 'set') {
        descriptor = 'size';
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
          itemsCount > n
        , 'expected #{this} to have a ' + descriptor + ' above #{exp} but got #{act}'
        , 'expected #{this} to not have a ' + descriptor + ' above #{exp}'
        , n
        , itemsCount
      );
    } else {
      this.assert(
          obj > n
        , 'expected #{this} to be above #{exp}'
        , 'expected #{this} to be at most #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('above', assertAbove);
  Assertion.addMethod('gt', assertAbove);
  Assertion.addMethod('greaterThan', assertAbove);

  /**
   * ### .least(n[, msg])
   *
   * Asserts that the target is a number or a date greater than or equal to the given
   * number or date `n` respectively. However, it's often best to assert that the target is equal to
   * its expected value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.at.least(1); // Not recommended
   *     expect(2).to.be.at.least(2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the target's `length`
   * or `size` is greater than or equal to the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.at.least(2); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.at.least(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.least`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.at.least(2); // Not recommended
   *
   * `.least` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.at.least(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.at.least(2);
   *
   * The alias `.gte` can be used interchangeably with `.least`.
   *
   * @name least
   * @alias gte
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertLeast (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , errorMessage
      , shouldThrow = true;

    if (doLength && objType !== 'map' && objType !== 'set') {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to least must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to least must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var descriptor = 'length'
        , itemsCount;
      if (objType === 'map' || objType === 'set') {
        descriptor = 'size';
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
          itemsCount >= n
        , 'expected #{this} to have a ' + descriptor + ' at least #{exp} but got #{act}'
        , 'expected #{this} to have a ' + descriptor + ' below #{exp}'
        , n
        , itemsCount
      );
    } else {
      this.assert(
          obj >= n
        , 'expected #{this} to be at least #{exp}'
        , 'expected #{this} to be below #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('least', assertLeast);
  Assertion.addMethod('gte', assertLeast);

  /**
   * ### .below(n[, msg])
   *
   * Asserts that the target is a number or a date less than the given number or date `n` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.below(2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the target's `length`
   * or `size` is less than the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.below(4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.length(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.below(4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.below`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.be.below(1); // Not recommended
   *
   * `.below` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(2).to.be.below(1, 'nooo why fail??');
   *     expect(2, 'nooo why fail??').to.be.below(1);
   *
   * The aliases `.lt` and `.lessThan` can be used interchangeably with
   * `.below`.
   *
   * @name below
   * @alias lt
   * @alias lessThan
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertBelow (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , errorMessage
      , shouldThrow = true;

    if (doLength && objType !== 'map' && objType !== 'set') {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to below must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to below must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var descriptor = 'length'
        , itemsCount;
      if (objType === 'map' || objType === 'set') {
        descriptor = 'size';
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
          itemsCount < n
        , 'expected #{this} to have a ' + descriptor + ' below #{exp} but got #{act}'
        , 'expected #{this} to not have a ' + descriptor + ' below #{exp}'
        , n
        , itemsCount
      );
    } else {
      this.assert(
          obj < n
        , 'expected #{this} to be below #{exp}'
        , 'expected #{this} to be at least #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('below', assertBelow);
  Assertion.addMethod('lt', assertBelow);
  Assertion.addMethod('lessThan', assertBelow);

  /**
   * ### .most(n[, msg])
   *
   * Asserts that the target is a number or a date less than or equal to the given number
   * or date `n` respectively. However, it's often best to assert that the target is equal to its
   * expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.at.most(2); // Not recommended
   *     expect(1).to.be.at.most(1); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the target's `length`
   * or `size` is less than or equal to the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.at.most(4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.at.most(4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.most`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.be.at.most(1); // Not recommended
   *
   * `.most` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(2).to.be.at.most(1, 'nooo why fail??');
   *     expect(2, 'nooo why fail??').to.be.at.most(1);
   *
   * The alias `.lte` can be used interchangeably with `.most`.
   *
   * @name most
   * @alias lte
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertMost (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , errorMessage
      , shouldThrow = true;

    if (doLength && objType !== 'map' && objType !== 'set') {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to most must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to most must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var descriptor = 'length'
        , itemsCount;
      if (objType === 'map' || objType === 'set') {
        descriptor = 'size';
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
          itemsCount <= n
        , 'expected #{this} to have a ' + descriptor + ' at most #{exp} but got #{act}'
        , 'expected #{this} to have a ' + descriptor + ' above #{exp}'
        , n
        , itemsCount
      );
    } else {
      this.assert(
          obj <= n
        , 'expected #{this} to be at most #{exp}'
        , 'expected #{this} to be above #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('most', assertMost);
  Assertion.addMethod('lte', assertMost);

  /**
   * ### .within(start, finish[, msg])
   *
   * Asserts that the target is a number or a date greater than or equal to the given
   * number or date `start`, and less than or equal to the given number or date `finish` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.within(1, 3); // Not recommended
   *     expect(2).to.be.within(2, 3); // Not recommended
   *     expect(2).to.be.within(1, 2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the target's `length`
   * or `size` is greater than or equal to the given number `start`, and less
   * than or equal to the given number `finish`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.within(2, 4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.within(2, 4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.within`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.within(2, 4); // Not recommended
   *
   * `.within` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(4).to.be.within(1, 3, 'nooo why fail??');
   *     expect(4, 'nooo why fail??').to.be.within(1, 3);
   *
   * @name within
   * @param {Number} start lower bound inclusive
   * @param {Number} finish upper bound inclusive
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('within', function (start, finish, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , startType = _.type(start).toLowerCase()
      , finishType = _.type(finish).toLowerCase()
      , errorMessage
      , shouldThrow = true
      , range = (startType === 'date' && finishType === 'date')
          ? start.toUTCString() + '..' + finish.toUTCString()
          : start + '..' + finish;

    if (doLength && objType !== 'map' && objType !== 'set') {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && (startType !== 'date' || finishType !== 'date'))) {
      errorMessage = msgPrefix + 'the arguments to within must be dates';
    } else if ((startType !== 'number' || finishType !== 'number') && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the arguments to within must be numbers';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var descriptor = 'length'
        , itemsCount;
      if (objType === 'map' || objType === 'set') {
        descriptor = 'size';
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
          itemsCount >= start && itemsCount <= finish
        , 'expected #{this} to have a ' + descriptor + ' within ' + range
        , 'expected #{this} to not have a ' + descriptor + ' within ' + range
      );
    } else {
      this.assert(
          obj >= start && obj <= finish
        , 'expected #{this} to be within ' + range
        , 'expected #{this} to not be within ' + range
      );
    }
  });

  /**
   * ### .instanceof(constructor[, msg])
   *
   * Asserts that the target is an instance of the given `constructor`.
   *
   *     function Cat () { }
   *
   *     expect(new Cat()).to.be.an.instanceof(Cat);
   *     expect([1, 2]).to.be.an.instanceof(Array);
   *
   * Add `.not` earlier in the chain to negate `.instanceof`.
   *
   *     expect({a: 1}).to.not.be.an.instanceof(Array);
   *
   * `.instanceof` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1).to.be.an.instanceof(Array, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.an.instanceof(Array);
   *
   * Due to limitations in ES5, `.instanceof` may not always work as expected
   * when using a transpiler such as Babel or TypeScript. In particular, it may
   * produce unexpected results when subclassing built-in object such as
   * `Array`, `Error`, and `Map`. See your transpiler's docs for details:
   *
   * - ([Babel](https://babeljs.io/docs/usage/caveats/#classes))
   * - ([TypeScript](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work))
   *
   * The alias `.instanceOf` can be used interchangeably with `.instanceof`.
   *
   * @name instanceof
   * @param {Constructor} constructor
   * @param {String} msg _optional_
   * @alias instanceOf
   * @namespace BDD
   * @api public
   */

  function assertInstanceOf (constructor, msg) {
    if (msg) flag(this, 'message', msg);

    var target = flag(this, 'object')
    var ssfi = flag(this, 'ssfi');
    var flagMsg = flag(this, 'message');

    try {
      var isInstanceOf = target instanceof constructor;
    } catch (err) {
      if (err instanceof TypeError) {
        flagMsg = flagMsg ? flagMsg + ': ' : '';
        throw new AssertionError(
          flagMsg + 'The instanceof assertion needs a constructor but '
            + _.type(constructor) + ' was given.',
          undefined,
          ssfi
        );
      }
      throw err;
    }

    var name = _.getName(constructor);
    if (name === null) {
      name = 'an unnamed constructor';
    }

    this.assert(
        isInstanceOf
      , 'expected #{this} to be an instance of ' + name
      , 'expected #{this} to not be an instance of ' + name
    );
  };

  Assertion.addMethod('instanceof', assertInstanceOf);
  Assertion.addMethod('instanceOf', assertInstanceOf);

  /**
   * ### .property(name[, val[, msg]])
   *
   * Asserts that the target has a property with the given key `name`.
   *
   *     expect({a: 1}).to.have.property('a');
   *
   * When `val` is provided, `.property` also asserts that the property's value
   * is equal to the given `val`.
   *
   *     expect({a: 1}).to.have.property('a', 1);
   *
   * By default, strict (`===`) equality is used. Add `.deep` earlier in the
   * chain to use deep equality instead. See the `deep-eql` project page for
   * info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) has property `x: {a: 1}`
   *     expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
   *     expect({x: {a: 1}}).to.not.have.property('x', {a: 1});
   *
   * The target's enumerable and non-enumerable properties are always included
   * in the search. By default, both own and inherited properties are included.
   * Add `.own` earlier in the chain to exclude inherited properties from the
   * search.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.have.own.property('a');
   *     expect({a: 1}).to.have.own.property('a', 1);
   *     expect({a: 1}).to.have.property('b');
   *     expect({a: 1}).to.not.have.own.property('b');
   *
   * `.deep` and `.own` can be combined.
   *
   *     expect({x: {a: 1}}).to.have.deep.own.property('x', {a: 1});
   *
   * Add `.nested` earlier in the chain to enable dot- and bracket-notation when
   * referencing nested properties.
   *
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]', 'y');
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
   *
   * `.deep` and `.nested` can be combined.
   *
   *     expect({a: {b: [{c: 3}]}})
   *       .to.have.deep.nested.property('a.b[0]', {c: 3});
   *
   * `.own` and `.nested` cannot be combined.
   *
   * Add `.not` earlier in the chain to negate `.property`.
   *
   *     expect({a: 1}).to.not.have.property('b');
   *
   * However, it's dangerous to negate `.property` when providing `val`. The
   * problem is that it creates uncertain expectations by asserting that the
   * target either doesn't have a property with the given key `name`, or that it
   * does have a property with the given key `name` but its value isn't equal to
   * the given `val`. It's often best to identify the exact output that's
   * expected, and then write an assertion that only accepts that exact output.
   *
   * When the target isn't expected to have a property with the given key
   * `name`, it's often best to assert exactly that.
   *
   *     expect({b: 2}).to.not.have.property('a'); // Recommended
   *     expect({b: 2}).to.not.have.property('a', 1); // Not recommended
   *
   * When the target is expected to have a property with the given key `name`,
   * it's often best to assert that the property has its expected value, rather
   * than asserting that it doesn't have one of many unexpected values.
   *
   *     expect({a: 3}).to.have.property('a', 3); // Recommended
   *     expect({a: 3}).to.not.have.property('a', 1); // Not recommended
   *
   * `.property` changes the target of any assertions that follow in the chain
   * to be the value of the property from the original target object.
   *
   *     expect({a: 1}).to.have.property('a').that.is.a('number');
   *
   * `.property` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing `val`, only use the
   * second form.
   *
   *     // Recommended
   *     expect({a: 1}).to.have.property('a', 2, 'nooo why fail??');
   *     expect({a: 1}, 'nooo why fail??').to.have.property('a', 2);
   *     expect({a: 1}, 'nooo why fail??').to.have.property('b');
   *
   *     // Not recommended
   *     expect({a: 1}).to.have.property('b', undefined, 'nooo why fail??');
   *
   * The above assertion isn't the same thing as not providing `val`. Instead,
   * it's asserting that the target object has a `b` property that's equal to
   * `undefined`.
   *
   * The assertions `.ownProperty` and `.haveOwnProperty` can be used
   * interchangeably with `.own.property`.
   *
   * @name property
   * @param {String} name
   * @param {Mixed} val (optional)
   * @param {String} msg _optional_
   * @returns value of property for chaining
   * @namespace BDD
   * @api public
   */

  function assertProperty (name, val, msg) {
    if (msg) flag(this, 'message', msg);

    var isNested = flag(this, 'nested')
      , isOwn = flag(this, 'own')
      , flagMsg = flag(this, 'message')
      , obj = flag(this, 'object')
      , ssfi = flag(this, 'ssfi')
      , nameType = typeof name;

    flagMsg = flagMsg ? flagMsg + ': ' : '';

    if (isNested) {
      if (nameType !== 'string') {
        throw new AssertionError(
          flagMsg + 'the argument to property must be a string when using nested syntax',
          undefined,
          ssfi
        );
      }
    } else {
      if (nameType !== 'string' && nameType !== 'number' && nameType !== 'symbol') {
        throw new AssertionError(
          flagMsg + 'the argument to property must be a string, number, or symbol',
          undefined,
          ssfi
        );
      }
    }

    if (isNested && isOwn) {
      throw new AssertionError(
        flagMsg + 'The "nested" and "own" flags cannot be combined.',
        undefined,
        ssfi
      );
    }

    if (obj === null || obj === undefined) {
      throw new AssertionError(
        flagMsg + 'Target cannot be null or undefined.',
        undefined,
        ssfi
      );
    }

    var isDeep = flag(this, 'deep')
      , negate = flag(this, 'negate')
      , pathInfo = isNested ? _.getPathInfo(obj, name) : null
      , value = isNested ? pathInfo.value : obj[name];

    var descriptor = '';
    if (isDeep) descriptor += 'deep ';
    if (isOwn) descriptor += 'own ';
    if (isNested) descriptor += 'nested ';
    descriptor += 'property ';

    var hasProperty;
    if (isOwn) hasProperty = Object.prototype.hasOwnProperty.call(obj, name);
    else if (isNested) hasProperty = pathInfo.exists;
    else hasProperty = _.hasProperty(obj, name);

    // When performing a negated assertion for both name and val, merely having
    // a property with the given name isn't enough to cause the assertion to
    // fail. It must both have a property with the given name, and the value of
    // that property must equal the given val. Therefore, skip this assertion in
    // favor of the next.
    if (!negate || arguments.length === 1) {
      this.assert(
          hasProperty
        , 'expected #{this} to have ' + descriptor + _.inspect(name)
        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
    }

    if (arguments.length > 1) {
      this.assert(
          hasProperty && (isDeep ? _.eql(val, value) : val === value)
        , 'expected #{this} to have ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
        , 'expected #{this} to not have ' + descriptor + _.inspect(name) + ' of #{act}'
        , val
        , value
      );
    }

    flag(this, 'object', value);
  }

  Assertion.addMethod('property', assertProperty);

  function assertOwnProperty (name, value, msg) {
    flag(this, 'own', true);
    assertProperty.apply(this, arguments);
  }

  Assertion.addMethod('ownProperty', assertOwnProperty);
  Assertion.addMethod('haveOwnProperty', assertOwnProperty);

  /**
   * ### .ownPropertyDescriptor(name[, descriptor[, msg]])
   *
   * Asserts that the target has its own property descriptor with the given key
   * `name`. Enumerable and non-enumerable properties are included in the
   * search.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a');
   *
   * When `descriptor` is provided, `.ownPropertyDescriptor` also asserts that
   * the property's descriptor is deeply equal to the given `descriptor`. See
   * the `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * Add `.not` earlier in the chain to negate `.ownPropertyDescriptor`.
   *
   *     expect({a: 1}).to.not.have.ownPropertyDescriptor('b');
   *
   * However, it's dangerous to negate `.ownPropertyDescriptor` when providing
   * a `descriptor`. The problem is that it creates uncertain expectations by
   * asserting that the target either doesn't have a property descriptor with
   * the given key `name`, or that it does have a property descriptor with the
   * given key `name` but its not deeply equal to the given `descriptor`. It's
   * often best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to have a property descriptor with the given
   * key `name`, it's often best to assert exactly that.
   *
   *     // Recommended
   *     expect({b: 2}).to.not.have.ownPropertyDescriptor('a');
   *
   *     // Not recommended
   *     expect({b: 2}).to.not.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * When the target is expected to have a property descriptor with the given
   * key `name`, it's often best to assert that the property has its expected
   * descriptor, rather than asserting that it doesn't have one of many
   * unexpected descriptors.
   *
   *     // Recommended
   *     expect({a: 3}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 3,
   *     });
   *
   *     // Not recommended
   *     expect({a: 3}).to.not.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * `.ownPropertyDescriptor` changes the target of any assertions that follow
   * in the chain to be the value of the property descriptor from the original
   * target object.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a')
   *       .that.has.property('enumerable', true);
   *
   * `.ownPropertyDescriptor` accepts an optional `msg` argument which is a
   * custom error message to show when the assertion fails. The message can also
   * be given as the second argument to `expect`. When not providing
   * `descriptor`, only use the second form.
   *
   *     // Recommended
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 2,
   *     }, 'nooo why fail??');
   *
   *     // Recommended
   *     expect({a: 1}, 'nooo why fail??').to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 2,
   *     });
   *
   *     // Recommended
   *     expect({a: 1}, 'nooo why fail??').to.have.ownPropertyDescriptor('b');
   *
   *     // Not recommended
   *     expect({a: 1})
   *       .to.have.ownPropertyDescriptor('b', undefined, 'nooo why fail??');
   *
   * The above assertion isn't the same thing as not providing `descriptor`.
   * Instead, it's asserting that the target object has a `b` property
   * descriptor that's deeply equal to `undefined`.
   *
   * The alias `.haveOwnPropertyDescriptor` can be used interchangeably with
   * `.ownPropertyDescriptor`.
   *
   * @name ownPropertyDescriptor
   * @alias haveOwnPropertyDescriptor
   * @param {String} name
   * @param {Object} descriptor _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertOwnPropertyDescriptor (name, descriptor, msg) {
    if (typeof descriptor === 'string') {
      msg = descriptor;
      descriptor = null;
    }
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
    if (actualDescriptor && descriptor) {
      this.assert(
          _.eql(descriptor, actualDescriptor)
        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor)
        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor)
        , descriptor
        , actualDescriptor
        , true
      );
    } else {
      this.assert(
          actualDescriptor
        , 'expected #{this} to have an own property descriptor for ' + _.inspect(name)
        , 'expected #{this} to not have an own property descriptor for ' + _.inspect(name)
      );
    }
    flag(this, 'object', actualDescriptor);
  }

  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);

  /**
   * ### .lengthOf(n[, msg])
   *
   * Asserts that the target's `length` or `size` is equal to the given number
   * `n`.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3);
   *     expect('foo').to.have.lengthOf(3);
   *     expect(new Set([1, 2, 3])).to.have.lengthOf(3);
   *     expect(new Map([['a', 1], ['b', 2], ['c', 3]])).to.have.lengthOf(3);
   *
   * Add `.not` earlier in the chain to negate `.lengthOf`. However, it's often
   * best to assert that the target's `length` property is equal to its expected
   * value, rather than not equal to one of many unexpected values.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.not.have.lengthOf(4); // Not recommended
   *
   * `.lengthOf` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(2, 'nooo why fail??');
   *     expect([1, 2, 3], 'nooo why fail??').to.have.lengthOf(2);
   *
   * `.lengthOf` can also be used as a language chain, causing all `.above`,
   * `.below`, `.least`, `.most`, and `.within` assertions that follow in the
   * chain to use the target's `length` property as the target. However, it's
   * often best to assert that the target's `length` property is equal to its
   * expected length, rather than asserting that its `length` property falls
   * within some range of values.
   *
   *     // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf(3);
   *
   *     // Not recommended
   *     expect([1, 2, 3]).to.have.lengthOf.above(2);
   *     expect([1, 2, 3]).to.have.lengthOf.below(4);
   *     expect([1, 2, 3]).to.have.lengthOf.at.least(3);
   *     expect([1, 2, 3]).to.have.lengthOf.at.most(3);
   *     expect([1, 2, 3]).to.have.lengthOf.within(2,4);
   *
   * Due to a compatibility issue, the alias `.length` can't be chained directly
   * off of an uninvoked method such as `.a`. Therefore, `.length` can't be used
   * interchangeably with `.lengthOf` in every situation. It's recommended to
   * always use `.lengthOf` instead of `.length`.
   *
   *     expect([1, 2, 3]).to.have.a.length(3); // incompatible; throws error
   *     expect([1, 2, 3]).to.have.a.lengthOf(3);  // passes as expected
   *
   * @name lengthOf
   * @alias length
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertLengthChain () {
    flag(this, 'doLength', true);
  }

  function assertLength (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , objType = _.type(obj).toLowerCase()
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi')
      , descriptor = 'length'
      , itemsCount;

    switch (objType) {
      case 'map':
      case 'set':
        descriptor = 'size';
        itemsCount = obj.size;
        break;
      default:
        new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
        itemsCount = obj.length;
    }

    this.assert(
        itemsCount == n
      , 'expected #{this} to have a ' + descriptor + ' of #{exp} but got #{act}'
      , 'expected #{this} to not have a ' + descriptor + ' of #{act}'
      , n
      , itemsCount
    );
  }

  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
  Assertion.addChainableMethod('lengthOf', assertLength, assertLengthChain);

  /**
   * ### .match(re[, msg])
   *
   * Asserts that the target matches the given regular expression `re`.
   *
   *     expect('foobar').to.match(/^foo/);
   *
   * Add `.not` earlier in the chain to negate `.match`.
   *
   *     expect('foobar').to.not.match(/taco/);
   *
   * `.match` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect('foobar').to.match(/taco/, 'nooo why fail??');
   *     expect('foobar', 'nooo why fail??').to.match(/taco/);
   *
   * The alias `.matches` can be used interchangeably with `.match`.
   *
   * @name match
   * @alias matches
   * @param {RegExp} re
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */
  function assertMatch(re, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    this.assert(
        re.exec(obj)
      , 'expected #{this} to match ' + re
      , 'expected #{this} not to match ' + re
    );
  }

  Assertion.addMethod('match', assertMatch);
  Assertion.addMethod('matches', assertMatch);

  /**
   * ### .string(str[, msg])
   *
   * Asserts that the target string contains the given substring `str`.
   *
   *     expect('foobar').to.have.string('bar');
   *
   * Add `.not` earlier in the chain to negate `.string`.
   *
   *     expect('foobar').to.not.have.string('taco');
   *
   * `.string` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect('foobar').to.have.string('taco', 'nooo why fail??');
   *     expect('foobar', 'nooo why fail??').to.have.string('taco');
   *
   * @name string
   * @param {String} str
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('string', function (str, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(obj, flagMsg, ssfi, true).is.a('string');

    this.assert(
        ~obj.indexOf(str)
      , 'expected #{this} to contain ' + _.inspect(str)
      , 'expected #{this} to not contain ' + _.inspect(str)
    );
  });

  /**
   * ### .keys(key1[, key2[, ...]])
   *
   * Asserts that the target object, array, map, or set has the given keys. Only
   * the target's own inherited properties are included in the search.
   *
   * When the target is an object or array, keys can be provided as one or more
   * string arguments, a single array argument, or a single object argument. In
   * the latter case, only the keys in the given object matter; the values are
   * ignored.
   *
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *     expect(['x', 'y']).to.have.all.keys(0, 1);
   *
   *     expect({a: 1, b: 2}).to.have.all.keys(['a', 'b']);
   *     expect(['x', 'y']).to.have.all.keys([0, 1]);
   *
   *     expect({a: 1, b: 2}).to.have.all.keys({a: 4, b: 5}); // ignore 4 and 5
   *     expect(['x', 'y']).to.have.all.keys({0: 4, 1: 5}); // ignore 4 and 5
   *
   * When the target is a map or set, each key must be provided as a separate
   * argument.
   *
   *     expect(new Map([['a', 1], ['b', 2]])).to.have.all.keys('a', 'b');
   *     expect(new Set(['a', 'b'])).to.have.all.keys('a', 'b');
   *
   * Because `.keys` does different things based on the target's type, it's
   * important to check the target's type before using `.keys`. See the `.a` doc
   * for info on testing a target's type.
   *
   *     expect({a: 1, b: 2}).to.be.an('object').that.has.all.keys('a', 'b');
   *
   * By default, strict (`===`) equality is used to compare keys of maps and
   * sets. Add `.deep` earlier in the chain to use deep equality instead. See
   * the `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target set deeply (but not strictly) has key `{a: 1}`
   *     expect(new Set([{a: 1}])).to.have.all.deep.keys([{a: 1}]);
   *     expect(new Set([{a: 1}])).to.not.have.all.keys([{a: 1}]);
   *
   * By default, the target must have all of the given keys and no more. Add
   * `.any` earlier in the chain to only require that the target have at least
   * one of the given keys. Also, add `.not` earlier in the chain to negate
   * `.keys`. It's often best to add `.any` when negating `.keys`, and to use
   * `.all` when asserting `.keys` without negation.
   *
   * When negating `.keys`, `.any` is preferred because `.not.any.keys` asserts
   * exactly what's expected of the output, whereas `.not.all.keys` creates
   * uncertain expectations.
   *
   *     // Recommended; asserts that target doesn't have any of the given keys
   *     expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
   *
   *     // Not recommended; asserts that target doesn't have all of the given
   *     // keys but may or may not have some of them
   *     expect({a: 1, b: 2}).to.not.have.all.keys('c', 'd');
   *
   * When asserting `.keys` without negation, `.all` is preferred because
   * `.all.keys` asserts exactly what's expected of the output, whereas
   * `.any.keys` creates uncertain expectations.
   *
   *     // Recommended; asserts that target has all the given keys
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *
   *     // Not recommended; asserts that target has at least one of the given
   *     // keys but may or may not have more of them
   *     expect({a: 1, b: 2}).to.have.any.keys('a', 'b');
   *
   * Note that `.all` is used by default when neither `.all` nor `.any` appear
   * earlier in the chain. However, it's often best to add `.all` anyway because
   * it improves readability.
   *
   *     // Both assertions are identical
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b'); // Recommended
   *     expect({a: 1, b: 2}).to.have.keys('a', 'b'); // Not recommended
   *
   * Add `.include` earlier in the chain to require that the target's keys be a
   * superset of the expected keys, rather than identical sets.
   *
   *     // Target object's keys are a superset of ['a', 'b'] but not identical
   *     expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
   *     expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');
   *
   * However, if `.any` and `.include` are combined, only the `.any` takes
   * effect. The `.include` is ignored in this case.
   *
   *     // Both assertions are identical
   *     expect({a: 1}).to.have.any.keys('a', 'b');
   *     expect({a: 1}).to.include.any.keys('a', 'b');
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.have.key('b');
   *
   * The alias `.key` can be used interchangeably with `.keys`.
   *
   * @name keys
   * @alias key
   * @param {...String|Array|Object} keys
   * @namespace BDD
   * @api public
   */

  function assertKeys (keys) {
    var obj = flag(this, 'object')
      , objType = _.type(obj)
      , keysType = _.type(keys)
      , ssfi = flag(this, 'ssfi')
      , isDeep = flag(this, 'deep')
      , str
      , deepStr = ''
      , actual
      , ok = true
      , flagMsg = flag(this, 'message');

    flagMsg = flagMsg ? flagMsg + ': ' : '';
    var mixedArgsMsg = flagMsg + 'when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments';

    if (objType === 'Map' || objType === 'Set') {
      deepStr = isDeep ? 'deeply ' : '';
      actual = [];

      // Map and Set '.keys' aren't supported in IE 11. Therefore, use .forEach.
      obj.forEach(function (val, key) { actual.push(key) });

      if (keysType !== 'Array') {
        keys = Array.prototype.slice.call(arguments);
      }
    } else {
      actual = _.getOwnEnumerableProperties(obj);

      switch (keysType) {
        case 'Array':
          if (arguments.length > 1) {
            throw new AssertionError(mixedArgsMsg, undefined, ssfi);
          }
          break;
        case 'Object':
          if (arguments.length > 1) {
            throw new AssertionError(mixedArgsMsg, undefined, ssfi);
          }
          keys = Object.keys(keys);
          break;
        default:
          keys = Array.prototype.slice.call(arguments);
      }

      // Only stringify non-Symbols because Symbols would become "Symbol()"
      keys = keys.map(function (val) {
        return typeof val === 'symbol' ? val : String(val);
      });
    }

    if (!keys.length) {
      throw new AssertionError(flagMsg + 'keys required', undefined, ssfi);
    }

    var len = keys.length
      , any = flag(this, 'any')
      , all = flag(this, 'all')
      , expected = keys;

    if (!any && !all) {
      all = true;
    }

    // Has any
    if (any) {
      ok = expected.some(function(expectedKey) {
        return actual.some(function(actualKey) {
          if (isDeep) {
            return _.eql(expectedKey, actualKey);
          } else {
            return expectedKey === actualKey;
          }
        });
      });
    }

    // Has all
    if (all) {
      ok = expected.every(function(expectedKey) {
        return actual.some(function(actualKey) {
          if (isDeep) {
            return _.eql(expectedKey, actualKey);
          } else {
            return expectedKey === actualKey;
          }
        });
      });

      if (!flag(this, 'contains')) {
        ok = ok && keys.length == actual.length;
      }
    }

    // Key string
    if (len > 1) {
      keys = keys.map(function(key) {
        return _.inspect(key);
      });
      var last = keys.pop();
      if (all) {
        str = keys.join(', ') + ', and ' + last;
      }
      if (any) {
        str = keys.join(', ') + ', or ' + last;
      }
    } else {
      str = _.inspect(keys[0]);
    }

    // Form
    str = (len > 1 ? 'keys ' : 'key ') + str;

    // Have / include
    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

    // Assertion
    this.assert(
        ok
      , 'expected #{this} to ' + deepStr + str
      , 'expected #{this} to not ' + deepStr + str
      , expected.slice(0).sort(_.compareByInspect)
      , actual.sort(_.compareByInspect)
      , true
    );
  }

  Assertion.addMethod('keys', assertKeys);
  Assertion.addMethod('key', assertKeys);

  /**
   * ### .throw([errorLike], [errMsgMatcher], [msg])
   *
   * When no arguments are provided, `.throw` invokes the target function and
   * asserts that an error is thrown.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw();
   *
   * When one argument is provided, and it's an error constructor, `.throw`
   * invokes the target function and asserts that an error is thrown that's an
   * instance of that error constructor.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(TypeError);
   *
   * When one argument is provided, and it's an error instance, `.throw` invokes
   * the target function and asserts that an error is thrown that's strictly
   * (`===`) equal to that error instance.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(err);
   *
   * When one argument is provided, and it's a string, `.throw` invokes the
   * target function and asserts that an error is thrown with a message that
   * contains that string.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw('salmon');
   *
   * When one argument is provided, and it's a regular expression, `.throw`
   * invokes the target function and asserts that an error is thrown with a
   * message that matches that regular expression.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(/salmon/);
   *
   * When two arguments are provided, and the first is an error instance or
   * constructor, and the second is a string or regular expression, `.throw`
   * invokes the function and asserts that an error is thrown that fulfills both
   * conditions as described above.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(TypeError, 'salmon');
   *     expect(badFn).to.throw(TypeError, /salmon/);
   *     expect(badFn).to.throw(err, 'salmon');
   *     expect(badFn).to.throw(err, /salmon/);
   *
   * Add `.not` earlier in the chain to negate `.throw`.
   *
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.not.throw();
   *
   * However, it's dangerous to negate `.throw` when providing any arguments.
   * The problem is that it creates uncertain expectations by asserting that the
   * target either doesn't throw an error, or that it throws an error but of a
   * different type than the given type, or that it throws an error of the given
   * type but with a message that doesn't include the given string. It's often
   * best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to throw an error, it's often best to assert
   * exactly that.
   *
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.not.throw(); // Recommended
   *     expect(goodFn).to.not.throw(ReferenceError, 'x'); // Not recommended
   *
   * When the target is expected to throw an error, it's often best to assert
   * that the error is of its expected type, and has a message that includes an
   * expected string, rather than asserting that it doesn't have one of many
   * unexpected types, and doesn't have a message that includes some string.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(TypeError, 'salmon'); // Recommended
   *     expect(badFn).to.not.throw(ReferenceError, 'x'); // Not recommended
   *
   * `.throw` changes the target of any assertions that follow in the chain to
   * be the error object that's thrown.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     err.code = 42;
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(TypeError).with.property('code', 42);
   *
   * `.throw` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`. When not providing two arguments, always use
   * the second form.
   *
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.throw(TypeError, 'x', 'nooo why fail??');
   *     expect(goodFn, 'nooo why fail??').to.throw();
   *
   * Due to limitations in ES5, `.throw` may not always work as expected when
   * using a transpiler such as Babel or TypeScript. In particular, it may
   * produce unexpected results when subclassing the built-in `Error` object and
   * then passing the subclassed constructor to `.throw`. See your transpiler's
   * docs for details:
   *
   * - ([Babel](https://babeljs.io/docs/usage/caveats/#classes))
   * - ([TypeScript](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work))
   *
   * Beware of some common mistakes when using the `throw` assertion. One common
   * mistake is to accidentally invoke the function yourself instead of letting
   * the `throw` assertion invoke the function for you. For example, when
   * testing if a function named `fn` throws, provide `fn` instead of `fn()` as
   * the target for the assertion.
   *
   *     expect(fn).to.throw();     // Good! Tests `fn` as desired
   *     expect(fn()).to.throw();   // Bad! Tests result of `fn()`, not `fn`
   *
   * If you need to assert that your function `fn` throws when passed certain
   * arguments, then wrap a call to `fn` inside of another function.
   *
   *     expect(function () { fn(42); }).to.throw();  // Function expression
   *     expect(() => fn(42)).to.throw();             // ES6 arrow function
   *
   * Another common mistake is to provide an object method (or any stand-alone
   * function that relies on `this`) as the target of the assertion. Doing so is
   * problematic because the `this` context will be lost when the function is
   * invoked by `.throw`; there's no way for it to know what `this` is supposed
   * to be. There are two ways around this problem. One solution is to wrap the
   * method or function call inside of another function. Another solution is to
   * use `bind`.
   *
   *     expect(function () { cat.meow(); }).to.throw();  // Function expression
   *     expect(() => cat.meow()).to.throw();             // ES6 arrow function
   *     expect(cat.meow.bind(cat)).to.throw();           // Bind
   *
   * Finally, it's worth mentioning that it's a best practice in JavaScript to
   * only throw `Error` and derivatives of `Error` such as `ReferenceError`,
   * `TypeError`, and user-defined objects that extend `Error`. No other type of
   * value will generate a stack trace when initialized. With that said, the
   * `throw` assertion does technically support any type of value being thrown,
   * not just `Error` and its derivatives.
   *
   * The aliases `.throws` and `.Throw` can be used interchangeably with
   * `.throw`.
   *
   * @name throw
   * @alias throws
   * @alias Throw
   * @param {Error|ErrorConstructor} errorLike
   * @param {String|RegExp} errMsgMatcher error message
   * @param {String} msg _optional_
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @returns error for chaining (null if no error)
   * @namespace BDD
   * @api public
   */

  function assertThrows (errorLike, errMsgMatcher, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , ssfi = flag(this, 'ssfi')
      , flagMsg = flag(this, 'message')
      , negate = flag(this, 'negate') || false;
    new Assertion(obj, flagMsg, ssfi, true).is.a('function');

    if (errorLike instanceof RegExp || typeof errorLike === 'string') {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    var caughtErr;
    try {
      obj();
    } catch (err) {
      caughtErr = err;
    }

    // If we have the negate flag enabled and at least one valid argument it means we do expect an error
    // but we want it to match a given set of criteria
    var everyArgIsUndefined = errorLike === undefined && errMsgMatcher === undefined;

    // If we've got the negate flag enabled and both args, we should only fail if both aren't compatible
    // See Issue #551 and PR #683@GitHub
    var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
    var errorLikeFail = false;
    var errMsgMatcherFail = false;

    // Checking if error was thrown
    if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
      // We need this to display results correctly according to their types
      var errorLikeString = 'an error';
      if (errorLike instanceof Error) {
        errorLikeString = '#{exp}';
      } else if (errorLike) {
        errorLikeString = _.checkError.getConstructorName(errorLike);
      }

      this.assert(
          caughtErr
        , 'expected #{this} to throw ' + errorLikeString
        , 'expected #{this} to not throw an error but #{act} was thrown'
        , errorLike && errorLike.toString()
        , (caughtErr instanceof Error ?
            caughtErr.toString() : (typeof caughtErr === 'string' ? caughtErr : caughtErr &&
                                    _.checkError.getConstructorName(caughtErr)))
      );
    }

    if (errorLike && caughtErr) {
      // We should compare instances only if `errorLike` is an instance of `Error`
      if (errorLike instanceof Error) {
        var isCompatibleInstance = _.checkError.compatibleInstance(caughtErr, errorLike);

        if (isCompatibleInstance === negate) {
          // These checks were created to ensure we won't fail too soon when we've got both args and a negate
          // See Issue #551 and PR #683@GitHub
          if (everyArgIsDefined && negate) {
            errorLikeFail = true;
          } else {
            this.assert(
                negate
              , 'expected #{this} to throw #{exp} but #{act} was thrown'
              , 'expected #{this} to not throw #{exp}' + (caughtErr && !negate ? ' but #{act} was thrown' : '')
              , errorLike.toString()
              , caughtErr.toString()
            );
          }
        }
      }

      var isCompatibleConstructor = _.checkError.compatibleConstructor(caughtErr, errorLike);
      if (isCompatibleConstructor === negate) {
        if (everyArgIsDefined && negate) {
            errorLikeFail = true;
        } else {
          this.assert(
              negate
            , 'expected #{this} to throw #{exp} but #{act} was thrown'
            , 'expected #{this} to not throw #{exp}' + (caughtErr ? ' but #{act} was thrown' : '')
            , (errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike))
            , (caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr))
          );
        }
      }
    }

    if (caughtErr && errMsgMatcher !== undefined && errMsgMatcher !== null) {
      // Here we check compatible messages
      var placeholder = 'including';
      if (errMsgMatcher instanceof RegExp) {
        placeholder = 'matching'
      }

      var isCompatibleMessage = _.checkError.compatibleMessage(caughtErr, errMsgMatcher);
      if (isCompatibleMessage === negate) {
        if (everyArgIsDefined && negate) {
            errMsgMatcherFail = true;
        } else {
          this.assert(
            negate
            , 'expected #{this} to throw error ' + placeholder + ' #{exp} but got #{act}'
            , 'expected #{this} to throw error not ' + placeholder + ' #{exp}'
            ,  errMsgMatcher
            ,  _.checkError.getMessage(caughtErr)
          );
        }
      }
    }

    // If both assertions failed and both should've matched we throw an error
    if (errorLikeFail && errMsgMatcherFail) {
      this.assert(
        negate
        , 'expected #{this} to throw #{exp} but #{act} was thrown'
        , 'expected #{this} to not throw #{exp}' + (caughtErr ? ' but #{act} was thrown' : '')
        , (errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike))
        , (caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr))
      );
    }

    flag(this, 'object', caughtErr);
  };

  Assertion.addMethod('throw', assertThrows);
  Assertion.addMethod('throws', assertThrows);
  Assertion.addMethod('Throw', assertThrows);

  /**
   * ### .respondTo(method[, msg])
   *
   * When the target is a non-function object, `.respondTo` asserts that the
   * target has a method with the given name `method`. The method can be own or
   * inherited, and it can be enumerable or non-enumerable.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(new Cat()).to.respondTo('meow');
   *
   * When the target is a function, `.respondTo` asserts that the target's
   * `prototype` property has a method with the given name `method`. Again, the
   * method can be own or inherited, and it can be enumerable or non-enumerable.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(Cat).to.respondTo('meow');
   *
   * Add `.itself` earlier in the chain to force `.respondTo` to treat the
   * target as a non-function object, even if it's a function. Thus, it asserts
   * that the target has a method with the given name `method`, rather than
   * asserting that the target's `prototype` property has a method with the
   * given name `method`.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *     Cat.hiss = function () {};
   *
   *     expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow');
   *
   * When not adding `.itself`, it's important to check the target's type before
   * using `.respondTo`. See the `.a` doc for info on checking a target's type.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(new Cat()).to.be.an('object').that.respondsTo('meow');
   *
   * Add `.not` earlier in the chain to negate `.respondTo`.
   *
   *     function Dog () {}
   *     Dog.prototype.bark = function () {};
   *
   *     expect(new Dog()).to.not.respondTo('meow');
   *
   * `.respondTo` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect({}).to.respondTo('meow', 'nooo why fail??');
   *     expect({}, 'nooo why fail??').to.respondTo('meow');
   *
   * The alias `.respondsTo` can be used interchangeably with `.respondTo`.
   *
   * @name respondTo
   * @alias respondsTo
   * @param {String} method
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function respondTo (method, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , itself = flag(this, 'itself')
      , context = ('function' === typeof obj && !itself)
        ? obj.prototype[method]
        : obj[method];

    this.assert(
        'function' === typeof context
      , 'expected #{this} to respond to ' + _.inspect(method)
      , 'expected #{this} to not respond to ' + _.inspect(method)
    );
  }

  Assertion.addMethod('respondTo', respondTo);
  Assertion.addMethod('respondsTo', respondTo);

  /**
   * ### .itself
   *
   * Forces all `.respondTo` assertions that follow in the chain to behave as if
   * the target is a non-function object, even if it's a function. Thus, it
   * causes `.respondTo` to assert that the target has a method with the given
   * name, rather than asserting that the target's `prototype` property has a
   * method with the given name.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *     Cat.hiss = function () {};
   *
   *     expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow');
   *
   * @name itself
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('itself', function () {
    flag(this, 'itself', true);
  });

  /**
   * ### .satisfy(matcher[, msg])
   *
   * Invokes the given `matcher` function with the target being passed as the
   * first argument, and asserts that the value returned is truthy.
   *
   *     expect(1).to.satisfy(function(num) {
   *       return num > 0;
   *     });
   *
   * Add `.not` earlier in the chain to negate `.satisfy`.
   *
   *     expect(1).to.not.satisfy(function(num) {
   *       return num > 2;
   *     });
   *
   * `.satisfy` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1).to.satisfy(function(num) {
   *       return num > 2;
   *     }, 'nooo why fail??');
   *
   *     expect(1, 'nooo why fail??').to.satisfy(function(num) {
   *       return num > 2;
   *     });
   *
   * The alias `.satisfies` can be used interchangeably with `.satisfy`.
   *
   * @name satisfy
   * @alias satisfies
   * @param {Function} matcher
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function satisfy (matcher, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var result = matcher(obj);
    this.assert(
        result
      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
      , flag(this, 'negate') ? false : true
      , result
    );
  }

  Assertion.addMethod('satisfy', satisfy);
  Assertion.addMethod('satisfies', satisfy);

  /**
   * ### .closeTo(expected, delta[, msg])
   *
   * Asserts that the target is a number that's within a given +/- `delta` range
   * of the given number `expected`. However, it's often best to assert that the
   * target is equal to its expected value.
   *
   *     // Recommended
   *     expect(1.5).to.equal(1.5);
   *
   *     // Not recommended
   *     expect(1.5).to.be.closeTo(1, 0.5);
   *     expect(1.5).to.be.closeTo(2, 0.5);
   *     expect(1.5).to.be.closeTo(1, 1);
   *
   * Add `.not` earlier in the chain to negate `.closeTo`.
   *
   *     expect(1.5).to.equal(1.5); // Recommended
   *     expect(1.5).to.not.be.closeTo(3, 1); // Not recommended
   *
   * `.closeTo` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1.5).to.be.closeTo(3, 1, 'nooo why fail??');
   *     expect(1.5, 'nooo why fail??').to.be.closeTo(3, 1);
   *
   * The alias `.approximately` can be used interchangeably with `.closeTo`.
   *
   * @name closeTo
   * @alias approximately
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function closeTo(expected, delta, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');

    new Assertion(obj, flagMsg, ssfi, true).is.a('number');
    if (typeof expected !== 'number' || typeof delta !== 'number') {
      flagMsg = flagMsg ? flagMsg + ': ' : '';
      throw new AssertionError(
          flagMsg + 'the arguments to closeTo or approximately must be numbers',
          undefined,
          ssfi
      );
    }

    this.assert(
        Math.abs(obj - expected) <= delta
      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
    );
  }

  Assertion.addMethod('closeTo', closeTo);
  Assertion.addMethod('approximately', closeTo);

  // Note: Duplicates are ignored if testing for inclusion instead of sameness.
  function isSubsetOf(subset, superset, cmp, contains, ordered) {
    if (!contains) {
      if (subset.length !== superset.length) return false;
      superset = superset.slice();
    }

    return subset.every(function(elem, idx) {
      if (ordered) return cmp ? cmp(elem, superset[idx]) : elem === superset[idx];

      if (!cmp) {
        var matchIdx = superset.indexOf(elem);
        if (matchIdx === -1) return false;

        // Remove match from superset so not counted twice if duplicate in subset.
        if (!contains) superset.splice(matchIdx, 1);
        return true;
      }

      return superset.some(function(elem2, matchIdx) {
        if (!cmp(elem, elem2)) return false;

        // Remove match from superset so not counted twice if duplicate in subset.
        if (!contains) superset.splice(matchIdx, 1);
        return true;
      });
    });
  }

  /**
   * ### .members(set[, msg])
   *
   * Asserts that the target array has the same members as the given array
   * `set`.
   *
   *     expect([1, 2, 3]).to.have.members([2, 1, 3]);
   *     expect([1, 2, 2]).to.have.members([2, 1, 2]);
   *
   * By default, members are compared using strict (`===`) equality. Add `.deep`
   * earlier in the chain to use deep equality instead. See the `deep-eql`
   * project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target array deeply (but not strictly) has member `{a: 1}`
   *     expect([{a: 1}]).to.have.deep.members([{a: 1}]);
   *     expect([{a: 1}]).to.not.have.members([{a: 1}]);
   *
   * By default, order doesn't matter. Add `.ordered` earlier in the chain to
   * require that members appear in the same order.
   *
   *     expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);
   *     expect([1, 2, 3]).to.have.members([2, 1, 3])
   *       .but.not.ordered.members([2, 1, 3]);
   *
   * By default, both arrays must be the same size. Add `.include` earlier in
   * the chain to require that the target's members be a superset of the
   * expected members. Note that duplicates are ignored in the subset when
   * `.include` is added.
   *
   *     // Target array is a superset of [1, 2] but not identical
   *     expect([1, 2, 3]).to.include.members([1, 2]);
   *     expect([1, 2, 3]).to.not.have.members([1, 2]);
   *
   *     // Duplicates in the subset are ignored
   *     expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);
   *
   * `.deep`, `.ordered`, and `.include` can all be combined. However, if
   * `.include` and `.ordered` are combined, the ordering begins at the start of
   * both arrays.
   *
   *     expect([{a: 1}, {b: 2}, {c: 3}])
   *       .to.include.deep.ordered.members([{a: 1}, {b: 2}])
   *       .but.not.include.deep.ordered.members([{b: 2}, {c: 3}]);
   *
   * Add `.not` earlier in the chain to negate `.members`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the target array doesn't have all of the same members as
   * the given array `set` but may or may not have some of them. It's often best
   * to identify the exact output that's expected, and then write an assertion
   * that only accepts that exact output.
   *
   *     expect([1, 2]).to.not.include(3).and.not.include(4); // Recommended
   *     expect([1, 2]).to.not.have.members([3, 4]); // Not recommended
   *
   * `.members` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2]).to.have.members([1, 2, 3], 'nooo why fail??');
   *     expect([1, 2], 'nooo why fail??').to.have.members([1, 2, 3]);
   *
   * @name members
   * @param {Array} set
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('members', function (subset, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');

    new Assertion(obj, flagMsg, ssfi, true).to.be.an('array');
    new Assertion(subset, flagMsg, ssfi, true).to.be.an('array');

    var contains = flag(this, 'contains');
    var ordered = flag(this, 'ordered');

    var subject, failMsg, failNegateMsg;

    if (contains) {
      subject = ordered ? 'an ordered superset' : 'a superset';
      failMsg = 'expected #{this} to be ' + subject + ' of #{exp}';
      failNegateMsg = 'expected #{this} to not be ' + subject + ' of #{exp}';
    } else {
      subject = ordered ? 'ordered members' : 'members';
      failMsg = 'expected #{this} to have the same ' + subject + ' as #{exp}';
      failNegateMsg = 'expected #{this} to not have the same ' + subject + ' as #{exp}';
    }

    var cmp = flag(this, 'deep') ? _.eql : undefined;

    this.assert(
        isSubsetOf(subset, obj, cmp, contains, ordered)
      , failMsg
      , failNegateMsg
      , subset
      , obj
      , true
    );
  });

  /**
   * ### .oneOf(list[, msg])
   *
   * Asserts that the target is a member of the given array `list`. However,
   * it's often best to assert that the target is equal to its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.oneOf([1, 2, 3]); // Not recommended
   *
   * Comparisons are performed using strict (`===`) equality.
   *
   * Add `.not` earlier in the chain to negate `.oneOf`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.oneOf([2, 3, 4]); // Not recommended
   *
   * `.oneOf` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.oneOf([2, 3, 4], 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.oneOf([2, 3, 4]);
   *
   * @name oneOf
   * @param {Array<*>} list
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function oneOf (list, msg) {
    if (msg) flag(this, 'message', msg);
    var expected = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(list, flagMsg, ssfi, true).to.be.an('array');

    this.assert(
        list.indexOf(expected) > -1
      , 'expected #{this} to be one of #{exp}'
      , 'expected #{this} to not be one of #{exp}'
      , list
      , expected
    );
  }

  Assertion.addMethod('oneOf', oneOf);

  /**
   * ### .change(subject[, prop[, msg]])
   *
   * When one argument is provided, `.change` asserts that the given function
   * `subject` returns a different value when it's invoked before the target
   * function compared to when it's invoked afterward. However, it's often best
   * to assert that `subject` is equal to its expected value.
   *
   *     var dots = ''
   *       , addDot = function () { dots += '.'; }
   *       , getDots = function () { return dots; };
   *
   *     // Recommended
   *     expect(getDots()).to.equal('');
   *     addDot();
   *     expect(getDots()).to.equal('.');
   *
   *     // Not recommended
   *     expect(addDot).to.change(getDots);
   *
   * When two arguments are provided, `.change` asserts that the value of the
   * given object `subject`'s `prop` property is different before invoking the
   * target function compared to afterward.
   *
   *     var myObj = {dots: ''}
   *       , addDot = function () { myObj.dots += '.'; };
   *
   *     // Recommended
   *     expect(myObj).to.have.property('dots', '');
   *     addDot();
   *     expect(myObj).to.have.property('dots', '.');
   *
   *     // Not recommended
   *     expect(addDot).to.change(myObj, 'dots');
   *
   * Strict (`===`) equality is used to compare before and after values.
   *
   * Add `.not` earlier in the chain to negate `.change`.
   *
   *     var dots = ''
   *       , noop = function () {}
   *       , getDots = function () { return dots; };
   *
   *     expect(noop).to.not.change(getDots);
   *
   *     var myObj = {dots: ''}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'dots');
   *
   * `.change` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {dots: ''}
   *       , addDot = function () { myObj.dots += '.'; };
   *
   *     expect(addDot).to.not.change(myObj, 'dots', 'nooo why fail??');
   *
   *     var dots = ''
   *       , addDot = function () { dots += '.'; }
   *       , getDots = function () { return dots; };
   *
   *     expect(addDot, 'nooo why fail??').to.not.change(getDots);
   *
   * `.change` also causes all `.by` assertions that follow in the chain to
   * assert how much a numeric subject was increased or decreased by. However,
   * it's dangerous to use `.change.by`. The problem is that it creates
   * uncertain expectations by asserting that the subject either increases by
   * the given delta, or that it decreases by the given delta. It's often best
   * to identify the exact output that's expected, and then write an assertion
   * that only accepts that exact output.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; }
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   * The alias `.changes` can be used interchangeably with `.change`.
   *
   * @name change
   * @alias changes
   * @param {String} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertChanges (subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    // This gets flagged because of the .by(delta) assertion
    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'change');
    flag(this, 'realDelta', final !== initial);

    this.assert(
      initial !== final
      , 'expected ' + msgObj + ' to change'
      , 'expected ' + msgObj + ' to not change'
    );
  }

  Assertion.addMethod('change', assertChanges);
  Assertion.addMethod('changes', assertChanges);

  /**
   * ### .increase(subject[, prop[, msg]])
   *
   * When one argument is provided, `.increase` asserts that the given function
   * `subject` returns a greater number when it's invoked after invoking the
   * target function compared to when it's invoked beforehand. `.increase` also
   * causes all `.by` assertions that follow in the chain to assert how much
   * greater of a number is returned. It's often best to assert that the return
   * value increased by the expected amount, rather than asserting it increased
   * by any amount.
   *
   *     var val = 1
   *       , addTwo = function () { val += 2; }
   *       , getVal = function () { return val; };
   *
   *     expect(addTwo).to.increase(getVal).by(2); // Recommended
   *     expect(addTwo).to.increase(getVal); // Not recommended
   *
   * When two arguments are provided, `.increase` asserts that the value of the
   * given object `subject`'s `prop` property is greater after invoking the
   * target function compared to beforehand.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.increase(myObj, 'val'); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.increase`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either decreases, or that it stays the same.
   * It's often best to identify the exact output that's expected, and then
   * write an assertion that only accepts that exact output.
   *
   * When the subject is expected to decrease, it's often best to assert that it
   * decreased by the expected amount.
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.not.increase(myObj, 'val'); // Not recommended
   *
   * When the subject is expected to stay the same, it's often best to assert
   * exactly that.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'val'); // Recommended
   *     expect(noop).to.not.increase(myObj, 'val'); // Not recommended
   *
   * `.increase` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.increase(myObj, 'val', 'nooo why fail??');
   *
   *     var val = 1
   *       , noop = function () {}
   *       , getVal = function () { return val; };
   *
   *     expect(noop, 'nooo why fail??').to.increase(getVal);
   *
   * The alias `.increases` can be used interchangeably with `.increase`.
   *
   * @name increase
   * @alias increases
   * @param {String|Function} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertIncreases (subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    // Make sure that the target is a number
    new Assertion(initial, flagMsg, ssfi, true).is.a('number');

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'increase');
    flag(this, 'realDelta', final - initial);

    this.assert(
      final - initial > 0
      , 'expected ' + msgObj + ' to increase'
      , 'expected ' + msgObj + ' to not increase'
    );
  }

  Assertion.addMethod('increase', assertIncreases);
  Assertion.addMethod('increases', assertIncreases);

  /**
   * ### .decrease(subject[, prop[, msg]])
   *
   * When one argument is provided, `.decrease` asserts that the given function
   * `subject` returns a lesser number when it's invoked after invoking the
   * target function compared to when it's invoked beforehand. `.decrease` also
   * causes all `.by` assertions that follow in the chain to assert how much
   * lesser of a number is returned. It's often best to assert that the return
   * value decreased by the expected amount, rather than asserting it decreased
   * by any amount.
   *
   *     var val = 1
   *       , subtractTwo = function () { val -= 2; }
   *       , getVal = function () { return val; };
   *
   *     expect(subtractTwo).to.decrease(getVal).by(2); // Recommended
   *     expect(subtractTwo).to.decrease(getVal); // Not recommended
   *
   * When two arguments are provided, `.decrease` asserts that the value of the
   * given object `subject`'s `prop` property is lesser after invoking the
   * target function compared to beforehand.
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.decrease(myObj, 'val'); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.decrease`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either increases, or that it stays the same.
   * It's often best to identify the exact output that's expected, and then
   * write an assertion that only accepts that exact output.
   *
   * When the subject is expected to increase, it's often best to assert that it
   * increased by the expected amount.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.not.decrease(myObj, 'val'); // Not recommended
   *
   * When the subject is expected to stay the same, it's often best to assert
   * exactly that.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'val'); // Recommended
   *     expect(noop).to.not.decrease(myObj, 'val'); // Not recommended
   *
   * `.decrease` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.decrease(myObj, 'val', 'nooo why fail??');
   *
   *     var val = 1
   *       , noop = function () {}
   *       , getVal = function () { return val; };
   *
   *     expect(noop, 'nooo why fail??').to.decrease(getVal);
   *
   * The alias `.decreases` can be used interchangeably with `.decrease`.
   *
   * @name decrease
   * @alias decreases
   * @param {String|Function} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertDecreases (subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    // Make sure that the target is a number
    new Assertion(initial, flagMsg, ssfi, true).is.a('number');

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'decrease');
    flag(this, 'realDelta', initial - final);

    this.assert(
      final - initial < 0
      , 'expected ' + msgObj + ' to decrease'
      , 'expected ' + msgObj + ' to not decrease'
    );
  }

  Assertion.addMethod('decrease', assertDecreases);
  Assertion.addMethod('decreases', assertDecreases);

  /**
   * ### .by(delta[, msg])
   *
   * When following an `.increase` assertion in the chain, `.by` asserts that
   * the subject of the `.increase` assertion increased by the given `delta`.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2);
   *
   * When following a `.decrease` assertion in the chain, `.by` asserts that the
   * subject of the `.decrease` assertion decreased by the given `delta`.
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2);
   *
   * When following a `.change` assertion in the chain, `.by` asserts that the
   * subject of the `.change` assertion either increased or decreased by the
   * given `delta`. However, it's dangerous to use `.change.by`. The problem is
   * that it creates uncertain expectations. It's often best to identify the
   * exact output that's expected, and then write an assertion that only accepts
   * that exact output.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; }
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.by`. However, it's often best
   * to assert that the subject changed by its expected delta, rather than
   * asserting that it didn't change by one of countless unexpected deltas.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     // Recommended
   *     expect(addTwo).to.increase(myObj, 'val').by(2);
   *
   *     // Not recommended
   *     expect(addTwo).to.increase(myObj, 'val').but.not.by(3);
   *
   * `.by` accepts an optional `msg` argument which is a custom error message to
   * show when the assertion fails. The message can also be given as the second
   * argument to `expect`.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(3, 'nooo why fail??');
   *     expect(addTwo, 'nooo why fail??').to.increase(myObj, 'val').by(3);
   *
   * @name by
   * @param {Number} delta
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertDelta(delta, msg) {
    if (msg) flag(this, 'message', msg);

    var msgObj = flag(this, 'deltaMsgObj');
    var initial = flag(this, 'initialDeltaValue');
    var final = flag(this, 'finalDeltaValue');
    var behavior = flag(this, 'deltaBehavior');
    var realDelta = flag(this, 'realDelta');

    var expression;
    if (behavior === 'change') {
      expression = Math.abs(final - initial) === Math.abs(delta);
    } else {
      expression = realDelta === Math.abs(delta);
    }

    this.assert(
      expression
      , 'expected ' + msgObj + ' to ' + behavior + ' by ' + delta
      , 'expected ' + msgObj + ' to not ' + behavior + ' by ' + delta
    );
  }

  Assertion.addMethod('by', assertDelta);

  /**
   * ### .extensible
   *
   * Asserts that the target is extensible, which means that new properties can
   * be added to it. Primitives are never extensible.
   *
   *     expect({a: 1}).to.be.extensible;
   *
   * Add `.not` earlier in the chain to negate `.extensible`.
   *
   *     var nonExtensibleObject = Object.preventExtensions({})
   *       , sealedObject = Object.seal({})
   *       , frozenObject = Object.freeze({});
   *
   *     expect(nonExtensibleObject).to.not.be.extensible;
   *     expect(sealedObject).to.not.be.extensible;
   *     expect(frozenObject).to.not.be.extensible;
   *     expect(1).to.not.be.extensible;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(1, 'nooo why fail??').to.be.extensible;
   *
   * @name extensible
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('extensible', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
    // The following provides ES6 behavior for ES5 environments.

    var isExtensible = obj === Object(obj) && Object.isExtensible(obj);

    this.assert(
      isExtensible
      , 'expected #{this} to be extensible'
      , 'expected #{this} to not be extensible'
    );
  });

  /**
   * ### .sealed
   *
   * Asserts that the target is sealed, which means that new properties can't be
   * added to it, and its existing properties can't be reconfigured or deleted.
   * However, it's possible that its existing properties can still be reassigned
   * to different values. Primitives are always sealed.
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     expect(sealedObject).to.be.sealed;
   *     expect(frozenObject).to.be.sealed;
   *     expect(1).to.be.sealed;
   *
   * Add `.not` earlier in the chain to negate `.sealed`.
   *
   *     expect({a: 1}).to.not.be.sealed;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.be.sealed;
   *
   * @name sealed
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('sealed', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
    // The following provides ES6 behavior for ES5 environments.

    var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;

    this.assert(
      isSealed
      , 'expected #{this} to be sealed'
      , 'expected #{this} to not be sealed'
    );
  });

  /**
   * ### .frozen
   *
   * Asserts that the target is frozen, which means that new properties can't be
   * added to it, and its existing properties can't be reassigned to different
   * values, reconfigured, or deleted. Primitives are always frozen.
   *
   *     var frozenObject = Object.freeze({});
   *
   *     expect(frozenObject).to.be.frozen;
   *     expect(1).to.be.frozen;
   *
   * Add `.not` earlier in the chain to negate `.frozen`.
   *
   *     expect({a: 1}).to.not.be.frozen;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.be.frozen;
   *
   * @name frozen
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('frozen', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
    // The following provides ES6 behavior for ES5 environments.

    var isFrozen = obj === Object(obj) ? Object.isFrozen(obj) : true;

    this.assert(
      isFrozen
      , 'expected #{this} to be frozen'
      , 'expected #{this} to not be frozen'
    );
  });

  /**
   * ### .finite
   *
   * Asserts that the target is a number, and isn't `NaN` or positive/negative
   * `Infinity`.
   *
   *     expect(1).to.be.finite;
   *
   * Add `.not` earlier in the chain to negate `.finite`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either isn't a number, or that it's `NaN`, or
   * that it's positive `Infinity`, or that it's negative `Infinity`. It's often
   * best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to be a number, it's often best to assert
   * that it's the expected type, rather than asserting that it isn't one of
   * many unexpected types.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.finite; // Not recommended
   *
   * When the target is expected to be `NaN`, it's often best to assert exactly
   * that.
   *
   *     expect(NaN).to.be.NaN; // Recommended
   *     expect(NaN).to.not.be.finite; // Not recommended
   *
   * When the target is expected to be positive infinity, it's often best to
   * assert exactly that.
   *
   *     expect(Infinity).to.equal(Infinity); // Recommended
   *     expect(Infinity).to.not.be.finite; // Not recommended
   *
   * When the target is expected to be negative infinity, it's often best to
   * assert exactly that.
   *
   *     expect(-Infinity).to.equal(-Infinity); // Recommended
   *     expect(-Infinity).to.not.be.finite; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect('foo', 'nooo why fail??').to.be.finite;
   *
   * @name finite
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('finite', function(msg) {
    var obj = flag(this, 'object');

    this.assert(
        typeof obj === 'number' && isFinite(obj)
      , 'expected #{this} to be a finite number'
      , 'expected #{this} to not be a finite number'
    );
  });
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/interface/assert.js":
/*!********************************************************!*\
  !*** ./node_modules/chai/lib/chai/interface/assert.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  /*!
   * Chai dependencies.
   */

  var Assertion = chai.Assertion
    , flag = util.flag;

  /*!
   * Module export.
   */

  /**
   * ### assert(expression, message)
   *
   * Write your own test expressions.
   *
   *     assert('foo' !== 'bar', 'foo is not bar');
   *     assert(Array.isArray([]), 'empty arrays are arrays');
   *
   * @param {Mixed} expression to test for truthiness
   * @param {String} message to display on error
   * @name assert
   * @namespace Assert
   * @api public
   */

  var assert = chai.assert = function (express, errmsg) {
    var test = new Assertion(null, null, chai.assert, true);
    test.assert(
        express
      , errmsg
      , '[ negation message unavailable ]'
    );
  };

  /**
   * ### .fail([message])
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure. Node.js `assert` module-compatible.
   *
   *     assert.fail();
   *     assert.fail("custom error message");
   *     assert.fail(1, 2);
   *     assert.fail(1, 2, "custom error message");
   *     assert.fail(1, 2, "custom error message", ">");
   *     assert.fail(1, 2, undefined, ">");
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace Assert
   * @api public
   */

  assert.fail = function (actual, expected, message, operator) {
    if (arguments.length < 2) {
        // Comply with Node's fail([message]) interface

        message = actual;
        actual = undefined;
    }

    message = message || 'assert.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
    }, assert.fail);
  };

  /**
   * ### .isOk(object, [message])
   *
   * Asserts that `object` is truthy.
   *
   *     assert.isOk('everything', 'everything is ok');
   *     assert.isOk(false, 'this will fail');
   *
   * @name isOk
   * @alias ok
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isOk = function (val, msg) {
    new Assertion(val, msg, assert.isOk, true).is.ok;
  };

  /**
   * ### .isNotOk(object, [message])
   *
   * Asserts that `object` is falsy.
   *
   *     assert.isNotOk('everything', 'this will fail');
   *     assert.isNotOk(false, 'this will pass');
   *
   * @name isNotOk
   * @alias notOk
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotOk = function (val, msg) {
    new Assertion(val, msg, assert.isNotOk, true).is.not.ok;
  };

  /**
   * ### .equal(actual, expected, [message])
   *
   * Asserts non-strict equality (`==`) of `actual` and `expected`.
   *
   *     assert.equal(3, '3', '== coerces values to strings');
   *
   * @name equal
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.equal = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.equal, true);

    test.assert(
        exp == flag(test, 'object')
      , 'expected #{this} to equal #{exp}'
      , 'expected #{this} to not equal #{act}'
      , exp
      , act
      , true
    );
  };

  /**
   * ### .notEqual(actual, expected, [message])
   *
   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
   *
   *     assert.notEqual(3, 4, 'these numbers are not equal');
   *
   * @name notEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notEqual = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.notEqual, true);

    test.assert(
        exp != flag(test, 'object')
      , 'expected #{this} to not equal #{exp}'
      , 'expected #{this} to equal #{act}'
      , exp
      , act
      , true
    );
  };

  /**
   * ### .strictEqual(actual, expected, [message])
   *
   * Asserts strict equality (`===`) of `actual` and `expected`.
   *
   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
   *
   * @name strictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.strictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.strictEqual, true).to.equal(exp);
  };

  /**
   * ### .notStrictEqual(actual, expected, [message])
   *
   * Asserts strict inequality (`!==`) of `actual` and `expected`.
   *
   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
   *
   * @name notStrictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notStrictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.notStrictEqual, true).to.not.equal(exp);
  };

  /**
   * ### .deepEqual(actual, expected, [message])
   *
   * Asserts that `actual` is deeply equal to `expected`.
   *
   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
   *
   * @name deepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @alias deepStrictEqual
   * @namespace Assert
   * @api public
   */

  assert.deepEqual = assert.deepStrictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.deepEqual, true).to.eql(exp);
  };

  /**
   * ### .notDeepEqual(actual, expected, [message])
   *
   * Assert that `actual` is not deeply equal to `expected`.
   *
   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
   *
   * @name notDeepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.notDeepEqual, true).to.not.eql(exp);
  };

   /**
   * ### .isAbove(valueToCheck, valueToBeAbove, [message])
   *
   * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`.
   *
   *     assert.isAbove(5, 2, '5 is strictly greater than 2');
   *
   * @name isAbove
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAbove
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAbove = function (val, abv, msg) {
    new Assertion(val, msg, assert.isAbove, true).to.be.above(abv);
  };

   /**
   * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
   *
   * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`.
   *
   *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
   *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
   *
   * @name isAtLeast
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAtLeast
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAtLeast = function (val, atlst, msg) {
    new Assertion(val, msg, assert.isAtLeast, true).to.be.least(atlst);
  };

   /**
   * ### .isBelow(valueToCheck, valueToBeBelow, [message])
   *
   * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`.
   *
   *     assert.isBelow(3, 6, '3 is strictly less than 6');
   *
   * @name isBelow
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeBelow
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isBelow = function (val, blw, msg) {
    new Assertion(val, msg, assert.isBelow, true).to.be.below(blw);
  };

   /**
   * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
   *
   * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`.
   *
   *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
   *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
   *
   * @name isAtMost
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAtMost
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAtMost = function (val, atmst, msg) {
    new Assertion(val, msg, assert.isAtMost, true).to.be.most(atmst);
  };

  /**
   * ### .isTrue(value, [message])
   *
   * Asserts that `value` is true.
   *
   *     var teaServed = true;
   *     assert.isTrue(teaServed, 'the tea has been served');
   *
   * @name isTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isTrue = function (val, msg) {
    new Assertion(val, msg, assert.isTrue, true).is['true'];
  };

  /**
   * ### .isNotTrue(value, [message])
   *
   * Asserts that `value` is not true.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotTrue(tea, 'great, time for tea!');
   *
   * @name isNotTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotTrue = function (val, msg) {
    new Assertion(val, msg, assert.isNotTrue, true).to.not.equal(true);
  };

  /**
   * ### .isFalse(value, [message])
   *
   * Asserts that `value` is false.
   *
   *     var teaServed = false;
   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
   *
   * @name isFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFalse = function (val, msg) {
    new Assertion(val, msg, assert.isFalse, true).is['false'];
  };

  /**
   * ### .isNotFalse(value, [message])
   *
   * Asserts that `value` is not false.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotFalse(tea, 'great, time for tea!');
   *
   * @name isNotFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotFalse = function (val, msg) {
    new Assertion(val, msg, assert.isNotFalse, true).to.not.equal(false);
  };

  /**
   * ### .isNull(value, [message])
   *
   * Asserts that `value` is null.
   *
   *     assert.isNull(err, 'there was no error');
   *
   * @name isNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNull = function (val, msg) {
    new Assertion(val, msg, assert.isNull, true).to.equal(null);
  };

  /**
   * ### .isNotNull(value, [message])
   *
   * Asserts that `value` is not null.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotNull(tea, 'great, time for tea!');
   *
   * @name isNotNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotNull = function (val, msg) {
    new Assertion(val, msg, assert.isNotNull, true).to.not.equal(null);
  };

  /**
   * ### .isNaN
   *
   * Asserts that value is NaN.
   *
   *     assert.isNaN(NaN, 'NaN is NaN');
   *
   * @name isNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNaN = function (val, msg) {
    new Assertion(val, msg, assert.isNaN, true).to.be.NaN;
  };

  /**
   * ### .isNotNaN
   *
   * Asserts that value is not NaN.
   *
   *     assert.isNotNaN(4, '4 is not NaN');
   *
   * @name isNotNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
  assert.isNotNaN = function (val, msg) {
    new Assertion(val, msg, assert.isNotNaN, true).not.to.be.NaN;
  };

  /**
   * ### .exists
   *
   * Asserts that the target is neither `null` nor `undefined`.
   *
   *     var foo = 'hi';
   *
   *     assert.exists(foo, 'foo is neither `null` nor `undefined`');
   *
   * @name exists
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.exists = function (val, msg) {
    new Assertion(val, msg, assert.exists, true).to.exist;
  };

  /**
   * ### .notExists
   *
   * Asserts that the target is either `null` or `undefined`.
   *
   *     var bar = null
   *       , baz;
   *
   *     assert.notExists(bar);
   *     assert.notExists(baz, 'baz is either null or undefined');
   *
   * @name notExists
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notExists = function (val, msg) {
    new Assertion(val, msg, assert.notExists, true).to.not.exist;
  };

  /**
   * ### .isUndefined(value, [message])
   *
   * Asserts that `value` is `undefined`.
   *
   *     var tea;
   *     assert.isUndefined(tea, 'no tea defined');
   *
   * @name isUndefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isUndefined = function (val, msg) {
    new Assertion(val, msg, assert.isUndefined, true).to.equal(undefined);
  };

  /**
   * ### .isDefined(value, [message])
   *
   * Asserts that `value` is not `undefined`.
   *
   *     var tea = 'cup of chai';
   *     assert.isDefined(tea, 'tea has been defined');
   *
   * @name isDefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isDefined = function (val, msg) {
    new Assertion(val, msg, assert.isDefined, true).to.not.equal(undefined);
  };

  /**
   * ### .isFunction(value, [message])
   *
   * Asserts that `value` is a function.
   *
   *     function serveTea() { return 'cup of tea'; };
   *     assert.isFunction(serveTea, 'great, we can have tea now');
   *
   * @name isFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFunction = function (val, msg) {
    new Assertion(val, msg, assert.isFunction, true).to.be.a('function');
  };

  /**
   * ### .isNotFunction(value, [message])
   *
   * Asserts that `value` is _not_ a function.
   *
   *     var serveTea = [ 'heat', 'pour', 'sip' ];
   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
   *
   * @name isNotFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotFunction = function (val, msg) {
    new Assertion(val, msg, assert.isNotFunction, true).to.not.be.a('function');
  };

  /**
   * ### .isObject(value, [message])
   *
   * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
   * _The assertion does not match subclassed objects._
   *
   *     var selection = { name: 'Chai', serve: 'with spices' };
   *     assert.isObject(selection, 'tea selection is an object');
   *
   * @name isObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isObject = function (val, msg) {
    new Assertion(val, msg, assert.isObject, true).to.be.a('object');
  };

  /**
   * ### .isNotObject(value, [message])
   *
   * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
   *
   *     var selection = 'chai'
   *     assert.isNotObject(selection, 'tea selection is not an object');
   *     assert.isNotObject(null, 'null is not an object');
   *
   * @name isNotObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotObject = function (val, msg) {
    new Assertion(val, msg, assert.isNotObject, true).to.not.be.a('object');
  };

  /**
   * ### .isArray(value, [message])
   *
   * Asserts that `value` is an array.
   *
   *     var menu = [ 'green', 'chai', 'oolong' ];
   *     assert.isArray(menu, 'what kind of tea do we want?');
   *
   * @name isArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isArray = function (val, msg) {
    new Assertion(val, msg, assert.isArray, true).to.be.an('array');
  };

  /**
   * ### .isNotArray(value, [message])
   *
   * Asserts that `value` is _not_ an array.
   *
   *     var menu = 'green|chai|oolong';
   *     assert.isNotArray(menu, 'what kind of tea do we want?');
   *
   * @name isNotArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotArray = function (val, msg) {
    new Assertion(val, msg, assert.isNotArray, true).to.not.be.an('array');
  };

  /**
   * ### .isString(value, [message])
   *
   * Asserts that `value` is a string.
   *
   *     var teaOrder = 'chai';
   *     assert.isString(teaOrder, 'order placed');
   *
   * @name isString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isString = function (val, msg) {
    new Assertion(val, msg, assert.isString, true).to.be.a('string');
  };

  /**
   * ### .isNotString(value, [message])
   *
   * Asserts that `value` is _not_ a string.
   *
   *     var teaOrder = 4;
   *     assert.isNotString(teaOrder, 'order placed');
   *
   * @name isNotString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotString = function (val, msg) {
    new Assertion(val, msg, assert.isNotString, true).to.not.be.a('string');
  };

  /**
   * ### .isNumber(value, [message])
   *
   * Asserts that `value` is a number.
   *
   *     var cups = 2;
   *     assert.isNumber(cups, 'how many cups');
   *
   * @name isNumber
   * @param {Number} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNumber = function (val, msg) {
    new Assertion(val, msg, assert.isNumber, true).to.be.a('number');
  };

  /**
   * ### .isNotNumber(value, [message])
   *
   * Asserts that `value` is _not_ a number.
   *
   *     var cups = '2 cups please';
   *     assert.isNotNumber(cups, 'how many cups');
   *
   * @name isNotNumber
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotNumber = function (val, msg) {
    new Assertion(val, msg, assert.isNotNumber, true).to.not.be.a('number');
  };

   /**
   * ### .isFinite(value, [message])
   *
   * Asserts that `value` is a finite number. Unlike `.isNumber`, this will fail for `NaN` and `Infinity`.
   *
   *     var cups = 2;
   *     assert.isFinite(cups, 'how many cups');
   *
   *     assert.isFinite(NaN); // throws
   *
   * @name isFinite
   * @param {Number} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFinite = function (val, msg) {
    new Assertion(val, msg, assert.isFinite, true).to.be.finite;
  };

  /**
   * ### .isBoolean(value, [message])
   *
   * Asserts that `value` is a boolean.
   *
   *     var teaReady = true
   *       , teaServed = false;
   *
   *     assert.isBoolean(teaReady, 'is the tea ready');
   *     assert.isBoolean(teaServed, 'has tea been served');
   *
   * @name isBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isBoolean = function (val, msg) {
    new Assertion(val, msg, assert.isBoolean, true).to.be.a('boolean');
  };

  /**
   * ### .isNotBoolean(value, [message])
   *
   * Asserts that `value` is _not_ a boolean.
   *
   *     var teaReady = 'yep'
   *       , teaServed = 'nope';
   *
   *     assert.isNotBoolean(teaReady, 'is the tea ready');
   *     assert.isNotBoolean(teaServed, 'has tea been served');
   *
   * @name isNotBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotBoolean = function (val, msg) {
    new Assertion(val, msg, assert.isNotBoolean, true).to.not.be.a('boolean');
  };

  /**
   * ### .typeOf(value, name, [message])
   *
   * Asserts that `value`'s type is `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
   *     assert.typeOf('tea', 'string', 'we have a string');
   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
   *     assert.typeOf(null, 'null', 'we have a null');
   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
   *
   * @name typeOf
   * @param {Mixed} value
   * @param {String} name
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.typeOf = function (val, type, msg) {
    new Assertion(val, msg, assert.typeOf, true).to.be.a(type);
  };

  /**
   * ### .notTypeOf(value, name, [message])
   *
   * Asserts that `value`'s type is _not_ `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
   *
   * @name notTypeOf
   * @param {Mixed} value
   * @param {String} typeof name
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notTypeOf = function (val, type, msg) {
    new Assertion(val, msg, assert.notTypeOf, true).to.not.be.a(type);
  };

  /**
   * ### .instanceOf(object, constructor, [message])
   *
   * Asserts that `value` is an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new Tea('chai');
   *
   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
   *
   * @name instanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.instanceOf = function (val, type, msg) {
    new Assertion(val, msg, assert.instanceOf, true).to.be.instanceOf(type);
  };

  /**
   * ### .notInstanceOf(object, constructor, [message])
   *
   * Asserts `value` is not an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new String('chai');
   *
   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
   *
   * @name notInstanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notInstanceOf = function (val, type, msg) {
    new Assertion(val, msg, assert.notInstanceOf, true)
      .to.not.be.instanceOf(type);
  };

  /**
   * ### .include(haystack, needle, [message])
   *
   * Asserts that `haystack` includes `needle`. Can be used to assert the
   * inclusion of a value in an array, a substring in a string, or a subset of
   * properties in an object.
   *
   *     assert.include([1,2,3], 2, 'array contains value');
   *     assert.include('foobar', 'foo', 'string contains substring');
   *     assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property');
   *
   * Strict equality (===) is used. When asserting the inclusion of a value in
   * an array, the array is searched for an element that's strictly equal to the
   * given value. When asserting a subset of properties in an object, the object
   * is searched for the given property keys, checking that each one is present
   * and strictly equal to the given property value. For instance:
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.include([obj1, obj2], obj1);
   *     assert.include({foo: obj1, bar: obj2}, {foo: obj1});
   *     assert.include({foo: obj1, bar: obj2}, {foo: obj1, bar: obj2});
   *
   * @name include
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.include = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.include, true).include(inc);
  };

  /**
   * ### .notInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` does not include `needle`. Can be used to assert
   * the absence of a value in an array, a substring in a string, or a subset of
   * properties in an object.
   *
   *     assert.notInclude([1,2,3], 4, "array doesn't contain value");
   *     assert.notInclude('foobar', 'baz', "string doesn't contain substring");
   *     assert.notInclude({ foo: 'bar', hello: 'universe' }, { foo: 'baz' }, 'object doesn't contain property');
   *
   * Strict equality (===) is used. When asserting the absence of a value in an
   * array, the array is searched to confirm the absence of an element that's
   * strictly equal to the given value. When asserting a subset of properties in
   * an object, the object is searched to confirm that at least one of the given
   * property keys is either not present or not strictly equal to the given
   * property value. For instance:
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.notInclude([obj1, obj2], {a: 1});
   *     assert.notInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
   *     assert.notInclude({foo: obj1, bar: obj2}, {foo: obj1, bar: {b: 2}});
   *
   * @name notInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notInclude, true).not.include(inc);
  };

  /**
   * ### .deepInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` includes `needle`. Can be used to assert the
   * inclusion of a value in an array or a subset of properties in an object.
   * Deep equality is used.
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.deepInclude([obj1, obj2], {a: 1});
   *     assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
   *     assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 2}});
   *
   * @name deepInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.deepInclude, true).deep.include(inc);
  };

  /**
   * ### .notDeepInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` does not include `needle`. Can be used to assert
   * the absence of a value in an array or a subset of properties in an object.
   * Deep equality is used.
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.notDeepInclude([obj1, obj2], {a: 9});
   *     assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 9}});
   *     assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 9}});
   *
   * @name notDeepInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepInclude, true).not.deep.include(inc);
  };

  /**
   * ### .nestedInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an
   * object.
   * Enables the use of dot- and bracket-notation for referencing nested
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   *
   *     assert.nestedInclude({'.a': {'b': 'x'}}, {'\\.a.[b]': 'x'});
   *     assert.nestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'x'});
   *
   * @name nestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.nestedInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.nestedInclude, true).nested.include(inc);
  };

  /**
   * ### .notNestedInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' does not include 'needle'.
   * Can be used to assert the absence of a subset of properties in an
   * object.
   * Enables the use of dot- and bracket-notation for referencing nested
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   *
   *     assert.notNestedInclude({'.a': {'b': 'x'}}, {'\\.a.b': 'y'});
   *     assert.notNestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'y'});
   *
   * @name notNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notNestedInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notNestedInclude, true)
      .not.nested.include(inc);
  };

  /**
   * ### .deepNestedInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an
   * object while checking for deep equality.
   * Enables the use of dot- and bracket-notation for referencing nested
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   *
   *     assert.deepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {x: 1}});
   *     assert.deepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {x: 1}});
   *
   * @name deepNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepNestedInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.deepNestedInclude, true)
      .deep.nested.include(inc);
  };

  /**
   * ### .notDeepNestedInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' does not include 'needle'.
   * Can be used to assert the absence of a subset of properties in an
   * object while checking for deep equality.
   * Enables the use of dot- and bracket-notation for referencing nested
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   *
   *     assert.notDeepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {y: 1}})
   *     assert.notDeepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {y: 2}});
   *
   * @name notDeepNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepNestedInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepNestedInclude, true)
      .not.deep.nested.include(inc);
  };

  /**
   * ### .ownInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an
   * object while ignoring inherited properties.
   *
   *     assert.ownInclude({ a: 1 }, { a: 1 });
   *
   * @name ownInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.ownInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.ownInclude, true).own.include(inc);
  };

  /**
   * ### .notOwnInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the absence of a subset of properties in an
   * object while ignoring inherited properties.
   *
   *     Object.prototype.b = 2;
   *
   *     assert.notOwnInclude({ a: 1 }, { b: 2 });
   *
   * @name notOwnInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notOwnInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.notOwnInclude, true).not.own.include(inc);
  };

  /**
   * ### .deepOwnInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an
   * object while ignoring inherited properties and checking for deep equality.
   *
   *      assert.deepOwnInclude({a: {b: 2}}, {a: {b: 2}});
   *
   * @name deepOwnInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepOwnInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.deepOwnInclude, true)
      .deep.own.include(inc);
  };

   /**
   * ### .notDeepOwnInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the absence of a subset of properties in an
   * object while ignoring inherited properties and checking for deep equality.
   *
   *      assert.notDeepOwnInclude({a: {b: 2}}, {a: {c: 3}});
   *
   * @name notDeepOwnInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepOwnInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepOwnInclude, true)
      .not.deep.own.include(inc);
  };

  /**
   * ### .match(value, regexp, [message])
   *
   * Asserts that `value` matches the regular expression `regexp`.
   *
   *     assert.match('foobar', /^foo/, 'regexp matches');
   *
   * @name match
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.match = function (exp, re, msg) {
    new Assertion(exp, msg, assert.match, true).to.match(re);
  };

  /**
   * ### .notMatch(value, regexp, [message])
   *
   * Asserts that `value` does not match the regular expression `regexp`.
   *
   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
   *
   * @name notMatch
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notMatch = function (exp, re, msg) {
    new Assertion(exp, msg, assert.notMatch, true).to.not.match(re);
  };

  /**
   * ### .property(object, property, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property`.
   *
   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
   *     assert.property({ tea: { green: 'matcha' }}, 'toString');
   *
   * @name property
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.property = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.property, true).to.have.property(prop);
  };

  /**
   * ### .notProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property`.
   *
   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
   *
   * @name notProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notProperty, true)
      .to.not.have.property(prop);
  };

  /**
   * ### .propertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property` with a value given by `value`. Uses a strict equality check
   * (===).
   *
   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
   *
   * @name propertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.propertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.propertyVal, true)
      .to.have.property(prop, val);
  };

  /**
   * ### .notPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property` with value given by `value`. Uses a strict equality check
   * (===).
   *
   *     assert.notPropertyVal({ tea: 'is good' }, 'tea', 'is bad');
   *     assert.notPropertyVal({ tea: 'is good' }, 'coffee', 'is good');
   *
   * @name notPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notPropertyVal, true)
      .to.not.have.property(prop, val);
  };

  /**
   * ### .deepPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property` with a value given by `value`. Uses a deep equality check.
   *
   *     assert.deepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
   *
   * @name deepPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.deepPropertyVal, true)
      .to.have.deep.property(prop, val);
  };

  /**
   * ### .notDeepPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property` with value given by `value`. Uses a deep equality check.
   *
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
   *
   * @name notDeepPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notDeepPropertyVal, true)
      .to.not.have.deep.property(prop, val);
  };

  /**
   * ### .ownProperty(object, property, [message])
   *
   * Asserts that `object` has a direct property named by `property`. Inherited
   * properties aren't checked.
   *
   *     assert.ownProperty({ tea: { green: 'matcha' }}, 'tea');
   *
   * @name ownProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.ownProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.ownProperty, true)
      .to.have.own.property(prop);
  };

  /**
   * ### .notOwnProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by
   * `property`. Inherited properties aren't checked.
   *
   *     assert.notOwnProperty({ tea: { green: 'matcha' }}, 'coffee');
   *     assert.notOwnProperty({}, 'toString');
   *
   * @name notOwnProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.notOwnProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notOwnProperty, true)
      .to.not.have.own.property(prop);
  };

  /**
   * ### .ownPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct property named by `property` and a value
   * equal to the provided `value`. Uses a strict equality check (===).
   * Inherited properties aren't checked.
   *
   *     assert.ownPropertyVal({ coffee: 'is good'}, 'coffee', 'is good');
   *
   * @name ownPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.ownPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.ownPropertyVal, true)
      .to.have.own.property(prop, value);
  };

  /**
   * ### .notOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by `property`
   * with a value equal to the provided `value`. Uses a strict equality check
   * (===). Inherited properties aren't checked.
   *
   *     assert.notOwnPropertyVal({ tea: 'is better'}, 'tea', 'is worse');
   *     assert.notOwnPropertyVal({}, 'toString', Object.prototype.toString);
   *
   * @name notOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.notOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.notOwnPropertyVal, true)
      .to.not.have.own.property(prop, value);
  };

  /**
   * ### .deepOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct property named by `property` and a value
   * equal to the provided `value`. Uses a deep equality check. Inherited
   * properties aren't checked.
   *
   *     assert.deepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
   *
   * @name deepOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.deepOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.deepOwnPropertyVal, true)
      .to.have.deep.own.property(prop, value);
  };

  /**
   * ### .notDeepOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by `property`
   * with a value equal to the provided `value`. Uses a deep equality check.
   * Inherited properties aren't checked.
   *
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
   *     assert.notDeepOwnPropertyVal({}, 'toString', Object.prototype.toString);
   *
   * @name notDeepOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.notDeepOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.notDeepOwnPropertyVal, true)
      .to.not.have.deep.own.property(prop, value);
  };

  /**
   * ### .nestedProperty(object, property, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property`, which can be a string using dot- and bracket-notation for
   * nested reference.
   *
   *     assert.nestedProperty({ tea: { green: 'matcha' }}, 'tea.green');
   *
   * @name nestedProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.nestedProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.nestedProperty, true)
      .to.have.nested.property(prop);
  };

  /**
   * ### .notNestedProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property`, which
   * can be a string using dot- and bracket-notation for nested reference. The
   * property cannot exist on the object nor anywhere in its prototype chain.
   *
   *     assert.notNestedProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
   *
   * @name notNestedProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notNestedProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notNestedProperty, true)
      .to.not.have.nested.property(prop);
  };

  /**
   * ### .nestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with value given
   * by `value`. `property` can use dot- and bracket-notation for nested
   * reference. Uses a strict equality check (===).
   *
   *     assert.nestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
   *
   * @name nestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.nestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.nestedPropertyVal, true)
      .to.have.nested.property(prop, val);
  };

  /**
   * ### .notNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property` with
   * value given by `value`. `property` can use dot- and bracket-notation for
   * nested reference. Uses a strict equality check (===).
   *
   *     assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
   *     assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'coffee.green', 'matcha');
   *
   * @name notNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notNestedPropertyVal, true)
      .to.not.have.nested.property(prop, val);
  };

  /**
   * ### .deepNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with a value given
   * by `value`. `property` can use dot- and bracket-notation for nested
   * reference. Uses a deep equality check.
   *
   *     assert.deepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yum' });
   *
   * @name deepNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.deepNestedPropertyVal, true)
      .to.have.deep.nested.property(prop, val);
  };

  /**
   * ### .notDeepNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property` with
   * value given by `value`. `property` can use dot- and bracket-notation for
   * nested reference. Uses a deep equality check.
   *
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { oolong: 'yum' });
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yuck' });
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.black', { matcha: 'yum' });
   *
   * @name notDeepNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notDeepNestedPropertyVal, true)
      .to.not.have.deep.nested.property(prop, val);
  }

  /**
   * ### .lengthOf(object, length, [message])
   *
   * Asserts that `object` has a `length` or `size` with the expected value.
   *
   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
   *     assert.lengthOf('foobar', 6, 'string has length of 6');
   *     assert.lengthOf(new Set([1,2,3]), 3, 'set has size of 3');
   *     assert.lengthOf(new Map([['a',1],['b',2],['c',3]]), 3, 'map has size of 3');
   *
   * @name lengthOf
   * @param {Mixed} object
   * @param {Number} length
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.lengthOf = function (exp, len, msg) {
    new Assertion(exp, msg, assert.lengthOf, true).to.have.lengthOf(len);
  };

  /**
   * ### .hasAnyKeys(object, [keys], [message])
   *
   * Asserts that `object` has at least one of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'iDontExist', 'baz']);
   *     assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, iDontExist: 99, baz: 1337});
   *     assert.hasAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.hasAnyKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{foo: 'bar'}, 'anotherKey']);
   *
   * @name hasAnyKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAnyKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAnyKeys, true).to.have.any.keys(keys);
  }

  /**
   * ### .hasAllKeys(object, [keys], [message])
   *
   * Asserts that `object` has all and only all of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
   *     assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337]);
   *     assert.hasAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.hasAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
   *
   * @name hasAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAllKeys, true).to.have.all.keys(keys);
  }

  /**
   * ### .containsAllKeys(object, [keys], [message])
   *
   * Asserts that `object` has all of the `keys` provided but may have more keys not listed.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'baz']);
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, baz: 1337});
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337});
   *     assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}]);
   *     assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}]);
   *     assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
   *
   * @name containsAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.containsAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.containsAllKeys, true)
      .to.contain.all.keys(keys);
  }

  /**
   * ### .doesNotHaveAnyKeys(object, [keys], [message])
   *
   * Asserts that `object` has none of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
   *     assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
   *     assert.doesNotHaveAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
   *     assert.doesNotHaveAnyKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
   *
   * @name doesNotHaveAnyKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAnyKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAnyKeys, true)
      .to.not.have.any.keys(keys);
  }

  /**
   * ### .doesNotHaveAllKeys(object, [keys], [message])
   *
   * Asserts that `object` does not have at least one of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
   *     assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
   *     assert.doesNotHaveAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
   *     assert.doesNotHaveAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
   *
   * @name doesNotHaveAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAllKeys, true)
      .to.not.have.all.keys(keys);
  }

  /**
   * ### .hasAnyDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` has at least one of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), [{one: 'one'}, {two: 'two'}]);
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {three: 'three'}]);
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
   *
   * @name doesNotHaveAllKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAnyDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAnyDeepKeys, true)
      .to.have.any.deep.keys(keys);
  }

 /**
   * ### .hasAllDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` has all and only all of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne']]), {one: 'one'});
   *     assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
   *     assert.hasAllDeepKeys(new Set([{one: 'one'}]), {one: 'one'});
   *     assert.hasAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
   *
   * @name hasAllDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAllDeepKeys, true)
      .to.have.all.deep.keys(keys);
  }

 /**
   * ### .containsAllDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` contains all of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
   *     assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
   *     assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
   *     assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
   *
   * @name containsAllDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.containsAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.containsAllDeepKeys, true)
      .to.contain.all.deep.keys(keys);
  }

 /**
   * ### .doesNotHaveAnyDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` has none of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
   *     assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
   *     assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
   *     assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
   *
   * @name doesNotHaveAnyDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAnyDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAnyDeepKeys, true)
      .to.not.have.any.deep.keys(keys);
  }

 /**
   * ### .doesNotHaveAllDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` does not have at least one of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
   *     assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {one: 'one'}]);
   *     assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
   *     assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {fifty: 'fifty'}]);
   *
   * @name doesNotHaveAllDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAllDeepKeys, true)
      .to.not.have.all.deep.keys(keys);
  }

 /**
   * ### .throws(fn, [errorLike/string/regexp], [string/regexp], [message])
   *
   * If `errorLike` is an `Error` constructor, asserts that `fn` will throw an error that is an
   * instance of `errorLike`.
   * If `errorLike` is an `Error` instance, asserts that the error thrown is the same
   * instance as `errorLike`.
   * If `errMsgMatcher` is provided, it also asserts that the error thrown will have a
   * message matching `errMsgMatcher`.
   *
   *     assert.throws(fn, 'Error thrown must have this msg');
   *     assert.throws(fn, /Error thrown must have a msg that matches this/);
   *     assert.throws(fn, ReferenceError);
   *     assert.throws(fn, errorInstance);
   *     assert.throws(fn, ReferenceError, 'Error thrown must be a ReferenceError and have this msg');
   *     assert.throws(fn, errorInstance, 'Error thrown must be the same errorInstance and have this msg');
   *     assert.throws(fn, ReferenceError, /Error thrown must be a ReferenceError and match this/);
   *     assert.throws(fn, errorInstance, /Error thrown must be the same errorInstance and match this/);
   *
   * @name throws
   * @alias throw
   * @alias Throw
   * @param {Function} fn
   * @param {ErrorConstructor|Error} errorLike
   * @param {RegExp|String} errMsgMatcher
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Assert
   * @api public
   */

  assert.throws = function (fn, errorLike, errMsgMatcher, msg) {
    if ('string' === typeof errorLike || errorLike instanceof RegExp) {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    var assertErr = new Assertion(fn, msg, assert.throws, true)
      .to.throw(errorLike, errMsgMatcher);
    return flag(assertErr, 'object');
  };

  /**
   * ### .doesNotThrow(fn, [errorLike/string/regexp], [string/regexp], [message])
   *
   * If `errorLike` is an `Error` constructor, asserts that `fn` will _not_ throw an error that is an
   * instance of `errorLike`.
   * If `errorLike` is an `Error` instance, asserts that the error thrown is _not_ the same
   * instance as `errorLike`.
   * If `errMsgMatcher` is provided, it also asserts that the error thrown will _not_ have a
   * message matching `errMsgMatcher`.
   *
   *     assert.doesNotThrow(fn, 'Any Error thrown must not have this message');
   *     assert.doesNotThrow(fn, /Any Error thrown must not match this/);
   *     assert.doesNotThrow(fn, Error);
   *     assert.doesNotThrow(fn, errorInstance);
   *     assert.doesNotThrow(fn, Error, 'Error must not have this message');
   *     assert.doesNotThrow(fn, errorInstance, 'Error must not have this message');
   *     assert.doesNotThrow(fn, Error, /Error must not match this/);
   *     assert.doesNotThrow(fn, errorInstance, /Error must not match this/);
   *
   * @name doesNotThrow
   * @param {Function} fn
   * @param {ErrorConstructor} errorLike
   * @param {RegExp|String} errMsgMatcher
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Assert
   * @api public
   */

  assert.doesNotThrow = function (fn, errorLike, errMsgMatcher, msg) {
    if ('string' === typeof errorLike || errorLike instanceof RegExp) {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    new Assertion(fn, msg, assert.doesNotThrow, true)
      .to.not.throw(errorLike, errMsgMatcher);
  };

  /**
   * ### .operator(val1, operator, val2, [message])
   *
   * Compares two values using `operator`.
   *
   *     assert.operator(1, '<', 2, 'everything is ok');
   *     assert.operator(1, '>', 2, 'this will fail');
   *
   * @name operator
   * @param {Mixed} val1
   * @param {String} operator
   * @param {Mixed} val2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.operator = function (val, operator, val2, msg) {
    var ok;
    switch(operator) {
      case '==':
        ok = val == val2;
        break;
      case '===':
        ok = val === val2;
        break;
      case '>':
        ok = val > val2;
        break;
      case '>=':
        ok = val >= val2;
        break;
      case '<':
        ok = val < val2;
        break;
      case '<=':
        ok = val <= val2;
        break;
      case '!=':
        ok = val != val2;
        break;
      case '!==':
        ok = val !== val2;
        break;
      default:
        msg = msg ? msg + ': ' : msg;
        throw new chai.AssertionError(
          msg + 'Invalid operator "' + operator + '"',
          undefined,
          assert.operator
        );
    }
    var test = new Assertion(ok, msg, assert.operator, true);
    test.assert(
        true === flag(test, 'object')
      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
  };

  /**
   * ### .closeTo(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
   *
   * @name closeTo
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.closeTo = function (act, exp, delta, msg) {
    new Assertion(act, msg, assert.closeTo, true).to.be.closeTo(exp, delta);
  };

  /**
   * ### .approximately(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
   *
   * @name approximately
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.approximately = function (act, exp, delta, msg) {
    new Assertion(act, msg, assert.approximately, true)
      .to.be.approximately(exp, delta);
  };

  /**
   * ### .sameMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in any order. Uses a
   * strict equality check (===).
   *
   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
   *
   * @name sameMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameMembers, true)
      .to.have.same.members(set2);
  }

  /**
   * ### .notSameMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in any order.
   * Uses a strict equality check (===).
   *
   *     assert.notSameMembers([ 1, 2, 3 ], [ 5, 1, 3 ], 'not same members');
   *
   * @name notSameMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameMembers, true)
      .to.not.have.same.members(set2);
  }

  /**
   * ### .sameDeepMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in any order. Uses a
   * deep equality check.
   *
   *     assert.sameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { c: 3 }], 'same deep members');
   *
   * @name sameDeepMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameDeepMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameDeepMembers, true)
      .to.have.same.deep.members(set2);
  }

  /**
   * ### .notSameDeepMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in any order.
   * Uses a deep equality check.
   *
   *     assert.notSameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { f: 5 }], 'not same deep members');
   *
   * @name notSameDeepMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameDeepMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameDeepMembers, true)
      .to.not.have.same.deep.members(set2);
  }

  /**
   * ### .sameOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in the same order.
   * Uses a strict equality check (===).
   *
   *     assert.sameOrderedMembers([ 1, 2, 3 ], [ 1, 2, 3 ], 'same ordered members');
   *
   * @name sameOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameOrderedMembers, true)
      .to.have.same.ordered.members(set2);
  }

  /**
   * ### .notSameOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in the same
   * order. Uses a strict equality check (===).
   *
   *     assert.notSameOrderedMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'not same ordered members');
   *
   * @name notSameOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameOrderedMembers, true)
      .to.not.have.same.ordered.members(set2);
  }

  /**
   * ### .sameDeepOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in the same order.
   * Uses a deep equality check.
   *
   * assert.sameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { c: 3 } ], 'same deep ordered members');
   *
   * @name sameDeepOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameDeepOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameDeepOrderedMembers, true)
      .to.have.same.deep.ordered.members(set2);
  }

  /**
   * ### .notSameDeepOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in the same
   * order. Uses a deep equality check.
   *
   * assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { z: 5 } ], 'not same deep ordered members');
   * assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { c: 3 } ], 'not same deep ordered members');
   *
   * @name notSameDeepOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameDeepOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameDeepOrderedMembers, true)
      .to.not.have.same.deep.ordered.members(set2);
  }

  /**
   * ### .includeMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in any order. Uses a
   * strict equality check (===). Duplicates are ignored.
   *
   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1, 2 ], 'include members');
   *
   * @name includeMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeMembers, true)
      .to.include.members(subset);
  }

  /**
   * ### .notIncludeMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in any order. Uses a
   * strict equality check (===). Duplicates are ignored.
   *
   *     assert.notIncludeMembers([ 1, 2, 3 ], [ 5, 1 ], 'not include members');
   *
   * @name notIncludeMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeMembers, true)
      .to.not.include.members(subset);
  }

  /**
   * ### .includeDeepMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in any order. Uses a deep
   * equality check. Duplicates are ignored.
   *
   *     assert.includeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { b: 2 } ], 'include deep members');
   *
   * @name includeDeepMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeDeepMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeDeepMembers, true)
      .to.include.deep.members(subset);
  }

  /**
   * ### .notIncludeDeepMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in any order. Uses a
   * deep equality check. Duplicates are ignored.
   *
   *     assert.notIncludeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { f: 5 } ], 'not include deep members');
   *
   * @name notIncludeDeepMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeDeepMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeDeepMembers, true)
      .to.not.include.deep.members(subset);
  }

  /**
   * ### .includeOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a strict equality
   * check (===).
   *
   *     assert.includeOrderedMembers([ 1, 2, 3 ], [ 1, 2 ], 'include ordered members');
   *
   * @name includeOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeOrderedMembers, true)
      .to.include.ordered.members(subset);
  }

  /**
   * ### .notIncludeOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a strict equality
   * check (===).
   *
   *     assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 1 ], 'not include ordered members');
   *     assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 3 ], 'not include ordered members');
   *
   * @name notIncludeOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeOrderedMembers, true)
      .to.not.include.ordered.members(subset);
  }

  /**
   * ### .includeDeepOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a deep equality
   * check.
   *
   *     assert.includeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 } ], 'include deep ordered members');
   *
   * @name includeDeepOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeDeepOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeDeepOrderedMembers, true)
      .to.include.deep.ordered.members(subset);
  }

  /**
   * ### .notIncludeDeepOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a deep equality
   * check.
   *
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { f: 5 } ], 'not include deep ordered members');
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 } ], 'not include deep ordered members');
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { c: 3 } ], 'not include deep ordered members');
   *
   * @name notIncludeDeepOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeDeepOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeDeepOrderedMembers, true)
      .to.not.include.deep.ordered.members(subset);
  }

  /**
   * ### .oneOf(inList, list, [message])
   *
   * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
   *
   *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
   *
   * @name oneOf
   * @param {*} inList
   * @param {Array<*>} list
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.oneOf = function (inList, list, msg) {
    new Assertion(inList, msg, assert.oneOf, true).to.be.oneOf(list);
  }

  /**
   * ### .changes(function, object, property, [message])
   *
   * Asserts that a function changes the value of a property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 22 };
   *     assert.changes(fn, obj, 'val');
   *
   * @name changes
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changes = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changes, true).to.change(obj, prop);
  }

   /**
   * ### .changesBy(function, object, property, delta, [message])
   *
   * Asserts that a function changes the value of a property by an amount (delta).
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 2 };
   *     assert.changesBy(fn, obj, 'val', 2);
   *
   * @name changesBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changesBy, true)
      .to.change(obj, prop).by(delta);
  }

   /**
   * ### .doesNotChange(function, object, property, [message])
   *
   * Asserts that a function does not change the value of a property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { console.log('foo'); };
   *     assert.doesNotChange(fn, obj, 'val');
   *
   * @name doesNotChange
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotChange = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotChange, true)
      .to.not.change(obj, prop);
  }

  /**
   * ### .changesButNotBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not change the value of a property or of a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 10 };
   *     assert.changesButNotBy(fn, obj, 'val', 5);
   *
   * @name changesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changesButNotBy, true)
      .to.change(obj, prop).but.not.by(delta);
  }

  /**
   * ### .increases(function, object, property, [message])
   *
   * Asserts that a function increases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 13 };
   *     assert.increases(fn, obj, 'val');
   *
   * @name increases
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increases = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.increases, true)
      .to.increase(obj, prop);
  }

  /**
   * ### .increasesBy(function, object, property, delta, [message])
   *
   * Asserts that a function increases a numeric object property or a function's return value by an amount (delta).
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 10 };
   *     assert.increasesBy(fn, obj, 'val', 10);
   *
   * @name increasesBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increasesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.increasesBy, true)
      .to.increase(obj, prop).by(delta);
  }

  /**
   * ### .doesNotIncrease(function, object, property, [message])
   *
   * Asserts that a function does not increase a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 8 };
   *     assert.doesNotIncrease(fn, obj, 'val');
   *
   * @name doesNotIncrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotIncrease = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotIncrease, true)
      .to.not.increase(obj, prop);
  }

  /**
   * ### .increasesButNotBy(function, object, property, [message])
   *
   * Asserts that a function does not increase a numeric object property or function's return value by an amount (delta).
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 15 };
   *     assert.increasesButNotBy(fn, obj, 'val', 10);
   *
   * @name increasesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increasesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.increasesButNotBy, true)
      .to.increase(obj, prop).but.not.by(delta);
  }

  /**
   * ### .decreases(function, object, property, [message])
   *
   * Asserts that a function decreases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.decreases(fn, obj, 'val');
   *
   * @name decreases
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreases = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.decreases, true)
      .to.decrease(obj, prop);
  }

  /**
   * ### .decreasesBy(function, object, property, delta, [message])
   *
   * Asserts that a function decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val -= 5 };
   *     assert.decreasesBy(fn, obj, 'val', 5);
   *
   * @name decreasesBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreasesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.decreasesBy, true)
      .to.decrease(obj, prop).by(delta);
  }

  /**
   * ### .doesNotDecrease(function, object, property, [message])
   *
   * Asserts that a function does not decreases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 15 };
   *     assert.doesNotDecrease(fn, obj, 'val');
   *
   * @name doesNotDecrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotDecrease = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotDecrease, true)
      .to.not.decrease(obj, prop);
  }

  /**
   * ### .doesNotDecreaseBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.doesNotDecreaseBy(fn, obj, 'val', 1);
   *
   * @name doesNotDecrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotDecreaseBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotDecreaseBy, true)
      .to.not.decrease(obj, prop).by(delta);
  }

  /**
   * ### .decreasesButNotBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.decreasesButNotBy(fn, obj, 'val', 1);
   *
   * @name decreasesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreasesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.decreasesButNotBy, true)
      .to.decrease(obj, prop).but.not.by(delta);
  }

  /*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */

  assert.ifError = function (val) {
    if (val) {
      throw(val);
    }
  };

  /**
   * ### .isExtensible(object)
   *
   * Asserts that `object` is extensible (can have new properties added to it).
   *
   *     assert.isExtensible({});
   *
   * @name isExtensible
   * @alias extensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isExtensible = function (obj, msg) {
    new Assertion(obj, msg, assert.isExtensible, true).to.be.extensible;
  };

  /**
   * ### .isNotExtensible(object)
   *
   * Asserts that `object` is _not_ extensible.
   *
   *     var nonExtensibleObject = Object.preventExtensions({});
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     assert.isNotExtensible(nonExtensibleObject);
   *     assert.isNotExtensible(sealedObject);
   *     assert.isNotExtensible(frozenObject);
   *
   * @name isNotExtensible
   * @alias notExtensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotExtensible = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotExtensible, true).to.not.be.extensible;
  };

  /**
   * ### .isSealed(object)
   *
   * Asserts that `object` is sealed (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.seal({});
   *
   *     assert.isSealed(sealedObject);
   *     assert.isSealed(frozenObject);
   *
   * @name isSealed
   * @alias sealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isSealed = function (obj, msg) {
    new Assertion(obj, msg, assert.isSealed, true).to.be.sealed;
  };

  /**
   * ### .isNotSealed(object)
   *
   * Asserts that `object` is _not_ sealed.
   *
   *     assert.isNotSealed({});
   *
   * @name isNotSealed
   * @alias notSealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotSealed = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotSealed, true).to.not.be.sealed;
  };

  /**
   * ### .isFrozen(object)
   *
   * Asserts that `object` is frozen (cannot have new properties added to it
   * and its existing properties cannot be modified).
   *
   *     var frozenObject = Object.freeze({});
   *     assert.frozen(frozenObject);
   *
   * @name isFrozen
   * @alias frozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isFrozen = function (obj, msg) {
    new Assertion(obj, msg, assert.isFrozen, true).to.be.frozen;
  };

  /**
   * ### .isNotFrozen(object)
   *
   * Asserts that `object` is _not_ frozen.
   *
   *     assert.isNotFrozen({});
   *
   * @name isNotFrozen
   * @alias notFrozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotFrozen = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotFrozen, true).to.not.be.frozen;
  };

  /**
   * ### .isEmpty(target)
   *
   * Asserts that the target does not contain any values.
   * For arrays and strings, it checks the `length` property.
   * For `Map` and `Set` instances, it checks the `size` property.
   * For non-function objects, it gets the count of own
   * enumerable string keys.
   *
   *     assert.isEmpty([]);
   *     assert.isEmpty('');
   *     assert.isEmpty(new Map);
   *     assert.isEmpty({});
   *
   * @name isEmpty
   * @alias empty
   * @param {Object|Array|String|Map|Set} target
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isEmpty = function(val, msg) {
    new Assertion(val, msg, assert.isEmpty, true).to.be.empty;
  };

  /**
   * ### .isNotEmpty(target)
   *
   * Asserts that the target contains values.
   * For arrays and strings, it checks the `length` property.
   * For `Map` and `Set` instances, it checks the `size` property.
   * For non-function objects, it gets the count of own
   * enumerable string keys.
   *
   *     assert.isNotEmpty([1, 2]);
   *     assert.isNotEmpty('34');
   *     assert.isNotEmpty(new Set([5, 6]));
   *     assert.isNotEmpty({ key: 7 });
   *
   * @name isNotEmpty
   * @alias notEmpty
   * @param {Object|Array|String|Map|Set} target
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotEmpty = function(val, msg) {
    new Assertion(val, msg, assert.isNotEmpty, true).to.not.be.empty;
  };

  /*!
   * Aliases.
   */

  (function alias(name, as){
    assert[as] = assert[name];
    return alias;
  })
  ('isOk', 'ok')
  ('isNotOk', 'notOk')
  ('throws', 'throw')
  ('throws', 'Throw')
  ('isExtensible', 'extensible')
  ('isNotExtensible', 'notExtensible')
  ('isSealed', 'sealed')
  ('isNotSealed', 'notSealed')
  ('isFrozen', 'frozen')
  ('isNotFrozen', 'notFrozen')
  ('isEmpty', 'empty')
  ('isNotEmpty', 'notEmpty');
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/interface/expect.js":
/*!********************************************************!*\
  !*** ./node_modules/chai/lib/chai/interface/expect.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  chai.expect = function (val, message) {
    return new chai.Assertion(val, message);
  };

  /**
   * ### .fail([message])
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure.
   *
   *     expect.fail();
   *     expect.fail("custom error message");
   *     expect.fail(1, 2);
   *     expect.fail(1, 2, "custom error message");
   *     expect.fail(1, 2, "custom error message", ">");
   *     expect.fail(1, 2, undefined, ">");
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace BDD
   * @api public
   */

  chai.expect.fail = function (actual, expected, message, operator) {
    if (arguments.length < 2) {
        message = actual;
        actual = undefined;
    }

    message = message || 'expect.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
    }, chai.expect.fail);
  };
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/interface/should.js":
/*!********************************************************!*\
  !*** ./node_modules/chai/lib/chai/interface/should.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  var Assertion = chai.Assertion;

  function loadShould () {
    // explicitly define this method as function as to have it's name to include as `ssfi`
    function shouldGetter() {
      if (this instanceof String
          || this instanceof Number
          || this instanceof Boolean
          || typeof Symbol === 'function' && this instanceof Symbol) {
        return new Assertion(this.valueOf(), null, shouldGetter);
      }
      return new Assertion(this, null, shouldGetter);
    }
    function shouldSetter(value) {
      // See https://github.com/chaijs/chai/issues/86: this makes
      // `whatever.should = someValue` actually set `someValue`, which is
      // especially useful for `global.should = require('chai').should()`.
      //
      // Note that we have to use [[DefineProperty]] instead of [[Put]]
      // since otherwise we would trigger this very setter!
      Object.defineProperty(this, 'should', {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    }
    // modify Object.prototype to have `should`
    Object.defineProperty(Object.prototype, 'should', {
      set: shouldSetter
      , get: shouldGetter
      , configurable: true
    });

    var should = {};

    /**
     * ### .fail([message])
     * ### .fail(actual, expected, [message], [operator])
     *
     * Throw a failure.
     *
     *     should.fail();
     *     should.fail("custom error message");
     *     should.fail(1, 2);
     *     should.fail(1, 2, "custom error message");
     *     should.fail(1, 2, "custom error message", ">");
     *     should.fail(1, 2, undefined, ">");
     *
     *
     * @name fail
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @param {String} operator
     * @namespace BDD
     * @api public
     */

    should.fail = function (actual, expected, message, operator) {
      if (arguments.length < 2) {
          message = actual;
          actual = undefined;
      }

      message = message || 'should.fail()';
      throw new chai.AssertionError(message, {
          actual: actual
        , expected: expected
        , operator: operator
      }, should.fail);
    };

    /**
     * ### .equal(actual, expected, [message])
     *
     * Asserts non-strict equality (`==`) of `actual` and `expected`.
     *
     *     should.equal(3, '3', '== coerces values to strings');
     *
     * @name equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */

    should.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.equal(val2);
    };

    /**
     * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
     *
     * Asserts that `function` will throw an error that is an instance of
     * `constructor`, or alternately that it will throw an error with message
     * matching `regexp`.
     *
     *     should.throw(fn, 'function throws a reference error');
     *     should.throw(fn, /function throws a reference error/);
     *     should.throw(fn, ReferenceError);
     *     should.throw(fn, ReferenceError, 'function throws a reference error');
     *     should.throw(fn, ReferenceError, /function throws a reference error/);
     *
     * @name throw
     * @alias Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */

    should.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.Throw(errt, errs);
    };

    /**
     * ### .exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var foo = 'hi';
     *
     *     should.exist(foo, 'foo exists');
     *
     * @name exist
     * @namespace Should
     * @api public
     */

    should.exist = function (val, msg) {
      new Assertion(val, msg).to.exist;
    }

    // negation
    should.not = {}

    /**
     * ### .not.equal(actual, expected, [message])
     *
     * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
     *
     *     should.not.equal(3, 4, 'these numbers are not equal');
     *
     * @name not.equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */

    should.not.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.not.equal(val2);
    };

    /**
     * ### .throw(function, [constructor/regexp], [message])
     *
     * Asserts that `function` will _not_ throw an error that is an instance of
     * `constructor`, or alternately that it will not throw an error with message
     * matching `regexp`.
     *
     *     should.not.throw(fn, Error, 'function does not throw');
     *
     * @name not.throw
     * @alias not.Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */

    should.not.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.not.Throw(errt, errs);
    };

    /**
     * ### .not.exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var bar = null;
     *
     *     should.not.exist(bar, 'bar does not exist');
     *
     * @name not.exist
     * @namespace Should
     * @api public
     */

    should.not.exist = function (val, msg) {
      new Assertion(val, msg).to.not.exist;
    }

    should['throw'] = should['Throw'];
    should.not['throw'] = should.not['Throw'];

    return should;
  };

  chai.should = loadShould;
  chai.Should = loadShould;
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/addChainableMethod.js":
/*!****************************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/addChainableMethod.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var addLengthGuard = __webpack_require__(/*! ./addLengthGuard */ "./node_modules/chai/lib/chai/utils/addLengthGuard.js");
var chai = __webpack_require__(/*! ../../chai */ "./node_modules/chai/lib/chai.js");
var flag = __webpack_require__(/*! ./flag */ "./node_modules/chai/lib/chai/utils/flag.js");
var proxify = __webpack_require__(/*! ./proxify */ "./node_modules/chai/lib/chai/utils/proxify.js");
var transferFlags = __webpack_require__(/*! ./transferFlags */ "./node_modules/chai/lib/chai/utils/transferFlags.js");

/*!
 * Module variables
 */

// Check whether `Object.setPrototypeOf` is supported
var canSetPrototype = typeof Object.setPrototypeOf === 'function';

// Without `Object.setPrototypeOf` support, this module will need to add properties to a function.
// However, some of functions' own props are not configurable and should be skipped.
var testFn = function() {};
var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name) {
  var propDesc = Object.getOwnPropertyDescriptor(testFn, name);

  // Note: PhantomJS 1.x includes `callee` as one of `testFn`'s own properties,
  // but then returns `undefined` as the property descriptor for `callee`. As a
  // workaround, we perform an otherwise unnecessary type-check for `propDesc`,
  // and then filter it out if it's not an object as it should be.
  if (typeof propDesc !== 'object')
    return true;

  return !propDesc.configurable;
});

// Cache `Function` properties
var call  = Function.prototype.call,
    apply = Function.prototype.apply;

/**
 * ### .addChainableMethod(ctx, name, method, chainingBehavior)
 *
 * Adds a method to an object, such that the method can also be chained.
 *
 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
 *
 * The result can then be used as both a method assertion, executing both `method` and
 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
 *
 *     expect(fooStr).to.be.foo('bar');
 *     expect(fooStr).to.be.foo.equal('foo');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for `name`, when called
 * @param {Function} chainingBehavior function to be called every time the property is accessed
 * @namespace Utils
 * @name addChainableMethod
 * @api public
 */

module.exports = function addChainableMethod(ctx, name, method, chainingBehavior) {
  if (typeof chainingBehavior !== 'function') {
    chainingBehavior = function () { };
  }

  var chainableBehavior = {
      method: method
    , chainingBehavior: chainingBehavior
  };

  // save the methods so we can overwrite them later, if we need to.
  if (!ctx.__methods) {
    ctx.__methods = {};
  }
  ctx.__methods[name] = chainableBehavior;

  Object.defineProperty(ctx, name,
    { get: function chainableMethodGetter() {
        chainableBehavior.chainingBehavior.call(this);

        var chainableMethodWrapper = function () {
          // Setting the `ssfi` flag to `chainableMethodWrapper` causes this
          // function to be the starting point for removing implementation
          // frames from the stack trace of a failed assertion.
          //
          // However, we only want to use this function as the starting point if
          // the `lockSsfi` flag isn't set.
          //
          // If the `lockSsfi` flag is set, then this assertion is being
          // invoked from inside of another assertion. In this case, the `ssfi`
          // flag has already been set by the outer assertion.
          //
          // Note that overwriting a chainable method merely replaces the saved
          // methods in `ctx.__methods` instead of completely replacing the
          // overwritten assertion. Therefore, an overwriting assertion won't
          // set the `ssfi` or `lockSsfi` flags.
          if (!flag(this, 'lockSsfi')) {
            flag(this, 'ssfi', chainableMethodWrapper);
          }

          var result = chainableBehavior.method.apply(this, arguments);
          if (result !== undefined) {
            return result;
          }

          var newAssertion = new chai.Assertion();
          transferFlags(this, newAssertion);
          return newAssertion;
        };

        addLengthGuard(chainableMethodWrapper, name, true);

        // Use `Object.setPrototypeOf` if available
        if (canSetPrototype) {
          // Inherit all properties from the object by replacing the `Function` prototype
          var prototype = Object.create(this);
          // Restore the `call` and `apply` methods from `Function`
          prototype.call = call;
          prototype.apply = apply;
          Object.setPrototypeOf(chainableMethodWrapper, prototype);
        }
        // Otherwise, redefine all properties (slow!)
        else {
          var asserterNames = Object.getOwnPropertyNames(ctx);
          asserterNames.forEach(function (asserterName) {
            if (excludeNames.indexOf(asserterName) !== -1) {
              return;
            }

            var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
            Object.defineProperty(chainableMethodWrapper, asserterName, pd);
          });
        }

        transferFlags(this, chainableMethodWrapper);
        return proxify(chainableMethodWrapper);
      }
    , configurable: true
  });
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/addLengthGuard.js":
/*!************************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/addLengthGuard.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var fnLengthDesc = Object.getOwnPropertyDescriptor(function () {}, 'length');

/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .addLengthGuard(fn, assertionName, isChainable)
 *
 * Define `length` as a getter on the given uninvoked method assertion. The
 * getter acts as a guard against chaining `length` directly off of an uninvoked
 * method assertion, which is a problem because it references `function`'s
 * built-in `length` property instead of Chai's `length` assertion. When the
 * getter catches the user making this mistake, it throws an error with a
 * helpful message.
 *
 * There are two ways in which this mistake can be made. The first way is by
 * chaining the `length` assertion directly off of an uninvoked chainable
 * method. In this case, Chai suggests that the user use `lengthOf` instead. The
 * second way is by chaining the `length` assertion directly off of an uninvoked
 * non-chainable method. Non-chainable methods must be invoked prior to
 * chaining. In this case, Chai suggests that the user consult the docs for the
 * given assertion.
 *
 * If the `length` property of functions is unconfigurable, then return `fn`
 * without modification.
 *
 * Note that in ES6, the function's `length` property is configurable, so once
 * support for legacy environments is dropped, Chai's `length` property can
 * replace the built-in function's `length` property, and this length guard will
 * no longer be necessary. In the mean time, maintaining consistency across all
 * environments is the priority.
 *
 * @param {Function} fn
 * @param {String} assertionName
 * @param {Boolean} isChainable
 * @namespace Utils
 * @name addLengthGuard
 */

module.exports = function addLengthGuard (fn, assertionName, isChainable) {
  if (!fnLengthDesc.configurable) return fn;

  Object.defineProperty(fn, 'length', {
    get: function () {
      if (isChainable) {
        throw Error('Invalid Chai property: ' + assertionName + '.length. Due' +
          ' to a compatibility issue, "length" cannot directly follow "' +
          assertionName + '". Use "' + assertionName + '.lengthOf" instead.');
      }

      throw Error('Invalid Chai property: ' + assertionName + '.length. See' +
        ' docs for proper usage of "' + assertionName + '".');
    }
  });

  return fn;
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/addMethod.js":
/*!*******************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/addMethod.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var addLengthGuard = __webpack_require__(/*! ./addLengthGuard */ "./node_modules/chai/lib/chai/utils/addLengthGuard.js");
var chai = __webpack_require__(/*! ../../chai */ "./node_modules/chai/lib/chai.js");
var flag = __webpack_require__(/*! ./flag */ "./node_modules/chai/lib/chai/utils/flag.js");
var proxify = __webpack_require__(/*! ./proxify */ "./node_modules/chai/lib/chai/utils/proxify.js");
var transferFlags = __webpack_require__(/*! ./transferFlags */ "./node_modules/chai/lib/chai/utils/transferFlags.js");

/**
 * ### .addMethod(ctx, name, method)
 *
 * Adds a method to the prototype of an object.
 *
 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(fooStr).to.be.foo('bar');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for name
 * @namespace Utils
 * @name addMethod
 * @api public
 */

module.exports = function addMethod(ctx, name, method) {
  var methodWrapper = function () {
    // Setting the `ssfi` flag to `methodWrapper` causes this function to be the
    // starting point for removing implementation frames from the stack trace of
    // a failed assertion.
    //
    // However, we only want to use this function as the starting point if the
    // `lockSsfi` flag isn't set.
    //
    // If the `lockSsfi` flag is set, then either this assertion has been
    // overwritten by another assertion, or this assertion is being invoked from
    // inside of another assertion. In the first case, the `ssfi` flag has
    // already been set by the overwriting assertion. In the second case, the
    // `ssfi` flag has already been set by the outer assertion.
    if (!flag(this, 'lockSsfi')) {
      flag(this, 'ssfi', methodWrapper);
    }

    var result = method.apply(this, arguments);
    if (result !== undefined)
      return result;

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };

  addLengthGuard(methodWrapper, name, false);
  ctx[name] = proxify(methodWrapper, name);
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/addProperty.js":
/*!*********************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/addProperty.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chai = __webpack_require__(/*! ../../chai */ "./node_modules/chai/lib/chai.js");
var flag = __webpack_require__(/*! ./flag */ "./node_modules/chai/lib/chai/utils/flag.js");
var isProxyEnabled = __webpack_require__(/*! ./isProxyEnabled */ "./node_modules/chai/lib/chai/utils/isProxyEnabled.js");
var transferFlags = __webpack_require__(/*! ./transferFlags */ "./node_modules/chai/lib/chai/utils/transferFlags.js");

/**
 * ### .addProperty(ctx, name, getter)
 *
 * Adds a property to the prototype of an object.
 *
 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.instanceof(Foo);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.foo;
 *
 * @param {Object} ctx object to which the property is added
 * @param {String} name of property to add
 * @param {Function} getter function to be used for name
 * @namespace Utils
 * @name addProperty
 * @api public
 */

module.exports = function addProperty(ctx, name, getter) {
  getter = getter === undefined ? function () {} : getter;

  Object.defineProperty(ctx, name,
    { get: function propertyGetter() {
        // Setting the `ssfi` flag to `propertyGetter` causes this function to
        // be the starting point for removing implementation frames from the
        // stack trace of a failed assertion.
        //
        // However, we only want to use this function as the starting point if
        // the `lockSsfi` flag isn't set and proxy protection is disabled.
        //
        // If the `lockSsfi` flag is set, then either this assertion has been
        // overwritten by another assertion, or this assertion is being invoked
        // from inside of another assertion. In the first case, the `ssfi` flag
        // has already been set by the overwriting assertion. In the second
        // case, the `ssfi` flag has already been set by the outer assertion.
        //
        // If proxy protection is enabled, then the `ssfi` flag has already been
        // set by the proxy getter.
        if (!isProxyEnabled() && !flag(this, 'lockSsfi')) {
          flag(this, 'ssfi', propertyGetter);
        }

        var result = getter.call(this);
        if (result !== undefined)
          return result;

        var newAssertion = new chai.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      }
    , configurable: true
  });
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/compareByInspect.js":
/*!**************************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/compareByInspect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var inspect = __webpack_require__(/*! ./inspect */ "./node_modules/chai/lib/chai/utils/inspect.js");

/**
 * ### .compareByInspect(mixed, mixed)
 *
 * To be used as a compareFunction with Array.prototype.sort. Compares elements
 * using inspect instead of default behavior of using toString so that Symbols
 * and objects with irregular/missing toString can still be sorted without a
 * TypeError.
 *
 * @param {Mixed} first element to compare
 * @param {Mixed} second element to compare
 * @returns {Number} -1 if 'a' should come before 'b'; otherwise 1
 * @name compareByInspect
 * @namespace Utils
 * @api public
 */

module.exports = function compareByInspect(a, b) {
  return inspect(a) < inspect(b) ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/expectTypes.js":
/*!*********************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/expectTypes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .expectTypes(obj, types)
 *
 * Ensures that the object being tested against is of a valid type.
 *
 *     utils.expectTypes(this, ['array', 'object', 'string']);
 *
 * @param {Mixed} obj constructed Assertion
 * @param {Array} type A list of allowed types for this assertion
 * @namespace Utils
 * @name expectTypes
 * @api public
 */

var AssertionError = __webpack_require__(/*! assertion-error */ "./node_modules/assertion-error/index.js");
var flag = __webpack_require__(/*! ./flag */ "./node_modules/chai/lib/chai/utils/flag.js");
var type = __webpack_require__(/*! type-detect */ "./node_modules/type-detect/type-detect.js");

module.exports = function expectTypes(obj, types) {
  var flagMsg = flag(obj, 'message');
  var ssfi = flag(obj, 'ssfi');

  flagMsg = flagMsg ? flagMsg + ': ' : '';

  obj = flag(obj, 'object');
  types = types.map(function (t) { return t.toLowerCase(); });
  types.sort();

  // Transforms ['lorem', 'ipsum'] into 'a lorem, or an ipsum'
  var str = types.map(function (t, index) {
    var art = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(t.charAt(0)) ? 'an' : 'a';
    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
    return or + art + ' ' + t;
  }).join(', ');

  var objType = type(obj).toLowerCase();

  if (!types.some(function (expected) { return objType === expected; })) {
    throw new AssertionError(
      flagMsg + 'object tested must be ' + str + ', but ' + objType + ' given',
      undefined,
      ssfi
    );
  }
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/flag.js":
/*!**************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/flag.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .flag(object, key, [value])
 *
 * Get or set a flag value on an object. If a
 * value is provided it will be set, else it will
 * return the currently set value or `undefined` if
 * the value is not set.
 *
 *     utils.flag(this, 'foo', 'bar'); // setter
 *     utils.flag(this, 'foo'); // getter, returns `bar`
 *
 * @param {Object} object constructed Assertion
 * @param {String} key
 * @param {Mixed} value (optional)
 * @namespace Utils
 * @name flag
 * @api private
 */

module.exports = function flag(obj, key, value) {
  var flags = obj.__flags || (obj.__flags = Object.create(null));
  if (arguments.length === 3) {
    flags[key] = value;
  } else {
    return flags[key];
  }
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/getActual.js":
/*!*******************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/getActual.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getActual(object, [actual])
 *
 * Returns the `actual` value for an Assertion.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getActual
 */

module.exports = function getActual(obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/getEnumerableProperties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/getEnumerableProperties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getEnumerableProperties(object)
 *
 * This allows the retrieval of enumerable property names of an object,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getEnumerableProperties
 * @api public
 */

module.exports = function getEnumerableProperties(object) {
  var result = [];
  for (var name in object) {
    result.push(name);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/getMessage.js":
/*!********************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/getMessage.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var flag = __webpack_require__(/*! ./flag */ "./node_modules/chai/lib/chai/utils/flag.js")
  , getActual = __webpack_require__(/*! ./getActual */ "./node_modules/chai/lib/chai/utils/getActual.js")
  , objDisplay = __webpack_require__(/*! ./objDisplay */ "./node_modules/chai/lib/chai/utils/objDisplay.js");

/**
 * ### .getMessage(object, message, negateMessage)
 *
 * Construct the error message based on flags
 * and template tags. Template tags will return
 * a stringified inspection of the object referenced.
 *
 * Message template tags:
 * - `#{this}` current asserted object
 * - `#{act}` actual value
 * - `#{exp}` expected value
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getMessage
 * @api public
 */

module.exports = function getMessage(obj, args) {
  var negate = flag(obj, 'negate')
    , val = flag(obj, 'object')
    , expected = args[3]
    , actual = getActual(obj, args)
    , msg = negate ? args[2] : args[1]
    , flagMsg = flag(obj, 'message');

  if(typeof msg === "function") msg = msg();
  msg = msg || '';
  msg = msg
    .replace(/#\{this\}/g, function () { return objDisplay(val); })
    .replace(/#\{act\}/g, function () { return objDisplay(actual); })
    .replace(/#\{exp\}/g, function () { return objDisplay(expected); });

  return flagMsg ? flagMsg + ': ' + msg : msg;
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var getOwnEnumerablePropertySymbols = __webpack_require__(/*! ./getOwnEnumerablePropertySymbols */ "./node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js");

/**
 * ### .getOwnEnumerableProperties(object)
 *
 * This allows the retrieval of directly-owned enumerable property names and
 * symbols of an object. This function is necessary because Object.keys only
 * returns enumerable property names, not enumerable property symbols.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getOwnEnumerableProperties
 * @api public
 */

module.exports = function getOwnEnumerableProperties(obj) {
  return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getOwnEnumerablePropertySymbols(object)
 *
 * This allows the retrieval of directly-owned enumerable property symbols of an
 * object. This function is necessary because Object.getOwnPropertySymbols
 * returns both enumerable and non-enumerable property symbols.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getOwnEnumerablePropertySymbols
 * @api public
 */

module.exports = function getOwnEnumerablePropertySymbols(obj) {
  if (typeof Object.getOwnPropertySymbols !== 'function') return [];

  return Object.getOwnPropertySymbols(obj).filter(function (sym) {
    return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
  });
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/getProperties.js":
/*!***********************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/getProperties.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getProperties(object)
 *
 * This allows the retrieval of property names of an object, enumerable or not,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getProperties
 * @api public
 */

module.exports = function getProperties(object) {
  var result = Object.getOwnPropertyNames(object);

  function addProperty(property) {
    if (result.indexOf(property) === -1) {
      result.push(property);
    }
  }

  var proto = Object.getPrototypeOf(object);
  while (proto !== null) {
    Object.getOwnPropertyNames(proto).forEach(addProperty);
    proto = Object.getPrototypeOf(proto);
  }

  return result;
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/index.js":
/*!***************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Dependencies that are used for multiple exports are required here only once
 */

var pathval = __webpack_require__(/*! pathval */ "./node_modules/pathval/index.js");

/*!
 * test utility
 */

exports.test = __webpack_require__(/*! ./test */ "./node_modules/chai/lib/chai/utils/test.js");

/*!
 * type utility
 */

exports.type = __webpack_require__(/*! type-detect */ "./node_modules/type-detect/type-detect.js");

/*!
 * expectTypes utility
 */
exports.expectTypes = __webpack_require__(/*! ./expectTypes */ "./node_modules/chai/lib/chai/utils/expectTypes.js");

/*!
 * message utility
 */

exports.getMessage = __webpack_require__(/*! ./getMessage */ "./node_modules/chai/lib/chai/utils/getMessage.js");

/*!
 * actual utility
 */

exports.getActual = __webpack_require__(/*! ./getActual */ "./node_modules/chai/lib/chai/utils/getActual.js");

/*!
 * Inspect util
 */

exports.inspect = __webpack_require__(/*! ./inspect */ "./node_modules/chai/lib/chai/utils/inspect.js");

/*!
 * Object Display util
 */

exports.objDisplay = __webpack_require__(/*! ./objDisplay */ "./node_modules/chai/lib/chai/utils/objDisplay.js");

/*!
 * Flag utility
 */

exports.flag = __webpack_require__(/*! ./flag */ "./node_modules/chai/lib/chai/utils/flag.js");

/*!
 * Flag transferring utility
 */

exports.transferFlags = __webpack_require__(/*! ./transferFlags */ "./node_modules/chai/lib/chai/utils/transferFlags.js");

/*!
 * Deep equal utility
 */

exports.eql = __webpack_require__(/*! deep-eql */ "./node_modules/deep-eql/index.js");

/*!
 * Deep path info
 */

exports.getPathInfo = pathval.getPathInfo;

/*!
 * Check if a property exists
 */

exports.hasProperty = pathval.hasProperty;

/*!
 * Function name
 */

exports.getName = __webpack_require__(/*! get-func-name */ "./node_modules/get-func-name/index.js");

/*!
 * add Property
 */

exports.addProperty = __webpack_require__(/*! ./addProperty */ "./node_modules/chai/lib/chai/utils/addProperty.js");

/*!
 * add Method
 */

exports.addMethod = __webpack_require__(/*! ./addMethod */ "./node_modules/chai/lib/chai/utils/addMethod.js");

/*!
 * overwrite Property
 */

exports.overwriteProperty = __webpack_require__(/*! ./overwriteProperty */ "./node_modules/chai/lib/chai/utils/overwriteProperty.js");

/*!
 * overwrite Method
 */

exports.overwriteMethod = __webpack_require__(/*! ./overwriteMethod */ "./node_modules/chai/lib/chai/utils/overwriteMethod.js");

/*!
 * Add a chainable method
 */

exports.addChainableMethod = __webpack_require__(/*! ./addChainableMethod */ "./node_modules/chai/lib/chai/utils/addChainableMethod.js");

/*!
 * Overwrite chainable method
 */

exports.overwriteChainableMethod = __webpack_require__(/*! ./overwriteChainableMethod */ "./node_modules/chai/lib/chai/utils/overwriteChainableMethod.js");

/*!
 * Compare by inspect method
 */

exports.compareByInspect = __webpack_require__(/*! ./compareByInspect */ "./node_modules/chai/lib/chai/utils/compareByInspect.js");

/*!
 * Get own enumerable property symbols method
 */

exports.getOwnEnumerablePropertySymbols = __webpack_require__(/*! ./getOwnEnumerablePropertySymbols */ "./node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js");

/*!
 * Get own enumerable properties method
 */

exports.getOwnEnumerableProperties = __webpack_require__(/*! ./getOwnEnumerableProperties */ "./node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js");

/*!
 * Checks error against a given set of criteria
 */

exports.checkError = __webpack_require__(/*! check-error */ "./node_modules/check-error/index.js");

/*!
 * Proxify util
 */

exports.proxify = __webpack_require__(/*! ./proxify */ "./node_modules/chai/lib/chai/utils/proxify.js");

/*!
 * addLengthGuard util
 */

exports.addLengthGuard = __webpack_require__(/*! ./addLengthGuard */ "./node_modules/chai/lib/chai/utils/addLengthGuard.js");

/*!
 * isProxyEnabled helper
 */

exports.isProxyEnabled = __webpack_require__(/*! ./isProxyEnabled */ "./node_modules/chai/lib/chai/utils/isProxyEnabled.js");

/*!
 * isNaN method
 */

exports.isNaN = __webpack_require__(/*! ./isNaN */ "./node_modules/chai/lib/chai/utils/isNaN.js");


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/inspect.js":
/*!*****************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/inspect.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This is (almost) directly from Node.js utils
// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

var getName = __webpack_require__(/*! get-func-name */ "./node_modules/get-func-name/index.js");
var getProperties = __webpack_require__(/*! ./getProperties */ "./node_modules/chai/lib/chai/utils/getProperties.js");
var getEnumerableProperties = __webpack_require__(/*! ./getEnumerableProperties */ "./node_modules/chai/lib/chai/utils/getEnumerableProperties.js");
var config = __webpack_require__(/*! ../config */ "./node_modules/chai/lib/chai/config.js");

module.exports = inspect;

/**
 * ### .inspect(obj, [showHidden], [depth], [colors])
 *
 * Echoes the value of a value. Tries to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
 *    properties of objects. Default is false.
 * @param {Number} depth Depth in which to descend in object. Default is 2.
 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
 *    output. Default is false (no coloring).
 * @namespace Utils
 * @name inspect
 */
function inspect(obj, showHidden, depth, colors) {
  var ctx = {
    showHidden: showHidden,
    seen: [],
    stylize: function (str) { return str; }
  };
  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
}

// Returns true if object is a DOM element.
var isDOMElement = function (object) {
  if (typeof HTMLElement === 'object') {
    return object instanceof HTMLElement;
  } else {
    return object &&
      typeof object === 'object' &&
      'nodeType' in object &&
      object.nodeType === 1 &&
      typeof object.nodeName === 'string';
  }
};

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (value && typeof value.inspect === 'function' &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (typeof ret !== 'string') {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // If this is a DOM element, try to get the outer HTML.
  if (isDOMElement(value)) {
    if ('outerHTML' in value) {
      return value.outerHTML;
      // This value does not have an outerHTML attribute,
      //   it could still be an XML element
    } else {
      // Attempt to serialize it
      try {
        if (document.xmlVersion) {
          var xmlSerializer = new XMLSerializer();
          return xmlSerializer.serializeToString(value);
        } else {
          // Firefox 11- do not support outerHTML
          //   It does, however, support innerHTML
          //   Use the following to render the element
          var ns = "http://www.w3.org/1999/xhtml";
          var container = document.createElementNS(ns, '_');

          container.appendChild(value.cloneNode(false));
          var html = container.innerHTML
            .replace('><', '>' + value.innerHTML + '<');
          container.innerHTML = '';
          return html;
        }
      } catch (err) {
        // This could be a non-native DOM implementation,
        //   continue with the normal flow:
        //   printing the element as if it is an object.
      }
    }
  }

  // Look up the keys of the object.
  var visibleKeys = getEnumerableProperties(value);
  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

  var name, nameSuffix;

  // Some type of object without properties can be shortcut.
  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
  // a `stack` plus `description` property; ignore those for consistency.
  if (keys.length === 0 || (isError(value) && (
      (keys.length === 1 && keys[0] === 'stack') ||
      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
     ))) {
    if (typeof value === 'function') {
      name = getName(value);
      nameSuffix = name ? ': ' + name : '';
      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = ''
    , array = false
    , typedArray = false
    , braces = ['{', '}'];

  if (isTypedArray(value)) {
    typedArray = true;
    braces = ['[', ']'];
  }

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (typeof value === 'function') {
    name = getName(value);
    nameSuffix = name ? ': ' + name : '';
    base = ' [Function' + nameSuffix + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    return formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else if (typedArray) {
    return formatTypedArray(value);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  switch (typeof value) {
    case 'undefined':
      return ctx.stylize('undefined', 'undefined');

    case 'string':
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');

    case 'number':
      if (value === 0 && (1/value) === -Infinity) {
        return ctx.stylize('-0', 'number');
      }
      return ctx.stylize('' + value, 'number');

    case 'boolean':
      return ctx.stylize('' + value, 'boolean');

    case 'symbol':
      return ctx.stylize(value.toString(), 'symbol');
  }
  // For some reason typeof null is "object", so special case here.
  if (value === null) {
    return ctx.stylize('null', 'null');
  }
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}

function formatTypedArray(value) {
  var str = '[ ';

  for (var i = 0; i < value.length; ++i) {
    if (str.length >= config.truncateThreshold - 7) {
      str += '...';
      break;
    }
    str += value[i] + ', ';
  }
  str += ' ]';

  // Removing trailing `, ` if the array was not truncated
  if (str.indexOf(',  ]') !== -1) {
    str = str.replace(',  ]', ' ]');
  }

  return str;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name;
  var propDescriptor = Object.getOwnPropertyDescriptor(value, key);
  var str;

  if (propDescriptor) {
    if (propDescriptor.get) {
      if (propDescriptor.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (propDescriptor.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
  }
  if (visibleKeys.indexOf(key) < 0) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(value[key]) < 0) {
      if (recurseTimes === null) {
        str = formatValue(ctx, value[key], null);
      } else {
        str = formatValue(ctx, value[key], recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (typeof name === 'undefined') {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var length = output.reduce(function(prev, cur) {
    return prev + cur.length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

function isTypedArray(ar) {
  // Unfortunately there's no way to check if an object is a TypedArray
  // We have to check if it's one of these types
  return (typeof ar === 'object' && /\w+Array]$/.test(objectToString(ar)));
}

function isArray(ar) {
  return Array.isArray(ar) ||
         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
}

function isRegExp(re) {
  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
}

function isDate(d) {
  return typeof d === 'object' && objectToString(d) === '[object Date]';
}

function isError(e) {
  return typeof e === 'object' && objectToString(e) === '[object Error]';
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/isNaN.js":
/*!***************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/isNaN.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */

/**
 * ### .isNaN(value)
 *
 * Checks if the given value is NaN or not.
 *
 *     utils.isNaN(NaN); // true
 *
 * @param {Value} The value which has to be checked if it is NaN
 * @name isNaN
 * @api private
 */

function isNaN(value) {
  // Refer http://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number
  // section's NOTE.
  return value !== value;
}

// If ECMAScript 6's Number.isNaN is present, prefer that.
module.exports = Number.isNaN || isNaN;


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/isProxyEnabled.js":
/*!************************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/isProxyEnabled.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(/*! ../config */ "./node_modules/chai/lib/chai/config.js");

/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .isProxyEnabled()
 *
 * Helper function to check if Chai's proxy protection feature is enabled. If
 * proxies are unsupported or disabled via the user's Chai config, then return
 * false. Otherwise, return true.
 *
 * @namespace Utils
 * @name isProxyEnabled
 */

module.exports = function isProxyEnabled() {
  return config.useProxy &&
    typeof Proxy !== 'undefined' &&
    typeof Reflect !== 'undefined';
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/objDisplay.js":
/*!********************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/objDisplay.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var inspect = __webpack_require__(/*! ./inspect */ "./node_modules/chai/lib/chai/utils/inspect.js");
var config = __webpack_require__(/*! ../config */ "./node_modules/chai/lib/chai/config.js");

/**
 * ### .objDisplay(object)
 *
 * Determines if an object or an array matches
 * criteria to be inspected in-line for error
 * messages or should be truncated.
 *
 * @param {Mixed} javascript object to inspect
 * @name objDisplay
 * @namespace Utils
 * @api public
 */

module.exports = function objDisplay(obj) {
  var str = inspect(obj)
    , type = Object.prototype.toString.call(obj);

  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
    if (type === '[object Function]') {
      return !obj.name || obj.name === ''
        ? '[Function]'
        : '[Function: ' + obj.name + ']';
    } else if (type === '[object Array]') {
      return '[ Array(' + obj.length + ') ]';
    } else if (type === '[object Object]') {
      var keys = Object.keys(obj)
        , kstr = keys.length > 2
          ? keys.splice(0, 2).join(', ') + ', ...'
          : keys.join(', ');
      return '{ Object (' + kstr + ') }';
    } else {
      return str;
    }
  } else {
    return str;
  }
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/overwriteChainableMethod.js":
/*!**********************************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/overwriteChainableMethod.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chai = __webpack_require__(/*! ../../chai */ "./node_modules/chai/lib/chai.js");
var transferFlags = __webpack_require__(/*! ./transferFlags */ "./node_modules/chai/lib/chai/utils/transferFlags.js");

/**
 * ### .overwriteChainableMethod(ctx, name, method, chainingBehavior)
 *
 * Overwrites an already existing chainable method
 * and provides access to the previous function or
 * property.  Must return functions to be used for
 * name.
 *
 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'lengthOf',
 *       function (_super) {
 *       }
 *     , function (_super) {
 *       }
 *     );
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.have.lengthOf(3);
 *     expect(myFoo).to.have.lengthOf.above(3);
 *
 * @param {Object} ctx object whose method / property is to be overwritten
 * @param {String} name of method / property to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @param {Function} chainingBehavior function that returns a function to be used for property
 * @namespace Utils
 * @name overwriteChainableMethod
 * @api public
 */

module.exports = function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
  var chainableBehavior = ctx.__methods[name];

  var _chainingBehavior = chainableBehavior.chainingBehavior;
  chainableBehavior.chainingBehavior = function overwritingChainableMethodGetter() {
    var result = chainingBehavior(_chainingBehavior).call(this);
    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };

  var _method = chainableBehavior.method;
  chainableBehavior.method = function overwritingChainableMethodWrapper() {
    var result = method(_method).apply(this, arguments);
    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/overwriteMethod.js":
/*!*************************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/overwriteMethod.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var addLengthGuard = __webpack_require__(/*! ./addLengthGuard */ "./node_modules/chai/lib/chai/utils/addLengthGuard.js");
var chai = __webpack_require__(/*! ../../chai */ "./node_modules/chai/lib/chai.js");
var flag = __webpack_require__(/*! ./flag */ "./node_modules/chai/lib/chai/utils/flag.js");
var proxify = __webpack_require__(/*! ./proxify */ "./node_modules/chai/lib/chai/utils/proxify.js");
var transferFlags = __webpack_require__(/*! ./transferFlags */ "./node_modules/chai/lib/chai/utils/transferFlags.js");

/**
 * ### .overwriteMethod(ctx, name, fn)
 *
 * Overwrites an already existing method and provides
 * access to previous function. Must return function
 * to be used for name.
 *
 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
 *       return function (str) {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.value).to.equal(str);
 *         } else {
 *           _super.apply(this, arguments);
 *         }
 *       }
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.equal('bar');
 *
 * @param {Object} ctx object whose method is to be overwritten
 * @param {String} name of method to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @namespace Utils
 * @name overwriteMethod
 * @api public
 */

module.exports = function overwriteMethod(ctx, name, method) {
  var _method = ctx[name]
    , _super = function () {
      throw new Error(name + ' is not a function');
    };

  if (_method && 'function' === typeof _method)
    _super = _method;

  var overwritingMethodWrapper = function () {
    // Setting the `ssfi` flag to `overwritingMethodWrapper` causes this
    // function to be the starting point for removing implementation frames from
    // the stack trace of a failed assertion.
    //
    // However, we only want to use this function as the starting point if the
    // `lockSsfi` flag isn't set.
    //
    // If the `lockSsfi` flag is set, then either this assertion has been
    // overwritten by another assertion, or this assertion is being invoked from
    // inside of another assertion. In the first case, the `ssfi` flag has
    // already been set by the overwriting assertion. In the second case, the
    // `ssfi` flag has already been set by the outer assertion.
    if (!flag(this, 'lockSsfi')) {
      flag(this, 'ssfi', overwritingMethodWrapper);
    }

    // Setting the `lockSsfi` flag to `true` prevents the overwritten assertion
    // from changing the `ssfi` flag. By this point, the `ssfi` flag is already
    // set to the correct starting point for this assertion.
    var origLockSsfi = flag(this, 'lockSsfi');
    flag(this, 'lockSsfi', true);
    var result = method(_super).apply(this, arguments);
    flag(this, 'lockSsfi', origLockSsfi);

    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  }

  addLengthGuard(overwritingMethodWrapper, name, false);
  ctx[name] = proxify(overwritingMethodWrapper, name);
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/overwriteProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/overwriteProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chai = __webpack_require__(/*! ../../chai */ "./node_modules/chai/lib/chai.js");
var flag = __webpack_require__(/*! ./flag */ "./node_modules/chai/lib/chai/utils/flag.js");
var isProxyEnabled = __webpack_require__(/*! ./isProxyEnabled */ "./node_modules/chai/lib/chai/utils/isProxyEnabled.js");
var transferFlags = __webpack_require__(/*! ./transferFlags */ "./node_modules/chai/lib/chai/utils/transferFlags.js");

/**
 * ### .overwriteProperty(ctx, name, fn)
 *
 * Overwrites an already existing property getter and provides
 * access to previous value. Must return function to use as getter.
 *
 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
 *       return function () {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.name).to.equal('bar');
 *         } else {
 *           _super.call(this);
 *         }
 *       }
 *     });
 *
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.ok;
 *
 * @param {Object} ctx object whose property is to be overwritten
 * @param {String} name of property to overwrite
 * @param {Function} getter function that returns a getter function to be used for name
 * @namespace Utils
 * @name overwriteProperty
 * @api public
 */

module.exports = function overwriteProperty(ctx, name, getter) {
  var _get = Object.getOwnPropertyDescriptor(ctx, name)
    , _super = function () {};

  if (_get && 'function' === typeof _get.get)
    _super = _get.get

  Object.defineProperty(ctx, name,
    { get: function overwritingPropertyGetter() {
        // Setting the `ssfi` flag to `overwritingPropertyGetter` causes this
        // function to be the starting point for removing implementation frames
        // from the stack trace of a failed assertion.
        //
        // However, we only want to use this function as the starting point if
        // the `lockSsfi` flag isn't set and proxy protection is disabled.
        //
        // If the `lockSsfi` flag is set, then either this assertion has been
        // overwritten by another assertion, or this assertion is being invoked
        // from inside of another assertion. In the first case, the `ssfi` flag
        // has already been set by the overwriting assertion. In the second
        // case, the `ssfi` flag has already been set by the outer assertion.
        //
        // If proxy protection is enabled, then the `ssfi` flag has already been
        // set by the proxy getter.
        if (!isProxyEnabled() && !flag(this, 'lockSsfi')) {
          flag(this, 'ssfi', overwritingPropertyGetter);
        }

        // Setting the `lockSsfi` flag to `true` prevents the overwritten
        // assertion from changing the `ssfi` flag. By this point, the `ssfi`
        // flag is already set to the correct starting point for this assertion.
        var origLockSsfi = flag(this, 'lockSsfi');
        flag(this, 'lockSsfi', true);
        var result = getter(_super).call(this);
        flag(this, 'lockSsfi', origLockSsfi);

        if (result !== undefined) {
          return result;
        }

        var newAssertion = new chai.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      }
    , configurable: true
  });
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/proxify.js":
/*!*****************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/proxify.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(/*! ../config */ "./node_modules/chai/lib/chai/config.js");
var flag = __webpack_require__(/*! ./flag */ "./node_modules/chai/lib/chai/utils/flag.js");
var getProperties = __webpack_require__(/*! ./getProperties */ "./node_modules/chai/lib/chai/utils/getProperties.js");
var isProxyEnabled = __webpack_require__(/*! ./isProxyEnabled */ "./node_modules/chai/lib/chai/utils/isProxyEnabled.js");

/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .proxify(object)
 *
 * Return a proxy of given object that throws an error when a non-existent
 * property is read. By default, the root cause is assumed to be a misspelled
 * property, and thus an attempt is made to offer a reasonable suggestion from
 * the list of existing properties. However, if a nonChainableMethodName is
 * provided, then the root cause is instead a failure to invoke a non-chainable
 * method prior to reading the non-existent property.
 *
 * If proxies are unsupported or disabled via the user's Chai config, then
 * return object without modification.
 *
 * @param {Object} obj
 * @param {String} nonChainableMethodName
 * @namespace Utils
 * @name proxify
 */

var builtins = ['__flags', '__methods', '_obj', 'assert'];

module.exports = function proxify(obj, nonChainableMethodName) {
  if (!isProxyEnabled()) return obj;

  return new Proxy(obj, {
    get: function proxyGetter(target, property) {
      // This check is here because we should not throw errors on Symbol properties
      // such as `Symbol.toStringTag`.
      // The values for which an error should be thrown can be configured using
      // the `config.proxyExcludedKeys` setting.
      if (typeof property === 'string' &&
          config.proxyExcludedKeys.indexOf(property) === -1 &&
          !Reflect.has(target, property)) {
        // Special message for invalid property access of non-chainable methods.
        if (nonChainableMethodName) {
          throw Error('Invalid Chai property: ' + nonChainableMethodName + '.' +
            property + '. See docs for proper usage of "' +
            nonChainableMethodName + '".');
        }

        // If the property is reasonably close to an existing Chai property,
        // suggest that property to the user. Only suggest properties with a
        // distance less than 4.
        var suggestion = null;
        var suggestionDistance = 4;
        getProperties(target).forEach(function(prop) {
          if (
            !Object.prototype.hasOwnProperty(prop) &&
            builtins.indexOf(prop) === -1
          ) {
            var dist = stringDistanceCapped(
              property,
              prop,
              suggestionDistance
            );
            if (dist < suggestionDistance) {
              suggestion = prop;
              suggestionDistance = dist;
            }
          }
        });

        if (suggestion !== null) {
          throw Error('Invalid Chai property: ' + property +
            '. Did you mean "' + suggestion + '"?');
        } else {
          throw Error('Invalid Chai property: ' + property);
        }
      }

      // Use this proxy getter as the starting point for removing implementation
      // frames from the stack trace of a failed assertion. For property
      // assertions, this prevents the proxy getter from showing up in the stack
      // trace since it's invoked before the property getter. For method and
      // chainable method assertions, this flag will end up getting changed to
      // the method wrapper, which is good since this frame will no longer be in
      // the stack once the method is invoked. Note that Chai builtin assertion
      // properties such as `__flags` are skipped since this is only meant to
      // capture the starting point of an assertion. This step is also skipped
      // if the `lockSsfi` flag is set, thus indicating that this assertion is
      // being called from within another assertion. In that case, the `ssfi`
      // flag is already set to the outer assertion's starting point.
      if (builtins.indexOf(property) === -1 && !flag(target, 'lockSsfi')) {
        flag(target, 'ssfi', proxyGetter);
      }

      return Reflect.get(target, property);
    }
  });
};

/**
 * # stringDistanceCapped(strA, strB, cap)
 * Return the Levenshtein distance between two strings, but no more than cap.
 * @param {string} strA
 * @param {string} strB
 * @param {number} number
 * @return {number} min(string distance between strA and strB, cap)
 * @api private
 */

function stringDistanceCapped(strA, strB, cap) {
  if (Math.abs(strA.length - strB.length) >= cap) {
    return cap;
  }

  var memo = [];
  // `memo` is a two-dimensional array containing distances.
  // memo[i][j] is the distance between strA.slice(0, i) and
  // strB.slice(0, j).
  for (var i = 0; i <= strA.length; i++) {
    memo[i] = Array(strB.length + 1).fill(0);
    memo[i][0] = i;
  }
  for (var j = 0; j < strB.length; j++) {
    memo[0][j] = j;
  }

  for (var i = 1; i <= strA.length; i++) {
    var ch = strA.charCodeAt(i - 1);
    for (var j = 1; j <= strB.length; j++) {
      if (Math.abs(i - j) >= cap) {
        memo[i][j] = cap;
        continue;
      }
      memo[i][j] = Math.min(
        memo[i - 1][j] + 1,
        memo[i][j - 1] + 1,
        memo[i - 1][j - 1] +
          (ch === strB.charCodeAt(j - 1) ? 0 : 1)
      );
    }
  }

  return memo[strA.length][strB.length];
}


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/test.js":
/*!**************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/test.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var flag = __webpack_require__(/*! ./flag */ "./node_modules/chai/lib/chai/utils/flag.js");

/**
 * ### .test(object, expression)
 *
 * Test and object for expression.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name test
 */

module.exports = function test(obj, args) {
  var negate = flag(obj, 'negate')
    , expr = args[0];
  return negate ? !expr : expr;
};


/***/ }),

/***/ "./node_modules/chai/lib/chai/utils/transferFlags.js":
/*!***********************************************************!*\
  !*** ./node_modules/chai/lib/chai/utils/transferFlags.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .transferFlags(assertion, object, includeAll = true)
 *
 * Transfer all the flags for `assertion` to `object`. If
 * `includeAll` is set to `false`, then the base Chai
 * assertion flags (namely `object`, `ssfi`, `lockSsfi`,
 * and `message`) will not be transferred.
 *
 *
 *     var newAssertion = new Assertion();
 *     utils.transferFlags(assertion, newAssertion);
 *
 *     var anotherAssertion = new Assertion(myObj);
 *     utils.transferFlags(assertion, anotherAssertion, false);
 *
 * @param {Assertion} assertion the assertion to transfer the flags from
 * @param {Object} object the object to transfer the flags to; usually a new assertion
 * @param {Boolean} includeAll
 * @namespace Utils
 * @name transferFlags
 * @api private
 */

module.exports = function transferFlags(assertion, object, includeAll) {
  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

  if (!object.__flags) {
    object.__flags = Object.create(null);
  }

  includeAll = arguments.length === 3 ? includeAll : true;

  for (var flag in flags) {
    if (includeAll ||
        (flag !== 'object' && flag !== 'ssfi' && flag !== 'lockSsfi' && flag != 'message')) {
      object.__flags[flag] = flags[flag];
    }
  }
};


/***/ }),

/***/ "./node_modules/check-error/index.js":
/*!*******************************************!*\
  !*** ./node_modules/check-error/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* !
 * Chai - checkError utility
 * Copyright(c) 2012-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .checkError
 *
 * Checks that an error conforms to a given set of criteria and/or retrieves information about it.
 *
 * @api public
 */

/**
 * ### .compatibleInstance(thrown, errorLike)
 *
 * Checks if two instances are compatible (strict equal).
 * Returns false if errorLike is not an instance of Error, because instances
 * can only be compatible if they're both error instances.
 *
 * @name compatibleInstance
 * @param {Error} thrown error
 * @param {Error|ErrorConstructor} errorLike object to compare against
 * @namespace Utils
 * @api public
 */

function compatibleInstance(thrown, errorLike) {
  return errorLike instanceof Error && thrown === errorLike;
}

/**
 * ### .compatibleConstructor(thrown, errorLike)
 *
 * Checks if two constructors are compatible.
 * This function can receive either an error constructor or
 * an error instance as the `errorLike` argument.
 * Constructors are compatible if they're the same or if one is
 * an instance of another.
 *
 * @name compatibleConstructor
 * @param {Error} thrown error
 * @param {Error|ErrorConstructor} errorLike object to compare against
 * @namespace Utils
 * @api public
 */

function compatibleConstructor(thrown, errorLike) {
  if (errorLike instanceof Error) {
    // If `errorLike` is an instance of any error we compare their constructors
    return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
  } else if (errorLike.prototype instanceof Error || errorLike === Error) {
    // If `errorLike` is a constructor that inherits from Error, we compare `thrown` to `errorLike` directly
    return thrown.constructor === errorLike || thrown instanceof errorLike;
  }

  return false;
}

/**
 * ### .compatibleMessage(thrown, errMatcher)
 *
 * Checks if an error's message is compatible with a matcher (String or RegExp).
 * If the message contains the String or passes the RegExp test,
 * it is considered compatible.
 *
 * @name compatibleMessage
 * @param {Error} thrown error
 * @param {String|RegExp} errMatcher to look for into the message
 * @namespace Utils
 * @api public
 */

function compatibleMessage(thrown, errMatcher) {
  var comparisonString = typeof thrown === 'string' ? thrown : thrown.message;
  if (errMatcher instanceof RegExp) {
    return errMatcher.test(comparisonString);
  } else if (typeof errMatcher === 'string') {
    return comparisonString.indexOf(errMatcher) !== -1; // eslint-disable-line no-magic-numbers
  }

  return false;
}

/**
 * ### .getFunctionName(constructorFn)
 *
 * Returns the name of a function.
 * This also includes a polyfill function if `constructorFn.name` is not defined.
 *
 * @name getFunctionName
 * @param {Function} constructorFn
 * @namespace Utils
 * @api private
 */

var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;
function getFunctionName(constructorFn) {
  var name = '';
  if (typeof constructorFn.name === 'undefined') {
    // Here we run a polyfill if constructorFn.name is not defined
    var match = String(constructorFn).match(functionNameMatch);
    if (match) {
      name = match[1];
    }
  } else {
    name = constructorFn.name;
  }

  return name;
}

/**
 * ### .getConstructorName(errorLike)
 *
 * Gets the constructor name for an Error instance or constructor itself.
 *
 * @name getConstructorName
 * @param {Error|ErrorConstructor} errorLike
 * @namespace Utils
 * @api public
 */

function getConstructorName(errorLike) {
  var constructorName = errorLike;
  if (errorLike instanceof Error) {
    constructorName = getFunctionName(errorLike.constructor);
  } else if (typeof errorLike === 'function') {
    // If `err` is not an instance of Error it is an error constructor itself or another function.
    // If we've got a common function we get its name, otherwise we may need to create a new instance
    // of the error just in case it's a poorly-constructed error. Please see chaijs/chai/issues/45 to know more.
    constructorName = getFunctionName(errorLike).trim() ||
        getFunctionName(new errorLike()); // eslint-disable-line new-cap
  }

  return constructorName;
}

/**
 * ### .getMessage(errorLike)
 *
 * Gets the error message from an error.
 * If `err` is a String itself, we return it.
 * If the error has no message, we return an empty string.
 *
 * @name getMessage
 * @param {Error|String} errorLike
 * @namespace Utils
 * @api public
 */

function getMessage(errorLike) {
  var msg = '';
  if (errorLike && errorLike.message) {
    msg = errorLike.message;
  } else if (typeof errorLike === 'string') {
    msg = errorLike;
  }

  return msg;
}

module.exports = {
  compatibleInstance: compatibleInstance,
  compatibleConstructor: compatibleConstructor,
  compatibleMessage: compatibleMessage,
  getMessage: getMessage,
  getConstructorName: getConstructorName,
};


/***/ }),

/***/ "./node_modules/deep-eql/index.js":
/*!****************************************!*\
  !*** ./node_modules/deep-eql/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* globals Symbol: false, Uint8Array: false, WeakMap: false */
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var type = __webpack_require__(/*! type-detect */ "./node_modules/type-detect/type-detect.js");
function FakeMap() {
  this._key = 'chai/deep-eql__' + Math.random() + Date.now();
}

FakeMap.prototype = {
  get: function getMap(key) {
    return key[this._key];
  },
  set: function setMap(key, value) {
    if (Object.isExtensible(key)) {
      Object.defineProperty(key, this._key, {
        value: value,
        configurable: true,
      });
    }
  },
};

var MemoizeMap = typeof WeakMap === 'function' ? WeakMap : FakeMap;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return null;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    var result = leftHandMap.get(rightHandOperand);
    if (typeof result === 'boolean') {
      return result;
    }
  }
  return null;
}

/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    leftHandMap.set(rightHandOperand, result);
  } else {
    leftHandMap = new MemoizeMap();
    leftHandMap.set(rightHandOperand, result);
    memoizeMap.set(leftHandOperand, leftHandMap);
  }
}

/*!
 * Primary Export
 */

module.exports = deepEqual;
module.exports.MemoizeMap = MemoizeMap;

/**
 * Assert deeply nested sameValue equality between two objects of any type.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
 */
function deepEqual(leftHandOperand, rightHandOperand, options) {
  // If we have a comparator, we can't assume anything; so bail to its check first.
  if (options && options.comparator) {
    return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
  }

  var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
  if (simpleResult !== null) {
    return simpleResult;
  }

  // Deeper comparisons are pushed through to a larger function
  return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
}

/**
 * Many comparisons can be canceled out early via simple equality or primitive checks.
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @return {Boolean|null} equal match
 */
function simpleEqual(leftHandOperand, rightHandOperand) {
  // Equal references (except for Numbers) can be returned early
  if (leftHandOperand === rightHandOperand) {
    // Handle +-0 cases
    return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
  }

  // handle NaN cases
  if (
    leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
    rightHandOperand !== rightHandOperand // eslint-disable-line no-self-compare
  ) {
    return true;
  }

  // Anything that is not an 'object', i.e. symbols, functions, booleans, numbers,
  // strings, and undefined, can be compared by reference.
  if (isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    // Easy out b/c it would have passed the first equality check
    return false;
  }
  return null;
}

/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
  options = options || {};
  options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
  var comparator = options && options.comparator;

  // Check if a memoized result exists.
  var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
  if (memoizeResultLeft !== null) {
    return memoizeResultLeft;
  }
  var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
  if (memoizeResultRight !== null) {
    return memoizeResultRight;
  }

  // If a comparator is present, use it.
  if (comparator) {
    var comparatorResult = comparator(leftHandOperand, rightHandOperand);
    // Comparators may return null, in which case we want to go back to default behavior.
    if (comparatorResult === false || comparatorResult === true) {
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
      return comparatorResult;
    }
    // To allow comparators to override *any* behavior, we ran them first. Since it didn't decide
    // what to do, we need to make sure to return the basic tests first before we move on.
    var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
    if (simpleResult !== null) {
      // Don't memoize this, it takes longer to set/retrieve than to just compare.
      return simpleResult;
    }
  }

  var leftHandType = type(leftHandOperand);
  if (leftHandType !== type(rightHandOperand)) {
    memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
    return false;
  }

  // Temporarily set the operands in the memoize object to prevent blowing the stack
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);

  var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
  return result;
}

function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
  switch (leftHandType) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Date':
      // If these types are their instance types (e.g. `new Number`) then re-deepEqual against their values
      return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
    case 'Promise':
    case 'Symbol':
    case 'function':
    case 'WeakMap':
    case 'WeakSet':
    case 'Error':
      return leftHandOperand === rightHandOperand;
    case 'Arguments':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'Array':
      return iterableEqual(leftHandOperand, rightHandOperand, options);
    case 'RegExp':
      return regexpEqual(leftHandOperand, rightHandOperand);
    case 'Generator':
      return generatorEqual(leftHandOperand, rightHandOperand, options);
    case 'DataView':
      return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
    case 'ArrayBuffer':
      return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
    case 'Set':
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    case 'Map':
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    default:
      return objectEqual(leftHandOperand, rightHandOperand, options);
  }
}

/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */

function regexpEqual(leftHandOperand, rightHandOperand) {
  return leftHandOperand.toString() === rightHandOperand.toString();
}

/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function entriesEqual(leftHandOperand, rightHandOperand, options) {
  // IE11 doesn't support Set#entries or Set#@@iterator, so we need manually populate using Set#forEach
  if (leftHandOperand.size !== rightHandOperand.size) {
    return false;
  }
  if (leftHandOperand.size === 0) {
    return true;
  }
  var leftHandItems = [];
  var rightHandItems = [];
  leftHandOperand.forEach(function gatherEntries(key, value) {
    leftHandItems.push([ key, value ]);
  });
  rightHandOperand.forEach(function gatherEntries(key, value) {
    rightHandItems.push([ key, value ]);
  });
  return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
}

/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function iterableEqual(leftHandOperand, rightHandOperand, options) {
  var length = leftHandOperand.length;
  if (length !== rightHandOperand.length) {
    return false;
  }
  if (length === 0) {
    return true;
  }
  var index = -1;
  while (++index < length) {
    if (deepEqual(leftHandOperand[index], rightHandOperand[index], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function generatorEqual(leftHandOperand, rightHandOperand, options) {
  return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
}

/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function hasIteratorFunction(target) {
  return typeof Symbol !== 'undefined' &&
    typeof target === 'object' &&
    typeof Symbol.iterator !== 'undefined' &&
    typeof target[Symbol.iterator] === 'function';
}

/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function getIteratorEntries(target) {
  if (hasIteratorFunction(target)) {
    try {
      return getGeneratorEntries(target[Symbol.iterator]());
    } catch (iteratorError) {
      return [];
    }
  }
  return [];
}

/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function getGeneratorEntries(generator) {
  var generatorResult = generator.next();
  var accumulator = [ generatorResult.value ];
  while (generatorResult.done === false) {
    generatorResult = generator.next();
    accumulator.push(generatorResult.value);
  }
  return accumulator;
}

/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function getEnumerableKeys(target) {
  var keys = [];
  for (var key in target) {
    keys.push(key);
  }
  return keys;
}

/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function keysEqual(leftHandOperand, rightHandOperand, keys, options) {
  var length = keys.length;
  if (length === 0) {
    return true;
  }
  for (var i = 0; i < length; i += 1) {
    if (deepEqual(leftHandOperand[keys[i]], rightHandOperand[keys[i]], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function objectEqual(leftHandOperand, rightHandOperand, options) {
  var leftHandKeys = getEnumerableKeys(leftHandOperand);
  var rightHandKeys = getEnumerableKeys(rightHandOperand);
  if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
    leftHandKeys.sort();
    rightHandKeys.sort();
    if (iterableEqual(leftHandKeys, rightHandKeys) === false) {
      return false;
    }
    return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
  }

  var leftHandEntries = getIteratorEntries(leftHandOperand);
  var rightHandEntries = getIteratorEntries(rightHandOperand);
  if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
    leftHandEntries.sort();
    rightHandEntries.sort();
    return iterableEqual(leftHandEntries, rightHandEntries, options);
  }

  if (leftHandKeys.length === 0 &&
      leftHandEntries.length === 0 &&
      rightHandKeys.length === 0 &&
      rightHandEntries.length === 0) {
    return true;
  }

  return false;
}

/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function isPrimitive(value) {
  return value === null || typeof value !== 'object';
}


/***/ }),

/***/ "./node_modules/get-func-name/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-func-name/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* !
 * Chai - getFuncName utility
 * Copyright(c) 2012-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getFuncName(constructorFn)
 *
 * Returns the name of a function.
 * When a non-function instance is passed, returns `null`.
 * This also includes a polyfill function if `aFunc.name` is not defined.
 *
 * @name getFuncName
 * @param {Function} funct
 * @namespace Utils
 * @api public
 */

var toString = Function.prototype.toString;
var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
function getFuncName(aFunc) {
  if (typeof aFunc !== 'function') {
    return null;
  }

  var name = '';
  if (typeof Function.prototype.name === 'undefined' && typeof aFunc.name === 'undefined') {
    // Here we run a polyfill if Function does not support the `name` property and if aFunc.name is not defined
    var match = toString.call(aFunc).match(functionNameMatch);
    if (match) {
      name = match[1];
    }
  } else {
    // If we've got a `name` property we just use it
    name = aFunc.name;
  }

  return name;
}

module.exports = getFuncName;


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/pathval/index.js":
/*!***************************************!*\
  !*** ./node_modules/pathval/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* !
 * Chai - pathval utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */

/**
 * ### .hasProperty(object, name)
 *
 * This allows checking whether an object has own
 * or inherited from prototype chain named property.
 *
 * Basically does the same thing as the `in`
 * operator but works properly with null/undefined values
 * and other primitives.
 *
 *     var obj = {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *
 * The following would be the results.
 *
 *     hasProperty(obj, 'str');  // true
 *     hasProperty(obj, 'constructor');  // true
 *     hasProperty(obj, 'bar');  // false
 *
 *     hasProperty(obj.str, 'length'); // true
 *     hasProperty(obj.str, 1);  // true
 *     hasProperty(obj.str, 5);  // false
 *
 *     hasProperty(obj.arr, 'length');  // true
 *     hasProperty(obj.arr, 2);  // true
 *     hasProperty(obj.arr, 3);  // false
 *
 * @param {Object} object
 * @param {String|Symbol} name
 * @returns {Boolean} whether it exists
 * @namespace Utils
 * @name hasProperty
 * @api public
 */

function hasProperty(obj, name) {
  if (typeof obj === 'undefined' || obj === null) {
    return false;
  }

  // The `in` operator does not work with primitives.
  return name in Object(obj);
}

/* !
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `internalGetPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be infinitely deep and nested.
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */

function parsePath(path) {
  var str = path.replace(/([^\\])\[/g, '$1.[');
  var parts = str.match(/(\\\.|[^.]+?)+/g);
  return parts.map(function mapMatches(value) {
    var regexp = /^\[(\d+)\]$/;
    var mArr = regexp.exec(value);
    var parsed = null;
    if (mArr) {
      parsed = { i: parseFloat(mArr[1]) };
    } else {
      parsed = { p: value.replace(/\\([.\[\]])/g, '$1') };
    }

    return parsed;
  });
}

/* !
 * ## internalGetPathValue(obj, parsed[, pathDepth])
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(obj, parsed);
 *
 * @param {Object} object to search against
 * @param {Object} parsed definition from `parsePath`.
 * @param {Number} depth (nesting level) of the property we want to retrieve
 * @returns {Object|Undefined} value
 * @api private
 */

function internalGetPathValue(obj, parsed, pathDepth) {
  var temporaryValue = obj;
  var res = null;
  pathDepth = (typeof pathDepth === 'undefined' ? parsed.length : pathDepth);

  for (var i = 0; i < pathDepth; i++) {
    var part = parsed[i];
    if (temporaryValue) {
      if (typeof part.p === 'undefined') {
        temporaryValue = temporaryValue[part.i];
      } else {
        temporaryValue = temporaryValue[part.p];
      }

      if (i === (pathDepth - 1)) {
        res = temporaryValue;
      }
    }
  }

  return res;
}

/* !
 * ## internalSetPathValue(obj, value, parsed)
 *
 * Companion function for `parsePath` that sets
 * the value located at a parsed address.
 *
 *  internalSetPathValue(obj, 'value', parsed);
 *
 * @param {Object} object to search and define on
 * @param {*} value to use upon set
 * @param {Object} parsed definition from `parsePath`
 * @api private
 */

function internalSetPathValue(obj, val, parsed) {
  var tempObj = obj;
  var pathDepth = parsed.length;
  var part = null;
  // Here we iterate through every part of the path
  for (var i = 0; i < pathDepth; i++) {
    var propName = null;
    var propVal = null;
    part = parsed[i];

    // If it's the last part of the path, we set the 'propName' value with the property name
    if (i === (pathDepth - 1)) {
      propName = typeof part.p === 'undefined' ? part.i : part.p;
      // Now we set the property with the name held by 'propName' on object with the desired val
      tempObj[propName] = val;
    } else if (typeof part.p !== 'undefined' && tempObj[part.p]) {
      tempObj = tempObj[part.p];
    } else if (typeof part.i !== 'undefined' && tempObj[part.i]) {
      tempObj = tempObj[part.i];
    } else {
      // If the obj doesn't have the property we create one with that name to define it
      var next = parsed[i + 1];
      // Here we set the name of the property which will be defined
      propName = typeof part.p === 'undefined' ? part.i : part.p;
      // Here we decide if this property will be an array or a new object
      propVal = typeof next.p === 'undefined' ? [] : {};
      tempObj[propName] = propVal;
      tempObj = tempObj[propName];
    }
  }
}

/**
 * ### .getPathInfo(object, path)
 *
 * This allows the retrieval of property info in an
 * object given a string path.
 *
 * The path info consists of an object with the
 * following properties:
 *
 * * parent - The parent object of the property referenced by `path`
 * * name - The name of the final property, a number if it was an array indexer
 * * value - The value of the property, if it exists, otherwise `undefined`
 * * exists - Whether the property exists or not
 *
 * @param {Object} object
 * @param {String} path
 * @returns {Object} info
 * @namespace Utils
 * @name getPathInfo
 * @api public
 */

function getPathInfo(obj, path) {
  var parsed = parsePath(path);
  var last = parsed[parsed.length - 1];
  var info = {
    parent: parsed.length > 1 ? internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
    name: last.p || last.i,
    value: internalGetPathValue(obj, parsed),
  };
  info.exists = hasProperty(info.parent, info.name);

  return info;
}

/**
 * ### .getPathValue(object, path)
 *
 * This allows the retrieval of values in an
 * object given a string path.
 *
 *     var obj = {
 *         prop1: {
 *             arr: ['a', 'b', 'c']
 *           , str: 'Hello'
 *         }
 *       , prop2: {
 *             arr: [ { nested: 'Universe' } ]
 *           , str: 'Hello again!'
 *         }
 *     }
 *
 * The following would be the results.
 *
 *     getPathValue(obj, 'prop1.str'); // Hello
 *     getPathValue(obj, 'prop1.att[2]'); // b
 *     getPathValue(obj, 'prop2.arr[0].nested'); // Universe
 *
 * @param {Object} object
 * @param {String} path
 * @returns {Object} value or `undefined`
 * @namespace Utils
 * @name getPathValue
 * @api public
 */

function getPathValue(obj, path) {
  var info = getPathInfo(obj, path);
  return info.value;
}

/**
 * ### .setPathValue(object, path, value)
 *
 * Define the value in an object at a given string path.
 *
 * ```js
 * var obj = {
 *     prop1: {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *   , prop2: {
 *         arr: [ { nested: 'Universe' } ]
 *       , str: 'Hello again!'
 *     }
 * };
 * ```
 *
 * The following would be acceptable.
 *
 * ```js
 * var properties = require('tea-properties');
 * properties.set(obj, 'prop1.str', 'Hello Universe!');
 * properties.set(obj, 'prop1.arr[2]', 'B');
 * properties.set(obj, 'prop2.arr[0].nested.value', { hello: 'universe' });
 * ```
 *
 * @param {Object} object
 * @param {String} path
 * @param {Mixed} value
 * @api private
 */

function setPathValue(obj, path, val) {
  var parsed = parsePath(path);
  internalSetPathValue(obj, val, parsed);
  return obj;
}

module.exports = {
  hasProperty: hasProperty,
  getPathInfo: getPathInfo,
  getPathValue: getPathValue,
  setPathValue: setPathValue,
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/type-detect/type-detect.js":
/*!*************************************************!*\
  !*** ./node_modules/type-detect/type-detect.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

/* !
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var promiseExists = typeof Promise === 'function';

/* eslint-disable no-undef */
var globalObject = typeof self === 'object' ? self : global; // eslint-disable-line id-blacklist

var symbolExists = typeof Symbol !== 'undefined';
var mapExists = typeof Map !== 'undefined';
var setExists = typeof Set !== 'undefined';
var weakMapExists = typeof WeakMap !== 'undefined';
var weakSetExists = typeof WeakSet !== 'undefined';
var dataViewExists = typeof DataView !== 'undefined';
var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== 'undefined';
var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== 'undefined';
var setEntriesExists = setExists && typeof Set.prototype.entries === 'function';
var mapEntriesExists = mapExists && typeof Map.prototype.entries === 'function';
var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf(new Set().entries());
var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf(new Map().entries());
var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === 'function';
var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
var toStringLeftSliceLength = 8;
var toStringRightSliceLength = -1;
/**
 * ### typeOf (obj)
 *
 * Uses `Object.prototype.toString` to determine the type of an object,
 * normalising behaviour across engine versions & well optimised.
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
function typeDetect(obj) {
  /* ! Speed optimisation
   * Pre:
   *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
   *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
   *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
   *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
   *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
   * Post:
   *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
   *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
   *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
   *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
   *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
   */
  var typeofObj = typeof obj;
  if (typeofObj !== 'object') {
    return typeofObj;
  }

  /* ! Speed optimisation
   * Pre:
   *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
   * Post:
   *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
   */
  if (obj === null) {
    return 'null';
  }

  /* ! Spec Conformance
   * Test: `Object.prototype.toString.call(window)``
   *  - Node === "[object global]"
   *  - Chrome === "[object global]"
   *  - Firefox === "[object Window]"
   *  - PhantomJS === "[object Window]"
   *  - Safari === "[object Window]"
   *  - IE 11 === "[object Window]"
   *  - IE Edge === "[object Window]"
   * Test: `Object.prototype.toString.call(this)``
   *  - Chrome Worker === "[object global]"
   *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
   *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
   *  - IE 11 Worker === "[object WorkerGlobalScope]"
   *  - IE Edge Worker === "[object WorkerGlobalScope]"
   */
  if (obj === globalObject) {
    return 'global';
  }

  /* ! Speed optimisation
   * Pre:
   *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
   * Post:
   *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
   */
  if (
    Array.isArray(obj) &&
    (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))
  ) {
    return 'Array';
  }

  // Not caching existence of `window` and related properties due to potential
  // for `window` to be unset before tests in quasi-browser environments.
  if (typeof window === 'object' && window !== null) {
    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/browsers.html#location)
     * WhatWG HTML$7.7.3 - The `Location` interface
     * Test: `Object.prototype.toString.call(window.location)``
     *  - IE <=11 === "[object Object]"
     *  - IE Edge <=13 === "[object Object]"
     */
    if (typeof window.location === 'object' && obj === window.location) {
      return 'Location';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#document)
     * WhatWG HTML$3.1.1 - The `Document` object
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     *       WhatWG HTML states:
     *         > For historical reasons, Window objects must also have a
     *         > writable, configurable, non-enumerable property named
     *         > HTMLDocument whose value is the Document interface object.
     * Test: `Object.prototype.toString.call(document)``
     *  - Chrome === "[object HTMLDocument]"
     *  - Firefox === "[object HTMLDocument]"
     *  - Safari === "[object HTMLDocument]"
     *  - IE <=10 === "[object Document]"
     *  - IE 11 === "[object HTMLDocument]"
     *  - IE Edge <=13 === "[object HTMLDocument]"
     */
    if (typeof window.document === 'object' && obj === window.document) {
      return 'Document';
    }

    if (typeof window.navigator === 'object') {
      /* ! Spec Conformance
       * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
       * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
       * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
       *  - IE <=10 === "[object MSMimeTypesCollection]"
       */
      if (typeof window.navigator.mimeTypes === 'object' &&
          obj === window.navigator.mimeTypes) {
        return 'MimeTypeArray';
      }

      /* ! Spec Conformance
       * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
       * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
       * Test: `Object.prototype.toString.call(navigator.plugins)``
       *  - IE <=10 === "[object MSPluginsCollection]"
       */
      if (typeof window.navigator.plugins === 'object' &&
          obj === window.navigator.plugins) {
        return 'PluginArray';
      }
    }

    if ((typeof window.HTMLElement === 'function' ||
        typeof window.HTMLElement === 'object') &&
        obj instanceof window.HTMLElement) {
      /* ! Spec Conformance
      * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
      * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
      * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
      *  - IE <=10 === "[object HTMLBlockElement]"
      */
      if (obj.tagName === 'BLOCKQUOTE') {
        return 'HTMLQuoteElement';
      }

      /* ! Spec Conformance
       * (https://html.spec.whatwg.org/#htmltabledatacellelement)
       * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
       * Note: Most browsers currently adher to the W3C DOM Level 2 spec
       *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
       *       which suggests that browsers should use HTMLTableCellElement for
       *       both TD and TH elements. WhatWG separates these.
       * Test: Object.prototype.toString.call(document.createElement('td'))
       *  - Chrome === "[object HTMLTableCellElement]"
       *  - Firefox === "[object HTMLTableCellElement]"
       *  - Safari === "[object HTMLTableCellElement]"
       */
      if (obj.tagName === 'TD') {
        return 'HTMLTableDataCellElement';
      }

      /* ! Spec Conformance
       * (https://html.spec.whatwg.org/#htmltableheadercellelement)
       * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
       * Note: Most browsers currently adher to the W3C DOM Level 2 spec
       *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
       *       which suggests that browsers should use HTMLTableCellElement for
       *       both TD and TH elements. WhatWG separates these.
       * Test: Object.prototype.toString.call(document.createElement('th'))
       *  - Chrome === "[object HTMLTableCellElement]"
       *  - Firefox === "[object HTMLTableCellElement]"
       *  - Safari === "[object HTMLTableCellElement]"
       */
      if (obj.tagName === 'TH') {
        return 'HTMLTableHeaderCellElement';
      }
    }
  }

  /* ! Speed optimisation
  * Pre:
  *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
  *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
  *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
  *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
  *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
  *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
  *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
  *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
  *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
  * Post:
  *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
  *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
  *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
  *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
  *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
  *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
  *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
  *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
  *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
  */
  var stringTag = (symbolToStringTagExists && obj[Symbol.toStringTag]);
  if (typeof stringTag === 'string') {
    return stringTag;
  }

  var objPrototype = Object.getPrototypeOf(obj);
  /* ! Speed optimisation
  * Pre:
  *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
  *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
  * Post:
  *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
  *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
  */
  if (objPrototype === RegExp.prototype) {
    return 'RegExp';
  }

  /* ! Speed optimisation
  * Pre:
  *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
  * Post:
  *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
  */
  if (objPrototype === Date.prototype) {
    return 'Date';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
   * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
   * Test: `Object.prototype.toString.call(Promise.resolve())``
   *  - Chrome <=47 === "[object Object]"
   *  - Edge <=20 === "[object Object]"
   *  - Firefox 29-Latest === "[object Promise]"
   *  - Safari 7.1-Latest === "[object Promise]"
   */
  if (promiseExists && objPrototype === Promise.prototype) {
    return 'Promise';
  }

  /* ! Speed optimisation
  * Pre:
  *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
  * Post:
  *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
  */
  if (setExists && objPrototype === Set.prototype) {
    return 'Set';
  }

  /* ! Speed optimisation
  * Pre:
  *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
  * Post:
  *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
  */
  if (mapExists && objPrototype === Map.prototype) {
    return 'Map';
  }

  /* ! Speed optimisation
  * Pre:
  *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
  * Post:
  *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
  */
  if (weakSetExists && objPrototype === WeakSet.prototype) {
    return 'WeakSet';
  }

  /* ! Speed optimisation
  * Pre:
  *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
  * Post:
  *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
  */
  if (weakMapExists && objPrototype === WeakMap.prototype) {
    return 'WeakMap';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
   * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
   * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
   *  - Edge <=13 === "[object Object]"
   */
  if (dataViewExists && objPrototype === DataView.prototype) {
    return 'DataView';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
   * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
   * Test: `Object.prototype.toString.call(new Map().entries())``
   *  - Edge <=13 === "[object Object]"
   */
  if (mapExists && objPrototype === mapIteratorPrototype) {
    return 'Map Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
   * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
   * Test: `Object.prototype.toString.call(new Set().entries())``
   *  - Edge <=13 === "[object Object]"
   */
  if (setExists && objPrototype === setIteratorPrototype) {
    return 'Set Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
   * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
   * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
   *  - Edge <=13 === "[object Object]"
   */
  if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
    return 'Array Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
   * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
   * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
   *  - Edge <=13 === "[object Object]"
   */
  if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
    return 'String Iterator';
  }

  /* ! Speed optimisation
  * Pre:
  *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
  * Post:
  *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
  */
  if (objPrototype === null) {
    return 'Object';
  }

  return Object
    .prototype
    .toString
    .call(obj)
    .slice(toStringLeftSliceLength, toStringRightSliceLength);
}

return typeDetect;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./test/api.basic.keygen.spec.js":
/*!***************************************!*\
  !*** ./test/api.basic.keygen.spec.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prepare_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prepare.js */ "./test/prepare.js");
/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chai */ "./node_modules/chai/index.js");
/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_3__);



var testEnv = Object(_prepare_js__WEBPACK_IMPORTED_MODULE_2__["getTestEnv"])();
var core = testEnv.library;
var env = testEnv.envName;
 // const should = chai.should();

var expect = chai__WEBPACK_IMPORTED_MODULE_3___default.a.expect;
describe("".concat(env, ": public and private key pair generation test"), function () {
  var curves = ['P-256', 'P-384', 'P-521'];
  var modulusLength = [2048, 4096];
  var userIds = ['kurihara@zettant.com'];
  it('OpenPGP key generation with passphrase',
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var keyArray, ok;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            this.timeout(5000);
            _context.next = 3;
            return Promise.all(curves.map(function (curve) {
              var keyParam = {
                suite: 'openpgp',
                userIds: userIds,
                passphrase: 'omg',
                keyParams: {
                  type: 'ec',
                  keyExpirationTime: 0,
                  curve: curve
                }
              };
              return core.generateKey(keyParam);
            }));

          case 3:
            keyArray = _context.sent;
            // console.log(keyArray);
            ok = keyArray.every(function (k) {
              return !!k.privateKey.passphrase;
            });
            expect(ok).to.be.true;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  it('OpenPGP key generation without passphrase',
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var baseParam, keyArray, ng;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            this.timeout(5000);
            baseParam = {
              type: 'ec',
              keyExpirationTime: 0
            };
            _context2.next = 4;
            return Promise.all(curves.map(function (curve) {
              var keyParam = {
                suite: 'openpgp',
                userIds: userIds,
                keyParams: Object.assign(baseParam, {
                  curve: curve
                })
              };
              return core.generateKey(keyParam);
            }));

          case 4:
            keyArray = _context2.sent;
            // console.log(keyArray);
            ng = keyArray.every(function (k) {
              return !k.privateKey.passphrase;
            });
            expect(ng).to.be.true;

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  it('JSCU EC public key pair generation',
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var success, keyArray;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            this.timeout(5000);
            success = true;
            _context3.next = 4;
            return Promise.all(curves.map(function (curve) {
              var keyParam = {
                suite: 'jscu',
                keyParams: {
                  type: 'ec',
                  curve: curve
                }
              };
              return core.generateKey(keyParam);
            })).catch(function (e) {
              console.error(e.message);
              success = false;
            });

          case 4:
            keyArray = _context3.sent;
            expect(success).to.be.true; // console.log(keyArray);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  it('JSCU protected EC public key pair generation',
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var success, keyArray;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            this.timeout(5000);
            success = true;
            _context4.next = 4;
            return Promise.all(curves.map(function (curve) {
              var keyParam = {
                suite: 'jscu',
                keyParams: {
                  type: 'ec',
                  curve: curve
                },
                passphrase: 'omg'
              };
              return core.generateKey(keyParam);
            })).catch(function (e) {
              console.error(e.message);
              success = false;
            });

          case 4:
            keyArray = _context4.sent;
            expect(success).to.be.true; // console.log(keyArray);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  it('JSCU RSA public key pair generation',
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
    var success, keyArray;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            this.timeout(5000);
            success = true;
            _context5.next = 4;
            return Promise.all(modulusLength.map(function (ml) {
              var keyParam = {
                suite: 'jscu',
                keyParams: {
                  type: 'rsa',
                  modulusLength: ml
                }
              };
              return core.generateKey(keyParam);
            })).catch(function (e) {
              console.error(e.message);
              success = false;
            });

          case 4:
            keyArray = _context5.sent;
            expect(success).to.be.true; // console.log(keyArray);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  it('JSCU protected RSA public key pair generation',
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var success, keyArray;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            this.timeout(5000);
            success = true;
            _context6.next = 4;
            return Promise.all(modulusLength.map(function (ml) {
              var keyParam = {
                suite: 'jscu',
                keyParams: {
                  type: 'rsa',
                  modulusLength: ml
                },
                passphrase: 'omg'
              };
              return core.generateKey(keyParam);
            })).catch(function (e) {
              console.error(e.message);
              success = false;
            });

          case 4:
            keyArray = _context6.sent;
            expect(success).to.be.true; // keyArray.map( (x) => {console.log(x);});

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  it('OpenPGP symmetric session key generation',
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
    var keyParam, key;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            this.timeout(5000);
            keyParam = {
              suite: 'openpgp',
              keyParams: {
                type: 'session',
                length: 32
              }
            };
            _context7.next = 4;
            return core.generateKey(keyParam);

          case 4:
            key = _context7.sent;
            expect(key.key instanceof Uint8Array && key.key.length === 32).to.be.true; // console.log(key);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  it('JSCU symmetric session key generation',
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
    var keyParam, key;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            this.timeout(5000);
            keyParam = {
              suite: 'jscu',
              keyParams: {
                type: 'session',
                length: 32
              }
            };
            _context8.next = 4;
            return core.generateKey(keyParam);

          case 4:
            key = _context8.sent;
            expect(key.key instanceof Uint8Array && key.key.length === 32).to.be.true; // console.log(key);

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
});

/***/ }),

/***/ "./test/prepare.js":
/*!*************************!*\
  !*** ./test/prepare.js ***!
  \*************************/
/*! exports provided: getTestEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTestEnv", function() { return getTestEnv; });
/**
 * prepare.js
 */
var common = __webpack_require__(/*! ../webpack.common.js */ "./webpack.common.js");

function getTestEnv() {
  var envName;
  var message;
  var library;

  if (true) {
    envName = 'Bundle';
    message = '**This is a test with a bundled library';
    library = __webpack_require__("./dist sync recursive cascade.bundle.js")("./".concat(common.bundleName));
  } else {}

  return {
    library: library,
    envName: envName,
    message: message
  };
}

/***/ }),

/***/ "./webpack.common.js":
/*!***************************!*\
  !*** ./webpack.common.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {/**
 * webpack.common.js
 */
//////////////////////////////////////////////////////////////////////////
// Base Config of Your Library
const libName = 'cascade';
const entry = './src/index.js';

//////////////////////////////////////////////////////////////////////////
const path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

// webpack main configration
const webpackConfig = {
  target: 'web',
  entry: {},
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: path.resolve(__dirname, './dist'),
    library: libName,
    libraryTarget: 'umd',
    globalObject: 'this' // for node js import
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(m|)js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: path.join(__dirname, 'node_modules') // exclude: /node_modules/
      }
    ]
  },
  externals:[{
    'js-crypto-utils': true,
    'openpgp': true
  }],
  node: {
    fs: 'empty',
    Buffer: false
  }
};

webpackConfig.entry[libName] = [entry];

function getBundleName () {
  const regexp = /\[name\]/g;
  return webpackConfig.output.filename.replace(regexp, libName);
}

function getEntryName () {
  const regexp = /.*src\//;
  return webpackConfig.entry[libName][0].replace(regexp, '');
}

module.exports = {
  webpackConfig,
  libName,
  entryName: getEntryName(),
  bundleName: getBundleName(),
};

// // port babelrc from .babelrc
// function getBabelOptionsForWebpack() {
//   const pluginExclude = []; // add here node-specific plugins
//   const babelrc = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'));
//   babelrc.babelrc = false;
//   babelrc.presets = babelrc.presets.map( (elem) => {
//     if (elem instanceof Array && elem.length > 0){
//       // for browsers. if true, import statements will be transpiled to CommonJS 'require', and webpack tree shaking doesn't work.
//       if(elem[0] === '@babel/preset-env') elem[1].modules = false;
//     }
//     return elem;
//   });
//   babelrc.plugins = babelrc.plugins.filter( (elem) => pluginExclude.indexOf(elem) < 0);
//   return babelrc;
// }


/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ 3:
/*!*********************************************!*\
  !*** multi ./test/api.basic.keygen.spec.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./test/api.basic.keygen.spec.js */"./test/api.basic.keygen.spec.js");


/***/ }),

/***/ "js-crypto-utils":
/*!**********************************!*\
  !*** external "js-crypto-utils" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_js_crypto_utils__;

/***/ }),

/***/ "openpgp":
/*!**************************!*\
  !*** external "openpgp" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_openpgp__;

/***/ })

/******/ });
});