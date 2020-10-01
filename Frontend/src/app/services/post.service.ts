import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { formatDate } from '@angular/common';

import { Post } from '../interfaces/Post';
import { Observable } from 'rxjs';
import { fileItem } from '../pages/uploads/models/itemFile';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL = environment.server;

  URI = this.URL+'/posts';
  URIV = this.URL;

  constructor(private http: HttpClient) { }

  createImages(title: string, description: string, files: FileList, tipo: string){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('tipo', tipo);
    for (let i = 0; i < files.length; i++) {
      fd.append('files', files[i])
    }
    return this.http.post(this.URIV+'/uploads/images', fd);
  }

  createVideo(title: string, description: string, file: File, tipo: string){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('file', file);
    fd.append('tipo', tipo);
    return this.http.post(this.URIV+'/uploads/videos', fd);
  }

  getPosts(): Observable<Post[]> {
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
