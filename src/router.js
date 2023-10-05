import { createRouter, createWebHashHistory } from "vue-router";

import About from "./pages/About.vue";
import Cats from "./pages/Cats.vue";
import Dogs from "./pages/Dogs.vue";
import Contacts from "./pages/Contacts.vue";
import How2Help from "./pages/how2Help.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/about', component: About, alias: '/' },
        { path: '/cats', component: Cats },
        { path: '/dogs', component: Dogs },
        { path: '/contacts', component: Contacts },
        { path: '/how2Help', component: How2Help }

    ]
})
