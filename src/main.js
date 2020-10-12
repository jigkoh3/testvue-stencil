import Vue from 'vue'
import App from './App.vue'

import {applyPolyfills, defineCustomElements} from 'thai-id-card-camera/loader'

Vue.config.productionTip = false

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
