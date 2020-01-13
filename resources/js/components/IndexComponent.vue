<template>
<div>
    <navbarcomponent/>
    <channelscomponent/>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import navbarcomponent from './NavbarComponent'
import threadscomponent from './ThreadsComponent'
import threadcomponent from './ThreadComponent'
import channelscomponent from './ChannelsComponent'

    export default {
        mounted() {
            this.initializeAuthentication();
        },
        methods: {
            initializeAuthentication () {
                          
                this.$store.commit('SET_AUTHENTICATE', this.$auth.isAuthenticated());
                this.$store.dispatch('GET_AUTH_USER');
                
            },
        },
        components: {
            threadscomponent,
            navbarcomponent,
            threadcomponent,
            channelscomponent
        },  
    }
</script>
