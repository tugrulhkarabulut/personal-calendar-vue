<template>
  <div>
    <div class="container home-container">
      <div class="card text-center home mt-5">
        <div class="card-body row align-items-center justify-content-center">
          <h2 class="card-title title col-md-12">Welcome!</h2>
          <p class="card-text home-card-text lead col-md-12">This is a personal calendar app.
            <br>You can track your upcoming events.
          </p>
          <router-link :to="{name: 'newevent'}" class="btn home-btn col-sm-3">
            <span class="lead">Get Started</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: publicPath
    };
  }
};
</script>

<style>
.home {
  background: aliceblue;
  box-shadow: 10px 10px 100px 1px rgba(0, 0, 0, 0.7);
  opacity: 0.9;
}

.home-btn {
  background: linear-gradient(#16d0ff, #163dff);
  color: aliceblue;
  font-size: 0.1rem;
}

.home-btn:hover {
  text-decoration: none;
  color: white;
}

.title {
  font-weight: 200;
}

.home-container {
  transform: translate(0, 50%);
}

.home-card-text {
  font-size: 1.3rem;
}
</style>
