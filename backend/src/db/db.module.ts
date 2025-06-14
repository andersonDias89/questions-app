// src/db/db.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Question } from './entities/question.entity';

@Module({
  imports: [
    ConfigModule, // Garante que o ConfigService estará disponível
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASS'),
        database: config.get('DB_NAME'),
        entities: [Question], // ← isso é essencial
        migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
        synchronize: false,
        migrationsRun: true,
      }),
    }),
  ],
})
export class DbModule {}
