!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),l={info:"g-alert--info",warning:"g-alert--warning",success:"g-alert--success",error:"g-alert--error"};t.default=function(e){var t=e.mode,n=e.level,r=e.children,u=e.headingId;return a.default.createElement(a.default.Fragment,null,"live"===t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},a.default.createElement("div",{className:"g-alert"+(void 0!==l[n]?" "+l[n]:"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null," Example alert content "),"info"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("svg",{className:"g-alert__icon",height:"32",viewBox:"0 0 32 32",width:"32"},a.default.createElement("path",{d:"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z"}))):"","warning"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("svg",{className:"g-alert__icon",height:"30",viewBox:"0 0 32 30",width:"32"},a.default.createElement("path",{d:"M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z"}))):"","success"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("svg",{className:"g-alert__icon",height:"32",viewBox:"0 0 32 32",width:"32"},a.default.createElement("path",{d:"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z"}))):"","error"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("svg",{className:"g-alert__icon",height:"32",viewBox:"0 0 32 32",width:"32"},a.default.createElement("path",{d:"M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z"}))):""))):"","live"!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{"aria-labelledby":u,role:"note",tabIndex:-1},a.default.createElement("div",{className:"g-alert"+(void 0!==l[n]?" "+l[n]:"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null," Example alert content "),"info"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("svg",{className:"g-alert__icon",height:"32",viewBox:"0 0 32 32",width:"32"},a.default.createElement("path",{d:"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z"}))):"","warning"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("svg",{className:"g-alert__icon",height:"30",viewBox:"0 0 32 30",width:"32"},a.default.createElement("path",{d:"M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z"}))):"","success"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("svg",{className:"g-alert__icon",height:"32",viewBox:"0 0 32 32",width:"32"},a.default.createElement("path",{d:"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z"}))):"","error"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("svg",{className:"g-alert__icon",height:"32",viewBox:"0 0 32 32",width:"32"},a.default.createElement("path",{d:"M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z"}))):""))):"")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),l={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.marginBottom0,u=e.id,o=e.children;return a.default.createElement("h2",{className:"g-heading"+(void 0!==l[t]?" "+l[t]:"")+(n?" g-heading-mb-8":"")+(r?" g-heading-mb-0":""),id:u},void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),l={styleSize:{large:"g-p-body-l",medium:"g-p-body-m",small:"g-p-body-s","x-small":"g-p-body-xs"}};t.default=function(e){var t=e.styleSize,n=e.children;return a.default.createElement("p",{className:void 0!==l.styleSize[t]?l.styleSize[t]:""},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.bulleted,n=e.children;return a.default.createElement("ul",{className:"g-ul-list"+(t?" g-ul-list--bullet":"")},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.children;return a.default.createElement("li",null,void 0!==t?t:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.isMuted,n=e.href,r=e.rel,l=e.target,u=e.onClick,o=e.children;return a.default.createElement("a",{className:"g-link"+(t?" g-link--muted":""),href:n,rel:r,target:l,onClick:u},void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(4),u=n.n(l),o=n(1),c=n.n(o),i=n(2),f=n.n(i),d=n(3),s=n.n(d),m=n(5),g=n.n(m),p=n(6),v=n.n(p),h=n(7),y=n.n(h);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t&&M(e.prototype,t),n&&M(e,n),e}function z(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var a=N(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return C(this,n)}}function C(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var I=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},R=function(e){return a.a.createElement(I,B({title:"Example: Alerts (static)"},k({})),a.a.createElement(c.a,B({level:"info",headingId:"heading1"},k({})),a.a.createElement(f.a,B({id:"heading1"},k({})),"Info: You are alive"),a.a.createElement(s.a,k({}),"Some text describing what's going on 1.")),a.a.createElement(c.a,B({level:"warning",headingId:"heading2"},k({})),a.a.createElement(f.a,B({id:"heading2"},k({})),"Warning: You are alive"),a.a.createElement(s.a,k({}),"Some text describing what's going on 2.")),a.a.createElement(c.a,B({level:"success",headingId:"heading3"},k({})),a.a.createElement(f.a,B({id:"heading3"},k({})),"Success: You are alive"),a.a.createElement(s.a,k({}),"Some text describing what's going on 3.")),a.a.createElement(c.a,B({level:"error",headingId:"heading4"},k({})),a.a.createElement(f.a,B({id:"heading4"},k({})),"Error: You are alive"),a.a.createElement(g.a,B({bulleted:!0},k({})),a.a.createElement(v.a,k({}),a.a.createElement(y.a,B({href:"#"},k({})),"Error in this field 4")))))},A=a.a.createContext(void 0),k=(r.Component,a.a.Component,function(e){var t=b(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],l=b(Object(r.useState)(e&&e.value2),2),u=l[0],o=l[1],c=b(Object(r.useState)(e&&e.value3),2),i=c[0],f=c[1];return{value:n,value2:u,value3:i,onChange:function(e){return a(e.target.value)},onChange2:function(e){return o(e.target.value)},onChange3:function(e){return f(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?u.a.hydrate(a.a.createElement(R,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);