<template>
  <div>
    <draggable :list="todoItems" :disabled="!enabled" class="list-group ul-style" ghost-class="ghost" @start="dragging = true" @end="dragging = false">
      <div class="list-group-item shadow li-style" v-for="(todoItem, index) in todoItems" :key="todoItem.key">

        <!-- v-bind:class 속성은 completed가 true가 되면 class가 적용된다. -->
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)">
          <i class="fas fa-check"></i>
        </span>
        <!-- completed가 true가 되면 class가 적용된다. -->
        <span class="textarea" v-bind:class="{textCompleted: todoItem.completed}">
          <div class="titleText">
            <div v-if="!todoItem.reviseMode">{{ todoItem.title }}</div>
            <input v-if="todoItem.reviseMode" type="text" value="todoItem.title" v-model="todoItem.title" v-on:keyup.enter="reviseTodo(todoItem, index)">
          </div>
          <div class="contentText">
            <div class="contentChild">
              <div v-if="!todoItem.reviseMode">{{ todoItem.content }}</div>
              <input v-if="todoItem.reviseMode" type="text" value="todoItem.content" v-model="todoItem.content" v-on:keyup.enter="reviseTodo(todoItem, index)">
            </div>
            <div class="duedate" v-if="todoItem.due != null">
              <div v-if="!todoItem.reviseMode">
                ...until {{todoItem.due.getFullYear()}}.{{todoItem.due.getMonth()+1}}.{{todoItem.due.getDate()}}
              </div>
            </div>
            <Datepicker v-if="todoItem.reviseMode" placeholder="set deadline" v-model="todoItem.due" v-on:keyup.enter="reviseTodo(todoItem, index)"></Datepicker>
          </div>
        </span>

        <span class="reviseAndRemoveBtn">
          <div class="reviseBtn" v-on:click="reviseTodo(todoItem, index)">
            <i class="fas fa-pencil-alt"></i>
          </div>
          <div class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fas fa-trash-alt"></i>
          </div>
        </span>
        
      </div>
    </draggable>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import Draggable from 'vuedraggable';

export default {
  components: {
    'Datepicker': Datepicker,
    'Draggable': Draggable,
  },

  data() {
    return {
      enabled: true,
      dragging: false
    };
  },

  methods: {
    toggleComplete(todoItem, index){
      let tmpItem = todoItem;
      tmpItem.completed = !tmpItem.completed;
      let payload = {
        index: index,
        item: tmpItem,
      }
      this.$store.commit('COMPLETE_ITEM', payload);
    },

    reviseTodo(todoItem, index){
      todoItem.reviseMode = !todoItem.reviseMode;
      if(!todoItem.reviseMode){
        let tmpItem = todoItem;
        let payload = {
          index: index,
          item: tmpItem,
        }
        this.$store.commit('REVISE_ITEM', payload);
      }
    },

    removeTodo(item, index){
      this.$store.commit('DELETE_ITEM', index);
    },

  },


  computed: {
    todoItems(){
      return this.$store.getters.fetchedItems;   
    }
  }
}
</script>


<style scoped>
  .ul-style{
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  .li-style {
    display: flex;
    /* min-height: 50px; */
    height: 80px;
    
    margin: 0.5rem 0;
    padding: 0 0.9em;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 10px;
    /* flex-grow: 1; */
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textArea {
    /* flex-grow: 9; */
    /* align-items: flex-end; */
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .titleText {
    line-height: 50px;
  }
  .contentText {
    font-size: 0.75rem;
    /* width: 500px; */
    display: flex;
  }
  .contentChild {
    flex-grow: 4;
  }
  .duedate {
    flex-grow: 1; 
    text-align: right;
    color: #575757;
  }
  .reviseAndRemoveBtn {
    display: flex;
    line-height: 50px;
    margin-left: auto;
    /* flex-grow: 1; */
  }
  .reviseBtn {
    /* margin-left: auto; */
    color: #536dff;
    cursor: pointer;
  }
  .removeBtn {
    margin-left: 15px;
    color: #de4343;
    cursor: pointer;
  }
  .buttons {
    margin-top: 35px;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
</style>
