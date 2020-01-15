<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="p-1" v-for="channel in getChannels" :key="channel.id">
                <router-link :to="{ name: 'threadsbychannel', params:{ channel: channel.name} }">
                    <span><h5>{{channel.name}}</h5></span>
                </router-link>
            </div>
        </div>
    </div>
</template> 

<script>
    export default {
        mounted() {
            this.fetchChannels();
        },
        methods: {
            fetchChannels () {
                return this.$store.dispatch('GET_CHANNELS');
            },
        },
        computed: {
            getChannels() {return this.$store.state.channels; }
        }
    }
</script>
