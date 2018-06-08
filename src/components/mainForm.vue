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
      <p><pre>data: {{$data}}</pre></p>
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
    fetchSummoner: () => {
      let staticURL = 'http://localhost:4000/searchbyname'
      axios.get(staticURL)
      .then( (response) => {
        console.log(response.data);
      })
      .catch( (error) => {
        console.log(error);
      });
    },
    fetchMatch: () => {
      let staticURL = 'http://localhost:4000/match'
      axios.get(staticURL)
      .then( (response) => {
        console.log(response.data);
      })
      .catch( (error) => {
        console.log(error);
      });
    },
    handleSubmit: () => {
      console.log("submitted");
    }
  }
}
</script>

<style lang="css">
</style>
