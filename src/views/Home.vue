<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p>{{message}}</p>
    <p @click="addTimes(22)">{{computedMsg}}</p>
    <div>
      <button @click="addCount">加一</button>
      <button @click="reduceCount">减一</button>
      <button @click="reset">reset</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Action, Mutation, State } from "vuex-class";
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  //data
  private message: string = "hello";
  private num: number = 0;
  //vuex
  @Mutation
  changeState!: (a: number) => number;
  @Mutation
  reduceState!: (a: number) => number;
  @Mutation
  clearState!: () => number;
  //methods
  addTimes(a: number): number {
    console.log(11);
    return (this.num = this.num + a);
  }
  addCount() {
    this.changeState(1);
  }
  reduceCount() {
    this.reduceState(1);
  }
  reset() {
    this.clearState();
  }
  //computed
  get computedMsg() {
    return "computed" + this.message;
  }

  created() {
    console.log("created");
    this.changeState(2);
  }
  mounted() {
    console.log("mounted");
  }
}
</script>
