export default {
    state: {
        threads: [],
        thread: {},
    },
    mutations: {
        SET_THREADS (state, payload) {
            state.threads = payload;
        },
        SET_THREAD(state, payload) {
            state.thread = payload;
        },
    },
    getters: {
        GET_THREADS (state) {
            return state.threads;
        }
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
    },
}