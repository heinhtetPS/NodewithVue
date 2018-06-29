<template lang="html">
  <div class="profile-container">
    <h1>{{data.name}}</h1>
    <p>Summoner Level: {{ data.summonerLevel}}</p>
    <img v-bind:src="'http://avatar.leagueoflegends.com/na/' + data.name + '.png'"></img>
    <h2>Recently Played Champs</h2>
    <ul class="champlistUL">
      <li>
        <img v-bind:src="'http://avatar.leagueoflegends.com/na/' + 'malifaux' + '.png'"></img>
      </li>
      <li>
        <img v-bind:src="'http://avatar.leagueoflegends.com/na/' + 'malifaux' + '.png'"></img>
      </li>
      <li>
        <img v-bind:src="'http://avatar.leagueoflegends.com/na/' + 'malifaux' + '.png'"></img>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="css">
.champlistUL {
  display: flex;
  flex-direction: column;
}
.champListUL > li {
  list-style: none;
}
</style>
