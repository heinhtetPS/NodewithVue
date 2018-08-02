<template lang="html">
  <div class="match-history-container">
    <h1>RECENT MATCH HISTORY</h1>
    <singleMatch v-bind:yourname="yourname" v-bind:singleMatch="match" v-bind:version="version" v-for="match in matches" :key="match.gameId"></singleMatch>
  </div>
</template>

<script>
import singleMatch from './singleMatch.vue';
export default {
  props: ['matches', 'yourname', 'version'],
  components: {
    singleMatch
  }
}
</script>

<style lang="css">



</style>
