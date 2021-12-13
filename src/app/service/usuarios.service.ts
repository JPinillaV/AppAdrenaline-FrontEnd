import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api';
  }
  register(formValues: any) {
    // return this.httpClient.post(`${this.baseUrl}/registro`, formValues).toPromise();
    return firstValueFrom(
      this.httpClient.post(`${this.baseUrl}/create`, formValues)
    );
  }
}
