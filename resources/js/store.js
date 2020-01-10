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
    },
    actions: {
        GET_THREADS ({commit, dispatch}) {
            return axios.get('/api/threads')
                .then(response => {
                    commit('SET_THREADS', response.data.data);
                    dispatch('GET_AUTH_USER');
                    console.log('THREAD(S): GET SUCCESSFUL');
                })
                .catch(error => {
                    console.log(error);
                    console.log('THREAD(S): GET FAILED');
                });
        },
        GET_THREAD ({commit}, id) {
            return axios.get('/api/threads/' + id)
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
                commit('SET_AUTHENTICATED', this.$auth.isAuthenticated());
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
                    app.$router.push('/');
                })
                .catch(error => {
                    console.log(error);
                }); 
            },
        GET_AUTH_USER ({commit}) {
            return axios.get('api/me')
            .then(response => {
                commit('SET_USER', response.data);
                console.log('USER DATA: GET SUCCESSFUL');
            })
            .catch(error => {
                console.log(error);
                console.log('USER DATA: GET FAILED');
            })
        },
        POST_REPLY ({dispatch, state}, reply) {
            axios.post('/api/reply/' + state.thread.id, {
                body: reply,
                thread_id: state.thread.id,
                username: state.user.name
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
        }
    },
}