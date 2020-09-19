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
  images2 = [];

  constructor(
    private router: Router,
    private postService: PostService,
    private imageService: ImageService
  ) {
  }

  async ngOnInit() {
    if(this.post.tipo == 'images'){
      this.listarimagenes(this.post.url);
    }
    if(this.post.tipo == 'video'){
      const videoBlob = await this.createVideoBlob(this.post.url);
      this.generateListImages(videoBlob);
    }
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
    let image = this.post.url;
      for(let i = 1; i <= 3; i++) {
        const list = image.split('\\');
        const urlimg = list[0]+'\\thumbail\\'+list[1].slice(0,-4)+'_'+i+'.png';
        images.push(urlimg);
      }
    this.images = images;
  }

  listarimagenes(url: string){
    const lista = url.split(',');
    let lista2 = [];

    for(let i = 0; i<3;i++){
      if(lista[i] === undefined){}
      else{
        const url = lista[i];
        lista2.push(url);
      }
    }
    this.images2 = lista2;
  }

  selectedCard(id: string, tipo: string) {
    if(tipo == 'video'){
      console.log('video: '+tipo)
      this.router.navigate(['/post', id]);}

    if(tipo == 'images'){
      console.log('images: '+tipo)
      this.router.navigate(['/imagenes', id]);}
  }

}
