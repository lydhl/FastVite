 //index.ts
 import {createRouter, createWebHashHistory} from 'vue-router';
 import index from '../view/index.vue'
 const routes = [
    {
        path: '/',
        name: 'index',
        component: index
      }
 ];
 
 const router = createRouter({
    history: createWebHashHistory(), 
    routes
 });
 export default router;