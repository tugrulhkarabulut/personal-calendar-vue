<template>
  <div id="app">
    <app-header></app-header>
    <router-view v-on:new-event="addNewEvent" :events="events"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  data() {
    return {
      events: []
    };
  },
  components: {
    appHeader: Header
  },
  methods: {
    addNewEvent(newEvent) {
      this.events.push(newEvent);
    }
  }
};
</script>


<style>
#app {
  background: linear-gradient(#16d0ff, #163dff);
  height: 100vh;
}
</style>
