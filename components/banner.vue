<template>
    <div class="container">
        <div class="my-5 bg-[#D9D9D9] pb-7 grid grid-cols-1 lg:grid-cols-3">
            <div class="rounded-t-[10px] lg:rounded-r-[0px] lg:rounded-l-[10px] border-right bg-primary-color drop-shadow-[0_4px_4px_0px_#00000040] py-8 px-6 flex items-center">
                <div>
                    <i-vector-1 class="text-white text-[80px] mb-[-10px]"/>
                </div>
                <div class="ml-5 text-white">
                    <div class="text-xl font-bold">{{("Delivery Information").toUpperCase()}}</div>
                    <div class="flex mt-1 items-center">
                        <div class="text-[14px]">Get a call back</div>
                        <v-btn icon="mdi-chevron-right" color="white" size="sm" class="ml-7 opacity-85 text-grey"/>
                    </div>
                </div>
            </div>
            <div class="bg-banner-grey drop-shadow-[0_4px_4px_0px_#00000040] py-8 px-6 flex items-center">
                <div>
                    <i-vector-2 class="text-white text-[60px]"/>
                </div>
                <div class="ml-5 text-white">
                    <div class="text-xl font-bold">{{("shop all categories").toUpperCase()}}</div>
                    <div class="flex mt-1 items-center">
                        <div class="text-[14px]">Let us know your enquiries</div>
                        <v-btn icon="mdi-chevron-right" color="white" size="sm" class="ml-7 opacity-85 text-grey"/>
                    </div>
                </div>
            </div>
            <div class="border-left lg:rounded-r-[10px] rounded-b-[10px] lg:rounded-l-[0px] bg-banner-grey drop-shadow-[0_4px_4px_0px_#00000040] py-8 px-6 flex items-center">
                <div>
                    <i-vector-3 class="text-white text-[80px]"/>
                </div>
                <div class="ml-5 text-white">
                    <div class="text-xl font-bold">{{("24 x 7 free support").toUpperCase()}}</div>
                    <div class="flex mt-1 items-center">
                        <div class="text-[14px]">TEL: +971 2555 8890</div>
                        <v-btn icon="mdi-chevron-right" color="white" size="sm" class="ml-7 opacity-85 text-grey"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
svg{
    margin: 0;
}
.rad-left{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.rad-right{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.rad-right{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.border-right{
    border-right: 0.5px solid #FFFFFF;
}
.border-left{
    border-left: 0.5px solid #FFFFFF;
}
</style>