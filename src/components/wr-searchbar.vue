<template>
  <div class="we-searchbar input-group mb-3 ">
    <span class="input-group-text" id="basic-addon1">🔎</span>
    <input
      v-model="inputValue"
      @input="searchPost"
      type="text"
      class="form-control"
      placeholder="Search..."
    />
  </div>
</template>

<script>
export default {
  name: "we-searchbar",
  data(){
    return {
      inputValue: ""
    }
  },
  methods: {
    searchPost(){
      this.$emit('searchPost', this.inputValue)
    }
  }
};
</script>

