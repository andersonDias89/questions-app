// src/db/typeOrm.migrations-config.ts

import { DataSource } from 'typeorm';
import { join } from 'path';
import { Question } from './entities/question.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '123123',
  database: process.env.DB_NAME || 'mydb',
  entities: [Question], // ← isso é essencial
  migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
  synchronize: false,
});
