<template>
  <div class="bg-[url('/images/footer-bg.webp')] bg-cover">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-4">
        <div class="lg:mr-10">
          <form @submit.prevent="submitForm">
            <div class="text-[30px] font-bold mt-10 text-white">
              REQUEST FOR QUOTE
            </div>
            <v-text-field
              v-model="form.name"
              density="compact"
              placeholder="Name"
              variant="outlined"
              single-line
              class="mt-5"
              bg-color="white"
              color="white"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.email"
              density="compact"
              placeholder="Email address"
              single-line
              variant="outlined"
              bg-color="white"
              color="white"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.phone"
              density="compact"
              placeholder="Phone"
              variant="outlined"
              single-line
              bg-color="white"
              color="white"
              required
            ></v-text-field>
            <v-textarea
              v-model="form.quote"
              placeholder="Request for a quote"
              variant="outlined"
              bg-color="white"
              color="white"
              density="compact"
              required
            ></v-textarea>
            <div class="flex justify-center mb-16">
              <v-btn
                :disabled="isSubmitting"
                type="submit"
                class="rounded-btn text-black hover:bg-primary-color hover:!text-[#fff] px-5"
              >
                {{ isSubmitting ? "Submitting..." : "Submit" }}
              </v-btn>
            </div>
          </form>
        </div>

        <div class="">
          <v-row class="lg:pt-16 pb-8">
            <v-col class="text-white px-5" cols="12" sm="6">
              <div class="text-[28px] font-bold">Products</div>
              <ul>
                <li v-for="(item, i) in products" :key="i" class="mt-2">
                  <NuxtLink
                    :to="`/service/${item.id}`"
                    class="hover:text-primary-color text-[20px]"
                  >{{ item.name }}</NuxtLink>
                </li>
              </ul>
            </v-col>
            <v-col class="text-white px-5" cols="12" sm="6">
              <div class="text-[28px] font-bold">Quick Links</div>
              <ul>
                <li v-for="(item, i) in links" :key="i" class="mt-2">
                  <NuxtLink
                    :to="item.link"
                    class="hover:text-primary-color text-[20px]"
                  >{{ item.title }}</NuxtLink>
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <div class="flex justify-end text-white mb-2">
      <NuxtLink
        to="/FAQs"
        class="px-4 border-r-[1px] border-[#fff] hover:text-primary-color"
      >FAQ's</NuxtLink>
      <NuxtLink to="/contact" class="px-4 hover:text-primary-color">Contact</NuxtLink>
    </div>
    <div class="bg-black flex justify-center py-4">
      <div>© Copyright ULTIMATE EQUIPMENTS</div>
    </div>

    <!-- Success/Error Popup Modal -->
    <v-dialog v-model="showDialog" max-width="400">
      <v-card>
        <v-card-title class="text-center font-bold text-lg">
          {{ dialogTitle }}
        </v-card-title>
        <v-card-text class="text-center">
          {{ dialogMessage }}
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" @click="showDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useAppStore } from "../stores/store";

export default defineComponent({
  setup() {
    const AppStore = useAppStore();

    const form = ref({
      name: "",
      email: "",
      phone: "",
      quote: "",
    });

    const isSubmitting = ref(false);
    const showDialog = ref(false);
    const dialogTitle = ref("");
    const dialogMessage = ref("");

    const submitForm = async () => {
      isSubmitting.value = true;
      showDialog.value = false;

      try {
        const response = await fetch("https://formspree.io/f/maneogep", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form.value),
        });

        if (response.ok) {
          dialogTitle.value = "Success!";
          dialogMessage.value = "Thank you! Your request has been sent.";
          form.value = { name: "", email: "", phone: "", quote: "" };
        } else {
          throw new Error("Failed to submit. Please try again.");
        }
      } catch (error: any) {
        dialogTitle.value = "Error!";
        dialogMessage.value = error.message;
      } finally {
        isSubmitting.value = false;
        showDialog.value = true;
      }
    };

    return {
      form,
      isSubmitting,
      showDialog,
      dialogTitle,
      dialogMessage,
      submitForm,
      products: ref(AppStore.services),
      links: ref([
        { title: "Home", link: "/" },
        { title: "About Us", link: "/about" },
        { title: "Our Products", link: "/products" },
        { title: "Services", link: "/services" },
        { title: "Special Products", link: "/special-products" },
        { title: "Our Brands", link: "/brands" },
        { title: "Contact Us", link: "/contact" },
      ]),
    };
  },
});
</script>
