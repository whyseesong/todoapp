<template>
  <div class="todoInput">
    <div class="inputBox shadow">
      <div class="inputContainer">
        <div class="titleBox">
          <div class="title">
            Title: 
          </div>
          <input type="text" placeholder="Input Title" v-model="newTitle" v-on:keyup.enter="addTodo">
        </div>

        <div class="contentBox">
          <div class="content">
            Contents: 
          </div>
          <input type="text" placeholder="Input Content" v-model="newContent" v-on:keyup.enter="addTodo">
        </div>

        <div class="dateBox">
          <div class="due">
            Due
            <input type="checkbox" id="checkbox" v-model="checked">
          </div>
          
          <Datepicker class="dateContainer" v-model="newDue" placeholder="Select Date" :disabled="!checked"></Datepicker>
        </div>

      </div>

      <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
      </span>
    </div>
  </div>
  
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    'Datepicker': Datepicker,
  },
  data(){
    return {
      // obj
      newTitle: '',
      newContent: '',
      newDue: null,

      checked: false,
      date: new Date(),
    }
  },
  methods: {
    addTodo() {
      if(this.newTitle !== ''){
        
        let todoObj = {
          title: this.newTitle,
          content: this.newContent,
          due: this.newDue,
          completed: false,
          reviseMode: false,
        };
        
        this.$store.commit('SET_ITEM', todoObj);

        this.clearInput();
      } else {
        alert("please input title!");
      }
    },
    clearInput() {
      this.newTitle = '';
      this.newContent = '';
      this.checked = false;
      this.newDue = null;
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 120px;
  line-height: 40px;
  border-radius: 5px;
  display: flex;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  padding: 0;
}
.inputContainer {
  flex: 1 1 auto;
  text-align: left;
  padding-left: 10px;
}
.titleBox {
  display: flex;
}
.title {
  width: 80px;
  text-align: center;
}
.contentBox {
  display: flex;
}
.content {
  width: 80px;
  text-align: center;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763FB);
  display: block;
  width: 2rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
  cursor: pointer;
}
.dateBox {
  display:flex;
}
.due {
  width: 80px;
  text-align: center;
}
</style>