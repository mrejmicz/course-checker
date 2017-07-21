import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from '../components/app.component/app.component';
import { PostsComponent } from '../components/posts.component/posts.component';
import { UsersComponent } from '../components/users.component/users.component';
import { UserDetailComponent } from '../components/user-detail.component/user-detail.component';

import { DataService } from '../services/data.service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/:id',
        component: UserDetailComponent
      }
    ])
  ],
  providers: [ DataService ],
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    UserDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
