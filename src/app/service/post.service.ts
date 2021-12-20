import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/posts';
  }
  getAll(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token_adrenaline')!,
      }),
    };
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl, httpOptions));
  }

  create(formdata: any): Promise<any> {
    console.log(formdata);

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token_adrenaline')!,
      }),
    };
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl + '/create', formdata, httpOptions)
    );
  }

  getPostById(pId: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token_adrenaline')!,
      }),
    };
    return firstValueFrom(
      this.httpClient.get<any>(this.baseUrl + '/user/' + pId, httpOptions)
    );
  }
}
