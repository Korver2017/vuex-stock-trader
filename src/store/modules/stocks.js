import stocks from '../../data/stocks';
const state = {
  stocks: [],
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS' (state) {

  }
};

const actions = {
  initStocks: ({
    commit
  }) => {
    console.log(stocks);
    commit('SET_STOCKS', stocks)
  },
  buyStock: ({
    commit
  }, order) => {
    commit('BUY_STOCK', order);
  },
  randomizeStock: ({
    commit
  }) => {
    commit('RND_STOCKS');
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};