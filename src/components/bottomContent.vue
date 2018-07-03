<template>
  <div class="bottom-container">
    <profile class="profilebox" v-bind:data="profile"></profile>
      <matchHistory class="historybox" v-bind:matches="matches" v-bind:yourname="profile.name"></matchHistory>
  </div>
</template>

<script>
import matchHistory from './matchHistory.vue';
import profile from './profile.vue';

export default {
  props: ['profile', 'matches'],
  name: 'bottomContent',
  components: {
    profile,
    matchHistory
  }
}
</script>

<style lang="css">
.bottom-container {

}
</style>
