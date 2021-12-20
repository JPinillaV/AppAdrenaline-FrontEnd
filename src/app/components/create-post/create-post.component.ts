import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  formulario: FormGroup;
  files: any;
  user: Cliente | undefined;
  constructor(
    private clientesService: ClientesService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.formulario = new FormGroup({});
  }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(async (params) => {
      this.user = await this.clientesService.getUserById(Number(params['id']));
    });
  }

  onSubmit() {
    let formdata = new FormData();
    console.log(this.files[0]);
    formdata.append('idTypePost', '1');
    formdata.append('photoPost', this.files[0]);

    this.postService
      .create(formdata)
      .then((response) => {
        if (response) {
          this.router.navigate(['/home']);
        }
      })
      .catch((err) => console.log(err));
  }
  onChange($event: any): any {
    this.files = $event.target.files;
  }
}
