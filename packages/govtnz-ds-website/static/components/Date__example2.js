!function(e){var a={};function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)t.d(n,r,function(a){return e[a]}.bind(null,r));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=2)}([function(e,a){e.exports=React},function(e,a){e.exports=ReactDOM},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),d=t(1),o=t.n(d),i={autoComplete:{Off:"off",On:"on",Name:"name","Honorific: Prefix":"honorific-prefix","Given Name":"given-name","Additional Name":"additional-name","Family Name":"family-name","Honorific: Suffix":"honorific-suffix",Nickname:"nickname",Email:"email",Username:"username","New Password":"new-password","Current Password":"current-password","Organization Title":"organization-title",Organization:"organization","Street Address":"street-address","Address Line 1":"address-line1","Address Line 2":"address-line2","Address Line 3":"address-line3","Address Level 4":"address-level4","Address Level 3":"address-level3","Address Level 2":"address-level2","Address Level 1":"address-level1",Country:"country","Country Name":"country-name","Postal Code":"postal-code","Credit Card: Name":"cc-name","Credit Card: Given Name":"cc-given-name","Credit Card: Additional Name":"cc-additional-name","Credit Card: Family Name":"cc-family-name","Credit Card: Number":"cc-number","Credit Card: Expiry":"cc-exp","Credit Card: Expiry Month":"cc-exp-month","Credit Card: Expiry Year":"cc-exp-year","Credit Card: CSC":"cc-csc","Credit Card: Type":"cc-type","Transaction: Currency":"transaction-currency","Transaction: Amount":"transaction-amount",Language:"language",Birthday:"bday","Birthday: Day":"bday-day","Birthday: Month":"bday-month","Birthday: Year":"bday-year",Sex:"sex",Telephone:"tel","Telephone: Country Code":"tel-country-code","Telephone: National":"tel-national","Telephone: Area Code":"tel-area-code","Telephone: Local":"tel-local","Telephone: Extension":"tel-extension",IMPP:"impp",URL:"url",Photo:"photo"},autoComplete2:{Off:"off",On:"on",Name:"name","Honorific: Prefix":"honorific-prefix","Given Name":"given-name","Additional Name":"additional-name","Family Name":"family-name","Honorific: Suffix":"honorific-suffix",Nickname:"nickname",Email:"email",Username:"username","New Password":"new-password","Current Password":"current-password","Organization Title":"organization-title",Organization:"organization","Street Address":"street-address","Address Line 1":"address-line1","Address Line 2":"address-line2","Address Line 3":"address-line3","Address Level 4":"address-level4","Address Level 3":"address-level3","Address Level 2":"address-level2","Address Level 1":"address-level1",Country:"country","Country Name":"country-name","Postal Code":"postal-code","Credit Card: Name":"cc-name","Credit Card: Given Name":"cc-given-name","Credit Card: Additional Name":"cc-additional-name","Credit Card: Family Name":"cc-family-name","Credit Card: Number":"cc-number","Credit Card: Expiry":"cc-exp","Credit Card: Expiry Month":"cc-exp-month","Credit Card: Expiry Year":"cc-exp-year","Credit Card: CSC":"cc-csc","Credit Card: Type":"cc-type","Transaction: Currency":"transaction-currency","Transaction: Amount":"transaction-amount",Language:"language",Birthday:"bday","Birthday: Day":"bday-day","Birthday: Month":"bday-month","Birthday: Year":"bday-year",Sex:"sex",Telephone:"tel","Telephone: Country Code":"tel-country-code","Telephone: National":"tel-national","Telephone: Area Code":"tel-area-code","Telephone: Local":"tel-local","Telephone: Extension":"tel-extension",IMPP:"impp",URL:"url",Photo:"photo"},autoComplete3:{Off:"off",On:"on",Name:"name","Honorific: Prefix":"honorific-prefix","Given Name":"given-name","Additional Name":"additional-name","Family Name":"family-name","Honorific: Suffix":"honorific-suffix",Nickname:"nickname",Email:"email",Username:"username","New Password":"new-password","Current Password":"current-password","Organization Title":"organization-title",Organization:"organization","Street Address":"street-address","Address Line 1":"address-line1","Address Line 2":"address-line2","Address Line 3":"address-line3","Address Level 4":"address-level4","Address Level 3":"address-level3","Address Level 2":"address-level2","Address Level 1":"address-level1",Country:"country","Country Name":"country-name","Postal Code":"postal-code","Credit Card: Name":"cc-name","Credit Card: Given Name":"cc-given-name","Credit Card: Additional Name":"cc-additional-name","Credit Card: Family Name":"cc-family-name","Credit Card: Number":"cc-number","Credit Card: Expiry":"cc-exp","Credit Card: Expiry Month":"cc-exp-month","Credit Card: Expiry Year":"cc-exp-year","Credit Card: CSC":"cc-csc","Credit Card: Type":"cc-type","Transaction: Currency":"transaction-currency","Transaction: Amount":"transaction-amount",Language:"language",Birthday:"bday","Birthday: Day":"bday-day","Birthday: Month":"bday-month","Birthday: Year":"bday-year",Sex:"sex",Telephone:"tel","Telephone: Country Code":"tel-country-code","Telephone: National":"tel-national","Telephone: Area Code":"tel-area-code","Telephone: Local":"tel-local","Telephone: Extension":"tel-extension",IMPP:"impp",URL:"url",Photo:"photo"}},l=function(e){var a=e.error,t=e.hintId,r=e.errorId,d=e.label,o=e.hint,l=e.error2,s=e.id,c=e.dayId,u=e.name,m=e.disabled,p=e.readOnly,y=e.autoFocus,C=e.value,h=e.spellCheck,f=e.autoComplete,g=e.onChange,v=e.monthId,x=e.name2,b=e.disabled2,N=e.readOnly2,E=e.autoFocus2,I=e.value2,A=e.spellCheck2,L=e.autoComplete2,T=e.onChange2,O=e.yearId,_=e.name3,P=e.disabled3,w=e.readOnly3,F=e.autoFocus3,S=e.value3,M=e.spellCheck3,B=e.autoComplete3,k=e.onChange3;return n.createElement("div",{className:"g-dateInput-form-group".concat(a?" g-dateInput-form-group--error":"")},n.createElement("fieldset",{"aria-describedby":void 0!==t||void 0!==r?"".concat(t||"").concat(r?" "+r:""):void 0,className:"g-dateInput-fieldset",role:"group"},n.createElement("legend",{className:"g-dateInput-fieldset__legend g-dateInput-fieldset__legend--xl"},n.createElement("h1",{className:"g-dateInput-fieldset__heading"},void 0!==d?d:n.createElement(n.Fragment,null,"Example label"))),n.createElement("span",{className:"g-dateInput-hint",id:t},void 0!==o?o:n.createElement(n.Fragment,null,"Example hint")),void 0!==a?n.createElement(n.Fragment,null,n.createElement("span",{className:"g-dateInput-error-message",id:r},n.createElement("span",{className:"g-dateInput-visually-hidden"},"Error: "),void 0!==l?l:n.createElement(n.Fragment,null,"Example error"))):"",n.createElement("div",{className:"g-dateInput-date-input",id:s},n.createElement("div",{className:"g-dateInput-date-input__item"},n.createElement("div",{className:"g-dateInput-form-group"},n.createElement("label",{className:"g-dateInput-label g-dateInput-date-input__label",htmlFor:c},"Day"),n.createElement("input",{className:"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2".concat(a?" g-dateInput-input--error":""),id:c,maxLength:2,name:u,pattern:"[0-9]*",type:"text",disabled:m,readOnly:p,autoFocus:y,value:C,spellCheck:h,autoComplete:i.autoComplete[f],onChange:g}))),n.createElement("div",{className:"g-dateInput-date-input__item"},n.createElement("div",{className:"g-dateInput-form-group"},n.createElement("label",{className:"g-dateInput-label g-dateInput-date-input__label",htmlFor:v},"Month"),n.createElement("input",{className:"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2".concat(a?" g-dateInput-input--error":""),id:v,maxLength:2,name:x,pattern:"[0-9]*",type:"text",disabled:b,readOnly:N,autoFocus:E,value:I,spellCheck:A,autoComplete:i.autoComplete2[L],onChange:T}))),n.createElement("div",{className:"g-dateInput-date-input__item"},n.createElement("div",{className:"g-dateInput-form-group"},n.createElement("label",{className:"g-dateInput-label govuk-date-input__label",htmlFor:O},"Year"),n.createElement("input",{className:"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-4".concat(a?" g-dateInput-input--error":""),id:O,maxLength:4,name:_,pattern:"[0-9]*",type:"text",disabled:P,readOnly:w,autoFocus:F,value:S,spellCheck:M,autoComplete:i.autoComplete3[B],onChange:k}))))))};function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=function(e){var a=e.children;return r.a.createElement(n.Fragment,null,a)},u=function(e){return r.a.createElement(c,s({},{},{codeOnly:!0}),r.a.createElement(l,s({},{},{id:"bday",hintId:"bday-hint",dayId:"bday-day",monthId:"bday-month",yearId:"bday-year",label:"What is your date of birth?",hint:"For example, 31 3 1980",autoComplete:"Birthday: Day",autoComplete2:"Birthday: Month",autoComplete3:"Birthday: Year"})))};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?o.a.hydrate(r.a.createElement(u,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);