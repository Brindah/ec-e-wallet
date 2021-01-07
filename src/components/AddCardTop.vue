<template>
  <div  class="card" v-bind:style="bgColor">
      <img :src="require(`@/assets/vendor-${card.vendor}.svg`)" />
      <img  src="../assets/chip-light.svg" />
      <p >{{card.cardnumber}}</p>
      <div >
        <p>VALID THRU</p>
        <p >
          {{card.validMonth}} /
          {{(card.validYear)}}  
        </p>
      </div>
      <div >
        <p>CARDHOLDER NAME</p>
        <p >{{card.holder}}</p>
      </div>
  </div>
</template>

<script>

export default {
    
    computed: {
        id(){return this.$root.id },
        holder(){return this.$root.holder},
        vendor(){return this.$root.vendor},
        cardnumber(){return this.$root.cardnumber},
        validMonth(){return this.$root.validMonth},
        validYear(){return this.$root.validYear},
        ccvKod(){return this.$root.ccvKod}

            }

};
</script>

<style scoped lang="scss">
.card{
  width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 0.5rem black;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
  font-size: 1.2rem;
  
}



</style>