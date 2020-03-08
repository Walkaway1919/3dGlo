!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=10)}([function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(0),o=setTimeout;function i(e){return Boolean(e&&void 0!==e.length)}function a(){}function s(e){if(!(this instanceof s))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(e,this)}function c(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,s._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void l(t.promise,e)}u(t.promise,r)}else(1===e._state?u:l)(t.promise,e._value)}))):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof s)return e._state=3,e._value=t,void f(e);if("function"==typeof n)return void h((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,f(e)}catch(t){l(e,t)}var r,o}function l(e,t){e._state=2,e._value=t,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&s._immediateFn((function(){e._handled||s._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)c(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function h(e,t){var n=!1;try{e((function(e){n||(n=!0,u(t,e))}),(function(e){n||(n=!0,l(t,e))}))}catch(e){if(n)return;n=!0,l(t,e)}}s.prototype.catch=function(e){return this.then(null,e)},s.prototype.then=function(e,t){var n=new this.constructor(a);return c(this,new d(e,t,n)),n},s.prototype.finally=r.a,s.all=function(e){return new s((function(t,n){if(!i(e))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function a(e,i){try{if(i&&("object"==typeof i||"function"==typeof i)){var s=i.then;if("function"==typeof s)return void s.call(i,(function(t){a(e,t)}),n)}r[e]=i,0==--o&&t(r)}catch(e){n(e)}}for(var s=0;s<r.length;s++)a(s,r[s])}))},s.resolve=function(e){return e&&"object"==typeof e&&e.constructor===s?e:new s((function(t){t(e)}))},s.reject=function(e){return new s((function(t,n){n(e)}))},s.race=function(e){return new s((function(t,n){if(!i(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=e.length;r<o;r++)s.resolve(e[r]).then(t,n)}))},s._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},s._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=s}).call(this,n(7).setImmediate)},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},function(e,t){function n(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.appendChild(t)}function r(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.insertBefore(t,this.firstChild)}function o(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.parentNode.insertBefore(t,this)}function i(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.parentNode.insertBefore(t,this.nextSibling)}function a(){null!==this.parentNode&&this.parentNode.removeChild(this)}function s(){var e,t=this.parentNode,n=arguments.length;if(t)for(n||t.removeChild(this);n--;)"object"!=typeof(e=arguments[n])?e=this.ownerDocument.createTextNode(e):e.parentNode&&e.parentNode.removeChild(e),n?t.insertBefore(e,this.previousSibling):t.replaceChild(e,this)}[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(e){e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:n}),e.hasOwnProperty("prepend")||Object.defineProperty(e,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:r}),e.hasOwnProperty("before")||Object.defineProperty(e,"before",{configurable:!0,enumerable:!0,writable:!0,value:o}),e.hasOwnProperty("after")||Object.defineProperty(e,"after",{configurable:!0,enumerable:!0,writable:!0,value:i}),e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:a}),e.replaceWith||(e.replaceWith=s)}))},function(e,t){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)})},function(e,t,n){"use strict";(function(e){var t=n(2),r=n(0),o=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("unable to locate global object")}();"Promise"in o?o.Promise.prototype.finally||(o.Promise.prototype.finally=r.a):o.Promise=t.a}).call(this,n(1))},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(8),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,s,c=1,u={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(p,0,e)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&p(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return u[c]=o,r(c),c++},d.clearImmediate=h}function h(e){delete u[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=u[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{h(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(1),n(9))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&h())}function h(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);n(3),n(4),n(5),n(6);var r="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,i="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in self,s="ArrayBuffer"in self;if(s)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1};function l(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function f(e){return"string"!=typeof e&&(e=String(e)),e}function d(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function p(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function m(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function y(e){var t=new FileReader,n=m(t);return t.readAsArrayBuffer(e),n}function v(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:i&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():s&&i&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=v(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(e)||u(e))?this._bodyArrayBuffer=v(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var e,t,n,r=p(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=m(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(e,t){e=l(e),t=f(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},h.prototype.delete=function(e){delete this.map[l(e)]},h.prototype.get=function(e){return e=l(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(l(e))},h.prototype.set=function(e,t){this.map[l(e)]=f(t)},h.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),d(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),d(e)},o&&(h.prototype[Symbol.iterator]=h.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(e,t){var n,r,o=(t=t||{}).body;if(e instanceof w){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),g.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function T(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}})),t}function E(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},b.call(w.prototype),b.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},E.error=function(){var e=new E(null,{status:0,statusText:""});return e.type="error",e};var _=[301,302,303,307,308];E.redirect=function(e,t){if(-1===_.indexOf(t))throw new RangeError("Invalid status code");return new E(null,{status:t,headers:{location:e}})};var A=self.DOMException;try{new A}catch(e){(A=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),A.prototype.constructor=A}function x(e,t){return new Promise((function(n,r){var o=new w(e,t);if(o.signal&&o.signal.aborted)return r(new A("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new h,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}})),t)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new E(o,r))},a.onerror=function(){r(new TypeError("Network request failed"))},a.ontimeout=function(){r(new TypeError("Network request failed"))},a.onabort=function(){r(new A("Aborted","AbortError"))},a.open(o.method,o.url,!0),"include"===o.credentials?a.withCredentials=!0:"omit"===o.credentials&&(a.withCredentials=!1),"responseType"in a&&i&&(a.responseType="blob"),o.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),o.signal&&(o.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&o.signal.removeEventListener("abort",s)}),a.send(void 0===o._bodyInit?null:o._bodyInit)}))}x.polyfill=!0,self.fetch||(self.fetch=x,self.Headers=h,self.Request=w,self.Response=E);var S=function(){var e=document.querySelector("menu"),t=function(t){console.log("open"),e.classList.toggle("active-menu")};document.addEventListener("click",(function(n){var r=n.target;if(r=r.closest(".menu"))return t(),!1;(r=(r=n.target).closest(".active-menu"))?"A"===n.target.tagName&&t():e.classList.contains("active-menu")&&e.classList.remove("active-menu")}))},L=function(){var e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-content");t.forEach((function(t){t.addEventListener("click",(function(){if(e.style.display="block",document.body.offsetWidth>768){e.style.opacity=0;var t=0;!function n(){(t+=5)<=100?(e.style.opacity=t+"%",requestAnimationFrame(n)):o()}();var r=-50;n.style.left="-50%";var o=function e(){(r+=2)<38&&(n.style.left=r+"%",requestAnimationFrame(e))}}}))})),e.addEventListener("click",(function(t){var r=t.target;r.classList.contains("popup-close")?(e.style.display="none",n.style.left=""):(r=r.closest(".popup-content"))||(e.style.display="none")}))},P=function(){var e=function(e){var t=document.querySelector(e);if(!t)return!1;var n=t.offsetTop,r=window.pageYOffset,o=(n-r)/60;!function e(){window.scrollTo(0,r),r>=n?window.scrollTo(0,n):(r+=o,requestAnimationFrame(e))}()};document.addEventListener("click",(function(t){t.target.hash&&(t.preventDefault(),e(t.target.hash))})),document.querySelector(".scroll-next").addEventListener("click",(function(t){t.preventDefault(),e(this.hash)}))},O=function(){var e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(function(e){var r=e.target;(r=r.closest(".service-header-tab"))&&t.forEach((function(e,o){e===r&&function(e){for(var r=0;r<n.length;r++)e===r?(t[r].classList.add("active"),n[r].classList.remove("d-none")):(t[r].classList.remove("active"),n[r].classList.add("d-none"))}(o)}))}))},j=function(){var e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content")),n=document.createElement("div");n.className="portfolio-dots",t.append(n);for(var r=[],o=0;o<e.length;o++){var i=document.createElement("li");i.classList.add("dot"),0===o&&i.classList.add("dot-active"),n.append(i),r.push(i)}var a,s=0,c=function(e,t,n){e[t].classList.remove(n)},u=function(e,t,n){e[t].classList.add(n)},l=function(){c(e,s,"portfolio-item-active"),c(r,s,"dot-active"),++s>=e.length&&(s=0),u(e,s,"portfolio-item-active"),u(r,s,"dot-active")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;r[s].classList.add("dot-active"),a=setInterval(l,e)};t.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches("#arrow-right, #arrow-left, .dot")&&(c(e,s,"portfolio-item-active"),c(r,s,"dot-active"),n.matches("#arrow-right")?s++:n.matches("#arrow-left")?s--:n.matches(".dot")&&r.forEach((function(e,t){e===n&&(s=t)})),s>=e.length&&(s=0),s<0&&(s=e.length-1),u(e,s,"portfolio-item-active"),u(r,s,"dot-active"))})),t.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&n.querySelector(".dot-active").classList.remove("dot-active"),clearInterval(a)}(e.target.matches(".dot"))})),t.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&f()})),f(1500)},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),o=document.querySelector(".calc-day"),i=document.querySelector(".calc-count"),a=document.getElementById("total"),s=function(){var t=0,s=1,c=1,u=n.options[n.selectedIndex].value,l=parseFloat(r.value);i.value>1&&(s+=(i.value-1)/10),o.value&&o.value<5?c*=2:o.value&&o.value<10&&(c*=1.5),u&&l&&(t=Math.floor(e*u*l*s*c));var f=+a.textContent,d=Math.ceil((t-f)/30);requestAnimationFrame((function e(){f+=d,(d>0?f<t:f>t)?(a.textContent=f,requestAnimationFrame(e)):a.textContent=t}))};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&s()})),t.addEventListener("input",(function(e){var t=e.target;if(t.matches("input")){t.value=e.target.value.replace(/[^\d]{0,}/g,"")}}))},F=function(){var e=document.createElement("div");e.style.cssText="font-size: 2 rem;",document.addEventListener("submit",(function(t){t.preventDefault(),t.target.appendChild(e),e.textContent="Загрузка...";var n=new FormData(t.target);e.style.display="block",fetch("./server.php",{method:"POST",headers:{"Content-Type":"form/multipart"},body:n}).then((function(n){if(200!==n.status)throw new Error("статус ответа "+n.status);e.textContent="Спасибо! Мы с вами свяжемся",t.target.reset()})).catch((function(t){e.textContent="Что-то пошло не так",console.error(t)})).finally((function(){setTimeout((function(){e.style.display="none"}),5e3)}))}))},B=function(){document.querySelectorAll(".command__photo").forEach((function(e){e.addEventListener("mouseover",(function(e){var t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t})),e.addEventListener("mouseout",(function(e){var t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}))}))},C=function(){document.addEventListener("input",(function(e){if("Ваше имя"===e.target.placeholder){e.target.value=e.target.value.replace(/[^а-яА-Я\s\,\.]{0,}/g,"")}if("Номер телефона"===e.target.placeholder){e.target.value=e.target.value.match(/^\+?\d{0,11}/g)[0]}if("Ваше сообщение"===e.target.placeholder){e.target.value=e.target.value.replace(/[^?!,.а-яА-ЯёЁ0-9\s]+$/,"")}}))};(function(){var e=new Date;e.setHours(e.getHours()+24);var t,n=document.querySelector("#timer-hours"),r=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds");!function i(){var a,s,c,u=(a=(e.getTime()-(new Date).getTime())/1e3,s=Math.floor(a%60),c=Math.floor(a/60%60),{timeRemaining:a,hours:Math.floor(a/60/60),minutes:c,seconds:s});n.textContent=u.hours<10?"0"+u.hours:u.hours,r.textContent=u.minutes<10?"0"+u.minutes:u.minutes,o.textContent=u.seconds<10?"0"+u.seconds:u.seconds,u.timeRemaining<0?(clearInterval(t),n.textContent="00",r.textContent="00",o.textContent="00"):t||(t=setInterval(i,1e3))}()})(),S(),L(),O(),j(),I(),F(),B(),C(),P()}]);