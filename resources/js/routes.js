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
    ],

}