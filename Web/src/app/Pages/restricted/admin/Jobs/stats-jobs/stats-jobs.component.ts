import { Component } from '@angular/core';
import { JobsService } from 'src/app/services/jobs/jobs.service';

@Component({
  selector: 'app-stats-jobs',
  templateUrl: './stats-jobs.component.html',
  styleUrls: ['./stats-jobs.component.scss'],
})
export class StatsJobsComponent {
  jobRunning: number = 0;
  jobWaiting: number = 0;
  jobSuccessful: number = 0;
  jobWarning: number = 0;
  jobFailed: number = 0;

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.jobsService.count().subscribe((jobRunning) => {
      this.jobRunning = jobRunning;
      console.log(jobRunning);
    });
    this.jobsService.count().subscribe((jobWaiting) => {
      this.jobWaiting = jobWaiting;
      console.log(jobWaiting);
    });
    this.jobsService.count().subscribe((jobSuccessful) => {
      this.jobSuccessful = jobSuccessful;
      console.log(jobSuccessful);
    });
    this.jobsService.count().subscribe((jobWarning) => {
      this.jobWarning = jobWarning;
      console.log(jobWarning);
    });
    this.jobsService.count().subscribe((jobFailed) => {
      this.jobFailed = jobFailed;
      console.log(jobFailed);
    });
    //implement when api is ready
  }
}
