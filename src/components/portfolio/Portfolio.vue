<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock">
      {{ stock }}
    </app-stock>
    <h2 v-if="stocks.length == 0">No Data in Your Portfolio Currently</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
  export default {
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
    components: {
      appStock: Stock,
    }
  }
</script>

<style scoped>
</style>  