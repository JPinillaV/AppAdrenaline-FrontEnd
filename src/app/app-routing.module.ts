import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { RegisterComponent } from './components/register/register.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { StoriesComponent } from './stories/stories.component';
import { UserLogadoComponent } from './user-logado/user-logado.component';
import { UserProfilePostComponent } from './user-profile-post/user-profile-post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'presentation', component: PresentationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'userLogado', component: UserLogadoComponent },
  { path: 'userProfile/:id', component: UserProfilePostComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'createPost/:id', component: CreatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
