<template>
  <div class="list">
    <div
      v-for="(language, index) in languages"
      :key="index"
      @click="language.selected = !language.selected"
      :class="{ selected: language.selected }"
    >
      <span>{{ language.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        {
          name: "php",
          selected: false,
        },
        {
          name: "java",
          selected: false,
        },
        {
          name: "ruby",
          selected: false,
        },
        {
          name: "js",
          selected: false,
        },
        {
          name: "c#",
          selected: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.list div {
  display: inline-block;
  border: 1px solid black;
  padding: 4px 15px;
  margin-right: 5px;
  border-radius: 4px;
}
.list div.selected {
  background-color: aqua;
  color: white;
}
</style>