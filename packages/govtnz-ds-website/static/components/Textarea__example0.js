!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0));t.default=function(e){var t=e.errorId,r=e.id,n=e.label,a=e.hintId,u=e.hint,l=e.error,i=e.name,c=e.disabled,f=e.readOnly,s=e.rows,d=e.cols,p=e.autoFocus,y=e.spellCheck,b=e.autoComplete,m=e.maxLength,v=e.value,g=e.onChange,h=e.ref;return o.default.createElement("div",{className:"g-textareaBlock-form-group"+(t?" g-textareaBlock-form-group--error":"")},o.default.createElement("label",{className:"g-textareaBlock-label",htmlFor:r},void 0!==n?n:o.default.createElement(o.default.Fragment,null,"Label text")),void 0!==a?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"g-textareaBlock-hint",id:a},void 0!==u?u:o.default.createElement(o.default.Fragment,null,"Hint text"))):"",void 0!==t?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"g-textareaBlock-error-message",id:t},o.default.createElement("span",{className:"g-textareaBlock-visually-hidden"},"Error:"),void 0!==l?l:o.default.createElement(o.default.Fragment,null,"Error text"))):"",o.default.createElement("textarea",{"aria-describedby":void 0!==a||void 0!==t?(a||"")+(t?" "+t:""):void 0,className:"g-textareaBlock-textarea",id:r,name:i,rows:s,disabled:void 0!==c?"true"===c.toString():void 0,readOnly:f,cols:d,autoFocus:p,spellCheck:y,autoComplete:b,maxLength:m,value:v,onChange:g,ref:h}))}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(1),u=r.n(a),l=r(2),i=r.n(l);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return t&&m(e.prototype,t),r&&m(e,r),e}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return j(this,r)}}function j(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var S=function(e){var t=e.children;return o.a.createElement(n.Fragment,null,t)},P=function(e){return o.a.createElement(S,E({title:"Example: Textarea"},C({})),o.a.createElement(i.a,E({id:"detail",name:"detail",label:"Can you provide more detail?",hintId:"hint1",hint:"Do not include personal or financial information, like your IRD number or credit card details."},C({}))))},_=o.a.createContext(void 0),C=(n.Component,o.a.Component,o.a.Component,function(e){var t=c(Object(n.useState)(e&&e.value),2),r=t[0],o=t[1],a=c(Object(n.useState)(e&&e.value2),2),u=a[0],l=a[1],i=c(Object(n.useState)(e&&e.value3),2),f=i[0],s=i[1];return{value:r,value2:u,value3:f,onChange:function(e){return o(e.target.value)},onChange2:function(e){return l(e.target.value)},onChange3:function(e){return s(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?u.a.hydrate(o.a.createElement(P,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);