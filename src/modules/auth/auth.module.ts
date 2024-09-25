import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
