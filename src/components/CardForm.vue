<template>
<div class="card-form">
  <div class="card-form__inner">
    <div class="card-container">
  </div>
    <div class="card-input">
      <label for="cardNumber" class="card-input__label">
        Card Numbers
      </label>
      <input
        v-model="card.cardnumber"
        autofocus
        id="cardNumber"
        class="card-input__input"
        autocomplete="off"
      />

  </div>
  <div class="card-input">
    <label for="cardName" class="card-input__label">
      CARDHOLDER NAME
    </label>
    <input
      id="cardName"
      class="card-input__input"
      v-model="card.holder"
      autocomplete="off"
    />
  </div>

  <div class="card-form__row">
  <div class="card-form__col">
  <div class="card-form__group">
    <label for="cardMonth" class="card-input__label">
      VALID THRU
    </label>
  <select
      class="card-input__input -select"
      id="cardMonth"
      v-model="card.validMonth"
    >
    <option value="" disabled selected>Month</option>
    <option
      v-for="n in 12"
      :value="n < 10 ? '0' + n : n"
      :key="n"
      >
      {{ 10 > n ? "0" + n : n }}
    </option>
  </select>

  <select
    class="card-input__input -select"
    id="cardYear"
    v-model="card.validYear"
    >
    <option value="" disabled selected>Year</option>
    <option
      v-for="(n, $index) in 12"
      :value="$index + currentYear"
      :key="n"
      >
        {{$index + currentYear}}
    </option>
  </select>
  </div>
  </div>

  <div class="card-form__col -cvv">
    <div class="card-input">
      <label for="cardCvv" class="card-input__label">CVV</label>
      <input

        class="card-input__input"
        id="cardCvv"
        v-model="card.ccvKod"
        autocomplete="off"
        />
      </div>
    </div>
  </div>

  <div class="card-input">
    <label for="cardName" class="card-input__label">
      VENDOR
    </label>
    <select v-model="card.vendor" class="card-input__input -select" id="vendor" >
      <option disabled value="">Please select one</option>
      <option>blockchain</option>
      <option>bitcoin</option>
      <option>ninja</option>
      <option>evil</option>
    </select>

    </div>
      <button @click="submitCard" class="card-form__button">
      ADD CARD
      </button>
  </div>
</div>
</template>

<script>
export default {
    
  data() {
      return {
        currentYear: new Date().getFullYear(),
        card:{
          id: Date.now(),
          holder: "",
          vendor: "",
          cardnumber: "",
          validMonth: "",
          validYear: "",
          ccvKod: ""
    }}
  },

  mounted() {
    console.log('CardForm mounted!');
    if(localStorage.cardList){
      this.cardList = JSON.parse(localStorage.cardList);
      }
  },


  watch:{
    cardList:{
      handler(newCards){
      localStorage.cardList = JSON.stringify(newCards);
      },
      deep:true
    }
  },


  computed: {
    cardList(){return this.$root.cardList }
  },


  methods: {
    submitCard() {
      this.$root.cardList.push({...this.card})
      
   
    }},
  

}

</script>

<style scoped lang="scss">
.container {
   align-items: center;
   justify-content: center;
   margin: 1rem;
   padding: 1rem;
   width: 100%;
   height: 100%;
   left:50%;
   
 }

.card-form {
  max-width: 570px;
  width: 80%;

  &__inner {
    background: #fff;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    border-radius: 10px;
    padding: 50px;
  }

  &__row {
    display: flex;
    align-items: flex-start;
    
  }

  &__col {
    flex: auto;
    margin-right: 15px;
    

    &:last-child {
      margin-right: 0;
    }

    &.-cvv {
      max-width: 150px;
    }
  }

  &__group {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .card-input__input {
      flex: 2;
      margin-right: 15px;
      

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__button {
    width: 100%;
    height: 55px;
    background: black;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 500;
    box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
    color: #fff;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
      background: darken(#585e5d, 5%);
    }
  }
}

.card-input {
  margin-bottom: 20px;
  &__label {
    margin-bottom: 5px;
    color: #1a3b5d;
    width: 100%;
    display: block;
    text-align: left;
  }
  &__input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid #ced6e0;
    transition: all 0.3s ease-in-out;
    font-size: 18px;
    padding: 5px 5px;
    background: none;
    color: #1a3b5d;

    &:hover,
    &:focus {
      border-color: #38a294;
    }

    &:focus {
      box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
    }
    &.-select {
      -webkit-appearance: none;
      background-color: rgb(232, 240, 238);
      background-size: 12px;
      background-position: 90% center;
      background-repeat: no-repeat;
      padding-right: 30px;
    }
  }
}
</style>