import { createWebHashHistory, createRouter } from 'vue-router';
import SwitchDemo from './components/SwitchDemo.vue';
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md';
import install from './markdown/install.md';
import getStarted from './markdown/get-started.md';

const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string});

export const router = createRouter({
    history: history,

    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: '', redirect: '/doc/intro' },
                { path: 'get-started', component: md(getStarted) },
                { path: 'install', component: md(install) },
                { path: 'intro', component: md(intro) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
            ],
        },
    ],
});
router.afterEach(() => {

});