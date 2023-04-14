//convert this json into a class
// "id": 1,
//     "name": "PC10",
//     "description": "",
//     "os": "Win",
//     "ip_Address": "154.251.15.1",
//     "mac_Address": "1425142625",
//     "is_Active": true

export class Machine {
  public id: number;
  public name: string;
  public description: string;
  public os: string;
  public ip_Address: string;
  public mac_Address: string;
  public is_Active: boolean;

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
