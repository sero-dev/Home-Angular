import {Injectable} from '@angular/core';
import {Job} from '../models/job.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ListResponse} from '../../../core/models/list-response.model';
import {NewJob} from '../models/newJob.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<ListResponse<any>>('https://localhost:5001/api/Jobs').pipe(
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

  postJobs(newJob: NewJob): void {
    this.http.post('https://localhost:5001/api/Jobs', {
      jobTitle: newJob.jobTitle,
      employer: newJob.employer,
      city: newJob.city,
      state: newJob.state,
      status: newJob.status,
      dateLastUpdated: newJob.dateLastUpdated,
      minSalary: newJob.minSalary,
      maxSalary: newJob.maxSalary
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
