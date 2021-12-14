import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private usuariosservice: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      repeat_password: new FormControl(),
      email: new FormControl(),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    this.usuariosservice
      .register(this.formulario.value)
      .then((response) => {
        if (response.id) {
          this.router.navigate(['/login']);
        }
      })
      .catch((err) => console.log(err));
  }
}
