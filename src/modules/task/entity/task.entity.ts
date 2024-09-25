import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Topic } from '../../topic/entity/topic.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Task {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  desc: string;

  @Field(() => Topic)
  @ManyToOne(() => Topic, (topic) => topic.id)
  theme: Topic;
}
