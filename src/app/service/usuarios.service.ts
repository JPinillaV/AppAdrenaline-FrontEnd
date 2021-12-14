import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private baseUrl: string;
  private login$: Subject<boolean>;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/';
    this.login$ = new Subject();
  }

  register(formValues: any) {
    // return this.httpClient.post(`${this.baseUrl}/registro`, formValues).toPromise();
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}users/create`, formValues)
    );
  }
  update(formValues: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token_adrenaline')!,
      }),
    };
    // return this.httpClient.post(`${this.baseUrl}/registro`, formValues).toPromise();
    return firstValueFrom(
      this.httpClient.post<any>(
        `${this.baseUrl}clientes/update`,
        formValues,
        options
      )
    );
  }

  login(formValues: any): Promise<any> {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}users/login`, formValues)
    );
  }
  //emitimos el observable
  logged(isLogged: boolean) {
    this.login$.next(isLogged);
  }
  //recuperamos el observable
  loginObs() {
    return this.login$.asObservable();
  }
}
