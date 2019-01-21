<template>
  <div class="event-modal">
    <div class="container text-center event-form">
      <div class="row justify-content-end">
        <button class="btn btn-light cancel-btn" @click="$emit('add-event-cancelled')">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="form-group">
        <label for="event-name" class="lead">Event Name</label>
        <input type="text" class="form-control" id="event-name" v-model="eventName">
      </div>
      <div class="form-group">
        <label for="description" class="lead">Description</label>
        <textarea class="form-control" id="description" v-model="description"></textarea>
      </div>
      <button class="btn btn-light" @click="addedEvent">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventName: "",
      description: ""
    };
  },
  methods: {
    addedEvent() {
      if (this.eventName && this.description) {
        this.$emit("added-event", {
          eventName: this.eventName,
          description: this.description
        });
      }
    }
  }
};
</script>

<style>
.event-modal {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.event-form {
  width: 40%;
  margin: 10% auto;
  padding: 10px 20px;
  background: linear-gradient(#16d0ff, #163dff);
  border-radius: 3px;
  border: 0.4px solid aliceblue;
}

label {
  color: aliceblue;
}
</style>


