<template>
  <div class="main-container">
    <nav class="top-nav">
      <ul class="nav-links">
        <li>Home</li>
        <li>Champions</li>
        <li>About</li>

      </ul>
    </nav>
    <mainForm v-on:gotData="toggleDataRetrieved" v-on:profileData="setProfileData"/>
    <bottomContent v-if="dataRetrieved" v-bind:profile="profileData" v-bind:matches="matches"></bottomContent>
  </div>
</template>

<script>
import mainForm from './mainForm.vue';
import bottomContent from './bottomContent.vue';
import { bus } from '../main.js';

export default {
  name: 'Home',
  components: {
   mainForm,
   bottomContent
 },
  data () {
    return {
      dataRetrieved: false,
      profileData: '',
      currentVersion: '',
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
          champion: 77,
          queue: 420,
          timestamp: 1523083076236,
          role: "DUO_SUPPORT",
          lane: "BOTTOM"
        }
      ]
    }
  },
  created: async function () {
    this.currentVersion = await this.fetchVersion();
  },
  methods: {
    fetchVersion: async function () {
      let self = this;
      const staticURL = 'http://localhost:4000/vs'
      let response = await fetch(staticURL);
      let finalData = await response.json();
      return finalData;
    },
    toggleDataRetrieved: function () {
      this.dataRetrieved = true;
    },
    setProfileData: function (obj) {
      this.profileData = obj;
      this.matches = obj.matches;
    },

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

</style>
