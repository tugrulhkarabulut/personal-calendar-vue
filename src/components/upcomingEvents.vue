<template>
  <div class="container">
    <div v-if="events.length === 0">
      <div class="container home-container">
        <div class="card text-center home mt-5">
          <div class="card-body row align-items-center justify-content-center">
            <h2 class="card-title title col-md-12">You have no events.</h2>
            <p class="card-text lead col-md-12">You have no upcoming events.
              <br>You can add some and track them from here.
            </p>
            <router-link :to="{name: 'newevent'}" class="btn home-btn col-sm-3">
              <span class="lead">Add an Event</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-3" v-else>
      <ul class="list-group col-md-10 text-center">
        <li
          class="list-group-item mt-1 event-item"
          :class="{active: i === 0}"
          v-for="({event}, i) in sortedEvents"
        >
          <span class="col-md-8">{{event.eventName}} {{event.description}}</span>
          <span
            class="badge badge-pill date-badge ml-5"
            :class="{activedate: i === 0}"
          >{{event.date}}</span>
          <a href="#" @click.prevent="removeEvent(event)" class="rm-event-btn">
            <i class="fas fa-times"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["events"],
  computed: {
    sortedEvents() {
      const events = this.events.map(event => {
        let dateArr = event.date.split(".").slice(0, 3);
        dateArr[2] = dateArr[2].split(" ")[0];
        dateArr = dateArr.map(date => Number(date));
        dateArr[1] *= 30;
        dateArr[2] *= 365;
        const date = dateArr.reduce((sum, el) => (sum += el));
        return { precedence: date, event };
      });
      return events.sort((a, b) => {
        return a.precedence - b.precedence;
      });
    }
  },
  methods: {
    removeEvent(event) {
      const index = this.events.findIndex(
        el =>
          el.eventName === event.eventName &&
          el.description === event.description &&
          el.date === event.date
      );
      this.events.splice(index, 1);
    }
  }
};
</script>

<style>
.active,
.badge-pill {
  color: aliceblue;
  background: linear-gradient(#16d0ff, #163dff);
}

.activedate {
  color: gray;
  background: aliceblue;
}

.rm-event-btn {
  color: #163dff;
  background: aliceblue;
  transition: all 0.3s;
  padding: 0.1rem 0.4rem;
  float: right;
  border-radius: 60%;
  opacity: 0;
}

.rm-event-btn:hover {
  color: #16d0ff;
  transform: scale(0.95);
}

.event-item {
  transition: all 0.3s;
}

.event-item:hover {
  transform: scale(0.99);
}

.event-item:hover .rm-event-btn {
  opacity: 1;
}
</style>

