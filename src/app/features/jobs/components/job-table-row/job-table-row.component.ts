import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
  selector: '[app-job-table-row]',
  templateUrl: './job-table-row.component.html',
  styleUrls: ['./job-table-row.component.css']
})
export class JobTableRowComponent implements OnInit {

  @Input() job: Job;

  ngOnInit(): void {
  }
}
