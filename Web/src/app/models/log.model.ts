export class Log {
  public id: number;
  public id_Job: number;
  public message: string;
  public time: string;
  public job: string;

  //status
  //target (PC,GROUP)

  public constructor(
    id: number,
    id_Job: number,
    message: string,
    time: string,
    job: string
  ) {
    this.id = id;
    this.id_Job = id_Job;
    this.message = message;
    this.time = time;
    this.job = job;
  }
}
