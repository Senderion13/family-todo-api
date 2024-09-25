import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from '../../task/entity/task.entity';
import { User } from '../../user/entity/user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Token {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  accessToken: string;

  @Field()
  @Column()
  refreshToken: string;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.id)
  user: User;

  //   @Field()
  //   @Column()
  //   userId: number;
}
