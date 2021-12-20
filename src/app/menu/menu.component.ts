import { Component, OnInit } from '@angular/core';
import {
  faHeart,
  faHome,
  faPlusCircle,
  faSearch,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../interfaces/cliente.interface';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  title = 'my-AppAdrenaline';
  userLogado: Cliente | undefined;
  /*Agregar las siguientes líneas*/
  faHome = faHome;
  faSearch = faSearch;
  faPlusCircle = faPlusCircle;
  faHeart = faHeart;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;

  constructor(private clientesService: ClientesService) {}

  async ngOnInit(): Promise<void> {
    this.userLogado = await this.clientesService.getUser();
  }
}
