import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;
  constructor(private usuariosservice: UsuariosService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    // this.usuariosservice
    //   .register(this.formulario.value)
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  }
}
