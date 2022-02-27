import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private http: HttpClient) { }

  sendConfirmEmail(requestId: number) {
    return this.http.get('http://localhost:8080/confirm/'+ requestId);
  }
}
