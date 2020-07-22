import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service'
import {Router, Route} from '@angular/router'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(
        (res: any) => {
          this.posts = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string){
    this.router.navigate(['/post', id]);
  }
}
