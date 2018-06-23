<template lang="html">
  <div class="profile-container">
    <h1>{{data}}</h1>
    <p>Summoner Level: 999</p>
    <img v-bind:src="'http://avatar.leagueoflegends.com/na/' + 'malifaux' + '.png'"></img>
    <h2>Recently Played Champs</h2>
    <ul>
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
ul {
  display: flex;
}
</style>
