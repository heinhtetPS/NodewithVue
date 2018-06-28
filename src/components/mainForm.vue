<template lang="html">
  <div class="main-form-container">
    <form class="the-form" @submit.prevent="handleSubmit">
      <label for="">Summoner Name:</label>
      <input type="text" v-model="summonerName" placeholder="Dyrus">
      <label for="">Server:</label>
      <select v-model="server" value="NA">
        <option disabled value="">Select Server</option>
        <option default value="NA">NA</option>
      </select>
      <button type="submit">Search</button><br />
    </form>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      summonerName: '',
      server: "NA"
    }
  },
  methods: {
    handleSubmit: async function() {
      let summonerData = await this.fetchSummoner();

      if (summonerData) {
        console.log(summonerData);
        this.$emit("gotData");
      }

    },
    fetchSummoner: function() {
      const staticURL = 'http://localhost:4000/searchbyname'
      let summonerName = this.$data.summonerName;
      let fullURL = staticURL + "?" + summonerName;
      axios.get(fullURL)
      .then( (response) => {
        // console.log(response.data);
        return response.data;
      })
      .catch( (error) => {
        console.log(error);
      });
    },
    fetchMatch: function() {
      const staticURL = 'http://localhost:4000/match'
      let matchGameID = 2787550758;
      let fullURL = staticURL + "?" + matchGameID;
      console.log(fullURL);
      axios.get(fullURL)
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

<style lang="css">

</style>
