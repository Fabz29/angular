export class Post {
  private title: string;
  private content: string;
  private numberLike: number;
  private numberDislike: number;
  private createdAt: Date;

  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.numberLike = 0;
    this.numberDislike = 0;
    this.createdAt = new Date();
  }

  addLike() {
    this.numberLike++;
  }

  addDislike() {
    this.numberDislike++;
  }
}

