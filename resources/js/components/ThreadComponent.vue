<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card-header">
                    <h4>{{getThread.title}}</h4>
            </div>
                <div class="card-body">
                        <article>
                            <div class="card-body">
                                <h5>{{getThread.body}}</h5>
                            </div>  
                        </article>
                </div>
            <div class="card-footer">
                <h5>{{getThread.created_at}}</h5>
                <h5>
                    By: <a href="#">{{getThread.owner}}</a>
                </h5>
            </div>
        </div>
    <repliescomponent/>
    <postreplycomponent class="pb-5" v-if="isAuthenticated"/>
    <p v-else >
        Please <router-link :to="{name: 'login', params: { routeBack: true }}">sign in</router-link> to participate in discussion.
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
            this.fetchThread();
        },
        methods: {
            fetchThread () {
                this.$store.dispatch('GET_THREAD', this.$route.params.id);
            }
        },
        computed: {
            getThread () { return this.$store.state.thread; },
            isAuthenticated () { return this.$store.state.authenticated; },
        },
    }
</script>
