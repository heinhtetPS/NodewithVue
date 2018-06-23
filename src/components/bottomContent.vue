<template v-if="show">
  <div class="bottom-container">
    <p>{{show}}</p>
    <profile class="profilebox" v-bind:data="profile"></profile>
      <matchHistory class="historybox" v-bind:matches="matches"></matchHistory>
  </div>
</template>

<script>
import matchHistory from './matchHistory.vue';
import profile from './profile.vue';

export default {
  props: ['show', 'profile', 'matches'],
  name: 'bottomContent',
  components: {
    profile,
    matchHistory
  }
}
</script>

<style lang="css">
</style>
