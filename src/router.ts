import { createWebHashHistory, createRouter } from 'vue-router';
import SwitchDemo from './components/SwitchDemo.vue';
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DocDemo from './components/DocDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import { h } from 'vue';
import Markdown from './components/Markdown.vue';

const history = createWebHashHistory();
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename });

export const router = createRouter({
    history: history,

    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: '', component: DocDemo },
                { path: 'get-started', component: md('get-started') },
                { path: 'install', component: md('install')},
                { path: 'intro', component: md('intro')},
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
            ],
        },
    ],
});
router.afterEach(() => {
    console.log('路由切换了');
});