<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand">
      <ul class="navbar-nav row w-100 text-center">
        <li class="nav-item col-4">
          <router-link to="/" class="link">HOME</router-link>
        </li>
        <li class="nav-item col-4">
          <router-link to="/myevents" class="link">UPCOMING EVENTS</router-link>
        </li>
        <li class="nav-item col-4">
          <router-link to="/newevent" class="link">ADD AN EVENT</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>


<style>
.link {
  color: aliceblue;
  font-weight: 200;
  font-size: 22px;
  padding: 15px;
  transition: all 0.3s;
}

.link:hover {
  text-decoration: none;
  color: aliceblue;
  border-bottom: 1.2px solid aliceblue;
}
</style>

