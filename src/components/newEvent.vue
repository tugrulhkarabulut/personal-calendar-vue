<template>
  <div class="modal-container">
    <div class="container events">
      <div class="card-group mt-3">
        <app-event
          v-for="i in row"
          :date="getNextDay(i + page*28)"
          v-on:add-event="newEvent"
          :events="events"
        ></app-event>
      </div>
      <div class="card-group">
        <app-event
          v-for="i in row"
          :date="getNextDay(i + page*28 + row)"
          v-on:add-event="newEvent"
          :events="events"
        ></app-event>
      </div>
      <div class="card-group">
        <app-event
          v-for="i in row"
          :date="getNextDay(i + page*28 + 2*row)"
          v-on:add-event="newEvent"
          :events="events"
        ></app-event>
      </div>
      <div class="card-group">
        <app-event
          v-for="i in row"
          :date="getNextDay(i + page*28 + 3*row)"
          v-on:add-event="newEvent"
          :events="events"
        ></app-event>
      </div>
      <div class="row justify-content-center">
        <span class="prev mr-1" @click="page > 0 ? page-- : ''">
          <i class="fas fa-chevron-circle-left icon-move"></i>
        </span>
        <span class="next ml-1" @click="page++">
          <i class="fas fa-chevron-circle-right icon-move"></i>
        </span>
      </div>
    </div>
    <app-event-modal v-if="eventPop" v-on:added-event="addEvent"></app-event-modal>
  </div>
</template>

<script>
import EventCmp from "./Event.vue";
import EventModal from "./EventModal.vue";
export default {
  props: ["events"],
  data() {
    return {
      row: 7,
      page: 0,
      date: new Date(),
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sep", "Sun"],
      eventPop: false,
      newEventDate: ""
    };
  },
  computed: {
    currentDay() {
      return Date().split(" ")[0];
    },
    currentDate() {
      return this.date.getDate();
    },
    currentMonth() {
      return this.date.getMonth();
    },
    currentYear() {
      return this.date.getFullYear();
    }
  },
  components: {
    appEvent: EventCmp,
    appEventModal: EventModal
  },
  methods: {
    getNextDay(i) {
      if (i === 1)
        return `${this.currentDate}.${this.currentMonth + 1}.${
          this.currentYear
        } ${this.currentDay}`;
      else {
        const newDate = new Date(
          this.currentYear,
          this.currentMonth,
          this.currentDate + i - 1
        );
        const currentDayIndex = this.days.findIndex(
          el => el === this.currentDay
        );
        const newDayIndex = (currentDayIndex + i - 1) % 7;
        const dayName = this.days.find((el, i) => i === newDayIndex);

        return `${newDate.getDate()}.${newDate.getMonth() +
          1}.${newDate.getFullYear()} ${dayName}`;
      }
    },
    newEvent(date) {
      this.eventPop = true;
      this.newEventDate = date;
    },
    addEvent(newEvent) {
      this.eventPop = false;
      newEvent.date = this.newEventDate;
      this.$emit("new-event", newEvent);
    }
  }
};
</script>

<style>
.icon-move {
  color: white;
  font-size: 2em;
  cursor: pointer;
}

.events {
  opacity: 0.9;
}
</style>


