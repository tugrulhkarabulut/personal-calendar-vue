import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import newEvent from './components/newEvent.vue';
import EventCmp from './components/Event.vue';
import upcomingEvents from './components/upcomingEvents.vue';
import {
  publicPath
} from '../vue.config.js';



export const routes = [{
    path: '/personal-calendar/',
    component: Home
  }, {
    path: '/personal-calendar/newevent',
    component: newEvent,
  },
  {
    path: '/personal-calendar/myevents',
    component: upcomingEvents
  }
];
