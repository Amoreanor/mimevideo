import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { formatDate } from '@angular/common';

import { Post } from '../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URI = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  createPots(title: string, description: string, file: File){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('file', file);
    return this.http.post(this.URI, fd);
  }

  getPosts(){
    const urlblob = "";
    return this.http.get<Post[]>(this.URI);
  }

  getPost(id: string){
    return this.http.get<Post>(`${this.URI}/${id}`);
  }

  deletePost(id: string){
    return this.http.delete(`${this.URI}/${id}`);
  }
}
