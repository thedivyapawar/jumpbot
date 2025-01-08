<template>
    <Navbar/>
    <HowItWorks/>
    <FooterComponent/>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import HowItWorks from '../components/HowItWorks.vue';
import FooterComponent from '../components/Footer.vue';
export default{
    name : "HowItWorksPage",
    components:{
        Navbar,
        HowItWorks,
        FooterComponent,
    }
}

</script>

<style scoped>
</style>