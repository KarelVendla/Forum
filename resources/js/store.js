import app from './app';

export default {
    state: {
        user: {
            id: '',
            name: '',
            email: '',
        },
        threads: [],
        thread: {},
        replies: [],
        channels: [],
        authenticated: false,
    },  
    mutations: {
        SET_THREADS (state, payload) {
            state.threads = payload;
        },
        SET_THREAD(state, payload) {
            state.thread = payload;
        },
        SET_REPLIES (state, payload) {
            state.replies = payload;
        },
        SET_USER ({user}, payload) {
            user.id = payload.id;
            user.name = payload.name;
            user.email = payload.email;
        },
        SET_REPLY (state, payload) {
            state.reply = payload.reply;
        },
        SET_AUTHENTICATE (state, payload) {
            state.authenticated = payload;
        },
        SET_CHANNELS (state, payload) {
            state.channels = payload;
        }
    },
    getters: {
        getThreadsByChannel: (state) => (channel) => {
            return state.threads.filter(thread => thread.channel === channel)
        },
        getThreadById: (state) => (Id) => {
            return state.threads.find(thread => thread.id === Id)
        }
    },
    actions: {
        GET_THREADS ({commit, dispatch, state}) {

                return axios.get('/api/threads')
                .then(response => {
                    commit('SET_THREADS', response.data.data);

                    if (state.isAuthenticated) {
                        dispatch('GET_AUTH_USER');      
                    }

                    console.log('THREAD(S): GET SUCCESSFUL');
                })
                .catch(error => {
                    console.log(error);
                    console.log('THREAD(S): GET FAILED');
                });
        },
        GET_THREAD ({commit}, channel,id) {
            return axios.get('/api/threads/' + channel + '/' + id)
                .then(response => {
                    commit('SET_THREAD', response.data.data[0]);
                    console.log('THREAD: GET SUCCESSFUL');
                })
                .catch(error => {
                    console.log(error);
                    console.log('THREAD: GET FAILED');
                });
        },
        GET_REPLIES ({commit}, thread_id) {
            return axios.get('/api/replies/' + thread_id)
                .then(response => {
                    commit('SET_REPLIES', response.data.data);
                    console.log('REPLIES: GET SUCCESSFUL');
                })
                .catch(error => {
                    console.log(error);
                    console.log('REPLIES: GET FAILED');
                });
        },
        REGISTER_USER ({commit}, user) {
            app.$auth.register({
                name: user.name,
                email: user.email,
                password: user.password
            })
            .then(response => {
                console.log(response);
                commit('SET_AUTHENTICATE', app.$auth.isAuthenticated());
                app.$router.push('/');
            });
        },
        LOGIN_USER ({commit, dispatch}, user) {
            app.$auth.login(user)
                .then(response => {
                    console.log(response)
                    commit('SET_USER', user);
                    commit('SET_AUTHENTICATE', app.$auth.isAuthenticated());
                    dispatch('GET_AUTH_USER');
                    console.log('USER LOGIN: SUCCESSFUL');
                })
                .catch(error => {
                    console.log(error);
                }); 
            },
        GET_AUTH_USER ({commit, state}) {
            if (state.user.name === null || !state.user.name) {
                return axios.get('api/me')
                .then(response => {
                    commit('SET_USER', response.data);
                    commit('SET_AUTHENTICATE', app.$auth.isAuthenticated());
                    console.log('USER DATA: GET SUCCESSFUL');
                })
                .catch(error => {
                    console.log(error);
                    console.log('USER DATA: GET FAILED');
                }) 
            }

            console.log('USER DATA ALREADY FETCHED');
        },
        POST_REPLY ({dispatch, state}, reply) {
            axios.post('/api/reply/' + state.thread.id, {
                body: reply.body,
                thread_id: state.thread.id,
            })
            .then(() => {
                    console.log('POST REPLY: SUCCESSFUL');
                    dispatch('GET_REPLIES', state.thread.id);
            })
            .catch(error => {
                console.log(error);
                console.log('POST RPELY: FAILED');
            });
        },
        LOGOUT ({state, commit}) {
            app.$auth.logout()
            .then(response => {
                console.log('LOGOUT: SUCCESSFUL');
                commit('SET_AUTHENTICATE', app.$auth.isAuthenticated());
                state.user.name = '';
                state.user.email = '';

            })
            .catch(error => {
                console.log(error);
                console.log('LOGOUT: FAILED');
            })
        },
        CREATE_THREAD ({dispatch}, thread) {
            return axios.post('api/thread', {
                title: thread.title,
                body: thread.body,
                channelSlug: thread.channelSlug
            })
            .then(async response => {
                console.log('CREATE THREAD: SUCCESSFUL');
                await dispatch('GET_THREADS');
                app.$router.push('/threads/' + response.data.category+ '/' + response.data.thread_id);
            })
            .catch(error => {
                console.log(error);
                console.log('CREATE THREAD: FAILED');
            });
        },
        GET_CHANNELS ({commit}) {
            axios.get('/api/channels')
            .then(response => {
                commit('SET_CHANNELS', response.data.data);
                console.log('CHANNELS: GET SUCCESSFUL');
            })
            .catch(error => {
                console.log(error);
                console.log('CHANNELS: GET FAILED');
            });
        },
    },
}