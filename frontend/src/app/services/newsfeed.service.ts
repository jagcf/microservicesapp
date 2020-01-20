import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {
  rooturl: any;
  constructor(private http: HttpClient) {
    this.rooturl = `http://${environment.rootUrlHost}:${environment.rootUrlPort}`  
   }

   getTopNews(){
    return this.http.get(`${this.rooturl}/${environment.newsResource}`);
   }
}
