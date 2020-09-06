import { Directive, Input, Output, EventEmitter, Host, HostListener } from '@angular/core';
import { fileItem } from '../models/itemFile';
import { validator } from '../helpers/validator';

@Directive({
  selector: '[appUploadsfile]'
})
export class UploadsfileDirective extends validator {

  @Input() files: fileItem[] = [];
  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();

  @HostListener('dragover', ['$event'])
  onDragEnter(event: any){
      this.preventAndStop(event);
      this.mouseOver.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(){
      this.mouseOver.emit(false);
  }

  @HostListener('drop', ['$event'])
  onDrop(event: any){
    const dataTransfer = this.getDataTransfer(event);
    if(!dataTransfer){
      return;
    }

    this.preventAndStop(event);
    this.extractFile(dataTransfer.files);
    this.mouseOver.emit(false)
  }

  private getDataTransfer(event: any){
    return event.dataTransfer
    ? event.dataTransfer
    : event.originalEvent.dataTransfer
  }

  private extractFile(fileList: FileList):void{
    for(let property in Object.getOwnPropertyNames(fileList)){
      const tempFile = fileList[property];
      if (this.canBeUploaded(tempFile)){
        const newFile = new fileItem(tempFile);
        this.files.push(newFile);
      }
    }
  }

  private canBeUploaded(file: File): boolean{
    if(!this.checkDropped(file.name, this.files) && this.validateType(file.type)){
      return true;
    }else {
      return false;
    }
  }

  private preventAndStop(event: any): void{
    event.preventDefault();
    event.stopPropagation();
  }

}
