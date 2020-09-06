import { Component, OnInit, Input, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageService } from 'src/app/services/image.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('datos') post: Post;
  images: string[] = [];
  URI = 'http://localhost:3000/';

  constructor(
    private router: Router,
    private postService: PostService,
    private imageService: ImageService
  ) {
  }

  async ngOnInit() {
    const videoBlob = await this.createVideoBlob(this.post.url);
    this.generateListImages(videoBlob);
  }

  createVideoBlob(urlVideo: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
      this.postService.getVideo(urlVideo)
        .subscribe((res: any) => {
          resolve(new Blob([res]));
        });
    })
  }

  // async generateListImages(videoBlob) {
  //   const images = [];
  //   let durationList = [0, 50, 100];
  //   for(let i = 0; i < 3; i++) {
  //     let image = await this.imageService.generateImages(videoBlob, durationList[i]);
  //     images.push(image);
  //   }
  //   this.images = images;
  // }

  generateListImages(videoBlob) {
    const images = [];
    let durationList = [0, 50, 100];
    let image = this.post.url;
    for(let i = 1; i <= 3; i++) {
      const list = image.split('\\');
      const urlimg = this.URI+list[0]+'\\thumbail\\'+list[1].slice(0,-4)+'_'+i+'.png';
      images.push(urlimg);
    }
    this.images = images;
  }

  selectedCard(id: string) {
    //this.post.tipo = video
      this.router.navigate(['/post', id]);
    //

  }

}
