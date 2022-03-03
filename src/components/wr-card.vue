<template>
  <div class="wr-card card m-1" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title text-primary text-left">{{title}}</h5>
      <p class="card-text">
        {{text}}
      </p>
      <p class="card-text text-secondary">{{ author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "wr-card",
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
h5,
p {
  text-align: left;
}
</style>
