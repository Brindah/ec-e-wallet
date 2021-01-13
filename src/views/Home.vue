<template>
  <div class="container">
    <h1>E-WALLET</h1>
      <h4>ACTIVE CARD</h4>
      
    <div >
    <NewCard v-bind:newCardData="catchParamCard"/>
    <CardStack v-on:sendClickevent="catchClickevent"/>
    </div>
  </div>
</template>

<script>
import NewCard from '@/components/NewCard.vue'
import CardStack from '@/components/CardStack.vue'

export default {
  name: 'Home',

  data(){return{
    catchParamCard:null
  }},
  components: {
    NewCard, CardStack
  },
  methods:{
    catchClickevent(card){
      console.log(card);
      this.catchParamCard=card

    }
  }
}
</script>
<style >

 .container {
   margin: 1rem;
   padding: 1rem;
   width: 100%;
   height: 100%;
   
 }
 </style>
