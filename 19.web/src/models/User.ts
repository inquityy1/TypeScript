interface UserProps {
  name: string;
  age: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }
}

new User({ name: "asdf", age: 20 });
