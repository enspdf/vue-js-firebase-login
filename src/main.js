// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
var config = {
  apiKey: "AIzaSyDiGhwLzI-YpDqAHFB_DB3x111jK2N-LjM",
  authDomain: "fir-global-a3068.firebaseapp.com",
  databaseURL: "https://fir-global-a3068.firebaseio.com",
  projectId: "fir-global-a3068",
  storageBucket: "fir-global-a3068.appspot.com",
  messagingSenderId: "273497438908"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
