<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/about" class="navbar-brand">
      <img src="src\assets\logo.png" height="90" width="90" alt="logo" class="d-inline-block align-top">
      Домик надежды
    </router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/about" class="nav-item nav-link">О приюте</router-link>|
        <router-link to="/cats" class="nav-item nav-link">Кошки</router-link>|
        <router-link to="/dogs" class="nav-item nav-link">Собаки</router-link>|
        <router-link to="/contacts" class="nav-item nav-link">Контакты</router-link>|
        <router-link to="/how2Help" class="nav-item nav-link">Как помочь</router-link>
      </div>
    </div>
  </nav>
  <router-view></router-view>

  
</template>
<script>

export default {}

</script>