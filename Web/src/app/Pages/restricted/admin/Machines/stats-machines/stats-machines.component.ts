import { Component } from '@angular/core';
import { MachinesService } from 'src/app/services/machines/machines.service';

@Component({
  selector: 'app-stats-machines',
  templateUrl: './stats-machines.component.html',
  styleUrls: ['./stats-machines.component.scss'],
})
export class StatsMachinesComponent {
  pcActive: number = 0;
  pcDisable: number = 0;
  pcAll: number = 0;

  constructor(private machinesService: MachinesService) {}

  ngOnInit() {
    this.machinesService.countActive().subscribe((pcActive) => {
      this.pcActive = pcActive;
    });
    this.machinesService.countDisable().subscribe((pcDisable) => {
      this.pcDisable = pcDisable;
    });
    this.machinesService.count().subscribe((pcAll) => {
      this.pcAll = pcAll;
    });
  }
}
