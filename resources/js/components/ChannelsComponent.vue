<template>
    <div class="container">
        <div class="d-flex flex-row m-1">
            <div class="p-1" v-for="channel in getChannels" :key="channel.id">
                <a href="#">{{channel.name}}</a>
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
