<template lang="html">
  <div class="main-form-container">
    <form class="" action="index.html" method="post">

    </form>
    <label for="">Summoner Name:</label>
    <input type="text" v-model="summonerName" placeholder="Dyrus">
    <label for="">Server:</label>
    <select v-model="server" value="NA">
      <option disabled value="">Select Server</option>
      <option default value="NA">NA</option>
    </select>
    <button>Search</button><br />
    <p><pre>data: {{$data}}</pre></p>
  </div>

</template>

<script>
export default {
  data () {
    return {
      summonerName: 'Dyrus',
      server: "NA"
    }
  }
}
</script>

<style lang="css">
</style>
