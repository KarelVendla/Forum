<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <ul class="navbar-nav ml-auto" v-if="!isAuthenticated">
                <li class="nav-item pr-3">
                    <router-link :to="{name:'login'}" >
                        Login
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'register'}" >
                        Register
                    </router-link>
                </li>
             </ul>
             <ul class="navbar-nav ml-auto" v-if="isAuthenticated">
                <li class="nav-item pr-3">
                    Hello
                    {{userName}}
                </li>
                <li class="nav-item">
                    <button class="btn-info" type="submit" @click="Logout()">Logout</button>
                </li>
             </ul>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        Logout () {
            this.$store.dispatch('LOGOUT');
        },
    },
    computed: {
        isAuthenticated () { return this.$store.state.authenticated; },
        userName () { return this.$store.state.user.name;}
    }
}
</script>