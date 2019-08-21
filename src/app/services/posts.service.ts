import {Injectable} from '@angular/core';
import {Post} from '../post';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on('value', (data: DataSnapshot) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  getPost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  addPost(post: Post) {
    post.id = this.posts.find[(this.posts.length - 1)] ? this.posts.find[(this.posts.length - 1)].id + 1 : 0;
    this.posts.push(post);
    this.savePosts();
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
    this.savePosts();
    this.emitPosts();
  }

  addLike(post: Post) {
    post.numberLike++;
    this.savePosts();
    this.emitPosts();
  }

  addDislike(post: Post) {
    post.numberDislike++;
    this.savePosts();
    this.emitPosts();
  }

}
