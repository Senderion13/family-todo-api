import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from 'src/config/data-source';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({ ...dataSource }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
