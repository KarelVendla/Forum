<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <ul class="navbar-nav ml-auto">
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
        </div>
    </nav>
</template>

<script>
export default {
    mounted() {},
}
</script>