import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-user-logado',
  templateUrl: './user-logado.component.html',
  styleUrls: ['./user-logado.component.css'],
})
export class UserLogadoComponent implements OnInit {
  userLogado: Cliente | undefined;
  constructor(private clientesService: ClientesService) {}

  async ngOnInit(): Promise<void> {
    this.userLogado = await this.clientesService.getUser();
  }
}
