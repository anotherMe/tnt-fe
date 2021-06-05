export class Task {

  private name :string = "";
  private description :string = "";
  private begin :Date = new Date();
  private end :Date = new Date();

  constructor (name :string) {
    this.name = name;
  }
}
