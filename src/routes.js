import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import newEvent from './components/newEvent.vue';
import EventCmp from './components/Event.vue';
import upcomingEvents from './components/upcomingEvents.vue';



export const routes = [{
    path: '/',
    component: Home
  }, {
    path: '/newevent',
    component: newEvent,
  },
  {
    path: '/myevents',
    component: upcomingEvents
  }
];
