import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'app-images-preview',
  templateUrl: './images-preview.component.html',
  styleUrls: ['./images-preview.component.css']
})
export class ImagesPreviewComponent implements OnInit {
  
  id: string;
  post: Post;
  images = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.postService.getPost(this.id)
          .subscribe(
          res => {
            this.post = res;
            this.listarimagenes(this.post.url);
          },
          error => console.log(error)
          )
    });
    
  }

  listarimagenes(url: string){
    this.images = url.split(',');
  }


}
