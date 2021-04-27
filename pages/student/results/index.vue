<template>
  <div>
    <div class="mx-5 mb-3 my-5">
      <h4 class="text-h4 mb-3">Results</h4>
      <p class="text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        repellendus culpa consequatur, cum voluptatum rem eos ad. Beatae eos
        officia in culpa minus maiores consequatur asperiores atque. Nemo,
        laboriosam distinctio.
      </p>
    </div>

    <v-card 
    class="mx-5 my-5"
    v-for="(result, index) in results"
    :key="index"
    :to="'results/' + result.subject "
    >
        <v-card-title> {{ result.subject }} </v-card-title>
    </v-card>


  </div>
</template>

<script>
export default {
    name:'Results',
    data(){
        return{
            results:[
                { subject: 'Computer'},
                { subject: 'Science'},
                { subject: 'Algebra'},
                { subject: 'Hindi'},
                { subject: 'English'},
                { subject: 'Social Science'},
                { subject: 'Geometry'},
            ]
        }
    }
};
</script>

<style>
</style>