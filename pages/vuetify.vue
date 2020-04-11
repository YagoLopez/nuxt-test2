<style scoped>
  .color-red {
    background-color: red;
  }
</style>
<template>
  <div class="">
    <v-btn small>Normal</v-btn>
    <v-btn small color="primary">Primary</v-btn>
    <v-btn color="#aabbcc" :fab="true">Error</v-btn>
    <v-btn text small color="primary">Primary</v-btn>

    <v-btn icon color="pink">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component
  export default class Vuejsonpretty extends Vue {
    test = 'test';
    mydata = [1, 2, 3];
  }
</script>