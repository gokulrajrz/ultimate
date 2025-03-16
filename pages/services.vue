<template>
  <!-- <div
    class="py-10 bg-[url('/images/bg-m.png')] lg:bg-[url('/images/bg-1.png')] bg-cover flex items-center bg-center"
  >
    <div class="container flex justify-center overflow-hidden">
      <div class="text-white text-center text-[32px] font-black max-w-[880px]">
        {{
          "Right Equipments Delivered at the Right time with unbeatable quality & affordable pricing".toUpperCase()
        }}
      </div>
    </div>
  </div> -->
  <div class="container">
    <!-- <banner /> -->

    <h1 class="text-primary text-[35px] font-bold text-center mt-14">
      SERVICES
    </h1>
    <div class="mt-10 flex flex-col lg:flex-row">
      <div class="flex justify-center items-center lg:w-fit">
        <div class="w-[373px] lg:max-w-[373px]">
          <v-img
            src="/images/service.jpeg"
            class="rounded-10"
            height="306px"
            cover
          />
        </div>
      </div>

      <div class="flex">
        <div class="mt-[28px] lg:mt-0 flex flex-col text-justify">
          <div class="px-5 pt-[20px] lg:!pt-[0px] text-[#474747] lg:ml-7">
            <p>
              Planning a new facility or reorganizing an existing one is a
              daunting task. We offer extensive technical and product know how,
              coupled with a deep understanding of modern setup requirement.
              UMET has specialists/consultants located throughout the UAE,
              ready to apply their knowledge and expertise to your current and
              future needs, and to recommend a comprehensive plan that meets
              your growing demands. An accurate layout is an important step to
              maximize your space, efﬁciency and proﬁtability. A good facility
              design saves you from costly mistakes and prevents your project
              from being delayed.
            </p>

            <p class="mt-5">
              Having our customer's satisfaction and service as top priorities,
              UMETs close and trusting relationship with workshops, factories,
              service stations, and dealerships is essential. To ensure and
              guarantee this, we work directly with you, your architects and
              consultants, to meet your requirements pre and post installation.
              We will be happy to consult and analyze for you any project,
              offering the necessary support, design and all required
              information to meet your needs and expectations.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:block my-[70px] bg-[#d9d9d9] h-[1px]"></div>

    <products class="pb-[40px] mb-6" />

    <div class="lg:hidden mb-12">
      <div class="text-primary-color text-[35px] font-bold text-center my-7">
        OUR PRODUCTS
      </div>
      <div>
        <pdt-card />
      </div>
    </div>

    <carousel5 class="mb-[80px]" />

    <contact />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      name: "title",
      content: "Our Services | Ultimate Equipments",
    },
    {
      name: "description",
      content:
        "We offer expert facility planning, design, & consultation services in the UAE. Maximize efficiency & profitability with our technical knowledge & support!",
    },
  ],
});
</script>
