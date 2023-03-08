 //index.ts
 import {createRouter, createWebHashHistory} from 'vue-router';
 import login from '../view/login.vue'
 const routes = [
    {
        path: '/',
        name: 'login',
        component: login
      }
 ];
 
 const router = createRouter({
    history: createWebHashHistory(), 
    routes
 });
 export default router;