<template lang="html">
  <div>
    <img class="profile-icon" v-bind:src="'http://avatar.leagueoflegends.com/na/' + data.name + '.png'"></img>
    <div class="side-info">
      <h1 class="profile-name">{{data.name}}</h1>
      <p class="summoner-level">Summoner Level: {{ data.summonerLevel }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="css">
.profilebox {
  width: 100%;
  display: flex;
}

.profile-icon {
  padding: 10px 10px 10px 10px;
}

.side-info {

}

.profile-name {
  line-height: 20px;
}
</style>
