<template lang="html">
  <div class="match-history-container">
    <div class="single-match">
      <h1 class="result-text">VICTORY/DEFEAT</h1>
      <div class="match-history-left">
        <div class="champ-image">
          <img src="https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png"></img>
        </div>
        <div class="mhl-column2">
          <h3>Ranked solo</h3>
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
  </div>
</template>

<script>
export default {
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
