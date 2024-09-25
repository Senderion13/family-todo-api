import { DataSourceOptions } from 'typeorm';

export const dataSource: DataSourceOptions = {
  type: 'postgres',
  port: 5432,
  password: '13032004',
  username: 'senderion',
  database: 'family-todo',
  entities: [__dirname + '/src/modules/**/*.entity.ts'],
  migrations: [__dirname + '/src/modules/database/migrations/*.ts'],
};
