<template>
  <div class="home">
    <div class="container p-3">

      <div class="row d-flex justify-content-center">
        <div class="col-sm-12 col-md-3"> 
          <wr-searchbar @searchPost="searchPost"/>
        </div>
      </div>
      <div class="row sm-d-flex justify-content-center md-d-block">
        <wr-card 
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :text="post.body"
          :author="post.author"
        />
      </div>

    </div>
  </div>
</template>

<script>
import WrSearchbar from '../components/wr-searchbar.vue'
import WrCard from '../components/wr-card.vue'

export default {
  name: 'Home',
  components: {
    WrSearchbar,
    WrCard
  },
  computed: {
    posts(){
      return this.$store.getters['GET_ALL_POSTS']
    }
  },
  methods: {
    searchPost(searchValue){
      this.$store.commit('SET_FILTER_POSTS', searchValue)
      if(!searchValue) this.$store.dispatch('FETCH_POSTS')
    }
  },
  mounted(){
    this.$store.dispatch('FETCH_POSTS')
  },
}
</script>

<style scoped>
.home{
  min-height: 100%;
  background: rgb(230, 244, 255);
}
</style>