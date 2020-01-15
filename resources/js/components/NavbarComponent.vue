<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
        <router-link :to="'/'" class="text-decoration-none"><h2 class="text-dark">Forum</h2></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item pr-5 ml-5">
                    <router-link :to="{name: 'threads'}">
                        <span @click="fetchAllThreads()"><h5>All Threads</h5></span>
                    </router-link>
                </li>
                <li class="nav-item " v-if="isAuthenticated">
                    <router-link :to="{name: 'createthread'}">
                        <h5 class="">Create Thread</h5>
                    </router-link>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto" v-if="!isAuthenticated">
                <li class="nav-item pr-3">
                    <router-link :to="{name:'login'}" >
                        <h5>Login</h5>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'register'}" >
                        <h5>Register</h5>
                    </router-link>
                </li>
             </ul>
             <ul class="navbar-nav ml-auto" v-if="isAuthenticated">
                <li class="nav-item d-flex align-items-center">
                    <h4 class="m-2">{{userName}}</h4>
                </li>
                <li class="nav-item">
                    <button class="btn btn-primary" type="submit" @click="Logout()">Logout</button>
                </li>
             </ul>
        </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    methods: {
        Logout () {
            this.$store.dispatch('LOGOUT');
        },
        fetchAllThreads () 
        {
            return this.$store.dispatch('GET_THREADS');
        }
    },
    computed: {
        isAuthenticated () { return this.$store.state.authenticated; },
        userName () { return this.$store.state.user.name;}
    }
}
</script>