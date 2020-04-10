<template>
  <v-card flat>
    <v-layout row wrap>
      <v-flex v-for="(title, index) in titles" :key="index">
<!--
        <v-card hover class="white pb-2 mb-1 pl-2">
          <v-layout>
            <v-flex xs10>
              <div class="py-2">{{ title.body }}</div>
            </v-flex>
          </v-layout>
        </v-card>
-->
        <v-card max-width="344" class="mx-auto">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ title.title }}</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"/>

          <v-card-text>{{ title.body }}</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">Read</v-btn>
            <v-btn text color="deep-purple accent-4">Bookmark</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>
    <infinite-loading
      spinner="spiral"
      @infinite="infiniteScroll"
    ></infinite-loading>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import axios from 'axios';

  @Component
  export default class Posts extends Vue {

    titles: Object[] = [];
    page: number = 1;

    get url() {
      return "https://jsonplaceholder.typicode.com/posts?_page=" + this.page;
    }

    async fetchData() {
        const response = await axios.get(this.url);
        this.titles = response.data;
        console.log('this.titles', this.titles);
        console.log('this.page', this.page);
        console.log('this.url', this.url);
    }

    created() {
      this.fetchData();
    }

    infiniteScroll($state: any) {
      setTimeout(() => {
        this.page++;
        // todo: use async/await
        axios.get(this.url)
          .then((response) => {
            if (response.data.length > 1) {
              response.data.forEach((item: any) => this.titles.push(item));
              $state.loaded();
            } else {
              $state.complete()
            }
          })
          .catch((err) => {console.log(err)})
      }, 500)
    }
  }
</script>