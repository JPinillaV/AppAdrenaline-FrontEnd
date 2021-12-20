import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faHeart,
  faHome,
  faPlusCircle,
  faSearch,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../interfaces/cliente.interface';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isLogged: boolean;
  title = 'my-AppAdrenaline';
  userLogado: Cliente | undefined;
  /*Agregar las siguientes líneas*/
  faHome = faHome;
  faSearch = faSearch;
  faPlusCircle = faPlusCircle;
  faHeart = faHeart;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {
    this.isLogged = true;
  }

  async ngOnInit(): Promise<void> {
    this.userLogado = await this.clientesService.getUser();
    if (localStorage.getItem('token_gym')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    // Suscripción para saber si se hace login o logout
    this.clientesService.loginObs().subscribe((result) => {
      console.log('Acción de LOGIN: ', result);
      this.isLogged = result;
    });
  }
  onClickLogout() {
    Swal.fire({
      title: this.userLogado?.nombre + '  you logout! ',
      text: 'We are going to miss you!',
      icon: 'warning',

      confirmButtonColor: '#3085d6',
    });
    // const seguro = confirm(
    //   '¿Estás seguro de que quieres abandonar la aplicación?'
    // );

    if (true) {
      localStorage.removeItem('token_adrenaline');

      this.clientesService.logged(false);
      this.router.navigate(['/login']);
    }
  }
}
