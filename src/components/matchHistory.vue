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

.single-match {
  width: 100%;
  border: 1px solid green;
  display: flex;
  flex-wrap: wrap;
  background-color: #a2f78d;
}



</style>
