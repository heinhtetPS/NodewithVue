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
      <p>{{ version }}</p>
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
      this.version = await this.fetchVersion();

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
      let response = await fetch(fullURL);
      let finalData = await response.json();
      return finalData;
    },
    fetchVersion: async function() {
      const staticURL = 'http://localhost:4000/vs'
      let response = await fetch(staticURL);
      //it is because its just a 1 liner that response.json doesn't work and causes error?
      let version = await response.text();
      return version;
    }
  }
}
</script>

<style lang="css">

</style>
