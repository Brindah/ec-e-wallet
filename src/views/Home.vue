<template>
  <div class="home">
    <h1>E-WALLET</h1>
      <h4>ACTIVE CARD</h4>
      
    <div >
    <Top />
    <NewCard v-bind:newCardData="catchParamCard"/>
    <CardStack v-on:sendClickevent="catchClickevent"/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import Top from '@/components/Top.vue'
import NewCard from '@/components/NewCard.vue'
import CardStack from '@/components/CardStack.vue'

export default {
  name: 'Home',

  data(){return{
    catchParamCard:null
  }},
  components: {
    Top, NewCard, CardStack
  },
  methods:{
    catchClickevent(card){
      console.log(card);
      this.catchParamCard=card

    }
  }
}
</script>
