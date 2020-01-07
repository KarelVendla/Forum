export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "threads"*/ './components/ThreadsComponent'),
        },
        {
            path: '/threads/:id',
            name: 'thread',
            component: () => import(/* webpackChunkName: "thread"*/ './components/ThreadComponent'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "register" */ './components/RegisterComponent'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ './components/LoginComponent'),
        },
    ],

}