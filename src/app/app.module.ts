import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostService } from "./services/post.service";
import { PostComponent } from "./post/post.component";
import { PostListComponent } from "./post-list/post-list.component";
import { Routes, RouterModule } from "@angular/router";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";
import { NewPostComponent } from "./new-post/new-post.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "", component: PostListComponent },
  { path: "posts", component: PostListComponent },
  { path: "new-post", component: NewPostComponent },
  { path: "not-found", component: FourOhFourComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    FourOhFourComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
