export class NewJob {
  constructor (
    public jobTitle: string,
    public employer: string,
    public city: string,
    public state: string,
    public status: string,
    public dateLastUpdated: string,
    public minSalary: number,
    public maxSalary: number) {}
}
