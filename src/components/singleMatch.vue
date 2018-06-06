<template lang="html">
  <div class="single-match">
    <h1 class="result-text">VICTORY/DEFEAT</h1>
    <div class="match-history-left">
      <div class="champ-image">
        <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png"></img>
      </div>
      <div class="mhl-column2">
        <h3>{{ singleMatch.queue }}</h3>
        <div class="spells-and-runes">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerFlash.png"></img>
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerFlash.png"></img>
        </div>
      </div>
    </div>
    <div class="match-history-right">
      <h2 class="kda">5/4/13</h2>
      <h3 class="cs-count">120 cs</h3>
      <div class="item-blocks">
        <div class="item-block">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1001.png"></img>
        </div>
        <div class="item-block">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1001.png"></img>
        </div>
        <div class="item-block">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1004.png"></img>
        </div>
        <div class="item-block">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1004.png"></img>
        </div>
        <div class="item-block">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1006.png"></img>
        </div>
        <div class="item-block">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1006.png"></image>
        </div>
        <div class="item-block">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1007.png"></image>
        </div>
      </div>
      <p class="kda">{{ getTheHours(singleMatch.timestamp) }}</p>
      <p class="cs-count">{{ getTheDate(singleMatch.timestamp) }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['singleMatch'],

  methods: {
    getTheDate: (stamp) => {
      const date = new Date(stamp);
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      return month + "/" + day + "/" + year;
    },
    getTheHours: (stamp) => {
      const date = new Date(stamp);
      let hour = date.getHours();
      let mins = date.getMinutes();
      return hour + ":" + mins;
    }
  }
}



</script>

<style lang="css">
</style>
