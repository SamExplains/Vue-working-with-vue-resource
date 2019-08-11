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
                <hr>
                <button class="btn btn-primary" @click.prevent="fetchData">Get Data</button>
                <ul class="list-group" style="margin-top: 1rem">
                    <li class="list-group-item" v-for="u in users">{{ u.username }} – {{ u.email }}</li>
                </ul>
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
                },
                users: [],
                resource: {}
            }
        },
        methods: {
            onsubmit() {
                // this.$http.post('', this.user)
                // this.$http.post('data.json', this.user)
                //         .then( response => {
                //             console.log('Success');
                //         }, error => {
                //             console.log(error)
                //         });
                this.$resource.save({}, this.users); //sends post request to URL appended to Root URL and attach data
            },
            fetchData() {
                // this.$http.get('')
                this.$http.get('data.json')
                        .then( response => {
                           return response.json()
                        }).then( data => {
                          const resArr = [];
                          for (let key in data) {
                              resArr.push(data[key]);
                          }
                          this.users = resArr;
                        });
            }
        },
        created() {
            this.resource = this.$resource('data.json')
        }
    }
</script>

<style>
</style>
