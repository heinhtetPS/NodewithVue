<template lang="html">
  <div class="single-match">
    <h1 class="result-text">VICTORY/DEFEAT</h1>
    <div class="match-history-left">
      <div class="champ-image">
        <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></img>
      </div>
      <div class="mhl-column2">
        <h3>{{ singleMatch.queue }}</h3>
        <div class="spells-and-runes">
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></img>
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></img>
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></img>
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></img>
        </div>
      </div>
    </div>
    <div class="match-history-right">
      <h2 class="kda">5/4/13</h2>
      <h3 class="cs-count">120 cs</h3>
      <div class="item-blocks">
        <div class="item-block">
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></img>
        </div>
        <div class="item-block">
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></img>
        </div>
        <div class="item-block">
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></img>
        </div>
        <div class="item-block">
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></img>
        </div>
        <div class="item-block">
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></img>
        </div>
        <div class="item-block">
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></image>
        </div>
        <div class="item-block">
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></image>
        </div>
      </div>
      <p class="kda">20:01</p>
      <p class="cs-count">12/31/2013</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['singleMatch'],
}
</script>

<style lang="css">
</style>
