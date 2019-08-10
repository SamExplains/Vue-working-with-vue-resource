<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input v-model="user.username" type="text"
                           class="form-control" name="username" aria-describedby="helpId" placeholder="">
                    <small id="helpId" class="form-text text-muted">Help text</small>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input v-model="user.email" type="text"
                           class="form-control" name="email" aria-describedby="helpId" placeholder="">
                    <small id="helpId" class="form-text text-muted">Help text</small>
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="onsubmit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                }
            }
        },
        methods: {
            onsubmit() {
                this.$http.post('your-firebase-url-here', this.user)
                        .then( response => {
                            console.log('Success');
                        });
            }
        }
    }
</script>

<style>
</style>
