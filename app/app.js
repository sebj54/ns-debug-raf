import Vue from 'nativescript-vue'

import Home from './components/Home'

// Uncomment the line below to prevent the app from crashing
// global.__runOnMainThread = undefined

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
