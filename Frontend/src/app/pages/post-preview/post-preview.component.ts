import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';

import { Post } from '../../interfaces/Post';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {

  id: string;
  post: Post;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {  
    this.activeRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.postService.getPost(this.id)
          .subscribe(
          res => {
            this.post = res;
          },
          error => console.log(error)
          )
    });
  }

  deletePost(id: string){
    this.postService.deletePost(id)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/post']);
        },
        error => console.log(error)
      )
  }
}
