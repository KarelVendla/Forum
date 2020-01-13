<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card m-2">
                <div class="card-header">
                    Login
                </div>
                <div class="card-body">
                    <form method="POST">
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                            <div class="col-md-6">
                                <input v-model="user.name" id="name" type="text" class="form-control" name="name" required autocomplete="name">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="col-md-6">
                                <input v-model="user.password" id="password" type="password" class="form-control" name="password" required autocomplete="password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary" @click.prevent="Login()">
                                    Login
                                </button>
                                <a href="#" style="margin-left:9.4em;">forgot passowrd</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    password: '',
                }
            }
        },
        methods: {  
            Login () {
                this.$store.dispatch('LOGIN_USER', this.user);
            },  
        },
    }
</script>