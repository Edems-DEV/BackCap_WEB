export interface name {
  id: number;
  name: string;
}

export interface MachineName extends name {
  id: number;
  name: string;
}

export interface GroupName extends name {
  id: number;
  name: string;
}

export interface ConfigName extends name {
  id: number;
  name: string;
}

export interface Source extends name {
  id: number;
  name: string;
}

export interface Destination extends name {
  id: number;
  name: string;
}
//----------------------------------
export interface Path extends name {
  id: number;
  name: string;
}
