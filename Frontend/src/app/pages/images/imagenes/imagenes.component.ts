import { Component, OnInit } from '@angular/core';

import { PostService } from '../../../services/post.service';
import {Router, Route} from '@angular/router';

import { Post } from '../../../interfaces/Post';
import { asap } from 'rxjs/internal/scheduler/asap';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  posts = [];
  images: string[] = [];
  imge: string;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(
        (res: Post[]) => {
          var j = 0;
          for(let i=0; i<res.length; i++){
            if(res[i].tipo == "images"){
              this.posts[j] = res[i];
              j = j+1;
            }
          }
        },
        err => console.log(err)
      )
  }
}
