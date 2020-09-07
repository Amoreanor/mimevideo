import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';

import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-cardimg',
  templateUrl: './cardimg.component.html',
  styleUrls: ['./cardimg.component.css']
})
export class CardimgComponent implements OnInit {
  @Input('datos') post: Post;
  images = [];

  constructor(
    private router: Router,
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.listarimagenes(this.post.url);
  }

  selectedCard(id: string) {
      this.router.navigate(['/post', id]);
  }

  listarimagenes(url: string){
    this.images = url.split(',');
  }

}
