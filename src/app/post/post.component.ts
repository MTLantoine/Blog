import { Component, OnInit, Input } from "@angular/core";
import { PostService } from "../services/post.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  @Input() loveIts: number;
  @Input() index: number;

  constructor(private postService: PostService) {}

  ngOnInit() {}

  onLike() {
    this.loveIts = 1;
  }

  onDislike() {
    this.loveIts = -1;
  }

  onDontCare() {
    this.loveIts = 0;
  }

  onDelete() {
    this.postService.removePost(this.index);
  }
}
