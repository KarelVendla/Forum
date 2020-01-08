export default {
    state: {
        user: {
            name: '',
            email: '',
        },
        threads: [],
        thread: {},
        replies: [],       
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
            user.name = payload.name;
            user.email = payload.email;
        }
    },
    getters: {
    },
    actions: {
        GET_THREADS ({commit}) {
            return axios.get('/api/threads')
                .then(response => {
                    commit('SET_THREADS', response.data.data);
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
            return axios.post('/api/register', user)
                .then(response => {
                    console.log(response);
                    console.log('USER REGISTER: SUCCESSFUL');
                    commit('SET_USER',user);
                })
                .catch(error => {
                    console.log(error);
                    console.log('USER REGISTER: FAILED');
                })
        }
    },
}