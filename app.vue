<template>
  <NuxtLayout>
    <v-app class="bg-white relative">
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
                label="Describe Your Requirements"
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
import { ref } from "vue";
import emailjs from "@emailjs/browser";

// Reactive state
const isModalOpen = ref(false);
const isPopupOpen = ref(false);
const popupMessage = ref("Default message");
const isSubmitting = ref(false);
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
</script>
