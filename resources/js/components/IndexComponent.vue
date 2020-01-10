<template>
<div>
    <navbarcomponent/>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import navbarcomponent from './NavbarComponent'
import threadscomponent from './ThreadsComponent'
import threadcomponent from './ThreadComponent'

    export default {
        mounted() {
            this.initializeAuthentication();
        },
        methods: {
            initializeAuthentication () {
                          
                this.$store.commit('SET_AUTHENTICATE', this.$auth.isAuthenticated());
                
            },
        },
        components: {
            threadscomponent,
            navbarcomponent,
            threadcomponent
        },   
    }
</script>
