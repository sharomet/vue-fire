<template>
    <div class="wrapp">
        <Aside />
        <Main />
    </div>
</template>

<script>
import  Aside from '@/components/chat/Aside'
import  Main from '@/components/chat/Main'
export default {
    components: {
        Aside,
        Main
    }
}
</script>

<style lang="scss">
    .wrapp {
        display: flex;
        height: 100%;
    }
</style>