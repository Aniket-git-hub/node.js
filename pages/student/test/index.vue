<template>
  <div class="px-5 py-5">
    <h1 class="text-h3 mb-4">Tests</h1>
    <p class="text-body">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas eveniet
      unde delectus quia possimus ea? Animi, ipsam aspernatur saepe ea fugiat
      similique at debitis illo odit, deleniti, possimus officiis suscipit.
    </p>
    <h5 class="text-h5 mb-4">Upcoming</h5>

    <v-card
      class="mx-auto my-4 pt-2 pb-3 px-2 rounded-lg"
      max-width="344"
      outlined
      v-for="test in upcomingTest"
      :key="test.id"
      color="secondary"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ test.subject }}
          </v-list-item-title>
          <v-list-item-subtitle
            >Of {{ test.duration }} mins Between {{ test.startTime }}-
            {{ test.endTime }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-btn color="accent" class="rounded-lg" large block :to="'/student/test/' + test.subject"> Start </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Test",
  data(){
      return{
          upcomingTest: [
    {
      id: "1",
      subject: "English",
      duration: "60",
      startTime: "12:00 PM",
      endTime: "2:00 PM",
    },
    {
      id: "2",
      subject: "Hindi",
      duration: "60",
      startTime: "12:00 PM",
      endTime: "2:00 PM",
    },
    {
      id: "3",
      subject: "Math",
      duration: "60",
      startTime: "12:00 PM",
      endTime: "2:00 PM",
    },
    {
      id: "4",
      subject: "Computer",
      duration: "60",
      startTime: "12:00 PM",
      endTime: "2:00 PM",
    },
    {
      id: "5",
      subject: "Social Science",
      duration: "60",
      startTime: "12:00 PM",
      endTime: "2:00 PM",
    },
  ],
      }
  }
};
</script>

<style>
</style>