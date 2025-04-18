<template>
  <NuxtLayout>
    <!-- Loader Screen -->
    <div
      v-if="isPageLoading"
      class="fixed inset-0 bg-white z-[30] flex flex-col items-center justify-center"
    >
      <div class="scale-in-center">
        <v-img
          src="/images/ultimate_logo.png"
          width="180"
          alt="Ultimate Equipments Logo"
          class="mb-8"
        />
      </div>
      <div class="circular-loader">
        <div class="circular-loader-inner"></div>
      </div>
    </div>

    <v-app class="bg-white relative" v-show="!isPageLoading">
      <navbar />
      <NuxtPage class="mt-[70px] lg:mt-0" />

      <!-- Floating "Get a Quote" Button -->
      <div class="fixed z-[15] right-5 bottom-5">
        <button
          @click="isModalOpen = true"
          class="bg-primary-color px-5 py-3 text-white rounded-[30px] border-[1px] border-[#ffffff] z-[15] shadow-[6px_6px_24px_4px_#1a202c99]"
        >
          Get a Quote
        </button>
      </div>

      <!-- Quote Form Modal -->
      <v-dialog v-model="isModalOpen" max-width="450">
        <v-card class="p-6 rounded-xl shadow-lg py-5">
          <v-card-title class="text-xl font-bold text-center text-gray-900">
            🚀 Get a Quote
          </v-card-title>

          <v-card-text>
            <form @submit.prevent="submitForm">
              <v-text-field
                v-model="form.name"
                label="Full Name"
                variant="outlined"
                color="primary"
                class="mb-4"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.email"
                label="Email Address"
                variant="outlined"
                color="primary"
                type="email"
                class="mb-4"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.phone"
                label="Phone Number"
                variant="outlined"
                color="primary"
                class="mb-4"
                required
              ></v-text-field>

              <v-textarea
                v-model="form.description"
                label="Request for a Quote"
                variant="outlined"
                color="primary"
                rows="3"
                class="mb-4"
                required
              ></v-textarea>

              <div class="flex justify-end gap-3 mt-4">
                <v-btn variant="text" @click="isModalOpen = false"
                  >Cancel</v-btn
                >
                <v-btn color="primary" type="submit" :loading="isSubmitting">
                  Submit
                </v-btn>
              </div>
            </form>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- Success/Error Popup Modal -->
      <v-dialog v-model="isPopupOpen" max-width="400">
        <v-card class="py-5">
          <v-card-title class="text-center text-lg font-bold">
            {{ dialogTitle }}
          </v-card-title>
          <v-card-text class="text-center">
            <p>{{ popupMessage }}</p>
            <p class="mt-4 text-sm text-gray-500">
              Need urgent help? Contact us at +97125558890 or
              sales@ultimate-equipments.com
            </p></v-card-text
          >
          <v-card-actions class="justify-center">
            <v-btn color="primary" @click="isPopupOpen = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <app-footer />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Ultimate Equipments',
})

import { ref, onMounted } from "vue";
import emailjs from "@emailjs/browser";

// Reactive state
const isModalOpen = ref(false);
const isPopupOpen = ref(false);
const popupMessage = ref("Default message");
const isSubmitting = ref(false);
const isPageLoading = ref(true); // New state for page loading
const dialogTitle = ref("Default title");

const form = ref({
  name: "",
  email: "",
  phone: "",
  description: "",
});

// Replace with your EmailJS credentials
const SERVICE_ID = "service_xvuq60g";
const TEMPLATE_ID = "template_4jw74w7";
const PUBLIC_KEY = "pSXDUutcjxTTiLho8";

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    const templateParams = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      message: form.value.description,
    };

    // Send email via EmailJS
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

    dialogTitle.value = "Quote submitted Successfully!";
    popupMessage.value =
      "Thank you for contacting us. We are reviewing your request and will get back to you as soon as possible.";
    form.value = { name: "", email: "", phone: "", description: "" };
  } catch (error) {
    dialogTitle.value = "Failed to submit!";
    popupMessage.value = "Failed to submit. Please try again.";
  } finally {
    isSubmitting.value = false;
    isPopupOpen.value = true;
    isModalOpen.value = false;
  }
};

// Simulate page loading
onMounted(() => {
  if (document.readyState === "complete") {
    // If the page is already loaded
    isPageLoading.value = false;
  } else {
    // Wait for the page to load
    window.onload = () => {
      isPageLoading.value = false;
    };
  }
});
</script>

<style>
/* Loader styles */
.circular-loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;
}

.circular-loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 3px solid #f3f3f3;
  animation: prixClipFix 2s linear infinite;
}

.circular-loader-inner {
  border: 3px solid transparent;
  border-top-color: #C6282E;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}

.scale-in-center {
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes scale-in-center {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>