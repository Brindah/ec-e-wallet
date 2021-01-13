import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data(){return{
      cardList:[],//hur spara korten så dem fiins kvar även efter uppdatering?
    
      }},
  methods:{
    setId(newId){ this.id = newId},
    setHolder(newHolder){this.holder = newHolder},
    setVendor(newVendor){this.vendor = newVendor},
    setCardnumber(newCardNumber){this.cardnumber = newCardNumber},
    setValidMonth(newValidMonth){this.validMonth = newValidMonth},
    setValidYear(newValidYear){this.validYear = newValidYear},
    setccvKod(newccvKod){this.ccvKod = newccvKod},

  },

  router,
  render: h => h(App)
}).$mount('#app')
