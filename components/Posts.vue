<template>
  <v-card flat>
    <v-layout row wrap>
      <v-flex v-for="(title, index) in titles" :key="index">
        <v-card flat hover class="white pb-2 mb-1 pl-2">
          <v-layout>
            <v-flex xs10>
              <div class="py-2">{{ title.body }}</div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  // import axios from 'axios';
  // import * as postsList from './posts.json';

  @Component
  export default class Posts extends Vue {
    titles = [
      {body: 'post 1'},
      {body: 'post 2'},
      {body: 'post 3'},
      ];
  }
</script>