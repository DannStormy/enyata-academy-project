import { createStore } from 'vuex'
import signup from './modules/form_modules/signup'

const store = createStore({
  modules: {
    signup
  }
});

export default store;
