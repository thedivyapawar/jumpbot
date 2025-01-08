<template>
    <div class="flex px-4 md:px-10 py-6 justify-between items-center ">
        <div class="flex gap-2 items-center ">         
                <router-link class="font-bold text-3xl" to="/">
                Jump<span class="font-bold text-3xl text-[#01afeb]">Bot</span>
                </router-link>
        </div>

    
        <div class="hidden md:flex gap-12 text-sm ">
            <router-link to="/" class="nav-hover font-bold text-[16px]">Home</router-link>
            <router-link to="/whyblockchain" class="nav-hover text-[16px] font-bold">Why Blockchain</router-link>
            <router-link to="/pricing"  class="nav-hover text-[16px] font-bold">Pricing</router-link>
            <router-link to="/howitworks"  class="nav-hover text-[16px] font-bold">How It Works</router-link>
        </div>


    <!-- Modal start -->

    <div class=" flex items-center justify-center ">

    <!-- Hidden Checkbox -->
    <input type="checkbox" id="modalToggle" class="hidden peer" />

    <!-- Start Free Trial Button -->
    <label for="modalToggle" class="px-5 py-2 tracking-wide rounded-full  bg-[#01afeb] cursor-pointer hover:bg-white hover:text-[#01afeb] btn-animation">
        Contact Us
    </label>

    <!-- Modal -->
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden peer-checked:flex">
        <div class="bg-[#01afeb] rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 class="text-xl font-bold text-white">Contact Us</h2>
        <p class="mt-2 text-black">Mail : jumpbotinfo@gmail.com </p>
        <p class="mt-2 text-black">Call : +999-1044888 </p>

        <div class="mt-4 flex justify-end space-x-2">
            <!-- Close Button -->
            <label for="modalToggle" class="px-4 py-2 bg-black text-white rounded-full cursor-pointer hover:bg-white hover:text-[#01afeb]">
            Close
            </label>
        </div>
        </div>
    </div>

    </div>
    </div>
    <router-view></router-view>
</template>

<script>
export default{
    name:"Navbar",
}

</script>

<style scoped>
.nav-hover:hover{
    color: #01afeb;
}
</style>