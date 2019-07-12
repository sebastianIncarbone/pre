import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue'
import App from './App.vue'
import VueHorizontalTimeline from "vue-horizontal-timeline";

Vue.use(VueHorizontalTimeline);
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')
