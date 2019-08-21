export class Post {
  id: number;
  title: string;
  content: string;
  numberLike: number;
  numberDislike: number;
  createdAt: Date;

  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.numberLike = 0;
    this.numberDislike = 0;
    this.createdAt = new Date();
  }
}

