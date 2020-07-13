import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { PostService } from '../../services/post.service'
import {Router, Route} from '@angular/router'

import {PostComponent} from '../new/post/post.component';

import {Post} from '../../interfaces/Post';
import { Url } from 'url';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit, AfterViewInit {

  posts: Post[]; 

  @ViewChildren(PostComponent)
  news: QueryList<PostComponent>;

  constructor(private postService: PostService, private router: Router) { 
    
  }

  ngOnInit() {
    const data = 'some text';
    
    this.postService.getPosts()
      .subscribe(
        res => {
          const blob = new Blob();
          this.posts = <Post[]>res;
        },
        err => console.log(err)
      )
  }

  ngAfterViewInit() {
    
  }

  bloburl(){
  }

}
