// @autogenerated


export default [
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport SelectBlock from \"@govtnz/ds/build/mustache/SelectBlock.mustache\";\n\n// The variables SelectBlock are all strings that are mustache templates.\n\nexport default `${Mustache.render(SelectBlock, {\n  id: `select1`,\n  label: `Order by`,\n  children: `<option value=\"published\">Recently published</option><option value=\"updated\">Recently updated</option><option value=\"views\">Most views</option><option value=\"comments\">Most comments</option>`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport SelectBlock from \"@govtnz/ds/build/react-js/SelectBlock\";\nimport \"@govtnz/ds/build/css/SelectBlock.css\"; // or @govtnz/ds/build/scss/SelectBlock.scss\n\nexport default () => (\n  <SelectBlock id=\"select1\" label=\"Order by\">\n    <option value=\"published\">Recently published</option>\n    <option value=\"updated\">Recently updated</option>\n    <option value=\"views\">Most views</option>\n    <option value=\"comments\">Most comments</option>\n  </SelectBlock>\n);\n",
    "react-ts": "import React from \"react\";\nimport SelectBlock from \"@govtnz/ds/build/react-ts/SelectBlock\";\nimport \"@govtnz/ds/build/css/SelectBlock.css\"; // or @govtnz/ds/build/scss/SelectBlock.scss\n\nexport default () => (\n  <SelectBlock id=\"select1\" label=\"Order by\">\n    <option value=\"published\">Recently published</option>\n    <option value=\"updated\">Recently updated</option>\n    <option value=\"views\">Most views</option>\n    <option value=\"comments\">Most comments</option>\n  </SelectBlock>\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport SelectBlock from \"@govtnz/ds/build/react-js-styled-components/SelectBlock\";\n\nexport default () => (\n  <SelectBlock id=\"select1\" label=\"Order by\">\n    <option value=\"published\">Recently published</option>\n    <option value=\"updated\">Recently updated</option>\n    <option value=\"views\">Most views</option>\n    <option value=\"comments\">Most comments</option>\n  </SelectBlock>\n);\n",
    "react-ts-styled-components": "import React from \"react\";\nimport SelectBlock from \"@govtnz/ds/build/react-ts-styled-components/SelectBlock\";\n\nexport default () => (\n  <SelectBlock id=\"select1\" label=\"Order by\">\n    <option value=\"published\">Recently published</option>\n    <option value=\"updated\">Recently updated</option>\n    <option value=\"views\">Most views</option>\n    <option value=\"comments\">Most comments</option>\n  </SelectBlock>\n);\n",
    "vue-js": "<template>\n  <select-block id=\"select1\" label=\"Order by\">\n    <option value=\"published\">\n      Recently published\n    </option>\n    <option value=\"updated\">\n      Recently updated\n    </option>\n    <option value=\"views\">\n      Most views\n    </option>\n    <option value=\"comments\">\n      Most comments\n    </option>\n  </select-block>\n</template>\n<script>\nimport Vue from \"vue\";\nimport SelectBlock from \"@govtnz/ds/build/vue-js/SelectBlock.vue\";\n\nexport default { components: { \"select-block\": SelectBlock } };\n</script>\n",
    "vue-ts": "<template>\n  <select-block id=\"select1\" label=\"Order by\">\n    <option value=\"published\">\n      Recently published\n    </option>\n    <option value=\"updated\">\n      Recently updated\n    </option>\n    <option value=\"views\">\n      Most views\n    </option>\n    <option value=\"comments\">\n      Most comments\n    </option>\n  </select-block>\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport SelectBlock from \"@govtnz/ds/build/vue-ts/SelectBlock.vue\";\n\nexport default { components: { \"select-block\": SelectBlock } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: SelectBlock.css\nOR in Sass (SCSS): SelectBlock.scss\n-->\n<div>\n  <label class=\"g-selectBlock-label\"> Order by </label>\n  <select class=\"g-selectBlock-select\">\n    Options</select\n  >\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"SelectBlock.html.twig\"  with {'id':'select1', 'label':'Order by'} only %}{% block children %}<option value=\"published\">Recently published</option>\n<option value=\"updated\">Recently updated</option>\n<option value=\"views\">Most views</option>\n<option value=\"comments\">Most comments</option>{% endblock %}{% endembed %}",
    "angular": ""
  }
]