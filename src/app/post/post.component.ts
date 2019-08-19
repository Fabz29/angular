import {Component, OnInit, Input} from '@angular/core';
import {Post} from '../post';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
  }

  like() {
    this.post.addLike();
  }

  disLike() {
    this.post.addDislike();
  }

  onRemovePost(post: Post) {
    this.postService.removePost(post);
  }
}
