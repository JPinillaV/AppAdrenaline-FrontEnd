import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../interfaces/cliente.interface';
import { Post } from '../interfaces/post.interface';
import { PostService } from '../service/post.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-user-profile-post',
  templateUrl: './user-profile-post.component.html',
  styleUrls: ['./user-profile-post.component.css'],
})
export class UserProfilePostComponent implements OnInit {
  userLogado: Cliente | undefined;
  isLogged: boolean;
  arrPost: Post[];
  user: Cliente | undefined;
  idUser: number = 0;
  constructor(
    private clientesService: ClientesService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrPost = [];
    this.isLogged = true;
  }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(async (params) => {
      this.user = await this.clientesService.getUserById(Number(params['id']));
      this.arrPost = await this.postService.getPostById(Number(params['id']));
      this.idUser = Number(params['id']);
      console.log(this.arrPost);

      const helper = new JwtHelperService();

      if (localStorage.getItem('token_adrenaline')) {
        let token = localStorage.getItem('token_adrenaline');
        const decodedToken = helper.decodeToken(token!);

        if (decodedToken.usuarioId === this.idUser) {
          this.isLogged = true;
        } else {
          this.isLogged = false;
        }
      }
    });
  }

  isVideo(url: any): boolean {
    if (url.split('.')[1] === 'mp4') {
      return true;
    }
    return false;
  }
}
