<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link
            to="/"
            class="navbar-brand">
            Stock Trader
          </router-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link
              to="/portfolio"
              tag="li"
              active-class="active">
              <a>Portfolio</a>
            </router-link>
            <router-link
              to="/stocks"
              tag="li"
              active-class="active">
              <a>Stocks</a>
            </router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" @click="endDay">End Day</a></li>
            <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save / Load <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a @click="saveData" href="#">Save Data</a></li>
                <li><a @click="loadData" href="#">Load Data</a></li>
              </ul>
            </li>
            <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false,
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds; 
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      this.$http.put('data.json', data);
    },
    loadData(){
      this.fetchData();
    }
  },
};
</script>

<style scoped>
</style>
