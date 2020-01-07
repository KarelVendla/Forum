<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Forum Threads</div>

                <div class="card-body">
                        <article v-for="thread in getThreads" :key="thread.id">
                            <h4>
                                <router-link :to="{ name:'thread', params:{ id: thread.id} }" >
                                    {{thread.title}}
                                </router-link>
                            </h4>
                            <div class="body">
                                {{thread.body}}
                            </div>
                        </article>
                </div>
            </div>
        </div>
    </div>  
</div>
</template>

<script>
    export default {
        mounted() {
            this.fetchThreads();
        },
        methods: {
            fetchThreads () {
                return this.$store.dispatch('GET_THREADS');
            },
            toggleThread () {
                return this.$store.commit('TOGGLE_THREAD');
            }
        },
        computed: {
            getThreads () { return this.$store.state.threads; } 
        },
    }
</script>
