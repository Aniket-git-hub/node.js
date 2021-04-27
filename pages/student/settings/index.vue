<template>
  <div>
    <h1>Settings page</h1>
    <v-container>
      <v-switch
        v-model="$vuetify.theme.dark"
        hint="This toggles the global state of the Vuetify theme"
        label="Dark Theme"
      ></v-switch>
      <v-card color="primary"> colors </v-card>
      <v-card color="accent"> colors </v-card>
      <v-card color="secondary"> colors </v-card>
      <v-card color="warning"> colors </v-card>
      <v-card color="success"> colors </v-card>
      <v-card color="info"> colors </v-card>
      <v-card color="error"> colors </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "settings",
};
</script>

<style>
</style>