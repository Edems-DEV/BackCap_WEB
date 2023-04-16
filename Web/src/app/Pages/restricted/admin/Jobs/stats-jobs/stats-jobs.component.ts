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
    this.jobsService.count_running().subscribe((jobRunning) => {
      this.jobRunning = jobRunning;
    });
    this.jobsService.count_waiting().subscribe((jobWaiting) => {
      this.jobWaiting = jobWaiting;
    });
    this.jobsService.count_succesfull().subscribe((jobSuccessful) => {
      this.jobSuccessful = jobSuccessful;
    });
    this.jobsService.count_warning().subscribe((jobWarning) => {
      this.jobWarning = jobWarning;
    });
    this.jobsService.count_failed().subscribe((jobFailed) => {
      this.jobFailed = jobFailed;
    });
  }
}
