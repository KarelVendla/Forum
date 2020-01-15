<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card-header">
                    <h4>{{getChannel}}</h4> 
                    Threads
                </div>
                <div class="card m-1" v-for="thread in getThreadsByChannel" :key="thread.id">
                     <div class="card-body">
                        <article>
                            <h4>
                                <router-link :to="{ name:'thread', params:{ channel: thread.channel , id: thread.id} }" >
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
        data() {
            return {
            }
        },
        mounted() {
            this.fetchThreads();
        },
        methods: {
            fetchThreads () {
                return this.$store.dispatch('GET_THREADS');
            }
        },
        computed: {
            getChannel () { return this.$route.params.channel; },
            getThreadsByChannel () { return this.$store.getters.getThreadsByChannel(this.getChannel); }
        },
    }
</script>
