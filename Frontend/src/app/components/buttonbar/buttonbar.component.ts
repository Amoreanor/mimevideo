import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service'
import { Router } from '@angular/router';

import {Post} from '../../interfaces/Post';

@Component({
  selector: 'app-buttonbar',
  templateUrl: './buttonbar.component.html',
  styleUrls: ['./buttonbar.component.css']
})
export class ButtonbarComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  posts: Post[];

  ngOnInit() {
    let obs = this.postService.getPosts();
    obs.subscribe(
      (res : Post[]) => {
        this.posts = res;
      },
      err => console.log(err)
    )
  }

  selectedCard(id: string){}

}
