import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostLandingPageComponent } from "./posts-landing-page.component";

const routes: Routes = [
  {
    path: "",
    component: PostLandingPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostLandingPageRoutingModule {}
