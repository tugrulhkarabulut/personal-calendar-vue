<template>
  <div class="card date-card mb-1">
    <div class="card-header date-card-header lead text-center">{{ date }}</div>
    <div class="card-body text-primary">
      <p class="card-text date-card-text">
        <span class="text-center">No events.</span>
        <span class="add-event ml-1" @click="addEvent">
          <i class="fas fa-plus-circle"></i>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["date"],
  data() {
    return {};
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
  height: 5%;
  transition: all 0.3s;
}

.date-card:hover {
  transform: scale(0.95);
}

.date-card-header {
  font-size: 1rem;
  padding: 10px;
}

.date-card-text {
  font-size: 0.8rem;
}

.add-event {
  cursor: pointer;
}
</style>
