import { Component, OnInit } from '@angular/core';

import {
  faHeart,
  faHome,
  faPlusCircle,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/interfaces/cliente.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  numero: number = 300;
  arrClientes: Cliente[];
  faHome = faHome;
  faSearch = faSearch;
  faPlusCircle = faPlusCircle;
  faHeart = faHeart;
  faUser = faUser;
  userLogado: Cliente | undefined;
  constructor(private clientesService: ClientesService) {
    this.arrClientes = [];
  }

  async ngOnInit(): Promise<void> {
    this.arrClientes = await this.clientesService.getAll();
    this.userLogado = await this.clientesService.getUser();
  }
  scoreLikes() {
    this.numero += 1;
  }

  isVideo(url: any): boolean {
    if (url.split('.')[1] === 'mp4') {
      return true;
    }
    return false;
  }
}
