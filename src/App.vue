<template lang="html">
  <div id="app">
    <header>
      <img src="./assets/logo.png">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
        <li><router-link to="/test/1">Test_1</router-link></li>
        <li><router-link to="/test/13">Test_13</router-link></li>
      </ul>
    </nav>
  </header>

    <router-view></router-view>

    <footer>
      <ul>
        <li>
          <a href="#">Impressum</a><br>
        </li>
        <li>
          <a href="#">Kontakt</a>
        </li>
      </ul>
    </footer>
  </div>
</template>


<script>
</script>
