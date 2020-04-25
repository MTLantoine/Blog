import { Component, OnInit, Input } from "@angular/core";
import { PostService } from "./services/post.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  posts: any[];
  @Input() isClicked: boolean;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.posts;
  }

  onClick() {
    this.isClicked = true;
  }
}
