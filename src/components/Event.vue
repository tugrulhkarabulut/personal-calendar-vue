<template>
  <div class="card date-card mb-1" @click="addEvent">
    <div class="card-header date-card-header lead text-center">{{ date }}</div>
    <div class="card-body text-primary">
      <p class="card-text date-card-text">
        <span class="text-center">
          <ul class="event-list" v-if="eventsOnThisDate.length > 0">
            <li
              class="event-list-item"
              v-for="event in eventsOnThisDate"
            >{{ event.name }}, {{ event.description}}</li>
          </ul>
          <span class="no-events-text" v-else>No events.</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["date", "events"],
  data() {
    return {};
  },
  computed: {
    eventsOnThisDate() {
      const events = [];
      for (event of this.events) {
        if (event.date === this.date) {
          events.push({
            name: event.eventName,
            description: event.description
          });
        }
      }
      return events;
    }
  },
  methods: {
    addEvent() {
      this.$emit("add-event", this.date);
    }
  }
};
</script>

<style>
.date-card {
  max-height: 5%;
  transition: all 0.3s;
  cursor: pointer;
}

.date-card:hover {
  transform: scale(0.95);
}

.date-card-header {
  font-size: 1rem;
  padding: 0.5em;
}

.date-card-text {
  font-size: 0.8rem;
}

.add-event {
  cursor: pointer;
}

.event-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.no-events-text {
  color: black;
}
</style>
