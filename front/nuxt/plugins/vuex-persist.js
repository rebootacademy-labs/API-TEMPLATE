import VuexPersistence from "vuex-persist";

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: "reboot",
      storage: localStorage
    }).plugin(store);
  });
};
