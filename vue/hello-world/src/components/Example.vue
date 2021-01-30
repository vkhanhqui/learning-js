<template>
  <div id="app">
    <div id="isShow" v-show="isShow">
      <h1>------model------</h1>
      <input type="text" v-model="model" />
      <h1>{{ model }}</h1>
      <h1>------binding------</h1>
      <h1 v-bind:id="binding">id={{ binding }} cach1</h1>
      <h1 :id="binding">or id={{ binding }} cach2</h1>
      <h1
        :class="{
          ex1: selected,
          ex2: selected,
        }"
      >
        binding in class
      </h1>
    </div>
    <button @click="isShow = !isShow">hide/show Using v-show</button>
    <button v-if="isShow">isShow = {{ isShow }} v-if</button>
    <button v-else>isShow = {{ isShow }} v-else</button>
    <div>
      <h1>------array------</h1>
      <h3>{{ array[0] }}</h3>
      <h3>{{ array[1] }}</h3>
      <h3>{{ array[2] }}</h3>
    </div>
    <div>
      <h1>------objects------</h1>
      <h3>{{ objects.object1 }}</h3>
      <h3>{{ objects.object2 }}</h3>
    </div>
    <div>
      <h1>------v-on------</h1>
      <h3>{{ von }}</h3>
      <button v-on:click="von += ' von'">click cach 1</button>
      <button @click="von += ' von'">or click cach 2</button>
      <button @mouseover="von += ' von'">or cach 3</button>
    </div>
    <div>
      <h1>------list--v-for----</h1>
      <h3 v-for="element in array" :key="element">
        {{ element }}
      </h3>
      <h1>----mini----project----</h1>
      <h1>add action</h1>
      <input type="text" v-model="newAction" />
      <button @click="addTask()">add</button>
      <ul>
        <li v-for="(action, index) in listActions" :key="index">
          <input type="checkbox" v-model="action.done" />
          <span :class="{ done: action.done }">{{ action.action }}</span>
        </li>
      </ul>
    </div>
    <div>
      <h1>------objects------</h1>
      <h3>{{ objects.object1 }}</h3>
      <h3>{{ objects.object2 }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      model: "model",
      binding: "binding",
      selected: true,
      array: ["0", "1", "2"],
      objects: {
        object1: "object1",
        object2: "object2",
      },
      von: "von",
      newAction: "",
      listActions: [
        { action: "an", done: false },
        { action: "bay", done: false },
        { action: "solo", done: false },
      ],
    };
  },
  mounted() {
    
  },
  methods: {
    addTask: function () {
      this.listActions.push({ action: this.newAction, done: false });
    },
  },
  watch: {
    newAction: function (newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
    },
  },
};
</script>

<style>
#isShow {
  background-color: aquamarine;
}
.done {
  text-decoration: line-through;
}
</style>
