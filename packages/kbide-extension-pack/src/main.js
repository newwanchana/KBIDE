import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import vuetify from './engine/plugins/vuetify' // ✅ ใช้ instance

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
