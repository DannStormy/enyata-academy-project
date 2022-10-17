import { createStore } from 'vuex'
import user_dashboard from './modules/user_dashboard'


const store = createStore({
  modules: {
    user_dashboard,
    
  }
});

export default store;
