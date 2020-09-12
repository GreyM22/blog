import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts-landing-page/posts-landing-page.module').then( m => m.PostLandingPageModule),
  },
  {
    path: 'posts/:id',
    loadChildren: () => import('./posts/post/post.module').then( m => m.PostModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
