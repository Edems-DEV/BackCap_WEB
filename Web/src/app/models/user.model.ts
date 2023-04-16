export class User {
  public id: number;
  public email: string;
  public name: string;
  public interval_Report: string;

  public constructor(
    id: number,
    name: string,
    email: string,
    interval_Report: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.interval_Report = interval_Report;
  }
}

export class User_PSW {
  public id: number;
  public email: string;
  public name: string;
  public interval_Report: string;
  public password: string;

  public constructor(user: User, password: string) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.interval_Report = user.interval_Report;
    this.password = password;
  }
}
