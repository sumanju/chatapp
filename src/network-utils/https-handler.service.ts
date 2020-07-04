import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpsHandlerService {

  private baseUrl = 'http://localhost:5000';
  // private baseUrl = 'https://chatapp212.herokuapp.com';

  constructor(private httpClient  : HttpClient) { }

  async requestAPI(apiName  : string, apiRequest ?:  any)  {
    return this.httpClient.post<any>(`${this.baseUrl}/${apiName}`, apiRequest).toPromise()
  }
  
}
