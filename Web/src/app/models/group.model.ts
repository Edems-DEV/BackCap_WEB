export class Group {
  public id: number;
  public name: string;
  //description: string;
  //machines: MachineName[];
  //configs: ConfigName[];

  public constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
