export default {
    mode: 'history',

    routes: [
        {
            path: '/threads',
            name: 'threads',
            component: () => import(/* webpackChunkName: "threads"*/ './components/ThreadsComponent'),
        },
        {
            path: '/threads/:channel/:id',
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
        {
            path: '/create',
            name: 'createthread',
            component: () => import(/* webpackChunkName: "createthread" */ './components/CreateThreadComponent'),
        },
        {
            path: '/threads/:channel',
            name: 'threadsbychannel',
            component: () => import(/* webpackChunkName: "threadsbychannel" */ './components/ThreadsByChannelComponent'),
        },
    ],

}