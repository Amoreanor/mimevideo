import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { formatDate } from '@angular/common';

import { Post } from '../interfaces/Post';
import { Observable } from 'rxjs';
import { fileItem } from '../pages/uploads/models/itemFile';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URI = 'http://localhost:3000/posts';
  URIV = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createImages(title: string, description: string, files: FileList){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    for (let i = 0; i < files.length; i++) {
      fd.append('files', files[i])
    }
    return this.http.post(this.URIV+'/uploads/images', fd);
  }

  createVideo(title: string, description: string, file: File){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('file', file);
    return this.http.post(this.URIV+'/uploads/videos', fd);
  }

  getPosts(): Observable<Post[]> {
    //const urlblob = "";
    return this.http.get<Post[]>(this.URI);
  }

  getVideo(id: string){
    let headers = new HttpHeaders();
    return this.http.get(`${this.URIV}/${id}`, {
      headers: headers,
      responseType: "arraybuffer"
    });
  }

  getPost(id: string){
    return this.http.get<Post>(`${this.URI}/${id}`);
  }

  deletePost(id: string){
    return this.http.delete(`${this.URI}/${id}`);
  }
}
