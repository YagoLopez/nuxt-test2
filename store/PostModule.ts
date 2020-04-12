import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators';
import axios from 'axios';

type PostEntity = any;

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const DELAY = 500;

@Module({
  name: 'PostModule',
  namespaced: true,
  stateFactory: true,
})
export default class PostModule extends VuexModule {

  posts: PostEntity[] = [];
  page: number = 1;

  get totalComments(): number {
    return this.posts.filter((post) => {
      // Take those posts that have comments
      return post.comments && post.comments.length;
    }).reduce((sum, post) => {
      // Sum all the lengths of comments arrays
      return sum + post.comments.length;
    }, 0)
  }

  get url(): string {
    return `${BASE_URL}?_page=${this.page}`
  }

  @Mutation
  setPosts(posts: PostEntity[]) {
    this.posts = posts;
  }

  @Mutation
  incrementPage() {
    this.page = this.page + 1;
  }

  @Action({commit: 'setPosts'})
  async fetchInitialPosts() {
    let result;
    try {
      result = await axios.get(this.url);
      // this.page = this.page + 1;
      // console.warn('posts', result);
    } catch (e) {
      console.error(e);
    }
    return result;
  }

  @Action
  fetchPostsNextPage($state: any) {

    if (this.page > 1) {
    }
    $state.loaded();
    alert()
  }
}