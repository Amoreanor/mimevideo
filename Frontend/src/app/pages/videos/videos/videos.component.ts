import { Component, OnInit } from '@angular/core';

import { PostService } from '../../../services/post.service';
import {Router} from '@angular/router';

import { Post } from '../../../interfaces/Post';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  URL = environment.server;
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
    this.router.navigate(['/videos', id]);
  }

}
