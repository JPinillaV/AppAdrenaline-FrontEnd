import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/interfaces/cliente.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogado: Cliente | undefined;
  formulario: FormGroup;
  error: string;
  constructor(
    private usuariosService: UsuariosService,
    private clientesService: ClientesService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
    this.error = '';
  }

  async ngOnInit(): Promise<void> {}

  onSubmit() {
    this.error = '';
    this.usuariosService
      .login(this.formulario.value)
      .then(async (response) => {
        if (response.error) {
          this.error = response.error;
        } else {
          localStorage.setItem('token_adrenaline', response.token);
          this.userLogado = await this.clientesService.getUser();
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Welcome ' + this.userLogado?.nombre,
            showConfirmButton: false,
            timer: 1500,
          });
          // alert('Login correcto!!');
          this.usuariosService.logged(true);
          this.router.navigate(['/home']);
        }
      })
      .catch((err) => console.log(err));
  }
}
