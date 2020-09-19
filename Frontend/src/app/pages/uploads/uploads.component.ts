import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';
import { fileItem } from './models/itemFile';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  files: FileList;
  isOverDrop = false;

  file: File ;
  multipleFile: FileList;
  fileSelected:string | ArrayBuffer;
  tipo: string;


  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onFileSelect(event: HtmlInputEvent): void{

    if(event.target.files && event.target.files[0] ){
      this.file = <File>event.target.files[0];
      const reader =  new FileReader();
      reader.onload = e => this.fileSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  onMultipleFileSelect(event: HtmlInputEvent): void{
    const files = event.target.files;
    if(event.target.files && event.target.files ){
      this.multipleFile = event.target.files;
    }
  }


  uploadFile(title: HTMLInputElement, description: HTMLTextAreaElement): boolean{
    if(this.file != undefined && this.file.type === "video/mp4"){
      console.log('Entro a video')
      this.tipo = 'video';
      this.postService.createVideo(title.value, description.value, this.file,  this.tipo)
      .subscribe(res => console.log(res), err => console.log(err) )
    }else{
      console.log('Entro a Imagenes')
      this.tipo = 'images';
      this.postService.createImages(title.value, description.value, this.multipleFile, this.tipo)
      .subscribe(res => console.log(res), err => console.log(err) )
    }
      return false;
  }

  botton(event: HtmlInputEvent){
    var plus = document.getElementById('plus');
    plus.classList.toggle('plus--active');
  }

}
