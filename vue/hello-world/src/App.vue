<template>
  <div id="app">
    <div>
      <h1>
        Receive data from parent<br />
        to children Using props
      </h1>
      <Action
        v-for="(action, index) in actions"
        :key="index"
        :actionData="action"
      />
    </div>
    <div>
      <h1>Multiple select</h1>
      <Tag-selector />
    </div>
    <div>
      <h1>-----Filers-----</h1>
      <h3>for client: {{ sum | split }}</h3>
      <h3>for server: {{ sum }}</h3>
      <button @click="sum *= 10">click to *10</button>
    </div>
  </div>
</template>

<script>
import Action from "./components/Action.vue";
import TagSelector from "./components/TagSelector.vue";

export default {
  data() {
    return {
      actions: [
        { action: "bay", done: false },
        { action: "an com", done: false },
        { action: "solo", done: false },
      ],
      sum: 1000000,
    };
  },
  filters: {
    split: function (number) {
      return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
  components: {
    Action,
    TagSelector,
  },
};
</script>

<style scoped>
</style>