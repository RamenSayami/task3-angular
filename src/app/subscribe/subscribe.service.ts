import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { }

  sendSubscribeRequest(emailStr: string) {
    return this.http.get('http://localhost:8080/'+emailStr);
  }
}
