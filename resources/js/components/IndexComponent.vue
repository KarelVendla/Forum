<template>
<div>
    <navbarcomponent/>
    <div class="container">
        <h1>test{{getToggle}}</h1>
        <!--
        <div class="row justify-content-center m-5" v-if="!getToggle">

                <threadscomponent/>
        </div>
        <div class="row justify-content-center m-5" v-if="getToggle">
                <threadcomponent/>
        </div>
        -->
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
