!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.id,r=e.hintId,n=e.required,o=e.disabled,l=e.readOnly,i=e.autoFocus,u=e.name,c=e.value,d=e.checked,f=e.onChange,s=e.ref,m=e.label,p=e.hint;return a.default.createElement("div",{className:"g-radios__item"},a.default.createElement("input",{"aria-describedby":r,className:"g-radios__input",id:t,name:u,type:"radio",required:n,disabled:void 0!==o?"true"===o.toString():void 0,readOnly:l,autoFocus:i,value:c,checked:d,onChange:f,ref:s}),a.default.createElement("label",{className:"g-radios__label",htmlFor:t},void 0!==m?m:a.default.createElement(a.default.Fragment,null,"Label text")),void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-radios__hint",id:r},void 0!==p?p:a.default.createElement(a.default.Fragment,null,"Hint text"))):"")}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),o={large:"g-body-l",medium:"g-body-m",small:"g-body-s","x-small":"g-body-xs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom0,n=e.children;return a.default.createElement("p",{className:"g-body"+(void 0!==o[t]?" "+o[t]:"")+(r?" g-body-marginBottom0":"")},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.hintId,n=e.legend,o=e.hint,l=e.error,i=e.children;return a.default.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")},a.default.createElement("fieldset",{"aria-describedby":void 0!==r||void 0!==t?(r||"")+(t?" "+t:""):void 0,className:"g-fieldsetBlock-fieldset"},a.default.createElement("legend",{className:"g-fieldsetBlock-fieldset__legend"},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Legend text")),void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-hint",id:r},void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Hint text"))):"",void 0!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-error-message",id:t},a.default.createElement("span",{className:"g-fieldsetBlock-visually-hidden"},"Error:"),void 0!==l?l:a.default.createElement(a.default.Fragment,null,"Error text"))):"",a.default.createElement("div",null,void 0!==i?i:a.default.createElement(a.default.Fragment,null,"Fieldset contents"))))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),o={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom8,n=e.marginBottom0,l=e.marginTop0,i=e.marginTop8,u=e.id,c=e.children;return a.default.createElement("h1",{className:"g-heading"+(void 0!==o[t]?" "+o[t]:"")+(r?" g-heading-mb-8":"")+(n?" g-heading-mb-0":"")+(l?" g-heading-mt-0":"")+(i?" g-heading-mt-8":""),id:u},void 0!==c?c:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.children;return a.default.createElement("div",{className:"g-form-divider"},void 0!==t?t:a.default.createElement(a.default.Fragment,null,"Contents..."))}},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(3),l=r.n(o),i=r(4),u=r.n(i),c=r(5),d=r.n(c),f=r(2),s=r.n(f),m=r(1),p=r.n(m),v=r(6),g=r.n(v);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t,r){return t&&S(e.prototype,t),r&&S(e,r),e}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var a=M(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return C(this,r)}}function C(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?F(e):t}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var D=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},R=function(e){return a.a.createElement(D,N({title:"Example: Radio button items with a text divider"},B({})),a.a.createElement(u.a,N({legend:a.a.createElement(d.a,{styleSize:"small",id:"providerChoiceTitle2"},"Choose one provider"),hint:a.a.createElement(s.a,null,"Select one provider."),hintId:"hintId234"},B({})),a.a.createElement(p.a,N({label:"Sign in with Aardvark Services",hint:"North Island only",hintId:"someHintId72344",id:"anyRadioId7345",name:"providerChoice3",value:"provider1",labelId:"labelId5"},B({value:"provider1"}))),a.a.createElement(p.a,N({label:"Sign in with Dandelion Services",hint:"South and Stewart Islands only",hintId:"someHintId8533",id:"anyRadioId8345",name:"providerChoice3",value:"provider2",labelId:"labelId8"},B({value:"provider2"}))),a.a.createElement(g.a,B({}),a.a.createElement(s.a,B({}),"-or-")),a.a.createElement(p.a,N({label:"Sign in with Eel Services",hint:"Non-New Zealand residents only",hintId:"someHintId7234444",id:"anyRadioId3459",name:"providerChoice3",value:"provider3",labelId:"labelId9"},B({value:"provider3"})))))},k=a.a.createContext(void 0),B=(n.Component,a.a.Component,a.a.Component,function(e){var t=y(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],o=y(Object(n.useState)(e&&e.value2),2),l=o[0],i=o[1],u=y(Object(n.useState)(e&&e.value3),2),c=u[0],d=u[1];return{value:r,value2:l,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return d(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?l.a.hydrate(a.a.createElement(R,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);