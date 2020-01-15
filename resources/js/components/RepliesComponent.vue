<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card m-2" v-for="reply in getReplies" :key="reply.id">
                <div class="card-header">
                 <h5><a href="#">{{reply.owner}}</a> replied with:</h5>
                </div>
                <div class="card-body">
                    <h5>{{reply.body}}</h5>
                </div>
                <div class="card-footer">
                  <h5>{{reply.created_at}}</h5>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        mounted() {
            this.fetchReplies();
        },
        methods: {
            fetchReplies () {
                return this.$store.dispatch('GET_REPLIES', this.$route.params.id);
            },
        },
        computed: {
            getReplies () { return this.$store.state.replies; }
        },
    }
</script>
