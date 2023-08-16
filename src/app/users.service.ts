import { Injectable } from '@angular/core';

interface UserType {
  name: string;
  email: string;
  age: number;
  indian: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  userData() {
    const data: UserType[] = [
      {
        name: 'Bruce',
        email: 'bruce@test.com',
        age: 32,
        indian: false,
      },
    ];
    return data;
  }
}
