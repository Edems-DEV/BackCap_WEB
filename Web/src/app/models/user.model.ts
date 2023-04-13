export class User {
  public id: number = 0;
  public name: string = '';
  public email: string = '';
  public interval: string = '';

  public constructor(
    id: number,
    name: string,
    email: string,
    interval_Report: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.interval = interval_Report;
  }
}
