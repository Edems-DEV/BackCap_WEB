export class Machine {
  public id: number;
  public name: string;
  public description: string;
  public os: string;
  public ip_Address: string;
  public mac_Address: string;
  public is_Active: boolean;
  //groups
  //configs

  public constructor(
    id: number,
    name: string,
    description: string,
    os: string,
    ip_Address: string,
    mac_Address: string,
    is_Active: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.os = os;
    this.ip_Address = ip_Address;
    this.mac_Address = mac_Address;
    this.is_Active = is_Active;
  }
}
