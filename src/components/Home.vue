<template>
  <div class="main-container">
    <nav class="top-nav">
      <ul class="nav-links">
        <li>Home</li>
        <li>Champions</li>
        <li>About</li>
      </ul>
    </nav>
    <mainForm />
    <matchHistory v-bind:matches="matches"></matchHistory>
  </div>
</template>

<script>
import axios from 'axios';
import mainForm from './mainForm.vue';
import matchHistory from './matchHistory.vue';
export default {
  name: 'Home',
  components: {
   mainForm,
   matchHistory
 },
  data () {
    return {
      matches: [
        {
          gameId: 2787550758,
          champion: 163,
          queue: 450,
          timestamp: 1526881690983,
          role: "DUO_CARRY",
          lane: "BOTTOM"
        },
        {
          gameId: 2787522914,
          champion: 142,
          queue: 420,
          timestamp: 1523083076236,
          role: "DUO_SUPPORT",
          lane: "BOTTOM"
        }
      ]
    }
  },
  created: function () {
    // this.fetchData()
  },
  mounted () {
  },
  methods: {
    fetchData: () => {
      let staticURL = 'http://localhost:4000/searchbyname'
      axios.get(staticURL)
      .then( (response) => {
        console.log(response.data);
      })
      .catch( (error) => {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.top-nav {
  width: 100%;
  background-color: black;
  color: white;
}
.d3-container {
  width: 80%;
  height: 600px;
  background-color: gainsboro;
  margin-left: 10%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.d3-container > img {
  max-width: 100%;
  max-height: 100%;
}
</style>
