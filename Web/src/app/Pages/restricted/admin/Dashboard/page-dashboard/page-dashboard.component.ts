import { Component } from '@angular/core';
import { MachinesService } from 'src/app/services/machines/machines.service';
import { ConfigsService } from 'src/app/services/configs/configs.service';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { UsersService } from 'src/app/services/users/users.service';
import { JobsService } from 'src/app/services/jobs/jobs.service';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss'],
})
export class PageDashboardComponent {
  constructor(
    private machinesService: MachinesService,
    private configsService: ConfigsService,
    private groupsService: GroupsService,
    private usersService: UsersService,
    private jobsService: JobsService
  ) {}

  pcActive: number = 0;
  pcDisable: number = 0;
  configs: number = 0;
  groups: number = 0;
  users: number = 0;
  jobs: number = 0;

  ngOnInit() {
    this.machinesService.countActive().subscribe((pcActive) => {
      this.pcActive = pcActive;
    });
    this.machinesService.countDisable().subscribe((pcDisable) => {
      this.pcDisable = pcDisable;
    });
    this.configsService.count().subscribe((configs) => {
      this.configs = configs;
    });
    this.groupsService.count().subscribe((groups) => {
      this.groups = groups;
    });
    this.usersService.count().subscribe((users) => {
      this.users = users;
    });
    this.jobsService.count().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }
}
