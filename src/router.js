import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/prop',
      name: 'prop',
      component: () => import('./views/Prop.vue')
    },
    {
      path: '/provide',
      name: 'provide',
      component: () => import('./views/Provide.vue')
    },
    {
      path: '/children',
      name: 'children',
      component: () => import('./views/Children.vue')
    },
    {
      path: '/emit',
      name: 'emit',
      component: () => import('./views/Emit.vue')
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('./views/Parent.vue')
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: () => import('./views/V-model.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('./views/Vuex.vue')
    },
    {
      path: '/event-bus',
      name: 'event-bus',
      component: () => import('./views/Event-Bus.vue')
    }
  ]
})
