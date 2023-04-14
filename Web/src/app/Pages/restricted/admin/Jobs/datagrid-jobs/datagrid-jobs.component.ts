import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//-----------------------------------------------------------
import { Job } from 'src/app/models/job.model';
import { JobsService } from 'src/app/services/jobs/jobs.service';
//-----------------------------------------------------------
import { FormJobEditComponent } from 'src/app/Pages/restricted/admin/Jobs/forms/form-job-edit/form-job-edit.component';
//import { FormJobCreateComponent } from 'src/app/Pages/restricted/admin/Jobs/forms/form-job-create/form-job-create.component';

@Component({
  selector: 'app-datagrid-jobs',
  templateUrl: './datagrid-jobs.component.html',
  styleUrls: ['./datagrid-jobs.component.scss'],
})
export class DatagridJobsComponent {
  public jobs: Job[];

  public constructor(
    private service: JobsService,
    private modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    console.log('ngOnInit()');
    this.refresh();
  }

  //Modal data: Job
  // public createJob(): void {
  //   this.modalService.open(FormJobCreateComponent, { centered: true });
  // }

  public editJob(job: Job): void {
    const modalRef = this.modalService.open(FormJobEditComponent, {
      centered: true,
    });
    modalRef.componentInstance.job = job;
    modalRef.componentInstance.title = 'Edit';
  }

  public deleteJob(job: Job): void {
    this.service.delete(job).subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.jobs = result));
  }
}
