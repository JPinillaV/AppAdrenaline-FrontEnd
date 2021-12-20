import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../interfaces/cliente.interface';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements OnInit {
  arrClientes: Cliente[];

  constructor(
    private clientesService: ClientesService,
    private postService: PostService,
    private router: Router
  ) {
    this.arrClientes = [];
  }

  async ngOnInit(): Promise<void> {
    this.arrClientes = await this.clientesService.getAll();
  }
}
