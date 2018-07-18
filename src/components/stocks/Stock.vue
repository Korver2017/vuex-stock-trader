<template>
  <div>
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">{{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
          </h3>
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity" />
          </div>
          <div class="pull-right">
            <div class="btn btn-success" :class="{'btn-danger': notEnoughFunds}" @click="buyStock" :disabled="notEnoughFunds || quantity <= 0 || !Number.isInteger(quantity)">
              {{ notEnoughFunds ? 'Not Enough Funds' : 'BUY' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds(){
      return this.$store.getters.funds;
    },
    notEnoughFunds() {
      return this.quantity * this.stock.price > this.funds; 
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    }
  },
};
</script>

<style scoped>
</style>
