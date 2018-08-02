<template>
  <div class="main-container">
    <nav class="top-nav">
      <ul class="nav-links">
        <li>Home</li>
        <li>Champions</li>
        <li>About</li>
        <li>Version: {{ currentVersion }}</li>
      </ul>
    </nav>
    <mainForm v-on:gotData="toggleDataRetrieved" v-on:profileData="setProfileData"/>
    <bottomContent v-if="dataRetrieved" v-bind:profile="profileData" v-bind:matches="matches" v-bind:version="currentVersion"></bottomContent>
  </div>
</template>

<script>
import mainForm from './mainForm.vue';
import bottomContent from './bottomContent.vue';

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
      currentVersion: 'vs',
      matches: []
    }
  },
  created: function() {
    this.fetchVersion();
  },
  methods: {
    toggleDataRetrieved: function () {
      this.dataRetrieved = true;
    },
    setProfileData: function (obj) {
      this.profileData = obj;
      this.matches = obj.matches;
    },
    fetchVersion: async function() {
      const staticURL = 'https://ddragon.leagueoflegends.com/api/versions.json'
      let response = await fetch(staticURL);
      let version = await response.json();
      this.currentVersion = version[0];
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
  font-size: 20px;
}

</style>
