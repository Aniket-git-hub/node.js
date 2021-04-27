
<template>
  <div>
    <div class="mx-5 mb-3">
      <div class="d-flex flex-row justify-end">
        <span class="overline pt-5 pr-3 green--text">54:66 mins remaining</span>
      </div>
      <h4 class="text-h4 mb-3">{{ this.$route.params.id }}</h4>
      <p class="text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        repellendus culpa consequatur, cum voluptatum rem eos ad. Beatae eos
        officia in culpa minus maiores consequatur asperiores atque. Nemo,
        laboriosam distinctio.
      </p>
    </div>

<v-card
      class="px-5 mx-5 py-5 my-5"
      flat
      color="secondary"
      v-for="(ta, index) in test"
      :key="index"
    >
      <span class="overline"> Question {{ index + 1 }} of 30 </span>

      <v-card-subtitle class="mt-n3">
        {{
          ta.type == "FIB"
            ? "Fill in the blanks"
            : ta.type == "MCQ"
            ? "Multiple choice question"
            : ta.type == "MTF"
            ? "Match the following"
            : ta.type == "TOF"
            ? "True or False"
            : ta.type
        }}
      </v-card-subtitle>

      <v-card-title class="mt-n5" v-if="ta.type != 'FIB'">
        {{ ta.question }}
      </v-card-title>

      <v-card-title class="mt-n5" v-else>
        {{ FIB(ta.question) }}
      </v-card-title>

      <!-- <v-card-text v-if="ta.type == 'FIB'">

        </v-card-text> -->
      <v-card-text v-if="ta.type != 'MTF'" class="d-flex flex-column">
        <v-btn
          v-show="ta.type != 'FIB'"
          v-for="(option, index) in ta.answers"
          :key="index"
          class="my-2"
          large
        >
          {{ option.text }}
        </v-btn>
      </v-card-text>
      <v-card-text v-else>
        <div class="d-flex flex-row justify-space-between">
          <div class="d-flex flex-column">
            <h5 class="text-h6">Cloumn One</h5>
            <v-btn
              v-for="(one, index) in ta.groupOne"
              :key="index"
              class="my-2"
            >
              {{ one }}
            </v-btn>
          </div>
          <div class="d-flex flex-column">
            <h5 class="text-h6">Cloumn Two</h5>
            <v-btn
              v-for="(two, index) in ta.groupTwo"
              :key="index"
              class="my-2"
            >
              {{ two }}
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>


     <div class="text-center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div> 

    <div class="mx-10 my-10">
      <v-btn
        elevation="5"
        dark
        color="red"
        block
        x-large
        :to="`/student/results/` + this.$route.params.id "
        >End Exam</v-btn
      >
    </div>

  </div>
</template>

<script>
export default {
  name: "newTest",
  head() {
    return {
      title: "New Test",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "New Test page exam project",
        },
      ],
    };
  },

  data() {
    return {
      page: 1,
      test: [
        {
          type: "MCQ",
          question: "What is capital City of India?",
          answers: [
            { text: "Mumbai", isCorrect: false },
            { text: "Pune", isCorrect: false },
            { text: "Delhi", isCorrect: true },
            { text: "Kolkatta", isCorrect: false },
          ],
          marks: 2,
        },
        {
          type: "MCQ",
          question: "mera question?",
          answers: [
            { text: "option1", isCorrect: false },
            { text: "option1", isCorrect: false },
            { text: "option1", isCorrect: true },
            { text: "option1", isCorrect: false },
          ],
          marks: 2,
        },
        {
          type: "MCQ",
          question: "What is capital City of India?",
          answers: [
            { text: "Delhi", isCorrect: true },
            { text: "Kolkatta", isCorrect: false },
          ],
          marks: 2,
        },
        {
          type: "FIB",
          question:
            "Mumbai is ADDINPUT of India with context to your syllabus.",
          answers: [
            { text: "Financail Capital", isCorrect: true },
            { text: "financail capital", isCorrect: true },
          ],
          marks: 1,
        },
        {
          type: "FIB",
          question: "Fill my name ADDINPUT",
          answers: [
            { text: "Financail Capital", isCorrect: true },
            { text: "financail capital", isCorrect: true },
          ],
          marks: 1,
        },

        {
          type: "TOF",
          question: "Delhi is not capital of India?",
          answers: [
            { text: "True", isCorrect: false },
            { text: "False", isCorrect: true },
          ],
          marks: 2,
        },

        {
          type: "MTF",
          groupOne: ["Mumbai", "Bengaluru", "Kolkatta", "Delhi"],
          groupTwo: [
            "Capital",
            "previous Capital",
            "IT Hub",
            "Fainancail capital",
          ],
          correctPattern: [],
          marks: 5,
        },
      ],
    };
  },
  methods: {
    FIB(question) {
      return question.replace(/ADDINPUT/g, `<input/>`);
    },
  },
};
</script>

<style>
</style>