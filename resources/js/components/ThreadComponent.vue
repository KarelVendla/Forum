<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header"><h4>{{Thread.title}}</h4></div>

                <div class="card-body">
                        <article>
                            <div class="body">
                                {{Thread.body}}
                            </div>  
                        </article>
                </div>
                <div class="card-footer">
                    {{Thread.created_at}}
                    <div>
                        By: <a href="#">{{Thread.owner}}</a>
                    </div>
                </div>
            </div>
        </div>
    <repliescomponent/>
    <postreplycomponent class="pb-5" v-if="isAuthenticated"/>
    <p v-else >
        Please <router-link :to="{name: 'login'}">sign in</router-link> to participate in discussion.
    </p>
    </div>
</div>
</template>

<script>
import repliescomponent from './RepliesComponent'
import postreplycomponent from './PostReplyComponent'

    export default {
        components: {
            repliescomponent,
            postreplycomponent
        },
        mounted() {
            this.GetThread();
        },
        methods: {
            GetThread () {
                this.$store.dispatch('GET_THREAD', this.$route.params.id);
            },
        },
        computed: {
            Thread () { return this.$store.state.thread; },
            isAuthenticated () { return this.$store.state.authenticated; },
        },
    }
</script>
