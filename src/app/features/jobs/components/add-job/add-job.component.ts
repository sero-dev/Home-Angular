import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddJobModalComponent } from '../add-job-modal/add-job-modal.component';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  open(): void {
    this.modalService.open(AddJobModalComponent);
  }

  ngOnInit(): void {
  }

}
