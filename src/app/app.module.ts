import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { StoriesComponent } from './stories/stories.component';
import { PostsComponent } from './posts/posts.component';
import { UserLogadoComponent } from './user-logado/user-logado.component';
import { UserProfilePostComponent } from './user-profile-post/user-profile-post.component';
import { PresentationComponent } from '../app/components/presentation/presentation.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MenuComponent,
    StoriesComponent,
    PostsComponent,
    UserLogadoComponent,
    UserProfilePostComponent,
    PresentationComponent,
    CreatePostComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
