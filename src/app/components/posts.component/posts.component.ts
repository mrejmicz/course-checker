import { Component, OnInit } from '@angular/core';

import { Post } from '../../model/post';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'my-posts',
  templateUrl: './posts.component.html'
})

export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getPosts().then(posts => this.posts = posts);

  }

}
