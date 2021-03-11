import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListResponse } from '../../../core/models/list-response.model';
import { NewJob } from '../models/newJob.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<ListResponse<Job>>('https://localhost:5001/api/Jobs').pipe(
      map(value => value.data)
    );
  }

  postJobs(Job: NewJob) {
    return this.http.post('https://localhost:5001/api/AddJobs', {
      jobTitle: Job.jobTitle,
      employer: Job.employer,
      city: Job.city,
      state: Job.state,
      status: Job.status,
      dateLastUpdated: Job.dateLastUpdated,
      minSalary: Job.minSalary,
      maxSalary: Job.maxSalary
    }).subscribe(
        () => {
          console.log('Recording completed !');
          return 200;
        },
        (error) => {
          console.log('Error ! : ' + error);
          return 401;
        }
      );
  }
}
