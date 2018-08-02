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
      <button type="submit">Search</button>
    </form>
  </div>

</template>

<script>
import { bus } from '../main.js';

export default {
  data () {
    return {
      summonerName: '',
      server: "NA",
    }
  },
  methods: {
    handleSubmit: async function() {
      let summonerData = await this.fetchSummoner();

      if (summonerData) {
        //this message triggers v-if for showing bottom content
        this.$emit("gotData");
        //this message passes summonerData to Homepage
        // console.log(summonerData);
        this.$emit("profileData", summonerData);
      }

    },
    fetchSummoner: async function() {
      const staticURL = 'http://localhost:4000/searchbyname'
      let summonerName = this.$data.summonerName;
      let fullURL = staticURL + "?" + summonerName;
      let finalData = {};

      try {
        let response = await fetch(fullURL);
        finalData = await response.json();
      } catch (err) {
        alert(err);
        alert('error with fetch, using fake data');
        finalData = {
          id: 318944,
          accountId: 345778,
          name: "malifaux",
          profileIconId: 539,
          revisionDate: 1515748743000,
          summonerLevel: 47,
          matches:
            [
              {
              platformId: "NA1",
              gameId: 2827108005,
              champion: 20,
              queue: 450,
              season: 11,
              timestamp: 1531723351125,
              role: "DUO_SUPPORT",
              lane: "NONE"
              },
              {
              platformId: "NA1",
              gameId: 2827102267,
              champion: 20,
              queue: 420,
              season: 11,
              timestamp: 1531720784801,
              role: "DUO_CARRY",
              lane: "BOTTOM"
              },
              {
              platformId: "NA1",
              gameId: 2827077634,
              champion: 20,
              queue: 420,
              season: 11,
              timestamp: 1531718972777,
              role: "DUO_CARRY",
              lane: "BOTTOM"
              }
            ]
          }
      }
      return finalData;
    }
  }
}
</script>

<style lang="css">

</style>
