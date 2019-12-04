!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,a){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(0));t.default=function(e){var t=e.error,a=e.hintId,n=e.errorId,l=e.label,u=e.hint,o=e.id,i=e.dayId,d=e.name,s=e.disabled,c=e.readOnly,p=e.autoFocus,m=e.value,g=e.spellCheck,f=e.autoComplete,v=e.onChange,h=e.monthId,y=e.yearId;return r.createElement("div",{className:"g-dateInput-form-group"+(t?" g-dateInput-form-group--error":"")},r.createElement("fieldset",{"aria-describedby":void 0!==a||void 0!==n?(a||"")+(n?" "+n:""):void 0,className:"g-fieldset",role:"group"},r.createElement("legend",{className:"g-fieldset__legend g-fieldset__legend--xl"},void 0!==l?l:r.createElement(r.Fragment,null,"Example label")),r.createElement("span",{className:"g-dateInput-hint",id:a},void 0!==u?u:r.createElement(r.Fragment,null,"Example hint")),void 0!==t?r.createElement(r.Fragment,null,r.createElement("span",{className:"g-dateInput-error-message",id:n},r.createElement("span",{className:"g-dateInput-visually-hidden"},"Error: "),void 0!==t?t:r.createElement(r.Fragment,null,"Example error"))):"",r.createElement("div",{className:"g-date-input",id:o},r.createElement("div",{className:"g-date-input__item"},r.createElement("div",{className:"g-dateInput-form-group"},r.createElement("label",{className:"g-dateInput-label g-date-input__label",htmlFor:i},"Day"),r.createElement("input",{className:"g-dateInput-input g-date-input__input g-dateInput-input--width-2"+(t?" g-dateInput-input--error":""),id:i,maxLength:2,name:d,pattern:"[0-9]*",type:"text",disabled:s,readOnly:c,autoFocus:p,value:m,spellCheck:g,autoComplete:f,onChange:v}))),r.createElement("div",{className:"g-date-input__item"},r.createElement("div",{className:"g-dateInput-form-group"},r.createElement("label",{className:"g-dateInput-label g-date-input__label",htmlFor:h},"Month"),r.createElement("input",{className:"g-dateInput-input g-date-input__input g-dateInput-input--width-2"+(t?" g-dateInput-input--error":""),id:h,maxLength:2,name:d,pattern:"[0-9]*",type:"text",disabled:s,readOnly:c,autoFocus:p,value:m,spellCheck:g,autoComplete:f,onChange:v}))),r.createElement("div",{className:"g-date-input__item"},r.createElement("div",{className:"g-dateInput-form-group"},r.createElement("label",{className:"g-dateInput-label g-date-input__label",htmlFor:y},"Year"),r.createElement("input",{className:"g-dateInput-input g-date-input__input g-dateInput-input--width-4"+(t?" g-dateInput-input--error":""),id:y,maxLength:4,name:d,pattern:"[0-9]*",type:"text",disabled:s,readOnly:c,autoFocus:p,value:m,spellCheck:g,autoComplete:f,onChange:v}))))))}},function(e,t,a){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(0)),l={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,a=e.marginBottom8,n=e.marginBottom0,u=e.id,o=e.children;return r.createElement("h1",{className:(void 0!==l[t]?l[t]:"")+(a?" g-heading-mb-8":"")+(n?" g-heading-mb-0":""),id:u},void 0!==o?o:r.createElement(r.Fragment,null,"Example text"))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1),u=a.n(l),o=a(2),i=a.n(o),d=a(3),s=a.n(d);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=function(e){var t=e.children;return r.a.createElement(n.Fragment,null,t)},g=function(e){return r.a.createElement(m,p({title:"Example: Error state #2 (Date input)"},f({})),r.a.createElement(i.a,p({id:"passport-issued",hintId:"passport-issued-hint",errorId:"passport-issued-error",dayId:"passport-issued-day",monthId:"passport-issued-month",yearId:"passport-issued-year",label:r.a.createElement(s.a,{styleSize:"large",marginBottom0:!0},"When was your passport issued?"),hint:"For example, 12 11 2007",value:"6",value2:"3",value3:"2076",error:"The date your passport was issued must be in the past"},f({value:"6",value2:"3",value3:"2076"}))))},f=function(e){var t=c(Object(n.useState)(e&&e.value),2),a=t[0],r=t[1],l=c(Object(n.useState)(e&&e.value2),2),u=l[0],o=l[1],i=c(Object(n.useState)(e&&e.value3),2),d=i[0],s=i[1];return{value:a,value2:u,value3:d,onChange:function(e){return r(e.target.value)},onChange2:function(e){return o(e.target.value)},onChange3:function(e){return s(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?u.a.hydrate(r.a.createElement(g,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);