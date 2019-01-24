import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import newEvent from './components/newEvent.vue';
import EventCmp from './components/Event.vue';
import upcomingEvents from './components/upcomingEvents.vue';



export const routes = [{
    path: `/personal-calendar/`,
    name: 'home',
    component: Home
  }, {
    path: `/personal-calendar/newevent/`,
    name: 'newevent',
    component: newEvent,
  },
  {
    path: `/personal-calendar/myevents/`,
    name: 'upcoming',
    component: upcomingEvents
  },
  {
    path: '*',
    component: Home
  }
];
