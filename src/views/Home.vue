<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card">
          <form class="card-body" @submit.prevent="submitUser">
            <div class="form-row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="firstName">First Name:</label>
                  <input type="text" class="form-control" id="firstName" v-model="firstName">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="lastName">Last Name:</label>
                  <input type="text" class="form-control" id="lastName" v-model="lastName">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group mb-0 text-right">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <ul>
          <li v-for="(user, index) in users" :key="index">
            {{ user.firstName }} | {{ user.lastName }} | {{ user.email }} | {{ user['.key'] }}
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import { usersRef } from '@/firebase'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
    }
  },
  firebase: {
    users: usersRef
  },
  methods: {
    submitUser() {
      usersRef.push({
        firstName:  this.firstName,
        lastName:   this.lastName,
        email:      this.email
      });
      this.firstName = ''
      this.lastName = ''
      this.email = ''
    }
  }
};
</script>
