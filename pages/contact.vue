<template>
  <div class="container">
    <div
      class="text-primary-color text-[35px] font-bold text-center mt-14 mb-10"
    >
      CONTACT US
    </div>

    <contact />

    <!-- Mobile Timeline -->
    <div class="lg:hidden">
      <v-timeline side="end" class="text-[#474747] pr-5">
        <v-timeline-item
          v-for="(branch, index) in branches"
          :key="index"
          size="small"
          dot-color="primary"
        >
          <div>
            <div>{{ branch.address }}</div>
            <a
              href="mailto:info@ultimate-equipments.com"
              class="text-blue-500 hover:underline"
            >
              {{ branch.email }}
            </a>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>

    <!-- Desktop Branch List & Contact Form -->
    <div class="grid grid-cols-3 py-5 gap-5">
      <div
        class="hidden pr-[110px] text-[#474747] lg:block border-r-[1px] border-[#dddddd] mr-5"
      >
        <h2
          class="text-[28px] font-semibold text-[#111111] text-center lg:text-left mt-7 lg:mt-0"
        >
          Our Branches
        </h2>
        <div v-for="(branch, index) in branches" :key="index" class="mt-10">
          <div>{{ branch.address }}</div>
          <a
            href="mailto:info@ultimate-equipments.com"
            class="text-blue-500 hover:underline"
          >
            {{ branch.email }}
          </a>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="col-span-3 lg:col-span-2">
        <div
          class="text-[28px] font-semibold text-[#111111] text-center lg:text-left mt-7 lg:mt-0"
        >
          WRITE TO US
        </div>
        <form @submit.prevent="sendEmail">
          <v-text-field
            v-model="form.name"
            placeholder="Name"
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            placeholder="Email address"
            variant="outlined"
            required
            type="email"
          ></v-text-field>
          <v-text-field
            v-model="form.phone"
            placeholder="Phone"
            variant="outlined"
            required
          ></v-text-field>
          <v-textarea
            v-model="form.message"
            placeholder="Request for a quote"
            variant="outlined"
            required
          ></v-textarea>

          <div class="flex mb-16 justify-center lg:justify-start">
            <v-btn
              :disabled="loading"
              class="text-none"
              height="48"
              color="primary"
              type="submit"
            >
              <span v-if="loading">Sending...</span>
              <span v-else>Send Message</span>
            </v-btn>
          </div>
        </form>
      </div>
    </div>

    <!-- Popup Dialog -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card  class="py-5">
        <v-card-title class="text-center">{{ dialogTitle }}</v-card-title>
        <v-card-text>
          {{ dialogMessage }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div
      class="hidden lg:block text-primary-color text-[35px] font-bold text-center lg:mt-[50px] mb-10"
    >
      FIND US
    </div>

    <g-map />

    <div class="container">
      <carousel5 class="my-[80px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const loading = ref(false);
const dialog = ref(false);
const dialogMessage = ref("");
const dialogTitle = ref("");

const branches = [
  {
    address:
      "14 - Tower II, TransAsia Cyber Park, Infopark Phase-2, Kochi, Kerala, INDIA",
    email: "info@ultimate-equipments.com",
  },
  {
    address:
      "E 306, 307 & 308, Al Shoala Building, Port Saeed, Near Deira City Center, Dubai, U.A.E PO Box 115393",
    email: "info@ultimate-equipments.com",
  },
  {
    address: "AL Rawdha Building, Old Shabia, Umm Al Quwain, U.A.E",
    email: "info@ultimate-equipments.com",
  },
  {
    address:
      "PO Box 14664, Al-Hamra Industrial Zone-FZ Rakez, Al-Jazeera, Ras-Al-Khaimah, UAE",
    email: "info@ultimate-equipments.com",
  },
];

const sendEmail = async () => {
  loading.value = true;
  console.log("Sending data:", form.value); // Debugging

  try {
    const response = await emailjs.send(
      "service_xvuq60g",
      "template_4jw74w7",
      {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        message: form.value.message,
      },
      "pSXDUutcjxTTiLho8"
    );

    console.log("EmailJS Response:", response); // Debugging

    dialogTitle.value = "Successfully submitted";
    dialogMessage.value =
      "Thanks for contacting us. We will get back to you soon.";
    form.value = { name: "", email: "", phone: "", message: "" };
  } catch (error) {
    console.error("EmailJS Error:", error);
    dialogTitle.value = "Failed to submit form";
    dialogMessage.value = "Failed to send message. Please try again.";
  } finally {
    loading.value = false;
    dialog.value = true;
  }
};

useHead({
  meta: [
    {
      name: "title",
      content: "Contact Us | Ultimate Equipments",
    },
    {
      name: "description",
      content:
        "Get in touch with Ultimate Equipments for all your industrial metal equipment & tools needs. Contact us today for expert advice & product inquiries. Call us!",
    },
  ],
});
</script>
