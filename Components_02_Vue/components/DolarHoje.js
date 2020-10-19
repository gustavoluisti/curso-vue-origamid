export default {
  name: "DolarHoje",
  data() {
    return{
      valorDolar: 0,
    }
  },
  template: `<p>Valor do dolar: {{ valorDolar }}</p>`,
  methods:{
    puxarDolar() {
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then(res => res.json())
        .then(json => {
          this.valorDolar = json.rates.BRL.toFixed(2);
        })
    }
  },
  created(){
    this.puxarDolar();
  }
}