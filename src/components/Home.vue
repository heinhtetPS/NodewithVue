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
    <bottomContent v-if="dataRetrieved" v-bind:profile="profileData" v-bind:matches="matches"></bottomContent>
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
      dataRetrieved: true,
      profileData: '',
      currentVersion: 'vs',
      matches: [{"platformId":"NA1","gameId":2822442302,"champion":516,"queue":450,"season":11,"timestamp":1526881690983,"role":"DUO_SUPPORT","lane":"NONE"},
      {"platformId":"NA1","gameId":2787522914,"champion":142,"queue":420,"season":11,"timestamp":1526879131340,"role":"DUO_SUPPORT","lane":"BOTTOM"},
      {"platformId":"NA1","gameId":2786916858,"champion":51,"queue":450,"season":11,"timestamp":1526797115899,"role":"DUO_SUPPORT","lane":"NONE"},
      {"platformId":"NA1","gameId":2786923127,"champion":54,"queue":450,"season":11,"timestamp":1526795977497,"role":"DUO_SUPPORT","lane":"NONE"},]
    }
  },
  // created: async function() {
  //   this.currentVersion = await this.fetchVersion();
  // },
  methods: {
    fetchVersion: async function() {
      //something in here is causing a rate limit issue
      const staticURL = 'http://localhost:4000/vs'
      let response = await fetch(staticURL);
      console.log(response);
      return response;
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
