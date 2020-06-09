// @autogenerated


export default [
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport Alert from \"@govtnz/ds/build/mustache/Alert.mustache\";\nimport H2 from \"@govtnz/ds/build/mustache/H2.mustache\";\nimport P from \"@govtnz/ds/build/mustache/P.mustache\";\nimport Ul from \"@govtnz/ds/build/mustache/Ul.mustache\";\nimport Li from \"@govtnz/ds/build/mustache/Li.mustache\";\nimport A from \"@govtnz/ds/build/mustache/A.mustache\";\n\n// The variables Alert, H2, P, Ul, Li, A are all strings that are mustache templates.\n\nexport default `${Mustache.render(Alert, {\n  \"level=info\": true,\n  level: true,\n  headingId: `heading1`,\n  children: `${Mustache.render(H2, {\n    id: `heading1`,\n    children: `Info: You are alive`\n  })}${Mustache.render(P, {\n    children: `Some text describing what's going on 1.`\n  })}`\n})}${Mustache.render(Alert, {\n  \"level=warning\": true,\n  level: true,\n  headingId: `heading2`,\n  children: `${Mustache.render(H2, {\n    id: `heading2`,\n    children: `Warning: You are alive`\n  })}${Mustache.render(P, {\n    children: `Some text describing what's going on 2.`\n  })}`\n})}${Mustache.render(Alert, {\n  \"level=success\": true,\n  level: true,\n  headingId: `heading3`,\n  children: `${Mustache.render(H2, {\n    id: `heading3`,\n    children: `Success: You are alive`\n  })}${Mustache.render(P, {\n    children: `Some text describing what's going on 3.`\n  })}`\n})}${Mustache.render(Alert, {\n  \"level=error\": true,\n  level: true,\n  headingId: `heading4`,\n  children: `${Mustache.render(H2, {\n    id: `heading4`,\n    children: `Error: You are alive`\n  })}${Mustache.render(Ul, {\n    bulleted: true,\n    children: `${Mustache.render(Li, {\n      children: `${Mustache.render(P, {\n        children: `${Mustache.render(A, {\n          href: `#`,\n          children: `Error in this field 4`\n        })}`\n      })}`\n    })}`\n  })}`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport Alert from \"@govtnz/ds/build/react-js/Alert\";\nimport \"@govtnz/ds/build/css/Alert.css\"; // or @govtnz/ds/build/scss/Alert.scss\nimport H2 from \"@govtnz/ds/build/react-js/H2\";\nimport \"@govtnz/ds/build/css/H2.css\"; // or @govtnz/ds/build/scss/H2.scss\nimport P from \"@govtnz/ds/build/react-js/P\";\nimport \"@govtnz/ds/build/css/P.css\"; // or @govtnz/ds/build/scss/P.scss\nimport Ul from \"@govtnz/ds/build/react-js/Ul\";\nimport \"@govtnz/ds/build/css/Ul.css\"; // or @govtnz/ds/build/scss/Ul.scss\nimport Li from \"@govtnz/ds/build/react-js/Li\";\nimport \"@govtnz/ds/build/css/Li.css\"; // or @govtnz/ds/build/scss/Li.scss\nimport A from \"@govtnz/ds/build/react-js/A\";\nimport \"@govtnz/ds/build/css/A.css\"; // or @govtnz/ds/build/scss/A.scss\n\nexport default () => (\n  <React.Fragment>\n    <Alert level=\"info\" headingId=\"heading1\">\n      <H2 id=\"heading1\">Info: You are alive</H2>\n      <P>Some text describing what's going on 1.</P>\n    </Alert>\n    <Alert level=\"warning\" headingId=\"heading2\">\n      <H2 id=\"heading2\">Warning: You are alive</H2>\n      <P>Some text describing what's going on 2.</P>\n    </Alert>\n    <Alert level=\"success\" headingId=\"heading3\">\n      <H2 id=\"heading3\">Success: You are alive</H2>\n      <P>Some text describing what's going on 3.</P>\n    </Alert>\n    <Alert level=\"error\" headingId=\"heading4\">\n      <H2 id=\"heading4\">Error: You are alive</H2>\n      <Ul bulleted>\n        <Li>\n          <P>\n            <A href=\"#\">Error in this field 4</A>\n          </P>\n        </Li>\n      </Ul>\n    </Alert>\n  </React.Fragment>\n);\n",
    "react-ts": "import React from \"react\";\nimport Alert from \"@govtnz/ds/build/react-ts/Alert\";\nimport \"@govtnz/ds/build/css/Alert.css\"; // or @govtnz/ds/build/scss/Alert.scss\nimport H2 from \"@govtnz/ds/build/react-ts/H2\";\nimport \"@govtnz/ds/build/css/H2.css\"; // or @govtnz/ds/build/scss/H2.scss\nimport P from \"@govtnz/ds/build/react-ts/P\";\nimport \"@govtnz/ds/build/css/P.css\"; // or @govtnz/ds/build/scss/P.scss\nimport Ul from \"@govtnz/ds/build/react-ts/Ul\";\nimport \"@govtnz/ds/build/css/Ul.css\"; // or @govtnz/ds/build/scss/Ul.scss\nimport Li from \"@govtnz/ds/build/react-ts/Li\";\nimport \"@govtnz/ds/build/css/Li.css\"; // or @govtnz/ds/build/scss/Li.scss\nimport A from \"@govtnz/ds/build/react-ts/A\";\nimport \"@govtnz/ds/build/css/A.css\"; // or @govtnz/ds/build/scss/A.scss\n\nexport default () => (\n  <React.Fragment>\n    <Alert level=\"info\" headingId=\"heading1\">\n      <H2 id=\"heading1\">Info: You are alive</H2>\n      <P>Some text describing what's going on 1.</P>\n    </Alert>\n    <Alert level=\"warning\" headingId=\"heading2\">\n      <H2 id=\"heading2\">Warning: You are alive</H2>\n      <P>Some text describing what's going on 2.</P>\n    </Alert>\n    <Alert level=\"success\" headingId=\"heading3\">\n      <H2 id=\"heading3\">Success: You are alive</H2>\n      <P>Some text describing what's going on 3.</P>\n    </Alert>\n    <Alert level=\"error\" headingId=\"heading4\">\n      <H2 id=\"heading4\">Error: You are alive</H2>\n      <Ul bulleted>\n        <Li>\n          <P>\n            <A href=\"#\">Error in this field 4</A>\n          </P>\n        </Li>\n      </Ul>\n    </Alert>\n  </React.Fragment>\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport Alert from \"@govtnz/ds/build/react-js-styled-components/Alert\";\nimport H2 from \"@govtnz/ds/build/react-js-styled-components/H2\";\nimport P from \"@govtnz/ds/build/react-js-styled-components/P\";\nimport Ul from \"@govtnz/ds/build/react-js-styled-components/Ul\";\nimport Li from \"@govtnz/ds/build/react-js-styled-components/Li\";\nimport A from \"@govtnz/ds/build/react-js-styled-components/A\";\n\nexport default () => (\n  <React.Fragment>\n    <Alert level=\"info\" headingId=\"heading1\">\n      <H2 id=\"heading1\">Info: You are alive</H2>\n      <P>Some text describing what's going on 1.</P>\n    </Alert>\n    <Alert level=\"warning\" headingId=\"heading2\">\n      <H2 id=\"heading2\">Warning: You are alive</H2>\n      <P>Some text describing what's going on 2.</P>\n    </Alert>\n    <Alert level=\"success\" headingId=\"heading3\">\n      <H2 id=\"heading3\">Success: You are alive</H2>\n      <P>Some text describing what's going on 3.</P>\n    </Alert>\n    <Alert level=\"error\" headingId=\"heading4\">\n      <H2 id=\"heading4\">Error: You are alive</H2>\n      <Ul bulleted>\n        <Li>\n          <P>\n            <A href=\"#\">Error in this field 4</A>\n          </P>\n        </Li>\n      </Ul>\n    </Alert>\n  </React.Fragment>\n);\n",
    "react-ts-styled-components": "import React from \"react\";\nimport Alert from \"@govtnz/ds/build/react-ts-styled-components/Alert\";\nimport H2 from \"@govtnz/ds/build/react-ts-styled-components/H2\";\nimport P from \"@govtnz/ds/build/react-ts-styled-components/P\";\nimport Ul from \"@govtnz/ds/build/react-ts-styled-components/Ul\";\nimport Li from \"@govtnz/ds/build/react-ts-styled-components/Li\";\nimport A from \"@govtnz/ds/build/react-ts-styled-components/A\";\n\nexport default () => (\n  <React.Fragment>\n    <Alert level=\"info\" headingId=\"heading1\">\n      <H2 id=\"heading1\">Info: You are alive</H2>\n      <P>Some text describing what's going on 1.</P>\n    </Alert>\n    <Alert level=\"warning\" headingId=\"heading2\">\n      <H2 id=\"heading2\">Warning: You are alive</H2>\n      <P>Some text describing what's going on 2.</P>\n    </Alert>\n    <Alert level=\"success\" headingId=\"heading3\">\n      <H2 id=\"heading3\">Success: You are alive</H2>\n      <P>Some text describing what's going on 3.</P>\n    </Alert>\n    <Alert level=\"error\" headingId=\"heading4\">\n      <H2 id=\"heading4\">Error: You are alive</H2>\n      <Ul bulleted>\n        <Li>\n          <P>\n            <A href=\"#\">Error in this field 4</A>\n          </P>\n        </Li>\n      </Ul>\n    </Alert>\n  </React.Fragment>\n);\n",
    "vue-js": "<template>\n  <c-alert level=\"info\" headingId=\"heading1\">\n    <c-h2 id=\"heading1\">\n      Info: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 1.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"warning\" headingId=\"heading2\">\n    <c-h2 id=\"heading2\">\n      Warning: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 2.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"success\" headingId=\"heading3\">\n    <c-h2 id=\"heading3\">\n      Success: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 3.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"error\" headingId=\"heading4\">\n    <c-h2 id=\"heading4\">\n      Error: You are alive\n    </c-h2>\n    <c-ul bulleted>\n      <c-li>\n        <c-p>\n          <c-a href=\"#\">\n            Error in this field 4\n          </c-a>\n        </c-p>\n      </c-li>\n    </c-ul>\n  </c-alert>\n</template>\n<script>\nimport Vue from \"vue\";\nimport Alert from \"@govtnz/ds/build/vue-js/Alert.vue\";\nimport H2 from \"@govtnz/ds/build/vue-js/H2.vue\";\nimport P from \"@govtnz/ds/build/vue-js/P.vue\";\nimport Ul from \"@govtnz/ds/build/vue-js/Ul.vue\";\nimport Li from \"@govtnz/ds/build/vue-js/Li.vue\";\nimport A from \"@govtnz/ds/build/vue-js/A.vue\";\n\nexport default {\n  components: {\n    \"c-alert\": Alert,\n    \"c-h2\": H2,\n    \"c-p\": P,\n    \"c-ul\": Ul,\n    \"c-li\": Li,\n    \"c-a\": A\n  }\n};\n</script>\n",
    "vue-ts": "<template>\n  <c-alert level=\"info\" headingId=\"heading1\">\n    <c-h2 id=\"heading1\">\n      Info: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 1.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"warning\" headingId=\"heading2\">\n    <c-h2 id=\"heading2\">\n      Warning: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 2.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"success\" headingId=\"heading3\">\n    <c-h2 id=\"heading3\">\n      Success: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 3.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"error\" headingId=\"heading4\">\n    <c-h2 id=\"heading4\">\n      Error: You are alive\n    </c-h2>\n    <c-ul bulleted>\n      <c-li>\n        <c-p>\n          <c-a href=\"#\">\n            Error in this field 4\n          </c-a>\n        </c-p>\n      </c-li>\n    </c-ul>\n  </c-alert>\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport Alert from \"@govtnz/ds/build/vue-ts/Alert.vue\";\nimport H2 from \"@govtnz/ds/build/vue-ts/H2.vue\";\nimport P from \"@govtnz/ds/build/vue-ts/P.vue\";\nimport Ul from \"@govtnz/ds/build/vue-ts/Ul.vue\";\nimport Li from \"@govtnz/ds/build/vue-ts/Li.vue\";\nimport A from \"@govtnz/ds/build/vue-ts/A.vue\";\n\nexport default {\n  components: {\n    \"c-alert\": Alert,\n    \"c-h2\": H2,\n    \"c-p\": P,\n    \"c-ul\": Ul,\n    \"c-li\": Li,\n    \"c-a\": A\n  }\n};\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: Alert.css, H2.css, P.css, Ul.css, Li.css, A.css\nOR in Sass (SCSS): Alert.scss, H2.scss, P.scss, Ul.scss, Li.scss, A.scss\n-->\n<div role=\"note\" aria-labelledby=\"heading1\">\n  <div class=\"g-alert g-alert--info\">\n    <h2 class=\"g-heading\" id=\"heading1\">Info: You are alive</h2>\n    <p>Some text describing what's going on 1.</p>\n    <svg\n      width=\"32\"\n      height=\"32\"\n      viewBox=\"0 0 32 32\"\n      class=\"g-alert__icon\"\n      aria-hidden=\"true\"\n      focusable=\"false\"\n    >\n      <path\n        d=\"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z\"\n      ></path>\n    </svg>\n  </div>\n</div>\n<div role=\"note\" aria-labelledby=\"heading2\">\n  <div class=\"g-alert g-alert--warning\">\n    <h2 class=\"g-heading\" id=\"heading2\">Warning: You are alive</h2>\n    <p>Some text describing what's going on 2.</p>\n    <svg\n      width=\"32\"\n      height=\"30\"\n      viewBox=\"0 0 32 30\"\n      class=\"g-alert__icon\"\n      aria-hidden=\"true\"\n      focusable=\"false\"\n    >\n      <path\n        d=\"M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z\"\n      ></path>\n    </svg>\n  </div>\n</div>\n<div role=\"note\" tabindex=\"-1\" aria-labelledby=\"heading3\">\n  <div class=\"g-alert g-alert--success\">\n    <h2 class=\"g-heading\" id=\"heading3\">Success: You are alive</h2>\n    <p>Some text describing what's going on 3.</p>\n    <svg\n      width=\"32\"\n      height=\"32\"\n      viewBox=\"0 0 32 32\"\n      class=\"g-alert__icon\"\n      aria-hidden=\"true\"\n      focusable=\"false\"\n    >\n      <path\n        d=\"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z\"\n      ></path>\n    </svg>\n  </div>\n</div>\n<div role=\"note\" tabindex=\"-1\" aria-labelledby=\"heading4\">\n  <div class=\"g-alert g-alert--error\">\n    <h2 class=\"g-heading\" id=\"heading4\">Error: You are alive</h2>\n    <ul class=\"g-ul-list g-ul-list--bullet\">\n      <li>\n        <p><a class=\"g-link\" href=\"#\"> Error in this field 4 </a></p>\n      </li>\n    </ul>\n    <svg\n      width=\"32\"\n      height=\"32\"\n      viewBox=\"0 0 32 32\"\n      class=\"g-alert__icon\"\n      aria-hidden=\"true\"\n      focusable=\"false\"\n    >\n      <path\n        d=\"M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z\"\n      ></path>\n    </svg>\n  </div>\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"Alert.html.twig\"  with {'level':'info', 'headingId':'heading1'} only %}{% block children %}{% embed \"H2.html.twig\"  with {'id':'heading1', 'children':'Info: You are alive'} only %}{% endembed %}\n{% embed \"P.html.twig\"  with {'children':'Some text describing what's going on 1.'} only %}{% endembed %}{% endblock %}{% endembed %}{% embed \"Alert.html.twig\"  with {'level':'warning', 'headingId':'heading2'} only %}{% block children %}{% embed \"H2.html.twig\"  with {'id':'heading2', 'children':'Warning: You are alive'} only %}{% endembed %}\n{% embed \"P.html.twig\"  with {'children':'Some text describing what's going on 2.'} only %}{% endembed %}{% endblock %}{% endembed %}{% embed \"Alert.html.twig\"  with {'level':'success', 'headingId':'heading3'} only %}{% block children %}{% embed \"H2.html.twig\"  with {'id':'heading3', 'children':'Success: You are alive'} only %}{% endembed %}\n{% embed \"P.html.twig\"  with {'children':'Some text describing what's going on 3.'} only %}{% endembed %}{% endblock %}{% endembed %}{% embed \"Alert.html.twig\"  with {'level':'error', 'headingId':'heading4'} only %}{% block children %}{% embed \"H2.html.twig\"  with {'id':'heading4', 'children':'Error: You are alive'} only %}{% endembed %}\n{% embed \"Ul.html.twig\"  with {'bulleted':'true'} only %}{% block children %}{% embed \"Li.html.twig\" %}{% block children %}{% embed \"P.html.twig\" %}{% block children %}{% embed \"A.html.twig\"  with {'href':'#', 'children':'Error in this field 4'} only %}{% endembed %}{% endblock %}{% endembed %}{% endblock %}{% endembed %}{% endblock %}{% endembed %}{% endblock %}{% endembed %}",
    "angular": ""
  },
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport Alert from \"@govtnz/ds/build/mustache/Alert.mustache\";\nimport H2 from \"@govtnz/ds/build/mustache/H2.mustache\";\nimport P from \"@govtnz/ds/build/mustache/P.mustache\";\nimport Ul from \"@govtnz/ds/build/mustache/Ul.mustache\";\nimport Li from \"@govtnz/ds/build/mustache/Li.mustache\";\nimport A from \"@govtnz/ds/build/mustache/A.mustache\";\n\n// The variables Alert, H2, P, Ul, Li, A are all strings that are mustache templates.\n\nexport default `${Mustache.render(Alert, {\n  \"level=info\": true,\n  level: true,\n  headingId: `heading5`,\n  mode: `live`,\n  children: `${Mustache.render(H2, {\n    id: `heading5`,\n    children: `Info: You are alive`\n  })}${Mustache.render(P, {\n    children: `Some text describing what's going on 5.`\n  })}`\n})}${Mustache.render(Alert, {\n  \"level=warning\": true,\n  level: true,\n  headingId: `heading6`,\n  mode: `live`,\n  children: `${Mustache.render(H2, {\n    id: `heading6`,\n    children: `Warning: You are alive`\n  })}${Mustache.render(P, {\n    children: `Some text describing what's going on 6.`\n  })}`\n})}${Mustache.render(Alert, {\n  \"level=success\": true,\n  level: true,\n  headingId: `heading7`,\n  mode: `live`,\n  children: `${Mustache.render(H2, {\n    id: `heading7`,\n    children: `Success: You are alive`\n  })}${Mustache.render(P, {\n    children: `Some text describing what's going on 7.`\n  })}`\n})}${Mustache.render(Alert, {\n  \"level=error\": true,\n  level: true,\n  headingId: `heading8`,\n  mode: `live`,\n  children: `${Mustache.render(H2, {\n    id: `heading8`,\n    children: `Error: You are alive`\n  })}${Mustache.render(Ul, {\n    bulleted: true,\n    children: `${Mustache.render(Li, {\n      children: `${Mustache.render(P, {\n        children: `${Mustache.render(A, {\n          href: `#`,\n          children: `Error in this field 4`\n        })}`\n      })}`\n    })}`\n  })}`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport Alert from \"@govtnz/ds/build/react-js/Alert\";\nimport \"@govtnz/ds/build/css/Alert.css\"; // or @govtnz/ds/build/scss/Alert.scss\nimport H2 from \"@govtnz/ds/build/react-js/H2\";\nimport \"@govtnz/ds/build/css/H2.css\"; // or @govtnz/ds/build/scss/H2.scss\nimport P from \"@govtnz/ds/build/react-js/P\";\nimport \"@govtnz/ds/build/css/P.css\"; // or @govtnz/ds/build/scss/P.scss\nimport Ul from \"@govtnz/ds/build/react-js/Ul\";\nimport \"@govtnz/ds/build/css/Ul.css\"; // or @govtnz/ds/build/scss/Ul.scss\nimport Li from \"@govtnz/ds/build/react-js/Li\";\nimport \"@govtnz/ds/build/css/Li.css\"; // or @govtnz/ds/build/scss/Li.scss\nimport A from \"@govtnz/ds/build/react-js/A\";\nimport \"@govtnz/ds/build/css/A.css\"; // or @govtnz/ds/build/scss/A.scss\n\nexport default () => (\n  <React.Fragment>\n    <Alert level=\"info\" headingId=\"heading5\" mode=\"live\">\n      <H2 id=\"heading5\">Info: You are alive</H2>\n      <P>Some text describing what's going on 5.</P>\n    </Alert>\n    <Alert level=\"warning\" headingId=\"heading6\" mode=\"live\">\n      <H2 id=\"heading6\">Warning: You are alive</H2>\n      <P>Some text describing what's going on 6.</P>\n    </Alert>\n    <Alert level=\"success\" headingId=\"heading7\" mode=\"live\">\n      <H2 id=\"heading7\">Success: You are alive</H2>\n      <P>Some text describing what's going on 7.</P>\n    </Alert>\n    <Alert level=\"error\" headingId=\"heading8\" mode=\"live\">\n      <H2 id=\"heading8\">Error: You are alive</H2>\n      <Ul bulleted>\n        <Li>\n          <P>\n            <A href=\"#\">Error in this field 4</A>\n          </P>\n        </Li>\n      </Ul>\n    </Alert>\n  </React.Fragment>\n);\n",
    "react-ts": "import React from \"react\";\nimport Alert from \"@govtnz/ds/build/react-ts/Alert\";\nimport \"@govtnz/ds/build/css/Alert.css\"; // or @govtnz/ds/build/scss/Alert.scss\nimport H2 from \"@govtnz/ds/build/react-ts/H2\";\nimport \"@govtnz/ds/build/css/H2.css\"; // or @govtnz/ds/build/scss/H2.scss\nimport P from \"@govtnz/ds/build/react-ts/P\";\nimport \"@govtnz/ds/build/css/P.css\"; // or @govtnz/ds/build/scss/P.scss\nimport Ul from \"@govtnz/ds/build/react-ts/Ul\";\nimport \"@govtnz/ds/build/css/Ul.css\"; // or @govtnz/ds/build/scss/Ul.scss\nimport Li from \"@govtnz/ds/build/react-ts/Li\";\nimport \"@govtnz/ds/build/css/Li.css\"; // or @govtnz/ds/build/scss/Li.scss\nimport A from \"@govtnz/ds/build/react-ts/A\";\nimport \"@govtnz/ds/build/css/A.css\"; // or @govtnz/ds/build/scss/A.scss\n\nexport default () => (\n  <React.Fragment>\n    <Alert level=\"info\" headingId=\"heading5\" mode=\"live\">\n      <H2 id=\"heading5\">Info: You are alive</H2>\n      <P>Some text describing what's going on 5.</P>\n    </Alert>\n    <Alert level=\"warning\" headingId=\"heading6\" mode=\"live\">\n      <H2 id=\"heading6\">Warning: You are alive</H2>\n      <P>Some text describing what's going on 6.</P>\n    </Alert>\n    <Alert level=\"success\" headingId=\"heading7\" mode=\"live\">\n      <H2 id=\"heading7\">Success: You are alive</H2>\n      <P>Some text describing what's going on 7.</P>\n    </Alert>\n    <Alert level=\"error\" headingId=\"heading8\" mode=\"live\">\n      <H2 id=\"heading8\">Error: You are alive</H2>\n      <Ul bulleted>\n        <Li>\n          <P>\n            <A href=\"#\">Error in this field 4</A>\n          </P>\n        </Li>\n      </Ul>\n    </Alert>\n  </React.Fragment>\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport Alert from \"@govtnz/ds/build/react-js-styled-components/Alert\";\nimport H2 from \"@govtnz/ds/build/react-js-styled-components/H2\";\nimport P from \"@govtnz/ds/build/react-js-styled-components/P\";\nimport Ul from \"@govtnz/ds/build/react-js-styled-components/Ul\";\nimport Li from \"@govtnz/ds/build/react-js-styled-components/Li\";\nimport A from \"@govtnz/ds/build/react-js-styled-components/A\";\n\nexport default () => (\n  <React.Fragment>\n    <Alert level=\"info\" headingId=\"heading5\" mode=\"live\">\n      <H2 id=\"heading5\">Info: You are alive</H2>\n      <P>Some text describing what's going on 5.</P>\n    </Alert>\n    <Alert level=\"warning\" headingId=\"heading6\" mode=\"live\">\n      <H2 id=\"heading6\">Warning: You are alive</H2>\n      <P>Some text describing what's going on 6.</P>\n    </Alert>\n    <Alert level=\"success\" headingId=\"heading7\" mode=\"live\">\n      <H2 id=\"heading7\">Success: You are alive</H2>\n      <P>Some text describing what's going on 7.</P>\n    </Alert>\n    <Alert level=\"error\" headingId=\"heading8\" mode=\"live\">\n      <H2 id=\"heading8\">Error: You are alive</H2>\n      <Ul bulleted>\n        <Li>\n          <P>\n            <A href=\"#\">Error in this field 4</A>\n          </P>\n        </Li>\n      </Ul>\n    </Alert>\n  </React.Fragment>\n);\n",
    "react-ts-styled-components": "import React from \"react\";\nimport Alert from \"@govtnz/ds/build/react-ts-styled-components/Alert\";\nimport H2 from \"@govtnz/ds/build/react-ts-styled-components/H2\";\nimport P from \"@govtnz/ds/build/react-ts-styled-components/P\";\nimport Ul from \"@govtnz/ds/build/react-ts-styled-components/Ul\";\nimport Li from \"@govtnz/ds/build/react-ts-styled-components/Li\";\nimport A from \"@govtnz/ds/build/react-ts-styled-components/A\";\n\nexport default () => (\n  <React.Fragment>\n    <Alert level=\"info\" headingId=\"heading5\" mode=\"live\">\n      <H2 id=\"heading5\">Info: You are alive</H2>\n      <P>Some text describing what's going on 5.</P>\n    </Alert>\n    <Alert level=\"warning\" headingId=\"heading6\" mode=\"live\">\n      <H2 id=\"heading6\">Warning: You are alive</H2>\n      <P>Some text describing what's going on 6.</P>\n    </Alert>\n    <Alert level=\"success\" headingId=\"heading7\" mode=\"live\">\n      <H2 id=\"heading7\">Success: You are alive</H2>\n      <P>Some text describing what's going on 7.</P>\n    </Alert>\n    <Alert level=\"error\" headingId=\"heading8\" mode=\"live\">\n      <H2 id=\"heading8\">Error: You are alive</H2>\n      <Ul bulleted>\n        <Li>\n          <P>\n            <A href=\"#\">Error in this field 4</A>\n          </P>\n        </Li>\n      </Ul>\n    </Alert>\n  </React.Fragment>\n);\n",
    "vue-js": "<template>\n  <c-alert level=\"info\" headingId=\"heading5\" mode=\"live\">\n    <c-h2 id=\"heading5\">\n      Info: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 5.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"warning\" headingId=\"heading6\" mode=\"live\">\n    <c-h2 id=\"heading6\">\n      Warning: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 6.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"success\" headingId=\"heading7\" mode=\"live\">\n    <c-h2 id=\"heading7\">\n      Success: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 7.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"error\" headingId=\"heading8\" mode=\"live\">\n    <c-h2 id=\"heading8\">\n      Error: You are alive\n    </c-h2>\n    <c-ul bulleted>\n      <c-li>\n        <c-p>\n          <c-a href=\"#\">\n            Error in this field 4\n          </c-a>\n        </c-p>\n      </c-li>\n    </c-ul>\n  </c-alert>\n</template>\n<script>\nimport Vue from \"vue\";\nimport Alert from \"@govtnz/ds/build/vue-js/Alert.vue\";\nimport H2 from \"@govtnz/ds/build/vue-js/H2.vue\";\nimport P from \"@govtnz/ds/build/vue-js/P.vue\";\nimport Ul from \"@govtnz/ds/build/vue-js/Ul.vue\";\nimport Li from \"@govtnz/ds/build/vue-js/Li.vue\";\nimport A from \"@govtnz/ds/build/vue-js/A.vue\";\n\nexport default {\n  components: {\n    \"c-alert\": Alert,\n    \"c-h2\": H2,\n    \"c-p\": P,\n    \"c-ul\": Ul,\n    \"c-li\": Li,\n    \"c-a\": A\n  }\n};\n</script>\n",
    "vue-ts": "<template>\n  <c-alert level=\"info\" headingId=\"heading5\" mode=\"live\">\n    <c-h2 id=\"heading5\">\n      Info: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 5.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"warning\" headingId=\"heading6\" mode=\"live\">\n    <c-h2 id=\"heading6\">\n      Warning: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 6.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"success\" headingId=\"heading7\" mode=\"live\">\n    <c-h2 id=\"heading7\">\n      Success: You are alive\n    </c-h2>\n    <c-p>\n      Some text describing what's going on 7.\n    </c-p>\n  </c-alert>\n  <c-alert level=\"error\" headingId=\"heading8\" mode=\"live\">\n    <c-h2 id=\"heading8\">\n      Error: You are alive\n    </c-h2>\n    <c-ul bulleted>\n      <c-li>\n        <c-p>\n          <c-a href=\"#\">\n            Error in this field 4\n          </c-a>\n        </c-p>\n      </c-li>\n    </c-ul>\n  </c-alert>\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport Alert from \"@govtnz/ds/build/vue-ts/Alert.vue\";\nimport H2 from \"@govtnz/ds/build/vue-ts/H2.vue\";\nimport P from \"@govtnz/ds/build/vue-ts/P.vue\";\nimport Ul from \"@govtnz/ds/build/vue-ts/Ul.vue\";\nimport Li from \"@govtnz/ds/build/vue-ts/Li.vue\";\nimport A from \"@govtnz/ds/build/vue-ts/A.vue\";\n\nexport default {\n  components: {\n    \"c-alert\": Alert,\n    \"c-h2\": H2,\n    \"c-p\": P,\n    \"c-ul\": Ul,\n    \"c-li\": Li,\n    \"c-a\": A\n  }\n};\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: Alert.css, H2.css, P.css, Ul.css, Li.css, A.css\nOR in Sass (SCSS): Alert.scss, H2.scss, P.scss, Ul.scss, Li.scss, A.scss\n-->\n<div role=\"note\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"g-alert g-alert--info\">\n    <h2 class=\"g-heading\" id=\"heading5\">Info: You are alive</h2>\n    <p>Some text describing what's going on 5.</p>\n    <svg\n      width=\"32\"\n      height=\"32\"\n      viewBox=\"0 0 32 32\"\n      class=\"g-alert__icon\"\n      aria-hidden=\"true\"\n      focusable=\"false\"\n    >\n      <path\n        d=\"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z\"\n      ></path>\n    </svg>\n  </div>\n</div>\n<div role=\"note\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"g-alert g-alert--warning\">\n    <h2 class=\"g-heading\" id=\"heading6\">Warning: You are alive</h2>\n    <p>Some text describing what's going on 6.</p>\n    <svg\n      width=\"32\"\n      height=\"30\"\n      viewBox=\"0 0 32 30\"\n      class=\"g-alert__icon\"\n      aria-hidden=\"true\"\n      focusable=\"false\"\n    >\n      <path\n        d=\"M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z\"\n      ></path>\n    </svg>\n  </div>\n</div>\n<div role=\"note\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"g-alert g-alert--success\">\n    <h2 class=\"g-heading\" id=\"heading7\">Success: You are alive</h2>\n    <p>Some text describing what's going on 7.</p>\n    <svg\n      width=\"32\"\n      height=\"32\"\n      viewBox=\"0 0 32 32\"\n      class=\"g-alert__icon\"\n      aria-hidden=\"true\"\n      focusable=\"false\"\n    >\n      <path\n        d=\"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z\"\n      ></path>\n    </svg>\n  </div>\n</div>\n<div role=\"note\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"g-alert g-alert--error\">\n    <h2 class=\"g-heading\" id=\"heading8\">Error: You are alive</h2>\n    <ul class=\"g-ul-list g-ul-list--bullet\">\n      <li>\n        <p><a class=\"g-link\" href=\"#\"> Error in this field 4 </a></p>\n      </li>\n    </ul>\n    <svg\n      width=\"32\"\n      height=\"32\"\n      viewBox=\"0 0 32 32\"\n      class=\"g-alert__icon\"\n      aria-hidden=\"true\"\n      focusable=\"false\"\n    >\n      <path\n        d=\"M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z\"\n      ></path>\n    </svg>\n  </div>\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"Alert.html.twig\"  with {'level':'info', 'headingId':'heading5', 'mode':'live'} only %}{% block children %}{% embed \"H2.html.twig\"  with {'id':'heading5', 'children':'Info: You are alive'} only %}{% endembed %}\n{% embed \"P.html.twig\"  with {'children':'Some text describing what's going on 5.'} only %}{% endembed %}{% endblock %}{% endembed %}{% embed \"Alert.html.twig\"  with {'level':'warning', 'headingId':'heading6', 'mode':'live'} only %}{% block children %}{% embed \"H2.html.twig\"  with {'id':'heading6', 'children':'Warning: You are alive'} only %}{% endembed %}\n{% embed \"P.html.twig\"  with {'children':'Some text describing what's going on 6.'} only %}{% endembed %}{% endblock %}{% endembed %}{% embed \"Alert.html.twig\"  with {'level':'success', 'headingId':'heading7', 'mode':'live'} only %}{% block children %}{% embed \"H2.html.twig\"  with {'id':'heading7', 'children':'Success: You are alive'} only %}{% endembed %}\n{% embed \"P.html.twig\"  with {'children':'Some text describing what's going on 7.'} only %}{% endembed %}{% endblock %}{% endembed %}{% embed \"Alert.html.twig\"  with {'level':'error', 'headingId':'heading8', 'mode':'live'} only %}{% block children %}{% embed \"H2.html.twig\"  with {'id':'heading8', 'children':'Error: You are alive'} only %}{% endembed %}\n{% embed \"Ul.html.twig\"  with {'bulleted':'true'} only %}{% block children %}{% embed \"Li.html.twig\" %}{% block children %}{% embed \"P.html.twig\" %}{% block children %}{% embed \"A.html.twig\"  with {'href':'#', 'children':'Error in this field 4'} only %}{% endembed %}{% endblock %}{% endembed %}{% endblock %}{% endembed %}{% endblock %}{% endembed %}{% endblock %}{% endembed %}",
    "angular": ""
  }
]