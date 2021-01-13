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




</style>