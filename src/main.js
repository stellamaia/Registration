import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import firebase from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwNvYWF_Kk3ct36OKi4jetSLqAx9JynCg",
  authDomain: "registration-dois.firebaseapp.com",
  projectId: "registration-dois",
  storageBucket: "registration-dois.appspot.com",
  messagingSenderId: "46610760138",
  appId: "1:46610760138:web:17e9a14a3e5f763f878f33",
  measurementId: "G-TBD7WHGV1X"
};

firebase.initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

