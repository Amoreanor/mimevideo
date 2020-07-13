import { Component, OnInit, Input, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {

  @Input('datos') post: Post;
  @ViewChildren('video') video: QueryList<ElementRef>;

  constructor(private router: Router) { 
  }

  ngOnInit() {

  }

  selectedCard(id: string){
    this.router.navigate(['/post', id]);
  }
  ngAfterViewInit() {
    console.log(this.post.url);
    this.video.toArray().forEach((item) => {
        
        console.log(item.nativeElement)
    });
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
