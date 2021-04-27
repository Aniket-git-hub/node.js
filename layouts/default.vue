<template>
  <v-app dark>
    <Navigation />
    <v-main>
      <nuxt />
    </v-main>
    <v-footer app  color="#2F007C" class="white--text" :dark="darkTheme">
      <span>examProject &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
  data() {
    return {
      darkTheme: true,
    };
  },
  created(){
    
  }
};
</script>
