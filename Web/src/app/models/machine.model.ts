import { ConfigName, GroupName } from './names.model';

export class Machine {
  public id: number;
  public name: string;
  public description: string;
  public ip_Address: string;
  public is_Active: boolean;
  public config: ConfigName[];
  public groups: GroupName[];

  public constructor(
    id: number,
    name: string,
    description: string,
    ip_Address: string,
    is_Active: boolean,
    config: ConfigName[],
    groups: GroupName[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ip_Address = ip_Address;
    this.is_Active = is_Active;
    this.config = config;
    this.groups = groups;
  }
}
