enum Temperament {
  Aggresive, Submissive, Energetic, Playful, Strong,
}

export class Dog {
  constructor(
    public id: string,
    public name: string,
    public breed: string,
    public description: string,
    public temperament: Temperament[]
  ) {}
}
