import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Res } from '@nestjs/common';
import { Response } from 'express';
import cookieTypes from 'src/constants/cookieTypes';
import { User } from './entity/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async findOne(@Res() response: Response): Promise<User> {
    return this.userService.findOne(response.cookie[cookieTypes.TOKEN]);
  }
}
