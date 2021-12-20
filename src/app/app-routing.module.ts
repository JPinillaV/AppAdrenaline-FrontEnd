import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { StoriesComponent } from './stories/stories.component';
import { UserLogadoComponent } from './user-logado/user-logado.component';
import { UserProfilePostComponent } from './user-profile-post/user-profile-post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  { path: 'presentation', component: PresentationComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  { path: 'stories', component: StoriesComponent, canActivate: [LoginGuard] },
  { path: 'posts', component: PostsComponent, canActivate: [LoginGuard] },
  { path: 'userLogado', component: UserLogadoComponent },
  {
    path: 'userProfile/:id',
    component: UserProfilePostComponent,
    canActivate: [LoginGuard],
  },
  { path: 'presentation', component: PresentationComponent },
  {
    path: 'createPost/:id',
    component: CreatePostComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
