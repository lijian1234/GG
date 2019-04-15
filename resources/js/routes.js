window.Vue = require('vue');
window.VueRouter = require('vue-router');

Vue.use( VueRouter );

// import homeComponent from './components/HomeComponent.vue';
import _1 from './components/tab/tabs/_1.vue';

import login from './components/Login.vue';
import layout from './components/layout/Layout.vue';

export default new VueRouter({
  // mode: 'history',
  routes: [{ 
      path: '/',
      // name: 'home',
      components: {
          //
          login
      },
      hidden: true
    },
    { 
      path: '/login',
      // name: 'home',
      components: {
          //
          login
      },
      hidden: true
    },
    {
      path: '/dashboard',
      redirect: '/dashboard/1'
    },
    {
      // path: '/login',
      path: '/dashboard/:tab',
      components: {layout},
      meta: {
        // role: ['admin'],
        // icon: 'user',
        title: '布局管理'
      },
      children: [{ 
        path: '', 
        components: {
          // homeComponent,
            _1
          } 
        }/*{
        path: '1',
        name: '1',
        components: {homeComponent}
      },{
        path: '2-1',
        name: '2-1',
        components: {homeComponent}
      }, {
        path: '2-2',
        name: '2-2',
        components: {
          homeComponent
        }
      }*/]
      // redirect: '/dashboard',
      // children: [{
      //   path: '/dashboard',
      //   components: {layout},
      // }]
    },
   /* {
      path: '*',
      // redirect: '/home',
      components: {
          //
          homeComponent
      },
      hidden: true
    }*/
  ],
  scrollBehavior: () => ({
    y: 0
  }),
});