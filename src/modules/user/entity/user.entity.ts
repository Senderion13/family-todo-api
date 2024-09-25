import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Topic } from '../../topic/entity/topic.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field(() => [Topic], { nullable: 'items' })
  @OneToMany(() => Topic, (topic) => topic.id)
  subscriptions: Topic[];
}
