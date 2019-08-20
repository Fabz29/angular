import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../post';
import {PostsService} from '../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.postList = posts;
      });

    this.postService.emitPosts();
  }

}
