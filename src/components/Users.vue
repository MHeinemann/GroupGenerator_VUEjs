<template lang="html">
  <main id="users">
    <h1>{{ title }}</h1>
    {{ azubis[1].name }}
    <ol>
      <li v-for="azubi in randomAzubis">
        {{ azubi.name }}
      </li>
    </ol>
    <button v-on:click="randomize">Shuffle</button>
  </main>
</template>

<script>
import Json from './../assets/members.json';
//https://stackoverflow.com/questions/45157579/vue-js-methods-vs-computed-properties-how-they-interact-with-the-dom
//https://codingexplained.com/coding/front-end/vue-js/optimizing-performance-computed-properties
//https://forum.vuejs.org/t/how-to-make-computed-property-notice-change-in-arrays-objects-property/5358
export default {
  data() {
    return {
      title: 'Gruppenzusammenstellung',
      azubis : Json.azubis
    };
  },
  methods: {
    randomize: function(a, b){
      function shuffle() {
        //return( parseInt( Math.random()*10 ) %2 );
        return (Math.round(Math.random())-0.5);
        //return 0.5 - Math.random();
      }
      return this.azubis.sort(shuffle);
    }
  },
  computed: {
    randomAzubis: function(a, b){
      function shuffle() {
        //return( parseInt( Math.random()*10 ) %2 );
        return (Math.round(Math.random())-0.5);
        //return 0.5 - Math.random();
      }
      return this.azubis.sort(shuffle);
    }
  }
}
</script>
