import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../interfaces/cliente.interface';
import { Post } from '../interfaces/post.interface';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-user-profile-post',
  templateUrl: './user-profile-post.component.html',
  styleUrls: ['./user-profile-post.component.css'],
})
export class UserProfilePostComponent implements OnInit {
  arrPost: Post[];
  user: Cliente | undefined;
  constructor(
    private clientesService: ClientesService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrPost = [];
  }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(async (params) => {
      this.user = await this.clientesService.getUserById(Number(params['id']));
      this.arrPost = await this.postService.getPostById(Number(params['id']));
      console.log(this.arrPost);
    });
  }

  isVideo(url: any): boolean {
    if (url.split('.')[1] === 'mp4') {
      return true;
    }
    return false;
  }
}
