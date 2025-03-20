<template>
  <NuxtLayout>
    <v-app class="bg-backgroundGrey relative">
      <navbar />
      <div class="h-[70px] lg:hidden"></div>
      <NuxtPage />

      <!-- Get a Quote Button -->
      <div
        class="fixed text-white right-5 bottom-5 rounded-[30px] border-[1px] border-[#ffffff] z-[5] shadow-[6px_6px_24px_4px_#1a202c99]"
      >
        <button
          @click="isModalOpen = true"
          class="bg-primary-color px-5 py-3 rounded-[30px]"
        >
          Get a Quote
        </button>
      </div>

      <!-- Quote Form Modal -->
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click.self="isModalOpen = false"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
          <!-- Close Button -->
          <button
            @click="isModalOpen = false"
            class="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          >
            ✕
          </button>

          <h2 class="text-xl font-bold mb-4 text-center">Get a Quote</h2>

          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label class="block text-gray-700 font-medium"
                >Name <span class="text-red-500">*</span></label
              >
              <input
                v-model="form.name"
                type="text"
                class="w-full p-2 border rounded"
                placeholder="Enter your name"
                required
              />
              <p
                v-if="isSubmitted && validationErrors.name"
                class="text-red-500 text-sm"
              >
                {{ validationErrors.name }}
              </p>
            </div>

            <div class="mb-3">
              <label class="block text-gray-700 font-medium"
                >Email <span class="text-red-500">*</span></label
              >
              <input
                v-model="form.email"
                type="email"
                class="w-full p-2 border rounded"
                placeholder="Enter your email"
                required
              />
              <p
                v-if="isSubmitted && validationErrors.email"
                class="text-red-500 text-sm"
              >
                {{ validationErrors.email }}
              </p>
            </div>

            <div class="mb-3">
              <label class="block text-gray-700 font-medium"
                >Phone <span class="text-red-500">*</span></label
              >
              <input
                v-model="form.phone"
                type="tel"
                class="w-full p-2 border rounded"
                placeholder="Enter your phone number"
                required
              />
              <p
                v-if="isSubmitted && validationErrors.phone"
                class="text-red-500 text-sm"
              >
                {{ validationErrors.phone }}
              </p>
            </div>

            <div class="mb-3">
              <label class="block text-gray-700 font-medium"
                >Description <span class="text-red-500">*</span></label
              >
              <textarea
                v-model="form.description"
                class="w-full p-2 border rounded"
                placeholder="Describe your requirements"
                required
              ></textarea>
              <p
                v-if="isSubmitted && validationErrors.description"
                class="text-red-500 text-sm"
              >
                {{ validationErrors.description }}
              </p>
            </div>

            <div class="flex justify-end mt-4">
              <button
                type="button"
                @click="isModalOpen = false"
                class="px-4 py-2 bg-gray-400 text-white rounded mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-primary-color text-white rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <app-footer />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import * as yup from "yup";

// Get the current route
const route = useRoute();
const isModalOpen = ref(false);
const isSubmitted = ref(false);

// Form data
const form = ref({
  name: "",
  email: "",
  phone: "",
  description: "",
});

// Error tracking
const validationErrors = ref({
  name: "",
  email: "",
  phone: "",
  description: "",
});

// Validation schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone is required"),
  description: yup.string().required("Description is required"),
});

// Compute whether to show the header carousel
const showHeaderCarousel = computed(() => route.path !== "/contact");

useHead({
  title: "Ultimate Metal Equipments & Tools Trading Company",
});

// Form submission
const submitForm = async () => {
  isSubmitted.value = true;
  validationErrors.value = { name: "", email: "", phone: "", description: "" }; // Reset errors

  try {
    await schema.validate(form.value, { abortEarly: false }); // Validate all fields

    // If validation passes, submit form
    alert("Quote request submitted successfully!");
    isModalOpen.value = false;
    isSubmitted.value = false; // Reset form status
    form.value = { name: "", email: "", phone: "", description: "" }; // Clear form
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      err.inner.forEach((error) => {
        // Ensure that error.path is a valid key in validationErrors
        if (error.path && error.path in validationErrors.value) {
          validationErrors.value[
            error.path as keyof typeof validationErrors.value
          ] = error.message;
        }
      });
    }
  }
};
</script>
