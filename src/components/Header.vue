<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand">
      <ul class="navbar-nav row w-100 text-center">
        <li class="nav-item col-md-4 mt-2">
          <router-link :to="{name: 'home'}" class="link">HOME</router-link>
        </li>
        <li class="nav-item col-md-4 mt-2">
          <router-link :to="{name: 'upcoming'}" class="link">UPCOMING EVENTS</router-link>
        </li>
        <li class="nav-item col-md-4 mt-2">
          <router-link :to="{name: 'newevent'}" class="link">ADD AN EVENT</router-link>
        </li>
      </ul>
    </nav>
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
.link {
  color: aliceblue;
  font-weight: 200;
  font-size: 1.5rem;
  padding: 0.8rem;
  transition: all 0.3s;
}

.link:hover {
  text-decoration: none;
  color: aliceblue;
  border-bottom: 1.2px solid aliceblue;
  transform: scale(1.05);
}
</style>

