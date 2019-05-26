import Vue from "vue";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href2: { type: String, required: true },
    rel2: { type: String, required: false },
    target2: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    }
  },
  computed: {
    computed__target() {
      return constants[this.target] !== undefined ? constants[this.target] : "";
    },
    computed__target2() {
      return constants[this.target2] !== undefined
        ? constants[this.target2]
        : "";
    }
  },
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-breadcrumbs"},[_c(\'ol\',{staticClass:"g-breadcrumbs__list"},[_c(\'li\',{staticClass:"g-breadcrumbs__list-item"},[_c(\'a\',{staticClass:"g-breadcrumbs__link",attrs:{"href":href,"rel":rel,"target":computed__target}},[_v("\\nSection\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-breadcrumbs__list-item"},[_c(\'a\',{staticClass:"g-breadcrumbs__link",attrs:{"href":href2,"rel":rel2,"target":computed__target2}},[_v("\\nSub-section\\n\\n")])])])])}'
  )
});
