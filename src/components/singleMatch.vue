<template lang="html">
  <div class="single-match">
    <div class="splashbox">
      <img class="bg-splash" v-bind:src="'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + convertChampKeytoName(singleMatch.champion) + '_0.jpg'"></img>
    </div>
    <h1 class="result-text"> {{ victoryOrDefeat(this.yourStats.stats) }}</h1>
    <div class="match-history-left">
      <div class="champ-image">
        <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/champion/' + convertChampKeytoName(singleMatch.champion) + '.png'"></img>
      </div>
      <div class="mhl-column2">
        <h3>{{ convertQueueID(singleMatch.queue) }}</h3>
        <div class="spells-and-runes">
          <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/spell/' + convertSSKeytoName(this.yourStats.spell1Id) + '.png'"></img>
          <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/spell/' + convertSSKeytoName(this.yourStats.spell2Id) + '.png'"></img>
        </div>
      </div>
    </div>
    <div class="match-history-right">
      <h2 class="kda">{{ getScore() }}</h2>
      <h3 class="cs-count">{{ this.yourStats.stats.totalMinionsKilled }} cs</h3>
      <div class="item-blocks">
        <div class="item-block">
          <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/item/' + this.yourItems[0] + '.png'"></img>
        </div>
        <div class="item-block">
          <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/item/' + this.yourItems[1] + '.png'"></img>
        </div>
        <div class="item-block">
          <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/item/' + this.yourItems[2] + '.png'"></img>
        </div>
        <div class="item-block">
          <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/item/' + this.yourItems[3] + '.png'"></img>
        </div>
        <div class="item-block">
          <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/item/' + this.yourItems[4] + '.png'"></img>
        </div>
        <div class="item-block">
          <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/item/' + this.yourItems[5] + '.png'"></image>
        </div>
      </div>
      <div class="below-items">
        <p class="timeofday">{{ getTheHours(singleMatch.timestamp) }}</p>
        <p class="dateofgame">{{ getTheDate(singleMatch.timestamp) }}</p>
        <p class="game-Duration">{{ getGameDuration(this.matchInfo.gameDuration) }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['singleMatch', 'yourname', 'version'],

  data: function () {
    return {
      propInfo: this.singleMatch,
      matchInfo: {},
      yourStats: {},
      yourItems: []
    }
  },

  created: async function () {
    this.matchInfo = await this.fetchMatch();

    if (this.matchInfo !== {}) {
      this.setYourStats(this.matchInfo);
      this.setYourItems(this.yourStats.stats);
    }
  },

  methods: {
    fetchMatch: async function() {
      let self = this;
      const staticURL = 'http://localhost:4000/match'
      let matchGameID = self.singleMatch.gameId;
      let fullURL = staticURL + "?" + matchGameID;
      let finalData = {};

      try {
        let response = await fetch(fullURL);
        finalData = await response.json();
      } catch (err) {
        alert(err);
        console.log("failed to fetch match, using fake data");
        //fake data incomplete, put in teams, parts and ids
        finalData = {
          gameId: 2787550758,
          platformId: "NA1",
          gameCreation: 1526881690983,
          gameDuration: 1174,
          queueId: 450,
          mapId: 12,
          seasonId: 11,
          gameVersion: "8.10.229.7328",
          gameMode: "ARAM",
          gameType: "MATCHED_GAME",
          teams: [],
          participants: [
            {
              participantId: 1,
              teamId: 100,
              championId: 20,
              spell1Id: 4,
              spell2Id: 7,
              highestAchievedSeasonTier: "BRONZE",
              stats: {
                participantId: 1,
                win: true,
                item0: 3009,
                item1: 3031,
                item2: 3094,
                item3: 3026,
                item4: 3508,
                item5: 1055,
                item6: 3340,
                kills: 16,
                deaths: 2,
                assists: 11,
                largestKillingSpree: 7,
                largestMultiKill: 3,
                killingSprees: 3,
                longestTimeSpentLiving: 1000,
                doubleKills: 3,
                tripleKills: 1,
                quadraKills: 0,
                pentaKills: 0,
                unrealKills: 0,
                totalDamageDealt: 160296,
                magicDamageDealt: 17070,
                physicalDamageDealt: 142562,
                trueDamageDealt: 664,
                largestCriticalStrike: 1583,
                totalDamageDealtToChampions: 26951,
                magicDamageDealtToChampions: 2300,
                physicalDamageDealtToChampions: 24367,
                trueDamageDealtToChampions: 284,
                totalHeal: 2441,
                totalUnitsHealed: 3,
                damageSelfMitigated: 3200,
                damageDealtToObjectives: 13994,
                damageDealtToTurrets: 5598,
                visionScore: 22,
                timeCCingOthers: 54,
                totalDamageTaken: 10036,
                magicalDamageTaken: 4017,
                physicalDamageTaken: 4627,
                trueDamageTaken: 1390,
                goldEarned: 17093,
                goldSpent: 13450,
                turretKills: 5,
                inhibitorKills: 1,
                totalMinionsKilled: 177,
                neutralMinionsKilled: 16,
                neutralMinionsKilledTeamJungle: 8,
                neutralMinionsKilledEnemyJungle: 4,
                totalTimeCrowdControlDealt: 392,
                champLevel: 15,
                visionWardsBoughtInGame: 2,
                sightWardsBoughtInGame: 0,
                wardsPlaced: 10,
                wardsKilled: 1,
                firstBloodKill: false,
                firstBloodAssist: false,
                firstTowerKill: true,
                firstTowerAssist: false,
                firstInhibitorKill: false,
                firstInhibitorAssist: true,
                combatPlayerScore: 0,
                objectivePlayerScore: 0,
                totalPlayerScore: 0,
                totalScoreRank: 0,
                playerScore0: 0,
                playerScore1: 0,
                playerScore2: 0,
                playerScore3: 0,
                playerScore4: 0,
                playerScore5: 0,
                playerScore6: 0,
                playerScore7: 0,
                playerScore8: 0,
                playerScore9: 0,
                perk0: 8214,
                perk0Var1: 1606,
                perk0Var2: 102,
                perk0Var3: 0,
                perk1: 8243,
                perk1Var1: 15,
                perk1Var2: 0,
                perk1Var3: 0,
                perk2: 8210,
                perk2Var1: 12,
                perk2Var2: 0,
                perk2Var3: 0,
                perk3: 8236,
                perk3Var1: 28,
                perk3Var2: 0,
                perk3Var3: 0,
                perk4: 9111,
                perk4Var1: 482,
                perk4Var2: 0,
                perk4Var3: 0,
                perk5: 8014,
                perk5Var1: 730,
                perk5Var2: 0,
                perk5Var3: 0,
                perkPrimaryStyle: 8200,
                perkSubStyle: 8000
              }
            },
            {
              participantId: 2,
              teamId: 100,
              championId: 111,
              spell1Id: 4,
              spell2Id: 14,
              highestAchievedSeasonTier: "BRONZE",
              stats: {
                participantId: 2,
                win: true,
                item0: 3111,
                item1: 3143,
                item2: 3401,
                item3: 3065,
                item4: 1028,
                item5: 1028,
                item6: 3364,
                kills: 3,
                deaths: 5,
                assists: 22,
                largestKillingSpree: 2,
                largestMultiKill: 1,
                killingSprees: 1,
                longestTimeSpentLiving: 1012,
                doubleKills: 0,
                tripleKills: 0,
                quadraKills: 0,
                pentaKills: 0,
                unrealKills: 0,
                totalDamageDealt: 58041,
                magicDamageDealt: 21567,
                physicalDamageDealt: 21649,
                trueDamageDealt: 14824,
                largestCriticalStrike: 0,
                totalDamageDealtToChampions: 15909,
                magicDamageDealtToChampions: 10080,
                physicalDamageDealtToChampions: 4184,
                trueDamageDealtToChampions: 1645,
                totalHeal: 6136,
                totalUnitsHealed: 6,
                damageSelfMitigated: 36352,
                damageDealtToObjectives: 7159,
                damageDealtToTurrets: 5103,
                visionScore: 52,
                timeCCingOthers: 83,
                totalDamageTaken: 32166,
                magicalDamageTaken: 10800,
                physicalDamageTaken: 16252,
                trueDamageTaken: 5113,
                goldEarned: 10678,
                goldSpent: 9725,
                turretKills: 1,
                inhibitorKills: 0,
                totalMinionsKilled: 62,
                neutralMinionsKilled: 4,
                neutralMinionsKilledTeamJungle: 0,
                neutralMinionsKilledEnemyJungle: 0,
                totalTimeCrowdControlDealt: 556,
                champLevel: 15,
                visionWardsBoughtInGame: 3,
                sightWardsBoughtInGame: 0,
                wardsPlaced: 20,
                wardsKilled: 2,
                firstBloodKill: false,
                firstBloodAssist: false,
                firstTowerKill: false,
                firstTowerAssist: false,
                firstInhibitorKill: false,
                firstInhibitorAssist: true,
                combatPlayerScore: 0,
                objectivePlayerScore: 0,
                totalPlayerScore: 0,
                totalScoreRank: 0,
                playerScore0: 0,
                playerScore1: 0,
                playerScore2: 0,
                playerScore3: 0,
                playerScore4: 0,
                playerScore5: 0,
                playerScore6: 0,
                playerScore7: 0,
                playerScore8: 0,
                playerScore9: 0,
                perk0: 8439,
                perk0Var1: 984,
                perk0Var2: 0,
                perk0Var3: 0,
                perk1: 8446,
                perk1Var1: 2899,
                perk1Var2: 0,
                perk1Var3: 0,
                perk2: 8444,
                perk2Var1: 2102,
                perk2Var2: 0,
                perk2Var3: 0,
                perk3: 8451,
                perk3Var1: 266,
                perk3Var2: 0,
                perk3Var3: 0,
                perk4: 8243,
                perk4Var1: 15,
                perk4Var2: 0,
                perk4Var3: 0,
                perk5: 8237,
                perk5Var1: 548,
                perk5Var2: 0,
                perk5Var3: 0,
                perkPrimaryStyle: 8400,
                perkSubStyle: 8200
              }
            }
          ],
          participantIdentities: []
        }
      }

      return finalData;
    },
    doTest: function() {
      console.log(yourItems);
    },
    getGameDuration: function(seconds) {
      let hours = (seconds / 3600);
      let minutes = Math.round(((seconds / 3600) - Math.floor(hours)) * 60);

      if (hours >= 1) {
        return "~ " + hours + "hour" + minutes + " minutes";
      } else {
        return "~" + minutes + " minutes";
      }
    },
    getTheDate: function(stamp) {
      const date = new Date(stamp);
      let year = date.getFullYear();
      let month = date.getMonth() +1;
      let day = date.getDate();
      return month + "/" + day + "/" + year;
    },
    getTheHours: function(stamp) {
      const date = new Date(stamp);
      let hour = date.getHours();
      let mins = date.getMinutes();
      if (mins < 10)
      mins = mins * 10;
      return hour + ":" + mins;
    },
    convertQueueID: function(id) {
      switch(id) {
        case 420:
          return "5v5 Ranked Solo";
          break;
        case 450:
          return "5v5 ARAM";
          break;
        default:
          return "Unknown Queue Type";
      }
    },
    convertChampKeytoName: function(key) {
        switch(key) {
          case 266: return "Aatrox"; break;
          case 412: return "Thresh"; break;
          case 23: return "Tryndamere"; break;
          case 79: return "Gragas"; break;
          case 69: return "Cassiopeia"; break;
          case 136: return "AurelionSol"; break;
          case 13: return "Ryze"; break;
          case 78: return "Poppy"; break;
          case 14: return "Sion"; break;
          case 164: return "Camille"; break;
          case 1: return "Annie"; break;
          case 202: return "Jhin"; break;
          case 43: return "Karma"; break;
          case 111: return "Nautilus"; break;
          case 240: return "Kled"; break;
          case 99: return "Lux"; break;
          case 103: return "Ahri"; break;
          case 2: return "Olaf"; break;
          case 112: return "Viktor"; break;
          case 34: return "Anivia"; break;
          case 27: return "Singed"; break;
          case 86: return "Garen"; break;
          case 127: return "Lissandra"; break;
          case 57: return "Maokai"; break;
          case 25: return "Morgana"; break;
          case 28: return "Evelynn"; break;
          case 105: return "Fizz"; break;
          case 74: return "Heimerdinger"; break;
          case 238: return "Zed"; break;
          case 68: return "Rumble"; break;
          case 82: return "Mordekaiser"; break;
          case 37: return "Sona"; break;
          case 96: return "KogMaw"; break;
          case 55: return "Katarina"; break;
          case 117: return "Lulu"; break;
          case 22: return "Ashe"; break;
          case 30: return "Karthus"; break;
          case 12: return "Alistar"; break;
          case 122: return "Darius"; break;
          case 67: return "Vayne"; break;
          case 110: return "Varus"; break;
          case 77: return "Udyr"; break;
          case 89: return "Leona"; break;
          case 126: return "Jayce"; break;
          case 134: return "Syndra"; break;
          case 80: return "Pantheon"; break;
          case 92: return "Riven"; break;
          case 121: return "Khazix"; break;
          case 42: return "Corki"; break;
          case 268: return "Azir"; break;
          case 51: return "Caitlyn"; break;
          case 76: return "Nidalee"; break;
          case 85: return "Kennen"; break;
          case 3: return "Galio"; break;
          case 45: return "Veigar"; break;
          case 432: return "Bard"; break;
          case 150: return "Gnar"; break;
          case 90: return "Malzahar"; break;
          case 104: return "Graves"; break;
          case 254: return "Vi"; break;
          case 10: return "Kayle"; break;
          case 39: return "Irelia"; break;
          case 64: return "LeeSin"; break;
          case 420: return "Illaoi"; break;
          case 60: return "Elise"; break;
          case 106: return "Volibear"; break;
          case 20: return "Nunu"; break;
          case 4: return "TwistedFate"; break;
          case 24: return "Jax"; break;
          case 102: return "Shyvana"; break;
          case 429: return "Kalista"; break;
          case 36: return "DrMundo"; break;
          case 427: return "Ivern"; break;
          case 131: return "Diana"; break;
          case 223: return "TahmKench"; break;
          case 63: return "Brand"; break;
          case 113: return "Sejuani"; break;
          case 8: return "Vladimir"; break;
          case 154: return "Zac"; break;
          case 421: return "RekSai"; break;
          case 133: return "Quinn"; break;
          case 84: return "Akali"; break;
          case 163: return "Taliyah"; break;
          case 18: return "Tristana"; break;
          case 120: return "Hecarim"; break;
          case 15: return "Sivir"; break;
          case 236: return "Lucian"; break;
          case 107: return "Rengar"; break;
          case 19: return "Warwick"; break;
          case 72: return "Skarner"; break;
          case 54: return "Malphite"; break;
          case 157: return "Yasuo"; break;
          case 101: return "Xerath"; break;
          case 17: return "Teemo"; break;
          case 75: return "Nasus"; break;
          case 58: return "Renekton"; break;
          case 119: return "Draven"; break;
          case 35: return "Shaco"; break;
          case 50: return "Swain"; break;
          case 91: return "Talon"; break;
          case 40: return "Janna"; break;
          case 115: return "Ziggs"; break;
          case 245: return "Ekko"; break;
          case 61: return "Orianna"; break;
          case 114: return "Fiora"; break;
          case 9: return "Fiddlesticks"; break;
          case 31: return "Chogath"; break;
          case 33: return "Rammus"; break;
          case 7: return "LeBlanc"; break;
          case 16: return "Soraka"; break;
          case 26: return "Zilean"; break;
          case 56: return "Nocturne"; break;
          case 222: return "Jinx"; break;
          case 83: return "Yorick"; break;
          case 6: return "Urgot"; break;
          case 203: return "Kindred"; break;
          case 21: return "MissFortune"; break;
          case 62: return "Wukong"; break;
          case 53: return "Blitzcrank"; break;
          case 98: return "Shen"; break;
          case 201: return "Braum"; break;
          case 5: return "XinZhao"; break;
          case 29: return "Twitch"; break;
          case 11: return "MasterYi"; break;
          case 44: return "Taric"; break;
          case 32: return "Amumu"; break;
          case 41: return "Gangplank"; break;
          case 48: return "Trundle"; break;
          case 38: return "Kassadin"; break;
          case 161: return "VelKoz"; break;
          case 143: return "Zyra"; break;
          case 267: return "Nami"; break;
          case 59: return "JarvanIV"; break;
          case 81: return "Ezreal"; break;
          case 142: return "Zoe"; break;
          case 145: return "Kaisa"; break;
          case 516: return "Ornn"; break;
        }
      },
    convertSSKeytoName: function(key) {
      switch (key) {
        case 3: return "SummonerExhaust"; break;
        case 4: return "SummonerFlash"; break;
        case 6: return "SummonerHaste"; break;
        case 14: return "SummonerDot"; break;
        case 7: return "SummonerHeal"; break;
        case 13: return "SummonerMana"; break;
        case 11: return "SummonerSmite"; break;
        case 32: return "SummonerSnowball"; break;
        case 12: return "SummonerTeleport"; break;
      }
    },
    setYourStats: function(teamsInfo) {
      let self = this;
      let myStats = {};
      let myChampID = self.singleMatch.champion;

      teamsInfo.participants.forEach( function(player) {
        if (myChampID === player.championId) {
          myStats = player;
        }
      });

      this.yourStats = myStats;
    },
    setYourItems: function(yourStats) {
      let items = [];
        items.push(yourStats.item0);
        items.push(yourStats.item1);
        items.push(yourStats.item2);
        items.push(yourStats.item2);
        items.push(yourStats.item3);
        items.push(yourStats.item4);
        items.push(yourStats.item5);
      this.yourItems = items;
    },
    victoryOrDefeat: function(stats) {
      if (stats.win === true) {
        return "VICTORY";
      } else if (stats.win === false) {
        return "DEFEAT";
      } else {
        return "ERROR";
      }
    },
    getScore: function() {
      let kills = this.yourStats.stats.kills;
      let deaths = this.yourStats.stats.deaths;
      let assists = this.yourStats.stats.assists;
      let score = kills + "/" + deaths + "/" + assists;
      return score;
    },
    getKDA: (yourStats) => {
      let kills = yourStats.stats.kills;
      let deaths = yourStats.stats.deaths;
      let assists = yourStats.stats.assists;
      if (deaths === 0)
      deaths = 1;
      let kda = (kills + assists) / deaths;
      return kda;
    },
  }
}
</script>

<style lang="css">
.single-match {
  width: 100%;
  height: 100%;
  border: 1px solid green;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0px 0px 0px;
}

.splashbox {
  width: 1140px;
  height: 279px;
  position: absolute;
  overflow: hidden;
  z-index: -1;
}

.bg-splash {
  z-index: -1;
  opacity: 0.5;
}
.result-text {
  width: 100%;
}

.match-history-left {
  border: 1px solid red;
  padding: 25px 0px 0px 20px;
  width: 30%;
  display: flex;
}

.champ-image {
  width: 120px;
  height: 120px;
  border-radius: 6px;
}

.champ-image > img {
  border-radius: 6px;
}

.spells-and-runes {
  width: 120px;
  height: 120px;
  margin-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
}

.spells-and-runes > img {
  max-width: 50%;
  max-height: 50%;
  border-radius: 6px;
}

.match-history-right {
  border: 1px solid blue;
  width: 40%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 20px;
}
.item-blocks {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.mhl-column2 {
  margin-left: 10px;
}

.item-block {
  width: 30px;
  height: 30px;
}

.item-block > img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;
}

.kda {
  margin-right: 50px;
}

.below-items {
  display: flex;
}

.timeofday {
  width: 20%;
  margin-right: 30px;
}

.dateofgame {
  width: 20%;
  margin-right: 100px;
}

.game-Duration {
  width: 60%;
}
</style>
