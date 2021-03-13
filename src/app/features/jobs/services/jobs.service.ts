import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListResponse } from '../../../core/models/list-response.model';
import { NewJob } from '../models/newJob.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private readonly baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.jobHunt.baseUrl;
  }

  getJobs(): Observable<Job[]> {
    const endpoint = `${this.baseUrl}/api/Jobs`;
    return this.http.get<ListResponse<any>>(endpoint).pipe(
      map(value => {
        return value.data.map<Job>(response => {
          const job = new Job();
          job.jobTitle = response.jobTitle;
          job.employer = response.employer;
          job.city = response.city;
          job.state = response.state;
          job.status = response.status;
          job.dateLastUpdated = new Date(response.dateLastUpdated);
          return job;
        });
      })
    );
  }

  createNewJob(newJob: NewJob): Observable<any> {
    const endpoint = `${this.baseUrl}/api/Jobs`;
    return this.http.post(endpoint, {
      jobTitle: newJob.jobTitle,
      employer: newJob.employer,
      city: newJob.city,
      state: newJob.state,
      status: newJob.status,
      dateLastUpdated: newJob.dateLastUpdated,
      minSalary: newJob.minSalary,
      maxSalary: newJob.maxSalary
    }, {responseType: 'text'});
  }
}
