import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './interfaces/cliente.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/clientes';
  }

  getUser(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token_adrenaline')!,
      }),
    };
    return firstValueFrom(
      this.httpClient.get<any>(this.baseUrl + '/profile', httpOptions)
    );
  }

  getAll(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token_adrenaline')!,
      }),
    };
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl, httpOptions));
  }
  create(formValues: Cliente): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token_adrenaline')!,
      }),
    };
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, formValues, httpOptions)
    );
  }
}
