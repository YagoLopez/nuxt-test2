<template>
  <v-card flat>
    <v-layout row wrap>
      <v-flex v-for="(post, index) in posts" :key="index">

        <!--todo: hacer post component-->
        <client-only>
          <v-card hover max-width="344" class="mx-auto">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ post.title }}</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"/>
          <v-card-text>{{ post.body }}</v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4">Read</v-btn>
            <v-btn text color="deep-purple accent-4">Bookmark</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn>
          </v-card-actions>
        </v-card>
        </client-only>

      </v-flex>
    </v-layout>
    <infinite-loading spinner="spiral" @infinite="infiniteScroll"/>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import axios from 'axios';

  @Component
  export default class Posts extends Vue {

    // todo: improve posts and post type
    // todo: create post repository for separation of concerns
    posts: Object[] = [];
    page: number = 1;

    get url() {
      return `https://jsonplaceholder.typicode.com/posts?_page=${this.page}`;
    }

    async fetchData() {
        const response = await axios.get(this.url);
        this.posts = response.data;
        // console.log('this.posts', this.posts);
        console.log('this.page', this.page);
        console.log('this.url', this.url);
    }

    created() {
      this.fetchData();
    }

    infiniteScroll($state: any) {
      setTimeout(() => {
        this.page++;
        axios.get(this.url)
          .then((response) => {
            if (response.data.length > 1) {
              response.data.forEach((item: any) => this.posts.push(item));
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