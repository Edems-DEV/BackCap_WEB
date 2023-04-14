export class User {
  public id: number;
  public email: string;
  public name: string;
  public password: string; //delete this?
  public interval_Report: string;

  public constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    interval_Report: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.interval_Report = interval_Report;
  }
}
