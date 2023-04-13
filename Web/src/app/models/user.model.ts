// export class User {
//   id: number = 0;
//   name: string = '';
//   password: string = ''; //del
//   email: string = '';
//   interval_Report: string = '';
// }

export class User {
  public id: number = 0;
  public name: string = '';
  public email: string = '';
  public interval_Report: string = '';

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
