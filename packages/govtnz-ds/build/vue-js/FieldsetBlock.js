import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    hintId: { type: String, required: false },
    legend: { required: false, default: "Legend text" },
    hint: { required: false, default: "Hint text" },
    children: { required: false, default: "Fieldset contents" }
  },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-fieldsetBlock-form-group"},[_c(\'fieldset\',{staticClass:"g-fieldset",attrs:{"aria-describedby":hintId}},[_c(\'legend\',{staticClass:"g-fieldset__legend"},[_t("legend")],2),_v(" "),_c(\'div\',{staticClass:"g-fieldsetBlock-hint",attrs:{"id":hintId}},[_t("hint")],2),_v(" "),_c(\'div\',[_t("default")],2)])])}'
  )
});
