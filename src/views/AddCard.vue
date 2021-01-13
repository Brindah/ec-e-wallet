<template>
  <div>
      <h1>ADD A NEW BANK CARD</h1>
      <h4>NEW CARD</h4>
    <NewCard/>
    <AddCardTop />
    <CardForm/>
  </div>
</template>

<script>
import AddCardTop from '@/components/AddCardTop.vue'
import NewCard from '@/components/NewCard.vue'
import CardForm from '@/components/CardForm.vue'

export default {
  name: 'AddCard',
  components: {
    CardForm, AddCardTop ,NewCard 
  }
}
</script>
<style >

 
 </style>