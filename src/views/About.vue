<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div ref="usernmae">{{ userName }}</div>
    <button @click="handleChangeName">click</button>
  </div>
</template>
<script lang="ts">
import {Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  private userName: string = "abc";

  handleChangeName():void {
    this.userName = "cde";
    console.log(this.$refs.usernmae.innerText)
  }
}
</script>
