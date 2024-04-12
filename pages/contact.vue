<template>
  <div class="container">
    <div
      class="text-primary-color text-[35px] font-bold text-center mt-14 mb-10"
    >
      CONTACT US
    </div>
    <contact />
    <div class="lg:hidden">
      <v-timeline side="end" class="text-[#474747] pr-5">
        <v-timeline-item size="small" dot-color="primary">
          <div>
            <div>AL Rawdha Building, Old ShabiaUmm Al Quwain , U.A.E</div>
            <div>sales@ultimate-equipments.com</div>
          </div>
        </v-timeline-item>

        <v-timeline-item size="small" dot-color="primary">
          <div>
            <div>
              E 306 , 307 & 308, Al Shoala Building, Port Saeed, Near Deira City
              Center , Dubai, U.A.E PO Box 115393
            </div>
            <div>sales@ultimate-equipments.com</div>
          </div>
        </v-timeline-item>

        <v-timeline-item size="small" dot-color="primary">
          <div>
            <div>
              PO Box 14664, Al-Hamra Industrial Zone-FZ Rakez, Al-Jazeera,
              Ras-Al-Khaimah, UAE
            </div>
            <div>sales@ultimate-equipments.com</div>
          </div>
        </v-timeline-item>

        <v-timeline-item size="small" dot-color="primary">
          <div>
            <div>
              14 - Tower II, TransAsia Cyber Park, Infopark Phase-2, Kochi,
              Kerala, INDIA
            </div>
            <div>sales@ultimate-equipments.com</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>

    <div class="grid grid-cols-3 py-5">
      <div class="hidden pr-[110px] text-[#474747] lg:block">
        <div>
          <div>AL Rawdha Building, Old ShabiaUmm Al Quwain , U.A.E</div>
          <div>sales@ultimate-equipments.com</div>
        </div>
        <div class="mt-10">
          <div>
            E 306 , 307 & 308, Al Shoala Building, Port Saeed, Near Deira City
            Center , Dubai, U.A.E PO Box 115393
          </div>
          <div>sales@ultimate-equipments.com</div>
        </div>
        <div class="mt-10">
          <div>
            PO Box 14664, Al-Hamra Industrial Zone-FZ Rakez, Al-Jazeera,
            Ras-Al-Khaimah, UAE
          </div>
          <div>sales@ultimate-equipments.com</div>
        </div>
        <div class="mt-10">
          <div>
            14 - Tower II, TransAsia Cyber Park, Infopark Phase-2, Kochi,
            Kerala, INDIA
          </div>
          <div>sales@ultimate-equipments.com</div>
        </div>
      </div>
      <div class="col-span-3 lg:col-span-2">
        <div
          class="text-[28px] font-semibold text-[#111111] !text-center lg:!text-left !mt-7 lg:!mt-0"
        >
          WRITE TO US
        </div>
        <div>
          <v-text-field
            density="compact"
            placeholder="Name"
            variant="outlined"
            single-line
            class="mt-5"
            bg-color="white"
            color="primary"
            base-color="grey"
          ></v-text-field>
          <v-text-field
            density="compact"
            placeholder="Email address"
            single-line
            variant="outlined"
            bg-color="white"
            color="primary"
            base-color="grey"
          ></v-text-field>
          <v-text-field
            density="compact"
            placeholder="Phone"
            variant="outlined"
            single-line
            bg-color="white"
            color="primary"
            base-color="grey"
          ></v-text-field>
          <v-textarea
            placeholder="Request for a quote"
            variant="outlined"
            bg-color="white"
            color="primary"
            base-color="grey"
            density="compact"
          ></v-textarea>
          <div class="flex mb-16 !justify-center lg:!justify-start">
            <v-btn class="text-none" height="48" color="primary"
              >Send Message</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:block text-primary-color text-[35px] font-bold text-center lg:mt-[50px] mb-10">
    FIND US
  </div>
  <g-map />
  <div class="container">
    <carousel4 class="my-[80px]" />
  </div>
</template>
