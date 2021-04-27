<template>
  <v-container>
    <div class="height d-flex flex-column align-center justify-center">
      <div>
        <h1 class="text-h2 bold">examProject</h1>
      </div>
      <div class="mt-10">
        <v-btn class="mx-5" @click="dialog = true">Student</v-btn>
        <v-btn class="mx-5">Teacher</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data(){
      return{
          dialog:false,
      }
  }
};
</script>

<style>
.height {
  height: 70vh;
}
</style>