import {Injectable} from '@angular/core';
import {Post} from '../post';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  post1 = new Post('My First Post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  post2 = new Post('My First Post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  post3 = new Post('My First Post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

  private posts: Post[] = [this.post1, this.post2, this.post3];
  postsSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(post: Post) {
    const index = this.posts.findIndex(
      (postFound) => {
        if (post === postFound) {
          return true;
        }
      }
    );

    this.posts.splice(index, 1);
    this.emitPosts();
  }

}
