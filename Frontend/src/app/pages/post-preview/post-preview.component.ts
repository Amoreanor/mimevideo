import videojs from 'video.js';
import { Component, ElementRef, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post } from '../../interfaces/Post';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostPreviewComponent implements OnDestroy, AfterViewInit {
  @ViewChild('target', { static: false }) target: ElementRef;

  id: string;
  post: Post;
  options: {
    fluid: boolean,
    aspectRatio: string,
    autoplay: boolean,
    sources: {
        src: string,
        type: string,
    }[],
  };

  player: videojs.Player;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngAfterViewInit() {
    const video = window.document.getElementById('target');
    console.log(this.target);
    console.log(video);
    this.activeRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.postService.getPost(this.id)
          .subscribe(
          res => {
            this.post = res;
            this.options = {
              fluid: true,
              aspectRatio: '16:9',
              autoplay: false,
              sources: [{
                  src: 'http://localhost:3000/'+ this.post.url,
                  type: 'video/mp4',
              }]
            };
            this.player = videojs(this.target.nativeElement, this.options, () => {
              console.log('onPlayerReady', this);
            });
          },
          error => console.log(error)
          )
    });
  }

  ngOnDestroy() {
    // destroy player - elimina el proceso del DOM del this.player
    if (this.player) {
      this.player.dispose();
    }
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
