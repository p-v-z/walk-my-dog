import { Dog } from './dog.model';

export class User {
  public id: string;
  public dogs: Dog[];

  constructor(
    public email: string,
    public name: string,
    public surname: string,
  ) {}
}
