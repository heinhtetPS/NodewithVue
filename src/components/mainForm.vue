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
      version: 'ooo',
    }
  },
  methods: {
    handleSubmit: async function() {
      let summonerData = await this.fetchSummoner();
      // this.version = await this.fetchVersion();


      if (summonerData) {
        //this message triggers v-if for showing bottom content
        this.$emit("gotData");
        //this message passes summonerData to Homepage
        // console.log(summonerData);
        this.$emit("profileData", summonerData);
        //this message passes version data to Homepage to send to childrens
        // this.$emit("currentVersion", this.version);
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
        console.log('error with fetch, using fake data');
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
              },
              {
              platformId: "NA1",
              gameId: 2826950411,
              champion: 81,
              queue: 450,
              season: 11,
              timestamp: 1531705093654,
              role: "DUO",
              lane: "TOP"
              },
              {
              platformId: "NA1",
              gameId: 2826311639,
              champion: 222,
              queue: 450,
              season: 11,
              timestamp: 1531640649691,
              role: "DUO_SUPPORT",
              lane: "NONE"
              },
              {
              platformId: "NA1",
              gameId: 2826238378,
              champion: 145,
              queue: 420,
              season: 11,
              timestamp: 1531634376963,
              role: "DUO_CARRY",
              lane: "BOTTOM"
              },
              {
              platformId: "NA1",
              gameId: 2826245176,
              champion: 222,
              queue: 450,
              season: 11,
              timestamp: 1531633211730,
              role: "DUO",
              lane: "NONE"
              },
              {
              platformId: "NA1",
              gameId: 2826180342,
              champion: 142,
              queue: 450,
              season: 11,
              timestamp: 1531625885922,
              role: "DUO_SUPPORT",
              lane: "NONE"
              },
              {
              platformId: "NA1",
              gameId: 2825691354,
              champion: 59,
              queue: 450,
              season: 11,
              timestamp: 1531545307306,
              role: "DUO_SUPPORT",
              lane: "MID"
              },
              {
              platformId: "NA1",
              gameId: 2825634561,
              champion: 45,
              queue: 420,
              season: 11,
              timestamp: 1531540134271,
              role: "DUO_SUPPORT",
              lane: "BOTTOM"
              },
              {
              platformId: "NA1",
              gameId: 2825641741,
              champion: 254,
              queue: 420,
              season: 11,
              timestamp: 1531539524242,
              role: "DUO",
              lane: "NONE"
              }
            ]
          }
      }
      return finalData;
    },
    // fetchVersion: async function() {
    //   const staticURL = 'http://localhost:4000/vs'
    //   let response = await fetch(staticURL);
    //   //it is because its just a 1 liner that response.json doesn't work and causes error?
    //   let version = await response.text();
    //   console.log(version);
    //   return version;
    // }
  }
}
</script>

<style lang="css">

</style>
