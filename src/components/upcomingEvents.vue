<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <ul class="list-group col-md-10 text-center">
        <li class="list-group-item mt-1" :class="{active: i === 0}" v-for="(event, i) in events">
          {{event.eventName}} {{event.description}}
          <span
            class="badge badge-pill date-badge ml-5"
            :class="{activedate: i === 0}"
          >{{event.date}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["events"]
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

