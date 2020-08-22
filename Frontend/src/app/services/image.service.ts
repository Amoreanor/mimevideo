import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) { }

    public generateImages(videoFile: Blob, duration: number): Promise<string> {
        const video: HTMLVideoElement = this.document.createElement('video');
        const canvas: HTMLCanvasElement = this.document.createElement('canvas');
        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        return new Promise<string>((resolve, reject) => {
          canvas.addEventListener('error',  reject);
          video.addEventListener('error',  reject);
          video.addEventListener('loadeddata', event => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            video.currentTime = video.duration * (duration/100);
          });
          video.addEventListener('seeked', event => {
            context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
            resolve(canvas.toDataURL());
          });
          if (videoFile.type) {
            video.setAttribute('type', videoFile.type);
          }
          video.preload = 'auto';
          video.src = window.URL.createObjectURL(videoFile);
          video.load();
        });
    }

}