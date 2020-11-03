import { createWebHashHistory, createRouter } from 'vue-router';
import SwitchDemo from './components/SwitchDemo.vue';
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [{ path: 'switch', component: SwitchDemo }],
        },
    ],
});
router.afterEach(() => {
    console.log('路由切换了');
});