import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  file: File;
  fileSelected:string | ArrayBuffer;
  

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onFileSelect(event: HtmlInputEvent): void{
    const video = document.querySelector("#video");

    if(event.target.files && event.target.files[0] ){
      this.file = <File>event.target.files[0];
      const reader =  new FileReader();
      reader.onload = e => this.fileSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadFile(title: HTMLInputElement, description: HTMLTextAreaElement): boolean{
    this.postService.createPots(title.value, description.value, this.file)
      .subscribe(res => console.log(res), err => console.log(err) )
      return false;
  }
}
