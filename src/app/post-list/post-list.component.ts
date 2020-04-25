import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  posts: any[];
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.appareilSubscription = this.postService.postsSubject.subscribe(
      (appareils: any[]) => {
        this.posts = appareils;
      }
    );
    this.postService.emitPostSubject();
  }
}
