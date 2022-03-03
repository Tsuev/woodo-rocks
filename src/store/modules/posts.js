export default {
    state: {
      posts: []
    },
    mutations: {
      SET_POSTS(state, posts){
        state.posts = posts
      },
      SET_FILTER_POSTS(state, searchAuthor){
        state.posts = state.posts.filter(item => (item.author.toUpperCase()).includes(searchAuthor.toUpperCase()))
        console.log(searchAuthor);
      }
    },
    actions: {
      async FETCH_POSTS({commit}){
        try {
          const res = await fetch('http://jsonplaceholder.typicode.com/posts');
          const posts = await res.json()

          const res2 = await fetch('http://jsonplaceholder.typicode.com/users')
          const users = await res2.json()
          
          posts.forEach(post => {users.forEach(user => {if (post.userId == user.id) post.author = user.username })});

          commit('SET_POSTS', posts);
        }
        catch(error){
          alert(`Произошла ошибка : ${error}`);
        }
      }
    },
    getters: {
      GET_ALL_POSTS(state){
        return state.posts
      },
    },
};