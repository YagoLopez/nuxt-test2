<template>
  <v-flex>
    <v-container fluid grid-list-lg class="mt-5">

      <client-only>
        <v-card flat>
          <v-layout row wrap>
            <v-flex v-for="(post, index) in posts" :key="index">
              <!--todo: hacer post component-->
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
            </v-flex>
          </v-layout>
          <infinite-loading spinner="spiral" @infinite="infiniteHandler"/>
        </v-card>
      </client-only>

    </v-container>
  </v-flex>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import axios from 'axios';


  @Component
  export default class InfiniteScroll extends Vue {

    posts: any = [];
    page: number = 1;

    get url() {
      return `https://jsonplaceholder.typicode.com/posts?_page=${this.page}`;
    }

    infiniteHandler($state) {
      axios.get(this.url)
        .then(response => {
        if (response.data.length > 1) {
          this.page += 1;
          // debugger
          this.posts.push(...response.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    }
  }
</script>