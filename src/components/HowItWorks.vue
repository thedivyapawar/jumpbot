<template>
    <div class="flex justify-center items-center flex-wrap">
        <h1 class="text-4xl font-bold w-[80%] text-center my-4">How It <span class="text-[#01afeb] text-4xl font-bold text-center">Works</span> </h1>
        <h1 class="mx-4 text-center my-4 w-[80%] mb-5">Unlock the technical power behind blockchain's structure and security.</h1>

        <div class="w-[80%] flex justify-evenly items-center flex-wrap my-5">
            <div class="w-[98%] md:w-[48%] flex flex-col px-5 border border-blue-400 rounded-2xl my-2" >
                <p class="hollow-text">01</p>
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">Blocks</h1>
                <p class="text-gray-400 my-5">Data is stored in blocks, which are linked together in a chain.</p>
                <div class="flex items-center justify-center">
                <img src="../assets/images/blocks.png" alt="blocks" class="w-[60%] ">
                </div>

            </div>

            <div class=" w-[98%] md:w-[48%] flex flex-col px-5 rounded-2xl border border-blue-400 my-5 md:my-0">
                <p class="hollow-text">02</p>
                <h1 class=" text-3xl md:text-4xl lg:text-5xl font-bold">Consensus Mechanisms</h1>
                <p class="text-gray-400 my-5">Networks use algorithms like Proof of Work (POW) or Proof of Stake (PoS) to validate transactions.</p>
               <div class="flex items-center justify-center">
                <img src="../assets/images/mechanism.png" alt="blocks" class="w-[43%] ">
               </div>
            </div>

            <div class="w-[98%] flex justify-evenly items-center rounded-2xl border border-blue-400 my-2 md:my-5 flex-wrap">
                <div class="flex flex-col px-5  w-[98%] md:w-[50%]"><p class="hollow-text">03</p>
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">Immutability</h1>
                <p class="text-gray-400 my-5">Once added, data in a block cannot be changed, ensuring a secure and permanent record.</p>
                </div>

                <div class="flex items-center justify-center w-[98%] md:w-[50%]">
                <img src="../assets/images/immutability.png" alt="blocks" class="w-[80%]">
               </div>
                
            </div>

        </div>
    </div>
</template>

<script>
export default{
    name : "HowItWorks",
}

</script>

<style scoped>
.hollow-text {
      font-size: 5rem;        /* Text size */
      font-weight: bold;      /* Make text bold */
      color: transparent;     /* Make the fill transparent */
      -webkit-text-stroke: 1px white; /* Outline thickness and color */
      text-stroke: 1px white; /* Support for non-webkit browsers */
    }
</style>