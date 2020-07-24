import { Component, OnInit, Input, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { Router } from '@angular/router';
import { Url } from 'url';
import { PostService } from 'src/app/services/post.service'
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {

  @Input('datos') post: Post;
  //@ViewChildren('cardsvideo') video: QueryList<ElementRef>;
  videos: string[] = [];
  srcVideo: SafeUrl;

  constructor(
    private router: Router, 
    private postService: PostService,
    private sanitizer: DomSanitizer
    ) { 
  }

  ngOnInit() {
    for (let i = 0; this.videos.length < 2; i++)
    {
      this.videos.push(this.post.url);
      //console.log(this.post);
    }

    const id = this.videos[0];
    this.postService.getVideo(id)
      .subscribe((res : any) => {
        const blob = new Blob([res]);
        const urlblob = URL.createObjectURL(blob);

        this.srcVideo = this.sanitizer.bypassSecurityTrustResourceUrl(urlblob) ;

        //URL.revokeObjectURL(urlblob)
        console.log(this.srcVideo);
      },
      err => console.log(err));
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  selectedCard(id: string){
    this.router.navigate(['/post', id]);
  }
  ngAfterViewInit() {
    //console.log(this.post.url);

    //console.log(this.video);

    //this.video.toArray().forEach((item) => {
        
        //console.log(item.nativeElement)
    //});
  }

  videoget(item){
    item.addEventListener('loadeddata', function() {
      if (!isNaN(item.duration)) {
        var rand = Math.round(Math.random() * item.duration * 1000) + 1;
        item.currentTime = rand / 1000;
      }
    }, false);
  }

  getRandom(): number {
    return Math.random();
  }

}
