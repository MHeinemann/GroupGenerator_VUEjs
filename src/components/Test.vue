<template lang="html">
  <main id="test">
    <input type="text" v-model="title" />
    <h1>{{ title }}</h1>
    <p>My ID: {{ $route.params.myId }}</p>

    <h3 v-if="showName">{{ fullName }}</h3>
    <p v-else>Penis</p>

    <p v-text="user.firstName"></p>
    <p v-text="user.lastName"></p>
    <ul>
      <li v-for="item in items">{{ item.title }}</li>
    </ul>
    <button v-on:click="greet('Hello World')">Say Greeting</button>
    <br />
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit" />

    <hr>
    <label for="fN">First Name: </label>
    <input type="text" v-model="user.firstName" />
    <br>
    <label for="lN">Last Name: </label>
    <input type="text" v-model="user.lastName" />
    <h4>{{ msg }}</h4>
  </main>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: "Foobar"
    }
  },
  data() {
    return {
      title: 'Hello World',
      user: {
        firstName: 'Michael',
        lastName: 'Heinemann'
      },
      showName: true,
      items: [
        {title: 'Item One'},
        {title: 'Item Two'},
        {title: 'Item Three'},
      ]
    }
  },
  methods: {
    greet: function(greeting){
      alert(greeting);
    },
    pressKey: function(e){
      console.log(e.target.value);
    },
    enterHit: function(){
      console.log("u hit enter");
    }
  },
  computed: {
    fullName: function(){
      return this.user.firstName + ' ' + this.user.lastName;
    }
  }
}
</script>
