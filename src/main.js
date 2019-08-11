import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = 'app-url-here';

/* Interceptors */
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  // next();
  next(response => {
    //Add something here
    response.json = () => { return { messages: response.body } };
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
