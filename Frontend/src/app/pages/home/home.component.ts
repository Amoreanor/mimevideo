import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { PostService } from '../../services/post.service'
import {Router, Route} from '@angular/router'

import {PostComponent} from '../home/post/post.component';

import {Post} from '../../interfaces/Post';
import { Url } from 'url';

@Component({
  selector: 'app-new',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  posts: Post[];

  @ViewChildren(PostComponent)
  news: QueryList<PostComponent>;

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit() {
    const data = 'some text';
    let obs = this.postService.getPosts();
    obs.subscribe(
      (res : Post[]) => {
        this.posts = res;
      },
      err => console.log(err)
    )
    }

  ngAfterViewInit() {
  }

}
