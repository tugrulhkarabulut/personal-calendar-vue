import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import newEvent from './components/newEvent.vue';
import EventCmp from './components/Event.vue';
import upcomingEvents from './components/upcomingEvents.vue';
const {
  publicPath
} = require('../vue.config.js');


export const routes = [{
    path: `${publicPath}/`,
    name: 'home',
    component: Home
  }, {
    path: `${publicPath}/newevent`,
    name: 'newevent',
    component: newEvent,
  },
  {
    path: `${publicPath}/myevents`,
    name: 'upcoming',
    component: upcomingEvents
  },
  {
    path: '*',
    component: Home
  }
];
