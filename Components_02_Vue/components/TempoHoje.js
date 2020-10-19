export default {
  name: "TempoHoje",
  data() {
    return {
      temperaturaMaxima: 0
    }
  },
  template:`<p>Rio de janeiro, máxima de: {{temperaturaMaxima}}</p>`,
  methods: {
    puxarTempo() {
      fetch('https://www.metaweather.com/api/location/455825/')
        .then(res => res.json())
        .then(json => {
          this.temperaturaMaxima = json.consolidated_weather[0].max_temp;
        });
    }
  },
  created() {
    this.puxarTempo()
  }
}