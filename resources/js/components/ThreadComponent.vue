<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Forum Threads</div>

                <div class="card-body">
                        <article>
                            <h4>
                                {{Thread.title}}
                            </h4>
                            <div class="body">
                                {{Thread.body}}
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
            this.GetThread();
        },
        methods: {
            GetThread () {
                this.$store.dispatch('GET_THREAD', this.$route.params.id);
            } 
        },
        computed: {
            Thread () { return this.$store.state.thread; } 
        }
    }
</script>
