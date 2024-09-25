import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  create() {
    return true;
  }
  findOne(token: string) {
    console.log(token);
    const user = new User();
    return user;
  }
  update() {
    return true;
  }
  delete() {
    return true;
  }
}
