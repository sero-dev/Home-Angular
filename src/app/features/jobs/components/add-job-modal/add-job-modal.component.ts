import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NewJob } from '../../models/newJob.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-add-job-modal',
  templateUrl: './add-job-modal.component.html',
  styleUrls: ['./add-job-modal.component.css']
})
export class AddJobModalComponent implements OnInit {

  jobForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private jobService: JobsService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.jobForm = this.formBuilder.group( {
      title: ['', [Validators.required]],
      employer: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      status: ['', [Validators.required]],
      minSalary: [''],
      maxSalary: ['']
    });
  }

  onSubmitForm(): void {
    const formValue = this.jobForm.value;
    const newJob = new NewJob();
    newJob.jobTitle = formValue.title;
    newJob.employer = formValue.employer;
    newJob.city = formValue.city;
    newJob.state = formValue.state;
    newJob.status = formValue.status;
    newJob.dateLastUpdated = new Date();
    newJob.minSalary = formValue.minSalary;
    newJob.maxSalary = formValue.maxSalary;
    this.jobService.postJobs(newJob);
  }

  close(): void {
    this.activeModal.close();
  }

}
