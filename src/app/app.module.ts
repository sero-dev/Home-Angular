import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobsComponent } from './features/jobs/jobs.component';
import { JobTableComponent } from './features/jobs/components/job-table/job-table.component';
import { JobTableRowComponent } from './features/jobs/components/job-table-row/job-table-row.component';
import { AddJobComponent } from './features/jobs/components/add-job/add-job.component';
import { AddJobModalComponent } from './features/jobs/components/add-job-modal/add-job-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobTableComponent,
    JobTableRowComponent,
    AddJobComponent,
    AddJobModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
