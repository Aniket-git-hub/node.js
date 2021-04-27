<template>
<div>
  <v-row>
    <v-col cols="12" sm="8" md="6">
     <v-card 
     color="rgba(102, 99, 255, 0.24)"  
     class="rounded-0 px-5 py-5" 
     width="100%">
       <v-card class="rounded-lg ">
        <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >
      <v-card-title class="white--text mt-15"> Welcome, Aniket Singh</v-card-title>
    </v-img>
       </v-card>
     </v-card>
    </v-col>
    <v-col cols="12">
      <v-btn x-large block color="accent"> Activities</v-btn>
    </v-col>
  </v-row>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
