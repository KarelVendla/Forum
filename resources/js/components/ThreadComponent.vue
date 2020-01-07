<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><h4>{{Thread.title}}</h4></div>

                <div class="card-body">
                        <article>
                            <div class="body">
                                {{Thread.body}}
                            </div>  
                        </article>
                </div>
            </div>
        </div>
    </div>
    <repliescomponent/>
</div>
</template>

<script>
import repliescomponent from './RepliesComponent'

    export default {
        components: {
            repliescomponent
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
            Thread () { return this.$store.state.thread; } 
        },
    }
</script>
