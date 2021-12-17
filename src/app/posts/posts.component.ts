import { Component, OnInit } from '@angular/core';

import { Post } from '../interfaces/post.interface';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  numero: number = 300;

  arrPost: any[];
  constructor(private postService: PostService) {
    this.arrPost = [];
  }

  async ngOnInit(): Promise<void> {
    this.arrPost = await this.postService.getAll();
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
