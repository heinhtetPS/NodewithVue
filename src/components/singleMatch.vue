<template lang="html">
  <div class="single-match">
    <h1 class="result-text">{{ victoryOrDefeat(this.yourStats) }}</h1>
    <div class="match-history-left">
      <div class="champ-image">
        <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/8.5.2/img/champion/' + convertChampKeytoName(singleMatch.champion) + '.png'"></img>
      </div>
      <div class="mhl-column2">
        <h3>{{ convertQueueID(singleMatch.queue) }}</h3>
        <div class="spells-and-runes">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerFlash.png"></img>
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerFlash.png"></img>
        </div>
      </div>
    </div>
    <div class="match-history-right">
      <h2 class="kda">5/4/13 Hardcode</h2>
      <h3 class="cs-count">999 cs hard</h3>
      <p class="game-Duration">{{ getGameDuration(this.matchInfo.gameDuration) }}</p>
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
        <p class="timeofday">{{ getTheHours(singleMatch.timestamp) }}</p>
        <p class="dateofgame">{{ getTheDate(singleMatch.timestamp) }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['singleMatch', 'yourname'],

  data () {
    return {
      matchInfo: {
        gameId: 2822442302,
        gameDuration: 740,
        queueId: 450,
        gameVersion: "8.13.235.9749",
        participants: [
          {
            participantId: 1,
            teamId: 100,
            championId: 412,
            spell1Id: 4,
            spell2Id: 7,
            highestAchievedSeasonTier: "UNRANKED",
          },
          {
            participantId: 2,
            teamId: 100,
            championId: 18,
            spell1Id: 4,
            spell2Id: 7,
            highestAchievedSeasonTier: "GOLD",
          },
          {
            participantId: 4,
            teamId: 100,
            championId: 516,
            spell1Id: 4,
            spell2Id: 7,
            highestAchievedSeasonTier: "BRONZE",
          }
        ]
      },
      yourTeam: '',
      yourStats: {
        participantId: 4,
        teamId: 100,
        championId: 516,
        spell1Id: 4,
        spell2Id: 7,
        highestAchievedSeasonTier: "BRONZE",
        stats: {
          participantId: 4,
          win: false,
          item0: 3001,
          item1: 1001,
          item2: 3801,
          item3: 3155,
          item4: 3067,
          item5: 1028,
          item6: 2052,
          kills: 3,
          deaths: 5,
          assists: 4,
          largestKillingSpree: 0,
          largestMultiKill: 1,
          killingSprees: 0,
          longestTimeSpentLiving: 242,
          doubleKills: 0,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          unrealKills: 0,
          totalDamageDealt: 15957,
          magicDamageDealt: 6561,
          physicalDamageDealt: 9395,
          trueDamageDealt: 0,
          largestCriticalStrike: 0,
          totalDamageDealtToChampions: 5076,
          magicDamageDealtToChampions: 2822,
          physicalDamageDealtToChampions: 2254,
          trueDamageDealtToChampions: 0,
          totalHeal: 1255,
          totalUnitsHealed: 2,
          damageSelfMitigated: 11870,
          damageDealtToObjectives: 0,
          damageDealtToTurrets: 0,
          visionScore: 0,
          timeCCingOthers: 18,
          totalDamageTaken: 12981,
          magicalDamageTaken: 3908,
          physicalDamageTaken: 8217,
          trueDamageTaken: 855,
          goldEarned: 6978,
          goldSpent: 6450,
          turretKills: 0,
          inhibitorKills: 0,
          totalMinionsKilled: 20,
          neutralMinionsKilled: 0,
          totalTimeCrowdControlDealt: 166,
          champLevel: 12,
          visionWardsBoughtInGame: 0,
          sightWardsBoughtInGame: 0,
          firstBloodKill: true,
          firstBloodAssist: false,
          firstTowerKill: false,
          firstTowerAssist: false,
          firstInhibitorKill: false,
          firstInhibitorAssist: false,
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
          perk0: 8437,
          perk0Var1: 283,
          perk0Var2: 233,
          perk0Var3: 0,
          perk1: 8473,
          perk1Var1: 289,
          perk1Var2: 0,
          perk1Var3: 0,
          perk2: 8444,
          perk2Var1: 845,
          perk2Var2: 0,
          perk2Var3: 0,
          perk3: 8451,
          perk3Var1: 79,
          perk3Var2: 0,
          perk3Var3: 0,
          perk4: 8009,
          perk4Var1: 575,
          perk4Var2: 61,
          perk4Var3: 0,
          perk5: 8014,
          perk5Var1: 105,
          perk5Var2: 0,
          perk5Var3: 0,
          perkPrimaryStyle: 8400,
          perkSubStyle: 8000
        }

      },
      yourItems: []
    }
  },

  // created: async function () {
  //   this.matchInfo = await this.fetchMatch();
  //
  // },

  methods: {
    fetchMatch: async function() {
      let self = this;
      const staticURL = 'http://localhost:4000/match'
      let matchGameID = self.singleMatch.gameId;
      let fullURL = staticURL + "?" + matchGameID;
      let response = await fetch(fullURL);
      let finalData = await response.json();
      return finalData;
    },
    getGameDuration: (seconds) => {
      let hours = (seconds / 3600);
      let minutes = Math.round(((seconds / 3600) - Math.floor(hours)) * 60);

      if (hours >= 1) {
        return "~ " + hours + "hour" + minutes + " minutes";
      } else {
        return "~" + minutes + " minutes";
      }
    },
    getTheDate: (stamp) => {
      const date = new Date(stamp);
      let year = date.getFullYear();
      let month = date.getMonth() +1;
      let day = date.getDate();
      return month + "/" + day + "/" + year;
    },
    getTheHours: (stamp) => {
      const date = new Date(stamp);
      let hour = date.getHours();
      let mins = date.getMinutes();
      if (mins < 10)
      mins = mins * 10;
      return hour + ":" + mins;
    },
    convertQueueID: (id) => {
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
    convertChampKeytoName: (key) => {
        switch(key) {
          case 266: return "Aatrox"; break;
          case 412: return "Thresh"; break;
          case 23: return "Tryndamere"; break;
          case 79: return "Gragas"; break;
          case 69: return "Cassiopeia"; break;
          case 136: return "Aurelion Sol"; break;
          case 13: return "Ryze"; break;
          case 78: return "Poppy"; break;
          case 14: return "Sion"; break;
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
          case 96: return "Kog'Maw"; break;
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
          case 121: return "Kha'Zix"; break;
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
          case 64: return "Lee Sin"; break;
          case 420: return "Illaoi"; break;
          case 60: return "Elise"; break;
          case 106: return "Volibear"; break;
          case 20: return "Nunu"; break;
          case 4: return "Twisted Fate"; break;
          case 24: return "Jax"; break;
          case 102: return "Shyvana"; break;
          case 429: return "Kalista"; break;
          case 36: return "Dr. Mundo"; break;
          case 427: return "Ivern"; break;
          case 131: return "Diana"; break;
          case 223: return "Tahm Kench"; break;
          case 63: return "Brand"; break;
          case 113: return "Sejuani"; break;
          case 8: return "Vladimir"; break;
          case 154: return "Zac"; break;
          case 421: return "Rek'Sai"; break;
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
          case 31: return "Cho'Gath"; break;
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
          case 5: return "Xin Zhao"; break;
          case 29: return "Twitch"; break;
          case 11: return "Master Yi"; break;
          case 44: return "Taric"; break;
          case 32: return "Amumu"; break;
          case 41: return "Gangplank"; break;
          case 48: return "Trundle"; break;
          case 38: return "Kassadin"; break;
          case 161: return "Vel'Koz"; break;
          case 143: return "Zyra"; break;
          case 267: return "Nami"; break;
          case 59: return "Jarvan IV"; break;
          case 81: return "Ezreal"; break;
          case 142: return "Zoe"; break;
          case 145: return "Kaisa"; break;
          case 516: return "Ornn"; break;
        }
      },
    setYourStats: (teamsInfo) => {
      let self = this;
      let myStats = {};
      // let myChampID = self.singleMatch.champion;
      let myChampID = 516;

      teamsInfo.participants.forEach( function(player) {
        if (myChampID === player.championId) {
          myStats = player;
        } else {
          myStats = 'error';
        }
      });
      console.log(myChampID);
      this.myStats = myStats;
      // return myChampID;
    },
    setYourItems: (yourStats) => {
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
    victoryOrDefeat: (yourStats) => {
      if (yourStats.win) {
        return "VICTORY";
      } else if (!yourStats.win) {
        return "DEFEAT";
      } else {
        return "ERROR";
      }
    },
    getKDA: (yourStats) => {
      let kills = yourStats.kills;
      let deaths = yourStats.deaths;
      let assists = yourStats.assists;
      if (deaths === 0)
      deaths = 1;

      return (kills + assists) / deaths;
    },
  }
}
</script>

<style lang="css">
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

.timeofday {
  width: 30%;
}

.dateofgame {
  width: 70%;
}
</style>
