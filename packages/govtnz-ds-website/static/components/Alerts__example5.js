!function(e){var t={};function a(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(l,n,function(t){return e[t]}.bind(null,n));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=7)}([function(e,t){e.exports=React},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(0));t.default=function(e){var t=e.children;return n.default.createElement("li",null,void 0!==t?t:n.default.createElement(n.default.Fragment,null,"Example text"))}},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(0));t.default=function(e){var t=e.className,a=e.href,l=e.rel,r=e.target,u=e.onClick,o=e.children;return n.default.createElement("a",{className:"g-link"+(t?" "+t:""),href:a,rel:l,target:r,onClick:u},void 0!==o?o:n.default.createElement(n.default.Fragment,null,"Example text"))}},function(e,t){e.exports=ReactDOM},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(0));t.default=function(e){var t=e.mode,a=e.level,l=e.headingId,r=e.children;return n.default.createElement(n.default.Fragment,null,"live"===t?n.default.createElement(n.default.Fragment,null,"info"===a?n.default.createElement(n.default.Fragment,null,l?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-atomic":"true","aria-labelledby":l,"aria-live":"polite",role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--info"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):"")):"",l?"":n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--info"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):""))):""):"","live"===t?n.default.createElement(n.default.Fragment,null,"warning"===a?n.default.createElement(n.default.Fragment,null,l?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-atomic":"true","aria-labelledby":l,"aria-live":"polite",role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--warning"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):"")):"",l?"":n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--warning"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):""))):""):"","live"===t?n.default.createElement(n.default.Fragment,null,"success"===a?n.default.createElement(n.default.Fragment,null,l?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-atomic":"true","aria-labelledby":l,"aria-live":"polite",role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--success"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):"")):"",l?"":n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--success"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):""))):""):"","live"===t?n.default.createElement(n.default.Fragment,null,"error"===a?n.default.createElement(n.default.Fragment,null,l?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-atomic":"true","aria-labelledby":l,"aria-live":"polite",role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--error"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):"")):"",l?"":n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--error"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):""))):""):"","live"!==t?n.default.createElement(n.default.Fragment,null,"info"===a?n.default.createElement(n.default.Fragment,null,l?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-labelledby":l,role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--info"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):"")):"",l?"":n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--info"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):""))):""):"","live"!==t?n.default.createElement(n.default.Fragment,null,"warning"===a?n.default.createElement(n.default.Fragment,null,l?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-labelledby":l,role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--warning"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):"")):"",l?"":n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--warning"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):""))):""):"","live"!==t?n.default.createElement(n.default.Fragment,null,"success"===a?n.default.createElement(n.default.Fragment,null,l?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-labelledby":l,role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--success"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):"")):"",l?"":n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--success"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):""))):""):"","live"!==t?n.default.createElement(n.default.Fragment,null,"error"===a?n.default.createElement(n.default.Fragment,null,l?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-labelledby":l,role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--error"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):"")):"",l?"":n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{role:"note"},r?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"g-alert g-alert--error"},void 0!==r?r:n.default.createElement(n.default.Fragment,null," ","Example alert content"," "))):""))):""):"")}},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(0)),r={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,a=e.marginBottom8,l=e.marginBottom0,u=e.marginTop0,o=e.marginTop8,c=e.id,i=e.children;return n.default.createElement("h2",{className:"g-heading"+(void 0!==r[t]?" "+r[t]:"")+(a?" g-heading-mb-8":"")+(l?" g-heading-mb-0":"")+(u?" g-heading-mt-0":"")+(o?" g-heading-mt-8":""),id:c},void 0!==i?i:n.default.createElement(n.default.Fragment,null,"Example text"))}},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(0));t.default=function(e){var t=e.spacing,a=e.marginBottom0,l=e.noBullet,r=e.children;return n.default.createElement("ul",{className:"g-ul"+(t?" g-ul--spacing":"")+(a?" g-ul--mb-0":"")+(l?" g-ul--no-bullet":"")},void 0!==r?r:n.default.createElement(n.default.Fragment,null,"Example text"))}},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(3),u=a.n(r),o=a(4),c=a.n(o),i=a(5),f=a.n(i),d=a(6),m=a.n(d),s=a(1),g=a.n(s),E=a(2),p=a.n(E);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],l=!0,n=!1,r=void 0;try{for(var u,o=e[Symbol.iterator]();!(l=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);l=!0);}catch(e){n=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(n)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){F(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function j(e,t,a){return t&&x(e.prototype,t),a&&x(e,a),e}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=M(e);if(t){var n=M(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return N(this,a)}}function N(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var D=function(e){var t=e.children;return n.a.createElement(l.Fragment,null,t)},R=function(e){return n.a.createElement(D,k({title:"Example title: Error summary alert"},I({})),n.a.createElement(A,k({Component:c.a,level:"error",headingId:"heading4"},I({})),n.a.createElement(f.a,k({id:"heading4"},I({})),"Error: There’s a problem with the following responses"),n.a.createElement(m.a,k({spacing:!0,marginBottom0:!0},I({})),n.a.createElement(g.a,I({}),n.a.createElement(p.a,k({href:"#form"},I({})),"First name must not be empty")),n.a.createElement(g.a,I({}),n.a.createElement(p.a,k({href:"#form"},I({})),"Last name must only include letters a to z, hyphens, spaces and apostrophes")),n.a.createElement(g.a,I({}),n.a.createElement(p.a,k({href:"#form"},I({})),"Hours worked a week must be between 16 and 99")))))},T=n.a.createContext(void 0),A=(l.Component,n.a.Component,function(e){w(a,e);var t=S(a);function a(e){var l;return _(this,a),(l=t.call(this,e)).state={isChecked:!1,id:"id".concat(e.headingId.replace(/[^a-zA-Z0-9]/g,""))},l.toggle=l.toggle.bind(C(l)),l}return j(a,[{key:"toggle",value:function(){var e=this.state.isChecked;this.setState({isChecked:!e})}},{key:"render",value:function(){var e=this.props,t=e.mode,a=e.level,r=e.Component,u=this.state,o=u.isChecked,c=u.id;return"live"===t?n.a.createElement(l.Fragment,null,n.a.createElement("button",{type:"button","aria-controls":c,"aria-expanded":o,onClick:this.toggle,className:"g-button g-button--secondary"},"Toggle live ",a," alert"),n.a.createElement("div",{id:c},o?n.a.createElement(r,k({key:"".concat(c,"_alert")},this.props)):n.a.createElement(r,k({key:"".concat(c,"_alert")},this.props,{children:void 0})))):n.a.createElement(r,this.props)}}]),a}(n.a.Component)),I=function(e){var t=v(Object(l.useState)(e&&e.value),2),a=t[0],n=t[1],r=v(Object(l.useState)(e&&e.value2),2),u=r[0],o=r[1],c=v(Object(l.useState)(e&&e.value3),2),i=c[0],f=c[1];return{value:a,value2:u,value3:i,onChange:function(e){return n(e.target.value)},onChange2:function(e){return o(e.target.value)},onChange3:function(e){return f(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?u.a.hydrate(n.a.createElement(R,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);