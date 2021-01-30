<template>
  <div class="task">
    <h3>From parent {{ actionData }}</h3>
    <h3>From child {{ action }}</h3>
    <h3>------------------------</h3>
  </div>
</template>

<script>
export default {
  props: {
    actionData: {
      type: Object,
      default: function () {
        return "have to stream data";
      },
    },
  },
  data() {
    return { action: "1vs1" };
  },
};
</script>

<style scoped>
</style>