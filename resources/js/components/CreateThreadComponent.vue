<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" v-if="isAuthenticated">
                <div class="card-header">Create a New Thread</div>

                <div class="card-body">
                    <form method="POST">
                        <div class="form-group row">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="category">Category</label>
                                </div>
                                <select class="custom-select" id="category" v-model="thread.channelSlug">
                                    <option  v-for="channel in Channels" :key="channel.id">{{channel.name}}</option>
                                </select>
                            </div>
                    </div>


                        <div class="form-group row">
                            <label for="title" class="col-md-2 col-form-label text-md-right">Title:</label>
                            <div class="col-md-8">
                                <input v-model="thread.title" id="title" type="text" class="form-control" name="title"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="body" class="col-md-2 col-form-label text-md-right">Body:</label>
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
                    body: '',
                    channelSlug: null
                },
            }
        },
        components: {
            logincomponent
        },
        methods: {
            GetChannelId(id) {
                this.thread.channel_id = id;
            },
            CreateThread () {
                this.$store.dispatch('CREATE_THREAD', this.thread);
            },
        },
        computed: {
            isAuthenticated () { return this.$store.state.authenticated; },
            Channels () {return this.$store.state.channels; }
        }
    }
</script>
