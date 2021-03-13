import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job-table',
  templateUrl: './job-table.component.html',
  styleUrls: ['./job-table.component.css']
})
export class JobTableComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobService: JobsService) {

  }

  ngOnInit(): void {
    this.jobService.getJobs()
      .subscribe(jobs => this.jobs = jobs);
  }

}
