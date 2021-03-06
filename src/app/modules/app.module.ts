import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from '../components/app.component/app.component';
import { PostsComponent } from '../components/posts.component/posts.component';
import { UsersComponent } from '../components/users.component/users.component';
import { UserDetailComponent } from '../components/user-detail.component/user-detail.component';
import { PostDetailComponent } from '../components/post-detail.component/post-detail.component';
import { CurrenciesComponent } from '../components/currencies.component/currencies.component';

import { DataService } from '../services/data.service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ DataService ],
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    UserDetailComponent,
    PostDetailComponent,
    CurrenciesComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
