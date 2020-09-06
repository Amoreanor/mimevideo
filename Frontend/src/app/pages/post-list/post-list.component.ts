import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';
import {Router, Route} from '@angular/router';

import { Post } from '../../interfaces/Post';

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
        (res: Post[]) => {
          var j = 0;
          for(let i=0; i<res.length; i++){
            if(res[i].tipo == "video"){
              console.log(res[i])
              this.posts[j] = res[i];
              j = j+1;
            }
          }
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string){
    this.router.navigate(['/post', id]);
  }
}
