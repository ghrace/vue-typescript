<template>
    <div>
        <input type="text" v-model="user">
        <p>{{user}}</p>
    </div>
</template>

<script lang="ts">
 import { Component, Vue, Model, Watch, Prop } from 'vue-property-decorator';

 @Component
 export default class Sample extends Vue {
     public user:string=''
     @Prop() private name !:string;
    
     created():void {
         console.log(1)
     }

     @Watch ('$route')
     onRouteChanged(route:any,old:any):void {
         console.log(1111)
         console.log(route);
     } 
     @Watch ('user')
     onUserChangeed(newVal:string,oldVal:string):void{
         console.log(newVal,oldVal)
     }

 }
</script>
<style>


</style>
