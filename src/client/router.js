import Vue from 'vue';
import Router from 'vue-router';
import notf from './components/notFound.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: About,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/NotFound',
            component: notf,
            meta: {
                title: '404 Not Found Error'
            }
        },
        {
            path: '*',
            redirect: '/NotFound'
        }
    ]
});