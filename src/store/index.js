import { createStore } from 'vuex'
import admin from './modules/admin';
import user_dashboard from './modules/user_dashboard';

const store = createStore({
  modules: {
    admin,
    user_dashboard
  }
});

export default store;
