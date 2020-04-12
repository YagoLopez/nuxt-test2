<template>
  <v-flex>
    <v-container fluid grid-list-lg class="mt-5">
      <client-only>
        <posts/>
      </client-only>
    </v-container>
  </v-flex>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import Posts from '../components/posts/Posts.vue';

  @Component({components: {posts: Posts}})
  export default class InfiniteScroll extends Vue {
  }
</script>