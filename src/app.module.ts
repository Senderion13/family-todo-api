import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TopicModule } from './modules/topic/topic.module';
import { TaskModule } from './modules/task/task.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
    TopicModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
