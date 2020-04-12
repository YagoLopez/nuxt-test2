import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators';
import axios from 'axios';

type PostEntity = any;

@Module({
  name: 'PostModule',
  namespaced: true,
  stateFactory: true,
})
export default class PostModule extends VuexModule {

  posts: PostEntity[] = [];
  test = 'test';

  get totalComments (): number {
    return this.posts.filter((post) => {
      // Take those posts that have comments
      return post.comments && post.comments.length;
    }).reduce((sum, post) => {
      // Sum all the lengths of comments arrays
      return sum + post.comments.length;
    }, 0)
  }

  @Mutation
  updatePosts(posts: PostEntity[]) {
    this.posts = posts;
  }

  // @Action({commit: 'updatePosts'})
  // async function fetchPosts() {
  //   return await axios.get('https://jsonplaceholder.typicode.com/posts')
  // }


  @Action
  async fetchPosts() {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=1');
    this.context.commit('updatePosts', posts);
  }
}