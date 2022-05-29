import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;
  getAll() {
    return this.http.get(this.baseUrl + 'messages');
  }

  getById(id: number) {
    return this.http.get(this.baseUrl + `message/${id}`);
  }

}
