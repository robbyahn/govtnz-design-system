"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var constants = {
  autoComplete: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  },
  autoComplete2: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  },
  autoComplete3: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  }
};

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    error: {
      type: Boolean,
      "default": false,
      required: false
    },
    hintId: {
      type: String,
      required: false
    },
    errorId: {
      type: String,
      required: false
    },
    label: {
      required: false,
      "default": "Example label"
    },
    hint: {
      required: false,
      "default": "Example hint"
    },
    error2: {
      required: false,
      "default": "Example error"
    },
    id: {
      type: String,
      required: false
    },
    dayId: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      "default": false,
      required: false
    },
    readOnly: {
      type: Boolean,
      "default": false,
      required: false
    },
    autoFocus: {
      type: Boolean,
      "default": false,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    spellCheck: {
      type: Boolean,
      "default": false,
      required: false
    },
    autoComplete: {
      type: String,
      validator: function validator(value) {
        return ["Off", "On", "Name", "Honorific: Prefix", "Given Name", "Additional Name", "Family Name", "Honorific: Suffix", "Nickname", "Email", "Username", "New Password", "Current Password", "Organization Title", "Organization", "Street Address", "Address Line 1", "Address Line 2", "Address Line 3", "Address Level 4", "Address Level 3", "Address Level 2", "Address Level 1", "Country", "Country Name", "Postal Code", "Credit Card: Name", "Credit Card: Given Name", "Credit Card: Additional Name", "Credit Card: Family Name", "Credit Card: Number", "Credit Card: Expiry", "Credit Card: Expiry Month", "Credit Card: Expiry Year", "Credit Card: CSC", "Credit Card: Type", "Transaction: Currency", "Transaction: Amount", "Language", "Birthday", "Birthday: Day", "Birthday: Month", "Birthday: Year", "Sex", "Telephone", "Telephone: Country Code", "Telephone: National", "Telephone: Area Code", "Telephone: Local", "Telephone: Extension", "IMPP", "URL", "Photo"].indexOf(value) !== -1;
      },
      required: true
    },
    monthId: {
      type: String,
      required: false
    },
    name2: {
      type: String,
      required: true
    },
    disabled2: {
      type: Boolean,
      "default": false,
      required: false
    },
    readOnly2: {
      type: Boolean,
      "default": false,
      required: false
    },
    autoFocus2: {
      type: Boolean,
      "default": false,
      required: false
    },
    value2: {
      type: String,
      required: false
    },
    spellCheck2: {
      type: Boolean,
      "default": false,
      required: false
    },
    autoComplete2: {
      type: String,
      validator: function validator(value) {
        return ["Off", "On", "Name", "Honorific: Prefix", "Given Name", "Additional Name", "Family Name", "Honorific: Suffix", "Nickname", "Email", "Username", "New Password", "Current Password", "Organization Title", "Organization", "Street Address", "Address Line 1", "Address Line 2", "Address Line 3", "Address Level 4", "Address Level 3", "Address Level 2", "Address Level 1", "Country", "Country Name", "Postal Code", "Credit Card: Name", "Credit Card: Given Name", "Credit Card: Additional Name", "Credit Card: Family Name", "Credit Card: Number", "Credit Card: Expiry", "Credit Card: Expiry Month", "Credit Card: Expiry Year", "Credit Card: CSC", "Credit Card: Type", "Transaction: Currency", "Transaction: Amount", "Language", "Birthday", "Birthday: Day", "Birthday: Month", "Birthday: Year", "Sex", "Telephone", "Telephone: Country Code", "Telephone: National", "Telephone: Area Code", "Telephone: Local", "Telephone: Extension", "IMPP", "URL", "Photo"].indexOf(value) !== -1;
      },
      required: true
    },
    yearId: {
      type: String,
      required: false
    },
    name3: {
      type: String,
      required: true
    },
    disabled3: {
      type: Boolean,
      "default": false,
      required: false
    },
    readOnly3: {
      type: Boolean,
      "default": false,
      required: false
    },
    autoFocus3: {
      type: Boolean,
      "default": false,
      required: false
    },
    value3: {
      type: String,
      required: false
    },
    spellCheck3: {
      type: Boolean,
      "default": false,
      required: false
    },
    autoComplete3: {
      type: String,
      validator: function validator(value) {
        return ["Off", "On", "Name", "Honorific: Prefix", "Given Name", "Additional Name", "Family Name", "Honorific: Suffix", "Nickname", "Email", "Username", "New Password", "Current Password", "Organization Title", "Organization", "Street Address", "Address Line 1", "Address Line 2", "Address Line 3", "Address Level 4", "Address Level 3", "Address Level 2", "Address Level 1", "Country", "Country Name", "Postal Code", "Credit Card: Name", "Credit Card: Given Name", "Credit Card: Additional Name", "Credit Card: Family Name", "Credit Card: Number", "Credit Card: Expiry", "Credit Card: Expiry Month", "Credit Card: Expiry Year", "Credit Card: CSC", "Credit Card: Type", "Transaction: Currency", "Transaction: Amount", "Language", "Birthday", "Birthday: Day", "Birthday: Month", "Birthday: Year", "Sex", "Telephone", "Telephone: Country Code", "Telephone: National", "Telephone: Area Code", "Telephone: Local", "Telephone: Extension", "IMPP", "URL", "Photo"].indexOf(value) !== -1;
      },
      required: true
    }
  },
  computed: {
    computed__class: function computed__class() {
      return "g-dateInput-form-group" + (this.error ? " g-dateInput-form-group--error" : "");
    },
    computed__ariaDescribedby: function computed__ariaDescribedby() {
      return +this.hintId + +this.errorId;
    },
    computed__class2: function computed__class2() {
      return "g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2" + (this.error ? " g-dateInput-input--error" : "");
    },
    computed__autocomplete: function computed__autocomplete() {
      return constants[this.autoComplete] !== undefined ? constants[this.autoComplete] : "";
    },
    computed__class3: function computed__class3() {
      return "g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2" + (this.error ? " g-dateInput-input--error" : "");
    },
    computed__autocomplete2: function computed__autocomplete2() {
      return constants[this.autoComplete2] !== undefined ? constants[this.autoComplete2] : "";
    },
    computed__class4: function computed__class4() {
      return "g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-4" + (this.error ? " g-dateInput-input--error" : "");
    },
    computed__autocomplete3: function computed__autocomplete3() {
      return constants[this.autoComplete3] !== undefined ? constants[this.autoComplete3] : "";
    }
  },
  render: new Function('with(this){return _c(\'div\',{class:computed__class},[_c(\'fieldset\',{staticClass:"g-dateInput-fieldset",attrs:{"aria-describedby":computed__ariaDescribedby,"role":"group"}},[_c(\'legend\',{staticClass:"g-dateInput-fieldset__legend g-dateInput-fieldset__legend--xl"},[_c(\'h1\',{staticClass:"g-dateInput-fieldset__heading"},[_t("label")],2)]),_v(" "),_c(\'span\',{staticClass:"g-dateInput-hint",attrs:{"id":hintId}},[_t("hint")],2),_v(" "),_c(\'span\',{staticClass:"g-dateInput-error-message",attrs:{"id":errorId}},[_c(\'span\',{staticClass:"g-dateInput-visually-hidden"},[_v("\\nError: \\n\\n")]),_v(" "),_t("error2")],2),_v(" "),_c(\'div\',{staticClass:"g-dateInput-date-input",attrs:{"id":id}},[_c(\'div\',{staticClass:"g-dateInput-date-input__item"},[_c(\'div\',{staticClass:"g-dateInput-form-group"},[_c(\'label\',{staticClass:"g-dateInput-label g-dateInput-date-input__label",attrs:{"for":dayId}},[_v("\\n\\n                    Day\\n                  \\n\\n")]),_v(" "),_c(\'input\',{class:computed__class2,attrs:{"id":dayId,"maxlength":"2","name":name,"pattern":"[0-9]*","type":"text","disabled":disabled,"readonly":readOnly,"autofocus":autoFocus,"spellcheck":spellCheck,"autocomplete":computed__autocomplete},domProps:{"value":value}})])]),_v(" "),_c(\'div\',{staticClass:"g-dateInput-date-input__item"},[_c(\'div\',{staticClass:"g-dateInput-form-group"},[_c(\'label\',{staticClass:"g-dateInput-label g-dateInput-date-input__label",attrs:{"for":monthId}},[_v("\\n\\n                    Month\\n                  \\n\\n")]),_v(" "),_c(\'input\',{class:computed__class3,attrs:{"id":monthId,"maxlength":"2","name":name2,"pattern":"[0-9]*","type":"text","disabled":disabled2,"readonly":readOnly2,"autofocus":autoFocus2,"spellcheck":spellCheck2,"autocomplete":computed__autocomplete2},domProps:{"value":value2}})])]),_v(" "),_c(\'div\',{staticClass:"g-dateInput-date-input__item"},[_c(\'div\',{staticClass:"g-dateInput-form-group"},[_c(\'label\',{staticClass:"g-dateInput-label govuk-date-input__label",attrs:{"for":yearId}},[_v("\\n\\n                    Year\\n                  \\n\\n")]),_v(" "),_c(\'input\',{class:computed__class4,attrs:{"id":yearId,"maxlength":"4","name":name3,"pattern":"[0-9]*","type":"text","disabled":disabled3,"readonly":readOnly3,"autofocus":autoFocus3,"spellcheck":spellCheck3,"autocomplete":computed__autocomplete3},domProps:{"value":value3}})])])])])])}')
});

exports["default"] = _default;