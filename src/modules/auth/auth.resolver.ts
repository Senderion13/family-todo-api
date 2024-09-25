import { Context, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Req } from '@nestjs/common';
import { Request } from 'express';
import cookieTypes from 'src/constants/cookieTypes';
import { User } from '../user/entity/user.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Query(() => User)
  async getUser(@Context() context: any): Promise<User> {
    return this.authService.getUser(context.req.cookies[cookieTypes.TOKEN]);
  }
}
