import axios from "axios";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      messages: [],
    };
  },
  mutations: {
    updateMessages(state, messages) {
      state.messages = messages;
    },
    newMessage(state, messages) {
      state.messages.push(messages);
    },
  },
  actions: {
    async getMessages({ commit }) {
      const response = await axios.get("http://localhost:3000/messages");
      commit("updateMessages", response.data);
    },
    async newMessage({ commit }, messageBody) {
      let msg = await axios.post("http://localhost:3000/messages", {
        message: messageBody,
      });
      commit("newMessage", msg.data);
    },
    async getMessage({ commit }, id) {
      return axios.get(`http://localhost:3000/messages/${id}`);
    },

    async register({ commit }, registerData) {
      await axios.post("http://localhost:3000/register", registerData);
    },
  },
});

export default store;
