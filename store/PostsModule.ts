import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators';
import axios from 'axios';

type PostEntity = any;

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

@Module({
  name: 'PostsModule',
  namespaced: true,
  stateFactory: true,
})
export default class PostsModule extends VuexModule {

  private _posts: PostEntity[] = [];
  private _page: number = 1;

  get posts() {
    return this._posts;
  }

  get url(): string {
    return `${BASE_URL}?_page=${this._page}`
  }

  @Mutation
  setPosts(posts: PostEntity[]) {
    this._posts = posts;
  }

  @Mutation
  incrementPage() {
    this._page = this._page + 1;
  }

  @Action
  async fetchPosts() {
    try {
      const {data} = await axios.get(this.url);
      this.setPosts(data);
      this.incrementPage();
    } catch (e) {
      console.error(e);
    }
  }
}