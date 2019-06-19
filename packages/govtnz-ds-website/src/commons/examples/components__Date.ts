// @autogenerated


export default [
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport DateInput from \"@govtnz/ds/build/mustache/DateInput.mustache\";\n\n// The variables DateInput are all strings that are mustache templates.\n\nexport default `${Mustache.render(DateInput, {\n  id: `passport-issued`,\n  hintId: `passport-issued-hint`,\n  dayId: `passport-issued-day`,\n  monthId: `passport-issued-month`,\n  yearId: `passport-issued-year`,\n  label: `When was your passport issued?`,\n  hint: `For example, 12 11 2007`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n  />\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n  />\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js-styled-components/DateInput\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n  />\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts-styled-components/DateInput\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n  />\n);\n",
    "vue-js": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n  />\n</template>\n<script>\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-js/DateInput\";\n\nexport default { components: { \"date-input\": DateInput } };\n</script>\n",
    "vue-ts": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n  />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-ts/DateInput\";\n\nexport default { components: { \"date-input\": DateInput } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: DateInput.css\nOR in Sass (SCSS): DateInput.scss\n-->\n<div class=\"g-dateInput-form-group\">\n  <fieldset\n    class=\"g-dateInput-fieldset\"\n    aria-describedby=\"passport-issued-hint\"\n    role=\"group\"\n  >\n    <legend\n      class=\"g-dateInput-fieldset__legend g-dateInput-fieldset__legend--xl\"\n    >\n      <h1 class=\"g-dateInput-fieldset__heading\">\n        When was your passport issued?\n      </h1>\n    </legend>\n    <span id=\"passport-issued-hint\" class=\"g-dateInput-hint\">\n      For example, 12 11 2007\n    </span>\n    <div id=\"passport-issued\" class=\"g-dateInput-date-input\">\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-day\"\n          >\n            Day\n          </label>\n          <input\n            id=\"passport-issued-day\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            pattern=\"[0-9]*\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-month\"\n          >\n            Month\n          </label>\n          <input\n            id=\"passport-issued-month\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            pattern=\"[0-9]*\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label govuk-date-input__label\"\n            for=\"passport-issued-year\"\n          >\n            Year\n          </label>\n          <input\n            id=\"passport-issued-year\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-4\"\n            pattern=\"[0-9]*\"\n          />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"DateInput.html.twig\"  with {'id':'passport-issued', 'hintId':'passport-issued-hint', 'dayId':'passport-issued-day', 'monthId':'passport-issued-month', 'yearId':'passport-issued-year', 'label':'When was your passport issued?', 'hint':'For example, 12 11 2007'} only %}{% endembed %}"
  },
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport DateInput from \"@govtnz/ds/build/mustache/DateInput.mustache\";\n\n// The variables DateInput are all strings that are mustache templates.\n\nexport default `${Mustache.render(DateInput, {\n  id: `passport-issued`,\n  hintId: `passport-issued-hint`,\n  errorId: `passport-issued-error`,\n  dayId: `passport-issued-day`,\n  monthId: `passport-issued-month`,\n  yearId: `passport-issued-year`,\n  label: `When was your passport issued?`,\n  hint: `For example, 12 11 2007`,\n  value: `6`,\n  value2: `3`,\n  value3: `2076`,\n  hasError: true,\n  error: `The date your passport was issued must be in the past`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js-styled-components/DateInput\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts-styled-components/DateInput\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "vue-js": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n</template>\n<script>\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-js/DateInput\";\n\nexport default { components: { \"date-input\": DateInput } };\n</script>\n",
    "vue-ts": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-ts/DateInput\";\n\nexport default { components: { \"date-input\": DateInput } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: DateInput.css\nOR in Sass (SCSS): DateInput.scss\n-->\n<div class=\"g-dateInput-form-group g-dateInput-form-group--error\">\n  <fieldset\n    class=\"g-dateInput-fieldset\"\n    aria-describedby=\"passport-issued-hint passport-issued-error\"\n    role=\"group\"\n  >\n    <legend\n      class=\"g-dateInput-fieldset__legend g-dateInput-fieldset__legend--xl\"\n    >\n      <h1 class=\"g-dateInput-fieldset__heading\">\n        When was your passport issued?\n      </h1>\n    </legend>\n    <span id=\"passport-issued-hint\" class=\"g-dateInput-hint\">\n      For example, 12 11 2007\n    </span>\n    <span id=\"passport-issued-error\" class=\"g-dateInput-error-message\">\n      <span class=\"g-dateInput-visually-hidden\"> Error: </span> The date your\n      passport was issued must be in the past\n    </span>\n    <div id=\"passport-issued\" class=\"g-dateInput-date-input\">\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-day\"\n          >\n            Day\n          </label>\n          <input\n            id=\"passport-issued-day\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2 g-dateInput-input--error\"\n            pattern=\"[0-9]*\"\n            value=\"6\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-month\"\n          >\n            Month\n          </label>\n          <input\n            id=\"passport-issued-month\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2 g-dateInput-input--error\"\n            pattern=\"[0-9]*\"\n            value=\"3\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label govuk-date-input__label\"\n            for=\"passport-issued-year\"\n          >\n            Year\n          </label>\n          <input\n            id=\"passport-issued-year\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-4 g-dateInput-input--error\"\n            pattern=\"[0-9]*\"\n            value=\"2076\"\n          />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"DateInput.html.twig\"  with {'id':'passport-issued', 'hintId':'passport-issued-hint', 'errorId':'passport-issued-error', 'dayId':'passport-issued-day', 'monthId':'passport-issued-month', 'yearId':'passport-issued-year', 'label':'When was your passport issued?', 'hint':'For example, 12 11 2007', 'value':'6', 'value2':'3', 'value3':'2076', 'hasError':'true', 'error':'The date your passport was issued must be in the past'} only %}{% endembed %}"
  },
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport DateInput from \"@govtnz/ds/build/mustache/DateInput.mustache\";\n\n// The variables DateInput are all strings that are mustache templates.\n\nexport default `${Mustache.render(DateInput, {\n  id: `bday`,\n  hintId: `bday-hint`,\n  dayId: `bday-day`,\n  monthId: `bday-month`,\n  yearId: `bday-year`,\n  label: `What is your date of birth?`,\n  hint: `For example, 31 3 1980`,\n  autoComplete: `Birthday: Day`,\n  autoComplete2: `Birthday: Month`,\n  autoComplete3: `Birthday: Year`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\n\nexport default () => (\n  <DateInput\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label=\"What is your date of birth?\"\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\n\nexport default () => (\n  <DateInput\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label=\"What is your date of birth?\"\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js-styled-components/DateInput\";\n\nexport default () => (\n  <DateInput\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label=\"What is your date of birth?\"\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts-styled-components/DateInput\";\n\nexport default () => (\n  <DateInput\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label=\"What is your date of birth?\"\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n);\n",
    "vue-js": "<template>\n  <date-input\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label=\"What is your date of birth?\"\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n</template>\n<script>\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-js/DateInput\";\n\nexport default { components: { \"date-input\": DateInput } };\n</script>\n",
    "vue-ts": "<template>\n  <date-input\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label=\"What is your date of birth?\"\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-ts/DateInput\";\n\nexport default { components: { \"date-input\": DateInput } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: DateInput.css\nOR in Sass (SCSS): DateInput.scss\n-->\n<div class=\"g-dateInput-form-group\">\n  <fieldset\n    class=\"g-dateInput-fieldset\"\n    aria-describedby=\"bday-hint\"\n    role=\"group\"\n  >\n    <legend\n      class=\"g-dateInput-fieldset__legend g-dateInput-fieldset__legend--xl\"\n    >\n      <h1 class=\"g-dateInput-fieldset__heading\">What is your date of birth?</h1>\n    </legend>\n    <span id=\"bday-hint\" class=\"g-dateInput-hint\">\n      For example, 31 3 1980\n    </span>\n    <div id=\"bday\" class=\"g-dateInput-date-input\">\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"bday-day\"\n          >\n            Day\n          </label>\n          <input\n            id=\"bday-day\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            pattern=\"[0-9]*\"\n            autocomplete=\"bday-day\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"bday-month\"\n          >\n            Month\n          </label>\n          <input\n            id=\"bday-month\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            pattern=\"[0-9]*\"\n            autocomplete=\"bday-month\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label govuk-date-input__label\"\n            for=\"bday-year\"\n          >\n            Year\n          </label>\n          <input\n            id=\"bday-year\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-4\"\n            pattern=\"[0-9]*\"\n            autocomplete=\"bday-year\"\n          />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"DateInput.html.twig\"  with {'id':'bday', 'hintId':'bday-hint', 'dayId':'bday-day', 'monthId':'bday-month', 'yearId':'bday-year', 'label':'What is your date of birth?', 'hint':'For example, 31 3 1980', 'autoComplete':'Birthday: Day', 'autoComplete2':'Birthday: Month', 'autoComplete3':'Birthday: Year'} only %}{% endembed %}"
  },
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport DateInput from \"@govtnz/ds/build/mustache/DateInput.mustache\";\n\n// The variables DateInput are all strings that are mustache templates.\n\nexport default `${Mustache.render(DateInput, {\n  id: `passport-issued`,\n  hintId: `passport-issued-hint`,\n  errorId: `passport-issued-error`,\n  dayId: `passport-issued-day`,\n  monthId: `passport-issued-month`,\n  yearId: `passport-issued-year`,\n  label: `When was your passport issued?`,\n  hint: `For example, 12 11 2007`,\n  value: `6`,\n  value2: `3`,\n  value3: `2076`,\n  hasError: true,\n  error: `The date your passport was issued must be in the past`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js-styled-components/DateInput\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts-styled-components/DateInput\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "vue-js": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n</template>\n<script>\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-js/DateInput\";\n\nexport default { components: { \"date-input\": DateInput } };\n</script>\n",
    "vue-ts": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    hasError\n    error=\"The date your passport was issued must be in the past\"\n  />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-ts/DateInput\";\n\nexport default { components: { \"date-input\": DateInput } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: DateInput.css\nOR in Sass (SCSS): DateInput.scss\n-->\n<div class=\"g-dateInput-form-group g-dateInput-form-group--error\">\n  <fieldset\n    class=\"g-dateInput-fieldset\"\n    aria-describedby=\"passport-issued-hint passport-issued-error\"\n    role=\"group\"\n  >\n    <legend\n      class=\"g-dateInput-fieldset__legend g-dateInput-fieldset__legend--xl\"\n    >\n      <h1 class=\"g-dateInput-fieldset__heading\">\n        When was your passport issued?\n      </h1>\n    </legend>\n    <span id=\"passport-issued-hint\" class=\"g-dateInput-hint\">\n      For example, 12 11 2007\n    </span>\n    <span id=\"passport-issued-error\" class=\"g-dateInput-error-message\">\n      <span class=\"g-dateInput-visually-hidden\"> Error: </span> The date your\n      passport was issued must be in the past\n    </span>\n    <div id=\"passport-issued\" class=\"g-dateInput-date-input\">\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-day\"\n          >\n            Day\n          </label>\n          <input\n            id=\"passport-issued-day\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2 g-dateInput-input--error\"\n            pattern=\"[0-9]*\"\n            value=\"6\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-month\"\n          >\n            Month\n          </label>\n          <input\n            id=\"passport-issued-month\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2 g-dateInput-input--error\"\n            pattern=\"[0-9]*\"\n            value=\"3\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label govuk-date-input__label\"\n            for=\"passport-issued-year\"\n          >\n            Year\n          </label>\n          <input\n            id=\"passport-issued-year\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-4 g-dateInput-input--error\"\n            pattern=\"[0-9]*\"\n            value=\"2076\"\n          />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"DateInput.html.twig\"  with {'id':'passport-issued', 'hintId':'passport-issued-hint', 'errorId':'passport-issued-error', 'dayId':'passport-issued-day', 'monthId':'passport-issued-month', 'yearId':'passport-issued-year', 'label':'When was your passport issued?', 'hint':'For example, 12 11 2007', 'value':'6', 'value2':'3', 'value3':'2076', 'hasError':'true', 'error':'The date your passport was issued must be in the past'} only %}{% endembed %}"
  }
]