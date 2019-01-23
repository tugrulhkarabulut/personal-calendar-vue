<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <ul class="list-group col-md-10 text-center">
        <li
          class="list-group-item mt-1"
          :class="{active: i === 0}"
          v-for="(event, i) in sortedEvents"
        >
          {{event.event.eventName}} {{event.event.description}}
          <span
            class="badge badge-pill date-badge ml-5"
            :class="{activedate: i === 0}"
          >{{event.event.date}}</span>
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
</style>

