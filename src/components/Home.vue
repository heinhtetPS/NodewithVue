<template>
  <div class="main-container">
    <nav class="top-nav">
      <ul class="nav-links">
        <li>Home</li>
        <!-- <li><router-link to="Champs">Champion List</router-link></li> -->
        <li>About</li>
      </ul>
    </nav>
    <div class="form-container">
      <label for="">Summoner Name:</label>
      <input type="text" name="" value="">
      <label for="">Server:</label>
      <select name="server">
        <option value="NA">NA</option>
      </select>
    </div>

  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  created: function () {
    // this.fetchData()
  },
  mounted () {
  },
  methods: {
    fetchData: function () {
      // var self = this
      let accountAPI = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/malifaux?api_key=RGAPI-3065b5ee-27b9-45bf-bf65-90a7386bc5e7'
      // $.getJSON(accountAPI, function (data) {
      //   self.accountByName = data.data
      //   console.log(self.accountByName)
      // })
//       $.ajax({
//         url: accountAPI,
//     // The name of the callback parameter, as specified by the YQL service
//         jsonp: 'callback',
//     // Tell jQuery we're expecting JSONP
//         dataType: 'jsonp',
//     },
//     // Work with the response
//     function( response ) {
//         console.log( response ); // server response
//     }
// );
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
