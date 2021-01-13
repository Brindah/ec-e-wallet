<template>

<div class="container"> 
    <ul>
      <NewCard
      v-for="card in cardList"
      v-bind:key="card.id"
      v-bind:newCardData="card"
      v-on:click="select(card)"
      
    />
  </ul> 
 
 <div >
      <button> <router-link to="/AddCard">ADD A NEW CARD</router-link> </button>
    </div>

    <div>
    <router-view/>
    </div>

    
</div>
</template>

<script>
import NewCard from '@/components/NewCard.vue'

export default {
  name: 'CardStack',
  components:{NewCard},
  
  computed: {
    cardList(){return this.$root.cardList },
    thechosenone(){
            return this.$root.cardList.find(card => card.shown == true)
    }},
      methods:{
        select(card){
        this.$emit('sendClickevent',card)
      }
    }
    
}
</script>

<style scoped>


 .container {
   align-items: center;
   justify-content: center; 
  
 }
button{
  background-color: #ffae34;
  color: beige;
  height: 2rem;
  width: 15rem;
}
    
</style>