import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist();

export const plugins = [vuexPersist.plugin];

export const state = () => ({
  token: "",
  username: "",
  email: ""
});

export const getters = {
  userName(state) {
    return state.username;
  }
};
export const mutations = {
  saveToken(state, { username, email, token }) {
    state.token = token;
    state.username = username;
    state.email = email;
  }
};
