<template lang="html">
  <main id="users">
    <h1>{{ title }}</h1>
    <ol id="groups">
      <li v-bind:style="{ 'width': fullNumber }" v-for="azubi in azubis">
        {{ azubi.name }}
      </li>
    </ol>
    <label for="groupSize"></label>
    <input id="groupSize" type="number" name="points" min="1" max="5" value="groupSize" v-model.number="groupSize">
    <button v-on:click="randomize">Shuffle</button>
  </main>
</template>

<script>
import Json from './../assets/members.json';

export default {
  name: 'users',
  data() {
    return {
      title: 'Gruppenzusammenstellung',
      isActive: false,
      azubis: Json.azubis,
      groupSize: 1,
      width: 100 +'%',
      test: 100
    };
  },
  methods: {
    randomize: function(a, b){
      function shuffle() {
        //return( parseInt( Math.random()*10 ) %2 );
        return (Math.round(Math.random())-0.5);
        //return 0.5 - Math.random();´
      }
      this.isActive = true;
      return this.azubis.sort(shuffle);
    }
  },
  computed: {
    fullNumber: function(){
      return this.test/this.groupSize+'%';
    }
  }
}
</script>
