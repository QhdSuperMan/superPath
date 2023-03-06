// src/mixins/index.js
import { mapGetters } from "vuex";
let mixin = {
  computed: {
    ...mapGetters({
      btnAuthority: "getBtnAuthority",
    }),
  },
};
export default mixin;
