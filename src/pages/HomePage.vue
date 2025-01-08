<template>
    <Navbar/>
    <Home/>
    <WhyBlockchain/>
    <Pricing/>
    <HowItWorks/>
    <FooterComponent/>
</template>

<script>
import Home from '../components/Home.vue';
import Navbar from '../components/Navbar.vue';
import WhyBlockchain from '../components/WhyBlockchain.vue';
import Pricing from '../components/Pricing.vue';
import HowItWorks from '../components/HowItWorks.vue';
import FooterComponent from '../components/Footer.vue';

export default{
    name : "HomePage",
    components :{
        Navbar,
        Home,
        WhyBlockchain,
        Pricing,
        HowItWorks,
        FooterComponent,
    }
}

</script>

<style scoped>
</style>