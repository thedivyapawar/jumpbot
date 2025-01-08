<template>
    <Navbar/>
    <Pricing/>
    <FooterComponent/>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Pricing from '../components/Pricing.vue';
import FooterComponent from '../components/Footer.vue';

export default{
    name : "PricingPage",
    components:{
        Navbar,
        Pricing,
        FooterComponent,
    }
}

</script>

<style scoped>
</style>