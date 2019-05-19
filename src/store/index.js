import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todoItems: [],
    // todoItem: {
    //   title: '',
    //   content: '',
    //   due: Date(),
    //   key: number,
    //   completed: bool,
    // }
  },
  getters: {
    fetchedItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    SET_ITEM(state, payload){
      state.todoItems.push(payload);
    },
    DELETE_ITEM(state, index){
      state.todoItems.splice(index, 1);
    },
    COMPLETE_ITEM(state, payload){
      state.todoItems[payload.index] = payload.item;
    },
    REVISE_ITEM(state, payload){
      state.todoItems[payload.index] = payload.item;
    },
    CLEAR_ITEM(state){
      state.todoItems = [];
    }
  },
  actions: {

  }
})
