<template>
<div class="container">
<li >
  <div v-on:click="showIt" class="card" v-bind:class="newCardData.vendor">

    <header>
      <img class="symbol" :src="require(`@/assets/vendor-${newCardData.vendor}.svg`)" />
      <img class="chip" src="../assets/chip-light.svg" />
    </header> 

    <section class="info">
      <div>
        <p class="number ">{{newCardData.cardnumber}}</p>
        <br/>
        <span>CARDHOLDER NAME</span>
        <p class="holder">{{newCardData.holder}}</p>
      </div>
      
      <aside class="valid">
        <span>VALID THRU</span>
        <span >
          {{newCardData.validMonth}} / {{(newCardData.validYear)}}  
        </span>
      </aside>

      
    </section>
  </div>    
</li>
  
</div> 
</template>

<script>

export default {
  name:'NewCard',
 
  props:{
    newCardData:Object

  },

  methods:{
    showIt(){
            this.$emit('click')
            console.log('im working');
    }

  }
}  
</script>

<style >

 .container {
   align-items: center;
   justify-content: center;
   
 }

.card{
  
  width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  padding: 2rem;
  margin-top: -8rem;
  box-sizing: border-box;
  box-shadow: 4px 4px 12px 2px black;
  transition: 0.1s;
  
 
}
.card:hover,
.card:focus-within ~.card {
transform: translateY(-1rem);
}/* (  :focus-within ~ )select the rest of the cards 
when one of cards has focus 
inside of it.  */

.evil{background:linear-gradient(248.3deg,rgba(0,0,0,.16),transparent),#f33355;color:#fff}
.blockchain{background:linear-gradient(248.52deg,rgba(0,0,0,.15) 1.49%,transparent),#8b58f9;color:#fff}
.bitcoin{background:linear-gradient(.689turn,hsla(0,0%,100%,.15),hsla(0,0%,100%,0) 99.07%),#ffae34;color:#222}
.ninja{background:linear-gradient(248.3deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0)),#222;color:#fff}
.blank{background:linear-gradient(237.75deg,hsla(0,0%,100%,.24),hsla(0,0%,100%,0)),#d0d0d0}







li {list-style-type: none;}

</style>