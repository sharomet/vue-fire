<template>
    <div id="input">
        <form class="input-group" @submit.prevent="inputMessage">
            <textarea rows="3" class="form-control" :class="{ 'is-invalid': isError }" placeholder="Your Message" v-model="message"></textarea>
            <div class="input-group-append">
                <button type="submit" class="btn btn-primary">Send</button>
            </div>
        </form>
    </div>
</template>

<script>
import { db } from '@/firebase'
import { getDate } from '@/firebase'
const messageRef = db.ref('messages')

export default {
    data() {
        return {
            message: '',
            userId: '-L_h4cITpx-lDCCwAtt0',
            isError: false
        }
    },
    methods: {
        inputMessage() {
            if(this.message == '') {
                this.isError = true;
            } else {
                messageRef.push({
                    userId: this.userId,
                    message: this.message,
                    startedAt: getDate
                });
                this.isError = false;
                this.message = '';
            }
        }
    }
}
</script>

<style lang="scss">
 #input {
    padding: 15px;
    grid-area: input;
 }
</style>
