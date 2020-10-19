import DolarHoje from "./DolarHoje.js";

export default {
  name: "AcaoHoje",
  data() {
    return {
      valorMercado: 0,
    }
  },
  components: {
    DolarHoje
  },
  template: `
    <div>
      <p>Valor de Mercado Apple: {{valorMercado}}</p>
      <dolar-hoje />
    </div>
  `,
  methods:{
    puxarAcao() {
      fetch("https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_13b6e29afd0b4b2e9061810ad1c9ff1d")
        .then(res=> res.json())
        .then(json => {
          this.valorMercado = json.marketCap
        })
    }
  },
  created() {
    this.puxarAcao();
  }
}