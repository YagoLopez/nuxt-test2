<template>
  <v-flex>
    <v-container fluid grid-list-lg class="mt-5">
      <posts/>
    </v-container>
  </v-flex>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import Posts from '../components/Posts.vue';

  @Component({components: {posts: Posts}})
  export default class InfiniteScroll extends Vue {
  }
</script>