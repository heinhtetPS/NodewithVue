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
              {"platformId":"NA1","gameId":2787550758,"champion":163,"queue":450,"season":11,"timestamp":1526881690983,"role":"DUO_SUPPORT","lane":"NONE"},
              {"platformId":"NA1","gameId":2787522914,"champion":142,"queue":420,"season":11,"timestamp":1526879131340,"role":"DUO_SUPPORT","lane":"BOTTOM"},
              {"platformId":"NA1","gameId":2786916858,"champion":51,"queue":450,"season":11,"timestamp":1526797115899,"role":"DUO_SUPPORT","lane":"NONE"},
              {"platformId":"NA1","gameId":2786923127,"champion":54,"queue":450,"season":11,"timestamp":1526795977497,"role":"DUO_SUPPORT","lane":"NONE"},
              {"platformId":"NA1","gameId":2786328631,"champion":86,"queue":450,"season":11,"timestamp":1526712510802,"role":"DUO_SUPPORT","lane":"TOP"},
              {"platformId":"NA1","gameId":2785560928,"champion":131,"queue":450,"season":11,"timestamp":1526630537352,"role":"DUO_SUPPORT","lane":"NONE"},
              {"platformId":"NA1","gameId":2785526155,"champion":133,"queue":420,"season":11,"timestamp":1526627222229,"role":"DUO_CARRY","lane":"BOTTOM"},
              {"platformId":"NA1","gameId":2785021946,"champion":90,"queue":450,"season":11,"timestamp":1526537286689,"role":"DUO_SUPPORT","lane":"NONE"},
              {"platformId":"NA1","gameId":2784996485,"champion":127,"queue":420,"season":11,"timestamp":1526535154874,"role":"SOLO","lane":"MID"},
              {"platformId":"NA1","gameId":2784970207,"champion":28,"queue":420,"season":11,"timestamp":1526532955006,"role":"NONE","lane":"JUNGLE"}
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
