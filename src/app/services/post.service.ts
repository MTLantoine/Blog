import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  postsSubject = new Subject<any[]>();

  countLike = 0;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 1);
  });

  // <!-- rendre la date dynamique -->

  constructor() {}

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string, created_at: Promise<any>) {
    const postObject = {
      id: 0,
      title: "",
      content: "",
      loveIts: this.countLike,
      created_at: null
    };
    postObject.title = title;
    postObject.content = content;
    if (this.posts.length === 0) {
      postObject.id = 0;
    } else {
      postObject.id = this.posts[this.posts.length - 1].id + 1;
    }
    postObject.created_at = created_at;
    this.posts.push(postObject);
    this.emitPostSubject();
  }

  removePost(id: number) {
    this.posts.splice(id, 1);
    this.emitPostSubject();
  }

  posts = [
    {
      id: 1,
      title: "Mon premier post",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus ipsa corporis autem ex sapiente rem quis? Dicta temporibus quasi ab consectetur itaque cumque illo aliquam dolorem inventore quam! Minima!",
      loveIts: this.countLike,
      created_at: this.lastUpdate
    },
    {
      id: 2,
      title: "Mon deuxième post",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus ipsa corporis autem ex sapiente rem quis? Dicta temporibus quasi ab consectetur itaque cumque illo aliquam dolorem inventore quam! Minima!",
      loveIts: this.countLike,
      created_at: this.lastUpdate
    },
    {
      id: 3,
      title: "Mon troisième post",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus ipsa corporis autem ex sapiente rem quis? Dicta temporibus quasi ab consectetur itaque cumque illo aliquam dolorem inventore quam! Minima!",
      loveIts: this.countLike,
      created_at: this.lastUpdate
    },
    {
      id: 4,
      title: "Aller, un dernier",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus ipsa corporis autem ex sapiente rem quis? Dicta temporibus quasi ab consectetur itaque cumque illo aliquam dolorem inventore quam! Minima!",
      loveIts: this.countLike,
      created_at: this.lastUpdate
    }
  ];
}
