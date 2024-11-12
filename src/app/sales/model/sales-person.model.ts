export class SalesPerson {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public salesVolume: number,
    public isDeleting: boolean = false
  ) {}
}
