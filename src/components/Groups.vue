<template lang="html">
  <main id="users">
    <h1>{{ title }}</h1>
    <ul id="groups" :class="['groupSize--'+groupSize]" @keyup.space='handleClick'>
      <li class="singleMember" v-for="(azubi, index) in azubis" v-bind:style="{ 'width': fullNumber }" v-bind:class="{'solo': azubis.length%groupSize!=0&&index==azubis.length-1}">
        {{ azubi.name }}
      </li>
    </ul>

    <div id="input-menu">
      <label for="groupInput">Gruppengröße:</label>
      <input id="groupInput" type="number" name="points" min="1" max="5" value="groupSize" v-model.number="groupSize">
      <span class="abstand">|</span>
      <input type="checkbox" id="zeigeCode" v-model="checked"><label for="zeigeCode">zeige json</label>
      <br>
      <button v-on:click="randomize()">Shuffle</button>
      <button v-on:click="changeOrder()">Tausch</button>

    </div>

    <div id="json-code" v-if="checked">
      <code>
        {<br>
          &nbsp;&nbsp;<span style="color:crimson;">"azubis"</span>: [<br>
          <p v-for="(azubi, index) in azubis">&nbsp;&nbsp;&nbsp;&nbsp;{ <span style="color:crimson;">"name"</span> : <span style="color:limegreen;">"{{azubi.name}}"</span> }<span v-if="index != (azubis.length-1)">,</span></p><br>
          &nbsp;&nbsp;]<br>
        }
      </code>
    </div>
  </main>
</template>

<script>
import Json from './../assets/members.json';

export default {
  name: 'groups',
  data() {
    return {
      title: 'Gruppenzusammenstellung',
      azubis: Json.azubis,
      groupSize: 1,
      width: 100 +'%',
      checked: false
    };
  },
  methods: {
    action(event) {
      if (event.shiftKey) {
        this.shiftKeyPressed()
      } else {
        this.shiftKeyNotPressed()
      }
    },

    randomize: function(a, b){
      function shuffle() {
        //return( parseInt( Math.random()*10 ) %2 );
        return (Math.round(Math.random())-0.5);
        //return 0.5 - Math.random();´
      }
      return this.azubis.sort(shuffle);
    },
    changeOrder(){
      if(this.groupSize>2){
        for(var i = 1; i < this.groupSize*2+1; i++){
          var tmpAzubi = this.azubis.pop().name;
          this.azubis.unshift({name: tmpAzubi});
        }

        var mid = parseInt(this.azubis.length/2)
        var firstAzubi = this.azubis[0];
        var midAzubi = this.azubis[mid];
        this.$set(this.azubis, 0, midAzubi);
        this.$set(this.azubis, mid, firstAzubi);
      }else{
        for(var i = 1; i < this.groupSize; i++){
          var tmpAzubi = this.azubis.pop().name;
          this.azubis.unshift({name: tmpAzubi});
        }
      }
    }
  },
  computed: {
    fullNumber: function(){
      return (100/this.groupSize)+'%';
    }
  }
}
</script>
