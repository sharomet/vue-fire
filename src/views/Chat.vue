<template>
    <div id="wrapp">
        <Header />
        <Aside />
        <Main />
        <Input />
    </div>
</template>

<script>
import Aside from '@/components/layout/Aside'
import Main from '@/components/layout/Main'
import Header from '@/components/layout/Header'
import Input from '@/components/layout/Input'

export default {
    components: {
        Aside,
        Main,
        Header,
        Input
    }
}
</script>

<style lang="scss">
#wrapp {
    display: grid;
    height: 100vh;
    /*grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "navbar" "aside" "main";*/
    grid-template-rows: auto 1fr auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
@media(min-width: 992px) {
    #wrapp {
        grid-template-areas: "navbar navbar navbar"
                             "aside main main"
                             "aside input input";
        grid-template-columns: 250px 1fr 1fr;
    }
}
</style>