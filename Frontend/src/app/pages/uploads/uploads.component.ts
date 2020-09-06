import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';
import { fileItem } from './models/itemFile';

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


  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onFileSelect(event: HtmlInputEvent): void{

    if(event.target.files && event.target.files[0] ){
      this.file = <File>event.target.files[0];
      const reader =  new FileReader();
      reader.onload = e => this.fileSelected = reader.result;
      reader.readAsDataURL(this.file);
      console.log(this.file)
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
      this.postService.createVideo(title.value, description.value, this.file)
      .subscribe(res => console.log(res), err => console.log(err) )
    }else{
      console.log(this.multipleFile)
      this.postService.createImages(title.value, description.value, this.multipleFile)
      .subscribe(res => console.log(res), err => console.log(err) )
    }
      return false;
  }

  botton(event: HtmlInputEvent){
    var plus = document.getElementById('plus');
    plus.classList.toggle('plus--active');
  }

}
