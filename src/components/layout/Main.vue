<template>
    <main id="main">
        <ul class="list-unstyled message-content">
            <li v-for="(message, index) in messages" :key="index" class="message-item">
                <div class="message-item__container">
                    <div>
                        <p class="mb-0">{{ getUserByKey(message.userId) }}</p>
                        <p class="mb-0">
                            {{ message.message }}
                        </p>
                        <small class="text-muted d-block">
                            <em>{{ message.startedAt | moment('D.MM.YYYY H:mm:ss') }}</em>
                        </small>
                    </div>
                </div>
            </li>
        </ul>
    </main>
</template>

<script>
import { db } from '@/firebase'
const messageRef = db.ref('messages')
const usersRef = db.ref('users')

export default {
    firebase: {
        messages:   messageRef,
        users:      usersRef
    },
    methods: {
        getUserByKey(key) {
            return this.users.find(user => user['.key'] === key).login;
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/scss/variables";
#main {
    background-color: $light;
    padding: 15px;
    grid-area: main;
    overflow-y: auto;
}
.message-item {
    ~ .message-item {
        margin-top: 5px;
    }
    &__container {
        display: inline-flex;
        background-color: #fff;
        padding: 5px 15px;
    }
}
</style>