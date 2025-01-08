<template>
    <Navbar/>
    <WhyBlockchain/>
    <FooterComponent/>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import WhyBlockchain from '../components/WhyBlockchain.vue';
import FooterComponent from '../components/Footer.vue';

export default{
    name : "WhyBlockchainPage",
    components:{
        Navbar,
        WhyBlockchain,
        FooterComponent,
    }
}

</script>

<style scoped>
</style>