import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../clientes.service';
import { Cliente } from '../interfaces/cliente.interface';

import { Post } from '../interfaces/post.interface';
import { LikesService } from '../service/likes.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  userLogado: Cliente | undefined;
  numero: any = 300;
  arrlike: any[];
  arrPost: any[];
  constructor(
    private postService: PostService,
    private likesService: LikesService,
    private clientesService: ClientesService
  ) {
    this.arrlike = [];
    this.arrPost = [];
  }

  async ngOnInit(): Promise<void> {
    this.arrPost = await this.postService.getAll();
    this.arrlike = await this.likesService.getlikesById();
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
