import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  getUser(token: string) {
    console.log(token);
    return this.userService.findOne(token);
  }
}
