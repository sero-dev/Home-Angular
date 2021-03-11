import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
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

  initForm() {
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

  onSubmitForm() {
    const formValue = this.jobForm.value;
    const newJob = new NewJob(
    formValue['title'],
    formValue['employer'],
    formValue['city'],
    formValue['state'],
    formValue['status'],
    new Date().toDateString(),
    formValue['minSalary'],
    formValue['maxSalary'],
    );
    this.jobService.postJobs(newJob);
  }

  close() {
    this.activeModal.close();
  }

}
