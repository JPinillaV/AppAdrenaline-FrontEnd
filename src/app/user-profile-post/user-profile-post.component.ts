import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-user-profile-post',
  templateUrl: './user-profile-post.component.html',
  styleUrls: ['./user-profile-post.component.css'],
})
export class UserProfilePostComponent implements OnInit {
  arrPost: Post[];
  constructor(private postService: PostService) {
    this.arrPost = [];
  }

  async ngOnInit(): Promise<void> {
    this.arrPost = await this.postService.getPostById();
  }

  isVideo(url: any): boolean {
    if (url.split('.')[1] === 'mp4') {
      return true;
    }
    return false;
  }
}
