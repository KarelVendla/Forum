<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" v-if="isAuthenticated">
                <div class="card-header">Create a New Thread</div>

                <div class="card-body">
                    <form method="POST">
                        <div class="form-group row">
                            <label for="name" class="col-md-2 col-form-label text-md-right">Title:  </label>
                            <div class="col-md-8">
                                <input v-model="thread.title" id="title" type="text" class="form-control" name="title">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="name" class="col-md-2 col-form-label text-md-right">Body:</label>
                            <div class="col-md-8">
                                <textarea v-model="thread.body" id="body" type="text" class="form-control" rows="8" name="body"/>
                            </div>
                        </div>

                        <div class="form-group row justify-content-center">
                            <div class="col-md-6">
                                <button type="submit" class="btn btn-primary" @click.prevent="CreateThread()">
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <logincomponent v-if="!isAuthenticated"/>
        </div>
    </div>  
</div>
</template>
<script>
    import logincomponent from './LoginComponent';

    export default {
        data() {
            return {
                thread: {
                    title: '',
                    body: ''
                },
            }
        },
        components: {
            logincomponent
        },
        methods: {
            CreateThread () {
                this.$store.dispatch('CREATE_THREAD', this.thread);
            },
        },
        computed: {
            isAuthenticated () { return this.$store.state.authenticated; }
        }
    }
</script>
