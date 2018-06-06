<template lang="html">
  <div class="match-history-container">
    <singleMatch v-bind:singleMatch="match" v-for="match in matches" :key="match.gameId"></singleMatch>
  </div>
</template>

<script>
import singleMatch from './singleMatch.vue';
export default {
  props: ['matches'],
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

.result-text {
  width: 100%;
}

.match-history-left {
  border: 1px solid red;
  padding: 25px 0px 0px 20px;
  width: 50%;
  display: flex;
}

.champ-image {
  width: 120px;
  height: 120px;
}

.spells-and-runes {
  width: 120px;
  height: 120px;
  margin-left: 10px;
  margin-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
}

.spells-and-runes > img {
  max-width: 50%;
  max-height: 50%;
}

.match-history-right {
  border: 1px solid blue;
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 20px;
}

.item-blocks {
  display: flex;
  width: 100%;
}

.item-block {
  width: 30px;
  height: 30px;
}

.item-block > img {
  max-width: 100%;
  max-height: 100%;
}

.kda {
  width: 30%;
}

.cs-count {
  width: 70%;
}

</style>
