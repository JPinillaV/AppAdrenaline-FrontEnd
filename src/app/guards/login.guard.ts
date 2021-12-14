import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ClientesService } from '../clientes.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private clientesService: ClientesService) {}

  async canActivate() {
    if (localStorage.getItem('token_adrenaline')) {
      //comprobar si el token es correcto
      //petición sobre /api/clientes
      const response = await this.clientesService.getAll();
      if (response.error) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
}
