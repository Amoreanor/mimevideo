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

    if(event.target.files && event.target.files[0] ){
      this.file = <File>event.target.files[0];
      const reader =  new FileReader();
      reader.onload = e => this.fileSelected = reader.result;
      reader.readAsDataURL(this.file);
      console.log(this.file)
    }
  }

  uploadFile(title: HTMLInputElement, description: HTMLTextAreaElement): boolean{
    if(this.file.type == "video/mp4"){
      console.log('Entro a video')
      this.postService.createVideo(title.value, description.value, this.file)
      .subscribe(res => console.log(res), err => console.log(err) )
    }else{
      console.log('Entro a imagen: '+this.file)
      this.postService.createImages(title.value, description.value, this.file)
      .subscribe(res => console.log(res), err => console.log(err) )
    }
    
      return false;
  }

  botton(event: HtmlInputEvent){
    var plus = document.getElementById('plus');
    plus.classList.toggle('plus--active');
    
  }

}
