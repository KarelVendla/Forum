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
        components: {
            threadscomponent,
            navbarcomponent,
            threadcomponent
        },
        mounted() {
        },
        computed: {
            getToggle () { return this.$store.state.toggleThread; }
        }
    }
</script>
