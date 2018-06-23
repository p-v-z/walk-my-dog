import { Dog } from './dog.model';

export class User {
  constructor(
    public id: string,
    public name: string,
    public dogs: Dog[],
  ) {}
}
