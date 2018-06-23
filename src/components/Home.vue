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
    <bottomContent v-bind:show="dataRetrieved" v-bind:profile="profileData" v-bind:matches="matches"></bottomContent>
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
    //get this FROM the mainForm while passing it INTO matchHistory
    //get profile data FROM mainform and pass into profile
    //additional profile data will come from fetch, extend the data
    return {
      dataRetrieved: false,
      profileData: 'malifaux',
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
  created: function () {
    // this.fetchData()
  },
  mounted () {
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

.bottom-container {
  display: flex;
}

.profilebox {
  width: 40%;
}

.historybox {
  width: 60%;
}
</style>
