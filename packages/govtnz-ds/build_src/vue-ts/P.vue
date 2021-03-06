<template>
  <p v-bind:class="computed__class">
    <slot></slot>
  </p>
</template>
<script lang="ts">
import Vue from "vue";

const constants = {
  styleSize: {
    large: "g-body-l",
    medium: "g-body-m",
    small: "g-body-s",
    "x-small": "g-body-xs"
  }
};

export default Vue.extend({
  props: {
    styleSize: {
      type: String,
      validator: value => {
        return ["large", "medium", "small", "x-small"].indexOf(value) !== -1;
      },
      required: false
    },
    marginBottom0: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return (
        "g-body " +
        (constants.styleSize[this.styleSize] !== undefined
          ? ` ${constants.styleSize[this.styleSize]}`
          : "") +
        (this.marginBottom0 ? " g-body-marginBottom0" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-body {
  color: g-theme-color;
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.25rem;
  line-height: 1.625;
  margin-bottom: 1.25rem;
}
.g-fieldsetBlock-hint .g-body {
  font-size: 1rem;
  line-height: 1.25;
  color: g-theme-hint-color;
}
.g-fieldsetBlock-hint .g-body:first-child {
  margin-top: 0px;
}
.g-fieldsetBlock-hint .g-body:last-child {
  margin-bottom: 0px;
}
@media (min-width: 40.0625em) {
  .g-fieldsetBlock-hint .g-body {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
.g-body-l {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.625;
  margin-top: 0;
  margin-bottom: 1.25em;
}
@media print {
  .g-body-l {
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 18pt;
    line-height: 1.15;
  }
}
.g-body-s {
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.625;
  margin-top: 0;
  margin-bottom: 1rem;
}
@media print {
  .g-body-s {
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 14pt;
    line-height: 1.2;
  }
}
@media (min-width: 40.0625em) {
  .g-body-s {
    font-size: 1rem;
    line-height: 1.25;
    margin-bottom: 1.25rem;
  }
}
.g-body-xs {
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 15px;
}
@media print {
  .g-body-xs {
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 12pt;
    line-height: 1.2;
  }
}
@media (min-width: 40.0625em) {
  .g-body-xs {
    font-size: 0.875rem;
    line-height: 1.42857;
    margin-bottom: 0.75rem;
  }
}
</style>
