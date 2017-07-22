import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { DataService } from '../../services/data.service';
import { Post } from '../../model/post';

@Component ({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html'
})


export class PostDetailComponent implements OnInit {
post: Post;

constructor (
  private dataService: DataService,
  private route: ActivatedRoute,
  private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getPost(+params.get('id')))
      .subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }

}
