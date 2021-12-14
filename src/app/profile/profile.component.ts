import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from '../clientes.service';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  formulario: FormGroup;
  files: any;
  constructor(
    private usuariosservice: UsuariosService,
    private clientesService: ClientesService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      textProfile: new FormControl(),
    });
  }

  async ngOnInit(): Promise<void> {
    const user = await this.clientesService.getUser();
    this.formulario = new FormGroup({
      nombre: new FormControl(user.nombre),
      username: new FormControl(user.username),
      email: new FormControl(user.email),
      textProfile: new FormControl(user.textProfile),
    });
  }
  onSubmit() {
    let formdata = new FormData();
    formdata.append('id', this.files.id);
    formdata.append('photo', this.files[0]);
    formdata.append('nombre', this.formulario.value.nombre);
    formdata.append('username', this.formulario.value.username);
    formdata.append('email', this.formulario.value.email);
    this.usuariosservice
      .update(formdata)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
  onChange($event: any): any {
    this.files = $event.target.files;
  }
}
