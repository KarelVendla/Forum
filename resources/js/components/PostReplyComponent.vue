<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card m-2">
                <div class="card-header">
                    Reply to thread
                </div>
                <div class="card-body">
                    <form method="POST" class="form-group">
                        <div class="row justify-content-center">
                        <textarea v-model="reply" name="body" id="body" cols="100" rows="5" placeholder="Write your reply here .."></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary" @click.prevent="PostReply()">
                            Reply
                        </button>
                    </form>
                </div>
                <div class="card-footer">
                    
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
                reply: ''
            }
        },
        mounted() {
        },
        methods: {
            PostReply () {
                this.$store.dispatch('POST_REPLY', this.reply);
            },
        },
    }
</script>
