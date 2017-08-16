<template lang="html">
  <div id="app">
    <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/users">Teilnehmer</router-link></li>
        <li><router-link to="/groups">Gruppen</router-link></li>
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
