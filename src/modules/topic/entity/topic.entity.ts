import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from '../../task/entity/task.entity';
import { User } from '../../user/entity/user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Topic {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => [Task], { nullable: 'items' })
  @OneToMany(() => Task, (task) => task.id)
  tasks: Task[];

  @Field(() => [User])
  @OneToMany(() => User, (user) => user.id)
  users: User[];
}
