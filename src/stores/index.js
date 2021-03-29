import { createStore } from "vuex";

import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

const store = createStore({
  state() {
    return {
      contactList: [
        {
          name: "Gene",
          userName: "geneee",
          lastMessage: "hello world",
          lastMessageDate: new Date(2020, 11, 25),
        },
        {
          name: "Bob",
          userName: "bobbb",
          lastMessage: "bruh wyd",
          lastMessageDate: new Date(2018, 3, 12),
        },
      ],
    };
  },
  mutations,
  getters,
  actions,
});

export default store;
