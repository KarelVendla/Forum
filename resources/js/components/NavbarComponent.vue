<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <ul class="navbar-nav ml-auto" v-if="!LoggedIn">
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
             <ul class="navbar-nav ml-auto" v-if="LoggedIn">
                <li class="nav-item pr-3">
                    Hello, {{userName}}
                </li>
                <li class="nav-item">
                    <a href="">log out</a>
                </li>
             </ul>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        LoggedIn () { return this.$store.state.loggedIn;},
        userName () { return this.$store.state.user.name;},
    }
}
</script>